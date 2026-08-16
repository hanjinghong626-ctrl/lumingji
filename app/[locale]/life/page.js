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
            <HomeIcon id="scroll" size={14} color="currentColor" /> {categories.length} {t('life.categories_count') || '个分类'}
          </span>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
            <HomeIcon id="brush" size={14} color="currentColor" /> {guideIndex.length} {t('life.guides_total') || '个指南'}
          </span>
        </div>
      </div>

      {/* 搜索框 */}
      <SearchBar />

      {/* 紧急信息条 */}
      <div className="mb-8 p-4 bg-red-50/60 rounded-2xl border border-red-200/50">
        <p className="text-red-700 font-wenkai font-bold text-center mb-3">
          <HomeIcon id="bell" size={14} color="#dc2626" /> {t('life.emergency.title') || '紧急电话'}
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
          <HomeIcon id="crane" size={20} color="#4a8a6e" /> {t('life.newcomer_path') || '新手着陆路线'}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          {lang === 'zh' ? '刚到中国？按这个顺序来，三天搞定一切' :
           lang === 'ru' ? 'Только приехали? Следуйте этому порядку — 3 дня на всё' :
           'Just arrived? Follow this order — 3 days to get everything done'}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: 'buy-sim-card', cat: 'first-landing', iconId: 'phone', label: { zh: '买手机卡', en: 'SIM Card', ru: 'SIM-карта' } },
            { id: 'setup-alipay', cat: 'first-landing', iconId: 'wallet', label: { zh: '开支付宝', en: 'Alipay', ru: 'Alipay' } },
            { id: 'setup-wechat', cat: 'first-landing', iconId: 'chat', label: { zh: '用微信', en: 'WeChat', ru: 'WeChat' } },
            { id: 'open-bank-account', cat: 'first-landing', iconId: 'bank', label: { zh: '开银行户', en: 'Bank', ru: 'Банк' } },
            { id: 'metro-guide', cat: 'transport', iconId: 'metro', label: { zh: '坐地铁', en: 'Metro', ru: 'Метро' } },
            { id: 'food-delivery', cat: 'food', iconId: 'delivery', label: { zh: '点外卖', en: 'Delivery', ru: 'Доставка' } },
          ].map((item, idx) => (
            <a
              key={item.id}
              href={`/${locale}/life/${item.cat}/${item.id}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-sm
                border border-gray-200/50 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <HomeIcon id={item.iconId} size={24} color="#4a8a6e" />
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
            <HomeIcon id="phone" size={36} color="white" />
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
            <HomeIcon id="exchange" size={36} color="white" />
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
            <HomeIcon id="wen" size={36} color="white" />
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
                <HomeIcon id={cat.id} size={28} color="#4a8a6e" style={{ flexShrink: 0 }} />
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

      {/* <HomeIcon id="launch" size={20} color="#a08040" /> 快速开始 — 最核心的5步，直接附带操作指引 */}
      <div className="mb-10 p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200/40">
        <h2 className="text-xl font-wenkai font-bold text-gray-800 mb-2 text-center">
          <HomeIcon id="launch" size={20} color="#a08040" /> {lang === 'zh' ? '快速开始 · 5分钟上手' :
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
              <p><HomeIcon id="apple" size={12} color="#c2574a" style={{display:"inline",verticalAlign:"middle"}} /> iOS: App Store → 搜索"支付宝" → 获取</p>
              <p><HomeIcon id="phone" size={12} color="#5a6a9e" style={{display:"inline",verticalAlign:"middle"}} /> Android: 应用商店搜索"支付宝" / 访问 alipay.com</p>
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
              <p><HomeIcon id="apple" size={12} color="#c2574a" style={{display:"inline",verticalAlign:"middle"}} /> iOS: App Store → 搜索"WeChat" → 获取</p>
              <p><HomeIcon id="phone" size={12} color="#5a6a9e" style={{display:"inline",verticalAlign:"middle"}} /> Android: 应用商店搜索"微信" / 访问 weixin.qq.com</p>
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
              <p><HomeIcon id="apple" size={12} color="#c2574a" style={{display:"inline",verticalAlign:"middle"}} /> iOS: App Store → 搜索"高德地图" → 获取</p>
              <p><HomeIcon id="phone" size={12} color="#5a6a9e" style={{display:"inline",verticalAlign:"middle"}} /> Android: 应用商店搜索"高德地图" / 访问 amap.com</p>
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
              <p><HomeIcon id="apple" size={12} color="#c2574a" style={{display:"inline",verticalAlign:"middle"}} /> iOS: App Store → 搜索"美团外卖" → 获取</p>
              <p><HomeIcon id="phone" size={12} color="#5a6a9e" style={{display:"inline",verticalAlign:"middle"}} /> Android: 应用商店搜索"美团外卖" / 访问 waimai.meituan.com</p>
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
                <p><HomeIcon id="house" size={12} color="#7b6ba5" style={{display:"inline",verticalAlign:"middle"}} /> <strong>{lang === 'zh' ? '贝壳找房' : lang === 'ru' ? 'Beike' : 'Beike'}</strong> — {lang === 'zh' ? '房源多、信息真实' : lang === 'ru' ? 'Много вариантов, надёжно' : 'Many listings, reliable'}</p>
                <p className="text-gray-400">ke.com / 应用商店搜索"贝壳找房"</p>
                <p><HomeIcon id="house" size={12} color="#7b6ba5" style={{display:"inline",verticalAlign:"middle"}} /> <strong>{lang === 'zh' ? '链家' : lang === 'ru' ? 'Lianjia' : 'Lianjia'}</strong> — {lang === 'zh' ? '大品牌中介，服务规范' : lang === 'ru' ? 'Крупное агентство' : 'Major agency'}</p>
                <p className="text-gray-400">lianjia.com / 应用商店搜索"链家"</p>
              </div>
              <div className="space-y-1.5">
                <p><HomeIcon id="phone" size={12} color="#5a6a9e" style={{display:"inline",verticalAlign:"middle"}} /> <strong>{lang === 'zh' ? '闲鱼' : lang === 'ru' ? 'Xianyu' : 'Xianyu'}</strong> — {lang === 'zh' ? '个人直租，无中介费' : lang === 'ru' ? 'Прямая аренда, без комиссии' : 'Direct rental, no fee'}</p>
                <p className="text-gray-400">goofish.com / {lang === 'zh' ? '支付宝内搜索"闲鱼"' : lang === 'ru' ? 'Найдите в Alipay' : 'Find in Alipay'}</p>
                <p><HomeIcon id="phone" size={12} color="#5a6a9e" style={{display:"inline",verticalAlign:"middle"}} /> <strong>58{lang === 'zh' ? '同城' : '.com'}</strong> — {lang === 'zh' ? '信息量大，需仔细辨别' : lang === 'ru' ? 'Много вариантов, проверяйте' : 'Large volume, verify carefully'}</p>
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


/* ── 青绿山水主题 SVG 图标组件 ── */
function HomeIcon({ id, size = 16, color = 'currentColor', style = {} }) {
  const p = { fill: 'none', stroke: color, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', style };
  switch (id) {
    case 'scroll':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M5 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"/><path d="M9 9h4M9 12h4M9 15h2" opacity="0.5"/></svg>;
    case 'brush':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M12 3v10"/><path d="M9 13c0 4 1.5 7 3 7s3-3 3-7"/><path d="M10 5h4" opacity="0.5"/></svg>;
    case 'bell':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M12 3v1"/><path d="M7 10a5 5 0 0110 0v4l2 2H5l2-2v-4z"/><path d="M10 18a2 2 0 004 0"/></svg>;
    case 'crane':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M4 12l5-3 4 1 5-4"/><path d="M9 9l-1 5 4 2"/><path d="M18 6l2 1" opacity="0.5"/></svg>;
    case 'phone':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 19h2" opacity="0.5"/></svg>;
    case 'wallet':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2" opacity="0.4"/></svg>;
    case 'chat':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M4 6h12a2 2 0 012 2v6a2 2 0 01-2 2H8l-4 3V8a2 2 0 012-2z"/><path d="M8 10h4M8 13h2" opacity="0.4"/></svg>;
    case 'bank':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M3 10l9-5 9 5"/><path d="M5 10v8h14v-8"/><path d="M9 13v3M12 13v3M15 13v3" opacity="0.5"/></svg>;
    case 'metro':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><rect x="5" y="4" width="14" height="12" rx="3"/><path d="M8 20l-1-4M16 20l1-4"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/></svg>;
    case 'delivery':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><rect x="3" y="8" width="10" height="9" rx="1"/><path d="M13 11h4l3 3v3h-7"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>;
    case 'exchange':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M7 10h10l-3-3"/><path d="M17 14H7l3 3"/></svg>;
    case 'wen':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M4 4h16M4 10h16M4 16h16"/><path d="M8 4v16M16 4v16" opacity="0.4"/></svg>;
    case 'seal':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><rect x="5" y="3" width="14" height="8" rx="1"/><path d="M8 11v5l4 4 4-4v-5"/><path d="M9 6h6" opacity="0.4"/></svg>;
    case 'lingzhi':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M6 10c0-4 3-7 6-7s6 3 6 7c0 2-3 3-6 3s-6-1-6-3z"/><path d="M12 13v6"/><path d="M8 21h8" opacity="0.5"/></svg>;
    case 'bamboo':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M8 3v18M13 3v18M18 3v18"/><path d="M6 8h14M6 14h14" opacity="0.4"/></svg>;
    case 'calligraphy':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M14 3l-2 10"/><path d="M12 13c-1 3-2 5-3 7"/><path d="M10 8h6" opacity="0.4"/></svg>;
    case 'moongate':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="7"/><path d="M5 20h14"/><path d="M9 19v-2a3 3 0 016 0v2" opacity="0.4"/></svg>;
    case 'basket':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M5 10h14l-2 10H7L5 10z"/><path d="M8 10c0-3 2-6 4-6s4 3 4 6" opacity="0.5"/></svg>;
    case 'fan':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M12 20L4 8a10 10 0 0116 0L12 20z"/><path d="M12 20v-6M9 11l3 3M15 11l-3 3" opacity="0.4"/></svg>;
    case 'mountain':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M3 20l6-12 4 6 3-4 5 10"/><path d="M14 10c-1-1 0-3 1-3s2 1 1 3" opacity="0.5"/></svg>;
    case 'inkbamboo':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M12 22V6"/><path d="M8 9c2-1 4-1 4-3M16 9c-2-1-4-1-4-3"/><path d="M7 14c2.5-1 5-1 5-4M17 14c-2.5-1-5-1-5-4"/><path d="M9 5c1.5-1 3-1 3-2M15 5c-1.5-1-3-1-3-2" opacity="0.5"/></svg>;
    case 'launch':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M12 2c-3 4-4 8-4 12h8c0-4-1-8-4-12z"/><path d="M8 14l-2 4h12l-2-4"/><path d="M11 10h2" opacity="0.5"/></svg>;
    case 'apple':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M12 5c-3 0-6 3-6 7s3 8 6 8 6-4 6-8-3-7-6-7z"/><path d="M12 5c0-2 1-3 3-3"/></svg>;
    case 'house':
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><path d="M3 12l9-8 9 8"/><path d="M5 12v8h14v-8"/><path d="M10 20v-5h4v5" opacity="0.5"/></svg>;
    default:
      return <svg width={size} height={size} viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="8"/></svg>;
  }
}
