'use client';

import { useI18n } from '../../../i18n-context';

const categories = [
  { key: 'transport', icon: '🚌' },
  { key: 'housing', icon: '🏠' },
  { key: 'food', icon: '🍜' },
  { key: 'banking', icon: '🏦' },
  { key: 'visa', icon: '📋' },
  { key: 'medical', icon: '🏥' },
];

export default function LifeGuidePage() {
  const { locale, t } = useI18n();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="section-title">{t('life.title')}</h1>
        <p className="section-subtitle">{t('life.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.key} className="card group cursor-pointer">
            <div className="text-4xl mb-4">{cat.icon}</div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
              {t(`life.categories.${cat.key}.title`)}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t(`life.categories.${cat.key}.desc`)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-parchment-100 rounded-2xl p-8 border border-primary-100/50">
        <p className="text-gray-500 text-sm">
          📝 {locale === 'zh' ? '内容正在整理中，敬请期待' : locale === 'ru' ? 'Контент готовится, следите за обновлениями' : 'Content coming soon, stay tuned'}
        </p>
      </div>
    </div>
  );
}
