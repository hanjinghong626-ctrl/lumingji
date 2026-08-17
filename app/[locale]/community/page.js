'use client';

import { useI18n } from '../../../i18n-context';

export default function CommunityPage() {
  const { t, locale } = useI18n();
  const l = locale;

  const platforms = [
    {
      key: 'wechat_group',
      color: '#07C160',
      bg: 'rgba(7, 193, 96, 0.08)',
      bgHover: 'rgba(7, 193, 96, 0.15)',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#07C160">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.044c.133 0 .24-.108.24-.241 0-.06-.024-.12-.04-.176l-.326-1.237a.49.49 0 0 1 .178-.55C21.156 17.722 22 16.12 22 14.362c0-3.177-2.832-5.504-6.062-5.504zm-2.14 2.87c.473 0 .856.389.856.868a.862.862 0 0 1-.856.868.862.862 0 0 1-.856-.868c0-.479.383-.868.856-.868zm4.28 0c.473 0 .856.389.856.868a.862.862 0 0 1-.856.868.862.862 0 0 1-.856-.868c0-.479.383-.868.856-.868z"/>
        </svg>
      ),
    },
    {
      key: 'telegram',
      color: '#229ED9',
      bg: 'rgba(34, 158, 217, 0.08)',
      bgHover: 'rgba(34, 158, 217, 0.15)',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#229ED9">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
    {
      key: 'vk',
      color: '#4C75A3',
      bg: 'rgba(76, 117, 163, 0.08)',
      bgHover: 'rgba(76, 117, 163, 0.15)',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#4C75A3">
          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
        </svg>
      ),
    },
    {
      key: 'whatsapp',
      color: '#25D366',
      bg: 'rgba(37, 211, 102, 0.08)',
      bgHover: 'rgba(37, 211, 102, 0.15)',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      key: 'email',
      color: '#0f6b4a',
      bg: 'rgba(15, 107, 74, 0.08)',
      bgHover: 'rgba(15, 107, 74, 0.15)',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#0f6b4a" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const tips = [
    { icon: '🎓', key: 'community.tip_study' },
    { icon: '🏠', key: 'community.tip_housing' },
    { icon: '🍜', key: 'community.tip_food' },
    { icon: '📱', key: 'community.tip_apps' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Banner */}
      <div style={{
        position: 'relative', borderRadius: 20, overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(21,94,122,0.9) 0%, rgba(15,107,74,0.85) 100%)',
        padding: '48px 32px', marginBottom: 32, textAlign: 'center',
      }}>
        <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', pointerEvents: 'none', opacity: 0.12 }} viewBox="0 0 600 80" preserveAspectRatio="none">
          <path d="M0,80 L0,50 Q100,20 200,40 Q300,15 400,35 Q500,10 600,30 L600,80 Z" fill="white" />
        </svg>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: 'white', marginBottom: 12, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
            {t('community.title')}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            {t('community.subtitle')}
          </p>
        </div>
      </div>

      {/* Platform Cards */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#155e7a', marginBottom: 20, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
          {t('community.join_platforms')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
          {platforms.map((p) => (
            <div key={p.key} className="platform-card" style={{ '--platform-color': p.color, '--platform-bg': p.bg, '--platform-bg-hover': p.bgHover }}>
              <div className="platform-icon-wrap">{p.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1c1c18', marginBottom: 6 }}>
                {t(`community.${p.key}`)}
              </h3>
              <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.5, marginBottom: 12 }}>
                {t(`community.${p.key}_desc`)}
              </p>
              <a href={t(`community.${p.key}_link`)} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-block', fontSize: 13, fontWeight: 500,
                  color: p.color, textDecoration: 'none',
                  padding: '6px 16px', borderRadius: 20,
                  border: `1px solid ${p.color}33`,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${p.color}12`;
                  e.currentTarget.style.borderColor = `${p.color}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = `${p.color}33`;
                }}
              >
                {t('community.join_now')}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Survival Tips */}
      <div className="content-card" style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0f6b4a', marginBottom: 20, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
          {t('community.tips_title')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {tips.map((tip, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              padding: 16, borderRadius: 12,
              background: 'rgba(15,155,116,0.03)',
              border: '1px solid rgba(15,155,116,0.06)',
            }}>
              <span style={{ fontSize: 24, flexShrink: 0, lineHeight: 1 }}>{tip.icon}</span>
              <p style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.6, margin: 0 }}>
                {t(tip.key)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom quote */}
      <div style={{
        borderRadius: 16, overflow: 'hidden', position: 'relative',
        background: 'linear-gradient(135deg, #155e7a 0%, #0f6b4a 100%)',
        padding: '36px 32px', textAlign: 'center',
      }}>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
          {t('community.closing_quote')}
        </p>
      </div>
    </div>
  );
}
