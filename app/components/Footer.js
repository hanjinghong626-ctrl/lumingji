'use client';

import { useI18n } from '../../i18n-context';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center">
          <h3 className="text-xl font-serif font-bold mb-2">{t('site.name')}</h3>
          <p className="text-primary-200 text-sm mb-4 italic">{t('site.tagline')}</p>
          <div className="border-t border-primary-600 my-6"></div>
          <p className="text-sm text-primary-300">{t('footer.copyright')}</p>
          <p className="text-xs text-primary-400 mt-2">{t('footer.made_with')}</p>
        </div>
      </div>
    </footer>
  );
}
