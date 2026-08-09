// 鹿鸣集 · 微信使用指南
// 版本：2026-08-09

export default {
  id: 'wechat',
  version: '2026-08-09',
  title: {
    zh: '微信使用指南',
    en: 'WeChat Guide',
    ru: 'Руководство по WeChat'
  },
  desc: {
    zh: '中国人的"生活操作系统"。聊天、支付、公众号、小程序——不会用微信，在中国寸步难行。',
    en: 'The "operating system" of Chinese life. Chat, payment, official accounts, mini-programs — without WeChat, daily life in China is nearly impossible.',
    ru: '"Операционная система" китайской жизни. Чат, оплата, аккаунты, мини-программы — без WeChat жить в Китае почти невозможно.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id414478124',
    android_google: 'https://play.google.com/store/apps/details?id=com.tencent.mm',
    android_cn: 'https://weixin.qq.com/',
    note: {
      zh: '在应用商店搜索"WeChat"或"微信"均可找到。中国安卓手机可在官网 weixin.qq.com 下载。',
      en: 'Search "WeChat" or "微信" in your app store. For Chinese Android phones, download from weixin.qq.com.',
      ru: 'Ищите "WeChat" или "微信" в магазине приложений. Для китайских Android — скачайте с weixin.qq.com.'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '下载并注册',
        en: 'Download and Register',
        ru: 'Скачайте и зарегистрируйтесь'
      },
      desc: {
        zh: '下载安装后打开微信，选择"注册" → "手机号注册"。输入中国手机号（+86），设置密码，输入短信验证码完成注册。也可以使用邮箱注册（但不推荐，部分功能受限）。',
        en: 'After installing, open WeChat and select "Register" → "Sign up with Mobile". Enter your Chinese phone number (+86), set a password, and input the SMS verification code. Email registration is possible but not recommended (limited features).',
        ru: 'После установки откройте WeChat → "Регистрация" → "По номеру телефона". Введите китайский номер (+86), задайте пароль, введите код из SMS. Регистрация по email возможна, но не рекомендуется (ограниченный функционал).'
      },
      tip: {
        zh: '⚠️ 新号注册后可能被要求"好友辅助验证"——需要一位已有微信账号的朋友帮你扫码确认。可以让中国同学帮忙。',
        en: '⚠️ New accounts may require "friend verification" — an existing WeChat user needs to scan a QR code to vouch for you. Ask a Chinese classmate to help.',
        ru: '⚠️ Новые аккаунты могут потребовать "подтверждение другом" — действующий пользователь WeChat должен отсканировать QR-код. Попросите китайского однокурсника помочь.'
      }
    },
    {
      title: {
        zh: '设置个人资料',
        en: 'Set Up Profile',
        ru: 'Настройка профиля'
      },
      desc: {
        zh: '点击"我" → 顶部头像区域，设置昵称、头像、微信号（唯一ID，设置后每年只能改一次）、个性签名、性别、地区。建议头像用真实照片，方便同学朋友认出你。',
        en: 'Tap "Me" → tap avatar area at top. Set nickname, avatar, WeChat ID (unique, changeable once per year), signature, gender, and region. Use a real photo as avatar so classmates can recognize you.',
        ru: 'Нажмите "Я" → область аватара. Укажите ник, аватар, ID WeChat (уникальный, меняется раз в год), подпись, пол, регион. Лучше поставить реальное фото, чтобы однокурсники вас узнали.'
      },
      tip: {
        zh: '微信号是唯一标识，建议设置成有意义的组合（如姓名拼音+数字），不要用乱码',
        en: 'WeChat ID is your unique identifier — set something meaningful (like name pinyin + numbers), not random characters',
        ru: 'ID WeChat — ваш уникальный идентификатор — выберите что-то осмысленное (например, имя латиницей + цифры), не случайный набор'
      }
    },
    {
      title: {
        zh: '添加好友',
        en: 'Add Friends',
        ru: 'Добавление друзей'
      },
      desc: {
        zh: '方式一：面对面扫码 — 点击"+" → "扫一扫"，扫描对方的二维码名片。方式二：搜索微信号/手机号 — 点击"+" → "添加朋友"，输入对方微信号或手机号。方式三：群聊添加 — 在同一群聊中点击对方头像 → "加为好友"。方式四：手机通讯录 — 如果对方号码在你手机通讯录里，微信会自动推荐。',
        en: 'Method 1: Face-to-face scan — tap "+" → "Scan" to scan their QR code. Method 2: Search — tap "+" → "Add Contacts", enter their WeChat ID or phone number. Method 3: Group chat — tap their avatar in a shared group → "Add as Friend". Method 4: Phone contacts — WeChat auto-suggests contacts from your phone address book.',
        ru: 'Способ 1: Сканирование — нажмите "+" → "Сканировать" и отсканируйте QR-код собеседника. Способ 2: Поиск — нажмите "+" → "Добавить", введите ID или номер телефона. Способ 3: Из чата — нажмите аватар в общей группе → "Добавить в друзья". Способ 4: Контакты — WeChat автоматически предложит контакты из адресной книги.'
      },
      tip: {
        zh: '💡 加好友后发送第一条消息很重要——自我介绍。例如："你好，我是俄罗斯留学生Андрей，张同学介绍我加你的"',
        en: '💡 The first message matters — introduce yourself. E.g., "Hi, I\'m Andrei, a Russian student. Zhang mentioned I should add you."',
        ru: '💡 Первое сообщение важно — представьтесь. Например: "Привет, я Андрей, студент из России. Чжан посоветовал мне добавить тебя"'
      }
    },
    {
      title: {
        zh: '开通微信支付',
        en: 'Enable WeChat Pay',
        ru: 'Активация WeChat Pay'
      },
      desc: {
        zh: '点击"我" → "服务"（或"支付"） → "钱包" → "银行卡" → "添加银行卡"。首次添加需要完成实名认证（选择"护照"类型，上传照片）。实名认证通过后即可使用微信支付。在商店消费时，点击"我" → "服务" → "收付款"出示付款码，或者点击"+" → "扫一扫"扫描商家二维码。',
        en: 'Tap "Me" → "Services" (or "Pay") → "Wallet" → "Bank Cards" → "Add Bank Card". First time requires real-name verification (select "Passport" type, upload photo). After verification, WeChat Pay is activated. To pay: tap "Me" → "Services" → "Money" to show payment code, or tap "+" → "Scan" to scan merchant QR.',
        ru: '"Я" → "Сервисы" (или "Оплата") → "Кошелёк" → "Банковские карты" → "Добавить". Первый раз требуется верификация (выберите "Паспорт", загрузите фото). После верификации WeChat Pay активирован. Для оплаты: "Я" → "Сервисы" → "Оплатить" — покажите код, или "+" → "Сканировать" — отсканируйте QR продавца.'
      },
      tip: {
        zh: '⚠️ 微信支付和支付宝是中国两大支付方式，建议两个都开通。部分商户只支持其中一个。',
        en: '⚠️ WeChat Pay and Alipay are the two major payment systems in China — enable both. Some merchants only accept one or the other.',
        ru: '⚠️ WeChat Pay и Alipay — две главные платёжные системы в Китае — активируйте обе. Некоторые продавцы принимают только одну из них.'
      }
    },
    {
      title: {
        zh: '加入群聊和关注公众号',
        en: 'Join Groups & Follow Official Accounts',
        ru: 'Групповые чаты и подписка на аккаунты'
      },
      desc: {
        zh: '群聊：扫描群二维码（同学/同事邀请你扫码即可）或被群内成员邀请。群聊上限500人。公众号：点击"+" → "添加朋友" → "公众号"，搜索名称关注。建议关注学校官方公众号（获取通知）、城市生活号（获取本地资讯）。',
        en: 'Groups: Scan group QR code (classmate invites you) or be invited by a member. Max 500 members per group. Official Accounts: tap "+" → "Add Contacts" → "Official Accounts", search and follow. Recommended: follow your university\'s official account (for announcements) and city lifestyle accounts (for local info).',
        ru: 'Группы: отсканируйте QR-код группы (однокурсник приглашает) или получите приглашение от участника. Макс. 500 человек. Официальные аккаунты: "+" → "Добавить" → "Официальные аккаунты", найдите и подпишитесь. Рекомендуем: аккаунт университета (уведомления) и городской жизни (местные новости).'
      },
      tip: {
        zh: '💡 小程序也是通过微信使用的——在微信搜索栏输入小程序名称即可打开，不需要单独下载App。很多服务（点餐、挂号、缴费）都有对应小程序。',
        en: '💡 Mini Programs also work within WeChat — search for the program name in the search bar to open it, no separate app needed. Many services (ordering, hospital booking, bill payment) have mini programs.',
        ru: '💡 Мини-программы работают внутри WeChat — введите название в поиске, отдельное приложение не нужно. Многие сервисы (заказ еды, запись к врачу, оплата счетов) имеют мини-программы.'
      }
    },
    {
      title: {
        zh: '朋友圈 — 中国版社交媒体',
        en: 'Moments — Chinese Social Media',
        ru: 'Моменты — китайская соцсеть'
      },
      desc: {
        zh: '"发现" → "朋友圈"可以看到好友分享的动态（类似Instagram但更私密）。你也可以发图文、视频、链接。注意：朋友圈是半封闭的——只有互为好友才能看到彼此的评论。发朋友圈时可以选择"谁可以看"（公开/部分/私密）。',
        en: '"Discover" → "Moments" to see friends\' posts (like Instagram but more private). You can share photos, videos, and links. Note: Moments is semi-private — only mutual friends can see each other\'s comments. When posting, you can choose visibility (public/partial/private).',
        ru: '"Открыть" → "Моменты" — посты друзей (как Instagram, но приватнее). Можно делиться фото, видео, ссылками. Важно: Моменты полузакрыты — только взаимные друзья видят комментарии. При публикации можно выбрать видимость (все/частично/только я).'
      },
      tip: {
        zh: '💬 文化提示：朋友圈是中国人的重要社交场景。适当发一些生活分享有助于融入圈子，但不要过度刷屏。',
        en: '💬 Cultural tip: Moments is a key social space in China. Sharing some life updates helps you blend in, but don\'t over-post.',
        ru: '💬 Культурный совет: Моменты — важное социальное пространство в Китае. Делитесь жизнью, чтобы融入 в круг общения, но не злоупотребляйте.'
      }
    }
  ],
  coreFeatures: [
    {
      icon: '💬',
      title: { zh: '聊天通讯', en: 'Chat & Messaging', ru: 'Чат и сообщения' },
      desc: { zh: '文字、语音、视频通话，支持多人语音/视频会议', en: 'Text, voice, video calls, group voice/video conferences', ru: 'Текст, голос, видеозвонки, групповые конференции' }
    },
    {
      icon: '💚',
      title: { zh: '微信支付', en: 'WeChat Pay', ru: 'WeChat Pay' },
      desc: { zh: '扫码支付、转账、红包、生活缴费', en: 'Scan-to-pay, transfers, red packets, utility bills', ru: 'QR-оплата, переводы, красные конверты, коммунальные платежи' }
    },
    {
      icon: '📱',
      title: { zh: '小程序', en: 'Mini Programs', ru: 'Мини-программы' },
      desc: { zh: '免安装App即可使用各种服务（点餐、购物、办事）', en: 'Use services without installing apps (ordering, shopping, government)', ru: 'Сервисы без установки приложений' }
    },
    {
      icon: '📢',
      title: { zh: '公众号', en: 'Official Accounts', ru: 'Официальные аккаунты' },
      desc: { zh: '关注获取资讯、新闻、学校通知等', en: 'Follow for news, information, university announcements', ru: 'Подписка на новости, информацию, уведомления вуза' }
    },
    {
      icon: '📍',
      title: { zh: '朋友圈', en: 'Moments', ru: 'Моменты' },
      desc: { zh: '分享生活动态，查看好友近况', en: 'Share life updates, see friends\' posts', ru: 'Делиться жизнью, видеть посты друзей' }
    },
    {
      icon: '🔍',
      title: { zh: '搜一搜', en: 'Search', ru: 'Поиск' },
      desc: { zh: '搜索文章、小程序、公众号、商品等', en: 'Search articles, mini programs, accounts, products', ru: 'Поиск статей, мини-программ, аккаунтов, товаров' }
    }
  ],
  tips: [
    {
      title: { zh: '消息免打扰', en: 'Mute Chats', ru: 'Отключение уведомлений' },
      content: {
        zh: '群聊太多会很吵——长按群聊 → "消息免打扰"。重要的人/群可以设为"置顶"（长按 → "置顶聊天"），确保不错过重要消息。',
        en: 'Too many groups can be noisy — long-press a group → "Mute Notifications". Set important contacts/groups as "Top" (long-press → "Pin to Top") to never miss important messages.',
        ru: 'Много групп — шумно — зажмите группу → "Откл. уведомления". Важные контакты/группы — "Закрепить" (зажмите → "Закрепить"), чтобы не пропустить важное.'
      }
    },
    {
      title: { zh: '聊天翻译', en: 'Chat Translation', ru: 'Перевод в чате' },
      content: {
        zh: '收到中文消息看不懂？长按消息 → "翻译"（需先设置翻译语言：我 → 设置 → 通用 → 翻译）。支持中↔英↔俄等多语言。',
        en: 'Can\'t understand a Chinese message? Long-press the message → "Translate" (first set language: Me → Settings → General → Translation). Supports Chinese ↔ English ↔ Russian and more.',
        ru: 'Не понимаете китайское сообщение? Зажмите → "Перевести" (сначала настройте язык: Я → Настройки → Основные → Перевод). Поддержка китайского ↔ английского ↔ русского и др.'
      }
    },
    {
      title: { zh: '收藏功能', en: 'Favorites', ru: 'Избранное' },
      content: {
        zh: '重要信息（地址、电话号码、课表等）可以长按 → "收藏"，支持添加笔记、标签分类，方便日后查找。收藏内容跨设备同步。',
        en: 'Long-press important info (addresses, phone numbers, schedules) → "Favorite". Supports notes and tags for organization. Syncs across devices.',
        ru: 'Зажмите важную информацию (адреса, телефоны, расписание) → "В избранное". Поддерживает заметки и теги. Синхронизируется между устройствами.'
      }
    },
    {
      title: { zh: '备份聊天记录', en: 'Backup Chat History', ru: 'Резервное копирование чатов' },
      content: {
        zh: '微信聊天记录不会自动云端备份。在"我 → 设置 → 通用 → 聊天记录备份与迁移"中，可以备份到电脑（通过电脑版微信）或迁移到新手机。建议定期备份重要聊天记录。',
        en: 'WeChat doesn\'t auto-backup chats to the cloud. Go to "Me → Settings → General → Chat History Backup" to backup to PC (via WeChat for desktop) or migrate to a new phone. Backup important chats regularly.',
        ru: 'WeChat не делает автоматических бэкапов в облако. "Я → Настройки → Основные → Бэкап чатов" — можно сохранить на ПК (через WeChat для ПК) или перенести на новый телефон. Регулярно делайте бэкап важных чатов.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '微信号被封了怎么办？', en: 'What if my WeChat account gets blocked?', ru: 'Что делать, если аккаунт WeChat заблокирован?' },
      a: {
        zh: '微信对新号管控较严，短时间内频繁加人、发广告、使用外挂等行为会导致封号。如果是临时限制，按提示自助解封（通常需要好友辅助验证）。如果是永久封禁，拨打微信客服 020-83720900 申诉，说明留学生身份并提供相关证明。',
        en: 'WeChat is strict with new accounts — frequent adding, spamming, or using unauthorized plugins can trigger blocks. For temporary restrictions, follow self-service unblocking (usually requires friend verification). For permanent bans, call WeChat support at 020-83720900 to appeal, mentioning your student status with supporting documents.',
        ru: 'WeChat строг к новым аккаунтам — частые добавления, спам, неавторизованные плагины могут привести к блокировке. При временном ограничении — следуйте инструкции (обычно нужно подтверждение друга). При постоянной блокировке — звоните 020-83720900, укажите статус студента и приложите документы.'
      }
    },
    {
      q: { zh: '可以同时在两台手机登录微信吗？', en: 'Can I use WeChat on two phones simultaneously?', ru: 'Можно ли использовать WeChat на двух телефонах?' },
      a: {
        zh: '不可以。微信只能在一台手机上登录（但可以在手机+平板/电脑同时在线）。换新手机时，登录新设备后旧设备自动下线。记得提前备份聊天记录。',
        en: 'No. WeChat can only be active on one phone at a time (but can be online on phone + tablet/PC simultaneously). When logging in on a new device, the old device is automatically logged out. Remember to backup chat history first.',
        ru: 'Нет. WeChat может быть активен только на одном телефоне (но может работать на телефоне + планшете/ПК одновременно). При входе на новом устройстве старое автоматически выходит. Не забудьте сделать бэкап чатов.'
      }
    },
    {
      q: { zh: '如何给微信充值/充值话费？', en: 'How to top up phone credit via WeChat?', ru: 'Как пополнить баланс телефона через WeChat?' },
      a: {
        zh: '"我" → "服务" → "手机充值"，输入手机号，选择金额（30/50/100/200元等），微信支付即可到账（通常秒到）。也可以用支付宝充值，操作类似。建议一次充50-100元，避免一次充太多忘记使用。',
        en: '"Me" → "Services" → "Phone Top-up", enter phone number, select amount (¥30/50/100/200 etc.), pay with WeChat Pay. Usually instant. You can also top up via Alipay. Start with ¥50-100 to avoid over-committing.',
        ru: '"Я" → "Сервисы" → "Пополнение телефона", введите номер, выберите сумму (¥30/50/100/200), оплатите WeChat Pay. Обычно мгновенно. Можно также через Alipay. Начните с ¥50-100.'
      }
    }
  ],
  relatedGuides: ['setup-alipay', 'buy-sim-card', 'first-week-checklist']
};
