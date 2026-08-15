import { NextResponse } from 'next/server';
import getGuideData from '../../../data/life/guides-loader.js';
import guideIndex from '../../../data/life/guide-index.js';
import { getAppGuideData } from '../../../data/life/app-guides-loader.js';
import { detectIntent, extractRouteInfo, extractPOIInfo, formatRouteContext, formatPOIContext } from '../../../lib/tool-router.js';
import { queryRoutes, searchPOI } from '../../../lib/amap-route.js';
import { searchPrices, formatPriceContext, estimateMonthlyBudget } from '../../../data/price-database.js';
import { convertCurrency, extractCurrencyInfo, formatExchangeContext } from '../../../lib/exchange-rate.js';

// DeepSeek API Key - 优先从环境变量读取，fallback到硬编码（临时方案）
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || 'sk-51b6e3db1c85457daef0f57a4c94cb65';

/**
 * AI Chat API - 调用 DeepSeek 生成回答
 * 
 * 升级方案：支持工具调用（高德地图路线/POI搜索）+ 指南知识库
 * 
 * 流程：
 * 1. 检测用户意图（路线/POI/天气/汇率/通用）
 * 2. 如果需要实时数据 → 调用对应API获取
 * 3. 第一次LLM调用 → 选择相关指南 + 初步分析
 * 4. 拉取指南完整内容 + 工具数据
 * 5. 第二次LLM调用 → 基于真实数据生成精准回答
 * 
 * Body: { messages, locale, guideMeta[] }
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { messages, locale, guideMeta } = body;

    const lang = locale || 'zh';
    const langNames = { zh: '中文', en: 'English', ru: 'Русский' };
    const langName = langNames[lang] || '中文';

    // 获取用户最新消息（用于意图检测）
    const lastUserMessage = [...(messages || [])].reverse().find(m => m.role === 'user');
    const userQuery = lastUserMessage?.content || '';

    // === Step 1: 意图检测 ===
    const intentResult = detectIntent(userQuery);
    let toolContext = ''; // 工具获取的真实数据

    // === Step 2: 根据意图调用工具获取实时数据 ===
    if (intentResult.intent === 'route' || intentResult.allIntents.includes('route')) {
      // 路线查询：先用 DeepSeek 提取起终点
      const routeInfo = await extractRouteInfo(userQuery, DEEPSEEK_API_KEY);
      if (routeInfo?.origin && routeInfo?.destination) {
        const routeData = await queryRoutes(routeInfo.origin, routeInfo.destination, routeInfo.city);
        toolContext = formatRouteContext(routeData);
      }
    }

    if (intentResult.intent === 'poi' || intentResult.allIntents.includes('poi')) {
      // POI 搜索
      const poiInfo = await extractPOIInfo(userQuery, DEEPSEEK_API_KEY);
      if (poiInfo?.keyword) {
        const poiData = await searchPOI(poiInfo.keyword, {
          city: poiInfo.city,
          address: poiInfo.location,
        });
        toolContext = (toolContext ? toolContext + '\n\n' : '') + formatPOIContext(poiData);
      }
    }

    if (intentResult.intent === 'price' || intentResult.allIntents.includes('price')) {
      // 物价查询：从本地物价数据库获取真实数据
      const priceContext = formatPriceContext(userQuery);
      
      // 检测是否是生活费/预算问题 → 额外提供月度估算
      const budgetKeywords = ['生活费', '一个月', '每月', '月开销', '月费用', '预算', '总开销', '一个月花', 'monthly', 'budget', 'расход', 'бюджет'];
      const isBudgetQuery = budgetKeywords.some(k => userQuery.includes(k));
      
      if (isBudgetQuery) {
        // 尝试识别城市
        const cityMatch = userQuery.match(/(北京|上海|广州|深圳|青岛|成都|武汉|南京|杭州|西安|天津|重庆|长沙|大连|厦门)/);
        const city = cityMatch ? cityMatch[1] : '二线城市';
        const budget = estimateMonthlyBudget(city);
        const budgetText = `\n\n📊 ${city}月度生活费估算：\n总计约 ${budget.total}\n${budget.breakdown}`;
        toolContext = (toolContext ? toolContext + '\n\n' : '') + priceContext + budgetText;
      } else if (priceContext) {
        toolContext = (toolContext ? toolContext + '\n\n' : '') + priceContext;
      }
    }

    if (intentResult.intent === 'exchange' || intentResult.allIntents.includes('exchange')) {
      // 汇率查询：提取货币信息并转换
      const currencyInfo = extractCurrencyInfo(userQuery);
      if (currencyInfo) {
        const exchangeData = await convertCurrency(currencyInfo.amount, currencyInfo.from, currencyInfo.to);
        if (exchangeData) {
          const exchangeText = formatExchangeContext(exchangeData);
          toolContext = (toolContext ? toolContext + '\n\n' : '') + exchangeText;
        }
      }
    }

    // === Step 3: 构建指南目录 + 系统提示词 ===
    const metaList = guideMeta || guideIndex.map(g => ({
      id: g.id,
      category: g.category,
      icon: g.icon,
      title: g.title?.[lang] || g.title?.zh || g.id,
      summary: g.summary?.[lang] || g.summary?.zh || '',
      tags: g.tags || [],
    }));

    const catalogLines = metaList.map(g =>
      `- [${g.id}] ${g.icon} ${g.title}：${g.summary}${g.tags?.length ? ` (关键词: ${g.tags.join(', ')})` : ''}`
    ).join('\n');

    const systemPrompt = buildSystemPrompt(langName, catalogLines, !!toolContext);

    // === Step 4: 第一次 LLM 调用 ===
    const enhancedMessages = buildEnhancedMessages(messages, lang);

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          ...enhancedMessages,
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('DeepSeek API error:', response.status, errText);
      return NextResponse.json({
        reply: lang === 'en'
          ? 'AI service is temporarily unavailable. Please try again later.'
          : lang === 'ru'
            ? 'ИИ-сервис временно недоступен. Попробуйте позже.'
            : `AI服务暂时不可用，请稍后再试。`,
      }, { status: 502 });
    }

    const data = await response.json();
    let reply = data.choices?.[0]?.message?.content || getDefaultReply(lang);

    // === Step 5: 解析指南选择 ===
    const { selectedIds, cleanReply } = parseSelectedGuides(reply);

    // === Step 6: 拉取指南内容 + App指南 ===
    let sourceGuides = [];
    let sourceApps = [];
    let fullContext = '';

    if (selectedIds.length > 0) {
      const contextParts = [];
      const collectedAppIds = new Set();

      for (const guideId of selectedIds) {
        const guide = getGuideData(guideId);
        if (guide) {
          contextParts.push(formatGuideFullContext(guide, lang));
          sourceGuides.push({
            id: guide.id,
            category: guide.category,
            icon: guide.icon,
            title: guide.title?.[lang] || guide.title?.zh || guide.id,
            href: `/${lang}/life/${guide.category}/${guide.id}`,
          });
          if (guide.apps?.length) {
            guide.apps.forEach(appId => collectedAppIds.add(appId));
          }
        }
      }

      const appContextParts = [];
      for (const appId of collectedAppIds) {
        const appGuide = getAppGuideData(appId);
        if (appGuide) {
          appContextParts.push(formatAppGuideContext(appGuide, lang));
          sourceApps.push({
            id: appGuide.id,
            icon: appGuide.icon || '📱',
            title: appGuide.title?.[lang] || appGuide.title?.zh || appGuide.id,
            desc: appGuide.desc?.[lang] || appGuide.desc?.zh || '',
            href: `/${lang}/life/apps/${appGuide.id}`,
          });
        }
      }

      const guideContext = contextParts.join('\n\n---\n\n');
      const appContext = appContextParts.length > 0
        ? '\n\n=== 相关 App 使用指南 ===\n' + appContextParts.join('\n\n---\n\n')
        : '';
      fullContext = guideContext + appContext;
    }

    // 合并工具数据 + 指南数据
    const combinedContext = [toolContext, fullContext].filter(Boolean).join('\n\n===\n\n');

    // === Step 7: 如果有上下文（工具数据或指南），第二次调用生成精准回答 ===
    if (combinedContext) {
      const refinedReply = await generateRefinedAnswer(
        messages, lang, langName, combinedContext, selectedIds, intentResult.intent, !!toolContext
      );
      if (refinedReply) {
        reply = refinedReply;
      }
    }

    // === Step 8: 追加来源链接 ===
    let sourcesText = '';
    const allSources = [...sourceGuides, ...sourceApps];
    if (allSources.length > 0) {
      const guideLabel = lang === 'en' ? '📖 Related Guides:' : lang === 'ru' ? '📖 Полезные гайды:' : '📖 相关指南：';
      const appLabel = lang === 'en' ? '📱 Related Apps:' : lang === 'ru' ? '📱 Полезные приложения:' : '📱 相关App：';
      const guideLinks = sourceGuides.length > 0
        ? '\n\n---\n' + guideLabel + '\n' + sourceGuides.map(g => `- ${g.icon} [${g.title}](${g.href})`).join('\n')
        : '';
      const appLinks = sourceApps.length > 0
        ? '\n\n' + appLabel + '\n' + sourceApps.map(a => `- ${a.icon} [${a.title}](${a.href})`).join('\n')
        : '';
      sourcesText = guideLinks + appLinks;
    }

    // 如果有路线数据，追加地图链接
    if (intentResult.intent === 'route' && toolContext) {
      sourcesText += '\n\n---\n🗺️ 数据来源：高德地图（实时数据）';
      sourcesText += '\n📱 更多路线详情请在高德地图App中查看';
    }

    // 如果有物价数据，追加来源标注
    if (intentResult.intent === 'price' && toolContext) {
      sourcesText += '\n\n---\n💰 价格数据来源：鹿鸣集生活指南数据库（基于135篇实地调研指南）';
    }

    // 如果有汇率数据，追加来源标注
    if (intentResult.intent === 'exchange' && toolContext) {
      sourcesText += '\n\n---\n💱 汇率数据来源：ExchangeRate-API（实时汇率）';
    }

    return NextResponse.json({
      reply: reply + sourcesText,
      sources: allSources,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({
      reply: '抱歉，服务出现异常，请稍后再试。',
    }, { status: 500 });
  }
}

/**
 * 构建系统提示词
 */
function buildSystemPrompt(langName, catalogLines, hasToolData) {
  const toolSection = hasToolData ? `
## 🔧 实时数据工具
系统已为你调用高德地图API获取了实时数据（路线/周边搜索结果）。
请在回答中优先使用这些真实数据，不要编造替代数据。
如果工具数据与你的训练数据冲突，以工具数据为准。
` : '';

  return `你是鹿鸣集（Luming集）的AI助手小鹿 🦌，专门帮助来华留学生解决在中国生活中遇到的各种问题。

## 你的人设
- 你像一个在中国生活多年的学长/学姐，经验丰富、热情但不啰嗦
- 回答务实，直接给操作步骤，不说空话套话
- 遇到重要细节会主动提醒（比如"记得带护照原件""这个步骤容易出错"）
- 偶尔会用轻松的语气，但不会过度卖萌
- 涉及金额、时间等关键信息时会特别标注

## 你的能力
你不只是回答文字，你能直接调用实时工具帮用户解决问题：
- 🗺️ 高德地图路线规划：直接给出真实的地铁/公交/打车路线、耗时、费用
- 📍 周边搜索：搜索附近的餐厅、超市、医院等
- 💰 物价数据库：从135篇生活指南中提取的真实价格数据，覆盖餐饮、交通、住房、医疗、通讯、娱乐等
- 📊 生活费估算：可按城市估算月度生活费
- 💱 汇率查询：实时汇率换算，支持人民币、美元、卢布、欧元等多种货币
- 📖 生活指南知识库：135篇详细指南覆盖来华生活各方面
- 📱 App使用指南：20个常用App的详细使用教程

## 你的知识来源
鹿鸣集有一套完整的生活指南系统。以下是所有可用指南的目录：

${catalogLines}
${toolSection}

## 回答规则
1. **先判断相关性**：仔细分析用户的问题，从上面目录中选出最相关的指南。回答开头第一行输出选中的指南ID，格式为：[GUIDES: id1, id2, ...]（如果没有相关指南则写 [GUIDES: none]）。这行不算入正式回答。
2. **有真实工具数据时**：优先使用工具返回的真实数据（路线、价格、POI等），这些数据来自高德地图API，是准确的实时信息。
3. **有指南时**：基于指南内容给出详细、准确的步骤指导。
4. **指南和工具都不够时**：可以补充通用知识，但要明确标注"⚠️ 以下为通用建议，建议核实"。
5. **语言**：始终使用${langName}回答。
6. **格式**：用分步骤、分要点的格式，简洁清晰。适当用 emoji 让回答更生动。
7. **长度**：控制在 300 字以内（除非问题确实复杂需要更长回答）。
8. **多轮对话**：注意上下文连贯，如果用户追问细节，聚焦回答具体问题。
9. **推荐App**：当涉及具体操作时，自然推荐对应的App并引导查看App指南。

## ⚠️ 反幻觉规则（极其重要！）
你必须严格遵守以下规则，绝不能编造事实：

1. **有工具数据时禁止覆盖**：如果系统提供了高德地图的真实路线数据，必须基于这些数据回答，不要用自己的"记忆"替换或补充。
2. **无工具数据时不编造路线**：如果没有工具数据，对于具体路线、换乘方案、站名顺序等，诚实说"具体路线建议打开高德地图查询"，不要凭记忆编。
3. **不确定时诚实说明**：直接说"这个信息我不太确定，建议..."，而不是编一个看似合理的答案。
4. **标注信息来源**：工具数据（可信）> 指南内容（可信）> 通用知识（需核实）。

## 📱 App 推荐
当用户的问题涉及某个 App 时，自然提及并引导查看详细使用指南（系统会在回复末尾自动附上链接）。常见场景：
- 出行导航 → 高德地图
- 打车 → 滴滴出行
- 支付 → 支付宝、微信
- 购物 → 淘宝、京东、拼多多
- 外卖 → 美团外卖、饿了么
- 火车/机票 → 12306、携程
- 社交/生活 → 小红书、大众点评、B站
- 通信 → 中国移动/联通/电信
- 快递 → 菜鸟
- 骑行 → 哈啰出行`;
}

/**
 * 构建增强消息
 */
function buildEnhancedMessages(messages, lang) {
  if (!messages?.length) return [];
  return messages
    .filter(m => m.role === 'user' || m.role === 'assistant')
    .slice(-10)
    .map(m => ({ role: m.role, content: m.content }));
}

/**
 * 解析 AI 回复中选中的指南 ID
 */
function parseSelectedGuides(reply) {
  const match = reply.match(/\[GUIDES:\s*([^\]]+)\]/);
  if (!match) return { selectedIds: [], cleanReply: reply };

  const idsStr = match[1].trim();
  const selectedIds = idsStr === 'none' 
    ? [] 
    : idsStr.split(',').map(s => s.trim()).filter(Boolean);
  
  const cleanReply = reply.replace(/\[GUIDES:\s*[^\]]*\]\s*\n?/, '').trim();
  
  return { selectedIds, cleanReply };
}

/**
 * 用完整上下文重新生成精准回答
 */
async function generateRefinedAnswer(messages, lang, langName, combinedContext, selectedIds, intent, hasToolData) {
  try {
    const toolNote = hasToolData 
      ? `\n\n## ⚡ 重要：系统已获取实时数据
下面的参考资料中包含来自高德地图API的真实路线/POI数据。
你必须严格基于这些真实数据回答用户，不要编造或覆盖。
如果路线数据中有多方案，帮用户分析各方案的优劣并给出推荐。`
      : '';

    const refinedPrompt = `你是鹿鸣集（Luming集）的AI助手小鹿 🦌，专门帮助来华留学生解决在中国生活中遇到的各种问题。

## 你的人设
- 像一个在中国生活多年的学长/学姐，经验丰富、热情但不啰嗦
- 回答务实，直接给操作步骤，不说空话套话
- 遇到重要细节会主动提醒
- 偶尔用轻松语气，不过度卖萌
- 涉及金额、时间等关键信息时特别标注

## 回答规则
1. 基于下面的参考资料回答问题。参考资料包含真实数据和指南内容，是最权威的信息来源。
2. 如果有工具返回的真实数据（如路线、价格、POI），优先使用这些数据，不要用你自己的记忆覆盖。
3. 如果参考资料不够，可以补充通用知识，但要标注"⚠️ 以下为通用建议，建议核实"。
4. 用${langName}回答。
5. 分步骤、分要点，简洁清晰，适当用 emoji。
6. 控制在 300 字以内（除非问题复杂需要更长）。
7. 注意上下文连贯，如果是追问就聚焦具体问题。
8. 不需要在开头输出 [GUIDES: ...] 标记了，直接回答即可。
9. 当涉及具体出行方案时，帮用户对比各方案的耗时、费用、舒适度，给出明确推荐。
10. 回答末尾自然推荐相关App（如路线问题推荐高德地图），但不需要编造App指南链接（系统会自动添加）。

## ⚠️ 反幻觉规则
1. 参考资料中的工具数据（高德地图API返回）→ 可直接引用，完全可信
2. 参考资料中的指南内容 → 可信，可直接引用
3. 参考资料中没有的信息 → 诚实说明"这个信息我不太确定"或标注"⚠️ 通用建议，建议核实"
4. 绝对不要编造具体的路线、价格、时间等数据${toolNote}

## 📱 App 推荐
参考资料中可能包含相关 App 的使用指南。当用户的问题涉及 App 时，自然提及并推荐查看详细使用指南。常见对应：出行→高德地图、打车→滴滴出行、支付→支付宝/微信、购物→淘宝/京东/拼多多、外卖→美团外卖/饿了么、火车→12306、社交→小红书/大众点评、通信→中国移动、快递→菜鸟、骑行→哈啰出行。

## 参考资料
${combinedContext}`;

    const refinedMessages = messages
      .filter(m => m.role === 'user' || m.role === 'assistant')
      .slice(-10)
      .map(m => ({ role: m.role, content: m.content }));

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: refinedPrompt },
          ...refinedMessages,
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) return null;
    const data = await response.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (e) {
    console.error('Refined answer error:', e);
    return null;
  }
}

/**
 * 格式化单个指南的完整上下文
 */
function formatGuideFullContext(guide, lang) {
  const parts = [];
  const title = guide.title?.[lang] || guide.title?.zh || guide.id;
  parts.push(`## ${guide.icon} ${title}`);
  parts.push(`分类: ${guide.category}`);

  if (guide.summary?.[lang]) {
    parts.push(`📝 ${guide.summary[lang]}`);
  }

  if (guide.intro?.[lang]) {
    parts.push(`\n【简介】\n${guide.intro[lang]}`);
  }

  if (guide.preparation?.[lang]) {
    parts.push(`\n【准备材料】\n${guide.preparation[lang].map((p, i) => `${i + 1}. ${p}`).join('\n')}`);
  }

  if (guide.steps?.length) {
    const stepsText = guide.steps.map((s, i) => {
      const sTitle = s.title?.[lang] || s.title?.zh || '';
      const sDesc = s.desc?.[lang] || s.desc?.zh || '';
      const sTip = s.tip?.[lang] || s.tip?.zh || '';
      let step = `**步骤 ${i + 1}：${sTitle}**\n${sDesc}`;
      if (sTip) step += `\n💡 提示：${sTip}`;
      return step;
    }).join('\n\n');
    parts.push(`\n【详细步骤】\n${stepsText}`);
  }

  if (guide.faq?.length) {
    const faqText = guide.faq.map(f => {
      const q = f.q?.[lang] || f.q?.zh || '';
      const a = f.a?.[lang] || f.a?.zh || '';
      return `Q: ${q}\nA: ${a}`;
    }).join('\n\n');
    parts.push(`\n【常见问题】\n${faqText}`);
  }

  return parts.join('\n');
}

/**
 * 格式化 App 指南上下文
 */
function formatAppGuideContext(appGuide, lang) {
  const parts = [];
  const title = appGuide.title?.[lang] || appGuide.title?.zh || appGuide.id;
  const icon = appGuide.icon || '📱';
  parts.push(`## ${icon} ${title}`);

  if (appGuide.desc?.[lang]) {
    parts.push(`📝 ${appGuide.desc[lang]}`);
  }

  if (appGuide.setupSteps?.length) {
    const stepsText = appGuide.setupSteps.map((s, i) => {
      const sTitle = s.title?.[lang] || s.title?.zh || '';
      const sDesc = s.desc?.[lang] || s.desc?.zh || '';
      const sTip = s.tip?.[lang] || s.tip?.zh || '';
      let step = `**步骤 ${i + 1}：${sTitle}**\n${sDesc}`;
      if (sTip) step += `\n💡 提示：${sTip}`;
      return step;
    }).join('\n\n');
    parts.push(`\n【使用步骤】\n${stepsText}`);
  }

  if (appGuide.coreFeatures?.length) {
    const featuresText = appGuide.coreFeatures.map(f => {
      const fTitle = f.title?.[lang] || f.title?.zh || '';
      const fDesc = f.desc?.[lang] || f.desc?.zh || '';
      return `• ${fTitle}：${fDesc}`;
    }).join('\n');
    parts.push(`\n【核心功能】\n${featuresText}`);
  }

  if (appGuide.faq?.length) {
    const faqText = appGuide.faq.map(f => {
      const q = f.q?.[lang] || f.q?.zh || '';
      const a = f.a?.[lang] || f.a?.zh || '';
      return `Q: ${q}\nA: ${a}`;
    }).join('\n\n');
    parts.push(`\n【常见问题】\n${faqText}`);
  }

  if (appGuide.tips?.length) {
    const tipsText = appGuide.tips.map(t => {
      return t?.[lang] || t?.zh || '';
    }).filter(Boolean).join('\n');
    if (tipsText) parts.push(`\n【实用技巧】\n${tipsText}`);
  }

  return parts.join('\n');
}

/**
 * 默认回复
 */
function getDefaultReply(lang) {
  if (lang === 'en') return 'Sorry, unable to generate a response.';
  if (lang === 'ru') return 'Извините, не удалось сгенерировать ответ.';
  return '抱歉，暂时无法生成回答。';
}
