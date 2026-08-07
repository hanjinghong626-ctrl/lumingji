'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'zh', label: '中文' },
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    // Remove current locale prefix from pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 bg-parchment-100/80 backdrop-blur-sm rounded-full px-2 py-1 border border-primary-200/50">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLocale(l.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            locale === l.code
              ? 'bg-primary-500 text-white shadow-sm'
              : 'text-primary-700 hover:bg-primary-100'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
