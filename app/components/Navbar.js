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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment-50/90 backdrop-blur-md border-b border-primary-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${l}`} className="flex items-center gap-2 group">
            <span className="text-2xl font-serif font-bold text-primary-600 group-hover:text-primary-500 transition-colors">
              {t('site.name')}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.key} href={`/${l}/${item.key}`} className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-2 pb-2 overflow-x-auto">
            {navItems.map((item) => (
              <Link key={item.key} href={`/${l}/${item.key}`} className="text-xs font-medium text-gray-600 hover:text-primary-600 whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary-50 transition-all">
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
