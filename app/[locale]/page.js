'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import messages from '../../messages/home.json';
import siteMessages from '../../messages/site.json';

function resolve(val, locale) {
  if (typeof val === 'object' && val !== null) return val[locale] || val['zh'] || '';
  return val;
}

export default function HomePage() {
  const { locale } = useParams();
  const l = locale || 'zh';
  const t = (key) => resolve(messages[key], l);
  const siteT = (key) => resolve(siteMessages[key], l);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative ink-decoration overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-700 mb-4 tracking-wide">
              {t('hero_title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-500 font-medium mb-3">
              {t('hero_subtitle')}
            </p>
            <p className="text-sm md:text-base text-gray-500 italic mb-10 leading-relaxed">
              {siteT('tagline')}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('hero_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${l}/life`} className="btn-primary">
                {t('cta_explore')}
              </Link>
              <Link href={`/${l}/community`} className="btn-secondary">
                {t('cta_community')}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Link href={`/${l}/life`} className="card group">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
              {t('section_life_title')}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t('section_life_desc')}
            </p>
            <span className="inline-block mt-4 text-sm text-primary-500 font-medium group-hover:text-primary-600">
              {t('learn_more')} →
            </span>
          </Link>

          <Link href={`/${l}/universities`} className="card group">
            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-200 transition-colors">
              <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-accent-600 transition-colors">
              {t('section_uni_title')}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t('section_uni_desc')}
            </p>
            <span className="inline-block mt-4 text-sm text-accent-500 font-medium group-hover:text-accent-600">
              {t('learn_more')} →
            </span>
          </Link>

          <Link href={`/${l}/community`} className="card group">
            <div className="w-12 h-12 bg-parchment-200 rounded-xl flex items-center justify-center mb-4 group-hover:bg-parchment-300 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
              {t('section_community_title')}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t('section_community_desc')}
            </p>
            <span className="inline-block mt-4 text-sm text-primary-500 font-medium group-hover:text-primary-600">
              {t('learn_more')} →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
