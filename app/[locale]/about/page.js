'use client';

import { useI18n } from '../../../i18n-context';

export default function AboutPage() {
  const { t, locale } = useI18n();
  const l = locale;

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      titleKey: 'about.feat_guides',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01m4 0h.01m4 0h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.8-4.2A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      titleKey: 'about.feat_ai',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titleKey: 'about.feat_trilingual',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      titleKey: 'about.feat_local',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titleKey: 'about.feat_free',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      titleKey: 'about.feat_community',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Banner */}
      <div style={{
        position: 'relative', borderRadius: 20, overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(15,80,60,0.9) 0%, rgba(20,100,75,0.85) 50%, rgba(25,110,85,0.8) 100%)',
        padding: '48px 32px', marginBottom: 32,
      }}>
        {/* Decorative mountain silhouette */}
        <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%', pointerEvents: 'none', opacity: 0.15 }} viewBox="0 0 800 120" preserveAspectRatio="none">
          <path d="M0,120 L0,80 Q100,40 200,65 Q300,30 400,55 Q500,20 600,50 Q700,35 800,60 L800,120 Z" fill="white" />
        </svg>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: 'white', marginBottom: 12, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
            {t('about.title')}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="content-card" style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0f6b4a', marginBottom: 20, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
          {t('about.story_title')}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{
            fontSize: 18, fontStyle: 'italic', color: '#0f7a55',
            borderLeft: '3px solid rgba(15,155,116,0.3)', paddingLeft: 16,
            lineHeight: 1.8, margin: 0,
          }}>
            {t('about.story_p1')}
          </p>
          <p style={{ color: '#4a5568', lineHeight: 1.8, margin: 0 }}>
            {t('about.story_p2')}
          </p>
          <p style={{ color: '#4a5568', lineHeight: 1.8, margin: 0 }}>
            {t('about.story_p3')}
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="content-card" style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0f6b4a', marginBottom: 20, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
          {t('about.what_we_offer')}
        </h2>
        <div className="about-feature-grid">
          {features.map((f, i) => (
            <div key={i} className="about-feature-item">
              <div className="about-feature-icon">{f.icon}</div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#1c1c18', margin: 0, lineHeight: 1.5 }}>
                  {t(f.titleKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission + Team in two columns on desktop */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 32 }}>
        <div className="content-card">
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0f6b4a', marginBottom: 12, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
            {t('about.mission_title')}
          </h2>
          <p style={{ color: '#4a5568', lineHeight: 1.8, margin: 0 }}>
            {t('about.mission_desc')}
          </p>
        </div>
        <div className="content-card">
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0f6b4a', marginBottom: 12, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
            {t('about.team_title')}
          </h2>
          <p style={{ color: '#4a5568', lineHeight: 1.8, margin: 0 }}>
            {t('about.team_desc')}
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{
        borderRadius: 16, overflow: 'hidden', position: 'relative',
        background: 'linear-gradient(135deg, #0f6b4a 0%, #155e7a 100%)',
        padding: '40px 32px', textAlign: 'center',
      }}>
        <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30%', pointerEvents: 'none', opacity: 0.1 }} viewBox="0 0 600 60" preserveAspectRatio="none">
          <path d="M0,60 L0,30 Q150,10 300,25 Q450,5 600,20 L600,60 Z" fill="white" />
        </svg>
        <p style={{ fontSize: 22, fontWeight: 600, color: 'white', marginBottom: 8, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif', position: 'relative', zIndex: 1 }}>
          {t('site.tagline')}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, position: 'relative', zIndex: 1 }}>
          {t('site.description')}
        </p>
      </div>
    </div>
  );
}
