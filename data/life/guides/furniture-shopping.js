// Guide: 家具采购
export default {
  id: 'furniture-shopping',
  category: 'housing',
  icon: '🛋️',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 45,
  apps: ['taobao', 'jd'],
  prerequisites: ['rent-apartment'],
  tags: ['furniture', 'ikea', 'shopping'],
  title: {
    zh: '家具采购',
    en: 'Furniture Shopping',
    ru: 'Покупка мебели'
  },
  summary: {
    zh: '宜家等家具品牌、线上线下购买渠道、组装服务与搬家处理',
    en: 'IKEA and furniture brands, online/offline channels, assembly services and moving tips',
    ru: 'IKEA и мебельные бренды, каналы покупки, сборка и переезд'
  },
  intro: {
    zh: '布置一个舒适的居住环境能让留学生活更加愉快。中国有很多实惠的家具购买渠道，从宜家到淘宝应有尽有。',
    en: 'Furnishing a comfortable living space makes student life more enjoyable. China has many affordable furniture options, from IKEA to Taobao.',
    ru: 'Обустройство комфортного жилья делает студенческую жизнь приятнее. В Китае много доступных вариантов мебели.'
  },
  preparation: {
    zh: [
      '测量房间尺寸',
      '确定家具需求和预算',
      '下载宜家App或淘宝'
    ],
    en: [
      'Measure room dimensions',
      'Determine furniture needs and budget',
      'Download IKEA app or Taobao'
    ],
    ru: [
      'Измерьте комнату',
      'Определите потребности и бюджет',
      'Скачайте приложение IKEA или Taobao'
    ]
  },
    steps: [
    {
      title: { zh: '家具购买渠道对比', en: 'Furniture shopping channels', ru: 'Каналы покупки мебели' },
      desc: {
        zh: '家具购买渠道对比：',
        en: 'Furniture shopping channels:',
        ru: 'Каналы покупки мебели:'
      }
    },
    {
      title: { zh: '线下', en: 'Offline', ru: 'Офлайн' },
      desc: {
        zh: '🏪 线下\n• 宜家 IKEA：设计好看，价格适中，可体验实物\n  - 中国很多大城市有宜家门店\n  - App可查库存、下单配送\n• 红星美凯龙/居然之家：大型家具卖场\n• 本地家具市场：价格便宜，需要砍价',
        en: '🏪 Offline\n• IKEA: Good design, moderate price, try in person\n  - Many Chinese cities have IKEA stores\n  - App for inventory check and delivery orders\n• Red Star Macalline/Jurong Home: Large furniture malls\n• Local furniture markets: Cheap, need to bargain',
        ru: '🏪 Офлайн\n• IKEA: хороший дизайн, средние цены\n• Крупные мебельные торговые центры\n• Местные рынки: дешево, торгуйтесь'
      }
    },
    {
      title: { zh: '线上', en: 'Online', ru: 'Онлайн' },
      desc: {
        zh: '📱 线上\n• 淘宝/天猫：选择最多，注意看评价\n• 京东：物流快，大件送货上门\n• 宜家官网/App：线上下单，送货+组装\n• 闲鱼：二手家具，毕业季特别便宜',
        en: '📱 Online\n• Taobao/Tmall: Most choices, check reviews\n• JD: Fast delivery, large items to your door\n• IKEA website/app: Order online, delivery + assembly\n• Xianyu: Second-hand furniture, especially cheap during graduation season',
        ru: '📱 Онлайн\n• Taobao/Tmall: самый большой выбор\n• JD: быстрая доставка\n• IKEA: заказ онлайн с доставкой и сборкой\n• Xianyu: б/у мебель'
      }
    },
    {
      title: { zh: '毕业季（6-7月）很多学生低价处理家具，是淘宝贝的好时机。', en: 'Step 4', ru: 'Сезон выпуска (июнь-июль) — студенты продают мебель дёшево.' },
      desc: {
        zh: '💡 毕业季（6-7月）很多学生低价处理家具，是淘宝贝的好时机。',
        en: '💡 Graduation season (June-July) — many students sell furniture at low prices. Great time to find deals!',
        ru: '💡 Сезон выпуска (июнь-июль) — студенты продают мебель дёшево.'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['moving-guide', 'internet-setup']
};
