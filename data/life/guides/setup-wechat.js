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
      title: { zh: '下载并注册微信', en: 'Download and Register', ru: 'Скачайте и зарегистрируйтесь' },
      desc: {
        zh: '操作步骤：\n\n1. 打开手机应用商店：\n   • iPhone → App Store\n   • Android → 各品牌应用商店（华为应用市场、小米应用商店等）\n   • 或访问微信官网下载：https://weixin.qq.com\n\n2. 安装后打开微信，点击「注册」\n\n3. 选择「手机号注册」，输入你的中国手机号\n\n4. 设置微信昵称和密码\n   • 昵称可以之后修改\n   • 密码至少8位，需包含字母和数字\n\n5. 完成安全验证（拼图/滑块）\n\n6. 输入短信验证码\n\n7. 注册成功！进入微信主界面\n\n⚠️ 注意：\n• 如果提示需要「好友辅助验证」，需要找一位已使用微信超过6个月的好友帮你扫码确认\n• 到学校后让同学或室友帮忙验证最简单\n• 如果收不到验证码，检查短信是否被拦截，或换一张SIM卡重试',
        en: 'Steps:\n\n1. Open your phone\'s app store:\n   • iPhone → App Store\n   • Android → brand app store (Huawei AppGallery, Xiaomi Store, etc.)\n   • Or download from official site: https://weixin.qq.com\n\n2. After installation, open WeChat and tap "Register"\n\n3. Choose "Register with phone number", enter your Chinese number\n\n4. Set your WeChat nickname and password\n   • Nickname can be changed later\n   • Password: at least 8 characters with letters and numbers\n\n5. Complete security verification (puzzle/slider)\n\n6. Enter SMS verification code\n\n7. Registration complete! Welcome to WeChat!\n\n⚠️ Notes:\n• If "Friend verification required" appears, you need a WeChat user (6+ months) to scan and confirm\n• After arriving at school, ask classmates or roommates to help — easiest approach\n• If SMS code doesn\'t arrive, check if it\'s blocked, or try with another SIM',
        ru: 'Шаги:\n\n1. Откройте магазин приложений:\n   • iPhone → App Store\n   • Android → магазин вашего бренда\n   • Или скачайте с сайта: https://weixin.qq.com\n\n2. Откройте WeChat → «Регистрация»\n\n3. «Регистрация по номеру» — введите китайский номер\n\n4. Установите никнейм и пароль\n   • Никнейм можно изменить позже\n   • Пароль: минимум 8 символов с буквами и цифрами\n\n5. Пройдите проверку безопасности\n\n6. Введите SMS-код\n\n7. Готово!\n\n⚠️ Примечания:\n• Если требуется «подтверждение друга» — нужен пользователь WeChat со стажем 6+ мес.\n• После заселения попросите однокурсников помочь — самый простой способ\n• Если код не приходит, проверьте спам-фильтр'
      },
      tip: {
        zh: '注册成功后，第一时间设置「微信号」（个人设置中），这是你的唯一标识，只能改一次，建议用名字拼音。',
        en: 'After registration, immediately set your "WeChat ID" (in personal settings) — this is your unique identifier, changeable only once. Suggest using pinyin of your name.',
        ru: 'После регистрации сразу установите «WeChat ID» (в настройках профиля) — это ваш уникальный идентификатор, можно изменить только один раз. Рекомендуем использовать пиньинь вашего имени.'
      }
    },
    {
      title: { zh: '添加好友和加入群聊', en: 'Add Friends & Join Groups', ru: 'Добавьте друзей и группы' },
      desc: {
        zh: '微信的核心是社交关系。以下是添加好友的几种方式：\n\n方式一：扫一扫（最常用）\n1. 点击微信右上角「+」→「扫一扫」\n2. 扫描对方的二维码\n3. 发送好友申请\n\n方式二：通过手机号搜索\n1. 点击「+」→「添加朋友」\n2. 在搜索栏输入手机号\n3. 发送好友申请\n\n加入班级群/留学生群：\n• 到宿舍后请室友或同学扫码拉你进群\n• 群二维码有效期7天，过期需要重新获取\n• 也可以让群主直接把你拉入\n\n💡 建议添加的好友：\n• 室友和同班同学\n• 辅导员/导师\n• 学校国际学生办公室老师\n• 学长学姐（能回答很多实际问题）',
        en: 'WeChat\'s core is social connections. Ways to add friends:\n\nMethod 1: Scan QR Code (most common)\n1. Tap "+" (top right) → "Scan"\n2. Scan the other person\'s QR code\n3. Send friend request\n\nMethod 2: Search by phone number\n1. Tap "+" → "Add Contacts"\n2. Enter phone number in search bar\n3. Send friend request\n\nJoining class/international student groups:\n• Ask roommates or classmates to scan and add you\n• Group QR codes expire after 7 days — request a new one if expired\n• The group owner can also directly add you\n\n💡 Recommended contacts to add:\n• Roommates and classmates\n• Counselor/supervisor\n• International student office staff\n• Senior students (they can answer many practical questions)',
        ru: 'Основа WeChat — социальные связи. Способы добавления:\n\nСпособ 1: Сканирование QR (самый частый)\n1. «+» → «Сканировать»\n2. Отсканируйте QR собеседника\n3. Отправьте заявку\n\nСпособ 2: Поиск по номеру\n1. «+» → «Добавить друга»\n2. Введите номер телефона\n3. Отправьте заявку\n\nВступление в группы:\n• Попросите однокурсников добавить вас\n• QR групп действителен 7 дней\n• Владелец группы может добавить вас напрямую\n\n💡 Кого добавить: однокурсников, куратора, офис иностранных студентов, старшекурсников'
      }
    },
    {
      title: { zh: '实名认证与开通微信支付', en: 'Real-Name Verification & WeChat Pay', ru: 'Верификация и WeChat Pay' },
      desc: {
        zh: '微信支付是中国最常用的支付方式，买菜、打车、缴费都用它。开通步骤：\n\n1. 打开微信 → 点击右下角「我」\n2. 点击「服务」→「钱包」\n3. 点击「实名认证」\n4. 选择证件类型：护照\n5. 填写护照号码和姓名（需与银行预留信息一致）\n6. 上传护照照片页\n7. 等待审核（通常几分钟到1小时）\n8. 审核通过后，点击「添加银行卡」\n9. 输入中国银行卡号\n10. 设置6位支付密码\n11. 微信支付开通成功！\n\n使用方法：\n• 付款码支付：「我」→「服务」→「收付款」→ 展示二维码给商家扫描\n• 扫码支付：「+」→「扫一扫」→ 扫描商家收款码\n• 转账/红包：聊天窗口内点击「+」→「转账」或「红包」\n\n⚠️ 外国学生常见问题：\n• 部分银行的外国人不支持绑定微信支付，建议用中国银行或工商银行\n• 也可以让朋友给你发红包，零钱可以直接消费\n• 支付宝也支持类似功能（参考上一个指南）',
        en: 'WeChat Pay is China\'s most common payment method — groceries, rides, bills, all use it. Setup steps:\n\n1. Open WeChat → tap "Me" (bottom right)\n2. Tap "Services" → "Wallet"\n3. Tap "Real-name Verification"\n4. Select ID type: Passport\n5. Fill in passport number and name (must match bank records)\n6. Upload passport photo page\n7. Wait for review (usually minutes to 1 hour)\n8. After approval, tap "Add Bank Card"\n9. Enter Chinese bank card number\n10. Set 6-digit payment password\n11. WeChat Pay activated!\n\nHow to use:\n• Payment code: "Me" → "Services" → "Receive Payment" → show QR to merchant\n• Scan to pay: "+" → "Scan" → scan merchant\'s QR code\n• Transfer/Red packet: in chat, tap "+" → "Transfer" or "Red Packet"\n\n⚠️ Common issues for foreign students:\n• Some banks don\'t support foreign passport binding — try Bank of China or ICBC\n• Friends can send you red packets — the balance can be spent directly\n• Alipay also supports similar features (see previous guide)',
        ru: 'WeChat Pay — самый популярный способ оплаты. Шаги:\n\n1. «Me» → «Services» → «Wallet»\n2. «Верификация» → тип: паспорт\n3. Заполните данные паспорта\n4. Загрузите фото страницы паспорта\n5. Ожидание (обычно от минут до часа)\n6. «Добавить карту» → номер карты китайского банка\n7. Установите 6-значный пароль\n8. Готово!\n\nИспользование:\n• Код оплаты: «Me» → «Services» → «Получить» → покажите QR\n• Сканирование: «+» → «Сканировать» → QR продавца\n• Перевод/конверт: в чате «+» → «Перевод» или «Конверт»\n\n⚠️ Для иностранцев:\n• Не все банки поддерживают привязку — попробуйте Bank of China или ICBC\n• Друзья могут отправить конверт — баланс можно тратить'
      },
      tip: {
        zh: '没有中国银行卡也能用微信支付！让朋友给你发红包或者转账，收到的钱在「零钱」里，可以直接用于消费。',
        en: 'You can use WeChat Pay even without a Chinese bank card! Have friends send red packets or transfers — the money goes to your "Balance" and can be spent directly.',
        ru: 'Можно пользоваться WeChat Pay без китайской карты! Попросите друзей отправить конверт — деньги поступят на «Баланс» и их можно тратить.'
      }
    },
    {
      title: { zh: '常用功能速览', en: 'Essential Features Overview', ru: 'Обзор основных функций' },
      desc: {
        zh: '微信不只是聊天工具，以下是留学生最常用的功能：\n\n🔍 扫一扫：\n• 扫码点餐（餐厅桌上有二维码）\n• 扫码骑车（哈啰、美团单车）\n• 扫码购物（便利店、超市）\n• 扫码加好友\n\n📍 发送位置：\n• 聊天界面 → 点「+」→「位置」\n• 可以发送当前位置或分享实时位置给对方\n\n🌐 小程序（免安装App）：\n• 下拉微信首页可以看到最近使用的小程序\n• 很多服务不需要下载独立App，搜索小程序即可使用\n• 如：星巴克点餐、铁路12306、各大学校园卡充值\n\n📸 朋友圈：\n• 点击「发现」→「朋友圈」\n• 可以发图文/视频动态，类似Instagram\n• 注意：朋友圈内容好友可见，注意隐私\n\n🔔 消息免打扰：\n• 长按群聊 →「消息免打扰」\n• 重要群建议保持通知开启',
        en: 'WeChat is more than just a chat tool. Here are the most useful features for international students:\n\n🔍 Scan QR Code:\n• Scan to order at restaurants (QR code on table)\n• Scan to unlock bikes (Hello Bike, Meituan Bike)\n• Scan to pay at stores (convenience stores, supermarkets)\n• Scan to add friends\n\n📍 Share Location:\n• In chat → tap "+" → "Location"\n• Can send current location or share real-time location\n\n🌐 Mini Programs (no app installation needed):\n• Pull down on WeChat home screen to see recent mini programs\n• Many services work without downloading separate apps\n• Examples: Starbucks ordering, Railway 12306, campus card top-up\n\n📸 Moments:\n• Tap "Discover" → "Moments"\n• Post photo/video updates, similar to Instagram\n• Note: Moments are visible to friends — be mindful of privacy\n\n🔔 Mute Notifications:\n• Long-press a group chat → "Mute Notifications"\n• Keep important groups with notifications on',
        ru: 'WeChat — больше, чем мессенджер. Полезные функции:\n\n🔍 Сканирование QR:\n• Заказ еды (QR на столе)\n• Велосипеды (Hello Bike, Meituan)\n• Оплата в магазинах\n• Добавление друзей\n\n📍 Местоположение:\n• В чате → «+» → «Местоположение»\n• Отправить текущие координаты или делиться в реальном времени\n\n🌐 Мини-программы (без установки):\n• Потяните вниз на главной странице\n• Многие сервисы работают без отдельных приложений\n• Starbucks, 12306, пополнение карты кампуса\n\n📸 Moments:\n• «Discover» → «Moments»\n• Публикация фото/видео, как в Instagram\n• Видно друзьям — помните о конфиденциальности\n\n🔔 Отключение уведомлений:\n• Долгое нажатие на чат → «Отключить уведомления»'
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
