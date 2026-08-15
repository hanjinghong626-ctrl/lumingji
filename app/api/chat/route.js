import { NextResponse } from 'next/server';
import getGuideData from '../../../data/life/guides-loader.js';
import guideIndex from '../../../data/life/guide-index.js';

// DeepSeek API Key - 优先从环境变量读取，fallback到硬编码（临时方案）
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || 'sk-51b6e3db1c85457daef0f57a4c94cb65';

/**
 * AI Chat API - 调用 DeepSeek 生成回答
 * 
 * 新方案：前端发送所有指南的元数据（标题+摘要），
 * DeepSeek 自己判断哪些指南相关，再拉取完整内容生成回答。
 * 不再依赖前端关键词匹配，语义理解能力大幅提升。
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

    // 构建指南目录（所有指南的 id + 标题 + 摘要）
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

    // 构建系统提示词
    const systemPrompt = buildSystemPrompt(langName, catalogLines);

    // 先做第一次 LLM 调用：让 AI 选择相关指南 + 生成回答
    // 使用一个特殊的"指南选择"指令，让 AI 在回答前先输出选中的指南 ID
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

    // 解析 AI 选择的指南 ID（从 [GUIDES: xxx, yyy] 标记中提取）
    const { selectedIds, cleanReply } = parseSelectedGuides(reply);

    // 如果有选中的指南，拉取完整内容，追加为参考
    let sourceGuides = [];
    if (selectedIds.length > 0) {
      const contextParts = [];
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
        }
      }

      // 第二次调用：用完整内容重新生成更精准的回答
      if (contextParts.length > 0) {
        const fullContext = contextParts.join('\n\n---\n\n');
        const refinedReply = await generateRefinedAnswer(
          messages, lang, langName, fullContext, selectedIds
        );
        if (refinedReply) {
          reply = refinedReply;
        }
      }
    }

    // 追加来源链接
    let sourcesText = '';
    if (sourceGuides.length > 0) {
      const label = lang === 'en' ? '📖 Related Guides:' : lang === 'ru' ? '📖 Полезные гайды:' : '📖 相关指南：';
      sourcesText = '\n\n---\n' + label + '\n' +
        sourceGuides.map(g => `- ${g.icon} [${g.title}](${g.href})`).join('\n');
    }

    return NextResponse.json({
      reply: reply + sourcesText,
      sources: sourceGuides,
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
function buildSystemPrompt(langName, catalogLines) {
  return `你是鹿鸣集（Lumingji）的AI助手小鹿 🦌，专门帮助来华留学生解决在中国生活中遇到的各种问题。

## 你的人设
- 你像一个在中国生活多年的学长/学姐，经验丰富、热情但不啰嗦
- 回答务实，直接给操作步骤，不说空话套话
- 遇到重要细节会主动提醒（比如"记得带护照原件""这个步骤容易出错"）
- 偶尔会用轻松的语气，但不会过度卖萌
- 涉及金额、时间等关键信息时会特别标注

## 你的知识来源
鹿鸣集有一套完整的生活指南系统。以下是所有可用指南的目录：

${catalogLines}

## 回答规则
1. **先判断相关性**：仔细分析用户的问题，从上面目录中选出最相关的指南。回答开头第一行输出选中的指南ID，格式为：[GUIDES: id1, id2, ...]（如果没有相关指南则写 [GUIDES: none]）。这行不算入正式回答。
2. **有指南时**：基于指南内容给出详细、准确的步骤指导。如果指南内容足够回答，就直接回答。
3. **指南不够时**：可以补充你对中国生活的通用知识，但要明确区分（如"根据鹿鸣集指南...另外根据经验..."）。
4. **没有相关指南时**：基于你的知识回答，并在末尾提醒用户鹿鸣集有更多指南可以浏览。
5. **语言**：始终使用${langName}回答。
6. **格式**：用分步骤、分要点的格式，简洁清晰。适当用 emoji 让回答更生动。
7. **长度**：控制在 300 字以内（除非问题确实复杂需要更长回答）。
8. **多轮对话**：注意上下文连贯，如果用户追问细节，聚焦回答具体问题。`;
}

/**
 * 构建增强消息（加入语言提示和上下文引导）
 */
function buildEnhancedMessages(messages, lang) {
  if (!messages?.length) return [];
  
  // 保留最近 10 条消息
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
 * 用完整指南内容重新生成更精准的回答
 */
async function generateRefinedAnswer(messages, lang, langName, fullContext, selectedIds) {
  try {
    const refinedPrompt = `你是鹿鸣集（Lumingji）的AI助手小鹿 🦌，专门帮助来华留学生解决在中国生活中遇到的各种问题。

## 你的人设
- 像一个在中国生活多年的学长/学姐，经验丰富、热情但不啰嗦
- 回答务实，直接给操作步骤，不说空话套话
- 遇到重要细节会主动提醒
- 偶尔用轻松语气，不过度卖萌
- 涉及金额、时间等关键信息时特别标注

## 回答规则
1. 基于下面的参考资料回答问题。参考资料是最权威的信息来源。
2. 如果参考资料足够回答，就直接引用给出步骤。
3. 如果参考资料不够，可以补充通用知识，但要说明哪些来自指南、哪些是补充建议。
4. 用${langName}回答。
5. 分步骤、分要点，简洁清晰，适当用 emoji。
6. 控制在 300 字以内（除非问题复杂需要更长）。
7. 注意上下文连贯，如果是追问就聚焦具体问题。
8. 不需要在开头输出 [GUIDES: ...] 标记了，直接回答即可。

## 参考资料
${fullContext}`;

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
 * 格式化单个指南的完整上下文（不截断）
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
 * 默认回复
 */
function getDefaultReply(lang) {
  if (lang === 'en') return 'Sorry, unable to generate a response.';
  if (lang === 'ru') return 'Извините, не удалось сгенерировать ответ.';
  return '抱歉，暂时无法生成回答。';
}
