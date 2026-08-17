'use client';

import { useParams } from 'next/navigation';
import { useI18n } from '../../../../i18n-context';
import categories from '../../../../data/life/categories.js';
import guideIndex from '../../../../data/life/guide-index.js';
import SEO from '../../../components/SEO.js';

export default function CategoryPage() {
  const { locale, categoryId } = useParams();
  const { t } = useI18n();
  const lang = locale || 'zh';

  const category = categories.find(c => c.id === categoryId);
  const guides = guideIndex.filter(g => g.category === categoryId);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 text-lg">Category not found</p>
        <a href={`/${locale}/life`} className="text-primary-600 hover:underline mt-4 inline-block">← Back</a>
      </div>
    );
  }

  const typeLabels = {
    'hands-on': { zh: '实操', en: 'Hands-on', ru: 'Практика' },
    'reading': { zh: '阅读', en: 'Reading', ru: 'Чтение' },
    'reference': { zh: '参考', en: 'Reference', ru: 'Справка' }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <SEO title={`${category.name[lang]} — 鹿鸣集`} description={`${category.name[lang]}：来华留学生实用生活指南。${guides.length}篇详细指引。`} />
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-wenkai">
        <a href={`/${locale}/life`} className="hover:text-primary-600 transition-colors">
          {t('life.title') || '生活指南'}
        </a>
        <span>›</span>
        <span className="text-gray-600">{category.name[lang]}</span>
      </nav>

      <div className="mb-8 text-center">
        <span className="text-5xl mb-4 block">{category.icon}</span>
        <h1 className="text-3xl font-wenkai font-bold text-gray-800 mb-2">{category.name[lang]}</h1>
        <p className="text-gray-500 max-w-lg mx-auto">{category.desc[lang]}</p>
        <p className="text-sm text-gray-400 mt-3">{guides.length} guides</p>
      </div>

      <div className="grid gap-4">
        {guides.map((guide, idx) => (
          <a
            key={guide.id}
            href={`/${locale}/life/${categoryId}/${guide.id}`}
            className="group block p-5 bg-white/80 rounded-2xl border border-gray-200/50
              hover:border-primary-300 hover:shadow-lg hover:shadow-primary-600/5 transition-all duration-300"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{guide.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-wenkai font-bold text-gray-800 group-hover:text-primary-700 transition-colors mb-1">
                  {guide.title[lang]}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{guide.summary[lang]}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                  <span className={`px-2 py-0.5 rounded-full ${
                    guide.type === 'hands-on' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                  }`}>
                    {typeLabels[guide.type]?.[lang] || guide.type}
                  </span>
                  <span>⏱ {guide.estimatedTime}min</span>
                  <span>{'⭐'.repeat(guide.difficulty)}</span>
                </div>
              </div>
              <span className="text-gray-300 group-hover:text-primary-500 transition-colors text-xl flex-shrink-0">→</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href={`/${locale}/life`} className="inline-flex items-center gap-2 px-6 py-2 text-sm text-primary-600 hover:text-primary-700 font-wenkai">
          ← {t('life.back_to_categories') || '返回所有分类'}
        </a>
      </div>
    </div>
  );
}
