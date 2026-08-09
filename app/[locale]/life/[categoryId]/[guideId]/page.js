'use client';

import { useParams } from 'next/navigation';
import { useI18n } from '../../../../../i18n-context';
import StepGuide from '../../../../components/life/StepGuide.js';
import categories from '../../../../../data/life/categories.js';
import guideIndex from '../../../../../data/life/guide-index.js';

export default function GuideDetailPage() {
  const { locale, categoryId, guideId } = useParams();
  const { t } = useI18n();
  const lang = locale || 'zh';

  const category = categories.find(c => c.id === categoryId);
  const guideMeta = guideIndex.find(g => g.id === guideId);

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

      {/* 分步引导 */}
      <GuideContent guideId={guideId} locale={locale} />

      {/* 推荐下一步 */}
      {guideMeta.tags && (
        <div className="mt-8 p-5 bg-primary-50/40 rounded-2xl border border-primary-200/30">
          <h3 className="text-lg font-wenkai font-bold text-gray-800 mb-3">
            🚀 {t('life.guide.next_steps') || '推荐下一步'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {guideMeta.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white text-primary-600 text-xs rounded-full border border-primary-200/50">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function GuideContent({ guideId, locale }) {
  const { t } = useI18n();
  const lang = locale || 'zh';

  const guideContentMap = {
    'setup-alipay': () => (
      <div className="space-y-4">
        <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-200/50">
          <p className="text-sm text-blue-700 leading-relaxed">
            {lang === 'zh' ? '📖 本指南将带你一步一步完成支付宝的注册和设置。跟着走，7步搞定！' :
             lang === 'ru' ? '📖 Это руководство проведёт вас шаг за шагом. 7 шагов — готово!' :
             '📖 This guide walks you through Alipay step by step. 7 steps and done!'}
          </p>
        </div>
        <StepGuide
          locale={locale}
          data={{
            steps: [
              { title: { zh: '下载支付宝App', en: 'Download Alipay', ru: 'Скачать Alipay' }, desc: { zh: '在App Store搜索"支付宝"或"Alipay"，认准蓝色蚂蚁图标。', en: 'Search "Alipay" in App Store, look for the blue ant icon.', ru: 'Найдите "Alipay" в App Store, ищите синюю иконку с муравьём.' } },
              { title: { zh: '注册账号', en: 'Register Account', ru: 'Зарегистрироваться' }, desc: { zh: '输入中国手机号（+86），获取验证码，设置密码。', en: 'Enter Chinese phone (+86), get code, set password.', ru: 'Введите китайский номер (+86), получите код, установите пароль.' } },
              { title: { zh: '实名认证', en: 'Real-name Verification', ru: 'Верификация' }, desc: { zh: '我的→头像→实名认证→护照验证→拍照上传。', en: 'Me → Profile → Verification → Passport → Photo.', ru: 'Me → Профиль → Верификация → Паспорт → Фото.' } },
              { title: { zh: '绑定银行卡', en: 'Bind Bank Card', ru: 'Привязать карту' }, desc: { zh: '我的→银行卡→添加→输入境外卡号或中国卡号。', en: 'Me → Bank Cards → Add → Enter card number.', ru: 'Me → Карты → Добавить → номер карты.' } },
              { title: { zh: '扫码付款', en: 'Scan to Pay', ru: 'Оплата сканированием' }, desc: { zh: '首页→扫一扫→对准商家二维码→输金额→输密码→完成！', en: 'Homepage → Scan → QR → Amount → Password → Done!', ru: 'Главная → Сканировать → QR → Сумма → Пароль → Готово!' } },
              { title: { zh: '设置指纹/面容支付', en: 'Set Biometric Pay', ru: 'Биометрическая оплата' }, desc: { zh: '设置→支付设置→开启指纹/面容支付。', en: 'Settings → Payment → Enable biometric payment.', ru: 'Настройки → Платежи → Включить биометрию.' } },
              { title: { zh: '开始使用！', en: 'Start Using!', ru: 'Начинайте!' }, desc: { zh: '现在你可以在中国几乎所有地方扫码付款了！', en: 'Now you can pay almost everywhere in China!', ru: 'Теперь платите почти везде в Китае!' } }
            ]
          }}
        />
      </div>
    )
  };

  const GuideComponent = guideContentMap[guideId];
  if (GuideComponent) return <GuideComponent />;

  return (
    <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-200/50">
      <p className="text-gray-400 text-lg mb-2">🚧</p>
      <p className="text-gray-500">
        {lang === 'zh' ? '本指南正在编写中，敬请期待...' :
         lang === 'ru' ? 'Руководство в разработке...' :
         'This guide is under construction...'}
      </p>
    </div>
  );
}
