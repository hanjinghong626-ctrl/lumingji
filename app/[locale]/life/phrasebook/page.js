'use client';

import { useState, useMemo, useEffect } from 'react';
import { useI18n } from '../../../../i18n-context';
import phrasebookData from '../../../../data/life/phrasebook-data';
import SEO from '../../../components/SEO.js';

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
      background: '#f7f8fa',
      position: 'relative', overflow: 'hidden',
    }}>
      <SEO title="中文生存口语手册 — 鹿鸣集" description="11大场景124+实用中文短句，带拼音和三语翻译，点击即复制。来华留学生必备的随身口语手册。" />
      {/* ── 全局样式 ── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes copiedPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '24px 16px 60px' }}>

        {/* ══════ Hero ══════ */}
        <div style={{
          textAlign: 'center', padding: '24px 20px 20px', marginBottom: 20,
          background: '#fff',
          borderRadius: 16, border: '1px solid #e8eaed',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          position: 'relative',
          animation: 'fadeInUp 0.8s ease-out',
        }}>
          {/* 标签 */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(59,130,180,0.08)', border: '1px solid rgba(59,130,180,0.18)',
            borderRadius: 20, padding: '4px 14px', fontSize: 12, color: '#3a7aaa',
            fontWeight: 500, marginBottom: 14,
          }}>
            📖 {ui.badge}
          </div>

          {/* 标题 */}
          <h1 style={{
            fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 700,
            color: '#1a1a2e', lineHeight: 1.3, marginBottom: 8,
          }}>
            {ui.title}
          </h1>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 6 }}>
            {ui.subtitle}
          </p>
          <p style={{ color: '#999', fontSize: 12 }}>
            {ui.stats}
          </p>

        </div>

        {/* ══════ 搜索框 ══════ */}
        <div style={{ position: 'relative', marginBottom: 20, animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={ui.search}
            style={{
              width: '100%', padding: '12px 16px 12px 40px', borderRadius: 12,
              border: '1px solid #e0e0e0', fontSize: 14,
              background: '#fff', color: '#333',
              outline: 'none', transition: 'all 0.3s', boxSizing: 'border-box',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#a0c0e0';
              e.target.style.boxShadow = '0 0 0 3px rgba(59,130,180,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e0e0e0';
              e.target.style.boxShadow = 'none';
            }}
          />
          <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: '#bbb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              border: activeCategory === 'all' ? '1px solid rgba(59,130,180,0.3)' : '1px solid #e0e0e0',
              background: activeCategory === 'all'
                ? 'linear-gradient(135deg, #4a90c4, #3a7aaa)'
                : '#fff',
              color: activeCategory === 'all' ? '#fff' : '#666',
              boxShadow: activeCategory === 'all' ? '0 3px 12px rgba(59,130,180,0.15)' : 'none',
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
                  border: isActive ? `1px solid ${c.accent}40` : '1px solid #e0e0e0',
                  background: isActive ? `linear-gradient(135deg, ${c.accent}, ${c.chip})` : '#fff',
                  color: isActive ? '#fff' : '#666',
                  boxShadow: isActive ? `0 3px 12px ${c.accent}20` : 'none',
                }}
              >
                <CategoryIcon id={cat.id} size={14} color={isActive ? '#fff' : '#888'} /> {cat.name[lang]}
              </button>
            );
          })}
        </div>

        {/* ══════ 短语卡片 ══════ */}
        {filteredData.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#bbb', fontSize: 14 }}>
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
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <CategoryIcon id={cat.id} size={18} color={c.accent} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: 15, fontWeight: 700, color: '#333', margin: 0, lineHeight: 1.2 }}>
                        {cat.name[lang]}
                      </h2>
                      <span style={{ fontSize: 11, color: '#aaa' }}>
                        {cat.phrases.length} {ui.phrases}
                      </span>
                    </div>
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
                        <div style={{ fontSize: 15, fontWeight: 700, color: '#333', marginBottom: 3, lineHeight: 1.4 }}>
                          {phrase.zh}
                        </div>
                        {/* 拼音 */}
                        <div style={{ fontSize: 11, color: c.accent, fontStyle: 'italic', marginBottom: 4, opacity: 0.6 }}>
                          {phrase.py}
                        </div>
                        {/* 翻译 */}
                        <div style={{ fontSize: 12, color: '#666', lineHeight: 1.4 }}>
                          {lang === 'zh' ? phrase.en : (phrase[lang] || phrase.en)}
                        </div>
                        {lang === 'zh' && (
                          <div style={{ fontSize: 11, color: '#999', marginTop: 2 }}>
                            {phrase.ru}
                          </div>
                        )}

                        {/* 复制指示 */}
                        <div style={{ position: 'absolute', top: 10, right: 12 }}>
                          {copied === phrase.zh ? (
                            <span style={{
                              fontSize: 11, fontWeight: 600, color: '#2ecc71',
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
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', padding: '10px 20px', borderRadius: 12,
            background: '#fff', border: '1px solid #e8eaed',
            boxShadow: '0 1px 6px rgba(0,0,0,0.03)',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#888' }}>
              💡 {ui.tip}
            </span>
          </div>
        </div>

        {/* ══════ 返回 ══════ */}
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <a href={`/${lang}/life`} style={{
            fontSize: 13, color: '#999', textDecoration: 'none', transition: 'color 0.3s',
          }}
            onMouseEnter={(e) => e.target.style.color = '#555'}
            onMouseLeave={(e) => e.target.style.color = '#999'}
          >
            ← {ui.back}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── 分类图标 · 青绿山水主题手绘风 ── */
function CategoryIcon({ id, size = 16, color = 'currentColor' }) {
  const s = size;
  const p = { fill: 'none', stroke: color, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (id) {
    /* 紧急求助 — 祥云纹 */
    case 'emergency': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <path d="M4 16c-1.5 0-2.5-1.2-2-2.5.3-1 1.5-1.5 2.5-1 .5-2 3-3.5 5.5-2.5 1-2 4-3 6-1.5 1.5-1 4-.5 4.5 1.5 1.5 0 2.5 1.5 2 3s-2 2-3.5 2H4z" strokeWidth={1.3} />
      </svg>
    );
    /* 交通出行 — 孤舟 */
    case 'transport': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <path d="M3 17c2-1 4-2 9-2s7 1 9 2" strokeWidth={1.5} />
        <path d="M5 17c1 2 3 3 7 3s6-1 7-3" strokeWidth={1.3} />
        <path d="M13 15V7" strokeWidth={1.2} />
        <path d="M13 7c2 1 4 3.5 4.5 5.5" strokeWidth={1.2} />
        <path d="M1 20c3-1 5-1.5 8-1" strokeWidth={1} opacity={0.4} />
        <path d="M15 19.5c3 0 5-.5 8-1" strokeWidth={1} opacity={0.4} />
      </svg>
    );
    /* 吃饭点餐 — 茶壶 */
    case 'food': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <path d="M8 10h8v6c0 2-2 4-4 4s-4-2-4-4v-6z" strokeWidth={1.3} />
        <path d="M8 12c-2 0-3.5 1-3.5 2.5S6 17 8 17" strokeWidth={1.2} />
        <path d="M10 10c0-2 1-4 2-5" strokeWidth={1.2} />
        <path d="M13 10c0-2 .5-3.5 1.5-5" strokeWidth={1.2} />
        <path d="M16 10c0-2-.5-3-1-4" strokeWidth={1.2} />
      </svg>
    );
    /* 购物砍价 — 如意结 */
    case 'shopping': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <path d="M12 4c-3 0-5 2-5 5 0 2 1 3 2.5 4L12 15l2.5-2C16 11 17 10 17 9c0-3-2-5-5-5z" strokeWidth={1.3} />
        <path d="M12 15v5" strokeWidth={1.3} />
        <path d="M9 18c1 .5 2 1 3 1s2-.5 3-1" strokeWidth={1.2} />
        <path d="M12 4v-1" strokeWidth={1.5} />
        <circle cx="12" cy="2" r="1" strokeWidth={1.2} />
      </svg>
    );
    /* 租房安居 — 飞檐小筑 */
    case 'housing': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <path d="M4 12c2-1 4-2 8-5 4 3 6 4 8 5" strokeWidth={1.5} />
        <path d="M3 12.5c1-.5 2-.5 3 0" strokeWidth={1.2} />
        <path d="M18 12.5c1-.5 2-.5 3 0" strokeWidth={1.2} />
        <path d="M6 12v7h12v-7" strokeWidth={1.3} />
        <path d="M10 19v-4h4v4" strokeWidth={1.2} />
      </svg>
    );
    /* 看病买药 — 灵芝 */
    case 'health': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <path d="M6 10c0-4 3-7 6-7s6 3 6 7c0 2-2 3-6 3s-6-1-6-3z" strokeWidth={1.3} />
        <path d="M12 13v6" strokeWidth={1.5} />
        <path d="M9 19c1 .5 2 1 3 1s2-.5 3-1" strokeWidth={1.2} />
        <path d="M8 8c1-1 2.5-1.5 4-1" strokeWidth={1} opacity={0.4} />
        <path d="M16 8c-1-1-2.5-1.5-4-1" strokeWidth={1} opacity={0.4} />
      </svg>
    );
    /* 日常社交 — 拱手礼 */
    case 'social': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <circle cx="12" cy="5.5" r="3" strokeWidth={1.3} />
        <path d="M7 20c0-3 2-5.5 5-5.5s5 2.5 5 5.5" strokeWidth={1.3} />
        <path d="M8 13c1 .8 2.5 1.5 4 1.5s3-.7 4-1.5" strokeWidth={1.2} />
        <path d="M9 13.5h6" strokeWidth={1.3} />
      </svg>
    );
    /* 校园学习 — 竹简 */
    case 'campus': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <path d="M4 3v18M8 3v18M12 3v18M16 3v18M20 3v18" strokeWidth={1.2} />
        <path d="M4 7h16M4 12h16M4 17h16" strokeWidth={0.8} opacity={0.4} />
        <path d="M3 5c2 .5 4 .5 6 0M14 5c2 .5 4 .5 6 0" strokeWidth={1} opacity={0.5} />
      </svg>
    );
    /* 数字时间 — 日晷 */
    case 'numbers': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <ellipse cx="12" cy="14" rx="9" ry="4.5" strokeWidth={1.3} />
        <path d="M12 14V5" strokeWidth={1.5} />
        <path d="M12 5l4 4" strokeWidth={1.2} />
        <path d="M7 14h10" strokeWidth={0.8} opacity={0.4} />
        <path d="M12 10v8" strokeWidth={0.8} opacity={0.4} />
      </svg>
    );
    /* 外卖快递 — 食盒 */
    case 'delivery': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <path d="M5 8h14v10H5z" strokeWidth={1.3} />
        <path d="M5 13h14" strokeWidth={1} />
        <path d="M5 8c0-2 3-4 7-4s7 2 7 4" strokeWidth={1.3} />
        <path d="M11 11h2M11 16h2" strokeWidth={1.5} />
      </svg>
    );
    /* 社交闲聊 — 流云对语 */
    case 'chatting': return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <path d="M3 8c0-2 2-4 5-4s5 2 5 4-2 4-5 4c-1 0-2-.3-3-.8L3 12l.5-1.5C3.2 10 3 9 3 8z" strokeWidth={1.3} />
        <path d="M11 14c0-1.5 1.5-3 4-3s4 1.5 4 3-1.5 3-4 3c-.8 0-1.5-.2-2.2-.5L11 17.5l.5-1.2c-.3-.5-.5-1-.5-1.3z" strokeWidth={1.3} />
      </svg>
    );
    default: return (
      <svg width={s} height={s} viewBox="0 0 24 24" {...p}>
        <circle cx="12" cy="12" r="8" />
      </svg>
    );
  }
}
