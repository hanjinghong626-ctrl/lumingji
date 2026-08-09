import { getAllAppGuidesSummary } from '../../../../data/life/app-guides-loader';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function AppsGuideIndexPage({ params: { locale } }) {
  const t = await getTranslations({ locale });
  const appGuides = getAllAppGuidesSummary();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* 标题区 */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {locale === 'ru' ? 'Руководства по приложениям' : locale === 'en' ? 'App Usage Guides' : 'App 使用指南'}
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            {locale === 'ru'
              ? 'Пошаговые инструкции для самых нужных приложений в Китае'
              : locale === 'en'
              ? 'Step-by-step tutorials for the most essential apps in China'
              : '手把手教你用中国最常用的App'}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {locale === 'ru'
              ? `Доступно руководств: ${appGuides.length}`
              : locale === 'en'
              ? `${appGuides.length} guide${appGuides.length !== 1 ? 's' : ''} available`
              : `已上线 ${appGuides.length} 个App指南`}
          </p>
        </div>

        {/* App指南卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {appGuides.map((guide) => (
            <Link
              key={guide.id}
              href={`/life/apps/${guide.id}`}
              locale={locale}
              className="block bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* 头部：标题 + 描述 */}
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {guide.title[locale] || guide.title.zh}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {guide.desc[locale] || guide.desc.zh}
                  </p>
                </div>

                {/* 统计信息 */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                  <span className="bg-gray-50 px-2 py-1 rounded-md">
                    {guide.stepCount} {locale === 'ru' ? 'шагов' : locale === 'en' ? 'steps' : '步'}
                  </span>
                  <span className="bg-gray-50 px-2 py-1 rounded-md">
                    {guide.featureCount} {locale === 'ru' ? 'функций' : locale === 'en' ? 'features' : '功能'}
                  </span>
                  <span className="bg-gray-50 px-2 py-1 rounded-md">
                    {guide.faqCount} FAQ
                  </span>
                </div>

                {/* 底部：更新日期 */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                  <span className="text-xs text-gray-400">
                    {guide.version}
                  </span>
                  <span className="text-sm text-emerald-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {locale === 'ru' ? 'Открыть' : locale === 'en' ? 'Open guide' : '查看指南'}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 底部说明 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            {locale === 'ru'
              ? 'Список приложений регулярно обновляется. Если нужного приложения нет — скоро добавим!'
              : locale === 'en'
              ? 'App list is regularly updated. Missing an app? We\'ll add it soon!'
              : 'App 列表持续更新中。没有想要的App？我们会尽快补充！'}
          </p>
        </div>
      </div>
    </div>
  );
}
