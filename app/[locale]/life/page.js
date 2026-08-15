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
    </div>
  );
}
