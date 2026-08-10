'use client';

import { useParams } from 'next/navigation';
import { useI18n } from '../../../../i18n-context';
import { getAllAppGuidesSummary } from '../../../../data/life/app-guides-loader';
import appIcons from '../../../../data/life/app-icons';

export default function AppsGuideIndexPage() {
  const { locale } = useParams();
  const { t } = useI18n();
  const lang = locale || 'zh';
  const appGuides = getAllAppGuidesSummary();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* 标题区 */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {lang === 'ru' ? 'Руководства по приложениям' : lang === 'en' ? 'App Usage Guides' : 'App 使用指南'}
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            {lang === 'ru'
              ? 'Пошаговые инструкции для самых нужных приложений в Китае'
              : lang === 'en'
              ? 'Step-by-step tutorials for the most essential apps in China'
              : '手把手教你用中国最常用的App'}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {lang === 'ru'
              ? `Доступно руководств: ${appGuides.length}`
              : lang === 'en'
              ? `${appGuides.length} guide${appGuides.length !== 1 ? 's' : ''} available`
              : `已上线 ${appGuides.length} 个App指南`}
          </p>
        </div>

        {/* App指南卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {appGuides.map((guide) => (
            <a
              key={guide.id}
              href={`/${lang}/life/apps/${guide.id}`}
              className="block bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* 头部：图标 + 标题 + 描述 */}
                <div className="flex items-start gap-4 mb-4">
                  {appIcons[guide.id] ? (
                    <img
                      src={appIcons[guide.id]}
                      alt={guide.title[lang] || guide.title.zh}
                      className="w-14 h-14 rounded-2xl shadow-md flex-shrink-0 bg-gray-50"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-2xl shadow-md flex-shrink-0 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-2xl">
                      📱
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {guide.title[lang] || guide.title.zh}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {guide.desc[lang] || guide.desc.zh}
                    </p>
                  </div>
                </div>

                {/* 统计信息 + 下载提示 */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                  <span className="bg-gray-50 px-2 py-1 rounded-md">
                    {guide.stepCount} {lang === 'ru' ? 'шагов' : lang === 'en' ? 'steps' : '步'}
                  </span>
                  <span className="bg-gray-50 px-2 py-1 rounded-md">
                    {guide.featureCount} {lang === 'ru' ? 'функций' : lang === 'en' ? 'features' : '功能'}
                  </span>
                  <span className="bg-gray-50 px-2 py-1 rounded-md">
                    {guide.faqCount} FAQ
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-medium">
                    ⬇️ {lang === 'ru' ? 'Скачать' : lang === 'en' ? 'Download' : '可下载'}
                  </span>
                </div>

                {/* 底部：更新日期 */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                  <span className="text-xs text-gray-400">
                    {guide.version}
                  </span>
                  <span className="text-sm text-emerald-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {lang === 'ru' ? 'Открыть' : lang === 'en' ? 'Open guide' : '查看指南'}
                    <span>→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 底部说明 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            {lang === 'ru'
              ? 'Список приложений регулярно обновляется. Если нужного приложения нет — скоро добавим!'
              : lang === 'en'
              ? 'App list is regularly updated. Missing an app? We\'ll add it soon!'
              : 'App 列表持续更新中。没有想要的App？我们会尽快补充！'}
          </p>
        </div>

        {/* 返回生活指南 */}
        <div className="text-center mt-8">
          <a href={`/${lang}/life`} className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors">
            <span>←</span>
            {lang === 'ru' ? 'Назад к жизни в Китае' : lang === 'en' ? 'Back to Life Guide' : '返回生活指南'}
          </a>
        </div>
      </div>
    </div>
  );
}
