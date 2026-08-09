// 鹿鸣集 · App/工具/网站统一目录
// 每个 App 条目包含基本信息、用途、三语描述

const appDirectory = [
  // ===== 支付与金融 =====
  {
    id: 'alipay',
    name: { zh: '支付宝', en: 'Alipay', ru: 'Alipay' },
    icon: '💙',
    category: 'payment',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '中国移动支付两大巨头之一，扫码支付、生活缴费、理财一应俱全',
      en: 'One of China\'s two mobile payment giants — scan-to-pay, bills, and more',
      ru: 'Один из двух гигантов мобильных платежей в Китае'
    },
    url: 'https://www.alipay.com'
  },
  {
    id: 'wechat-pay',
    name: { zh: '微信支付', en: 'WeChat Pay', ru: 'WeChat Pay' },
    icon: '💚',
    category: 'payment',
    type: 'builtin',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '微信内置支付功能，几乎覆盖所有线下线上消费场景',
      en: 'WeChat\'s built-in payment, accepted almost everywhere',
      ru: 'Встроенная оплата в WeChat, принимается почти везде'
    }
  },
  {
    id: 'unionpay',
    name: { zh: '云闪付', en: 'UnionPay QuickPass', ru: 'UnionPay QuickPass' },
    icon: '🏧',
    category: 'payment',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '中国银联官方App，支持绑定境外银行卡，跨行转账免手续费',
      en: 'Official app of China UnionPay, supports foreign card binding',
      ru: 'Официальное приложение China UnionPay'
    }
  },
  {
    id: 'icbc-app',
    name: { zh: '中国工商银行', en: 'ICBC', ru: 'ICBC' },
    icon: '🏦',
    category: 'payment',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '最大国有银行的手机银行App，转账、理财、外汇',
      en: 'Mobile banking app of the largest state-owned bank',
      ru: 'Мобильный банк крупнейшего государственного банка'
    }
  },
  {
    id: 'boc-app',
    name: { zh: '中国银行', en: 'Bank of China', ru: 'Bank of China' },
    icon: '🏦',
    category: 'payment',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '外汇业务最强的银行，换汇首选',
      en: 'Best for foreign exchange services',
      ru: 'Лучший банк для обмена валюты'
    }
  },

  // ===== 通讯与社交 =====
  {
    id: 'wechat',
    name: { zh: '微信', en: 'WeChat', ru: 'WeChat' },
    icon: '💬',
    category: 'communication',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '中国版"全民App"，聊天、支付、朋友圈、小程序，生活离不开它',
      en: 'The super-app of China — chat, pay, social, mini-programs',
      ru: 'Супер-приложение Китая — чат, оплата, соцсеть, мини-программы'
    }
  },
  {
    id: 'qq',
    name: { zh: 'QQ', en: 'QQ', ru: 'QQ' },
    icon: '🐧',
    category: 'communication',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '年轻人和群聊常用的即时通讯工具',
      en: 'Popular instant messaging, especially among younger users',
      ru: 'Популярный мессенджер, особенно среди молодёжи'
    }
  },
  {
    id: 'xiaohongshu',
    name: { zh: '小红书', en: 'Xiaohongshu (RED)', ru: 'Xiaohongshu (RED)' },
    icon: '📕',
    category: 'communication',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '种草社区+生活方式平台，找攻略、看测评',
      en: 'Lifestyle community for reviews, recommendations, and trends',
      ru: 'Сообщество стиля жизни — обзоры, рекомендации, тренды'
    }
  },
  {
    id: 'douyin',
    name: { zh: '抖音', en: 'Douyin (TikTok CN)', ru: 'Douyin (TikTok CN)' },
    icon: '🎵',
    category: 'communication',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '中国版TikTok，短视频娱乐与信息来源',
      en: 'Chinese TikTok — short videos, entertainment, and info source',
      ru: 'Китайский TikTok — короткие видео и развлечения'
    }
  },
  {
    id: 'weibo',
    name: { zh: '微博', en: 'Weibo', ru: 'Weibo' },
    icon: '📢',
    category: 'communication',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '中国版Twitter，热点事件、明星动态、社会话题',
      en: 'China\'s Twitter — trending topics, celebrities, social issues',
      ru: 'Китайский Twitter — тренды, знаменитости, обсуждения'
    }
  },

  // ===== 交通出行 =====
  {
    id: 'gaode-map',
    name: { zh: '高德地图', en: 'Amap (Gaode)', ru: 'Amap (Gaode)' },
    icon: '🗺️',
    category: 'transport',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '最精准的中文导航，公交/驾车/步行路线规划',
      en: 'Most accurate Chinese navigation — transit, driving, walking',
      ru: 'Самая точная навигация — транспорт, авто, пеший ход'
    }
  },
  {
    id: 'baidu-map',
    name: { zh: '百度地图', en: 'Baidu Maps', ru: 'Baidu Maps' },
    icon: '🗺️',
    category: 'transport',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '另一款主流地图App，街景功能强大',
      en: 'Alternative maps app with strong street view features',
      ru: 'Альтернативные карты с мощным просмотром улиц'
    }
  },
  {
    id: 'didi',
    name: { zh: '滴滴出行', en: 'DiDi', ru: 'DiDi' },
    icon: '🚗',
    category: 'transport',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '中国最大的网约车平台，类似Uber',
      en: 'China\'s largest ride-hailing platform, like Uber',
      ru: 'Крупнейшая платформа заказа такси, аналог Uber'
    }
  },
  {
    id: '12306',
    name: { zh: '12306/铁路12306', en: '12306 (China Railway)', ru: '12306 (ЖД Китая)' },
    icon: '🚄',
    category: 'transport',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '官方火车票购票平台，高铁动车唯一官方渠道',
      en: 'Official train ticket booking platform',
      ru: 'Официальная платформа покупки ж/д билетов'
    }
  },
  {
    id: 'ctrip-app',
    name: { zh: '携程旅行', en: 'Ctrip/Trip.com', ru: 'Ctrip/Trip.com' },
    icon: '✈️',
    category: 'transport',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '一站式旅行平台：机票、酒店、景点门票、火车票',
      en: 'All-in-one travel platform: flights, hotels, tickets',
      ru: 'Универсальная платформа путешествий: авиа, отели, билеты'
    }
  },
  {
    id: 'metro-app',
    name: { zh: '各地地铁App', en: 'Local Metro Apps', ru: 'Приложения метро' },
    icon: '🚇',
    category: 'transport',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '各城市地铁扫码乘车App（也可用支付宝/微信乘车码）',
      en: 'City-specific metro apps (or use Alipay/WeChat ride codes)',
      ru: 'Городские приложения метро (или код в Alipay/WeChat)'
    }
  },
  {
    id: 'hellobike',
    name: { zh: '哈啰出行', en: 'Hello Bike', ru: 'Hello Bike' },
    icon: '🚲',
    category: 'transport',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '共享单车，扫码即骑，短途出行神器',
      en: 'Bike sharing — scan and ride, perfect for short trips',
      ru: 'Шеринг велосипедов — сканируй и езжай'
    }
  },
  {
    id: 'meituan-bike',
    name: { zh: '美团单车', en: 'Meituan Bike', ru: 'Meituan Bike' },
    icon: '🚲',
    category: 'transport',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '美团旗下共享单车服务',
      en: 'Meituan\'s bike sharing service',
      ru: 'Шеринг велосипедов от Meituan'
    }
  },

  // ===== 饮食 =====
  {
    id: 'meituan-waimai',
    name: { zh: '美团外卖', en: 'Meituan Waimai', ru: 'Meituan Waimai' },
    icon: '🍔',
    category: 'food',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '两大外卖平台之一，覆盖餐厅、超市、药店',
      en: 'One of the two major food delivery platforms',
      ru: 'Одна из двух крупных платформ доставки еды'
    }
  },
  {
    id: 'eleme',
    name: { zh: '饿了么', en: 'Ele.me', ru: 'Ele.me' },
    icon: '🛵',
    category: 'food',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '阿里旗下外卖平台，经常有大额优惠',
      en: 'Alibaba\'s food delivery platform, often with big discounts',
      ru: 'Платформа доставки еды от Alibaba, часто с большими скидками'
    }
  },
  {
    id: 'dianping',
    name: { zh: '大众点评', en: 'Dianping', ru: 'Dianping' },
    icon: '⭐',
    category: 'food',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '餐厅、美容、娱乐评价平台，类似Yelp',
      en: 'Reviews for restaurants, beauty, entertainment — like Yelp',
      ru: 'Отзывы о ресторанах, салонах, развлечениях — как Yelp'
    }
  },

  // ===== 购物 =====
  {
    id: 'taobao',
    name: { zh: '淘宝', en: 'Taobao', ru: 'Taobao' },
    icon: '🛍️',
    category: 'shopping',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '万能的淘宝，几乎什么都能买到',
      en: 'Taobao — you can buy almost anything here',
      ru: 'Taobao — тут можно купить практически всё'
    }
  },
  {
    id: 'jd',
    name: { zh: '京东', en: 'JD.com', ru: 'JD.com' },
    icon: '📦',
    category: 'shopping',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '正品保障、次日达，电子数码和日用品首选',
      en: 'Authentic products, next-day delivery, great for electronics',
      ru: 'Оригинальные товары, доставка на следующий день'
    }
  },
  {
    id: 'pinduoduo',
    name: { zh: '拼多多', en: 'Pinduoduo', ru: 'Pinduoduo' },
    icon: '🏷️',
    category: 'shopping',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '超低价拼团购物，日用品极便宜',
      en: 'Ultra-cheap group buying, great for daily necessities',
      ru: 'Сверхдешёвые групповые покупки'
    }
  },
  {
    id: 'xianyu',
    name: { zh: '闲鱼', en: 'Xianyu (Idle Fish)', ru: 'Xianyu' },
    icon: '🐟',
    category: 'shopping',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '二手交易平台，买卖闲置物品',
      en: 'Second-hand marketplace for buying and selling used items',
      ru: 'Площадка продажи б/у товаров'
    }
  },
  {
    id: 'sf-express',
    name: { zh: '顺丰速运', en: 'SF Express', ru: 'SF Express' },
    icon: '📮',
    category: 'shopping',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '最靠谱的快递公司，速度快但稍贵',
      en: 'Most reliable courier, fast but pricier',
      ru: 'Самая надёжная курьерская служба'
    }
  },
  {
    id: 'cainiao',
    name: { zh: '菜鸟裹裹', en: 'Cainiao', ru: 'Cainiao' },
    icon: '📫',
    category: 'shopping',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '快递查询和取件神器，整合多家快递',
      en: 'Package tracking and pickup — aggregates all couriers',
      ru: 'Отслеживание посылок всех курьерских служб'
    }
  },

  // ===== 住房 =====
  {
    id: 'ziroom',
    name: { zh: '自如', en: 'Ziroom', ru: 'Ziroom' },
    icon: '🏢',
    category: 'housing',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '长租公寓平台，拎包入住，品质有保障',
      en: 'Long-term rental apartments, move-in ready',
      ru: 'Платформа долгосрочной аренды квартир'
    }
  },
  {
    id: 'lianjia',
    name: { zh: '链家', en: 'Lianjia/Beike', ru: 'Lianjia/Beike' },
    icon: '🏠',
    category: 'housing',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '最大的房产中介平台，租房买房都方便',
      en: 'Largest real estate platform for renting and buying',
      ru: 'Крупнейшая платформа недвижимости'
    }
  },
  {
    id: 'meituan-app',
    name: { zh: '美团', en: 'Meituan', ru: 'Meituan' },
    icon: '🍊',
    category: 'housing',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: true,
    desc: {
      zh: '生活服务超级平台：外卖、团购、酒店、租房、维修……',
      en: 'Super lifestyle platform: delivery, group-buy, hotels, repairs...',
      ru: 'Супер-платформа жизни: доставка, купоны, отели, ремонт...'
    }
  },

  // ===== 签证法律 =====
  {
    id: 'exit-entry',
    name: { zh: '国家移民管理局', en: 'NIMA (Exit-Entry Admin)', ru: 'NIMA (Миграция)' },
    icon: '🛂',
    category: 'visa-legal',
    type: 'web',
    platform: ['Web'],
    essential: false,
    desc: {
      zh: '官方出入境管理网站，查询签证政策、办理进度',
      en: 'Official exit-entry administration website',
      ru: 'Официальный сайт миграционной службы'
    },
    url: 'https://www.nia.gov.cn'
  },

  // ===== 医疗 =====
  {
    id: 'guahao',
    name: { zh: '微医', en: 'WeDoctor', ru: 'WeDoctor' },
    icon: '👨‍⚕️',
    category: 'medical',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '在线挂号平台，预约三甲医院',
      en: 'Online hospital appointment booking platform',
      ru: 'Платформа онлайн-записи к врачам'
    }
  },
  {
    id: 'pingan-insurance',
    name: { zh: '平安保险', en: 'Ping An Insurance', ru: 'Ping An' },
    icon: '🛡️',
    category: 'medical',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '大型综合保险，含留学险、医疗险',
      en: 'Major insurance provider — study abroad, medical insurance',
      ru: 'Крупная страховая компания — страхование для студентов'
    }
  },

  // ===== 学术 =====
  {
    id: 'cnki',
    name: { zh: '中国知网(CNKI)', en: 'CNKI', ru: 'CNKI' },
    icon: '📖',
    category: 'academic',
    type: 'web',
    platform: ['Web'],
    essential: false,
    desc: {
      zh: '中国最大的学术文献数据库，论文查重必备',
      en: 'China\'s largest academic database, essential for thesis',
      ru: 'Крупнейшая академическая база данных Китая'
    },
    url: 'https://www.cnki.net'
  },
  {
    id: 'wanfang',
    name: { zh: '万方数据', en: 'Wanfang Data', ru: 'Wanfang Data' },
    icon: '📚',
    category: 'academic',
    type: 'web',
    platform: ['Web'],
    essential: false,
    desc: {
      zh: '另一大学术数据库，涵盖期刊、学位论文、会议论文',
      en: 'Another major academic database — journals, theses, conferences',
      ru: 'Ещё одна крупная академическая база данных'
    },
    url: 'https://www.wanfangdata.com.cn'
  },

  // ===== 语言 =====
  {
    id: 'pleco',
    name: { zh: 'Pleco', en: 'Pleco', ru: 'Pleco' },
    icon: '📱',
    category: 'language',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '最强大的中英词典App，支持手写/OCR输入',
      en: 'Most powerful Chinese-English dictionary app',
      ru: 'Мощнейший китайско-русский словарь'
    }
  },
  {
    id: 'hellochinese',
    name: { zh: 'HelloChinese', en: 'HelloChinese', ru: 'HelloChinese' },
    icon: '🀄',
    category: 'language',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '游戏化中文学习App，适合零基础',
      en: 'Gamified Chinese learning app for beginners',
      ru: 'Геймифицированное приложение для изучения китайского'
    }
  },

  // ===== 娱乐 =====
  {
    id: 'bilibili',
    name: { zh: '哔哩哔哩', en: 'Bilibili', ru: 'Bilibili' },
    icon: '📺',
    category: 'entertainment',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '中国最大的视频弹幕平台，学习娱乐两不误',
      en: 'China\'s largest video platform with bullet comments',
      ru: 'Крупнейшая видео-платформа с комментариями'
    }
  },
  {
    id: 'netease-music',
    name: { zh: '网易云音乐', en: 'NetEase Cloud Music', ru: 'NetEase Music' },
    icon: '🎧',
    category: 'entertainment',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '最受欢迎的中文音乐App，社区氛围好',
      en: 'Most popular Chinese music app with great community',
      ru: 'Самое популярное музыкальное приложение в Китае'
    }
  },
  {
    id: 'maoyan',
    name: { zh: '猫眼电影', en: 'Maoyan Movies', ru: 'Maoyan' },
    icon: '🎬',
    category: 'entertainment',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '在线选座购票，查看评分影评',
      en: 'Movie ticket booking with seat selection and reviews',
      ru: 'Бронирование билетов в кино с выбором места'
    }
  },
  {
    id: 'douban',
    name: { zh: '豆瓣', en: 'Douban', ru: 'Douban' },
    icon: '🌿',
    category: 'entertainment',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '文艺社区，电影/书/音乐评分，同城活动',
      en: 'Cultural community — movie/book/music reviews, local events',
      ru: 'Культурное сообщество — отзывы о фильмах, книгах, музыке'
    }
  },

  // ===== 生活服务 =====
  {
    id: '58tongcheng',
    name: { zh: '58同城', en: '58.com', ru: '58.com' },
    icon: '🔧',
    category: 'housing',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '本地生活服务平台：租房、招聘、维修、二手',
      en: 'Local services: rental, jobs, repairs, second-hand',
      ru: 'Местные услуги: аренда, работа, ремонт, б/у'
    }
  },
  {
    id: 'meituan-youxuan',
    name: { zh: '美团优选', en: 'Meituan Select', ru: 'Meituan Select' },
    icon: '🥬',
    category: 'shopping',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '社区团购，生鲜蔬果次日自提',
      en: 'Community group buying — fresh produce, next-day pickup',
      ru: 'Совместные покупки — свежие продукты, самовывоз'
    }
  },
  {
    id: 'didi-qicheng',
    name: { zh: '滴滴顺风车', en: 'DiDi Hitch', ru: 'DiDi Hitch' },
    icon: '🚙',
    category: 'transport',
    type: 'builtin',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '长途拼车服务，城际出行好选择',
      en: 'Long-distance carpooling service',
      ru: 'Сервис совместных поездок на дальние расстояния'
    }
  },
  {
    id: 'tongcheng-ly',
    name: { zh: '同程旅行', en: 'Tongcheng Travel', ru: 'Tongcheng Travel' },
    icon: '🧳',
    category: 'travel',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '性价比高的旅行预订平台',
      en: 'Budget-friendly travel booking platform',
      ru: 'Бюджетная платформа бронирования путешествий'
    }
  },
  {
    id: 'qunar',
    name: { zh: '去哪儿', en: 'Qunar', ru: 'Qunar' },
    icon: '🔍',
    category: 'travel',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '比价搜索，帮你找最便宜的机票酒店',
      en: 'Price comparison for flights and hotels',
      ru: 'Сравнение цен на авиабилеты и отели'
    }
  },
  {
    id: 'fliggy',
    name: { zh: '飞猪', en: 'Fliggy', ru: 'Fliggy' },
    icon: '🐷',
    category: 'travel',
    type: 'app',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '阿里旗下旅行平台，签证、机酒一站式',
      en: 'Alibaba\'s travel platform — visas, flights, hotels',
      ru: 'Туристическая платформа Alibaba'
    }
  },
  {
    id: 'youzan',
    name: { zh: '小红书(购物)', en: 'Xiaohongshu Shopping', ru: 'Покупки на RED' },
    icon: '📕',
    category: 'shopping',
    type: 'builtin',
    platform: ['iOS', 'Android'],
    essential: false,
    desc: {
      zh: '小红书内置电商，种草后直接下单',
      en: 'In-app e-commerce on Xiaohongshu',
      ru: 'Встроенный магазин в Xiaohongshu'
    }
  }
];

export default appDirectory;
