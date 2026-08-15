// Guide: 微信深度使用
export default {
  id: 'wechat-full-guide',
  category: 'communication',
  icon: '💬',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 20,
  apps: ["wechat"],
  prerequisites: ["setup-wechat"],
  tags: ["wechat", "advanced", "social"],
  title: { zh: '微信深度使用', en: 'WeChat Deep Dive', ru: 'Продвинутое использование WeChat' },
  summary: { zh: '朋友圈、公众号、小程序、收藏等微信高级功能', en: 'Moments, official accounts, mini-programs, favorites — advanced WeChat features', ru: 'Моменты, аккаунты, мини-программы, избранное — продвинутый WeChat' },
  intro: { zh: '微信不仅是聊天工具，更是生活平台。朋友圈、公众号、小程序等功能让生活更便捷。', en: 'WeChat is more than chat — it\'s a lifestyle platform. Moments, official accounts, and mini-programs make life easier.', ru: 'WeChat — больше, чем мессенджер. Моменты, аккаунты, мини-программы.' },
  preparation: { zh: ['已完成微信基础设置'], en: ['Basic WeChat setup done'], ru: ['Базовая настройка WeChat завершена'] },
    steps: [
    {
      title: { zh: '📸 朋友圈', en: 'Step 1', ru: 'Шаг 1' },
      desc: {
        zh: '📸 朋友圈：\n• 类似Instagram/朋友圈\n• 分享照片、文字、链接\n• 可以点赞和评论\n• 注意：中国人很重视朋友圈形象',
        en: '📸 Moments: like Instagram, share photos/text/links, like and comment. Chinese people care about their Moments image.',
        ru: '📸 Моменты: как Instagram, фото/текст/ссылки. Китайцы заботятся о имидже.'
      }
    },
    {
      title: { zh: '小程序', en: 'Step 2', ru: 'Шаг 2' },
      desc: {
        zh: '📱 小程序：\n• 无需下载App即可使用各种服务\n• 搜索小程序或用朋友分享的链接\n• 常用：点餐、购物、打车、缴费\n• 下拉微信首页 → 最近使用的小程序',
        en: '📱 Mini-programs: use services without downloading apps. Search or open shared links. Common: ordering, shopping, ride-hailing, utilities. Pull down WeChat homepage for recent mini-programs.',
        ru: '📱 Мини-программы: сервисы без скачивания. Поиск или ссылки. Потяните вниз для последних.'
      }
    },
    {
      title: { zh: '小程序可以替代很多App，节省手机空间', en: 'Mini-programs replace many apps, saving phone space.', ru: 'Заменяют многие приложения.' },
      desc: {
        zh: '💡 小程序可以替代很多App，节省手机空间',
        en: '💡 Mini-programs replace many apps, saving phone space.',
        ru: '💡 Заменяют многие приложения.'
      }
    }
  ],
  faq: [
    { q: { zh: '朋友圈可以屏蔽某些人吗？', en: 'Can I hide Moments from certain people?', ru: 'Можно скрыть Моменты от кого-то?' }, a: { zh: '可以。发朋友圈时可以选择「谁可以看」：公开、私密、部分可见、不给谁看。也可以在设置中屏蔽某些人的朋友圈。', en: 'Yes. When posting, choose "Who can see": public, private, selected, or exclude specific people. You can also mute certain people\'s Moments in settings.', ru: 'Да. При публикации выберите видимость: все, только я, некоторые, кроме некоторых.' } },
  ],
  nextGuides: ['use-qq', 'use-xiaohongshu', 'use-douyin']
};