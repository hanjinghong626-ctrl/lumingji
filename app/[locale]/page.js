'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useI18n } from '../../i18n-context';
import SEO from '../components/SEO';

export default function HomePage() {
  const { locale, t } = useI18n();
  const l = locale;
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      href: `/${l}/life`,
      titleKey: 'home.section_life_title',
      descKey: 'home.section_life_desc',
      accentClass: 'card-jade',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      href: `/${l}/universities`,
      titleKey: 'home.section_uni_title',
      descKey: 'home.section_uni_desc',
      accentClass: 'card-peacock',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      href: `/${l}/community`,
      titleKey: 'home.section_community_title',
      descKey: 'home.section_community_desc',
      accentClass: 'card-accent',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <SEO
        title={`${t('home.hero_title')} — 来华留学生活服务平台`}
        description="鹿鸣集：面向来华留学生的一站式生活服务平台，提供三语生活指南、高校信息、AI智能助手。"
        ogType="website"
      />
      {/* ============ Hero Section ============ */}
      <section className="hero-section">
        {/* Background image */}
        <div className="hero-bg" />

        {/* Floating mist layers */}
        <div className="mist-layer mist-layer-1" />
        <div className="mist-layer mist-layer-2" />
        <div className="mist-layer mist-layer-3" />

        {/* Golden particles */}
        <div className="golden-particles" />

        {/* ============ Flowing Wave — 锚定Hero底部 ============ */}
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          style={{
            position: 'absolute', bottom: 0, left: 0, width: '100%', height: '22%',
            display: 'block', pointerEvents: 'none', zIndex: 5,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wf1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5f2eb" stopOpacity="0" />
              <stop offset="100%" stopColor="#f5f2eb" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="wf2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5f2eb" stopOpacity="0" />
              <stop offset="80%" stopColor="#eef8f5" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* 远浪 — 最柔、最宽 */}
          <path
            d="M0,140 C360,110 720,160 1080,120 C1260,100 1380,130 1440,125 L1440,200 L0,200 Z"
            fill="url(#wf2)"
          />
          {/* 中浪 — 主曲线 */}
          <path
            d="M0,155 C320,135 640,170 960,145 C1200,125 1360,150 1440,148 L1440,200 L0,200 Z"
            fill="url(#wf1)"
          />
          {/* 近浪 — 柔和流线 */}
          <path
            d="M0,170 C480,155 960,180 1440,165 L1440,200 L0,200 Z"
            fill="#f5f2eb"
          />
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
          <div className="hero-enter hero-enter-delay-1">
            <p className="text-white/70 font-wenkai text-sm md:text-base tracking-[0.3em] mb-6 uppercase">
              {t('home.hero_subtitle')}
            </p>
          </div>

          <div className="hero-enter hero-enter-delay-2 hero-title mb-6">
            <h1 className="hero-title-text text-6xl md:text-8xl lg:text-9xl font-wenkai font-bold tracking-wider">
              {t('home.hero_title')}
            </h1>
          </div>

          <div className="hero-enter hero-enter-delay-3">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent-400/60" />
              <span className="seal-stamp">诗</span>
              <p className="text-white/60 font-wenkai text-sm md:text-base italic max-w-lg leading-relaxed">
                {t('site.tagline')}
              </p>
              <span className="seal-stamp">鹿</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent-400/60" />
            </div>
          </div>

          <div className="hero-enter hero-enter-delay-4">
            <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-wenkai">
              {t('home.hero_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${l}/life`} className="btn-primary">
                {t('home.cta_explore')}
              </Link>
              <Link href={`/${l}/community`} className="btn-secondary">
                {t('home.cta_community')}
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <span className="text-accent-400/80 text-xs font-wenkai tracking-widest">SCROLL</span>
          </div>
        </div>
      </section>

      {/* ============ Triple Portal Row — 三卡片并排入口 ============ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          className="reveal-up"
          style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>

            {/* ── 口语手册 ── */}
            <Link href={`/${l}/life/phrasebook`} style={{ textDecoration: 'none' }}>
              <div style={{
                position: 'relative', borderRadius: 16, overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(200,230,215,0.45) 0%, rgba(180,220,200,0.30) 50%, rgba(210,235,225,0.40) 100%)',
                border: '1px solid rgba(120,180,155,0.25)',
                backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                padding: '22px 16px 18px', cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(100,170,140,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(100,170,140,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(120,180,155,0.25)';
                }}
              >
                <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', pointerEvents: 'none', opacity: 0.3 }} viewBox="0 0 600 100" preserveAspectRatio="none">
                  <path d="M0,100 L0,60 Q75,30 150,50 Q225,20 300,45 Q375,15 450,40 Q525,25 600,55 L600,100 Z" fill="rgba(100,170,140,0.12)" />
                  <path d="M0,100 L0,75 Q100,50 200,65 Q300,40 400,60 Q500,45 600,70 L600,100 Z" fill="rgba(80,160,130,0.08)" />
                </svg>
                <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: '30%', height: '100%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,210,190,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, marginBottom: 10,
                    overflow: 'hidden',
                    boxShadow: '0 4px 14px rgba(80,160,130,0.25)',
                    border: '1px solid rgba(100,170,140,0.2)',
                  }}>
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <defs>
                        <linearGradient id="sky1" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#e8f5ee"/>
                          <stop offset="0.6" stopColor="#c5e4d4"/>
                          <stop offset="1" stopColor="#a8d4bc"/>
                        </linearGradient>
                        <linearGradient id="m1f" x1="24" y1="14" x2="24" y2="38" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#7dc0a5"/>
                          <stop offset="1" stopColor="#9ad0b8"/>
                        </linearGradient>
                        <linearGradient id="m1n" x1="24" y1="22" x2="24" y2="48" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#3d7a65"/>
                          <stop offset="1" stopColor="#5a9a80"/>
                        </linearGradient>
                      </defs>
                      <rect width="48" height="48" fill="url(#sky1)"/>
                      <path d="M0 34 Q6 20 16 25 Q22 18 28 22 Q36 14 48 26 L48 48 L0 48Z" fill="url(#m1f)" opacity="0.5"/>
                      <path d="M0 38 Q8 28 18 31 Q24 25 32 29 Q40 24 48 33 L48 48 L0 48Z" fill="url(#m1n)" opacity="0.75"/>
                      <path d="M4 33 Q14 30 24 33 Q34 30 44 33" stroke="white" strokeWidth="1.2" fill="none" opacity="0.25"/>
                      <ellipse cx="11" cy="9" rx="5" ry="2" fill="white" opacity="0.35"/>
                      <ellipse cx="15" cy="8.5" rx="3.5" ry="1.5" fill="white" opacity="0.25"/>
                      <path d="M37 27 L38.5 22 L40 27" fill="#2d5a4a" opacity="0.65"/>
                      <path d="M37.5 30 L38.5 26 L39.5 30" fill="#2d5a4a" opacity="0.5"/>
                      <line x1="38.5" y1="30" x2="38.5" y2="33" stroke="#2d5a4a" strokeWidth="0.7" opacity="0.45"/>
                      <rect x="6" y="35" width="11" height="7" rx="1.2" fill="rgba(255,255,255,0.6)" stroke="#3d7a65" strokeWidth="0.5"/>
                      <line x1="11.5" y1="35" x2="11.5" y2="42" stroke="#3d7a65" strokeWidth="0.35" opacity="0.4"/>
                      <line x1="7.5" y1="37.5" x2="10.5" y2="37.5" stroke="#5a9a80" strokeWidth="0.45" opacity="0.5"/>
                      <line x1="7.5" y1="39.5" x2="9.5" y2="39.5" stroke="#5a9a80" strokeWidth="0.45" opacity="0.35"/>
                      <line x1="12.5" y1="37.5" x2="15.5" y2="37.5" stroke="#5a9a80" strokeWidth="0.45" opacity="0.5"/>
                      <line x1="12.5" y1="39.5" x2="14.5" y2="39.5" stroke="#5a9a80" strokeWidth="0.45" opacity="0.35"/>
                    </svg>
                  </div>
                  <div style={{
                    display: 'inline-block', background: 'rgba(100,170,140,0.12)',
                    border: '1px solid rgba(100,170,140,0.25)', borderRadius: 10,
                    padding: '2px 8px', fontSize: 10, color: '#4a8a6e', fontWeight: 500, marginBottom: 5,
                  }}>
                    {l === 'ru' ? 'Разговорник' : l === 'en' ? 'Phrasebook' : '口语手册'}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(13px, 2.2vw, 15px)', fontWeight: 800, margin: '0 0 3px',
                    color: '#2d5a4a', lineHeight: 1.3,
                  }}>
                    {l === 'ru' ? 'Разговорник' : l === 'en' ? 'Survival Phrasebook' : '中文生存口语手册'}
                  </h3>
                  <p style={{ color: '#6a9a85', fontSize: 11, margin: 0, lineHeight: 1.4 }}>
                    {l === 'ru' ? '11 сценариев · 124+ фраз'
                      : l === 'en' ? '11 scenarios · 124+ phrases'
                      : '11大场景 · 124+实用短句'}
                  </p>
                  <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: 'rgba(100,170,140,0.1)', border: '1px solid rgba(100,170,140,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="12" height="12" fill="none" stroke="#5aa085" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* ── 落地第一周 ── */}
            <Link href={`/${l}/life/first-week`} style={{ textDecoration: 'none' }}>
              <div style={{
                position: 'relative', borderRadius: 16, overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(200,230,215,0.45) 0%, rgba(180,220,200,0.30) 50%, rgba(210,235,225,0.40) 100%)',
                border: '1px solid rgba(120,180,155,0.25)',
                backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                padding: '22px 16px 18px', cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(100,170,140,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(100,170,140,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(120,180,155,0.25)';
                }}
              >
                <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', pointerEvents: 'none', opacity: 0.3 }} viewBox="0 0 600 100" preserveAspectRatio="none">
                  <path d="M0,100 L0,60 Q75,30 150,50 Q225,20 300,45 Q375,15 450,40 Q525,25 600,55 L600,100 Z" fill="rgba(100,170,140,0.12)" />
                  <path d="M0,100 L0,75 Q100,50 200,65 Q300,40 400,60 Q500,45 600,70 L600,100 Z" fill="rgba(80,160,130,0.08)" />
                </svg>
                <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: '30%', height: '100%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,210,190,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, marginBottom: 10,
                    overflow: 'hidden',
                    boxShadow: '0 4px 14px rgba(80,160,130,0.25)',
                    border: '1px solid rgba(100,170,140,0.2)',
                  }}>
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <defs>
                        <linearGradient id="sky2" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#dceee5"/>
                          <stop offset="0.5" stopColor="#d4e8d8"/>
                          <stop offset="1" stopColor="#e8dcc0"/>
                        </linearGradient>
                        <linearGradient id="m2" x1="24" y1="18" x2="24" y2="42" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#4a8a72"/>
                          <stop offset="1" stopColor="#6aaa90"/>
                        </linearGradient>
                        <radialGradient id="sun2" cx="24" cy="20" r="8" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#f0d870"/>
                          <stop offset="0.5" stopColor="#e8c860" stopOpacity="0.6"/>
                          <stop offset="1" stopColor="#d4b850" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      <rect width="48" height="48" fill="url(#sky2)"/>
                      <circle cx="24" cy="20" r="8" fill="url(#sun2)"/>
                      <circle cx="24" cy="20" r="3.5" fill="#f0d870" opacity="0.7"/>
                      <path d="M0 32 Q6 22 14 26 Q20 20 26 24 Q32 18 40 22 Q44 20 48 26 L48 48 L0 48Z" fill="url(#m2)" opacity="0.7"/>
                      <path d="M0 38 Q10 30 20 34 Q28 28 36 32 Q42 30 48 36 L48 48 L0 48Z" fill="#3d7a65" opacity="0.6"/>
                      <path d="M6 36 Q14 33 24 36 Q34 33 42 36" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
                      <path d="M18 42 Q20 38 24 36 Q28 38 30 42" stroke="#5a9a80" strokeWidth="0.8" fill="none" opacity="0.5" strokeDasharray="1.5 1"/>
                      <ellipse cx="38" cy="10" rx="4" ry="1.5" fill="white" opacity="0.3"/>
                      <ellipse cx="8" cy="14" rx="3" ry="1.2" fill="white" opacity="0.25"/>
                    </svg>
                  </div>
                  <div style={{
                    display: 'inline-block', background: 'rgba(100,170,140,0.12)',
                    border: '1px solid rgba(100,170,140,0.25)', borderRadius: 10,
                    padding: '2px 8px', fontSize: 10, color: '#4a8a6e', fontWeight: 500, marginBottom: 5,
                  }}>
                    {l === 'ru' ? 'Первая неделя' : l === 'en' ? 'First Week' : '落地第一周'}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(13px, 2.2vw, 15px)', fontWeight: 800, margin: '0 0 3px',
                    color: '#2d5a4a', lineHeight: 1.3,
                  }}>
                    {l === 'ru' ? 'Первая неделя' : l === 'en' ? 'First Week Guide' : '落地第一周指南'}
                  </h3>
                  <p style={{ color: '#6a9a85', fontSize: 11, margin: 0, lineHeight: 1.4 }}>
                    {l === 'ru' ? '17 задач · Прогресс по дням'
                      : l === 'en' ? '17 tasks · Day-by-day progress'
                      : '17项任务 · 按天追踪进度'}
                  </p>
                  <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: 'rgba(100,170,140,0.1)', border: '1px solid rgba(100,170,140,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="12" height="12" fill="none" stroke="#5aa085" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* ── 城市PK ── */}
            <Link href={`/${l}/life/city-compare`} style={{ textDecoration: 'none' }}>
              <div style={{
                position: 'relative', borderRadius: 16, overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(200,230,215,0.45) 0%, rgba(180,220,200,0.30) 50%, rgba(210,235,225,0.40) 100%)',
                border: '1px solid rgba(120,180,155,0.25)',
                backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                padding: '22px 16px 18px', cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(100,170,140,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(100,170,140,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(120,180,155,0.25)';
                }}
              >
                <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', pointerEvents: 'none', opacity: 0.3 }} viewBox="0 0 600 100" preserveAspectRatio="none">
                  <path d="M0,100 L0,60 Q75,30 150,50 Q225,20 300,45 Q375,15 450,40 Q525,25 600,55 L600,100 Z" fill="rgba(100,170,140,0.12)" />
                  <path d="M0,100 L0,75 Q100,50 200,65 Q300,40 400,60 Q500,45 600,70 L600,100 Z" fill="rgba(80,160,130,0.08)" />
                </svg>
                <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: '30%', height: '100%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,210,190,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, marginBottom: 10,
                    overflow: 'hidden',
                    boxShadow: '0 4px 14px rgba(80,160,130,0.25)',
                    border: '1px solid rgba(100,170,140,0.2)',
                  }}>
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <defs>
                        <linearGradient id="sky3" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#d8ede4"/>
                          <stop offset="0.5" stopColor="#c0ddd0"/>
                          <stop offset="1" stopColor="#a8d0c0"/>
                        </linearGradient>
                        <linearGradient id="m3a" x1="14" y1="8" x2="14" y2="40" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#3d7a65"/>
                          <stop offset="1" stopColor="#5a9a80"/>
                        </linearGradient>
                        <linearGradient id="m3b" x1="34" y1="6" x2="34" y2="40" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#2d6a55"/>
                          <stop offset="1" stopColor="#4a8a72"/>
                        </linearGradient>
                        <linearGradient id="water3" x1="24" y1="40" x2="24" y2="48" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#90c8b0" stopOpacity="0.4"/>
                          <stop offset="1" stopColor="#a8d4bc" stopOpacity="0.2"/>
                        </linearGradient>
                      </defs>
                      <rect width="48" height="48" fill="url(#sky3)"/>
                      <path d="M2 40 L14 10 L26 40Z" fill="url(#m3a)" opacity="0.65"/>
                      <path d="M18 40 L34 8 L48 40Z" fill="url(#m3b)" opacity="0.75"/>
                      <path d="M2 40 L14 10 L26 40Z" fill="none" stroke="#2d5a4a" strokeWidth="0.5" opacity="0.3"/>
                      <path d="M18 40 L34 8 L48 40Z" fill="none" stroke="#2d5a4a" strokeWidth="0.5" opacity="0.3"/>
                      <path d="M10 14 L14 10 L18 14" fill="rgba(255,255,255,0.15)" stroke="none"/>
                      <path d="M30 12 L34 8 L38 12" fill="rgba(255,255,255,0.12)" stroke="none"/>
                      <ellipse cx="22" cy="24" rx="8" ry="2.5" fill="white" opacity="0.3"/>
                      <ellipse cx="26" cy="28" rx="6" ry="2" fill="white" opacity="0.2"/>
                      <path d="M20 22 Q22 21 24 22 Q26 21 28 22" stroke="white" strokeWidth="0.8" fill="none" opacity="0.35"/>
                      <rect x="0" y="40" width="48" height="8" fill="url(#water3)"/>
                      <path d="M4 42 Q12 41 20 42 Q28 41 36 42 Q42 41 46 42" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2"/>
                      <path d="M8 44 Q16 43 24 44 Q32 43 40 44" stroke="white" strokeWidth="0.4" fill="none" opacity="0.15"/>
                      <path d="M10 41 L14 37 L18 41" fill="#5a9a80" opacity="0.15"/>
                      <path d="M30 41 L34 36 L38 41" fill="#4a8a72" opacity="0.12"/>
                    </svg>
                  </div>
                  <div style={{
                    display: 'inline-block', background: 'rgba(100,170,140,0.12)',
                    border: '1px solid rgba(100,170,140,0.25)', borderRadius: 10,
                    padding: '2px 8px', fontSize: 10, color: '#4a8a6e', fontWeight: 500, marginBottom: 5,
                  }}>
                    {l === 'ru' ? 'Города' : l === 'en' ? 'City Compare' : '城市对比'}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(13px, 2.2vw, 15px)', fontWeight: 800, margin: '0 0 3px',
                    color: '#2d5a4a', lineHeight: 1.3,
                  }}>
                    {l === 'ru' ? 'Сравнение городов' : l === 'en' ? 'City Comparison' : '城市PK对比'}
                  </h3>
                  <p style={{ color: '#6a9a85', fontSize: 11, margin: 0, lineHeight: 1.4 }}>
                    {l === 'ru' ? '10 городов · Радарная диаграмма'
                      : l === 'en' ? '10 cities · Radar chart'
                      : '10大城市 · 雷达图可视化'}
                  </p>
                  <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: 'rgba(100,170,140,0.1)', border: '1px solid rgba(100,170,140,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="12" height="12" fill="none" stroke="#5aa085" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
        <div style={{ height: 40 }} />
      </section>

      {/* ============ Feature Cards — 青绿山水风格 ============ */}
      <section className="cards-section">
        {/* Decorative background elements */}
        <div className="cards-section-bg" />

        {/* ── 青绿山水装饰层 ── */}
        <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '55%', pointerEvents: 'none', zIndex: 1 }} viewBox="0 0 1200 350" preserveAspectRatio="none">
          <defs>
            <linearGradient id="fm1" x1="600" y1="0" x2="600" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4a8a6e" stopOpacity="0.18"/>
              <stop offset="1" stopColor="#6aaa8e" stopOpacity="0.08"/>
            </linearGradient>
            <linearGradient id="fm2" x1="600" y1="0" x2="600" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#3d7a65" stopOpacity="0.14"/>
              <stop offset="1" stopColor="#5a9a80" stopOpacity="0.06"/>
            </linearGradient>
            <linearGradient id="fm3" x1="600" y1="0" x2="600" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#2d6a55" stopOpacity="0.12"/>
              <stop offset="1" stopColor="#4a8a72" stopOpacity="0.04"/>
            </linearGradient>
          </defs>
          {/* 远山层 — 最高最淡 */}
          <path d="M0,350 L0,100 Q100,30 220,90 Q320,40 430,80 Q520,20 630,65 Q730,10 840,55 Q940,25 1050,70 Q1130,40 1200,85 L1200,350Z" fill="url(#fm1)"/>
          {/* 中山层 */}
          <path d="M0,350 L0,160 Q90,90 200,140 Q300,80 420,130 Q520,70 640,120 Q740,65 850,115 Q950,80 1060,130 Q1140,100 1200,145 L1200,350Z" fill="url(#fm2)"/>
          {/* 近山层 — 最低 */}
          <path d="M0,350 L0,230 Q120,180 240,215 Q360,170 480,205 Q600,165 720,200 Q840,175 960,210 Q1080,185 1200,220 L1200,350Z" fill="url(#fm3)"/>
          {/* 云雾点缀 */}
          <ellipse cx="300" cy="130" rx="130" ry="20" fill="white" opacity="0.12"/>
          <ellipse cx="800" cy="100" rx="110" ry="16" fill="white" opacity="0.10"/>
          <ellipse cx="560" cy="170" rx="90" ry="14" fill="white" opacity="0.08"/>
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          {/* Section Header */}
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            className="reveal-up text-center mb-16"
          >
            <div className="section-header-ornament">
              <span className="ornament-line" />
              <span className="ornament-diamond">❖</span>
              <span className="ornament-line" />
            </div>
            <h2 className="section-title mt-4">
              {t('site.name')}
            </h2>
            <p className="section-subtitle font-wenkai">
              {t('site.description')}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.href}
                ref={(el) => (sectionRefs.current[i + 1] = el)}
                className="reveal-up"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <Link href={feature.href} className={`feature-card group block h-full ${feature.accentClass}`}>
                  {/* Card corner decorations */}
                  <span className="card-corner card-corner-tl" />
                  <span className="card-corner card-corner-tr" />
                  <span className="card-corner card-corner-bl" />
                  <span className="card-corner card-corner-br" />

                  {/* Icon */}
                  <div className="feature-card-icon">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="feature-card-title">
                    {t(feature.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="feature-card-desc">
                    {t(feature.descKey)}
                  </p>

                  {/* Learn more link */}
                  <span className="feature-card-link">
                    {t('home.learn_more')}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>

                  {/* 青绿山水卡片底纹 */}
                  <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', pointerEvents: 'none', opacity: 0.06, borderRadius: '0 0 16px 16px', overflow: 'hidden' }} viewBox="0 0 200 80" preserveAspectRatio="none">
                    <path d="M0,80 L0,40 Q25,15 50,35 Q70,10 100,30 Q130,8 160,28 Q180,18 200,38 L200,80Z" fill="#3d7a65"/>
                    <path d="M0,80 L0,55 Q30,35 60,50 Q90,30 120,48 Q150,25 180,45 L200,50 L200,80Z" fill="#5a9a80"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
