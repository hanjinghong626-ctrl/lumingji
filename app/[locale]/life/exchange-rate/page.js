'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useI18n } from '../../../../i18n-context';

// 货币列表（排除CNY自身，CNY是基准）
const CURRENCIES = ['USD', 'EUR', 'RUB', 'GBP', 'JPY', 'KRW', 'THB', 'VND', 'INR', 'HKD', 'SGD', 'AUD', 'CAD'];

// 三语翻译
const T = {
  zh: {
    title: '💱 实时汇率',
    subtitle: '数据每5分钟自动刷新 · 来源 exchangerate-api.com',
    converter: '汇率换算',
    amount: '金额',
    from: '从',
    to: '兑换为',
    convert: '换算',
    result: '换算结果',
    loading: '加载中...',
    error: '获取汇率失败，请稍后重试',
    lastUpdate: '最后更新',
    baseCNY: '基准：人民币 (CNY)',
    fallback: '⚠️ 当前为参考汇率，非实时数据',
    rateTable: '汇率一览',
    per100: '每100',
    popularCurrencies: ['USD', 'EUR', 'RUB', 'GBP', 'JPY', 'KRW'],
    toSelect: '请选择',
    swapBtn: '⇄',
    fromCNY: '人民币',
    commonConversions: '常用换算',
  },
  en: {
    title: '💱 Live Exchange Rates',
    subtitle: 'Auto-refreshes every 5 min · Source: exchangerate-api.com',
    converter: 'Currency Converter',
    amount: 'Amount',
    from: 'From',
    to: 'To',
    convert: 'Convert',
    result: 'Result',
    loading: 'Loading...',
    error: 'Failed to fetch rates. Please try again later.',
    lastUpdate: 'Last updated',
    baseCNY: 'Base: Chinese Yuan (CNY)',
    fallback: '⚠️ Reference rates only, not live data',
    rateTable: 'Exchange Rates',
    per100: 'Per 100',
    popularCurrencies: ['USD', 'EUR', 'RUB', 'GBP', 'JPY', 'KRW'],
    toSelect: 'Select',
    swapBtn: '⇄',
    fromCNY: 'CNY',
    commonConversions: 'Quick Convert',
  },
  ru: {
    title: '💱 Курс валют',
    subtitle: 'Авто-обновление каждые 5 мин · Источник: exchangerate-api.com',
    converter: 'Конвертер валют',
    amount: 'Сумма',
    from: 'Из',
    to: 'В',
    convert: 'Конвертировать',
    result: 'Результат',
    loading: 'Загрузка...',
    error: 'Не удалось получить курсы. Попробуйте позже.',
    lastUpdate: 'Обновлено',
    baseCNY: 'Базовая: китайский юань (CNY)',
    fallback: '⚠️ Это справочные курсы, не актуальные',
    rateTable: 'Курсы валют',
    per100: 'За 100',
    popularCurrencies: ['USD', 'EUR', 'RUB', 'GBP', 'JPY', 'KRW'],
    toSelect: 'Выбрать',
    swapBtn: '⇄',
    fromCNY: 'юаней',
    commonConversions: 'Быстрый конверт',
  },
};

export default function ExchangeRatePage() {
  const { locale } = useI18n();
  const lang = locale || 'zh';
  const t = T[lang] || T.zh;

  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [prevRates, setPrevRates] = useState(null);

  // Converter state
  const [convAmount, setConvAmount] = useState('100');
  const [convFrom, setConvFrom] = useState('USD');
  const [convTo, setConvTo] = useState('CNY');
  const [convResult, setConvResult] = useState(null);
  const [convLoading, setConvLoading] = useState(false);

  const tickerRef = useRef(null);

  // Fetch exchange rates
  const fetchRates = useCallback(async () => {
    try {
      const res = await fetch('/api/exchange-rate');
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      if (data.success) {
        setPrevRates(rates);
        setRates(data);
        setLastUpdate(new Date());
        setError(false);
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  // Convert currency
  const doConvert = useCallback(async () => {
    const amt = parseFloat(convAmount);
    if (isNaN(amt) || amt <= 0) return;
    setConvLoading(true);
    try {
      const res = await fetch(`/api/exchange-rate?from=${convFrom}&to=${convTo}&amount=${amt}`);
      const data = await res.json();
      if (data.success) {
        setConvResult(data.data);
      }
    } catch (e) {
      // silent
    } finally {
      setConvLoading(false);
    }
  }, [convAmount, convFrom, convTo]);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 5 * 60 * 1000); // refresh every 5 min
    return () => clearInterval(interval);
  }, [fetchRates]);

  // Auto convert on input change (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (convAmount && !isNaN(parseFloat(convAmount))) {
        doConvert();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [convAmount, convFrom, convTo, doConvert]);

  const getRateChange = (code) => {
    if (!prevRates || !rates) return null;
    const prev = prevRates.currencies?.[code]?.rate;
    const curr = rates.currencies?.[code]?.rate;
    if (prev === undefined || curr === undefined) return null;
    if (Math.abs(prev - curr) < 0.00001) return null;
    return curr > prev ? 'up' : 'down';
  };

  const formatRate = (rate, code) => {
    if (rate === undefined || rate === null) return '—';
    if (rate >= 100) return rate.toFixed(2);
    if (rate >= 1) return rate.toFixed(4);
    return rate.toFixed(6);
  };

  const getCurrencyName = (code) => {
    const info = rates?.currencies?.[code]?.name;
    if (!info) return code;
    const names = { zh: info.zh, en: info.en, ru: info.ru };
    return names[lang] || names.zh || code;
  };

  const getSymbol = (code) => {
    const info = rates?.currencies?.[code]?.name;
    return info?.symbol || '';
  };

  // Swap from/to
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
        {rates?.isFallback && (
          <p className="text-sm text-amber-600 mt-2">{t.fallback}</p>
        )}
        {lastUpdate && (
          <p className="text-xs text-gray-400 mt-1">
            {t.lastUpdate}: {lastUpdate.toLocaleString(lang === 'zh' ? 'zh-CN' : lang === 'ru' ? 'ru-RU' : 'en-US')}
          </p>
        )}
      </div>

      {/* Scrolling Ticker */}
      {rates && rates.currencies && (
        <div className="mb-10">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary-50 via-white to-primary-50 border border-primary-100/60 shadow-sm">
            <div className="ticker-track flex items-center py-3 px-4 whitespace-nowrap">
              <div className="ticker-content flex items-center gap-8">
                {CURRENCIES.map((code) => {
                  const currency = rates.currencies[code];
                  if (!currency) return null;
                  const change = getRateChange(code);
                  return (
                    <span key={code} className="inline-flex items-center gap-2 text-sm font-mono">
                      <span className="text-gray-400 text-xs">{currency.name.symbol}</span>
                      <span className="font-bold text-gray-700">{code}</span>
                      <span className="text-gray-600">{formatRate(currency.rate, code)}</span>
                      {change === 'up' && <span className="text-green-500 text-xs">▲</span>}
                      {change === 'down' && <span className="text-red-400 text-xs">▼</span>}
                    </span>
                  );
                })}
                {/* Duplicate for seamless loop */}
                {CURRENCIES.map((code) => {
                  const currency = rates.currencies[code];
                  if (!currency) return null;
                  return (
                    <span key={`${code}-dup`} className="inline-flex items-center gap-2 text-sm font-mono">
                      <span className="text-gray-400 text-xs">{currency.name.symbol}</span>
                      <span className="font-bold text-gray-700">{code}</span>
                      <span className="text-gray-600">{formatRate(currency.rate, code)}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rate Cards Grid */}
      {rates && rates.currencies && (
        <div className="mb-12">
          <h2 className="text-lg font-wenkai font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary-400 rounded-full inline-block"></span>
            {t.rateTable}
            <span className="text-xs text-gray-400 font-normal ml-2">{t.baseCNY}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {CURRENCIES.map((code) => {
              const currency = rates.currencies[code];
              if (!currency) return null;
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
                    <span className="text-xl">{currency.name.symbol}</span>
                    <span className="font-bold text-gray-700">{code}</span>
                    {change === 'up' && <span className="text-green-500 text-xs ml-auto">▲</span>}
                    {change === 'down' && <span className="text-red-400 text-xs ml-auto">▼</span>}
                  </div>
                  <p className="text-xs text-gray-400 mb-1">{getCurrencyName(code)}</p>
                  <p className="text-lg font-mono font-bold text-gray-800">
                    {formatRate(currency.rate, code)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {t.per100} CNY = {formatRate(currency.rate * 100, code)} {code}
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
                    {getSymbol(code)} {code} - {getCurrencyName(code)}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSwap}
              className="mt-5 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors text-lg font-bold shrink-0"
              title="Swap"
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
                    {getSymbol(code)} {code} - {getCurrencyName(code)}
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
                {convResult.date && convResult.date !== 'fallback' && (
                  <span className="ml-2">· {convResult.date}</span>
                )}
              </p>
            </div>
          )}

          {convLoading && (
            <p className="text-center text-sm text-gray-400 py-3 animate-pulse">...</p>
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

      {/* Error state */}
      {error && !rates && (
        <div className="text-center py-12">
          <p className="text-amber-600 font-wenkai">{t.error}</p>
          <button
            onClick={() => { setLoading(true); fetchRates(); }}
            className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-full text-sm hover:bg-primary-600 transition-colors"
          >
            🔄
          </button>
        </div>
      )}

      {/* CSS for ticker animation */}
      <style jsx>{`
        .ticker-track {
          overflow: hidden;
        }
        .ticker-content {
          display: inline-flex;
          animation: tickerScroll 40s linear infinite;
        }
        .ticker-content:hover {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
