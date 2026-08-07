'use client';

import { useParams } from 'next/navigation';
import messages from '../../../messages/life.json';

function resolve(val, locale) {
  if (typeof val === 'object' && val !== null) return val[locale] || val['zh'] || '';
  return val;
}

const categories = [
  { key: 'transport', icon: '🚌' },
  { key: 'housing', icon: '🏠' },
  { key: 'food', icon: '🍜' },
  { key: 'banking', icon: '🏦' },
  { key: 'visa', icon: '📋' },
  { key: 'medical', icon: '🏥' },
];

export default function LifeGuidePage() {
  const { locale } = useParams();
  const l = locale || 'zh';
  const t = (key) => {
    const parts = key.split('.');
    let val = messages;
    for (const p of parts) {
      if (val && typeof val === 'object') val = val[p];
      else return key;
    }
    return resolve(val, l);
  };

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
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-parchment-100 rounded-2xl p-8 border border-primary-100/50">
        <p className="text-gray-500 text-sm">
          📝 {l === 'zh' ? '内容正在整理中，敬请期待' : l === 'ru' ? 'Контент готовится, следите за обновлениями' : 'Content coming soon, stay tuned'}
        </p>
      </div>
    </div>
  );
}
