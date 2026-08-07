'use client';

import Link from 'next/link';
import { useI18n } from '../../i18n-context';

export default function Footer() {
  const { locale, t } = useI18n();
  const l = locale;

  const links = [
    { key: 'life', label: t('nav.life') },
    { key: 'universities', label: t('nav.universities') },
    { key: 'community', label: t('nav.community') },
    { key: 'about', label: t('nav.about') },
  ];

  return (
    <footer className="bg-primary-800 text-white/70 relative">
      {/* Mountain silhouette top edge */}
      <svg
        className="absolute -top-1 left-0 w-full"
        style={{ height: '48px' }}
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 48L0 24C80 18 160 6 240 12C320 18 400 30 480 28C560 26 640 14 720 10C800 6 880 14 960 18C1040 22 1120 16 1200 12C1280 8 1360 18 1400 24L1440 28L1440 48Z"
          fill="rgb(8, 43, 35)"
        />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-wenkai font-bold text-white mb-1">
              {t('site.name')}
            </h3>
            <p className="text-sm text-white/50 font-wenkai italic">
              {t('site.tagline')}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((item) => (
              <Link
                key={item.key}
                href={`/${l}/${item.key}`}
                className="text-sm font-wenkai text-white/60 hover:text-accent-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            {t('footer.copyright')}
          </p>
          <p className="text-xs text-white/40">
            {t('footer.made_with')}
          </p>
        </div>
      </div>
    </footer>
  );
}
