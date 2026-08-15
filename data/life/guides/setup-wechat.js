// Guide: 注册并使用微信
export default {
  id: 'setup-wechat',
  category: 'first-landing',
  icon: '💬',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 30,
  apps: ['wechat', 'wechat-pay'],
  prerequisites: ['buy-sim-card'],
  tags: ['wechat', 'social', 'chat', 'payment', 'essential'],
  title: {
    zh: '注册并使用微信',
    en: 'Set Up WeChat',
    ru: 'Настроить WeChat'
  },
  summary: {
    zh: '微信注册、添加好友、发朋友圈、开启微信支付——在中国没有微信寸步难行',
    en: 'Register, add friends, Moments, enable WeChat Pay — life in China is impossible without WeChat',
    ru: 'Регистрация, друзья, Moments, WeChat Pay — без WeChat в Китае никуда'
  },
  intro: {
    zh: '微信是中国人的"数字身份证"。聊天、支付、扫码点餐、骑共享单车、预约医院、叫外卖……几乎所有日常生活都离不开它。对留学生来说，微信是到达中国后最需要优先安装的App。本指南手把手带你完成注册和基础设置。',
    en: 'WeChat is China\'s "digital ID." Chat, pay, scan-to-order, bike-sharing, hospital booking, food delivery — nearly every daily activity depends on it. For international students, WeChat is the #1 priority app to install upon arrival. This guide walks you through registration and basic setup.',
    ru: 'WeChat — «цифровой паспорт» Китая. Чат, оплата, заказ еды, велосипеды, запись к врачу — почти всё зависит от него. Для иностранных студентов WeChat — приложение №1 по прибытии. Это руководство проведёт вас через регистрацию и настройку.'
  },
  preparation: {
    zh: ['一部智能手机（iOS/Android均可）', '已激活的中国手机号（参考「购买手机卡」指南）', '网络环境（WiFi或流量均可）', '护照（实名认证可能需要）'],
    en: ['A smartphone (iOS or Android)', 'Activated Chinese phone number (see "Buy a SIM Card" guide)', 'Internet connection (WiFi or mobile data)', 'Passport (may be needed for real-name verification)'],
    ru: ['Смартфон (iOS или Android)', 'Активированный китайский номер (см. «Купить SIM-карту»)', 'Интернет (WiFi или мобильные данные)', 'Паспорт (может понадобиться для верификации)']
  },
  steps: [
    {
      title: { zh: '下载微信', en: 'Download WeChat', ru: 'Скачайте WeChat' },
      desc: {
        zh: '在App Store搜索「微信」或「WeChat」（图标为绿色气泡带白色对话），下载安装。微信有两个版本：国际版WeChat和国内版微信。建议使用国内版微信，功能更完整。',
        en: 'Search WeChat in App Store (green speech bubble icon). There are two versions: international WeChat and domestic version. Use the domestic version for full features.',
        ru: 'Найдите WeChat в App Store (зелёная иконка с речевым пузырём). Есть две версии: международная и внутренняя китайская. Используйте внутреннюю для полного функционала.'
      }
,      tip: {
        zh: '如果在海外App Store搜不到微信，注册完中国Apple ID后搜索「微信」即可。',
        en: 'If you cannot find it in overseas App Store, search after setting up a Chinese Apple ID.',
        ru: 'Если не можете найти в зарубежном App Store, поищите после регистрации китайского Apple ID.'
      }
    },
    {
      title: { zh: '注册与登录', en: 'Register and log in', ru: 'Регистрация и вход' },
      desc: {
        zh: '打开微信，点击「注册」。选择「用手机号注册」，输入你的中国手机号（+86），获取短信验证码。输入验证码后设置微信密码（至少8位，含字母和数字）。然后设置微信昵称和头像。',
        en: 'Open WeChat and tap Register. Choose register with phone number, enter Chinese phone (+86), get SMS verification code. After entering code, set password (at least 8 chars, letters + numbers). Then set nickname and profile photo.',
        ru: 'Откройте WeChat, нажмите «Регистрация». Выберите «По номеру телефона», введите китайский номер (+86), получите SMS-код. После ввода кода установите пароль (минимум 8 символов, буквы + цифры). Затем установите ник и фото.'
      }
,      tip: {
        zh: '如果验证码收不到，检查短信是否被拦截到垃圾短信箱。也可尝试语音验证码。',
        en: 'If you do not receive the code, check if it was filtered to spam. You can also try voice verification.',
        ru: 'Если код не приходит, проверьте спам. Можно попробовать голосовую верификацию.'
      }
    },
    {
      title: { zh: '添加好友', en: 'Add friends', ru: 'Добавьте друзей' },
      desc: {
        zh: '微信需要添加好友才能聊天。添加方式：①面对面扫一扫（打开「扫一扫」扫对方二维码）；②搜索手机号添加；③通过群聊添加。建议先加几个中国同学或室友，方便日常沟通。',
        en: 'WeChat requires adding friends to chat. Methods: ① Scan face-to-face (use Scan to scan their QR code); ② Search by phone number; ③ Add from group chats. Start by adding classmates or roommates.',
        ru: 'WeChat требует добавления друзей для чата. Способы: ① Сканирование QR-кода面对面; ② Поиск по номеру телефона; ③ Через групповой чат. Начните с сокурсников или соседей.'
      }
    },
    {
      title: { zh: '了解核心功能', en: 'Explore core features', ru: 'Основные функции' },
      desc: {
        zh: '微信不只是一个聊天工具，它几乎涵盖生活方方面面：聊天（文字、语音、视频通话）、朋友圈（类似Instagram的动态分享）、微信支付（扫码付款、转账、红包）、小程序（不用下载App就能用的各种服务）、公众号（获取信息和关注感兴趣的内容）。',
        en: 'WeChat is more than messaging — it covers daily life: chat (text, voice, video), Moments (social feed like Instagram), WeChat Pay (scan-to-pay, transfers, red envelopes), Mini Programs (services without separate apps), Official Accounts (news and content subscriptions).',
        ru: 'WeChat — это не просто мессенджер: чат (текст, голос, видео), Моменты (лента как Instagram), WeChat Pay (оплата, переводы, красные конверты), Мини-программы (сервисы без отдельных приложений), Официальные аккаунты (новости и контент).'
      }
,      tip: {
        zh: '微信是你在中国生活的「万能钥匙」，尽早熟悉会大大提升生活便利度。',
        en: 'WeChat is the master key to life in China. Getting familiar early greatly improves daily convenience.',
        ru: 'WeChat — главный инструмент жизни в Китае. Раннее освоение значительно облегчит повседневную жизнь.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '注册微信时提示"需要好友验证"怎么办？', en: 'What if registration requires "friend verification"?', ru: 'Что делать, если требуется «подтверждение друга»?' },
      a: { zh: '这是微信对新注册账号的安全机制。解决方法：1）找一个使用微信超过6个月的人帮你扫码确认；2）到学校后找中国同学帮忙最简单；3）如果实在找不到人，可以尝试换一种注册方式（如通过邮箱注册）。', en: 'This is WeChat\'s security mechanism for new accounts. Solutions: 1) Find someone who has used WeChat for 6+ months to scan and confirm; 2) After arriving at school, ask a Chinese classmate — easiest approach; 3) If no one is available, try alternative registration methods (e.g., email registration).', ru: 'Это механизм безопасности для новых аккаунтов. Решения: 1) Найти пользователя WeChat со стажем 6+ мес. для подтверждения; 2) После приезда попросить китайского однокурсника; 3) Попробуйте альтернативный способ регистрации (email).' }
    },
    {
      q: { zh: '微信和WeChat有什么区别？', en: 'What\'s the difference between 微信 and WeChat?', ru: 'В чём разница между 微信 и WeChat?' },
      a: { zh: '本质上是同一个App，但因数据合规要求分为两个版本：用中国手机号注册的是「微信」，用海外手机号注册的是「WeChat」。两者功能基本相同，但朋友圈内容、小程序生态等可能略有差异。建议用中国手机号注册「微信」版本，功能更完整。', en: 'Essentially the same app, but split into two versions for data compliance: "微信" for Chinese phone numbers, "WeChat" for overseas numbers. Functions are mostly the same, but Moments content and mini-program ecosystems may differ slightly. Register with a Chinese number for the full "微信" experience.', ru: 'По сути одно приложение, но разделено на две версии: «微信» для китайских номеров, «WeChat» для зарубежных. Функции в основном одинаковы, но контент Moments и мини-программы могут отличаться. Рекомендуется регистрация по китайскому номеру.' }
    },
    {
      q: { zh: '微信聊天记录怎么备份？', en: 'How to back up WeChat chat history?', ru: 'Как сделать резервную копию чатов WeChat?' },
      a: { zh: '微信聊天记录默认只存在手机上，不会自动同步到云端。备份方法：「我」→「设置」→「通用」→「存储空间」→「管理微信存储空间」。也可以使用电脑版微信进行聊天记录迁移备份。建议定期备份重要对话。', en: 'WeChat chat history is stored only on your phone by default, not synced to the cloud. Backup method: "Me" → "Settings" → "General" → "Storage" → "Manage Storage". You can also use WeChat for PC to migrate and backup chats. Regular backup of important conversations is recommended.', ru: 'История чатов хранится только на телефоне. Резервное копирование: «Me» → «Settings» → «General» → «Storage». Можно использовать WeChat для ПК для миграции. Рекомендуем регулярно делать резервные копии.' }
    }
  ],
  nextGuides: ['setup-alipay', 'open-bank-account', 'register-dormitory']
};
