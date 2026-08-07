import { useTranslations } from 'next-intl';

const categories = [
  { key: 'transport', icon: '🚌' },
  { key: 'housing', icon: '🏠' },
  { key: 'food', icon: '🍜' },
  { key: 'banking', icon: '🏦' },
  { key: 'visa', icon: '📋' },
  { key: 'medical', icon: '🏥' },
];

export default function LifeGuidePage() {
  const t = useTranslations('life');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="section-title">{t('title')}</h1>
        <p className="section-subtitle">{t('subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.key} className="card group cursor-pointer">
            <div className="text-4xl mb-4">{cat.icon}</div>
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
              {t(`categories.${cat.key}.title`)}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t(`categories.${cat.key}.desc`)}
            </p>
            <div className="mt-4 flex items-center text-sm text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>查看详情</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Notice */}
      <div className="mt-16 text-center bg-parchment-100 rounded-2xl p-8 border border-primary-100/50">
        <p className="text-gray-500 text-sm">
          📝 内容正在整理中，敬请期待
        </p>
      </div>
    </div>
  );
}
