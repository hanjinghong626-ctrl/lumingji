// Guide: 注册并开通支付宝
export default {
  id: 'setup-alipay',
  category: 'first-landing',
  icon: '💙',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 30,
  apps: ['alipay'],
  prerequisites: ['buy-sim-card'],
  tags: ['payment', 'alipay', 'essential'],
  title: {
    zh: '注册并开通支付宝',
    en: 'Set Up Alipay',
    ru: 'Настроить Alipay'
  },
  summary: {
    zh: '外国人注册支付宝全流程：下载→注册→实名认证→绑卡→付款',
    en: 'Complete guide for foreigners: download → register → verify → bind card → pay',
    ru: 'Полный гайд для иностранцев: скачивание → регистрация → привязка → оплата'
  },
  intro: {
    zh: '支付宝是中国最大的移动支付平台之一。从2023年起，外国游客和留学生可以直接使用境外银行卡（Visa/Mastercard/JCB等）绑定支付宝，无需中国银行卡也能扫码付款。本指南将带你一步一步完成设置。',
    en: 'Alipay is one of China\'s largest mobile payment platforms. Since 2023, foreigners can directly bind overseas bank cards (Visa/Mastercard/JCB, etc.) to Alipay — you can scan-to-pay without a Chinese bank account. This guide walks you through every step.',
    ru: 'Alipay — одна из крупнейших платформ мобильных платежей в Китае. С 2023 года иностранцы могут напрямую привязать зарубежные карты (Visa/Mastercard/JCB) к Alipay — можно платить сканированием без китайского банковского счёта.'
  },
  preparation: {
    zh: ['一部智能手机（iOS或Android）', '中国手机号（已开通）', '护照原件', '境外银行卡（Visa/Mastercard/JCB）或中国银行卡', '良好的网络连接'],
    en: ['A smartphone (iOS or Android)', 'A Chinese phone number (activated)', 'Your passport (original)', 'Foreign bank card (Visa/Mastercard/JCB) or Chinese bank card', 'Good internet connection'],
    ru: ['Смартфон (iOS или Android)', 'Китайский номер телефона (активированный)', 'Загранпаспорт (оригинал)', 'Зарубежная карта (Visa/Mastercard/JCB) или китайская карта', 'Хорошее интернет-соединение']
  },
  steps: [
    {
      title: { zh: '下载支付宝App', en: 'Download Alipay App', ru: 'Скачать приложение Alipay' },
      desc: {
        zh: '在App Store（苹果）或应用商店（安卓）搜索"支付宝"或"Alipay"，认准蓝色图标、蚂蚁标志的那个。建议下载国际版（Alipay），界面语言支持英语。',
        en: 'Search "支付宝" or "Alipay" in App Store (iOS) or your app store (Android). Look for the blue icon with the ant logo. We recommend downloading the international version "Alipay" which supports English interface.',
        ru: 'Найдите "支付宝" или "Alipay" в App Store (iOS) или магазине приложений (Android). Ищите синюю иконку с муравьём. Рекомендуем международную версию "Alipay" с поддержкой английского.'
      },
      tip: {
        zh: '如果你的手机应用商店搜不到，可以去支付宝官网 www.alipay.com 扫描二维码下载。',
        en: 'If you can\'t find it in your app store, go to www.alipay.com to download via QR code.',
        ru: 'Если не нашли в магазине приложений, зайдите на www.alipay.com для скачивания по QR-коду.'
      }
    },
    {
      title: { zh: '注册账号', en: 'Register Account', ru: 'Зарегистрировать аккаунт' },
      desc: {
        zh: '打开支付宝，点击"注册"。选择"用手机号注册"，输入你的中国手机号（+86开头），获取验证码。输入验证码后，设置登录密码（6-20位字母+数字组合）。',
        en: 'Open Alipay and tap "Register". Choose "Register with phone number", enter your Chinese phone number (+86), get the verification code. After entering the code, set a login password (6-20 characters, letters + numbers).',
        ru: 'Откройте Alipay, нажмите "Регистрация". Выберите "Регистрация по номеру", введите китайский номер (+86), получите код. После ввода кода установите пароль (6-20 символов, буквы + цифры).'
      },
      tip: {
        zh: '验证码可能延迟几分钟才到，请耐心等待。如果一直没收到，检查手机信号，或换一种方式接收（语音验证码）。',
        en: 'The verification code may take a few minutes. If you don\'t receive it, check your signal or try voice verification.',
        ru: 'Код может идти несколько минут. Если не пришёл, проверьте сигнал или попробуйте голосовую верификацию.'
      }
    },
    {
      title: { zh: '实名认证（关键步骤！）', en: 'Real-name Verification (Key Step!)', ru: 'Верификация личности (ключевой шаг!)' },
      desc: {
        zh: '注册成功后，进入"我的" → 点击头像区域 → "实名认证"。选择"护照验证"，按照提示拍摄护照信息页（确保光线好、文字清晰）。系统会自动识别你的姓名、国籍、护照号。核对无误后提交。',
        en: 'After registration, go to "Me" → tap your profile area → "Real-name Verification". Choose "Passport Verification", follow prompts to photograph your passport info page (ensure good lighting, clear text). The system will auto-recognize your name, nationality, passport number. Verify and submit.',
        ru: 'После регистрации перейдите в "Me" → нажмите на профиль → "Верификация". Выберите "Верификация по паспорту", сфотографируйте страницу паспорта (хорошее освещение, чёткий текст). Система автоматически распознает данные. Проверьте и отправьте.'
      },
      tip: {
        zh: '护照拍照时不要有反光，四角要完整露出。审核通常需要1-24小时，一般很快。',
        en: 'When photographing your passport, avoid glare and ensure all four corners are visible. Review usually takes 1-24 hours.',
        ru: 'При фотографировании паспорта избегайте бликов, все 4 угла должны быть видны. Проверка обычно занимает 1-24 часа.'
      }
    },
    {
      title: { zh: '绑定银行卡', en: 'Bind Bank Card', ru: 'Привязать банковскую карту' },
      desc: {
        zh: '进入"我的" → "银行卡" → "添加银行卡"。你可以选择绑定：① 境外银行卡（Visa/Mastercard/JCB/Discover等），直接输入卡号、有效期、CVV；② 中国银行卡，需要输入卡号+银行预留手机号验证。绑定成功后，这张卡就可以用于支付了。',
        en: 'Go to "Me" → "Bank Cards" → "Add Bank Card". You can bind: ① Foreign bank card (Visa/Mastercard/JCB/Discover) — enter card number, expiry, CVV directly; ② Chinese bank card — enter card number + SMS verification from the bank. Once bound, the card is ready for payment.',
        ru: 'Перейдите в "Me" → "Банковские карты" → "Добавить карту". Можно привязать: ① Зарубежную карту (Visa/Mastercard/JCB/Discover) — номер, срок, CVV; ② Китайскую карту — номер + SMS-подтверждение. После привязки карта готова к оплате.'
      },
      tip: {
        zh: '境外卡每日消费限额6000元人民币，每月限额50000元。建议同时绑定一张中国银行卡以解除限制。',
        en: 'Foreign cards have a daily limit of ¥6,000 RMB and monthly limit of ¥50,000. Bind a Chinese bank card to lift these limits.',
        ru: 'Лимит для зарубежных карт: 6000 ¥/день, 50000 ¥/месяц. Привяжите китайскую карту для снятия ограничений.'
      }
    },
    {
      title: { zh: '学会扫码付款', en: 'Learn to Scan & Pay', ru: 'Научиться платить сканированием' },
      desc: {
        zh: '支付宝的两种付款方式：\n\n【主扫】你扫商家：点击首页"扫一扫"，对准商家的收款二维码，输入金额，输入支付密码/指纹/面容，完成。\n\n【被扫】商家扫你：点击首页"收付款"，会显示一个条形码+二维码，让商家用扫码枪/手机扫你的码，小额免密直接扣款。\n\n日常买东西（便利店、餐厅、地铁）都是这样付的，不需要现金。',
        en: 'Two ways to pay with Alipay:\n\n[You scan merchant] Tap "Scan" on homepage, aim at merchant\'s QR code, enter amount, enter payment password/fingerprint/face ID, done.\n\n[Merchant scans you] Tap "Pay" on homepage, a barcode + QR code appears, let the merchant scan it. Small amounts are deducted automatically without password.\n\nThis is how you pay at convenience stores, restaurants, metro — no cash needed.',
        ru: 'Два способа оплаты через Alipay:\n\n[Вы сканируете] Нажмите "Сканировать", наведите на QR-код продавца, введите сумму, пароль/отпечаток/лицо — готово.\n\n[Продавец сканирует вас] Нажмите "Оплата", появится штрих-код + QR, продавец сканирует его. Малые суммы списываются без пароля.\n\nТак платят в магазинах, ресторанах, метро — наличные не нужны.'
      }
    },
    {
      title: { zh: '设置支付密码', en: 'Set Payment Password', ru: 'Установить платёжный пароль' },
      desc: {
        zh: '如果还没有设置6位数字支付密码，系统会提示你设置。这个密码在每次付款时需要输入，请牢记。也可以在"设置→支付设置"中开启指纹/面容支付，更方便。',
        en: 'If you haven\'t set a 6-digit payment password, the system will prompt you. This password is required for each payment — remember it well. You can also enable fingerprint/face payment in "Settings → Payment Settings" for convenience.',
        ru: 'Если ещё не установили 6-значный платёжный пароль, система предложит. Этот пароль нужен для каждой оплаты — запомните. Также можно включить оплату по отпечатку/лицу в "Настройки → Платежи".'
      }
    },
    {
      title: { zh: '探索更多功能', en: 'Explore More Features', ru: 'Изучите дополнительные функции' },
      desc: {
        zh: '支付宝不仅是支付工具，还有很多实用功能：\n\n• 生活缴费：水电燃气费一键缴纳\n• 手机充值：给手机充话费\n• 交通出行：扫码坐地铁/公交\n• 转账：给朋友转账或AA收款\n• 小程序：不用下载App就能用各种服务\n\n后续Guide会详细介绍这些功能。',
        en: 'Alipay is more than just payment:\n\n• Utility Bills: Pay water/electricity/gas with one tap\n• Phone Top-up: Recharge your phone credit\n• Transport: Scan to ride metro/bus\n• Transfer: Send money to friends or split bills\n• Mini Programs: Use various services without downloading separate apps\n\nUpcoming guides will cover these features in detail.',
        ru: 'Alipay — это не только оплата:\n\n• Коммунальные платежи: вода/электричество/газ в один клик\n• Пополнение телефона: баланс в один клик\n• Транспорт: сканирование для метро/автобуса\n• Переводы: деньги друзьям, раздел счёта\n• Мини-программы: сервисы без скачивания приложений\n\nСледующие гайды расскажут подробнее.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '没有中国银行卡能用支付宝吗？', en: 'Can I use Alipay without a Chinese bank card?', ru: 'Можно ли пользоваться Alipay без китайской карты?' },
      a: { zh: '可以！2023年起，支付宝支持直接绑定境外Visa/Mastercard/JCB等银行卡。每日限额6000元，每月50000元，对日常消费完全够用。', en: 'Yes! Since 2023, Alipay supports binding foreign Visa/Mastercard/JCB cards directly. Daily limit ¥6,000, monthly ¥50,000 — more than enough for daily spending.', ru: 'Да! С 2023 года Alipay поддерживает прямую привязку зарубежных карт Visa/Mastercard/JCB. Лимит 6000 ¥/день, 50000 ¥/месяц — достаточно для повседневных расходов.' }
    },
    {
      q: { zh: '实名认证失败了怎么办？', en: 'What if real-name verification fails?', ru: 'Что делать, если верификация не удалась?' },
      a: { zh: '最常见的原因：1）护照照片不清晰/有反光→重新拍；2）护照过期→需要有效护照；3）姓名格式不对→按护照MRZ行的顺序填写。如果多次失败，联系支付宝客服：95188。', en: 'Most common reasons: 1) Unclear/glare passport photo → retake; 2) Expired passport → need valid one; 3) Name format wrong → follow MRZ line order. If it keeps failing, contact Alipay customer service: 95188.', ru: 'Частые причины: 1) Нечёткое фото паспорта → переснимите; 2) Просроченный паспорт → нужен действующий; 3) Неверный формат имени → по MRZ-строке. При повторных отказах — служба поддержки: 95188.' }
    },
    {
      q: { zh: '支付时提示"交易受限"怎么办？', en: 'What if I get "Transaction Limited" during payment?', ru: 'Что делать при ошибке "Транзакция ограничена"?' },
      a: { zh: '可能是：1）超出境外卡限额→换用另一张卡或降低金额；2）商家不支持外卡→换支持外卡的商家（大部分连锁商家都支持）；3）账户安全验证→按提示完成人脸识别。', en: 'Possible reasons: 1) Exceeded foreign card limit → switch card or reduce amount; 2) Merchant doesn\'t accept foreign cards → try chain stores (most support them); 3) Security verification → complete face recognition as prompted.', ru: 'Возможные причины: 1) Превышен лимит карты → смените карту или сумму; 2) Продавец не принимает иностранные карты → попробуйте сетевые магазины; 3) Верификация безопасности → пройдите распознавание лица.' }
    }
  ],
  nextGuides: ['setup-wechat', 'metro-guide', 'food-delivery']
};
