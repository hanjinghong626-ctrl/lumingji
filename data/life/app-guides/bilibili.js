// 鹿鸣集 · 哔哩哔哩使用指南
// 版本：2026-08-10

export default {
  id: 'bilibili',
  version: '2026-08-10',
  title: {
    zh: '哔哩哔哩使用指南',
    en: 'Bilibili Guide',
    ru: 'Руководство по Bilibili'
  },
  desc: {
    zh: '中国最大的视频分享平台，以弹幕文化闻名。内容涵盖学习教程、科技、游戏、动画、生活等方方面面，是学中文和了解中国文化的好工具。',
    en: 'China\'s largest video sharing platform, famous for its danmaku (bullet comments). Content spans education, tech, gaming, anime, and lifestyle — great for learning Chinese.',
    ru: 'Крупнейшая видео-платформа Китая, известная культурой даньмаку. Контент: образование, технологии, аниме, жизнь — отлично для изучения китайского.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id736536022',
    android_google: 'https://play.google.com/store/search?q=tv.danmaku.bilianime&c=apps',
    android_cn: 'https://www.bilibili.com',
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
        zh: 'iOS在App Store搜索"哔哩哔哩"下载。Android在官网 bilibili.com 下载APK或应用商店搜索。',
        en: 'iOS: search "哔哩哔哩" in App Store. Android: download APK from bilibili.com or app stores.',
        ru: 'iOS: найдите "哔哩哔哩" в App Store. Android: скачайте APK с bilibili.com.'
      },
    },
    {
      title: {
        zh: '注册与浏览',
        en: 'Register & Browse',
        ru: 'Регистрация и просмотр'
      },
      desc: {
        zh: '可以游客模式直接浏览视频，无需登录。注册后（手机号/微信）可收藏、评论和发弹幕。',
        en: 'You can browse videos as a guest without logging in. Register (phone/WeChat) to bookmark, comment, and send bullet comments.',
        ru: 'Можно смотреть без регистрации. Для закладок, комментариев и даньмаку — зарегистрируйтесь.'
      },
    },
    {
      title: {
        zh: '搜索与分区',
        en: 'Search & Categories',
        ru: 'Поиск и категории'
      },
      desc: {
        zh: '顶部分区包括动画、音乐、舞蹈、游戏、知识、科技、生活等。搜索功能强大，可以找到大量免费学习资源，如中文教学、中国历史、科普视频等。',
        en: 'Top categories include animation, music, dance, gaming, knowledge, tech, and lifestyle. Powerful search reveals free learning resources — Chinese lessons, history, science.',
        ru: 'Категории: аниме, музыка, танцы, игры, знания, технологии, жизнь. Мощный поиск бесплатных учебных ресурсов.'
      },
      tip: {
        zh: '💡 搜索"对外汉语"或"Chinese for beginners"可以找到很多中文学习视频',
        en: '💡 Search "对外汉语" or "Chinese for beginners" for Chinese learning videos',
        ru: '💡 Ищите "对外汉语" для видео по изучению китайского'
      },
    },
    {
      title: {
        zh: '弹幕文化',
        en: 'Danmaku Culture',
        ru: 'Культура даньмаку'
      },
      desc: {
        zh: '弹幕是飘过视频画面的实时评论，是B站最有特色的功能。可以在设置中开关弹幕，调整透明度和速度。初次使用建议先关闭弹幕适应一下。',
        en: 'Danmaku are real-time comments scrolling across the video — Bilibili\'s signature feature. Toggle in settings; adjust opacity and speed. Beginners may want to turn them off first.',
        ru: 'Даньмаку — комментарии, бегущие по видео, фирменная фишка Bilibili. Можно включать/выключать в настройках.'
      },
    },
  ],
  coreFeatures: [
    {
      icon: '🎓',
      title: { zh: '学习资源', en: 'Learning Resources', ru: 'Учебные ресурсы' },
      desc: { zh: '海量免费教程：中文学习、考试辅导、技能培训', en: 'Massive free tutorials: Chinese learning, exam prep, skills', ru: 'Бесплатные курсы: китайский, экзамены, навыки' }
    },
    {
      icon: '💬',
      title: { zh: '弹幕互动', en: 'Danmaku Interaction', ru: 'Даньмаку' },
      desc: { zh: '实时弹幕评论，感受社区氛围', en: 'Real-time bullet comments for community engagement', ru: 'Комментарии в реальном времени' }
    },
    {
      icon: '🎬',
      title: { zh: '优质内容', en: 'Quality Content', ru: 'Качественный контент' },
      desc: { zh: '纪录片、科普、影视解说等高质量原创内容', en: 'High-quality original content: documentaries, science, film analysis', ru: 'Документалки, наука, анализ кино' }
    },
    {
      icon: '🎵',
      title: { zh: '音乐与二次元', en: 'Music & ACG', ru: 'Музыка и ACG' },
      desc: { zh: '丰富的动画、漫画、游戏相关内容', en: 'Rich anime, comics, and gaming related content', ru: 'Аниме, комиксы, игры' }
    },
  ],
  tips: [
    {
      title: { zh: '学中文的好工具', en: 'Great for Learning Chinese', ru: 'Отличный инструмент для китайского' },
      content: {
        zh: 'B站有很多面向外国人的中文教学视频，搜索"HSK""中文教程"等关键词。弹幕也能帮你提高中文阅读速度。',
        en: 'Many videos teach Chinese for foreigners. Search "HSK" or "中文教程". Danmaku helps improve reading speed.',
        ru: 'Много видео для изучения китайского. Ищите "HSK", "中文教程". Даньмаку помогает с чтением.'
      }
    },
  ],
  faq: [
    {
      q: { zh: 'B站看视频要付费吗？', en: 'Is Bilibili free to watch?', ru: 'Bilibili бесплатный?' },
      a: {
        zh: '绝大多数视频免费观看。部分付费课程和"大会员"内容需要付费，但基础使用完全免费。',
        en: 'The vast majority of videos are free. Some premium courses and "VIP" content require payment, but basic use is completely free.',
        ru: 'Большинство видео бесплатны. Некоторые курсы и VIP-контент платные, но базовое использование бесплатно.'
      }
    },
  ],
  relatedGuides: ['douyin', 'wechat']
};
