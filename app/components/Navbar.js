'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useI18n } from '../../i18n-context';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { locale, t } = useI18n();
  const l = locale;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { key: 'life', label: t('nav.life') },
    { key: 'universities', label: t('nav.universities') },
    { key: 'community', label: t('nav.community') },
    { key: 'about', label: t('nav.about') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'navbar-scrolled'
        : 'navbar-hero'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          <Link href={`/${l}`} className="flex items-center gap-1.5 group">
            <span className={`text-xl font-wenkai font-bold transition-colors duration-300 ${
              scrolled ? 'text-primary-700' : 'text-white'
            } group-hover:text-accent-400`}>
              {t('site.name')}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${l}/${item.key}`}
                className={`text-sm font-wenkai transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-600 hover:text-primary-600'
                    : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${l}/${item.key}`}
                className={`text-xs font-wenkai whitespace-nowrap px-1.5 py-0.5 rounded transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-600 hover:text-primary-600'
                    : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] hover:text-white'
                }`}
              >
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
