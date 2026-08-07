import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');
  const siteT = useTranslations('site');

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
              <Link href="/life" className="btn-primary">
                {t('cta_explore')}
              </Link>
              <Link href="/community" className="btn-secondary">
                {t('cta_community')}
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Life Guide Card */}
          <Link href="/life" className="card group">
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

          {/* Universities Card */}
          <Link href="/universities" className="card group">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
              {t('section_uni_title')}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t('section_uni_desc')}
            </p>
            <span className="inline-block mt-4 text-sm text-primary-500 font-medium group-hover:text-primary-600">
              {t('learn_more')} →
            </span>
          </Link>

          {/* Community Card */}
          <Link href="/community" className="card group">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
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

      {/* Poetic Quote Section */}
      <section className="bg-primary-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xl md:text-2xl font-serif leading-relaxed opacity-90">
            {siteT('tagline')}
          </p>
          <p className="mt-4 text-primary-200 text-sm">
            {siteT('description')}
          </p>
        </div>
      </section>
    </div>
  );
}
