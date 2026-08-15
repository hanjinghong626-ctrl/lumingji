/**
 * 鹿鸣集 · 汇率查询模块
 * 数据来源：免费汇率API
 * 
 * 支持常用货币：CNY, USD, EUR, RUB, GBP, JPY, KRW 等
 */

// 缓存汇率数据，避免频繁请求（每小时更新一次）
let exchangeCache = {
  data: null,
  lastFetch: 0,
};

const CACHE_DURATION = 60 * 60 * 1000; // 1小时缓存

// 常用货币及其中文名
const CURRENCY_NAMES = {
  CNY: { zh: '人民币', en: 'Chinese Yuan', ru: 'Китайский юань', symbol: '¥' },
  USD: { zh: '美元', en: 'US Dollar', ru: 'Доллар США', symbol: '$' },
  EUR: { zh: '欧元', en: 'Euro', ru: 'Евро', symbol: '€' },
  RUB: { zh: '卢布', en: 'Russian Ruble', ru: 'Российский рубль', symbol: '₽' },
  GBP: { zh: '英镑', en: 'British Pound', ru: 'Фунт стерлингов', symbol: '£' },
  JPY: { zh: '日元', en: 'Japanese Yen', ru: 'Японская иена', symbol: '¥' },
  KRW: { zh: '韩元', en: 'Korean Won', ru: 'Южнокорейская вона', symbol: '₩' },
  THB: { zh: '泰铢', en: 'Thai Baht', ru: 'Тайский бат', symbol: '฿' },
  VND: { zh: '越南盾', en: 'Vietnamese Dong', ru: 'Вьетнамский донг', symbol: '₫' },
  INR: { zh: '印度卢比', en: 'Indian Rupee', ru: 'Индийская рупия', symbol: '₹' },
  HKD: { zh: '港币', en: 'Hong Kong Dollar', ru: 'Гонконгский доллар', symbol: 'HK$' },
  SGD: { zh: '新加坡元', en: 'Singapore Dollar', ru: 'Сингапурский доллар', symbol: 'S$' },
  AUD: { zh: '澳元', en: 'Australian Dollar', ru: 'Австралийский доллар', symbol: 'A$' },
  CAD: { zh: '加元', en: 'Canadian Dollar', ru: 'Канадский доллар', symbol: 'C$' },
};

/**
 * 从免费API获取汇率（以CNY为基准）
 * 使用 exchangerate-api.com 免费接口
 */
export async function getExchangeRates() {
  // 检查缓存
  if (exchangeCache.data && Date.now() - exchangeCache.lastFetch < CACHE_DURATION) {
    return exchangeCache.data;
  }

  try {
    // 使用免费API
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/CNY', {
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      console.error('Exchange rate API error:', response.status);
      // 如果主API失败，尝试备用
      return await getFallbackRates();
    }

    const data = await response.json();
    
    const rates = {
      base: 'CNY',
      date: data.date,
      rates: data.rates,
    };

    // 缓存
    exchangeCache = { data: rates, lastFetch: Date.now() };
    return rates;
  } catch (e) {
    console.error('Exchange rate fetch error:', e);
    return await getFallbackRates();
  }
}

/**
 * 备用汇率（离线时使用）
 * 这些是近似值，会在回复中提示"参考值"
 */
function getFallbackRates() {
  return {
    base: 'CNY',
    date: 'fallback',
    rates: {
      CNY: 1,
      USD: 0.138,
      EUR: 0.127,
      RUB: 12.5,
      GBP: 0.108,
      JPY: 20.8,
      KRW: 186,
      THB: 4.85,
      VND: 3450,
      INR: 11.5,
      HKD: 1.08,
      SGD: 0.185,
      AUD: 0.212,
      CAD: 0.19,
    },
    isFallback: true,
  };
}

/**
 * 货币转换
 * @param {number} amount - 金额
 * @param {string} from - 源货币 (如 'USD')
 * @param {string} to - 目标货币 (如 'CNY')
 * @returns {Promise<object|null>} - { amount, from, to, result, rate }
 */
export async function convertCurrency(amount, from, to) {
  const rates = await getExchangeRates();
  if (!rates) return null;

  from = from.toUpperCase();
  to = to.toUpperCase();

  // 如果两者相同
  if (from === to) return { amount, from, to, result: amount, rate: 1 };

  const fromRate = rates.rates[from];
  const toRate = rates.rates[to];

  if (!fromRate || !toRate) return null;

  // 先转成CNY，再转成目标货币
  const cnyAmount = amount / fromRate;
  const result = cnyAmount * toRate;

  return {
    amount,
    from,
    to,
    result: Math.round(result * 100) / 100,
    rate: Math.round((toRate / fromRate) * 10000) / 10000,
    isFallback: rates.isFallback || false,
    date: rates.date,
  };
}

/**
 * 从用户消息中提取货币转换信息
 * @param {string} message - 用户消息
 * @returns {object|null} - { amount, from, to }
 */
export function extractCurrencyInfo(message) {
  if (!message) return null;

  const msg = message.toLowerCase();

  // 货币代码映射
  const currencyMap = {
    '人民币': 'CNY', 'yuan': 'CNY', 'rmb': 'CNY', '元': 'CNY', '块': 'CNY',
    '美元': 'USD', 'dollar': 'USD', 'usd': 'USD', '美金': 'USD',
    '欧元': 'EUR', 'euro': 'EUR', 'eur': 'EUR',
    '卢布': 'RUB', 'ruble': 'RUB', 'руб': 'RUB', 'rub': 'RUB', '卢布': 'RUB',
    '英镑': 'GBP', 'pound': 'GBP', 'gbp': 'GBP',
    '日元': 'JPY', 'yen': 'JPY', 'jpy': 'JPY',
    '韩元': 'KRW', 'won': 'KRW', 'krw': 'KRW', '韩币': 'KRW',
    '泰铢': 'THB', 'baht': 'THB', 'thb': 'THB',
    '港币': 'HKD', 'hkd': 'HKD',
    '新加坡元': 'SGD', 'sgd': 'SGD',
  };

  // 提取金额
  const amountMatch = message.match(/(\d+(?:\.\d+)?)\s*(人民币|美元|欧元|卢布|英镑|日元|韩元|泰铢|港币|元|块|yuan|dollar|euro|ruble|pound|yen|won|baht|usd|eur|rub|gbp|jpy|krw|thb|hkd|sgd|rmb|₽|\$|€|£|¥|₩|฿)/i);
  
  if (!amountMatch) return null;

  const amount = parseFloat(amountMatch[1]);
  const fromCurrency = currencyMap[amountMatch[2].toLowerCase()] || currencyMap[amountMatch[2]];

  if (!fromCurrency || isNaN(amount)) return null;

  // 确定目标货币
  let toCurrency = null;
  
  // 检查是否有明确的目标货币
  const toMatch = message.match(/(换|兑换|等于|相当于|换成|转换为|→|->|to)\s*(人民币|美元|欧元|卢布|英镑|日元|韩元|泰铢|港币|元|yuan|dollar|euro|ruble|pound|yen|won|baht|usd|eur|rub|gbp|jpy|krw|thb|hkd|sgd|人民币|卢布|美元|人民币)/i);
  
  if (toMatch) {
    toCurrency = currencyMap[toMatch[2].toLowerCase()] || currencyMap[toMatch[2]];
  }

  // 默认转换规则
  if (!toCurrency) {
    if (fromCurrency === 'CNY') {
      // 人民币 → 如果是俄语用户，默认转卢布；否则转美元
      toCurrency = msg.includes('руб') || msg.includes('рубл') ? 'RUB' : 'USD';
    } else {
      // 其他货币 → 默认转人民币
      toCurrency = 'CNY';
    }
  }

  return { amount, from: fromCurrency, to: toCurrency };
}

/**
 * 格式化汇率结果为AI可读文本
 */
export function formatExchangeContext(exchangeData) {
  if (!exchangeData) return '';

  const fromName = CURRENCY_NAMES[exchangeData.from]?.zh || exchangeData.from;
  const toName = CURRENCY_NAMES[exchangeData.to]?.zh || exchangeData.to;
  const fromSymbol = CURRENCY_NAMES[exchangeData.from]?.symbol || '';
  const toSymbol = CURRENCY_NAMES[exchangeData.to]?.symbol || '';

  let text = `💱 汇率信息（实时数据）：\n`;
  text += `${exchangeData.amount}${fromSymbol} ${fromName} = ${exchangeData.result}${toSymbol} ${toName}\n`;
  text += `汇率：1 ${exchangeData.from} = ${exchangeData.rate} ${exchangeData.to}`;
  
  if (exchangeData.date && exchangeData.date !== 'fallback') {
    text += `\n数据日期：${exchangeData.date}`;
  }
  if (exchangeData.isFallback) {
    text += `\n⚠️ 当前为参考汇率，非实时数据`;
  }

  return text;
}

export default {
  getExchangeRates,
  convertCurrency,
  extractCurrencyInfo,
  formatExchangeContext,
  CURRENCY_NAMES,
};
