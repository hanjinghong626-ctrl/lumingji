// Guide: 火车票购买指南
export default {
  id: 'train-booking',
  category: 'travel',
  icon: '🚄',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 20,
  apps: [],
  prerequisites: [],
  tags: ['train', 'high-speed', 'railway'],
  title: {
    zh: '火车票购买指南',
    en: 'Train Ticket Guide',
    ru: 'Руководство по билетам на поезд'
  },
  summary: {
    zh: '12306购票、高铁种类、座位选择与乘车流程',
    en: '12306 booking, train types, seat selection and boarding process',
    ru: 'Бронирование 12306, типы поездов, выбор мест'
  },
  intro: {
    zh: '中国的高铁网络世界领先，是城际旅行的首选。学会买火车票，周末就可以去周边城市。',
    en: 'China\'s high-speed rail network is world-leading — the top choice for intercity travel.',
    ru: 'Высокоскоростные поезда Китая — лучший выбор для междугородних поездок.'
  },
  preparation: {
    zh: [
    ],
    en: [
    ],
    ru: [
    ]
  },
    steps: [
    {
      title: { zh: '🚄 列车类型', en: 'Step 1', ru: 'G (300-350 км/ч), D (200-250), обычные' },
      desc: {
        zh: '🚄 列车类型\n• G字头（高铁）：最快，300-350km/h\n• D字头（动车）：较快，200-250km/h\n• Z/T/K字头：普通列车，便宜但慢',
        en: '🚄 Types: G (high-speed 300-350km/h), D (fast 200-250km/h), Z/T/K (regular, slow)',
        ru: '🚄 G (300-350 км/ч), D (200-250), обычные'
      }
    },
    {
      title: { zh: '购票方式', en: 'Book: 12306 app (official), Ctrip, station counter', ru: '12306, Ctrip' },
      desc: {
        zh: '📱 购票方式\n• 12306 App（官方，推荐）\n• 携程/去哪儿\n• 车站窗口/自助机\n\n💺 座位等级\n• 商务座：最舒适，价格是二等座3倍\n• 一等座：宽敞，约1.6倍二等座价格\n• 二等座：标准，最常见\n• 硬卧/软卧：长途夜车',
        en: '📱 Book: 12306 app (official), Ctrip, station counter\n💺 Seats: Business (3x price), First (1.6x), Second (standard)',
        ru: '📱 12306, Ctrip\n💺 Бизнес, первый, второй класс'
      }
    },
    {
      title: { zh: '乘车流程', en: 'Step 3', ru: 'За 30 мин, досмотр, паспорт' },
      desc: {
        zh: '📋 乘车流程\n1. 提前30分钟到站\n2. 安检（类似机场）\n3. 刷身份证/护照进站\n4. 找到对应候车区和站台\n5. 列车到达后上车找座位',
        en: '📋 Boarding: arrive 30min early → security → ID check → waiting area → platform',
        ru: '📋 За 30 мин, досмотр, паспорт'
      }
    },
    {
      title: { zh: '留学生用护照可以在12306注册并购买火车票。', en: 'Foreigners can register on 12306 with passport', ru: 'Иностранцы могут регистрироваться в 12306' },
      desc: {
        zh: '💡 留学生用护照可以在12306注册并购买火车票。',
        en: '💡 Foreigners can register on 12306 with passport',
        ru: '💡 Иностранцы могут регистрироваться в 12306'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['ctrip-guide', 'hotel-booking']
};
