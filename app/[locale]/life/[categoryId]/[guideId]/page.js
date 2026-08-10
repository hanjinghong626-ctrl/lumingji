'use client';

import { useParams } from 'next/navigation';
import { useI18n } from '../../../../../i18n-context';
import StepGuide from '../../../../components/life/StepGuide.js';
import categories from '../../../../../data/life/categories.js';
import guideIndex from '../../../../../data/life/guide-index.js';
import getGuideData from '../../../../../data/life/guides-loader.js';
import { getAppGuideData, hasAppGuide } from '../../../../../data/life/app-guides-loader';

export default function GuideDetailPage() {
  const { locale, categoryId, guideId } = useParams();
  const { t } = useI18n();
  const lang = locale || 'zh';

  const category = categories.find(c => c.id === categoryId);
  const guideMeta = guideIndex.find(g => g.id === guideId);
  const guideData = getGuideData(guideId);

  if (!guideMeta) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 text-lg">Guide not found: {guideId}</p>
        <a href={`/${locale}/life`} className="text-primary-600 hover:underline mt-4 inline-block">
          ← Back
        </a>
      </div>
    );
  }

  const difficultyStars = '⭐'.repeat(guideMeta.difficulty || 1);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* 面包屑 */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-wenkai">
        <a href={`/${locale}/life`} className="hover:text-primary-600 transition-colors">
          {t('life.title') || '生活指南'}
        </a>
        <span>›</span>
        <a href={`/${locale}/life/${categoryId}`} className="hover:text-primary-600 transition-colors">
          {category?.name?.[lang]}
        </a>
        <span>›</span>
        <span className="text-gray-600">{guideMeta.title?.[lang]}</span>
      </nav>

      {/* Guide 头部 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{guideMeta.icon}</span>
          <div>
            <h1 className="text-2xl font-wenkai font-bold text-gray-800">
              {guideMeta.title?.[lang]}
            </h1>
            <p className="text-sm text-gray-500 mt-1">{guideMeta.summary?.[lang]}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-4">
          <span className="px-3 py-1 bg-gray-100 rounded-full">
            {t('life.guide.difficulty') || '难度'}: {difficultyStars}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">
            ⏱ {guideMeta.estimatedTime} {t('life.guide.minutes') || '分钟'}
          </span>
          <span className={`px-3 py-1 rounded-full ${
            guideMeta.type === 'hands-on' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
          }`}>
            {guideMeta.type === 'hands-on' ? (t('life.guide.hands_on') || '实操') : (t('life.guide.reading') || '阅读')}
          </span>
        </div>

        {guideMeta.apps && guideMeta.apps.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-gray-400 mb-2">{t('life.guide.apps_needed') || '涉及App'}：</p>
            <div className="flex flex-wrap gap-2">
              {guideMeta.apps.map((appId) => (
                <span key={appId} className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full font-medium">
                  {appId}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 前置条件 */}
      {guideMeta.prerequisites && guideMeta.prerequisites.length > 0 && (
        <div className="mb-6 p-4 bg-amber-50/60 rounded-xl border border-amber-200/50">
          <p className="text-sm font-wenkai font-bold text-amber-700 mb-2">
            📋 {t('life.guide.prerequisites') || '前置条件'}
          </p>
          <ul className="space-y-1">
            {guideMeta.prerequisites.map((prereqId) => {
              const prereq = guideIndex.find(g => g.id === prereqId);
              return prereq ? (
                <li key={prereqId}>
                  <a href={`/${locale}/life/${prereq.category}/${prereqId}`}
                    className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
                    → {prereq.title?.[lang]}
                  </a>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      )}

      {/* ⬇️ 下载相关App */}
      {guideMeta.apps && guideMeta.apps.length > 0 && (() => {
        const appsWithDownloads = guideMeta.apps.filter(appId => hasAppGuide(appId));
        if (appsWithDownloads.length === 0) return null;
        return (
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 mb-8 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-2xl">⬇️</span>
              {lang === 'ru' ? 'Скачать приложения' : lang === 'en' ? 'Download Apps' : '立即下载'}
            </h2>
            <p className="text-emerald-100 text-sm mb-4">
              {lang === 'ru' ? 'Нажмите, чтобы перейти к загрузке' : lang === 'en' ? 'Tap to download' : '点击下方按钮下载'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {appsWithDownloads.map(appId => {
                const appGuide = getAppGuideData(appId);
                return (
                  <div key={appId} className="flex flex-col gap-2">
                    <div className="font-semibold text-white/90 text-sm">
                      {appGuide ? (appGuide.title?.[lang] || appGuide.title?.zh || appId) : appId}
                    </div>
                    {appGuide?.downloads?.ios && (
                      <a
                        href={appGuide.downloads.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white hover:bg-gray-50 rounded-xl p-3 transition-all shadow-md hover:shadow-lg"
                      >
                        <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg"></span>
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-500">Download on the App Store</div>
                          <div className="text-sm font-bold text-gray-900">iOS</div>
                        </div>
                      </a>
                    )}
                    {appGuide?.downloads?.android_cn && (
                      <a
                        href={appGuide.downloads.android_cn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white hover:bg-gray-50 rounded-xl p-3 transition-all shadow-md hover:shadow-lg"
                      >
                        <div className="w-9 h-9 bg-[#3DDC84] rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg">▶</span>
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-500">{lang === 'ru' ? 'Скачать' : lang === 'en' ? 'Get it for' : '下载'} Android</div>
                          <div className="text-sm font-bold text-gray-900">{lang === 'ru' ? 'Официальный сайт' : lang === 'en' ? 'Official' : '官网'}</div>
                        </div>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* 分步引导 */}
      {guideData ? (
        <div className="space-y-4">
          {/* 简介 */}
          {guideData.intro && (
            <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-200/50">
              <p className="text-sm text-blue-700 leading-relaxed">
                📖 {guideData.intro?.[lang]}
              </p>
            </div>
          )}

          {/* 准备工作 */}
          {guideData.preparation && guideData.preparation.length > 0 && (
            <div className="p-5 bg-amber-50/60 rounded-xl border border-amber-200/50">
              <p className="text-sm font-wenkai font-bold text-amber-700 mb-3">
                🎒 {t('life.guide.preparation') || '准备工作'}
              </p>
              <ul className="space-y-2">
                {guideData.preparation.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 分步操作 */}
          <StepGuide locale={locale} data={{ steps: guideData.steps || [] }} />

          {/* FAQ */}
          {guideData.faq && guideData.faq.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-wenkai font-bold text-gray-800 mb-4">
                ❓ {t('life.guide.faq') || '常见问题'}
              </h3>
              <div className="space-y-4">
                {guideData.faq.map((item, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-200/50">
                    <p className="text-sm font-wenkai font-bold text-gray-700 mb-2">
                      Q: {item.q?.[lang]}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      A: {item.a?.[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 推荐下一步 */}
          {guideData.nextGuides && guideData.nextGuides.length > 0 && (
            <div className="mt-8 p-5 bg-primary-50/40 rounded-2xl border border-primary-200/30">
              <h3 className="text-lg font-wenkai font-bold text-gray-800 mb-3">
                🚀 {t('life.guide.next_steps') || '推荐下一步'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {guideData.nextGuides.map((nextId) => {
                  const nextGuide = guideIndex.find(g => g.id === nextId);
                  if (!nextGuide) return null;
                  return (
                    <a key={nextId} href={`/${locale}/life/${nextGuide.category}/${nextId}`}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-primary-200/50 hover:border-primary-400 hover:shadow-sm transition-all">
                      <span>{nextGuide.icon}</span>
                      <span className="text-sm text-primary-700">{nextGuide.title?.[lang]}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-200/50">
          <p className="text-gray-400 text-lg mb-2">🚧</p>
          <p className="text-gray-500">
            {lang === 'zh' ? '本指南正在编写中，敬请期待...' :
             lang === 'ru' ? 'Руководство в разработке...' :
             'This guide is under construction...'}
          </p>
        </div>
      )}
    </div>
  );
}
