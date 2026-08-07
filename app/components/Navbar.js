'use client';

import Link from 'next/link';
import { useI18n } from '../../i18n-context';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { locale, t } = useI18n();
  const l = locale;

  const navItems = [
    { key: 'life', label: t('nav.life') },
    { key: 'universities', label: t('nav.universities') },
    { key: 'community', label: t('nav.community') },
    { key: 'about', label: t('nav.about') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment-50/80 backdrop-blur-md border-b border-primary-100/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-11">
          <Link href={`/${l}`} className="flex items-center gap-1.5 group">
            <span className="text-lg font-wenkai font-bold text-primary-600 group-hover:text-primary-500 transition-colors">
              {t('site.name')}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <Link key={item.key} href={`/${l}/${item.key}`} className="text-xs font-medium text-gray-500 hover:text-primary-600 transition-colors">
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile nav */}
          <div className="md:hidden flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <Link key={item.key} href={`/${l}/${item.key}`} className="text-xs font-medium text-gray-500 hover:text-primary-600 whitespace-nowrap px-1.5 py-0.5 rounded hover:bg-primary-50/50 transition-all">
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
