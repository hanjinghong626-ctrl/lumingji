'use client';

import { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('transport');

  // Get active category items
  const getItems = (categoryKey) => {
    const items = t(`life.categories.${categoryKey}.items`);
    if (typeof items === 'string') return [];
    return Array.isArray(items) ? items : [];
  };

  const activeItems = getItems(activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="section-title">{t('life.title')}</h1>
        <p className="section-subtitle">{t('life.subtitle')}</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto gap-3 mb-8 pb-2 scrollbar-hide justify-start sm:justify-center">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveTab(cat.key)}
            className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-wenkai text-sm font-medium transition-all duration-300 border
              ${activeTab === cat.key
                ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/20'
                : 'bg-white/60 text-gray-600 border-gray-200/50 hover:border-primary-300 hover:text-primary-700 hover:bg-white/80'
              }`}
          >
            <span className="text-xl">{cat.icon}</span>
            <span>{t(`life.categories.${cat.key}.title`)}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="life-content-enter" key={activeTab}>
        {/* Category Description */}
        <div className="mb-6">
          <p className="text-gray-500 text-sm leading-relaxed">
            {t(`life.categories.${activeTab}.desc`)}
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {activeItems.map((item, idx) => (
            <div
              key={idx}
              className="life-card group"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <h3 className="text-base font-wenkai font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-10">
                {item.content}
              </p>
              {item.tip && (
                <div className="mt-3 ml-10 px-3 py-2 bg-amber-50/80 rounded-lg border border-amber-200/50">
                  <p className="text-xs text-amber-700">
                    💡 <span className="font-medium">{t('life.tip_label')}</span> {item.tip}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Emergency / Quick Info Bar */}
        {activeTab === 'medical' && (
          <div className="mt-8 p-5 bg-red-50/60 rounded-2xl border border-red-200/50 text-center">
            <p className="text-red-700 font-wenkai font-bold text-lg mb-2">
              🚨 {t('life.emergency.title')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-red-600">
              <span><strong>{t('life.emergency.police')}</strong> 110</span>
              <span><strong>{t('life.emergency.ambulance')}</strong> 120</span>
              <span><strong>{t('life.emergency.fire')}</strong> 119</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
