'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useI18n } from '../../../../i18n-context';
import phrasebookData from '../../../../data/life/phrasebook-data';

/* ── 每个分类的专属渐变色 ── */
const categoryGradients = {
  red:     { from: '#ef4444', to: '#f97316', glow: 'rgba(239,68,68,0.35)',  bg: 'rgba(239,68,68,0.08)',  border: 'rgba(239,68,68,0.25)' },
  sky:     { from: '#0ea5e9', to: '#6366f1', glow: 'rgba(14,165,233,0.35)', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.25)' },
  orange:  { from: '#f97316', to: '#eab308', glow: 'rgba(249,115,22,0.35)', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.25)' },
  pink:    { from: '#ec4899', to: '#f43f5e', glow: 'rgba(236,72,153,0.35)', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.25)' },
  violet:  { from: '#8b5cf6', to: '#a855f7', glow: 'rgba(139,92,246,0.35)', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.25)' },
  rose:    { from: '#f43f5e', to: '#fb7185', glow: 'rgba(244,63,94,0.35)',  bg: 'rgba(244,63,94,0.08)',  border: 'rgba(244,63,94,0.25)' },
  emerald: { from: '#10b981', to: '#14b8a6', glow: 'rgba(16,185,129,0.35)', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)' },
  indigo:  { from: '#6366f1', to: '#818cf8', glow: 'rgba(99,102,241,0.35)', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.25)' },
  amber:   { from: '#f59e0b', to: '#fbbf24', glow: 'rgba(245,158,11,0.35)', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
  cyan:    { from: '#06b6d4', to: '#22d3ee', glow: 'rgba(6,182,212,0.35)',  bg: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.25)' },
  fuchsia: { from: '#d946ef', to: '#a855f7', glow: 'rgba(217,70,239,0.35)', bg: 'rgba(217,70,239,0.08)', border: 'rgba(217,70,239,0.25)' },
};

export default function PhrasebookPage() {
  const { locale } = useI18n();
  const lang = locale || 'zh';
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(null);
  const [mounted, setMounted] = useState(false);
  const chipScrollRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

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

  /* ── i18n 文案 ── */
  const ui = {
    zh: { badge: '口语手册', title: '中文生存口语手册', subtitle: '点击句子即可复制中文 — 随身必备的实用短句', stats: `${phrasebookData.length} 个场景 · ${totalPhrases} 句实用口语`, all: '全部', search: '搜索短语…', phrases: '句', noResult: '没有找到相关短语', tip: '把中文句子给店员、司机、服务员看，他们就能看懂！', back: '返回生活指南' },
    en: { badge: 'Phrasebook', title: 'Chinese Survival Phrasebook', subtitle: 'Tap any phrase to copy — Your essential Chinese phrases', stats: `${totalPhrases} phrases in ${phrasebookData.length} categories`, all: 'All', search: 'Search phrases...', phrases: 'phrases', noResult: 'No phrases found', tip: 'Show the Chinese text to a shopkeeper, driver, or waiter — they\'ll understand!', back: 'Back to guides' },
    ru: { badge: 'Разговорник', title: 'Разговорник для выживания в Китае', subtitle: 'Нажмите, чтобы скопировать — Необходимые фразы на каждый день', stats: `${totalPhrases} фраз в ${phrasebookData.length} категориях`, all: 'Все', search: 'Поиск фраз...', phrases: 'фраз', noResult: 'Фразы не найдены', tip: 'Покажите китайский текст продавцу, таксисту или официанту — они поймут!', back: 'Назад к гидам' },
  }[lang];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #0f172a 0%, #1e1b4b 40%, #0f172a 70%, #1a1a2e 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* ── 全局装饰光斑 ── */}
      <div style={{ position: 'fixed', top: '-20%', left: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '-15%', right: '-10%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '24px 16px 60px' }}>

        {/* ══════ Hero ══════ */}
        <div style={{
          textAlign: 'center', padding: '48px 20px 36px', marginBottom: 28,
          background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(16,185,129,0.10) 50%, rgba(245,158,11,0.08) 100%)',
          borderRadius: 24, border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {/* 浮动小标 */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: 20, padding: '4px 14px', fontSize: 12, color: '#a5b4fc',
            fontWeight: 500, marginBottom: 16,
          }}>
            🈶 {ui.badge}
          </div>

          <h1 style={{
            fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: 800,
            background: 'linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 30%, #6ee7b7 60%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', lineHeight: 1.3, marginBottom: 10,
          }}>
            {ui.title}
          </h1>
          <p style={{ color: 'rgba(203,213,225,0.7)', fontSize: 14, marginBottom: 8 }}>
            {ui.subtitle}
          </p>
          <p style={{ color: 'rgba(148,163,184,0.6)', fontSize: 12 }}>
            {ui.stats}
          </p>
        </div>

        {/* ══════ 搜索框 ══════ */}
        <div style={{ position: 'relative', marginBottom: 20 }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={ui.search}
            style={{
              width: '100%', padding: '12px 16px 12px 40px', borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.1)', fontSize: 14,
              background: 'rgba(255,255,255,0.06)', color: '#e2e8f0',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              outline: 'none', transition: 'all 0.3s',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(99,102,241,0.5)';
              e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.15)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.1)';
              e.target.style.boxShadow = 'none';
            }}
          />
          <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: 'rgba(148,163,184,0.5)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* ══════ 分类导航 chips ══════ */}
        <div
          ref={chipScrollRef}
          style={{
            display: 'flex', gap: 8, marginBottom: 24, overflowX: 'auto',
            paddingBottom: 4, scrollbarWidth: 'none',
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {/* 全部 */}
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              padding: '7px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
              whiteSpace: 'nowrap', border: 'none', cursor: 'pointer',
              transition: 'all 0.3s', flexShrink: 0,
              background: activeCategory === 'all'
                ? 'linear-gradient(135deg, #6366f1, #10b981)'
                : 'rgba(255,255,255,0.07)',
              color: activeCategory === 'all' ? '#fff' : 'rgba(203,213,225,0.7)',
              boxShadow: activeCategory === 'all' ? '0 4px 15px rgba(99,102,241,0.3)' : 'none',
            }}
          >
            {ui.all} ({totalPhrases})
          </button>
          {phrasebookData.map(cat => {
            const g = categoryGradients[cat.color] || categoryGradients.indigo;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '7px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                  whiteSpace: 'nowrap', cursor: 'pointer', flexShrink: 0,
                  transition: 'all 0.3s', border: isActive ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  background: isActive ? `linear-gradient(135deg, ${g.from}, ${g.to})` : 'rgba(255,255,255,0.05)',
                  color: isActive ? '#fff' : 'rgba(203,213,225,0.7)',
                  boxShadow: isActive ? `0 4px 15px ${g.glow}` : 'none',
                }}
              >
                {cat.icon} {cat.name[lang]}
              </button>
            );
          })}
        </div>

        {/* ══════ 短语卡片 ══════ */}
        {filteredData.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(148,163,184,0.5)', fontSize: 14 }}>
            {ui.noResult}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {filteredData.map((cat, ci) => {
              const g = categoryGradients[cat.color] || categoryGradients.indigo;
              return (
                <div key={cat.id} style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${ci * 0.08}s`,
                }}>
                  {/* 分类标题 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 10,
                      background: `linear-gradient(135deg, ${g.from}, ${g.to})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16, boxShadow: `0 4px 12px ${g.glow}`,
                    }}>
                      {cat.icon}
                    </div>
                    <div>
                      <h2 style={{ fontSize: 15, fontWeight: 700, color: '#e2e8f0', margin: 0, lineHeight: 1.2 }}>
                        {cat.name[lang]}
                      </h2>
                      <span style={{ fontSize: 11, color: 'rgba(148,163,184,0.5)' }}>
                        {cat.phrases.length} {ui.phrases}
                      </span>
                    </div>
                    {/* 装饰线 */}
                    <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${g.border}, transparent)` }} />
                  </div>

                  {/* 短句网格 */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 10 }}>
                    {cat.phrases.map((phrase, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleCopy(phrase.zh)}
                        style={{
                          position: 'relative', padding: '14px 16px', borderRadius: 14,
                          background: g.bg, border: `1px solid ${g.border}`,
                          cursor: 'pointer', transition: 'all 0.25s',
                          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                          overflow: 'hidden',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `linear-gradient(135deg, ${g.bg}, rgba(255,255,255,0.04))`;
                          e.currentTarget.style.borderColor = g.from;
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = `0 8px 24px ${g.glow}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = g.bg;
                          e.currentTarget.style.borderColor = g.border;
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {/* 左侧色条 */}
                        <div style={{
                          position: 'absolute', left: 0, top: 8, bottom: 8, width: 3,
                          borderRadius: 2,
                          background: `linear-gradient(180deg, ${g.from}, ${g.to})`,
                          opacity: 0.6,
                        }} />

                        {/* 中文 */}
                        <div style={{ fontSize: 15, fontWeight: 700, color: '#f1f5f9', marginBottom: 3, lineHeight: 1.4 }}>
                          {phrase.zh}
                        </div>
                        {/* 拼音 */}
                        <div style={{ fontSize: 11, color: 'rgba(165,180,252,0.7)', fontStyle: 'italic', marginBottom: 4 }}>
                          {phrase.py}
                        </div>
                        {/* 翻译 */}
                        <div style={{ fontSize: 12, color: 'rgba(203,213,225,0.65)', lineHeight: 1.4 }}>
                          {lang === 'zh' ? phrase.en : (phrase[lang] || phrase.en)}
                        </div>
                        {lang === 'zh' && (
                          <div style={{ fontSize: 11, color: 'rgba(148,163,184,0.45)', marginTop: 2 }}>
                            {phrase.ru}
                          </div>
                        )}

                        {/* 复制指示 */}
                        <div style={{ position: 'absolute', top: 10, right: 12 }}>
                          {copied === phrase.zh ? (
                            <span style={{
                              fontSize: 11, fontWeight: 600, color: '#6ee7b7',
                              animation: 'pulse 1s ease-in-out',
                            }}>✓</span>
                          ) : (
                            <svg style={{ width: 14, height: 14, color: 'rgba(148,163,184,0.25)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          }}>
            <span style={{ fontSize: 13, color: '#fbbf24' }}>💡 {ui.tip}</span>
          </div>
        </div>

        {/* ══════ 返回 ══════ */}
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <a href={`/${lang}/life`} style={{
            fontSize: 13, color: 'rgba(165,180,252,0.6)',
            textDecoration: 'none', transition: 'color 0.3s',
          }}
            onMouseEnter={(e) => e.target.style.color = '#a5b4fc'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(165,180,252,0.6)'}
          >
            ← {ui.back}
          </a>
        </div>
      </div>

      {/* 全局动画 keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
