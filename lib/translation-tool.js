/**
 * 鹿鸣集 · 多语言翻译工具
 * 支持：中文、英语、俄语、日语、韩语、法语、德语、西班牙语、阿拉伯语
 * 
 * 使用 DeepSeek 进行上下文感知的智能翻译
 * 特殊处理：音乐术语、学术词汇、文化特色表达
 */

// DeepSeek API Key
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || 'sk-51b6e3db1c85457daef0f57a4c94cb65';

// 语言配置
const LANG_CONFIG = {
  zh: { name: '中文', nameEn: 'Chinese', flag: '🇨🇳', endonym: '中文' },
  en: { name: 'English', nameEn: 'English', flag: '🇬🇧', endonym: 'English' },
  ru: { name: '俄语', nameEn: 'Russian', flag: '🇷🇺', endonym: 'Русский' },
  ja: { name: '日语', nameEn: 'Japanese', flag: '🇯🇵', endonym: '日本語' },
  ko: { name: '韩语', nameEn: 'Korean', flag: '🇰🇷', endonym: '한국어' },
  fr: { name: '法语', nameEn: 'French', flag: '🇫🇷', endonym: 'Français' },
  de: { name: '德语', nameEn: 'German', flag: '🇩🇪', endonym: 'Deutsch' },
  es: { name: '西班牙语', nameEn: 'Spanish', flag: '🇪🇸', endonym: 'Español' },
  ar: { name: '阿拉伯语', nameEn: 'Arabic', flag: '🇸🇦', endonym: 'العربية' },
  vi: { name: '越南语', nameEn: 'Vietnamese', flag: '🇻🇳', endonym: 'Tiếng Việt' },
  th: { name: '泰语', nameEn: 'Thai', flag: '🇹🇭', endonym: 'ภาษาไทย' },
  it: { name: '意大利语', nameEn: 'Italian', flag: '🇮🇹', endonym: 'Italiano' },
};

// 语言别名映射（用户可能用各种方式指定语言）
const LANG_ALIASES = {
  '中': 'zh', '中文': 'zh', '汉语': 'zh', '普通话': 'zh', 'chinese': 'zh', 'cn': 'zh',
  '英': 'en', '英文': 'en', '英语': 'en', 'english': 'en', 'en': 'en',
  '俄': 'ru', '俄文': 'ru', '俄语': 'ru', 'russian': 'ru', 'ru': 'ru', 'русский': 'ru',
  '日': 'ja', '日文': 'ja', '日语': 'ja', 'japanese': 'ja', 'ja': 'ja', '日本語': 'ja',
  '韩': 'ko', '韩文': 'ko', '韩语': 'ko', 'korean': 'ko', 'ko': 'ko', '한국어': 'ko',
  '法': 'fr', '法文': 'fr', '法语': 'fr', 'french': 'fr', 'fr': 'fr', 'français': 'fr',
  '德': 'de', '德文': 'de', '德语': 'de', 'german': 'de', 'de': 'de', 'deutsch': 'de',
  '西': 'es', '西语': 'es', '西班牙语': 'es', 'spanish': 'es', 'es': 'es', 'español': 'es',
  '阿': 'ar', '阿拉伯': 'ar', 'arabic': 'ar', 'ar': 'ar',
  '越': 'vi', '越南语': 'vi', 'vietnamese': 'vi', 'vi': 'vi',
  '泰': 'th', '泰语': 'th', 'thai': 'th', 'th': 'th',
  '意': 'it', '意大利': 'it', '意大利语': 'it', 'italian': 'it', 'it': 'it',
};

/**
 * 检测文本的主要语言
 */
export function detectLanguage(text) {
  if (!text) return 'zh';
  
  const chineseRegex = /[\u4e00-\u9fff]/g;
  const japaneseRegex = /[\u3040-\u309f\u30a0-\u30ff]/g;
  const koreanRegex = /[\uac00-\ud7af\u1100-\u11ff]/g;
  const russianRegex = /[\u0400-\u04ff]/g;
  const arabicRegex = /[\u0600-\u06ff]/g;
  const thaiRegex = /[\u0e00-\u0e7f]/g;
  
  const scores = {
    zh: (text.match(chineseRegex) || []).length,
    ja: (text.match(japaneseRegex) || []).length,
    ko: (text.match(koreanRegex) || []).length,
    ru: (text.match(russianRegex) || []).length,
    ar: (text.match(arabicRegex) || []).length,
    th: (text.match(thaiRegex) || []).length,
    en: (text.match(/[a-zA-Z]/g) || []).length,
  };
  
  // 如果中日混合，检查假名来判断是否为日语
  if (scores.ja > 0) {
    scores.ja += 5; // 有假名基本可以确定是日语
  }
  
  // 如果中文分数最高且远超其他
  if (scores.zh > scores.ja && scores.zh > scores.ko) {
    return 'zh';
  }
  
  // 找出最高分
  let maxLang = 'en';
  let maxScore = 0;
  for (const [lang, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      maxLang = lang;
    }
  }
  
  return maxScore > 0 ? maxLang : 'en';
}

/**
 * 从用户消息中提取翻译意图
 * 支持格式：
 * - "翻译：xxx" / "translate: xxx"
 * - "把xxx翻译成英语" / "translate xxx to English"
 * - "xxx用英语怎么说" / "how to say xxx in English"
 * - "翻译一下 xxx"
 */
export function extractTranslationIntent(message) {
  if (!message) return null;
  
  const msg = message.trim();
  
  // 模式1: 明确说"翻译"/"translate"
  const translatePatterns = [
    /^(?:请)?翻译[：:\s]+(.+?)(?:\s+(?:到|成|为)\s*(.+))?$/,
    /^(?:please\s+)?translate\s*[：:\s]+(.+?)(?:\s+(?:to|into)\s+(.+))?$/i,
    /^(?:请)?翻译一下\s*[：:\s]*(.+?)(?:\s+(?:到|成|为)\s*(.+))?$/,
    /^(?:please\s+)?translate\s+(.+?)(?:\s+(?:to|into)\s+(.+))?$/i,
  ];
  
  for (const pattern of translatePatterns) {
    const match = msg.match(pattern);
    if (match) {
      const text = match[1].trim();
      const targetLangStr = match[2]?.trim() || '';
      const targetLang = resolveLangCode(targetLangStr);
      const sourceLang = detectLanguage(text);
      
      // 如果目标语言和源语言相同，给个默认目标
      let finalTarget = targetLang || (sourceLang !== 'zh' ? 'zh' : 'en');
      if (finalTarget === sourceLang) {
        finalTarget = sourceLang === 'zh' ? 'en' : 'zh';
      }
      
      return { text, sourceLang, targetLang: finalTarget };
    }
  }
  
  // 模式2: "xxx用英语怎么说" / "xxx in English?"
  const howToSayPatterns = [
    /(.+?)(?:用|用)(\w+)(?:怎么说|怎么说\??|怎么讲)/,
    /(.+?)(?:的)(\w+)(?:怎么说|表达|翻译)/,
    /how\s+(?:do\s+you|to)\s+say\s+[「""']?(.+?)[」""']?\s+(?:in|说)\s+(.+)/i,
    /(.+?)(?:的)(\w+)(?:是什么|怎么表达)/,
  ];
  
  for (const pattern of howToSayPatterns) {
    const match = msg.match(pattern);
    if (match) {
      if (pattern.source.includes('how')) {
        // English pattern
        const text = match[1].trim();
        const targetLang = resolveLangCode(match[2].trim());
        const sourceLang = detectLanguage(text);
        if (targetLang && text) {
          return { text, sourceLang, targetLang };
        }
      } else {
        // Chinese pattern
        const text = match[1].trim();
        const targetLang = resolveLangCode(match[2].trim());
        const sourceLang = detectLanguage(text);
        if (targetLang && text) {
          return { text, sourceLang, targetLang };
        }
      }
    }
  }
  
  // 模式3: "xxx翻译成yyy" 
  const toTranslation = msg.match(/(.+?)(?:翻译|译)(?:成|为|到)(.+)/);
  if (toTranslation) {
    const text = toTranslation[1].trim();
    const targetLang = resolveLangCode(toTranslation[2].trim());
    const sourceLang = detectLanguage(text);
    if (text && targetLang) {
      return { text, sourceLang, targetLang };
    }
  }
  
  return null;
}

/**
 * 解析语言代码（支持各种别名）
 */
function resolveLangCode(input) {
  if (!input) return null;
  const normalized = input.toLowerCase().trim().replace(/[？?。.！!，,\s]/g, '');
  return LANG_ALIASES[normalized] || LANG_ALIASES[input.trim()] || null;
}

/**
 * 调用 DeepSeek 进行智能翻译
 */
export async function translateText(text, targetLang, sourceLang = null) {
  if (!text || !targetLang) return null;
  
  const detectedSource = sourceLang || detectLanguage(text);
  const targetConfig = LANG_CONFIG[targetLang];
  const sourceConfig = LANG_CONFIG[detectedSource];
  
  if (!targetConfig) return null;
  if (detectedSource === targetLang) {
    return {
      original: text,
      translation: text,
      sourceLang: detectedSource,
      targetLang,
      note: '源语言和目标语言相同，无需翻译',
    };
  }
  
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `你是一个专业的多语言翻译专家，专门为来华留学生服务。

翻译规则：
1. 准确传达原意，不要添加或省略内容
2. 使用目标语言最自然、地道的表达方式
3. 如果是口语化的原文，翻译也应保持口语化
4. 如果是正式文本，翻译也应保持正式
5. 音乐/艺术术语需要专业准确（如作曲家名字保留原文）
6. 文化特色词汇可附上简要解释
7. 中国特有概念（如支付宝、微信）保留原名并适当解释

只输出翻译结果，不要加任何前缀、解释或评论。
如果原文有多种可能的理解，选择最常见/最合理的含义。`
          },
          {
            role: 'user',
            content: `请将以下${sourceConfig?.name || '未知'}文本翻译为${targetConfig.name}：\n\n${text}`
          }
        ],
        temperature: 0.3,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      console.error('Translation API error:', response.status);
      return null;
    }

    const data = await response.json();
    const translation = data.choices?.[0]?.message?.content?.trim();
    
    if (!translation) return null;

    return {
      original: text,
      translation,
      sourceLang: detectedSource,
      targetLang,
      sourceLangName: sourceConfig?.name || detectedSource,
      targetLangName: targetConfig.name,
      sourceFlag: sourceConfig?.flag || '🌐',
      targetFlag: targetConfig.flag,
    };
  } catch (e) {
    console.error('Translation error:', e);
    return null;
  }
}

/**
 * 格式化翻译结果为AI可读上下文
 */
export function formatTranslationContext(translationResult) {
  if (!translationResult) return '';
  
  let text = `🌐 翻译结果：\n`;
  text += `${translationResult.sourceFlag} 原文（${translationResult.sourceLangName}）：${translationResult.original}\n`;
  text += `${translationResult.targetFlag} 译文（${translationResult.targetLangName}）：${translationResult.translation}\n`;
  
  if (translationResult.note) {
    text += `\n💡 ${translationResult.note}`;
  }
  
  return text;
}

export default {
  detectLanguage,
  extractTranslationIntent,
  translateText,
  formatTranslationContext,
  LANG_CONFIG,
};
