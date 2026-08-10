// Guide: 酒店预订指南
export default {
  id: 'hotel-booking',
  category: 'travel',
  icon: '🏨',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 20,
  apps: [],
  prerequisites: ['ctrip-guide'],
  tags: ['hotel', 'accommodation', 'booking'],
  title: {
    zh: '酒店预订指南',
    en: 'Hotel Booking Guide',
    ru: 'Руководство по бронированию отелей'
  },
  summary: {
    zh: '酒店平台对比、入住登记、外国人住宿规定',
    en: 'Platform comparison, check-in process, foreigner accommodation rules',
    ru: 'Сравнение платформ, регистрация, правила для иностранцев'
  },
  intro: {
    zh: '中国旅行时，选择合适的住宿很重要。了解预订平台和入住规则。',
    en: 'When traveling in China, choosing the right accommodation is important.',
    ru: 'При путешествиях важен правильный выбор жилья.'
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
      title: {
        zh: '酒店选择',
        en: 'Hotel Choices',
        ru: 'Выбор отелей'
      },
      desc: {
        zh: '🏨 预订平台\n• 携程：最大最全\n• 美团酒店：性价比高\n• 飞猪（阿里）：常有优惠\n• Booking.com：国际连锁酒店\n\n💰 价格参考\n• 经济型（如家/汉庭）：100-300元\n• 中档（全季/亚朵）：300-600元\n• 高档（希尔顿/万豪）：600-2000元\n\n⚠️ 外国人住宿注意\n• 不是所有酒店都能接待外国人\n• 搜索时筛选"接待外宾"\n• 入住需出示护照\n• 酒店需登记外国人住宿信息\n• 民宿（Airbnb类）可能无法登记\n\n💡 青年旅舍（YHA）是省钱好选择，也是认识旅行者的机会。',
        en: '🏨 Platforms: Ctrip (biggest), Meituan (value), Fliggy (deals), Booking.com (international)\n💰 Economy ¥100-300, Mid ¥300-600, High ¥600-2000\n⚠️ Not all hotels accept foreigners — filter "接待外宾"; passport required; B&Bs may not register foreigners\n💡 YHA hostels are budget-friendly and great for meeting travelers',
        ru: '🏨 Ctrip, Meituan, Booking.com\n💰 Эконом 100-300 ¥, средний 300-600 ¥\n⚠️ Не все отели принимают иностранцев — ищите "接待外宾"\n💡 Хостелы YHA — бюджетно'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['ctrip-guide', 'travel-planning']
};
