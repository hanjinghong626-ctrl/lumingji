// 鹿鸣集 · 去哪儿旅行使用指南
// 版本：2026-08-10

export default {
  id: 'qunar',
  version: '2026-08-10',
  title: {
    zh: '去哪儿旅行使用指南',
    en: 'Qunar Travel Guide',
    ru: 'Руководство по Qunar Travel'
  },
  desc: {
    zh: '中国领先的旅行搜索平台，可以比价搜索机票、酒店、火车票等。聚合各大OTA平台的价格，帮你找到最便宜的出行方案。',
    en: 'China\'s leading travel search platform — compare flights, hotels, and train tickets across multiple platforms to find the cheapest deals.',
    ru: 'Ведущая туристическая платформа — сравнение авиабилетов, отелей, ж/д билетов по лучшим ценам.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id387458217',
    android_google: 'https://play.google.com/store/search?q=com.Qunar&c=apps',
    android_cn: 'https://www.qunar.com',
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
        zh: '在应用商店搜索"去哪儿旅行"下载。',
        en: 'Search "去哪儿旅行" in your app store.',
        ru: 'Найдите "去哪儿旅行" в магазине приложений.'
      },
    },
    {
      title: {
        zh: '注册登录',
        en: 'Register & Login',
        ru: 'Регистрация'
      },
      desc: {
        zh: '支持手机号注册和微信登录。建议绑定手机号以便接收订单通知。',
        en: 'Phone number registration and WeChat login supported. Bind your phone for order notifications.',
        ru: 'Регистрация по номеру и вход через WeChat. Привяжите номер для уведомлений.'
      },
    },
    {
      title: {
        zh: '搜索机票',
        en: 'Search Flights',
        ru: 'Поиск авиабилетов'
      },
      desc: {
        zh: '首页选择"机票"，输入出发城市、目的城市和日期，点击搜索。结果按价格排序，可以看到不同代理商的报价。支持低价日历查看最便宜的日期。',
        en: 'Select "机票" (flights), enter departure, destination, and dates. Results sorted by price from different agents. Use the low-price calendar for the cheapest dates.',
        ru: 'Выберите "机票", введите города и даты. Результаты по цене от разных агентов. Календарь низких цен.'
      },
      tip: {
        zh: '💡 提前2-4周买国内机票通常最便宜。周二/周三出发价格更低',
        en: '💡 Domestic flights are cheapest 2-4 weeks ahead. Tuesday/Wednesday departures are cheaper',
        ru: '💡 Внутренние рейсы дешевле за 2-4 недели. Вылет в вт/ср дешевле'
      },
    },
    {
      title: {
        zh: '预订酒店',
        en: 'Book Hotels',
        ru: 'Бронирование отелей'
      },
      desc: {
        zh: '选择"酒店"，输入目的地和入住/退房日期。可按价格、评分、距离等筛选。去哪儿会聚合携程、美团、飞猪等多平台价格进行比较。',
        en: 'Select "酒店" (hotels), enter destination and check-in/out dates. Filter by price, rating, distance. Qunar aggregates prices from Ctrip, Meituan, Fliggy, etc.',
        ru: 'Выберите "酒店", введите город и даты. Фильтры: цена, рейтинг, расстояние. Агрегация цен из Ctrip, Meituan, Fliggy.'
      },
    },
  ],
  coreFeatures: [
    {
      icon: '✈️',
      title: { zh: '机票比价', en: 'Flight Price Compare', ru: 'Сравнение авиабилетов' },
      desc: { zh: '聚合多平台机票价格，一键找到最低价', en: 'Aggregate flight prices across platforms — find the lowest', ru: 'Агрегация цен — поиск минимальной' }
    },
    {
      icon: '🏨',
      title: { zh: '酒店搜索', en: 'Hotel Search', ru: 'Поиск отелей' },
      desc: { zh: '海量酒店信息，多平台比价', en: 'Massive hotel inventory with multi-platform price comparison', ru: 'Массовый выбор отелей с сравнением цен' }
    },
    {
      icon: '🚄',
      title: { zh: '火车票', en: 'Train Tickets', ru: 'Ж/д билеты' },
      desc: { zh: '快速查询和预订火车票', en: 'Quick train ticket search and booking', ru: 'Быстрый поиск и покупка ж/д билетов' }
    },
    {
      icon: '📅',
      title: { zh: '低价日历', en: 'Low-Price Calendar', ru: 'Календарь низких цен' },
      desc: { zh: '直观查看整月最低价，灵活安排行程', en: 'View the lowest prices across the month for flexible planning', ru: 'Просмотр минимальных цен за месяц' }
    },
  ],
  tips: [
    {
      title: { zh: '比价技巧', en: 'Price Comparison Tips', ru: 'Советы по сравнению цен' },
      content: {
        zh: '去哪儿是比价搜索引擎，同一航班/酒店可能有多个代理商报价。选择时注意看：①退改政策 ②是否含早餐 ③代理商评分。最低价的不一定最靠谱，评分4.5以上的代理商更可靠。',
        en: 'Qunar is a comparison engine — the same flight/hotel may have multiple sellers. Check: ① cancellation policy ② breakfast included ③ seller rating. The cheapest isn\'t always best — prefer sellers rated 4.5+.',
        ru: 'Qunar — поисковик. Проверяйте: ① политику отмены ② завтрак ③ рейтинг продавца. Дешёвый не всегда лучший — выбирайте рейтинг 4.5+.'
      }
    },
  ],
  faq: [
    {
      q: { zh: '外国护照能在线上买机票吗？', en: 'Can I buy flights with a foreign passport online?', ru: 'Можно ли купить билеты с иностранным паспортом?' },
      a: {
        zh: '大部分情况可以。选择旅客类型时选"护照"，输入护照信息即可。少数航线可能需到机场柜台办理，建议提前到机场预留时间。',
        en: 'Mostly yes. Select "Passport" as ID type and enter passport info. Some routes may require counter check-in — arrive early.',
        ru: 'В основном да. Выберите "Паспорт" и введите данные. Некоторые рейсы могут потребовать оформления на стойке.'
      }
    },
  ],
  relatedGuides: ['ctrip-app', '12306']
};
