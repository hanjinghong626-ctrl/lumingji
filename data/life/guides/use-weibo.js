// Guide: 微博入门
export default {
  id: 'use-weibo',
  category: 'communication',
  icon: '📢',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["weibo", "social", "news"],
  title: { zh: '微博入门', en: 'Weibo Intro', ru: 'Weibo Intro' },
  summary: { zh: '微博使用入门：关注、发帖、热搜', en: 'Getting started with Weibo', ru: 'Getting started with Weibo' },
  intro: { zh: '微博使用入门：关注、发帖、热搜。', en: 'Getting started with Weibo.', ru: 'Getting started with Weibo.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '下载和注册微博', en: 'Download and register Weibo', ru: 'Скачать и зарегистрировать Weibo' },
      desc: {
        zh: '微博是中国版的Twitter/X，是获取新闻热点、明星动态和公共讨论的主要平台。在应用商店搜索"微博"下载。用中国手机号注册，设置用户名（@xxx格式）、头像和个人简介。',
        en: 'Weibo is China\'s version of Twitter/X — the main platform for news, celebrity updates, and public discussions. Search "微博" in app stores to download. Register with a Chinese phone number, set up a username (@xxx format), avatar, and bio.',
        ru: 'Weibo — китайский аналог Twitter/X, главная платформа для новостей, знаменитостей и публичных дискуссий. Найдите "微博" в магазинах приложений. Регистрация по китайскому номеру, настройка имени пользователя (@xxx), аватара и описания профиля.'
      }
    },
    {
      title: { zh: '浏览热搜和关注', en: 'Browse trending and follow', ru: 'Просмотр трендов и подписки' },
      desc: {
        zh: '微博最有价值的功能：①热搜榜：实时了解中国正在发生什么（搜索框直接进入）；②关注：关注你感兴趣的博主（美食、旅行、留学生活等）；③超话：类似Reddit的子版块，如"留学生超话""考研超话"。刷微博是学中文、了解中国文化的好方式。',
        en: 'Weibo\'s most valuable features: ① Trending list: Real-time understanding of what\'s happening in China (access via search bar); ② Following: Follow bloggers you\'re interested in (food, travel, student life, etc.); ③ Super Topics: Like Reddit subreddits, e.g., "International Students" or "Grad School Prep". Browsing Weibo is a great way to learn Chinese and understand Chinese culture.',
        ru: 'Ценнейшие функции Weibo: ① Список трендов: узнайте, что происходит в Китае в реальном времени (через строку поиска); ② Подписки: подписывайтесь на интересных блогеров (еда, путешествия, жизнь студентов); ③ Супертемы: как субреддиты, например "Иностранные студенты" или "Магистратура". Просмотр Weibo — отличный способ учить китайский.'
      }
,      tip: {
        zh: '微博上信息量大且真假混杂，遇到"震惊体"标题要保持理性判断，以官方媒体（如人民日报、新华社）发布为准。',
        en: 'Weibo has a lot of mixed-quality information. Stay rational with sensationalist headlines — trust official media like People\'s Daily and Xinhua.',
        ru: 'В Weibo много смешанной информации. Будьте рациональны к сенсационным заголовкам — доверяйте официальным СМИ, таким как People\'s Daily и Xinhua.'
      }
    },
    {
      title: { zh: '发帖和互动', en: 'Post and interact', ru: 'Публикация и взаимодействие' },
      desc: {
        zh: '点击底部"+"可以发布微博（文字+图片/视频，限2000字以内）。转发、评论、点赞是基本互动方式。可以@提及其他用户。想私密分享可以用"仅自己可见"或"好友圈"。',
        en: 'Tap "+" at the bottom to post (text + images/video, up to 2000 characters). Repost, comment, and like are the main interactions. Use @ to mention other users. For private sharing, use "Visible to self" or "Friends circle".',
        ru: 'Нажмите "+" внизу для публикации (текст + фото/видео, до 2000 символов). Репост, комментарий и лайк — основные способы взаимодействия. Используйте @ для упоминания. Для приватного контента — "Только себе" или "Круг друзей".'
      }
,      tip: {
        zh: '微博账号如果长期不发内容或不做实名认证，可能会被限制功能。建议完成实名认证以获得完整功能。',
        en: 'Weibo accounts that are inactive long-term or unverified may have limited features. Complete real-name verification for full functionality.',
        ru: 'Аккаунты Weibo без активности или верификации могут быть ограничены. Пройдите верификацию для полного функционала.'
      }
    }
  ],
  faq: [
    { q: { zh: '外国人能注册吗？', en: 'Can foreigners register?', ru: 'Могут иностранцы зарегистрироваться?' }, a: { zh: '大部分中国社交平台支持外国手机号注册，但部分功能可能受限。建议使用中国手机号注册以获得完整功能。', en: 'Most Chinese social platforms support foreign phone registration, but some features may be limited. Use a Chinese number for full access.', ru: 'Большинство поддерживают иностраные номера, но с ограничениями. Китайский номер — полный доступ.' } },
  ],
  nextGuides: ['wechat-full-guide', 'choose-phone-plan', 'recharge-phone']
};