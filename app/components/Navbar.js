'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import siteMessages from '../../messages/site.json';

export default function Navbar() {
  const { locale } = useParams();
  const l = locale || 'zh';

  const siteName = typeof siteMessages.name === 'object' ? siteMessages.name[l] : siteMessages.name;

  const navLabels = {
    life:     { zh: '生活指南', ru: 'Жизнь', en: 'Life Guide' },
    universities: { zh: '高校信息', ru: 'Вузы', en: 'Universities' },
    community:    { zh: '社群', ru: 'Сообщество', en: 'Community' },
    about:    { zh: '关于', ru: 'О нас', en: 'About' },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment-50/90 backdrop-blur-md border-b border-primary-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${l}`} className="flex items-center gap-2 group">
            <span className="text-2xl font-serif font-bold text-primary-600 group-hover:text-primary-500 transition-colors">
              {siteName}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {Object.entries(navLabels).map(([key, labels]) => (
              <Link key={key} href={`/${l}/${key}`} className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
                {labels[l]}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-3 pb-3 overflow-x-auto">
            {Object.entries(navLabels).map(([key, labels]) => (
              <Link key={key} href={`/${l}/${key}`} className="text-xs font-medium text-gray-600 hover:text-primary-600 whitespace-nowrap px-2 py-1 rounded-md hover:bg-primary-50 transition-all">
                {labels[l]}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
