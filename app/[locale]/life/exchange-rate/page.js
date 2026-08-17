'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useI18n } from '../../../../i18n-context';
import SEO from '../../../components/SEO.js';

// 货币列表
const CURRENCIES = ['USD', 'EUR', 'RUB', 'GBP', 'JPY', 'KRW', 'THB', 'VND', 'INR', 'HKD', 'SGD', 'AUD', 'CAD'];

// 货币旗帜 emoji
const FLAGS = {
  USD: '🇺🇸', EUR: '🇪🇺', RUB: '🇷🇺', GBP: '🇬🇧', JPY: '🇯🇵',
  KRW: '🇰🇷', THB: '🇹🇭', VND: '🇻🇳', INR: '🇮🇳', HKD: '🇭🇰',
  SGD: '🇸🇬', AUD: '🇦🇺', CAD: '🇨🇦', CNY: '🇨🇳',
};

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
    title: '实时汇率',
    subtitle: 'EXCHANGE RATE MONITOR',
    converter: '汇率换算',
    amount: '金额',
    from: '从',
    to: '兑换为',
    result: '换算结果',
    loading: '数据加载中...',
    lastUpdate: '最后更新',
    baseCNY: '基准：人民币 CNY',
    fallback: '参考汇率（离线模式）',
    liveData: '● 实时数据',
    rateTable: '全球汇率面板',
    per100: '每100',
    ref: '参考值',
    live: '实时',
    quickConvert: '快捷换算',
  },
  en: {
    title: 'Live Rates',
    subtitle: 'EXCHANGE RATE MONITOR',
    converter: 'Currency Converter',
    amount: 'Amount',
    from: 'From',
    to: 'To',
    result: 'Result',
    loading: 'Loading data...',
    lastUpdate: 'Last updated',
    baseCNY: 'Base: CNY',
    fallback: 'Reference rates (offline)',
    liveData: '● LIVE',
    rateTable: 'Global Rate Panel',
    per100: 'Per 100',
    ref: 'Ref',
    live: 'LIVE',
    quickConvert: 'Quick Convert',
  },
  ru: {
    title: 'Курсы валют',
    subtitle: 'EXCHANGE RATE MONITOR',
    converter: 'Конвертер валют',
    amount: 'Сумма',
    from: 'Из',
    to: 'В',
    result: 'Результат',
    loading: 'Загрузка данных...',
    lastUpdate: 'Обновлено',
    baseCNY: 'База: CNY',
    fallback: 'Справочные курсы (офлайн)',
    liveData: '● LIVE',
    rateTable: 'Панель курсов',
    per100: 'За 100',
    ref: 'Спр.',
    live: 'LIVE',
    quickConvert: 'Быстрый конверт',
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
  const [currentTime, setCurrentTime] = useState(new Date());

  // Converter state
  const [convAmount, setConvAmount] = useState('100');
  const [convFrom, setConvFrom] = useState('USD');
  const [convTo, setConvTo] = useState('CNY');
  const [convResult, setConvResult] = useState(null);

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 多源汇率获取：前端直接请求多个免费API，绕过Vercel serverless可能的网络问题
  const fetchRatesFromAPIs = useCallback(async () => {
    // 方案1: 通过后端API
    try {
      const res = await fetch('/api/exchange-rate', { signal: AbortSignal.timeout(8000) });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.currencies && !data.isFallback) {
          return { currencies: data.currencies, isFallback: false };
        }
      }
    } catch (e) { /* fall through */ }

    // 方案2: 前端直接请求 exchangerate-api.com
    try {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/CNY', { signal: AbortSignal.timeout(8000) });
      if (res.ok) {
        const data = await res.json();
        if (data.rates) {
          const currencies = {};
          for (const code of CURRENCIES) {
            if (data.rates[code] !== undefined) {
              currencies[code] = { rate: data.rates[code], name: FALLBACK_NAMES[code] };
            }
          }
          return { currencies, isFallback: false };
        }
      }
    } catch (e) { /* fall through */ }

    // 方案3: 另一个免费API frankfurter.app
    try {
      const res = await fetch('https://api.frankfurter.app/latest?from=CNY', { signal: AbortSignal.timeout(8000) });
      if (res.ok) {
        const data = await res.json();
        if (data.rates) {
          const currencies = {};
          for (const code of CURRENCIES) {
            if (data.rates[code] !== undefined) {
              currencies[code] = { rate: data.rates[code], name: FALLBACK_NAMES[code] };
            }
          }
          return { currencies, isFallback: false };
        }
      }
    } catch (e) { /* fall through */ }

    // 方案4: 兜底汇率
    const fallbackCurrencies = {};
    for (const [code, rate] of Object.entries(FALLBACK_RATES)) {
      fallbackCurrencies[code] = { rate, name: FALLBACK_NAMES[code] };
    }
    return { currencies: fallbackCurrencies, isFallback: true };
  }, []);

  // Fetch with retry
  const fetchRates = useCallback(async (attempt = 1) => {
    const result = await fetchRatesFromAPIs();
    setPrevRatesData(rates);
    setRates(result.currencies);
    setIsFallback(result.isFallback);
    setLastUpdate(new Date());
    setLoading(false);
  }, [rates, fetchRatesFromAPIs]);

  // Convert currency - 多源尝试
  const doConvert = useCallback(async () => {
    const amt = parseFloat(convAmount);
    if (isNaN(amt) || amt <= 0) return;

    // 方案1: 后端API
    try {
      const res = await fetch(`/api/exchange-rate?from=${convFrom}&to=${convTo}&amount=${amt}`,
        { signal: AbortSignal.timeout(8000) });
      const data = await res.json();
      if (data.success) {
        setConvResult(data.data);
        return;
      }
    } catch (e) { /* fall through */ }

    // 方案2: 前端直接从rates计算
    if (rates && !isFallback) {
      const fromRate = convFrom === 'CNY' ? 1 : (rates[convFrom]?.rate || FALLBACK_RATES[convFrom]);
      const toRate = convTo === 'CNY' ? 1 : (rates[convTo]?.rate || FALLBACK_RATES[convTo]);
      if (fromRate && toRate) {
        const cnyAmt = amt / fromRate;
        const result = Math.round(cnyAmt * toRate * 100) / 100;
        const rate = Math.round((toRate / fromRate) * 10000) / 10000;
        setConvResult({ amount: amt, from: convFrom, to: convTo, result, rate, isFallback: false });
        return;
      }
    }

    // 方案3: 兜底
    const fromRate = FALLBACK_RATES[convFrom] || (convFrom === 'CNY' ? 1 : null);
    const toRate = FALLBACK_RATES[convTo] || (convTo === 'CNY' ? 1 : null);
    if (fromRate && toRate) {
      const cnyAmt = amt / fromRate;
      const result = Math.round(cnyAmt * toRate * 100) / 100;
      const rate = Math.round((toRate / fromRate) * 10000) / 10000;
      setConvResult({ amount: amt, from: convFrom, to: convTo, result, rate, isFallback: true });
    }
  }, [convAmount, convFrom, convTo, rates, isFallback]);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(() => fetchRates(), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="tech-page">
        <div className="tech-loading">
          <div className="loading-ring">
            <div></div><div></div><div></div><div></div>
          </div>
          <p className="loading-text">{t.loading}</p>
          <p className="loading-sub">CONNECTING TO EXCHANGE API...</p>
        </div>
        <style>{techStyles}</style>
      </div>
    );
  }

  return (
    <div className="tech-page">
      <SEO title="实时汇率查询 — 鹿鸣集" description="人民币兑13种主要货币的实时汇率查询，支持反向计算。数据来源：ExchangeRate-API + Frankfurter，自动刷新。" />
      {/* Animated grid background */}
      <div className="tech-grid-bg"></div>

      {/* Header - HUD style with World Map background */}
      <div className="tech-header">
        {/* World map SVG as background */}
        <div className="header-map-bg">
          <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="mapGlow">
                <feGaussianBlur stdDeviation="0.4" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <radialGradient id="dotG" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00ff88" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#00ff88" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="dotB" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#00d4ff" stopOpacity="0"/>
              </radialGradient>
            </defs>
            {/* Continents - simplified outlines */}
            <path d="M12,18 L18,15 L24,16 L28,18 L30,22 L28,28 L26,32 L24,36 L22,38 L18,36 L16,34 L14,30 L12,26 L10,22 Z" className="map-continent"/>
            <path d="M22,38 L24,40 L22,42 L20,44 L19,42 Z" className="map-continent"/>
            <path d="M22,42 L26,44 L30,46 L32,50 L30,56 L28,60 L24,62 L22,58 L20,54 L18,48 L20,44 Z" className="map-continent"/>
            <path d="M44,18 L48,16 L52,18 L54,22 L52,26 L50,30 L48,32 L44,30 L42,26 L44,22 Z" className="map-continent"/>
            <path d="M44,34 L50,32 L54,34 L56,38 L58,44 L56,50 L54,56 L50,58 L46,56 L44,50 L42,44 L42,38 Z" className="map-continent"/>
            <path d="M54,14 L60,12 L68,14 L76,16 L82,18 L86,20 L84,24 L80,26 L74,28 L68,26 L62,24 L58,22 L54,18 Z" className="map-continent"/>
            <path d="M56,34 L62,32 L68,34 L72,38 L74,42 L72,48 L68,50 L64,48 L60,44 L56,40 Z" className="map-continent"/>
            <path d="M72,28 L78,26 L82,28 L84,32 L82,36 L80,40 L78,44 L76,48 L74,50 L72,48 L70,44 L68,40 L70,34 Z" className="map-continent"/>
            <path d="M82,30 L84,28 L86,30 L84,34 L82,32 Z" className="map-continent"/>
            <path d="M76,52 L80,50 L84,52 L82,56 L78,56 Z" className="map-continent"/>
            <path d="M78,60 L84,58 L90,60 L92,64 L90,68 L84,70 L78,68 L76,64 Z" className="map-continent"/>
            {/* Connection lines from CNY */}
            {[
              {x:22,y:38},{x:50,y:30},{x:60,y:25},{x:47,y:28},{x:83,y:36},
              {x:81,y:36},{x:76,y:52},{x:78,y:50},{x:68,y:45},{x:79,y:46},
              {x:76,y:58},{x:84,y:72},{x:20,y:28}
            ].map((p, i) => (
              <line key={i} x1="77" y1="38" x2={p.x} y2={p.y} className="map-conn"/>
            ))}
            {/* Currency dots */}
            {[
              {x:22,y:38,l:'USD'},{x:50,y:30,l:'EUR'},{x:60,y:25,l:'RUB'},{x:47,y:28,l:'GBP'},
              {x:83,y:36,l:'JPY'},{x:81,y:36,l:'KRW'},{x:76,y:52,l:'THB'},{x:78,y:50,l:'VND'},
              {x:68,y:45,l:'INR'},{x:79,y:46,l:'HKD'},{x:76,y:58,l:'SGD'},{x:84,y:72,l:'AUD'},
              {x:20,y:28,l:'CAD'},{x:77,y:38,l:'CNY'}
            ].map(({x,y,l}) => {
              const isCNY = l === 'CNY';
              return (
                <g key={l}>
                  <circle cx={x} cy={y} r={isCNY?3:2} fill={isCNY?'url(#dotG)':'url(#dotB)'} className="map-dot-glow"/>
                  <circle cx={x} cy={y} r={isCNY?0.7:0.5} fill={isCNY?'#00ff88':'#00d4ff'} filter="url(#mapGlow)"/>
                  <text x={x} y={y-(isCNY?2:1.6)} textAnchor="middle" className={`map-lbl ${isCNY?'map-lbl-c':''}`}>{l}</text>
                </g>
              );
            })}
          </svg>
          {/* Scan line */}
          <div className="header-scan"></div>
        </div>

        {/* HUD corners */}
        <div className="header-corners">
          <span className="corner tl"></span>
          <span className="corner tr"></span>
          <span className="corner bl"></span>
          <span className="corner br"></span>
        </div>

        {/* Header content */}
        <div className="header-content">
          <div className="header-top-bar">
            <span className="status-dot pulse"></span>
            <span className="status-text">{isFallback ? 'OFFLINE' : t.live}</span>
            <span className="header-time">
              {currentTime.toLocaleTimeString('en-US', { hour12: false })}
            </span>
          </div>
          <h1 className="tech-title">{t.title}</h1>
          <p className="tech-subtitle">{t.subtitle}</p>
          <div className="header-meta">
            {isFallback ? (
              <span className="meta-tag warning">{t.fallback}</span>
            ) : (
              <span className="meta-tag online">{t.liveData}</span>
            )}
            {lastUpdate && (
              <span className="meta-time">
                {t.lastUpdate}: {lastUpdate.toLocaleTimeString(lang === 'zh' ? 'zh-CN' : lang === 'ru' ? 'ru-RU' : 'en-US', { hour12: false })}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Scrolling Ticker - Neon style */}
      {rates && (
        <div className="tech-ticker-wrap">
          <div className="ticker-label">RATES</div>
          <div className="tech-ticker">
            <div className="ticker-track">
              {[...CURRENCIES, ...CURRENCIES].map((code, i) => {
                const c = rates[code];
                if (!c) return null;
                const change = getRateChange(code);
                const isDup = i >= CURRENCIES.length;
                return (
                  <span key={`${code}-${i}`} className="ticker-item">
                    <span className="ticker-flag">{FLAGS[code]}</span>
                    <span className="ticker-code">{code}</span>
                    <span className="ticker-rate">{formatRate(c.rate)}</span>
                    {!isDup && change === 'up' && <span className="ticker-up">▲</span>}
                    {!isDup && change === 'down' && <span className="ticker-down">▼</span>}
                    <span className="ticker-sep">│</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Rate Cards */}
      {rates && (
        <div className="tech-section">
          <div className="section-header">
            <span className="section-line"></span>
            <h2 className="section-title-tech">{t.rateTable}</h2>
            <span className="section-line"></span>
          </div>
          <p className="section-base">{t.baseCNY}</p>
          <div className="tech-grid">
            {CURRENCIES.map((code) => {
              const c = rates[code];
              if (!c) return null;
              const change = getRateChange(code);
              return (
                <div key={code} className={`tech-card ${change === 'up' ? 'card-up' : change === 'down' ? 'card-down' : ''}`}>
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div className="card-top">
                      <span className="card-flag">{FLAGS[code]}</span>
                      <span className="card-code">{code}</span>
                      {change === 'up' && <span className="card-change up">▲</span>}
                      {change === 'down' && <span className="card-change down">▼</span>}
                    </div>
                    <div className="card-name">{getName(code)}</div>
                    <div className="card-rate">{formatRate(c.rate)}</div>
                    <div className="card-sub">{t.per100} CNY = {formatRate(c.rate * 100)} {code}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Currency Converter */}
      <div className="tech-section">
        <div className="section-header">
          <span className="section-line"></span>
          <h2 className="section-title-tech">{t.converter}</h2>
          <span className="section-line"></span>
        </div>
        <div className="tech-converter">
          <div className="converter-corners">
            <span className="corner tl"></span>
            <span className="corner tr"></span>
            <span className="corner bl"></span>
            <span className="corner br"></span>
          </div>
          <div className="conv-field">
            <label className="conv-label">{t.amount}</label>
            <div className="conv-input-wrap">
              <input type="number" value={convAmount} onChange={(e) => setConvAmount(e.target.value)}
                placeholder="100" min="0" step="any" className="conv-input"/>
              <span className="conv-currency-tag">{convFrom}</span>
            </div>
          </div>
          <div className="conv-row">
            <div className="conv-select-wrap">
              <label className="conv-label">{t.from}</label>
              <select value={convFrom} onChange={(e) => setConvFrom(e.target.value)} className="conv-select">
                <option value="CNY">🇨🇳 CNY</option>
                {CURRENCIES.map(c => <option key={c} value={c}>{FLAGS[c]} {c}</option>)}
              </select>
            </div>
            <button onClick={handleSwap} className="conv-swap"><span>⇄</span></button>
            <div className="conv-select-wrap">
              <label className="conv-label">{t.to}</label>
              <select value={convTo} onChange={(e) => setConvTo(e.target.value)} className="conv-select">
                <option value="CNY">🇨🇳 CNY</option>
                {CURRENCIES.map(c => <option key={c} value={c}>{FLAGS[c]} {c}</option>)}
              </select>
            </div>
          </div>
          {convResult && (
            <div className="conv-result">
              <div className="result-label">{t.result}</div>
              <div className="result-value">
                <span className="result-from">{convAmount} {convFrom}</span>
                <span className="result-eq">=</span>
                <span className="result-to">{convResult.result} {convTo}</span>
              </div>
              <div className="result-rate">
                1 {convFrom} = {convResult.rate} {convTo}
                {convResult.isFallback && <span className="result-fallback"> ({t.ref})</span>}
              </div>
            </div>
          )}
        </div>
        <div className="quick-convert">
          <p className="quick-label">{t.quickConvert}</p>
          <div className="quick-buttons">
            {[
              { from: 'USD', to: 'CNY', amount: 100 },
              { from: 'EUR', to: 'CNY', amount: 100 },
              { from: 'RUB', to: 'CNY', amount: 1000 },
              { from: 'CNY', to: 'USD', amount: 1000 },
              { from: 'CNY', to: 'RUB', amount: 1000 },
              { from: 'GBP', to: 'CNY', amount: 100 },
            ].map((item, i) => (
              <button key={i} onClick={() => { setConvAmount(String(item.amount)); setConvFrom(item.from); setConvTo(item.to); }}
                className="quick-btn">
                {FLAGS[item.from]} {item.amount} {item.from} → {item.to}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="tech-footer">
        <div className="scan-line"></div>
        <p>LUMINGJI EXCHANGE SYSTEM v2.0</p>
      </div>

      <style>{techStyles}</style>
    </div>
  );
}

const techStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

  .tech-page {
    min-height: 100vh;
    background: #0a0e1a;
    color: #e0e6f0;
    position: relative;
    overflow-x: hidden;
    padding: 2rem 1rem 4rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .tech-grid-bg {
    position: fixed; inset: 0;
    background-image: linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: gridMove 20s linear infinite;
    pointer-events: none; z-index: 0;
  }
  @keyframes gridMove { 0%{transform:translate(0,0)} 100%{transform:translate(60px,60px)} }
  .tech-page > *:not(.tech-grid-bg) { position: relative; z-index: 1; }

  /* === HEADER WITH MAP BG === */
  .tech-header {
    text-align: center;
    padding: 0;
    margin: 0 auto 2rem;
    max-width: 700px;
    position: relative;
    border: 1px solid rgba(0,212,255,0.2);
    background: rgba(10,14,26,0.95);
    backdrop-filter: blur(10px);
    overflow: hidden;
  }
  .header-map-bg {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    opacity: 0.35;
    pointer-events: none;
    overflow: hidden;
  }
  .header-map-bg svg {
    width: 100%; height: 100%;
    object-fit: cover;
  }
  .map-continent {
    fill: rgba(0,212,255,0.06);
    stroke: rgba(0,212,255,0.18);
    stroke-width: 0.25;
  }
  .map-conn {
    stroke: rgba(0,212,255,0.08);
    stroke-width: 0.12;
    stroke-dasharray: 1.5 0.8;
    animation: connPulse 3s ease-in-out infinite;
  }
  @keyframes connPulse { 0%,100%{stroke-opacity:0.2} 50%{stroke-opacity:0.6} }
  .map-dot-glow { animation: dotP 2.5s ease-in-out infinite; }
  @keyframes dotP { 0%,100%{opacity:0.3;r:2} 50%{opacity:0.6;r:3.5} }
  .map-lbl {
    font-family: 'Orbitron', monospace;
    font-size: 1.8px; fill: #00d4ff; font-weight: 700; opacity: 0.7;
  }
  .map-lbl-c { fill: #00ff88; font-size: 2px; opacity: 1; }
  .header-scan {
    position: absolute; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,212,255,0.25), transparent);
    animation: hScan 5s ease-in-out infinite;
    pointer-events: none;
  }
  @keyframes hScan { 0%{top:0;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{top:100%;opacity:0} }

  .header-corners .corner {
    position: absolute; width: 16px; height: 16px;
    border-color: #00d4ff; border-style: solid; z-index: 3;
  }
  .corner.tl { top:-1px;left:-1px;border-width:2px 0 0 2px }
  .corner.tr { top:-1px;right:-1px;border-width:2px 2px 0 0 }
  .corner.bl { bottom:-1px;left:-1px;border-width:0 0 2px 2px }
  .corner.br { bottom:-1px;right:-1px;border-width:0 2px 2px 0 }

  .header-content {
    position: relative; z-index: 2;
    padding: 2rem 1.5rem;
  }
  .header-top-bar {
    display: flex; align-items: center; justify-content: center;
    gap: 0.5rem; margin-bottom: 1rem;
    font-family: 'Orbitron', monospace; font-size: 0.65rem;
    color: #4a5568; letter-spacing: 3px;
  }
  .status-dot { width:6px;height:6px;background:#00ff88;border-radius:50%;display:inline-block }
  .status-dot.pulse { animation: sPulse 2s ease-in-out infinite; }
  @keyframes sPulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,255,136,0.4)} 50%{box-shadow:0 0 8px 4px rgba(0,255,136,0.2)} }
  .status-text { color: #00ff88; }
  .header-time { color: #00d4ff; }

  .tech-title {
    font-family: 'Orbitron', monospace;
    font-size: 2.4rem; font-weight: 900;
    background: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 40%, #00ff88 80%, #00d4ff 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    letter-spacing: 6px; margin-bottom: 0.3rem;
    animation: tGlow 4s ease-in-out infinite;
  }
  @keyframes tGlow { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  .tech-subtitle {
    font-family: 'Orbitron', monospace; font-size: 0.7rem;
    color: #4a5568; letter-spacing: 6px; margin-bottom: 1rem;
  }
  .header-meta { display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap }
  .meta-tag {
    font-family:'Orbitron',monospace;font-size:0.6rem;padding:0.2rem 0.6rem;border-radius:2px;letter-spacing:1px
  }
  .meta-tag.online { color:#00ff88;border:1px solid rgba(0,255,136,0.3);background:rgba(0,255,136,0.05) }
  .meta-tag.warning { color:#fbbf24;border:1px solid rgba(251,191,36,0.3);background:rgba(251,191,36,0.05) }
  .meta-time { font-family:monospace;font-size:0.65rem;color:#4a5568 }

  /* === LOADING === */
  .tech-loading { display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;gap:1.5rem }
  .loading-ring { width:60px;height:60px;position:relative }
  .loading-ring div { position:absolute;width:48px;height:48px;border:3px solid transparent;border-top-color:#00d4ff;border-radius:50%;animation:rSpin 1.2s cubic-bezier(0.5,0,0.5,1) infinite }
  .loading-ring div:nth-child(1){animation-delay:-0.45s}
  .loading-ring div:nth-child(2){animation-delay:-0.3s;border-top-color:#7b2ff7}
  .loading-ring div:nth-child(3){animation-delay:-0.15s;border-top-color:#00ff88}
  @keyframes rSpin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
  .loading-text{color:#00d4ff;font-size:1rem;letter-spacing:2px}
  .loading-sub{color:#4a5568;font-size:0.7rem;letter-spacing:3px;font-family:monospace}

  /* === TICKER === */
  .tech-ticker-wrap { display:flex;align-items:stretch;margin:0 auto 2.5rem;max-width:1100px;border:1px solid rgba(0,212,255,0.12);background:rgba(0,212,255,0.02);overflow:hidden }
  .ticker-label { background:linear-gradient(180deg,#00d4ff,#7b2ff7);color:#fff;font-family:'Orbitron',monospace;font-size:0.6rem;font-weight:700;letter-spacing:2px;padding:0.6rem 0.8rem;display:flex;align-items:center;white-space:nowrap }
  .tech-ticker { flex:1;overflow:hidden;padding:0.5rem 0 }
  .ticker-track { display:inline-flex;animation:tScroll 45s linear infinite;white-space:nowrap }
  .tech-ticker:hover .ticker-track { animation-play-state:paused }
  @keyframes tScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  .ticker-item { display:inline-flex;align-items:center;gap:0.3rem;margin:0 0.8rem;font-family:monospace;font-size:0.8rem }
  .ticker-flag{font-size:0.9rem} .ticker-code{color:#00d4ff;font-weight:700} .ticker-rate{color:#e0e6f0}
  .ticker-up{color:#00ff88;font-size:0.65rem} .ticker-down{color:#ff4466;font-size:0.65rem} .ticker-sep{color:#1e2a3a;margin:0 0.3rem}

  /* === SECTIONS === */
  .tech-section { max-width:1100px;margin:0 auto 2.5rem }
  .section-header { display:flex;align-items:center;gap:1rem;margin-bottom:0.5rem }
  .section-line { flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(0,212,255,0.2),transparent) }
  .section-title-tech { font-family:'Orbitron',monospace;font-size:0.75rem;color:#00d4ff;letter-spacing:3px;text-transform:uppercase;white-space:nowrap }
  .section-base { text-align:center;font-size:0.7rem;color:#4a5568;font-family:monospace;margin-bottom:1.2rem;letter-spacing:1px }

  /* === CARDS === */
  .tech-grid { display:grid;grid-template-columns:repeat(2,1fr);gap:0.8rem }
  @media(min-width:640px){.tech-grid{grid-template-columns:repeat(3,1fr)}}
  @media(min-width:768px){.tech-grid{grid-template-columns:repeat(4,1fr)}}
  @media(min-width:1024px){.tech-grid{grid-template-columns:repeat(5,1fr)}}
  .tech-card { position:relative;border:1px solid rgba(0,212,255,0.1);background:rgba(15,20,35,0.8);backdrop-filter:blur(8px);overflow:hidden;transition:all 0.3s ease }
  .tech-card:hover { border-color:rgba(0,212,255,0.3);transform:translateY(-2px);box-shadow:0 4px 20px rgba(0,212,255,0.08) }
  .card-glow { position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#00d4ff,transparent);opacity:0;transition:opacity 0.3s }
  .tech-card:hover .card-glow{opacity:1}
  .tech-card.card-up{border-color:rgba(0,255,136,0.15)} .tech-card.card-up .card-glow{background:linear-gradient(90deg,transparent,#00ff88,transparent)}
  .tech-card.card-down{border-color:rgba(255,68,102,0.15)} .tech-card.card-down .card-glow{background:linear-gradient(90deg,transparent,#ff4466,transparent)}
  .card-content{padding:0.9rem}
  .card-top{display:flex;align-items:center;gap:0.4rem;margin-bottom:0.3rem}
  .card-flag{font-size:1.1rem} .card-code{font-family:'Orbitron',monospace;font-weight:700;font-size:0.85rem;color:#00d4ff}
  .card-change{margin-left:auto;font-size:0.65rem} .card-change.up{color:#00ff88} .card-change.down{color:#ff4466}
  .card-name{font-size:0.7rem;color:#6b7280;margin-bottom:0.4rem}
  .card-rate{font-family:'Orbitron',monospace;font-size:1.1rem;font-weight:700;color:#e0e6f0;margin-bottom:0.2rem;text-shadow:0 0 10px rgba(0,212,255,0.15)}
  .card-sub{font-family:monospace;font-size:0.6rem;color:#4a5568}

  /* === CONVERTER === */
  .tech-converter { position:relative;border:1px solid rgba(123,47,247,0.2);background:rgba(15,20,35,0.9);backdrop-filter:blur(12px);padding:1.5rem;max-width:520px;margin:0 auto }
  .converter-corners .corner{position:absolute;width:12px;height:12px;border-color:#7b2ff7;border-style: solid}
  .converter-corners .corner.tl{top:-1px;left:-1px;border-width:2px 0 0 2px}
  .converter-corners .corner.tr{top:-1px;right:-1px;border-width:2px 2px 0 0}
  .converter-corners .corner.bl{bottom:-1px;left:-1px;border-width:0 0 2px 2px}
  .converter-corners .corner.br{bottom:-1px;right:-1px;border-width:0 2px 2px 0}
  .conv-field{margin-bottom:1rem}
  .conv-label{display:block;font-family:'Orbitron',monospace;font-size:0.6rem;color:#6b7280;letter-spacing:2px;text-transform:uppercase;margin-bottom:0.4rem}
  .conv-input-wrap{position:relative;display:flex;align-items:center}
  .conv-input{width:100%;background:rgba(0,212,255,0.03);border:1px solid rgba(0,212,255,0.15);color:#e0e6f0;font-family:'Orbitron',monospace;font-size:1.5rem;font-weight:700;padding:0.8rem 3.5rem 0.8rem 1rem;outline:none;transition:all 0.3s}
  .conv-input:focus{border-color:#00d4ff;box-shadow:0 0 12px rgba(0,212,255,0.1)}
  .conv-currency-tag{position:absolute;right:0.8rem;font-family:'Orbitron',monospace;font-size:0.7rem;color:#00d4ff;font-weight:700}
  .conv-row{display:flex;align-items:flex-end;gap:0.8rem;margin-bottom:1.2rem}
  .conv-select-wrap{flex:1}
  .conv-select{width:100%;background:rgba(0,212,255,0.03);border:1px solid rgba(0,212,255,0.15);color:#e0e6f0;font-family:monospace;font-size:0.85rem;padding:0.6rem 0.8rem;outline:none;appearance:none;cursor:pointer;transition:all 0.3s}
  .conv-select:focus{border-color:#7b2ff7;box-shadow:0 0 12px rgba(123,47,247,0.1)}
  .conv-select option{background:#0f1423;color:#e0e6f0}
  .conv-swap{width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:transparent;border:1px solid rgba(123,47,247,0.3);color:#7b2ff7;font-size:1.1rem;cursor:pointer;transition:all 0.3s;flex-shrink:0}
  .conv-swap:hover{background:rgba(123,47,247,0.1);border-color:#7b2ff7;box-shadow:0 0 12px rgba(123,47,247,0.15)}
  .conv-result{border:1px solid rgba(0,255,136,0.15);background:rgba(0,255,136,0.03);padding:1rem;text-align:center}
  .result-label{font-family:'Orbitron',monospace;font-size:0.55rem;color:#4a5568;letter-spacing:3px;text-transform:uppercase;margin-bottom:0.5rem}
  .result-value{display:flex;align-items:center;justify-content:center;gap:0.6rem;flex-wrap:wrap;margin-bottom:0.4rem}
  .result-from{font-family:'Orbitron',monospace;font-size:0.9rem;color:#6b7280}
  .result-eq{font-family:'Orbitron',monospace;font-size:1rem;color:#00ff88}
  .result-to{font-family:'Orbitron',monospace;font-size:1.3rem;font-weight:800;color:#00ff88;text-shadow:0 0 15px rgba(0,255,136,0.2)}
  .result-rate{font-family:monospace;font-size:0.7rem;color:#4a5568}
  .result-fallback{color:#fbbf24}
  .quick-convert{max-width:520px;margin:1rem auto 0;text-align:center}
  .quick-label{font-family:'Orbitron',monospace;font-size:0.55rem;color:#4a5568;letter-spacing:2px;text-transform:uppercase;margin-bottom:0.6rem}
  .quick-buttons{display:flex;flex-wrap:wrap;justify-content:center;gap:0.5rem}
  .quick-btn{font-family:monospace;font-size:0.7rem;padding:0.35rem 0.7rem;background:rgba(0,212,255,0.03);border:1px solid rgba(0,212,255,0.12);color:#6b7280;cursor:pointer;transition:all 0.3s;letter-spacing:0.5px}
  .quick-btn:hover{border-color:#00d4ff;color:#00d4ff;background:rgba(0,212,255,0.06);box-shadow:0 0 10px rgba(0,212,255,0.08)}

  .tech-footer{text-align:center;margin-top:3rem;position:relative}
  .tech-footer p{font-family:'Orbitron',monospace;font-size:0.55rem;color:#1e2a3a;letter-spacing:4px}
  .scan-line{width:100%;max-width:400px;height:1px;margin:0 auto 1rem;background:linear-gradient(90deg,transparent,rgba(0,212,255,0.15),transparent)}

  @media(max-width:640px){
    .tech-title{font-size:1.5rem;letter-spacing:3px}
    .tech-subtitle{font-size:0.55rem;letter-spacing:3px}
    .tech-page{padding:1rem 0.6rem 3rem}
    .card-rate{font-size:0.9rem}
    .conv-input{font-size:1.2rem}
    .header-content{padding:1.5rem 1rem}
  }
`;
