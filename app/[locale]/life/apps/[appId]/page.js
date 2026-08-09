import { getAppGuideData } from '../../../../../data/life/app-guides-loader';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function AppGuideDetailPage({ params: { locale, appId } }) {
  const t = await getTranslations({ locale });
  const guide = getAppGuideData(appId);

  if (!guide) {
    notFound();
  }

  // 当前语言文本
  const getText = (obj) => obj?.[locale] || obj?.zh || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* 面包屑导航 */}
        <nav className="mb-6 text-sm text-gray-500 flex items-center gap-2">
          <Link href={`/life`} locale={locale} className="hover:text-emerald-600 transition-colors">
            {locale === 'ru' ? 'Жизнь в Китае' : locale === 'en' ? 'Life in China' : '生活指南'}
          </Link>
          <span>/</span>
          <Link href={`/life/apps`} locale={locale} className="hover:text-emerald-600 transition-colors">
            {locale === 'ru' ? 'Приложения' : locale === 'en' ? 'Apps' : 'App指南'}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{getText(guide.title)}</span>
        </nav>

        {/* 标题区 */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {getText(guide.title)}
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            {getText(guide.desc)}
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">
              {guide.setupSteps.length} {locale === 'ru' ? 'шагов' : locale === 'en' ? 'steps' : '步'}
            </span>
            <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded-md">
              {guide.coreFeatures.length} {locale === 'ru' ? 'функций' : locale === 'en' ? 'features' : '功能'}
            </span>
            <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded-md">
              {getText(guide.version)}
            </span>
          </div>
        </div>

        {/* 下载区域 */}
        {guide.downloads && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📥</span>
              {locale === 'ru' ? 'Скачать' : locale === 'en' ? 'Download' : '下载'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guide.downloads.ios && (
                <a
                  href={guide.downloads.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-50 hover:bg-emerald-50 rounded-xl p-3 transition-colors border border-gray-100 hover:border-emerald-200"
                >
                  <span className="text-2xl">🍎</span>
                  <div>
                    <div className="text-sm font-medium text-gray-900">iOS (iPhone)</div>
                    <div className="text-xs text-gray-400">App Store</div>
                  </div>
                </a>
              )}
              {guide.downloads.android_cn && (
                <a
                  href={guide.downloads.android_cn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-50 hover:bg-emerald-50 rounded-xl p-3 transition-colors border border-gray-100 hover:border-emerald-200"
                >
                  <span className="text-2xl">🤖</span>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Android</div>
                    <div className="text-xs text-gray-400">
                      {locale === 'ru' ? 'Официальный сайт' : locale === 'en' ? 'Official site' : '官网下载'}
                    </div>
                  </div>
                </a>
              )}
            </div>
            {guide.downloads.note && (
              <p className="text-xs text-gray-500 mt-3 bg-amber-50 rounded-lg p-3">
                💡 {getText(guide.downloads.note)}
              </p>
            )}
          </div>
        )}

        {/* 分步教程 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📖</span>
            {locale === 'ru' ? 'Пошаговая инструкция' : locale === 'en' ? 'Step-by-Step Guide' : '使用步骤'}
          </h2>
          <div className="space-y-4">
            {guide.setupSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-2">{getText(step.title)}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{getText(step.desc)}</p>
                    {step.tip && (
                      <div className="mt-3 text-sm bg-blue-50 text-blue-700 rounded-lg p-3 border border-blue-100">
                        {getText(step.tip)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 核心功能 */}
        {guide.coreFeatures && guide.coreFeatures.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>✨</span>
              {locale === 'ru' ? 'Основные функции' : locale === 'en' ? 'Core Features' : '核心功能'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guide.coreFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                  <span className="text-xl flex-shrink-0">{feature.icon}</span>
                  <div>
                    <div className="font-medium text-sm text-gray-900">{getText(feature.title)}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{getText(feature.desc)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 实用技巧 */}
        {guide.tips && guide.tips.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>💡</span>
              {locale === 'ru' ? 'Полезные советы' : locale === 'en' ? 'Useful Tips' : '实用技巧'}
            </h2>
            <div className="space-y-3">
              {guide.tips.map((tip, index) => (
                <details key={index} className="group bg-amber-50 rounded-xl border border-amber-100 overflow-hidden">
                  <summary className="flex items-center gap-2 p-4 cursor-pointer font-medium text-sm text-gray-900 hover:text-amber-700 transition-colors">
                    <span className="group-open:rotate-90 transition-transform text-amber-600">▶</span>
                    {getText(tip.title)}
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    {getText(tip.content)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* 常见问题 */}
        {guide.faq && guide.faq.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>❓</span>
              {locale === 'ru' ? 'Частые вопросы' : locale === 'en' ? 'FAQ' : '常见问题'}
            </h2>
            <div className="space-y-3">
              {guide.faq.map((item, index) => (
                <details key={index} className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center gap-2 p-4 cursor-pointer font-medium text-sm text-gray-900 hover:text-emerald-700 transition-colors">
                    <span className="group-open:rotate-90 transition-transform text-gray-400">▶</span>
                    {getText(item.q)}
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    {getText(item.a)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* 相关指南 */}
        {guide.relatedGuides && guide.relatedGuides.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🔗</span>
              {locale === 'ru' ? 'Связанные руководства' : locale === 'en' ? 'Related Guides' : '相关指南'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {guide.relatedGuides.map((relatedId) => (
                <Link
                  key={relatedId}
                  href={`/life/newcomer/${relatedId}`}
                  locale={locale}
                  className="inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  {relatedId}
                  <span>→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 返回 */}
        <div className="text-center mt-8">
          <Link
            href="/life/apps"
            locale={locale}
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
          >
            <span>←</span>
            {locale === 'ru' ? 'Все руководства' : locale === 'en' ? 'All app guides' : '返回所有App指南'}
          </Link>
        </div>
      </div>
    </div>
  );
}
