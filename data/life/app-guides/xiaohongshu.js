// 鹿鸣集 · 小红书使用指南
// 版本：2026-08-10

export default {
  id: 'xiaohongshu',
  version: '2026-08-10',
  title: {
    zh: '小红书使用指南',
    en: 'Xiaohongshu (RED) Guide',
    ru: 'Руководство по Xiaohongshu (RED)'
  },
  desc: {
    zh: '中国最大的生活方式分享社区，覆盖美食、旅行、穿搭、美妆、留学等各类话题。留学生可以通过小红书获取大量生活经验和本地攻略。',
    en: 'China\'s largest lifestyle sharing community covering food, travel, fashion, beauty, study abroad and more. A go-to platform for practical tips and local guides.',
    ru: 'Крупнейшее китайское сообщество о стиле жизни: еда, путешествия, мода, красота, учёба. Полезные советы и местные гиды.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id741292507',
    android_google: 'https://play.google.com/store/search?q=com.xingin.xhs&c=apps',
    android_cn: 'https://www.xiaohongshu.com',
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
        zh: '在App Store或安卓应用商店搜索"小红书"下载。iOS用户直接在App Store下载；Android用户可在应用宝、华为应用市场等下载。',
        en: 'Search "小红书" in your app store. iOS: App Store. Android: app stores like Yingyongbao, Huawei AppGallery, etc.',
        ru: 'Найдите "小红书" в магазине приложений. iOS: App Store. Android: магазины приложений.'
      },
      tip: {
        zh: '如果海外应用商店搜不到，可以切换到中国区App Store，或通过第三方应用市场下载APK',
        en: 'If unavailable in your region App Store, switch to China region or download APK from third-party stores',
        ru: 'Если недоступно в вашем регионе, переключитесь на китайский App Store или скачайте APK'
      },
    },
    {
      title: {
        zh: '注册账号',
        en: 'Register Account',
        ru: 'Регистрация'
      },
      desc: {
        zh: '打开小红书，选择手机号注册，输入中国手机号（+86）获取验证码。也支持微信、QQ登录。海外手机号部分地区可用但体验可能受限。',
        en: 'Open Xiaohongshu, choose phone number registration, enter Chinese number (+86) for verification code. WeChat and QQ login are also supported. Overseas numbers may work in some regions.',
        ru: 'Откройте приложение, выберите регистрацию по номеру телефона (+86). Также можно войти через WeChat или QQ.'
      },
      tip: {
        zh: '建议绑定中国手机号，海外号码可能无法接收验证码',
        en: 'It is recommended to use a Chinese phone number; overseas numbers may not receive verification codes',
        ru: 'Рекомендуется использовать китайский номер — иностранные могут не получать код'
      },
    },
    {
      title: {
        zh: '搜索与浏览',
        en: 'Search & Browse',
        ru: 'Поиск и просмотр'
      },
      desc: {
        zh: '首页"发现"页面有个性化推荐。顶部搜索栏可搜索任何关键词，如"北京美食攻略""留学签证"等。可以按"最新""最热"排序。',
        en: 'The "Discover" page shows personalized recommendations. Use the search bar for keywords like "Beijing food guide" or "student visa". Sort by newest or most popular.',
        ru: 'Страница "Discover" показывает рекомендации. Используйте поиск по ключевым словам. Сортировка по новизне или популярности.'
      },
      tip: {
        zh: '💡 搜索时加上城市名更精准，如"上海租房攻略""广州美食"',
        en: '💡 Add city names for more precise results, e.g., "Shanghai apartment guide"',
        ru: '💡 Добавьте название города для точности, например "Шанхай аренда"'
      },
    },
    {
      title: {
        zh: '收藏与标记',
        en: 'Save & Bookmark',
        ru: 'Сохранение закладок'
      },
      desc: {
        zh: '看到有用的帖子点击右下角星号收藏，可在"我"→"收藏"中查看。建议创建收藏夹分类管理，如"美食""交通""签证"等。',
        en: 'Tap the star icon to save posts. Find saved posts in "Me" → "Favorites". Create folders to organize, e.g., "Food", "Transport", "Visa".',
        ru: 'Нажмите на звёздочку для сохранения. Найдите в "Я" → "Избранное". Создавайте папки для организации.'
      },
    },
    {
      title: {
        zh: '发布笔记',
        en: 'Post Content',
        ru: 'Публикация контента'
      },
      desc: {
        zh: '点击底部"+"号，可以发布图文笔记或视频。编辑图片后添加文字描述、标签和位置信息。好的标题和标签能获得更多曝光。',
        en: 'Tap the "+" button to post photo/text or video notes. Edit photos, add descriptions, tags, and location. Good titles and tags get more visibility.',
        ru: 'Нажмите "+" для публикации фото/видео. Редактируйте фото, добавляйте описание, теги и геолокацию.'
      },
    },
  ],
  coreFeatures: [
    {
      icon: '🔍',
      title: { zh: '生活攻略搜索', en: 'Life Guide Search', ru: 'Поиск жизненных советов' },
      desc: { zh: '海量用户分享的真实生活经验，覆盖衣食住行各方面', en: 'Massive real-life experiences covering all aspects of daily life', ru: 'Массовый реальный опыт по всем аспектам жизни' }
    },
    {
      icon: '📍',
      title: { zh: '本地推荐', en: 'Local Recommendations', ru: 'Местные рекомендации' },
      desc: { zh: '基于位置的美食、景点、购物推荐，精准定位身边好店', en: 'Location-based food, sightseeing and shopping recommendations', ru: 'Рекомендации по геолокации: еда, достопримечательности, покупки' }
    },
    {
      icon: '🏷️',
      title: { zh: '话题标签', en: 'Topic Tags', ru: 'Тематические теги' },
      desc: { zh: '通过标签快速找到同类内容，如 #留学生活 #中国美食 #大学攻略', en: 'Quickly find similar content via tags like #StudentLife #ChineseFood', ru: 'Быстрый поиск контента по тегам #StudentLife #ChineseFood' }
    },
    {
      icon: '💬',
      title: { zh: '互动社区', en: 'Interactive Community', ru: 'Интерактивное сообщество' },
      desc: { zh: '可以在评论区提问交流，很多博主会热心回答留学生的问题', en: 'Ask questions in comments — many bloggers eagerly answer international student questions', ru: 'Задавайте вопросы в комментариях — блогеры охотно отвечают' }
    },
  ],
  tips: [
    {
      title: { zh: '善用搜索功能', en: 'Use Search Wisely', ru: 'Используйте поиск' },
      content: {
        zh: '小红书是最好的中文生活攻略搜索引擎。搜索时加上具体城市和需求，如"成都一周美食攻略"比"美食"有效得多。',
        en: 'Xiaohongshu is the best Chinese lifestyle search engine. Specific queries like "Chengdu 1-week food guide" work much better than generic "food".',
        ru: 'Xiaohongshu — лучший китайский поисковик по жизни. Конкретные запросы работают лучше общих.'
      }
    },
    {
      title: { zh: '注意信息时效性', en: 'Check Information Timeliness', ru: 'Проверяйте актуальность' },
      content: {
        zh: '笔记可能有时效性，价格和政策会变。注意看发布日期，优先参考近3个月内的内容。',
        en: 'Posts may be outdated. Check publication dates and prefer content from the last 3 months.',
        ru: 'Посты могут устареть. Проверяйте дату публикации, отдавайте предпочтение свежим (до 3 месяцев).'
      }
    },
  ],
  faq: [
    {
      q: { zh: '海外手机号能注册吗？', en: 'Can I register with an overseas phone number?', ru: 'Можно ли зарегистрироваться с иностранным номером?' },
      a: {
        zh: '部分海外手机号可以注册，但不一定稳定。建议办理中国手机号后注册，体验更完整。',
        en: 'Some overseas numbers work but may be unstable. Getting a Chinese number is recommended for the best experience.',
        ru: 'Некоторые иностранные номера работают, но нестабильно. Рекомендуется китайский номер.'
      }
    },
    {
      q: { zh: '小红书可以设成英文/俄文界面吗？', en: 'Can Xiaohongshu be set to English/Russian?', ru: 'Можно ли установить английский/русский интерфейс?' },
      a: {
        zh: '目前小红书只支持中文界面，但内容可以通过浏览器翻译。建议借此机会学一些常用中文。',
        en: 'Currently Chinese-only interface. Content can be translated via browser. Great opportunity to learn Chinese!',
        ru: 'Пока только китайский интерфейс. Контент можно переводить через браузер.'
      }
    },
  ],
  relatedGuides: ['setup-wechat', 'taobao']
};
