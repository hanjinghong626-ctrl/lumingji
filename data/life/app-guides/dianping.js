// 鹿鸣集 · 大众点评使用指南
// 版本：2026-08-10

export default {
  id: 'dianping',
  version: '2026-08-10',
  title: {
    zh: '大众点评使用指南',
    en: 'Dianping Guide',
    ru: 'Руководство по Dianping'
  },
  desc: {
    zh: '中国最大的本地生活服务平台，找餐厅、看评价、订座位、买优惠团购券的必备工具。',
    en: 'China\'s largest local life service platform — essential for finding restaurants, reading reviews, booking tables, and getting group-buy deals.',
    ru: 'Крупнейшая платформа местных сервисов — рестораны, отзывы, бронирование, скидки.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id351091731',
    android_google: 'https://play.google.com/store/search?q=com.dianping.v1&c=apps',
    android_cn: 'https://www.dianping.com',
    note: {
      zh: '国内Android手机建议在应用商店搜索下载，或访问官网下载',
      en: 'For Android phones in China, search in your app store or download from the official website',
      ru: 'Для Android в Китае скачайте из магазина приложений или с официального сайта'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '下载安装',
        en: 'Download & Install',
        ru: 'Скачать и установить'
      },
      desc: {
        zh: '在应用商店搜索"大众点评"下载。iOS在App Store，Android在应用宝或官网下载。',
        en: 'Search "大众点评" in your app store. iOS: App Store. Android: app stores or official website.',
        ru: 'Найдите "大众点评" в магазине приложений.'
      },
    },
    {
      title: {
        zh: '注册登录',
        en: 'Register & Login',
        ru: 'Регистрация и вход'
      },
      desc: {
        zh: '支持手机号、微信、QQ登录。推荐使用微信一键登录最方便。',
        en: 'Supports phone number, WeChat, and QQ login. WeChat one-tap login is the easiest.',
        ru: 'Вход по номеру телефона, WeChat или QQ. Самый простой — через WeChat.'
      },
    },
    {
      title: {
        zh: '搜索附近美食',
        en: 'Search Nearby Food',
        ru: 'Поиск еды поблизости'
      },
      desc: {
        zh: '首页会自动推荐附近商家。也可以在搜索栏输入菜系或餐厅名，如"火锅""日料"。筛选条件包括距离、评分、人均价格等。',
        en: 'Home page recommends nearby restaurants. Search by cuisine type like "火锅" (hotpot) or "日料" (Japanese). Filter by distance, rating, and price.',
        ru: 'Главная рекомендует ближайшие заведения. Поиск по типу кухни. Фильтры: расстояние, рейтинг, цена.'
      },
      tip: {
        zh: '💡 看评分4.0以上的通常不会踩雷，看评论数多的更可靠',
        en: '💡 Ratings above 4.0 are usually safe; more reviews = more reliable',
        ru: '💡 Рейтинг выше 4.0 обычно безопасен; больше отзывов = надёжнее'
      },
    },
    {
      title: {
        zh: '购买团购优惠',
        en: 'Buy Group-Buy Deals',
        ru: 'Покупка групповых скидок'
      },
      desc: {
        zh: '在商家页面找到"团购"或"优惠"标签，可以看到打折套餐。购买后到店出示二维码核销。团购通常比直接消费便宜20%-50%。',
        en: 'Find "团购" (group buy) or "优惠" (deals) tags on merchant pages. Purchase and show QR code at the store. Deals are usually 20%-50% cheaper.',
        ru: 'Найдите раздел "团购" или "优惠" на странице заведения. Покупайте и показывайте QR-код. Скидки 20-50%.'
      },
      tip: {
        zh: '⚠️ 注意团购券有效期和使用条件，部分节假日不可用',
        en: '⚠️ Check validity period and conditions — some deals exclude holidays',
        ru: '⚠️ Проверяйте срок действия — некоторые купоны не работают в праздники'
      },
    },
  ],
  coreFeatures: [
    {
      icon: '🍽️',
      title: { zh: '餐厅推荐', en: 'Restaurant Recommendations', ru: 'Рекомендации ресторанов' },
      desc: { zh: '基于真实用户评价的餐厅评分和推荐', en: 'Restaurant ratings based on real user reviews', ru: 'Рейтинги на основе реальных отзывов' }
    },
    {
      icon: '🎫',
      title: { zh: '团购优惠', en: 'Group-Buy Deals', ru: 'Групповые скидки' },
      desc: { zh: '餐饮、美容、娱乐等团购折扣，最高省50%', en: 'Discounts on dining, beauty, entertainment — save up to 50%', ru: 'Скидки на еду, красоту, развлечения — до 50%' }
    },
    {
      icon: '📋',
      title: { zh: '排队取号', en: 'Queue Booking', ru: 'Бронирование очереди' },
      desc: { zh: '部分餐厅支持在线排队取号，免去现场等候', en: 'Some restaurants support online queuing — skip the wait', ru: 'Онлайн-очередь в некоторых ресторанах' }
    },
    {
      icon: '📸',
      title: { zh: '真实评价', en: 'Real Reviews', ru: 'Реальные отзывы' },
      desc: { zh: '海量用户真实评价和图片，帮你做出明智选择', en: 'Massive real user reviews and photos for informed decisions', ru: 'Массовые реальные отзывы и фото' }
    },
  ],
  tips: [
    {
      title: { zh: '看懂评分系统', en: 'Understanding the Rating System', ru: 'Система рейтингов' },
      content: {
        zh: '大众点评评分1-5分，4.0以上算好，4.5以上是优秀。口味、环境、服务三项分开评分。"必吃榜"是官方精选推荐。',
        en: 'Ratings are 1-5: above 4.0 is good, above 4.5 is excellent. Taste, environment, and service are scored separately. "必吃榜" (Must-Eat List) is the official pick.',
        ru: 'Рейтинг 1-5: выше 4.0 — хорошо, выше 4.5 — отлично. Вкус, обстановка, сервис оцениваются отдельно.'
      }
    },
  ],
  faq: [
    {
      q: { zh: '外国人在大众点评上能正常消费吗？', en: 'Can foreigners use Dianping normally?', ru: 'Могут ли иностранцы пользоваться Dianping?' },
      a: {
        zh: '可以。注册和浏览没有身份限制，购买团购券到店消费时使用支付宝或微信支付付款即可。',
        en: 'Yes. No identity restrictions for browsing. Pay for group-buy deals with Alipay or WeChat Pay at the store.',
        ru: 'Да. Ограничений нет. Оплата через Alipay или WeChat Pay.'
      }
    },
  ],
  relatedGuides: ['meituan-app', 'meituan-waimai', 'eleme']
};
