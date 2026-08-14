import { NextResponse } from 'next/server';
import getGuideData from '../../../data/life/guides-loader.js';

// DeepSeek API Key - 优先从环境变量读取，fallback到硬编码（临时方案）
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || 'sk-51b6e3db1c85457daef0f57a4c94cb65';

/**
 * AI Chat API - 调用 DeepSeek 生成回答
 * 
 * 前端负责检索相关Guide ID，后端负责拼context + 调LLM
 * 
 * Body: { messages, locale, relevantGuideIds }
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { messages, locale, relevantGuideIds } = body;

    const lang = locale || 'zh';

    // Build context from relevant guides
    const contextParts = [];
    const sourceGuides = [];

    for (const guideId of (relevantGuideIds || [])) {
      const guide = getGuideData(guideId);
      if (guide) {
        contextParts.push(formatGuideContext(guide, lang));
        sourceGuides.push({
          id: guide.id,
          category: guide.category,
          icon: guide.icon,
          title: guide.title?.[lang] || guide.title?.zh || guide.id,
          href: `/${lang}/life/${guide.category}/${guide.id}`,
        });
      }
    }

    const context = contextParts.join('\n\n---\n\n');
    const langNames = { zh: '中文', en: 'English', ru: 'Русский' };
    const langName = langNames[lang] || '中文';

    const systemPrompt = `你是"鹿鸣集"(Lumingji)平台的AI助手，这是一个帮助来华留学生解决生活问题的综合服务平台。

你的职责：
1. 基于提供的参考资料，用${langName}准确、实用、友善地回答用户的问题
2. 如果参考资料中有相关信息，优先引用并给出具体步骤
3. 如果参考资料不足以回答，可以基于你对中国的了解补充，但需说明这是通用建议
4. 回答要简洁实用，分步骤说明，不要太冗长
5. 在回答末尾，用"📖 相关指南"列出引用的指南链接

${context ? `参考资料：\n${context}` : '（本次无相关参考资料，请基于你的通用知识回答，并提醒用户可以浏览鹿鸣集生活指南获取更详细的信息）'}`;

    // Call DeepSeek API
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
          ...(messages || []),
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
    const reply = data.choices?.[0]?.message?.content || (
      lang === 'en' ? 'Sorry, unable to generate a response.' : lang === 'ru' ? 'Извините, не удалось сгенерировать ответ.' : '抱歉，暂时无法生成回答。'
    );

    // Append source links
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

function formatGuideContext(guide, lang) {
  const parts = [];
  const title = guide.title?.[lang] || guide.title?.zh || guide.id;
  parts.push(`## ${title} (id: ${guide.id})`);
  parts.push(`分类: ${guide.category} | 标签: ${(guide.tags || []).join(', ')}`);

  if (guide.summary?.[lang]) {
    parts.push(`摘要: ${guide.summary[lang]}`);
  }

  if (guide.intro?.[lang]) {
    parts.push(`介绍: ${guide.intro[lang].substring(0, 300)}`);
  }

  if (guide.preparation?.[lang]) {
    parts.push(`准备: ${guide.preparation[lang].join('；')}`);
  }

  if (guide.steps?.length) {
    const stepsText = guide.steps.map((s, i) => {
      const sTitle = s.title?.[lang] || s.title?.zh || '';
      const sDesc = (s.desc?.[lang] || s.desc?.zh || '').substring(0, 200);
      const sTip = s.tip?.[lang] || s.tip?.zh || '';
      return `${i + 1}. ${sTitle}: ${sDesc}${sTip ? ` [提示: ${sTip.substring(0, 100)}]` : ''}`;
    }).join('\n');
    parts.push(`步骤:\n${stepsText}`);
  }

  if (guide.faq?.length) {
    const faqText = guide.faq.slice(0, 3).map(f => {
      const q = f.q?.[lang] || f.q?.zh || '';
      const a = (f.a?.[lang] || f.a?.zh || '').substring(0, 200);
      return `Q: ${q}\nA: ${a}`;
    }).join('\n');
    parts.push(`FAQ:\n${faqText}`);
  }

  return parts.join('\n');
}
