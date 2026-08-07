'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const localeList = [
  { code: 'zh', label: '中文' },
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
];

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params?.locale || 'zh';

  const getPathForLocale = (newLocale) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['zh', 'ru', 'en'].includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    return '/' + segments.join('/');
  };

  return (
    <div className="flex items-center gap-1 bg-parchment-100/80 backdrop-blur-sm rounded-full px-2 py-1 border border-primary-200/50">
      {localeList.map((loc) => (
        <Link
          key={loc.code}
          href={getPathForLocale(loc.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            currentLocale === loc.code
              ? 'bg-primary-500 text-white shadow-sm'
              : 'text-primary-700 hover:bg-primary-100'
          }`}
        >
          {loc.label}
        </Link>
      ))}
    </div>
  );
}
