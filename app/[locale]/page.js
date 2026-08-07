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
      iconColor: 'jade',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      href: `/${l}/universities`,
      titleKey: 'home.section_uni_title',
      descKey: 'home.section_uni_desc',
      iconColor: 'peacock',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      iconColor: 'primary',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const iconColors = {
    jade: 'bg-jade-100 text-jade-600 group-hover:bg-jade-200',
    peacock: 'bg-peacock-100 text-peacock-600 group-hover:bg-peacock-200',
    primary: 'bg-primary-100 text-primary-600 group-hover:bg-primary-200',
  };

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

      {/* ============ Feature Cards ============ */}
      <section className="bg-parchment-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            className="reveal-up text-center mb-16"
          >
            <h2 className="section-title">
              <span className="text-accent-500">❖</span>{' '}
              {t('site.name')}{' '}
              <span className="text-accent-500">❖</span>
            </h2>
            <p className="section-subtitle font-wenkai">
              {t('site.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.href}
                ref={(el) => (sectionRefs.current[i + 1] = el)}
                className="reveal-up"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <Link href={feature.href} className="card group block h-full">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${iconColors[feature.iconColor]}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-wenkai font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {t(feature.descKey)}
                  </p>
                  <span className="inline-flex items-center text-sm text-primary-500 font-wenkai font-medium group-hover:text-primary-600 transition-colors">
                    {t('home.learn_more')}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Bottom Mountain Silhouette ============ */}
      <div className="relative h-16 bg-primary-800">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 64L0 32C120 20 240 8 360 16C480 24 600 36 720 32C840 28 960 12 1080 8C1200 4 1320 16 1380 24L1440 32L1440 64Z"
            fill="rgb(8, 43, 35)"
          />
        </svg>
      </div>
    </div>
  );
}
