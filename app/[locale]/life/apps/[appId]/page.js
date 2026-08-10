'use client';

import { useParams } from 'next/navigation';
import { useI18n } from '../../../../../i18n-context';
import { getAppGuideData, hasAppGuide } from '../../../../../data/life/app-guides-loader';
import appIcons from '../../../../../data/life/app-icons';

export default function AppGuideDetailPage() {
  const { locale, appId } = useParams();
  const { t } = useI18n();
  const lang = locale || 'zh';

  if (!hasAppGuide(appId)) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 text-lg">
          {lang === 'ru' ? 'Руководство не найдено' : lang === 'en' ? 'Guide not found' : '指南未找到'}
        </p>
        <a href={`/${lang}/life/apps`} className="text-emerald-600 hover:underline mt-4 inline-block">
          ← {lang === 'ru' ? 'Назад' : lang === 'en' ? 'Back' : '返回'}
        </a>
      </div>
    );
  }

  const guide = getAppGuideData(appId);
  const getText = (obj) => obj?.[lang] || obj?.zh || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* 面包屑导航 */}
        <nav className="mb-6 text-sm text-gray-500 flex items-center gap-2">
          <a href={`/${lang}/life`} className="hover:text-emerald-600 transition-colors">
            {lang === 'ru' ? 'Жизнь в Китае' : lang === 'en' ? 'Life in China' : '生活指南'}
          </a>
          <span>/</span>
          <a href={`/${lang}/life/apps`} className="hover:text-emerald-600 transition-colors">
            {lang === 'ru' ? 'Приложения' : lang === 'en' ? 'Apps' : 'App指南'}
          </a>
          <span>/</span>
          <span className="text-gray-900 font-medium">{getText(guide.title)}</span>
        </nav>

        {/* 标题区 */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            {appIcons[appId] ? (
              <img
                src={appIcons[appId]}
                alt={getText(guide.title)}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-lg flex-shrink-0 bg-gray-50"
              />
            ) : (
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-lg flex-shrink-0 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-3xl md:text-4xl">
                📱
              </div>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {getText(guide.title)}
            </h1>
          </div>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            {getText(guide.desc)}
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">
              {guide.setupSteps.length} {lang === 'ru' ? 'шагов' : lang === 'en' ? 'steps' : '步'}
            </span>
            <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded-md">
              {guide.coreFeatures.length} {lang === 'ru' ? 'функций' : lang === 'en' ? 'features' : '功能'}
            </span>
            <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded-md">
              {getText(guide.version)}
            </span>
          </div>
        </div>

        {/* ⭐ 下载区域 - 最醒目的位置 */}
        {guide.downloads && (
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 md:p-8 mb-8 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-2xl">⬇️</span>
              {lang === 'ru' ? 'Скачать приложение' : lang === 'en' ? 'Download App' : '立即下载'}
            </h2>
            <p className="text-emerald-100 text-sm mb-5">
              {lang === 'ru'
                ? 'Выберите платформу для скачивания'
                : lang === 'en'
                ? 'Choose your platform to download'
                : '选择你的平台，点击下载'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guide.downloads.ios && (
                <a
                  href={guide.downloads.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white hover:bg-gray-50 rounded-xl p-4 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl"></span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">
                      {lang === 'ru' ? 'Загрузить в' : 'Download on the'} App Store
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      iOS / iPhone
                    </div>
                  </div>
                </a>
              )}
              {guide.downloads.android_cn && (
                <a
                  href={guide.downloads.android_cn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white hover:bg-gray-50 rounded-xl p-4 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 bg-[#3DDC84] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">
                      {lang === 'ru' ? 'Скачать для' : lang === 'en' ? 'Get it for' : '下载'} Android
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {lang === 'ru' ? 'Официальный сайт' : lang === 'en' ? 'Official Site' : '官网下载'}
                    </div>
                  </div>
                </a>
              )}
            </div>
            {guide.downloads.note && (
              <div className="mt-4 bg-white/20 rounded-lg p-3 text-sm text-white/90">
                💡 {getText(guide.downloads.note)}
              </div>
            )}
          </div>
        )}

        {/* 分步教程 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📖</span>
            {lang === 'ru' ? 'Пошаговая инструкция' : lang === 'en' ? 'Step-by-Step Guide' : '使用步骤'}
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
              {lang === 'ru' ? 'Основные функции' : lang === 'en' ? 'Core Features' : '核心功能'}
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
              {lang === 'ru' ? 'Полезные советы' : lang === 'en' ? 'Useful Tips' : '实用技巧'}
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
              {lang === 'ru' ? 'Частые вопросы' : lang === 'en' ? 'FAQ' : '常见问题'}
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
              {lang === 'ru' ? 'Связанные руководства' : lang === 'en' ? 'Related Guides' : '相关指南'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {guide.relatedGuides.map((relatedId) => (
                <a
                  key={relatedId}
                  href={`/${lang}/life/newcomer/${relatedId}`}
                  className="inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  {relatedId}
                  <span>→</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 返回 */}
        <div className="text-center mt-8">
          <a
            href={`/${lang}/life/apps`}
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
          >
            <span>←</span>
            {lang === 'ru' ? 'Все руководства' : lang === 'en' ? 'All app guides' : '返回所有App指南'}
          </a>
        </div>
      </div>
    </div>
  );
}
