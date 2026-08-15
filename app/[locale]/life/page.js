'use client';

import { useI18n } from '../../../i18n-context';
import categories from '../../../data/life/categories.js';
import guideIndex from '../../../data/life/guide-index.js';
import SearchBar from '../../components/life/SearchBar.js';

export default function LifeGuidePage() {
  const { locale, t } = useI18n();
  const lang = locale || 'zh';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Header */}
      <div className="text-center mb-12">
        <h1 className="section-title">{t('life.title') || '来华生活导引'}</h1>
        <p className="section-subtitle">
          {t('life.subtitle') || '一步一步，带你在中国畅通无阻'}
        </p>
        <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
          <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full">
            📖 {categories.length} {t('life.categories_count') || '个分类'}
          </span>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
            📝 {guideIndex.length} {t('life.guides_total') || '个指南'}
          </span>
        </div>
      </div>

      {/* 搜索框 */}
      <SearchBar />

      {/* 紧急信息条 */}
      <div className="mb-8 p-4 bg-red-50/60 rounded-2xl border border-red-200/50">
        <p className="text-red-700 font-wenkai font-bold text-center mb-3">
          🚨 {t('life.emergency.title') || '紧急电话'}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-red-600">
          <span><strong>{t('life.emergency.police') || '报警'}</strong> 110</span>
          <span><strong>{t('life.emergency.ambulance') || '急救'}</strong> 120</span>
          <span><strong>{t('life.emergency.fire') || '火警'}</strong> 119</span>
        </div>
      </div>

      {/* 新手推荐路径 */}
      <div className="mb-10 p-6 bg-gradient-to-br from-primary-50/80 to-blue-50/60 rounded-2xl border border-primary-200/30">
        <h2 className="text-xl font-wenkai font-bold text-gray-800 mb-4 text-center">
          🛬 {t('life.newcomer_path') || '新手着陆路线'}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          {lang === 'zh' ? '刚到中国？按这个顺序来，三天搞定一切' :
           lang === 'ru' ? 'Только приехали? Следуйте этому порядку — 3 дня на всё' :
           'Just arrived? Follow this order — 3 days to get everything done'}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: 'buy-sim-card', cat: 'first-landing', icon: '📲', label: { zh: '买手机卡', en: 'SIM Card', ru: 'SIM-карта' } },
            { id: 'setup-alipay', cat: 'first-landing', icon: '💙', label: { zh: '开支付宝', en: 'Alipay', ru: 'Alipay' } },
            { id: 'setup-wechat', cat: 'first-landing', icon: '💬', label: { zh: '用微信', en: 'WeChat', ru: 'WeChat' } },
            { id: 'open-bank-account', cat: 'first-landing', icon: '🏦', label: { zh: '开银行户', en: 'Bank', ru: 'Банк' } },
            { id: 'metro-guide', cat: 'transport', icon: '🚇', label: { zh: '坐地铁', en: 'Metro', ru: 'Метро' } },
            { id: 'food-delivery', cat: 'food', icon: '🛵', label: { zh: '点外卖', en: 'Delivery', ru: 'Доставка' } },
          ].map((item, idx) => (
            <a
              key={item.id}
              href={`/${locale}/life/${item.cat}/${item.id}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-sm
                border border-gray-200/50 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">{item.label[lang]}</span>
              {idx < 5 && <span className="text-gray-300 ml-1">→</span>}
            </a>
          ))}
        </div>
      </div>

      {/* App指南入口 */}
      <div className="mb-10">
        <a
          href={`/${locale}/life/apps`}
          className="group flex items-center justify-between p-5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">📲</span>
            <div>
              <h3 className="text-xl font-wenkai font-bold text-white">
                {lang === 'zh' ? '核心App使用指南' : lang === 'ru' ? 'Гайды по приложениям' : 'Essential App Guides'}
              </h3>
              <p className="text-emerald-100 text-sm mt-1">
                {lang === 'zh' ? '支付宝、微信、高德、滴滴等7个必备App的详细教程与下载' :
                 lang === 'ru' ? 'Alipay, WeChat, Карты, Didi и другие — подробные инструкции' :
                 'Detailed tutorials for Alipay, WeChat, Maps, Didi & more'}
              </p>
            </div>
          </div>
          <span className="text-white text-3xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* 实用工具入口 */}
      <div className="mb-10">
        <a
          href={`/${locale}/life/exchange-rate`}
          className="group flex items-center justify-between p-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">💱</span>
            <div>
              <h3 className="text-xl font-wenkai font-bold text-white">
                {lang === 'zh' ? '实时汇率 · 货币换算' :
                 lang === 'ru' ? 'Курс валют · Конвертер' :
                 'Live Rates · Currency Converter'}
              </h3>
              <p className="text-blue-100 text-sm mt-1">
                {lang === 'zh' ? '14种货币实时汇率，自动滚动行情，一键换算' :
                 lang === 'ru' ? '14 валют в реальном времени, бегущая строка, мгновенный конверт' :
                 '14 currencies live, scrolling ticker, instant conversion'}
              </p>
            </div>
          </div>
          <span className="text-white text-3xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* 口语手册入口 */}
      <div className="mb-10">
        <a
          href={`/${locale}/life/phrasebook`}
          className="group flex items-center justify-between p-5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">🈶</span>
            <div>
              <h3 className="text-xl font-wenkai font-bold text-white">
                {lang === 'zh' ? '中文生存口语手册' :
                 lang === 'ru' ? 'Разговорник для выживания' :
                 'Chinese Survival Phrasebook'}
              </h3>
              <p className="text-teal-100 text-sm mt-1">
                {lang === 'zh' ? '10大场景 · 120+实用短句 · 带拼音 · 点击复制' :
                 lang === 'ru' ? '10 ситуаций · 120+ фраз · с пиньинем · копирование в тап' :
                 '10 scenarios · 120+ phrases · with pinyin · tap to copy'}
              </p>
            </div>
          </div>
          <span className="text-white text-3xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* 15大分类网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => {
          const catGuides = guideIndex.filter(g => g.category === cat.id);
          return (
            <a
              key={cat.id}
              href={`/${locale}/life/${cat.id}`}
              className="group p-5 bg-white/80 rounded-2xl border border-gray-200/50
                hover:border-primary-300 hover:shadow-lg hover:shadow-primary-600/5
                transition-all duration-300"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <h3 className="text-lg font-wenkai font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
                    {cat.name[lang]}
                  </h3>
                  <p className="text-xs text-gray-400">{catGuides.length} guides</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{cat.desc[lang]}</p>
            </a>
          );
        })}
      </div>

      {/* 🚀 快速开始 — 最核心的5步，直接附带操作指引 */}
      <div className="mb-10 p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200/40">
        <h2 className="text-xl font-wenkai font-bold text-gray-800 mb-2 text-center">
          🚀 {lang === 'zh' ? '快速开始 · 5分钟上手' :
              lang === 'ru' ? 'Быстрый старт · 5 минут' :
              'Quick Start · 5 Minutes'}
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          {lang === 'zh' ? '不需要看完整篇指南，跟着做就行' :
           lang === 'ru' ? 'Не нужно читать всё — просто следуйте шагам' :
           "Don't need to read everything — just follow along"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Step 1: 装支付宝 */}
          <div className="bg-white rounded-xl p-4 border border-amber-100/60 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <h3 className="font-bold text-gray-800 text-sm">
                {lang === 'zh' ? '装支付宝 → 扫码支付' :
                 lang === 'ru' ? 'Установите Alipay → оплата по QR' :
                 'Install Alipay → Scan to Pay'}
              </h3>
            </div>
            <div className="text-xs text-gray-600 space-y-1.5 mb-3">
              <p>🍎 iOS: App Store → 搜索"支付宝" → 获取</p>
              <p>📱 Android: 应用商店搜索"支付宝" / 访问 alipay.com</p>
              <p>{lang === 'zh' ? '注册 → 实名认证（护照）→ 绑银行卡 → 扫码支付' :
                  lang === 'ru' ? 'Регистрация → Верификация (паспорт) → Привязка карты → Оплата по QR' :
                  'Register → Verify (passport) → Bind card → Scan to pay'}</p>
            </div>
            <div className="flex gap-2">
              <a href={`/${locale}/life/apps/alipay`} className="text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md font-medium transition-colors">
                {lang === 'zh' ? '详细教程 →' : lang === 'ru' ? 'Подробнее →' : 'Full guide →'}
              </a>
              <a href="https://apps.apple.com/app/id333206289" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-md transition-colors">
                iOS
              </a>
              <a href="https://render.alipay.com/p/s/i/index.html" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-md transition-colors">
                Android
              </a>
            </div>
          </div>

          {/* Step 2: 装微信 */}
          <div className="bg-white rounded-xl p-4 border border-amber-100/60 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <h3 className="font-bold text-gray-800 text-sm">
                {lang === 'zh' ? '装微信 → 社交+支付' :
                 lang === 'ru' ? 'Установите WeChat → общение + оплата' :
                 'Install WeChat → Social + Pay'}
              </h3>
            </div>
            <div className="text-xs text-gray-600 space-y-1.5 mb-3">
              <p>🍎 iOS: App Store → 搜索"WeChat" → 获取</p>
              <p>📱 Android: 应用商店搜索"微信" / 访问 weixin.qq.com</p>
              <p>{lang === 'zh' ? '注册 → 实名认证 → 开通微信支付 → 聊天/朋友圈/扫码' :
                  lang === 'ru' ? 'Регистрация → Верификация → WeChat Pay → Чат/Моменты/QR' :
                  'Register → Verify → Enable WeChat Pay → Chat/Moments/Scan'}</p>
            </div>
            <div className="flex gap-2">
              <a href={`/${locale}/life/apps/wechat`} className="text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md font-medium transition-colors">
                {lang === 'zh' ? '详细教程 →' : lang === 'ru' ? 'Подробнее →' : 'Full guide →'}
              </a>
              <a href="https://apps.apple.com/app/id414478124" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-md transition-colors">
                iOS
              </a>
              <a href="https://weixin.qq.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-md transition-colors">
                Android
              </a>
            </div>
          </div>

          {/* Step 3: 装高德地图 */}
          <div className="bg-white rounded-xl p-4 border border-amber-100/60 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <h3 className="font-bold text-gray-800 text-sm">
                {lang === 'zh' ? '装高德地图 → 导航+打车' :
                 lang === 'ru' ? 'Установите Amap → навигация + такси' :
                 'Install Amap → Navigate + Ride'}
              </h3>
            </div>
            <div className="text-xs text-gray-600 space-y-1.5 mb-3">
              <p>🍎 iOS: App Store → 搜索"高德地图" → 获取</p>
              <p>📱 Android: 应用商店搜索"高德地图" / 访问 amap.com</p>
              <p>{lang === 'zh' ? '导航、公交查询、一键打车（聚合多平台）' :
                  lang === 'ru' ? 'Навигация, маршруты, вызов такси (агрегатор)' :
                  'Navigate, transit routes, ride-hailing (multi-platform)'}</p>
            </div>
            <div className="flex gap-2">
              <a href={`/${locale}/life/apps/gaode-map`} className="text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md font-medium transition-colors">
                {lang === 'zh' ? '详细教程 →' : lang === 'ru' ? 'Подробнее →' : 'Full guide →'}
              </a>
              <a href="https://apps.apple.com/app/id461703208" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-md transition-colors">
                iOS
              </a>
              <a href="https://www.amap.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-md transition-colors">
                Android
              </a>
            </div>
          </div>

          {/* Step 4: 点外卖 */}
          <div className="bg-white rounded-xl p-4 border border-amber-100/60 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <h3 className="font-bold text-gray-800 text-sm">
                {lang === 'zh' ? '装美团外卖 → 30分钟送餐' :
                 lang === 'ru' ? 'Установите Meituan → доставка за 30 мин' :
                 'Install Meituan → Food in 30 min'}
              </h3>
            </div>
            <div className="text-xs text-gray-600 space-y-1.5 mb-3">
              <p>🍎 iOS: App Store → 搜索"美团外卖" → 获取</p>
              <p>📱 Android: 应用商店搜索"美团外卖" / 访问 waimai.meituan.com</p>
              <p>{lang === 'zh' ? '选餐厅 → 加入购物车 → 填地址 → 支付宝/微信支付 → 等30-60分钟' :
                  lang === 'ru' ? 'Выбор → Корзина → Адрес → Alipay/WeChat → Ждать 30-60 мин' :
                  'Browse → Cart → Address → Alipay/WeChat → Wait 30-60 min'}</p>
            </div>
            <div className="flex gap-2">
              <a href={`/${locale}/life/apps/meituan-waimai`} className="text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md font-medium transition-colors">
                {lang === 'zh' ? '详细教程 →' : lang === 'ru' ? 'Подробнее →' : 'Full guide →'}
              </a>
              <a href="https://apps.apple.com/app/id946692460" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-md transition-colors">
                iOS
              </a>
              <a href="https://waimai.meituan.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-md transition-colors">
                Android
              </a>
            </div>
          </div>

          {/* Step 5: 租房找房 */}
          <div className="bg-white rounded-xl p-4 border border-amber-100/60 shadow-sm md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <h3 className="font-bold text-gray-800 text-sm">
                {lang === 'zh' ? '需要租房？用这些平台找房' :
                 lang === 'ru' ? 'Нужно жильё? Используйте эти платформы' :
                 'Need to rent? Use these platforms'}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 mb-3">
              <div className="space-y-1.5">
                <p>🏠 <strong>{lang === 'zh' ? '贝壳找房' : lang === 'ru' ? 'Beike' : 'Beike'}</strong> — {lang === 'zh' ? '房源多、信息真实' : lang === 'ru' ? 'Много вариантов, надёжно' : 'Many listings, reliable'}</p>
                <p className="text-gray-400">ke.com / 应用商店搜索"贝壳找房"</p>
                <p>🏠 <strong>{lang === 'zh' ? '链家' : lang === 'ru' ? 'Lianjia' : 'Lianjia'}</strong> — {lang === 'zh' ? '大品牌中介，服务规范' : lang === 'ru' ? 'Крупное агентство' : 'Major agency'}</p>
                <p className="text-gray-400">lianjia.com / 应用商店搜索"链家"</p>
              </div>
              <div className="space-y-1.5">
                <p>📱 <strong>{lang === 'zh' ? '闲鱼' : lang === 'ru' ? 'Xianyu' : 'Xianyu'}</strong> — {lang === 'zh' ? '个人直租，无中介费' : lang === 'ru' ? 'Прямая аренда, без комиссии' : 'Direct rental, no fee'}</p>
                <p className="text-gray-400">goofish.com / {lang === 'zh' ? '支付宝内搜索"闲鱼"' : lang === 'ru' ? 'Найдите в Alipay' : 'Find in Alipay'}</p>
                <p>📱 <strong>58{lang === 'zh' ? '同城' : '.com'}</strong> — {lang === 'zh' ? '信息量大，需仔细辨别' : lang === 'ru' ? 'Много вариантов, проверяйте' : 'Large volume, verify carefully'}</p>
                <p className="text-gray-400">58.com / {lang === 'zh' ? '应用商店搜索"58同城"' : lang === 'ru' ? 'Найдите в магазине приложений' : 'Search in app store'}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`/${locale}/life/housing/rent-apartment`} className="text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md font-medium transition-colors">
                {lang === 'zh' ? '租房完整指南 →' : lang === 'ru' ? 'Полный гид по аренде →' : 'Full rental guide →'}
              </a>
              <a href="https://www.ke.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md transition-colors">
                {lang === 'zh' ? '贝壳找房' : 'Beike'}
              </a>
              <a href="https://www.lianjia.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md transition-colors">
                {lang === 'zh' ? '链家' : 'Lianjia'}
              </a>
              <a href="https://www.goofish.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md transition-colors">
                {lang === 'zh' ? '闲鱼' : 'Xianyu'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}