'use client';

import { useI18n } from '../../../i18n-context';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="section-title">{t('about.title')}</h1>
        <p className="section-subtitle">{t('about.subtitle')}</p>
      </div>

      <section className="card mb-8">
        <h2 className="text-xl font-serif font-bold text-primary-700 mb-6">
          {t('about.story_title')}
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p className="text-lg italic text-primary-600 font-serif border-l-4 border-primary-200 pl-4">
            {t('about.story_p1')}
          </p>
          <p>{t('about.story_p2')}</p>
          <p>{t('about.story_p3')}</p>
        </div>
      </section>

      <section className="card mb-8">
        <h2 className="text-xl font-serif font-bold text-primary-700 mb-4">
          {t('about.mission_title')}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {t('about.mission_desc')}
        </p>
      </section>

      <section className="card">
        <h2 className="text-xl font-serif font-bold text-primary-700 mb-4">
          {t('about.team_title')}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {t('about.team_desc')}
        </p>
      </section>

      <div className="mt-12 bg-primary-700 rounded-2xl p-8 text-center">
        <p className="text-xl font-serif text-white opacity-90 leading-relaxed">
          {t('site.tagline')}
        </p>
        <p className="mt-3 text-primary-200 text-sm">
          {t('site.description')}
        </p>
      </div>
    </div>
  );
}
