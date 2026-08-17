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

      {/* ============ Ink Divider ============ */}
      <div className="ink-divider" />

      {/* ============ Phrasebook Portal — 青绿山水入口 ============ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          className="reveal-up"
          style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
        >
          <Link href={`/${l}/life/phrasebook`} style={{ textDecoration: 'none' }}>
            <div style={{
              position: 'relative', borderRadius: 18, overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(200,230,215,0.40) 0%, rgba(180,220,200,0.25) 40%, rgba(210,235,225,0.35) 100%)',
              border: '1px solid rgba(120,180,155,0.25)',
              backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
              padding: '28px 24px', cursor: 'pointer',
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
              {/* 内嵌山水装饰 */}
              <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '55%', pointerEvents: 'none', opacity: 0.35 }} viewBox="0 0 600 100" preserveAspectRatio="none">
                <path d="M0,100 L0,60 Q75,30 150,50 Q225,20 300,45 Q375,15 450,40 Q525,25 600,55 L600,100 Z" fill="rgba(100,170,140,0.12)" />
                <path d="M0,100 L0,75 Q100,50 200,65 Q300,40 400,60 Q500,45 600,70 L600,100 Z" fill="rgba(80,160,130,0.08)" />
              </svg>
              {/* 云雾 */}
              <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '25%', height: '120%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,210,190,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                {/* 左侧图标 */}
                <div style={{
                  width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                  background: 'linear-gradient(135deg, #5aa085, #4a9075)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, boxShadow: '0 6px 20px rgba(80,160,130,0.2)',
                }}>
                  🗣️
                </div>

                {/* 文案 */}
                <div style={{ flex: 1, minWidth: 180 }}>
                  <div style={{
                    display: 'inline-block', background: 'rgba(100,170,140,0.12)',
                    border: '1px solid rgba(100,170,140,0.25)', borderRadius: 12,
                    padding: '2px 10px', fontSize: 11, color: '#4a8a6e', fontWeight: 500, marginBottom: 6,
                  }}>
                    {l === 'ru' ? 'Разговорник' : l === 'en' ? 'Phrasebook' : '口语手册'}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(17px, 3.5vw, 22px)', fontWeight: 800, margin: '0 0 4px',
                    color: '#2d5a4a',
                  }}>
                    {l === 'ru' ? 'Разговорник для выживания' : l === 'en' ? 'Chinese Survival Phrasebook' : '中文生存口语手册'}
                  </h3>
                  <p style={{ color: '#6a9a85', fontSize: 13, margin: 0 }}>
                    {l === 'ru' ? '11 сценариев · 124+ фраз · Нажмите, чтобы скопировать'
                      : l === 'en' ? '11 scenarios · 124+ phrases · Tap to copy'
                      : '11大场景 · 124+实用短句 · 点击即复制'}
                  </p>
                </div>

                {/* 箭头 */}
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(100,170,140,0.1)', border: '1px solid rgba(100,170,140,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="16" height="16" fill="none" stroke="#5aa085" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div style={{ height: 24 }} />
      </section>

      {/* ============ Mini Tools Row — 小工具并排入口 ============ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          ref={(el) => (sectionRefs.current[5] = el)}
          className="reveal-up"
          style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
            {/* 落地第一周 */}
            <Link href={`/${l}/life/first-week`} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 18px', borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(230,220,200,0.30), rgba(220,210,190,0.18))',
                border: '1px solid rgba(180,160,120,0.20)',
                backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(160,140,100,0.10)';
                  e.currentTarget.style.borderColor = 'rgba(180,160,120,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(180,160,120,0.20)';
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                  background: 'linear-gradient(135deg, #c8b890, #b8a878)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, boxShadow: '0 3px 10px rgba(160,140,100,0.15)',
                }}>
                  📋
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 2px', color: '#5a4a2a' }}>
                    {l === 'ru' ? 'Первая неделя' : l === 'en' ? 'First Week' : '落地第一周'}
                  </h4>
                  <p style={{ fontSize: 12, color: '#9a8a6e', margin: 0, lineHeight: 1.4 }}>
                    {l === 'ru' ? '17 задач · Прогресс по дням'
                      : l === 'en' ? '17 tasks · Day-by-day progress'
                      : '17项任务 · 按天追踪进度'}
                  </p>
                </div>
                <svg width="14" height="14" fill="none" stroke="#c8b890" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.6 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* 城市PK */}
            <Link href={`/${l}/life/city-compare`} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 18px', borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(200,215,235,0.30), rgba(190,210,230,0.18))',
                border: '1px solid rgba(100,150,190,0.20)',
                backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(80,130,180,0.10)';
                  e.currentTarget.style.borderColor = 'rgba(100,150,190,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(100,150,190,0.20)';
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                  background: 'linear-gradient(135deg, #6a9ac0, #5a8ab0)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, boxShadow: '0 3px 10px rgba(80,130,180,0.15)',
                }}>
                  🏙️
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 2px', color: '#2a4a6a' }}>
                    {l === 'ru' ? 'Сравнение городов' : l === 'en' ? 'City Compare' : '城市PK对比'}
                  </h4>
                  <p style={{ fontSize: 12, color: '#6a8a9a', margin: 0, lineHeight: 1.4 }}>
                    {l === 'ru' ? '10 городов · Радарная диаграмма'
                      : l === 'en' ? '10 cities · Radar chart'
                      : '10大城市 · 雷达图可视化'}
                  </p>
                </div>
                <svg width="14" height="14" fill="none" stroke="#6a9ac0" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.6 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
