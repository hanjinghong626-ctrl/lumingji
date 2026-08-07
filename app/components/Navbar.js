'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const siteT = useTranslations('site');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment-50/90 backdrop-blur-md border-b border-primary-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-serif font-bold text-primary-600 group-hover:text-primary-500 transition-colors">
              {siteT('name')}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/life" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
              {t('life')}
            </Link>
            <Link href="/universities" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
              {t('universities')}
            </Link>
            <Link href="/community" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
              {t('community')}
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
              {t('about')}
            </Link>
          </div>

          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center gap-3 pb-3 overflow-x-auto">
          <Link href="/life" className="text-xs font-medium text-gray-600 hover:text-primary-600 whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary-50 transition-all">
            {t('life')}
          </Link>
          <Link href="/universities" className="text-xs font-medium text-gray-600 hover:text-primary-600 whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary-50 transition-all">
            {t('universities')}
          </Link>
          <Link href="/community" className="text-xs font-medium text-gray-600 hover:text-primary-600 whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary-50 transition-all">
            {t('community')}
          </Link>
          <Link href="/about" className="text-xs font-medium text-gray-600 hover:text-primary-600 whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary-50 transition-all">
            {t('about')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
