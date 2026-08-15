'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useI18n } from '../../../../i18n-context';

// 货币列表
const CURRENCIES = ['USD', 'EUR', 'RUB', 'GBP', 'JPY', 'KRW', 'THB', 'VND', 'INR', 'HKD', 'SGD', 'AUD', 'CAD'];

// 离线备用汇率（前端兜底）
const FALLBACK_RATES = {
  USD: 0.138, EUR: 0.127, RUB: 12.5, GBP: 0.108, JPY: 20.8,
  KRW: 186, THB: 4.85, VND: 3450, INR: 11.5, HKD: 1.08,
  SGD: 0.185, AUD: 0.212, CAD: 0.19,
};

const FALLBACK_NAMES = {
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

const T = {
  zh: {
    title: '💱 实时汇率',
    subtitle: '数据每5分钟自动刷新',
    converter: '汇率换算',
    amount: '金额',
    from: '从',
    to: '兑换为',
    result: '换算结果',
    loading: '加载中...',
    error: '获取汇率失败，正在使用参考汇率',
    retry: '重试',
    lastUpdate: '最后更新',
    baseCNY: '基准：人民币 (CNY)',
    fallback: '⚠️ 参考汇率，可能与实时值有偏差',
    rateTable: '汇率一览',
    per100: '每100',
    ref: '参考值',
  },
  en: {
    title: '💱 Live Exchange Rates',
    subtitle: 'Auto-refreshes every 5 min',
    converter: 'Currency Converter',
    amount: 'Amount',
    from: 'From',
    to: 'To',
    result: 'Result',
    loading: 'Loading...',
    error: 'Fetch failed, using reference rates',
    retry: 'Retry',
    lastUpdate: 'Last updated',
    baseCNY: 'Base: Chinese Yuan (CNY)',
    fallback: '⚠️ Reference rates, may differ from live',
    rateTable: 'Exchange Rates',
    per100: 'Per 100',
    ref: 'Reference',
  },
  ru: {
    title: '💱 Курс валют',
    subtitle: 'Авто-обновление каждые 5 мин',
    converter: 'Конвертер валют',
    amount: 'Сумма',
    from: 'Из',
    to: 'В',
    result: 'Результат',
    loading: 'Загрузка...',
    error: 'Не удалось получить, используются справочные курсы',
    retry: 'Повторить',
    lastUpdate: 'Обновлено',
    baseCNY: 'Базовая: китайский юань (CNY)',
    fallback: '⚠️ Справочные курсы, могут отличаться',
    rateTable: 'Курсы валют',
    per100: 'За 100',
    ref: 'Справка',
  },
};

export default function ExchangeRatePage() {
  const { locale } = useI18n();
  const lang = locale || 'zh';
  const t = T[lang] || T.zh;

  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [prevRatesData, setPrevRatesData] = useState(null);

  // Converter state
  const [convAmount, setConvAmount] = useState('100');
  const [convFrom, setConvFrom] = useState('USD');
  const [convTo, setConvTo] = useState('CNY');
  const [convResult, setConvResult] = useState(null);

  // Fetch with retry
  const fetchRates = useCallback(async (attempt = 1) => {
    try {
      const res = await fetch('/api/exchange-rate', { signal: AbortSignal.timeout(8000) });
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      if (data.success && data.currencies) {
        setPrevRatesData(rates);
        setRates(data.currencies);
        setIsFallback(data.isFallback || false);
        setLastUpdate(new Date());
        setLoading(false);
        return;
      }
      throw new Error('Invalid data');
    } catch (e) {
      if (attempt < 3) {
        // Retry after 1s
        setTimeout(() => fetchRates(attempt + 1), 1000);
        return;
      }
      // All retries failed - use fallback rates
      const fallbackCurrencies = {};
      for (const [code, rate] of Object.entries(FALLBACK_RATES)) {
        fallbackCurrencies[code] = { rate, name: FALLBACK_NAMES[code] };
      }
      setPrevRatesData(rates);
      setRates(fallbackCurrencies);
      setIsFallback(true);
      setLastUpdate(new Date());
      setLoading(false);
    }
  }, [rates]);

  // Convert currency
  const doConvert = useCallback(async () => {
    const amt = parseFloat(convAmount);
    if (isNaN(amt) || amt <= 0) return;
    try {
      const res = await fetch(`/api/exchange-rate?from=${convFrom}&to=${convTo}&amount=${amt}`,
        { signal: AbortSignal.timeout(8000) });
      const data = await res.json();
      if (data.success) {
        setConvResult(data.data);
      } else {
        // Fallback: calculate locally
        const fromRate = FALLBACK_RATES[convFrom] || (convFrom === 'CNY' ? 1 : null);
        const toRate = FALLBACK_RATES[convTo] || (convTo === 'CNY' ? 1 : null);
        if (fromRate && toRate) {
          const cnyAmt = amt / fromRate;
          const result = Math.round(cnyAmt * toRate * 100) / 100;
          const rate = Math.round((toRate / fromRate) * 10000) / 10000;
          setConvResult({ amount: amt, from: convFrom, to: convTo, result, rate, isFallback: true });
        }
      }
    } catch (e) {
      // Fallback: calculate locally
      const fromRate = FALLBACK_RATES[convFrom] || (convFrom === 'CNY' ? 1 : null);
      const toRate = FALLBACK_RATES[convTo] || (convTo === 'CNY' ? 1 : null);
      if (fromRate && toRate) {
        const cnyAmt = amt / fromRate;
        const result = Math.round(cnyAmt * toRate * 100) / 100;
        const rate = Math.round((toRate / fromRate) * 10000) / 10000;
        setConvResult({ amount: amt, from: convFrom, to: convTo, result, rate, isFallback: true });
      }
    }
  }, [convAmount, convFrom, convTo]);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(() => fetchRates(), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto convert on input change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (convAmount && !isNaN(parseFloat(convAmount))) {
        doConvert();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [convAmount, convFrom, convTo]);

  const getRateChange = (code) => {
    if (!prevRatesData || !rates) return null;
    const prev = prevRatesData[code]?.rate;
    const curr = rates[code]?.rate;
    if (prev === undefined || curr === undefined) return null;
    if (Math.abs(prev - curr) < 0.00001) return null;
    return curr > prev ? 'up' : 'down';
  };

  const formatRate = (rate) => {
    if (rate === undefined || rate === null) return '—';
    if (rate >= 100) return rate.toFixed(2);
    if (rate >= 1) return rate.toFixed(4);
    return rate.toFixed(6);
  };

  const getName = (code) => {
    const info = rates?.[code]?.name || FALLBACK_NAMES[code];
    if (!info) return code;
    return info[lang] || info.zh || code;
  };

  const getSymbol = (code) => {
    const info = rates?.[code]?.name || FALLBACK_NAMES[code];
    return info?.symbol || '';
  };

  const handleSwap = () => {
    setConvFrom(convTo);
    setConvTo(convFrom);
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="animate-pulse text-4xl mb-4">💱</div>
        <p className="text-gray-500 font-wenkai">{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="section-title">{t.title}</h1>
        <p className="text-sm text-gray-500 font-wenkai mt-2">{t.subtitle}</p>
        {isFallback && (
          <p className="text-sm text-amber-600 mt-2">{t.fallback}</p>
        )}
        {lastUpdate && (
          <p className="text-xs text-gray-400 mt-1">
            {t.lastUpdate}: {lastUpdate.toLocaleString(lang === 'zh' ? 'zh-CN' : lang === 'ru' ? 'ru-RU' : 'en-US')}
          </p>
        )}
      </div>

      {/* Scrolling Ticker */}
      {rates && (
        <div className="mb-10">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary-50 via-white to-primary-50 border border-primary-100/60 shadow-sm">
            <div className="overflow-hidden py-3 px-4 whitespace-nowrap">
              <div className="inline-flex animate-[tickerScroll_40s_linear_infinite] hover:[animation-play-state:paused]">
                {CURRENCIES.map((code) => {
                  const c = rates[code];
                  if (!c) return null;
                  const change = getRateChange(code);
                  return (
                    <span key={code} className="inline-flex items-center gap-2 text-sm font-mono mx-4">
                      <span className="text-gray-400 text-xs">{c.name.symbol}</span>
                      <span className="font-bold text-gray-700">{code}</span>
                      <span className="text-gray-600">{formatRate(c.rate)}</span>
                      {change === 'up' && <span className="text-green-500 text-xs">▲</span>}
                      {change === 'down' && <span className="text-red-400 text-xs">▼</span>}
                    </span>
                  );
                })}
                {CURRENCIES.map((code) => {
                  const c = rates[code];
                  if (!c) return null;
                  return (
                    <span key={`${code}-dup`} className="inline-flex items-center gap-2 text-sm font-mono mx-4">
                      <span className="text-gray-400 text-xs">{c.name.symbol}</span>
                      <span className="font-bold text-gray-700">{code}</span>
                      <span className="text-gray-600">{formatRate(c.rate)}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rate Cards Grid */}
      {rates && (
        <div className="mb-12">
          <h2 className="text-lg font-wenkai font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-400 rounded-full inline-block"></span>
            {t.rateTable}
            <span className="text-xs text-gray-400 font-normal ml-2">{t.baseCNY}</span>
            {isFallback && <span className="text-xs text-amber-500 ml-2">({t.ref})</span>}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {CURRENCIES.map((code) => {
              const c = rates[code];
              if (!c) return null;
              const change = getRateChange(code);
              return (
                <div
                  key={code}
                  className={`p-4 rounded-2xl border transition-all duration-300 hover:shadow-md ${
                    change === 'up'
                      ? 'bg-green-50/60 border-green-200/60'
                      : change === 'down'
                      ? 'bg-red-50/60 border-red-200/60'
                      : 'bg-white/80 border-gray-100 hover:border-primary-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{c.name.symbol}</span>
                    <span className="font-bold text-gray-700">{code}</span>
                    {change === 'up' && <span className="text-green-500 text-xs ml-auto">▲</span>}
                    {change === 'down' && <span className="text-red-400 text-xs ml-auto">▼</span>}
                  </div>
                  <p className="text-xs text-gray-400 mb-1">{getName(code)}</p>
                  <p className="text-lg font-mono font-bold text-gray-800">
                    {formatRate(c.rate)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {t.per100} CNY = {formatRate(c.rate * 100)} {code}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Currency Converter */}
      <div className="max-w-xl mx-auto">
        <h2 className="text-lg font-wenkai font-bold text-gray-700 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-accent-400 rounded-full inline-block"></span>
          {t.converter}
        </h2>
        <div className="bg-white/80 rounded-3xl p-6 border border-primary-100/60 shadow-sm">
          {/* Amount */}
          <div className="mb-4">
            <label className="text-xs text-gray-500 font-wenkai mb-1 block">{t.amount}</label>
            <input
              type="number"
              value={convAmount}
              onChange={(e) => setConvAmount(e.target.value)}
              placeholder="100"
              min="0"
              step="any"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-2xl font-mono font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
            />
          </div>

          {/* From / To */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1">
              <label className="text-xs text-gray-500 font-wenkai mb-1 block">{t.from}</label>
              <select
                value={convFrom}
                onChange={(e) => setConvFrom(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-300 appearance-none cursor-pointer"
              >
                <option value="CNY">🇨🇳 CNY - {lang === 'ru' ? 'Юань' : '人民币'}</option>
                {CURRENCIES.map((code) => (
                  <option key={code} value={code}>
                    {getSymbol(code)} {code} - {getName(code)}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSwap}
              className="mt-5 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors text-lg font-bold shrink-0"
            >
              ⇄
            </button>

            <div className="flex-1">
              <label className="text-xs text-gray-500 font-wenkai mb-1 block">{t.to}</label>
              <select
                value={convTo}
                onChange={(e) => setConvTo(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-300 appearance-none cursor-pointer"
              >
                <option value="CNY">🇨🇳 CNY - {lang === 'ru' ? 'Юань' : '人民币'}</option>
                {CURRENCIES.map((code) => (
                  <option key={code} value={code}>
                    {getSymbol(code)} {code} - {getName(code)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          {convResult && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50/30 border border-primary-100/40">
              <p className="text-xs text-gray-500 mb-1">{t.result}</p>
              <p className="text-2xl font-mono font-bold text-gray-800">
                {convAmount} {convFrom} = {convResult.result} {convTo}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                1 {convFrom} = {convResult.rate} {convTo}
                {convResult.isFallback && <span className="ml-2 text-amber-500">({t.ref})</span>}
              </p>
            </div>
          )}
        </div>

        {/* Quick convert buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {[
            { from: 'USD', to: 'CNY', amount: 100 },
            { from: 'EUR', to: 'CNY', amount: 100 },
            { from: 'RUB', to: 'CNY', amount: 1000 },
            { from: 'CNY', to: 'USD', amount: 1000 },
            { from: 'CNY', to: 'RUB', amount: 1000 },
            { from: 'GBP', to: 'CNY', amount: 100 },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => {
                setConvAmount(String(item.amount));
                setConvFrom(item.from);
                setConvTo(item.to);
              }}
              className="px-3 py-1.5 text-xs rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-all font-wenkai"
            >
              {item.amount} {item.from} → {item.to}
            </button>
          ))}
        </div>
      </div>

      {/* Inline CSS for ticker animation */}
      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
