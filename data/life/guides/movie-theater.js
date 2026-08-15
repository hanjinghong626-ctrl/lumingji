// Guide: 电影院观影
export default {
  id: 'movie-theater',
  category: 'entertainment',
  icon: '🎬',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ['movie', 'cinema', 'entertainment'],
  title: {
    zh: '电影院观影',
    en: 'Movie Theater Guide',
    ru: 'Поход в кинотеатр'
  },
  summary: {
    zh: '购票方式、热门App、影城选择与观影小贴士',
    en: 'Ticket buying, popular apps, cinema choices and tips',
    ru: 'Покупка билетов, приложения, выбор кинотеатра'
  },
  intro: {
    zh: '在中国看电影是一种受欢迎的娱乐方式。票价便宜，影厅设施先进。',
    en: 'Going to the movies is a popular entertainment in China. Tickets are affordable and facilities are modern.',
    ru: 'Кино — популярное развлечение. Билеты дешёвые, залы современные.'
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
      title: { zh: '购票方式', en: 'Apps: Maoyan (most popular), Taopiaopiao (in Taobao)', ru: 'Приложения: Maoyan, Taopiaopiao' },
      desc: {
        zh: '🎬 购票方式\n• 猫眼电影App（最常用）\n• 淘票票（淘宝内）\n• 直接在影院前台购买\n• 票价：30-80元不等\n\n🏢 影城品牌\n• 万达影城：最多最大\n• 大地影院：覆盖面广\n• CGV/百老汇：高端体验',
        en: '🎬 Apps: Maoyan (most popular), Taopiaopiao (in Taobao)',
        ru: '🎬 Приложения: Maoyan, Taopiaopiao'
      }
    },
    {
      title: { zh: '小贴士', en: 'Price: ¥30-80', ru: '30-80 ¥' },
      desc: {
        zh: '💡 小贴士：\n• 国产电影通常不需要中文字幕\n• 外国电影有中文配音版和原声+字幕版\n• 搜索"原版"/"原声"可以看原文电影\n• 周末和节假日票价更高\n• 可以买爆米花和饮料（比国外便宜很多）',
        en: '💰 Price: ¥30-80\n🏢 Chains: Wanda, Dadi, CGV',
        ru: '💰 30-80 ¥'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['ktv-guide', 'nightlife']
};
