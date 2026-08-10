// 鹿鸣集 · 哈啰出行使用指南
// 版本：2026-08-10

export default {
  id: 'hellobike',
  version: '2026-08-10',
  title: {
    zh: '哈啰出行使用指南',
    en: 'Hello Bike Guide',
    ru: 'Руководство по Hello Bike'
  },
  desc: {
    zh: '中国最大的共享单车和出行平台之一。扫码骑车、打车、顺风车、租车，解决短途出行问题。',
    en: 'One of China\'s largest shared mobility platforms — bike sharing, ride-hailing, carpooling, and car rental for getting around.',
    ru: 'Одна из крупнейших платформ мобильности: каршеринг велосипедов, такси, карпулинг, аренда авто.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id1172409893',
    android_google: 'https://play.google.com/store/search?q=com.jingyao.easybike&c=apps',
    android_cn: 'https://www.hellobike.com',
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
        zh: '在应用商店搜索"哈啰"下载。也可以直接在支付宝中搜索"哈啰"小程序使用，无需额外下载App。',
        en: 'Search "哈啰" in your app store. Or use the "哈啰" mini-program directly in Alipay without installing a separate app.',
        ru: 'Найдите "哈啰" в магазине приложений. Или используйте мини-программу в Alipay.'
      },
      tip: {
        zh: '💡 通过支付宝小程序使用最方便，免下载',
        en: '💡 Using the Alipay mini-program is most convenient — no download needed',
        ru: '💡 Удобнее через мини-программу Alipay — не нужно скачивать'
      },
    },
    {
      title: {
        zh: '注册并开通骑行',
        en: 'Register & Activate Biking',
        ru: 'Регистрация и активация'
      },
      desc: {
        zh: '使用支付宝登录后，按提示完成实名认证（与支付宝共享）。缴纳押金或开通骑行卡（月卡/季卡更划算）后即可扫码骑车。',
        en: 'Login via Alipay and complete verification (shared with Alipay). Pay deposit or buy a riding pass (monthly/quarterly is cheaper) to start scanning and riding.',
        ru: 'Войдите через Alipay, пройдите верификацию. Внесите залог или купите абонемент (месяц/квартал выгоднее).'
      },
    },
    {
      title: {
        zh: '扫码骑行',
        en: 'Scan & Ride',
        ru: 'Сканирование и поездка'
      },
      desc: {
        zh: '找到路边蓝白色的哈啰单车，打开App扫描车座下方的二维码，锁自动打开。骑行结束后停入指定停车区域，手动拉下后轮锁即可。',
        en: 'Find a blue-and-white Hello Bike, scan the QR code under the seat, and the lock opens. After riding, park in a designated zone and manually lock the rear wheel.',
        ru: 'Найдите сине-белый велосипед, отсканируйте QR под сиденьем. После поездки припаркуйте в зоне и заблокируйте заднее колесо.'
      },
      tip: {
        zh: '⚠️ 必须停在App地图上标注的停车区域内，否则可能加收调度费',
        en: '⚠️ Must park in designated zones shown on the map — otherwise extra dispatch fees apply',
        ru: '⚠️ Парковка только в обозначенных зонах — иначе штраф за перемещение'
      },
    },
    {
      title: {
        zh: '计费说明',
        en: 'Pricing',
        ru: 'Тарифы'
      },
      desc: {
        zh: '共享单车一般起步价1.5元（含15-30分钟），超出后每15分钟加收1-1.5元。月卡约15元/月不限次，每次前30分钟免费。经常骑车建议买月卡。',
        en: 'Base fare is about ¥1.50 (includes 15-30 min), then ¥1-1.50 per additional 15 min. Monthly pass ~¥15 for unlimited rides, first 30 min free each time. Worth it if you ride often.',
        ru: 'Базовый тариф ~¥1.50 (15-30 мин), далее ¥1-1.50 за 15 мин. Месячный ~¥15 безлимитно, первые 30 мин бесплатно.'
      },
    },
  ],
  coreFeatures: [
    {
      icon: '🚲',
      title: { zh: '共享单车', en: 'Bike Sharing', ru: 'Шеринг велосипедов' },
      desc: { zh: '扫码即骑，解决最后1-3公里', en: 'Scan to ride — solve the last 1-3 km', ru: 'Сканируй и езжай — последние 1-3 км' }
    },
    {
      icon: '🚗',
      title: { zh: '打车顺风车', en: 'Ride-Hailing & Carpool', ru: 'Такси и карпулинг' },
      desc: { zh: '网约车和顺风车服务，比滴滴便宜', en: 'Ride-hailing and carpool services, cheaper than DiDi', ru: 'Такси и карпулинг — дешевле DiDi' }
    },
    {
      icon: '🛵',
      title: { zh: '共享电动车', en: 'E-Bike Sharing', ru: 'Шеринг электробайков' },
      desc: { zh: '部分城市提供共享电动车，速度更快', en: 'Shared e-bikes available in some cities — faster rides', ru: 'Электробайки в некоторых городах — быстрее' }
    },
    {
      icon: '🎫',
      title: { zh: '骑行月卡', en: 'Monthly Pass', ru: 'Месячный абонемент' },
      desc: { zh: '约¥15/月，每次骑行前30分钟免费', en: '~¥15/month, first 30 min free per ride', ru: '~¥15/месяц, первые 30 мин бесплатно' }
    },
  ],
  tips: [
    {
      title: { zh: '停车规则', en: 'Parking Rules', ru: 'Правила парковки' },
      content: {
        zh: '哈啰单车必须停在App地图上标注的"P"停车区域内。不在指定区域还车会被收取5-20元的调度费。骑行前注意查看目的地区域是否有停车位。',
        en: 'Must park in designated "P" zones shown on the map. Parking outside zones incurs ¥5-20 dispatch fees. Check for parking spots near your destination before riding.',
        ru: 'Парковка только в зонах "P" на карте. Вне зон — штраф ¥5-20. Проверяйте наличие парковки у цели.'
      }
    },
  ],
  faq: [
    {
      q: { zh: '外国人能骑哈啰单车吗？', en: 'Can foreigners use Hello Bike?', ru: 'Могут ли иностранцы пользоваться Hello Bike?' },
      a: {
        zh: '可以。需要有支付宝实名认证（护照即可）和足够的余额或绑定的银行卡。部分城市可能需要中国身份证才能注册顺风车。',
        en: 'Yes. You need verified Alipay (passport works) and sufficient balance or linked bank card. Some cities may require Chinese ID for carpooling.',
        ru: 'Да. Нужен верифицированный Alipay (паспорт) и баланс или привязанная карта.'
      }
    },
  ],
  relatedGuides: ['didi', 'gaode-map', 'meituan-bike']
};
