// Guide: KTV唱歌攻略
export default {
  id: 'ktv-guide',
  category: 'entertainment',
  icon: '🎤',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ['ktv', 'karaoke', 'singing'],
  title: {
    zh: 'KTV唱歌攻略',
    en: 'KTV Karaoke Guide',
    ru: 'Руководство по KTV'
  },
  summary: {
    zh: 'KTV预订、消费方式、热门歌曲推荐与社交礼仪',
    en: 'KTV booking, pricing, popular song recommendations and etiquette',
    ru: 'Бронирование, цены, популярные песни и этикет'
  },
  intro: {
    zh: 'KTV（卡拉OK）是中国年轻人最爱的社交活动之一。和同学去KTV唱歌是融入中国社交的好方式。',
    en: 'KTV (karaoke) is one of Chinese youth\'s favorite social activities. Going with classmates is a great way to integrate.',
    ru: 'KTV — любимое развлечение китайской молодёжи.'
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
      title: { zh: '了解KTV文化', en: 'Understand KTV culture', ru: 'Культура KTV' },
      desc: {
        zh: 'KTV（卡拉OK电视）是中国最流行的社交娱乐方式之一。朋友们在一个包间里唱歌、喝酒、聊天，是聚会、庆祝生日、团建的首选。KTV按小时或按"场"收费（下午场便宜，晚上/周末贵）。人均消费约50-150元。',
        en: 'KTV (Karaoke TV) is one of China\'s most popular social activities. Friends gather in private rooms to sing, drink, and chat — the top choice for parties, birthday celebrations, and team building. KTV charges by hour or session (afternoon is cheaper, evening/weekend is pricier). Per-person cost ~¥50-150.',
        ru: 'KTV (караоке) — один из самых популярных видов отдыха в Китае. Друзья собираются в отдельных комнатах для пения, общения — лучший выбор для вечеринок, дней рождения. Оплата по часам или за сеанс (день дешевле, вечер/выходные дороже). На человека ~¥50-150.'
      }
    },
    {
      title: { zh: '预订和到场', en: 'Book and arrive', ru: 'Бронирование и посещение' },
      desc: {
        zh: '在大众点评搜索附近的KTV（常见品牌：好乐迪、唱吧麦颂、纯K等），在线预订或直接到店。到店后在前台选择包间大小（小包2-4人、中包6-8人、大包10+人）和时长。提供身份证登记（所有人员都需要）。',
        en: 'Search nearby KTV on Dianping (popular brands: Haole Di, Changba, Chun K, etc.), book online or walk in. At the front desk, choose room size (small 2-4 people, medium 6-8, large 10+) and duration. All guests need ID registration.',
        ru: 'Найдите KTV рядом в Dianping (бренды: Haole Di, Changba, Chun K и др.), бронируйте онлайн или приходите. На ресепшене выберите размер комнаты (малая 2-4, средняя 6-8, большая 10+) и время. Всем нужна регистрация по ID.'
      }
,      tip: {
        zh: '建议提前在美团上购买KTV团购券，通常比门店价便宜30-50%。学生凭学生证可能有额外折扣。',
        en: 'Buy KTV group-buy vouchers on Meituan in advance — usually 30-50% cheaper than walk-in prices. Students may get extra discounts with student ID.',
        ru: 'Покупайте ваучеры KTV на Meituan заранее — обычно на 30-50% дешевле. Студенты могут получить скидки по студенческому.'
      }
    },
    {
      title: { zh: '点歌和唱歌', en: 'Song selection and singing', ru: 'Выбор песен и пение' },
      desc: {
        zh: '进入包间后，用触摸屏点歌系统（或手机扫码点歌）搜索歌曲。支持中文、英文、日文、韩文等多种语言歌曲。可以按歌手名、歌名搜索。切歌、调节音量、加原唱/消原唱都在触摸屏上操作。大部分KTV提供免费茶水和简单的零食，酒水需要另外购买（价格较高，也可以自带）。',
        en: 'In the room, use the touchscreen song system (or scan QR code) to search songs. Supports Chinese, English, Japanese, Korean, and more. Search by artist or song name. Switch songs, adjust volume, toggle original vocals on the touchscreen. Most KTVs provide free tea and simple snacks; drinks cost extra (or you can bring your own).',
        ru: 'В комнате используйте сенсорную систему (или QR-код) для поиска песен. Поддержка китайского, английского, японского, корейского. Поиск по исполнителю или названию. Переключение, громкость, оригинальный вокал — на экране. Обычно бесплатный чай и снеки; напитки за доплату (или свои).'
      }
,      tip: {
        zh: '不会唱歌？没关系！KTV更多是社交活动，不唱也可以摇骰子、玩游戏。很多KTV提供骰子和扑克牌。如果觉得吵，可以坐在角落吃零食聊天。',
        en: 'Can\'t sing? No worries! KTV is more about socializing — you can also play dice and card games. Many KTVs provide dice and poker. If it\'s too loud, sit in a corner snacking and chatting.',
        ru: 'Не умеете петь? Не проблема! KTV — это общение, можно играть в кости и карты. Многие KTV предоставляют кости и карты. Если шумно — сидите в углу со снеками.'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['music-scene', 'nightlife']
};
