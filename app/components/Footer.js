'use client';

import { useParams } from 'next/navigation';
import siteMessages from '../../messages/site.json';
import footerMessages from '../../messages/footer.json';

function resolve(val, locale) {
  if (typeof val === 'object' && val !== null) return val[locale] || val['zh'] || '';
  return val;
}

export default function Footer() {
  const { locale } = useParams();
  const l = locale || 'zh';

  const siteName = resolve(siteMessages.name, l);
  const tagline = resolve(siteMessages.tagline, l);
  const copyright = resolve(footerMessages.copyright, l);
  const madeWith = resolve(footerMessages.made_with, l);

  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center">
          <h3 className="text-xl font-serif font-bold mb-2">{siteName}</h3>
          <p className="text-primary-200 text-sm mb-4 italic">{tagline}</p>
          <div className="border-t border-primary-600 my-6"></div>
          <p className="text-sm text-primary-300">{copyright}</p>
          <p className="text-xs text-primary-400 mt-2">{madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
