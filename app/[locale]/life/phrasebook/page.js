'use client';

import { useState, useMemo, useEffect } from 'react';
import { useI18n } from '../../../../i18n-context';
import phrasebookData from '../../../../data/life/phrasebook-data';

/* ── 每个分类的青绿色系配色 ── */
const categoryColors = {
  red:     { accent: '#c2574a', bg: '#fef7f5', border: '#f0d5d0', chip: '#e8a89e' },
  sky:     { accent: '#3a8a9e', bg: '#f0f8fa', border: '#c5dfe6', chip: '#7cb8c9' },
  orange:  { accent: '#b8763a', bg: '#faf6f0', border: '#e5d5c0', chip: '#d4a872' },
  pink:    { accent: '#b56576', bg: '#faf2f4', border: '#e5cdd3', chip: '#d49aa8' },
  violet:  { accent: '#7b6ba5', bg: '#f5f2fa', border: '#d5cde5', chip: '#a89bc8' },
  rose:    { accent: '#c06070', bg: '#faf3f4', border: '#e5cdd2', chip: '#d49aa4' },
  emerald: { accent: '#3a8a6e', bg: '#f0f8f4', border: '#c0ddd0', chip: '#7cb8a0' },
  indigo:  { accent: '#5a6a9e', bg: '#f2f4fa', border: '#ccd3e5', chip: '#94a0c8' },
  amber:   { accent: '#a08040', bg: '#f8f5ee', border: '#e0d5b8', chip: '#c8b478' },
  cyan:    { accent: '#3a8a8a', bg: '#f0f8f8', border: '#c0dede', chip: '#7cb8b8' },
  fuchsia: { accent: '#9a5a8a', bg: '#f8f2f6', border: '#ddc8d5', chip: '#c090b0' },
};

export default function PhrasebookPage() {
  const { locale } = useI18n();
  const lang = locale || 'zh';
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(null);

  const filteredData = useMemo(() => {
    let data = phrasebookData;
    if (activeCategory !== 'all') {
      data = data.filter(cat => cat.id === activeCategory);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      data = data.map(cat => ({
        ...cat,
        phrases: cat.phrases.filter(p =>
          p.zh.toLowerCase().includes(q) ||
          p.py.toLowerCase().includes(q) ||
          p.en.toLowerCase().includes(q) ||
          p.ru.toLowerCase().includes(q)
        )
      })).filter(cat => cat.phrases.length > 0);
    }
    return data;
  }, [activeCategory, search]);

  const totalPhrases = phrasebookData.reduce((sum, cat) => sum + cat.phrases.length, 0);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(text);
      setTimeout(() => setCopied(null), 1800);
    }
  };

  const ui = {
    zh: { badge: '口语手册', title: '中文生存口语手册', subtitle: '点击句子即可复制中文 — 随身必备的实用短句', stats: `${phrasebookData.length} 个场景 · ${totalPhrases} 句实用口语`, all: '全部', search: '搜索短语…', phrases: '句', noResult: '没有找到相关短语', tip: '把中文句子给店员、司机、服务员看，他们就能看懂！', back: '返回生活指南' },
    en: { badge: 'Phrasebook', title: 'Chinese Survival Phrasebook', subtitle: 'Tap any phrase to copy — Your essential Chinese phrases', stats: `${totalPhrases} phrases in ${phrasebookData.length} categories`, all: 'All', search: 'Search phrases...', phrases: 'phrases', noResult: 'No phrases found', tip: 'Show the Chinese text to a shopkeeper, driver, or waiter — they\'ll understand!', back: 'Back to guides' },
    ru: { badge: 'Разговорник', title: 'Разговорник для выживания в Китае', subtitle: 'Нажмите, чтобы скопировать — Необходимые фразы на каждый день', stats: `${totalPhrases} фраз в ${phrasebookData.length} категориях`, all: 'Все', search: 'Поиск фраз...', phrases: 'фраз', noResult: 'Фразы не найдены', tip: 'Покажите китайский текст продавцу, таксисту или официанту — они поймут!', back: 'Назад к гидам' },
  }[lang];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f0f7f4 0%, #f8faf8 30%, #fafcfa 60%, #f4f8f5 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* ── 全局样式 ── */}
      <style>{`
        @keyframes mistFloat {
          0%, 100% { transform: translateX(0) translateY(0); opacity: 0.3; }
          50% { transform: translateX(20px) translateY(-8px); opacity: 0.5; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes copiedPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>

      {/* ── 远山装饰 · SVG ── */}
      <svg style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: '35vh', pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 1440 400" preserveAspectRatio="none">
        {/* 最远山 */}
        <path d="M0,400 L0,280 Q120,200 240,260 Q360,180 480,240 Q600,160 720,220 Q840,140 960,200 Q1080,160 1200,230 Q1320,190 1440,250 L1440,400 Z"
          fill="rgba(120,180,160,0.06)" />
        {/* 中景山 */}
        <path d="M0,400 L0,310 Q180,240 360,290 Q540,220 720,270 Q900,200 1080,260 Q1260,230 1440,280 L1440,400 Z"
          fill="rgba(100,170,145,0.07)" />
        {/* 近山 */}
        <path d="M0,400 L0,340 Q200,290 400,320 Q600,270 800,310 Q1000,260 1200,300 Q1350,280 1440,320 L1440,400 Z"
          fill="rgba(80,160,130,0.06)" />
      </svg>

      {/* ── 云雾装饰 ── */}
      <div style={{
        position: 'fixed', top: '15%', left: '-5%', width: '40vw', height: '20vw',
        borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,210,190,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', animation: 'mistFloat 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'fixed', top: '40%', right: '-8%', width: '35vw', height: '18vw',
        borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(140,200,175,0.10) 0%, transparent 70%)',
        pointerEvents: 'none', animation: 'mistFloat 15s ease-in-out infinite 3s',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '24px 16px 60px' }}>

        {/* ══════ Hero ══════ */}
        <div style={{
          textAlign: 'center', padding: '44px 24px 32px', marginBottom: 28,
          background: 'linear-gradient(135deg, rgba(200,230,215,0.35) 0%, rgba(180,220,200,0.20) 50%, rgba(210,235,220,0.25) 100%)',
          borderRadius: 20, border: '1px solid rgba(120,180,155,0.2)',
          backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          position: 'relative', overflow: 'hidden',
          animation: 'fadeInUp 0.8s ease-out',
        }}>
          {/* Hero 内小山水装饰 */}
          <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', pointerEvents: 'none', opacity: 0.4 }} viewBox="0 0 400 120" preserveAspectRatio="none">
            <path d="M0,120 L0,80 Q50,50 100,70 Q150,40 200,65 Q250,35 300,55 Q350,45 400,70 L400,120 Z" fill="rgba(120,180,155,0.12)" />
            <path d="M0,120 L0,95 Q80,70 160,85 Q240,60 320,80 Q380,72 400,90 L400,120 Z" fill="rgba(100,170,140,0.08)" />
          </svg>

          {/* 标签 */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(120,180,155,0.15)', border: '1px solid rgba(120,180,155,0.3)',
            borderRadius: 20, padding: '4px 14px', fontSize: 12, color: '#4a8a6e',
            fontWeight: 500, marginBottom: 14,
          }}>
            🈶 {ui.badge}
          </div>

          {/* 标题 */}
          <h1 style={{
            fontSize: 'clamp(22px, 5vw, 30px)', fontWeight: 800,
            color: '#2d5a4a', lineHeight: 1.3, marginBottom: 10,
            position: 'relative',
          }}>
            {ui.title}
          </h1>
          <p style={{ color: '#6a9a85', fontSize: 14, marginBottom: 6, position: 'relative' }}>
            {ui.subtitle}
          </p>
          <p style={{ color: '#90b8a5', fontSize: 12, position: 'relative' }}>
            {ui.stats}
          </p>

          {/* 标题下装饰线 */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 14, position: 'relative' }}>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,180,155,0.4))' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(120,180,155,0.3)' }} />
            <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, rgba(120,180,155,0.4), transparent)' }} />
          </div>
        </div>

        {/* ══════ 搜索框 ══════ */}
        <div style={{ position: 'relative', marginBottom: 20, animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={ui.search}
            style={{
              width: '100%', padding: '12px 16px 12px 40px', borderRadius: 14,
              border: '1px solid rgba(120,180,155,0.25)', fontSize: 14,
              background: 'rgba(255,255,255,0.7)', color: '#2d5a4a',
              backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              outline: 'none', transition: 'all 0.3s', boxSizing: 'border-box',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(100,170,140,0.5)';
              e.target.style.boxShadow = '0 0 0 3px rgba(120,180,155,0.12)';
              e.target.style.background = 'rgba(255,255,255,0.9)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(120,180,155,0.25)';
              e.target.style.boxShadow = 'none';
              e.target.style.background = 'rgba(255,255,255,0.7)';
            }}
          />
          <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: '#90b8a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* ══════ 分类导航 ══════ */}
        <div style={{
          display: 'flex', gap: 8, marginBottom: 24, overflowX: 'auto', paddingBottom: 4,
          scrollbarWidth: 'none', animation: 'fadeInUp 0.8s ease-out 0.2s both',
        }}>
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              padding: '7px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
              whiteSpace: 'nowrap', cursor: 'pointer', flexShrink: 0, transition: 'all 0.3s',
              border: activeCategory === 'all' ? '1px solid rgba(80,160,130,0.4)' : '1px solid rgba(120,180,155,0.15)',
              background: activeCategory === 'all'
                ? 'linear-gradient(135deg, #5aa085, #4a9075)'
                : 'rgba(255,255,255,0.5)',
              color: activeCategory === 'all' ? '#fff' : '#5a8a75',
              boxShadow: activeCategory === 'all' ? '0 3px 12px rgba(80,160,130,0.2)' : 'none',
            }}
          >
            {ui.all} ({totalPhrases})
          </button>
          {phrasebookData.map(cat => {
            const c = categoryColors[cat.color] || categoryColors.emerald;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '7px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                  whiteSpace: 'nowrap', cursor: 'pointer', flexShrink: 0, transition: 'all 0.3s',
                  border: isActive ? `1px solid ${c.accent}40` : '1px solid rgba(120,180,155,0.15)',
                  background: isActive ? `linear-gradient(135deg, ${c.accent}, ${c.chip})` : 'rgba(255,255,255,0.5)',
                  color: isActive ? '#fff' : '#5a8a75',
                  boxShadow: isActive ? `0 3px 12px ${c.accent}25` : 'none',
                }}
              >
                {cat.icon} {cat.name[lang]}
              </button>
            );
          })}
        </div>

        {/* ══════ 短语卡片 ══════ */}
        {filteredData.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#a0c0b0', fontSize: 14 }}>
            {ui.noResult}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {filteredData.map((cat, ci) => {
              const c = categoryColors[cat.color] || categoryColors.emerald;
              return (
                <div key={cat.id} style={{ animation: `fadeInUp 0.5s ease-out ${ci * 0.06}s both` }}>
                  {/* 分类标题 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <div style={{
                      width: 34, height: 34, borderRadius: 10,
                      background: `linear-gradient(135deg, ${c.bg}, ${c.border})`,
                      border: `1px solid ${c.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
                    }}>
                      {cat.icon}
                    </div>
                    <div>
                      <h2 style={{ fontSize: 15, fontWeight: 700, color: '#2d5a4a', margin: 0, lineHeight: 1.2 }}>
                        {cat.name[lang]}
                      </h2>
                      <span style={{ fontSize: 11, color: '#90b8a5' }}>
                        {cat.phrases.length} {ui.phrases}
                      </span>
                    </div>
                    {/* 装饰线 */}
                    <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${c.border}, transparent)` }} />
                  </div>

                  {/* 短句网格 */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 10 }}>
                    {cat.phrases.map((phrase, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleCopy(phrase.zh)}
                        style={{
                          position: 'relative', padding: '14px 16px', borderRadius: 14,
                          background: c.bg, border: `1px solid ${c.border}`,
                          cursor: 'pointer', transition: 'all 0.25s', overflow: 'hidden',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = c.accent;
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = `0 6px 20px ${c.accent}18`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = c.border;
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {/* 左侧色条 */}
                        <div style={{
                          position: 'absolute', left: 0, top: 10, bottom: 10, width: 3, borderRadius: 2,
                          background: `linear-gradient(180deg, ${c.accent}, ${c.chip})`, opacity: 0.5,
                        }} />

                        {/* 中文 */}
                        <div style={{ fontSize: 15, fontWeight: 700, color: '#2d4a3e', marginBottom: 3, lineHeight: 1.4 }}>
                          {phrase.zh}
                        </div>
                        {/* 拼音 */}
                        <div style={{ fontSize: 11, color: c.accent, fontStyle: 'italic', marginBottom: 4, opacity: 0.7 }}>
                          {phrase.py}
                        </div>
                        {/* 翻译 */}
                        <div style={{ fontSize: 12, color: '#5a7a6e', lineHeight: 1.4 }}>
                          {lang === 'zh' ? phrase.en : (phrase[lang] || phrase.en)}
                        </div>
                        {lang === 'zh' && (
                          <div style={{ fontSize: 11, color: '#90a89e', marginTop: 2 }}>
                            {phrase.ru}
                          </div>
                        )}

                        {/* 复制指示 */}
                        <div style={{ position: 'absolute', top: 10, right: 12 }}>
                          {copied === phrase.zh ? (
                            <span style={{
                              fontSize: 11, fontWeight: 600, color: '#4a9075',
                              animation: 'copiedPulse 0.8s ease-in-out',
                            }}>已复制 ✓</span>
                          ) : (
                            <svg style={{ width: 14, height: 14, color: c.chip, opacity: 0.4 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ══════ 底部提示 ══════ */}
        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', padding: '10px 20px', borderRadius: 14,
            background: 'rgba(200,225,210,0.35)', border: '1px solid rgba(120,180,155,0.2)',
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          }}>
            <span style={{ fontSize: 13, color: '#4a8a6e' }}>💡 {ui.tip}</span>
          </div>
        </div>

        {/* ══════ 返回 ══════ */}
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <a href={`/${lang}/life`} style={{
            fontSize: 13, color: '#7aaa95', textDecoration: 'none', transition: 'color 0.3s',
          }}
            onMouseEnter={(e) => e.target.style.color = '#4a8a6e'}
            onMouseLeave={(e) => e.target.style.color = '#7aaa95'}
          >
            ← {ui.back}
          </a>
        </div>
      </div>
    </div>
  );
}
