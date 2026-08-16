'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useI18n } from '../../i18n-context';

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

      {/* ============ Phrasebook Portal — 沉浸式入口 ============ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          className="reveal-up"
          style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
        >
          <Link href={`/${l}/life/phrasebook`} style={{ textDecoration: 'none' }}>
            <div style={{
              position: 'relative', borderRadius: 20, overflow: 'hidden',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
              border: '1px solid rgba(99,102,241,0.2)',
              padding: '36px 28px', cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(99,102,241,0.2)';
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)';
              }}
            >
              {/* 装饰光斑 */}
              <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '40%', height: '200%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-40%', left: '-5%', width: '30%', height: '160%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                {/* 左侧图标区 */}
                <div style={{
                  width: 64, height: 64, borderRadius: 16, flexShrink: 0,
                  background: 'linear-gradient(135deg, #6366f1, #10b981)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                }}>
                  🗣️
                </div>

                {/* 中间文案 */}
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{
                    display: 'inline-block', background: 'rgba(99,102,241,0.15)',
                    border: '1px solid rgba(99,102,241,0.25)', borderRadius: 12,
                    padding: '2px 10px', fontSize: 11, color: '#a5b4fc', fontWeight: 500, marginBottom: 8,
                  }}>
                    {l === 'ru' ? 'Разговорник' : l === 'en' ? 'Phrasebook' : '口语手册'}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(18px, 3.5vw, 24px)', fontWeight: 800, margin: '0 0 6px',
                    background: 'linear-gradient(135deg, #e0e7ff, #6ee7b7)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {l === 'ru' ? 'Разговорник для выживания' : l === 'en' ? 'Chinese Survival Phrasebook' : '中文生存口语手册'}
                  </h3>
                  <p style={{ color: 'rgba(203,213,225,0.6)', fontSize: 13, margin: 0 }}>
                    {l === 'ru' ? '11 сценариев · 124+ фраз · Нажмите, чтобы скопировать'
                      : l === 'en' ? '11 scenarios · 124+ phrases · Tap to copy'
                      : '11大场景 · 124+实用短句 · 点击即复制'}
                  </p>
                </div>

                {/* 右侧箭头 */}
                <div style={{
                  width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" fill="none" stroke="#a5b4fc" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div style={{ height: 48 }} />
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
