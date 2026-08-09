// 鹿鸣集 · 支付宝使用指南
// 版本：2026-08-09

export default {
  id: 'alipay',
  version: '2026-08-09',
  title: {
    zh: '支付宝使用指南',
    en: 'Alipay Guide',
    ru: 'Руководство по Alipay'
  },
  desc: {
    zh: '中国移动支付的基石。学会用支付宝，在中国生活就解决了一半的支付问题。',
    en: 'The backbone of mobile payments in China. Master Alipay and you\'ve solved half your payment needs.',
    ru: 'Основа мобильных платежей в Китае. Освойте Alipay — и половина проблем с оплатой решена.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id333206289',
    android_google: 'https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone',
    android_cn: 'https://render.alipay.com/p/s/i/index.html',
    note: {
      zh: '国内Android手机建议在应用商店搜索"支付宝"下载，或访问官网下载',
      en: 'For Android phones in China, search "支付宝" in your app store or download from the official website',
      ru: 'Для Android в Китае найдите "支付宝" в магазине приложений или скачайте с официального сайта'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '下载并打开支付宝',
        en: 'Download and Open Alipay',
        ru: 'Скачайте и откройте Alipay'
      },
      desc: {
        zh: '在应用商店搜索"支付宝"下载安装。打开后，首次进入会显示语言选择界面，可选择 English 或 Русский（部分版本支持）。',
        en: 'Search "支付宝" in your app store and install. On first launch, you\'ll see a language selection — choose English or Русский if available.',
        ru: 'Найдите "支付宝" в магазине приложений и установите. При первом запуске можно выбрать язык — English или Русский (если доступно).'
      },
      tip: {
        zh: '如果找不到语言切换，可以在 App 内搜索"Language"设置',
        en: 'If you can\'t find language settings, search "Language" within the app',
        ru: 'Если не нашли настройку языка, поищите "Language" внутри приложения'
      }
    },
    {
      title: {
        zh: '注册账号',
        en: 'Register Account',
        ru: 'Регистрация аккаунта'
      },
      desc: {
        zh: '点击"注册"，输入你的中国手机号（+86），收到短信验证码后输入。如果还没有中国手机号，可先使用接收到的临时号码或联系学校获取。',
        en: 'Tap "Register", enter your Chinese phone number (+86), and input the SMS verification code. If you don\'t have a Chinese number yet, contact your school first.',
        ru: 'Нажмите "Зарегистрироваться", введите китайский номер (+86) и код из SMS. Если номера ещё нет — сначала обратитесь в университет.'
      },
      tip: {
        zh: '注册时选择"中国大陆 +86"区号。如果你只有俄罗斯号码，需要先办理中国手机卡（参见"购买手机卡"指南）',
        en: 'Select country code "+86 China" during registration. If you only have a Russian number, get a Chinese SIM card first (see "Buy SIM Card" guide)',
        ru: 'При регистрации выберите код "+86 Китай". Если есть только российский номер — сначала получите китайскую SIM-карту (см. гайд "Купить SIM-карту")'
      }
    },
    {
      title: {
        zh: '实名认证（关键步骤）',
        en: 'Real-Name Verification (Critical Step)',
        ru: 'Верификация личности (критический шаг)'
      },
      desc: {
        zh: '点击"我的" → "头像/昵称" → "实名认证"。选择"护照"作为证件类型，输入护照号码、姓名（与护照一致），上传护照照片页。系统通常1-3个工作日审核通过。',
        en: 'Go to "My" → tap avatar → "Real-name Verification". Select "Passport" as ID type, enter your passport number and name (as shown on passport), and upload the photo page. Review usually takes 1-3 business days.',
        ru: 'Перейдите в "Мой" → аватар → "Верификация". Выберите "Паспорт", введите номер и имя (как в паспорте), загрузите фото страницы. Проверка занимает 1-3 рабочих дня.'
      },
      tip: {
        zh: '⚠️ 这一步是使用支付宝支付功能的前提。没有实名认证只能看不能用。护照姓名注意大小写和空格要与护照完全一致。',
        en: '⚠️ This step is required to use payment features. Without verification, you can only browse. Make sure name matches your passport exactly (including capitalization and spaces).',
        ru: '⚠️ Без этого шага оплата невозможна — только просмотр. Имя должно точно совпадать с паспортом (включая регистр и пробелы).'
      }
    },
    {
      title: {
        zh: '绑定银行卡（推荐）',
        en: 'Bind Bank Card (Recommended)',
        ru: 'Привязка банковской карты (рекомендуется)'
      },
      desc: {
        zh: '完成实名认证后，点击"我的" → "银行卡" → "添加银行卡"。输入你的中国银行卡号，接收验证码确认绑定。Visa/Mastercard 等境外卡也可绑定（部分功能受限），但建议优先绑定国内银行卡。',
        en: 'After verification, go to "My" → "Bank Cards" → "Add Bank Card". Enter your Chinese bank card number and verify with SMS code. Foreign cards (Visa/Mastercard) can also be bound with limited features, but a domestic bank card is recommended.',
        ru: 'После верификации: "Мой" → "Банковские карты" → "Добавить". Введите номер китайской карты и подтвердите SMS-кодом. Можно привязать и зарубежные карты (Visa/Mastercard), но рекомендуется китайская карта.'
      },
      tip: {
        zh: '没有银行卡也可以用支付宝（别人给你转账的余额可以使用），但绑卡后功能更完整，支付额度也更高',
        en: 'You can use Alipay without a bank card (using transferred balance), but binding a card unlocks full features and higher limits',
        ru: 'Можно пользоваться и без карты (через переведённый баланс), но привязка открывает полный функционал и увеличивает лимиты'
      }
    },
    {
      title: {
        zh: '扫码支付 — 最常用的功能',
        en: 'Scan-to-Pay — Most Used Feature',
        ru: 'Оплата по QR-коду — самая частая операция'
      },
      desc: {
        zh: '打开支付宝首页，点击顶部"扫一扫"。对准商家的二维码（通常是蓝色或绿色的牌子），输入金额，确认支付。也可以让商家扫你的付款码：点击"收付款" → 展示条形码和二维码。',
        en: 'On the home screen, tap "Scan". Point at the merchant\'s QR code (usually a blue or green sign), enter the amount, and confirm. Alternatively, let the merchant scan your code: tap "Pay" → show the barcode and QR code.',
        ru: 'На главной нажмите "Сканировать". Наведите на QR-код продавца (обычно синий или зелёный), введите сумму, подтвердите. Или покажите свой код продавцу: нажмите "Оплатить" → покажите штрих-код и QR.'
      },
      tip: {
        zh: '💡 小提示：小额支付（通常1000元以下）免密码，大额需要输入6位支付密码。建议在设置里开启指纹/面容支付更方便。',
        en: '💡 Tip: Small payments (usually under ¥1000) don\'t require a password. For larger amounts, you\'ll need your 6-digit payment PIN. Enable fingerprint/face payment in settings for convenience.',
        ru: '💡 Совет: мелкие платежи (обычно до ¥1000) без пароля. Для крупных нужен 6-значный PIN. Включите оплату по отпечатку/лицу в настройках.'
      }
    },
    {
      title: {
        zh: '转账与红包',
        en: 'Transfer & Red Packets',
        ru: 'Переводы и красные конверты'
      },
      desc: {
        zh: '转账：点击首页"转账"，输入对方支付宝账号（手机号或邮箱），输入金额和密码即可。红包：点击"红包"，选择金额和个数，发送给好友或群聊。',
        en: 'Transfer: Tap "Transfer" on home page, enter recipient\'s Alipay account (phone or email), amount, and password. Red Packet: Tap "Red Packet", set amount and number, send to friends or group chats.',
        ru: 'Перевод: на главной "Перевести", введите аккаунт получателя (телефон или email), сумму и пароль. Красный конверт: нажмите "Конверт", укажите сумму и количество, отправьте друзьям или в чат.'
      },
      tip: {
        zh: '支付宝转账到银行卡（2小时内到账）收取少量手续费，支付宝账户之间互转免费',
        en: 'Transferring to bank cards (within 2 hours) has a small fee; transfers between Alipay accounts are free',
        ru: 'Перевод на банковскую карту (до 2 часов) — небольшая комиссия; между аккаунтами Alipay — бесплатно'
      }
    },
    {
      title: {
        zh: '生活缴费 — 水电燃气',
        en: 'Utility Bills — Water, Electricity, Gas',
        ru: 'Оплата коммунальных услуг'
      },
      desc: {
        zh: '首页搜索"生活缴费"或在"更多"里找到。选择你所在的城市，选择缴费类型（水费/电费/燃气费），输入户号，确认后支付。首次缴费后系统会记住户号，之后一键续费。',
        en: 'Search "生活缴费" on home page or find in "More". Select your city, bill type (water/electricity/gas), enter your account number, and pay. After first payment, the account number is saved for quick future payments.',
        ru: 'Найдите "生活缴费" на главной или в "Ещё". Выберите город, тип (вода/электричество/газ), введите номер лицевого счёта и оплатите. После первой оплаты номер сохраняется.'
      },
      tip: {
        zh: '租房同学注意：先问房东要缴费户号。如果是学校宿舍，通常由学校统一缴纳或校园卡充值。',
        en: 'For renters: ask your landlord for the utility account numbers first. Dorm students usually pay through the university or campus card.',
        ru: 'Арендаторы: сначала спросите у хозяина номера лицевых счетов. В общежитии обычно оплата через университет или кампусную карту.'
      }
    }
  ],
  coreFeatures: [
    {
      icon: '💳',
      title: { zh: '扫码支付', en: 'Scan-to-Pay', ru: 'Оплата по QR' },
      desc: { zh: '扫商家二维码或出示付款码，覆盖几乎所有消费场景', en: 'Scan merchant QR or show payment code — accepted almost everywhere', ru: 'Сканируйте QR продавца или покажите свой код — принимается почти везде' }
    },
    {
      icon: '🔄',
      title: { zh: '转账', en: 'Transfer', ru: 'Переводы' },
      desc: { zh: '支付宝互转免费，转银行卡2小时内到账', en: 'Free between Alipay accounts; bank transfers within 2 hours', ru: 'Бесплатно между аккаунтами; на карту — до 2 часов' }
    },
    {
      icon: '🏠',
      title: { zh: '生活缴费', en: 'Utility Bills', ru: 'Коммунальные платежи' },
      desc: { zh: '水费、电费、燃气费、物业费一键缴纳', en: 'Pay water, electricity, gas, and property fees', ru: 'Оплата воды, электричества, газа, содержания' }
    },
    {
      icon: '🚌',
      title: { zh: '出行服务', en: 'Transport', ru: 'Транспорт' },
      desc: { zh: '打车、公交地铁乘车码、共享单车、火车票', en: 'Ride-hailing, transit QR codes, bike sharing, train tickets', ru: 'Такси, QR для транспорта, шеринг велосипедов, ж/д билеты' }
    },
    {
      icon: '🎬',
      title: { zh: '小程序', en: 'Mini Programs', ru: 'Мини-программы' },
      desc: { zh: '无需下载App就能使用各种服务（点餐、挂号、办事）', en: 'Use various services without installing apps (ordering, booking, government)', ru: 'Использование сервисов без установки приложений' }
    },
    {
      icon: '📋',
      title: { zh: '芝麻信用', en: 'Zhima Credit', ru: 'Zhima Credit' },
      desc: { zh: '信用评分系统，高分可享免押金租充电宝、租车等便利', en: 'Credit scoring system — high scores unlock deposit-free rentals', ru: 'Кредитный рейтинг — высокий открывает аренду без залога' }
    }
  ],
  tips: [
    {
      title: { zh: '境外用户实名认证', en: 'Foreigner Verification', ru: 'Верификация для иностранцев' },
      content: {
        zh: '留学生使用护照即可实名认证。如果自动审核不通过，可以走人工审核通道，上传护照+签证+在校证明。',
        en: 'International students can verify with a passport. If auto-review fails, use the manual review channel with passport + visa + enrollment certificate.',
        ru: 'Студенты могут верифицироваться по загранпаспорту. Если автопроверка не прошла — используйте ручную проверку: паспорт + виза + справка об обучении.'
      }
    },
    {
      title: { zh: '支付密码 vs 登录密码', en: 'Payment PIN vs Login Password', ru: 'Платёжный PIN vs пароль входа' },
      content: {
        zh: '这是两个不同的密码。登录密码6位以上是字母数字组合，支付密码是纯6位数字。支付密码在"设置 → 支付设置 → 支付密码"中修改。',
        en: 'These are two different passwords. Login password is 6+ alphanumeric characters; payment PIN is exactly 6 digits. Change payment PIN in Settings → Payment Settings → Payment Password.',
        ru: 'Это два разных пароля. Пароль входа — 6+ символов; платёжный PIN — ровно 6 цифр. Изменить: Настройки → Платежи → Платёжный пароль.'
      }
    },
    {
      title: { zh: '支付限额', en: 'Payment Limits', ru: 'Лимиты платежей' },
      content: {
        zh: '未实名用户限额极低。实名认证后根据认证等级不同，年限额从10万到无上限不等。绑定银行卡后单笔限额由银行决定，通常单笔1-5万。',
        en: 'Unverified users have very low limits. After verification, annual limits range from ¥100K to unlimited depending on level. With bank card, per-transaction limits are set by the bank (usually ¥10K-50K).',
        ru: 'Без верификации лимиты очень низкие. После верификации годовой лимит от ¥100К до безлимита. С привязкой карты — лимит за транзакцию зависит от банка (обычно ¥10К-50К).'
      }
    },
    {
      title: { zh: '安全问题', en: 'Security', ru: 'Безопасность' },
      content: {
        zh: '不要向任何人透露验证码和支付密码。支付宝有账户安全险，如遇盗刷可拨打95188冻结账户并申请赔付。',
        en: 'Never share verification codes or payment PIN with anyone. Alipay has account security insurance — if compromised, call 95188 to freeze your account and claim compensation.',
        ru: 'Никому не сообщайте коды подтверждения и платёжный PIN. При компрометации звоните 95188 для блокировки и компенсации.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '没有中国银行卡能用支付宝吗？', en: 'Can I use Alipay without a Chinese bank card?', ru: 'Можно ли пользоваться Alipay без китайской карты?' },
      a: {
        zh: '可以，但功能受限。你可以接收别人的转账（余额支付），也可以绑定Visa/Mastercard等国际信用卡（但部分商户不支持）。建议尽快办理中国银行卡并绑定，体验最完整。',
        en: 'Yes, but with limited features. You can receive transfers (pay with balance) and bind international cards like Visa/Mastercard (some merchants won\'t accept them). For the best experience, get a Chinese bank card ASAP.',
        ru: 'Да, но с ограничениями. Можно получать переводы (оплата с баланса) и привязать Visa/Mastercard (не все магазины принимают). Для полного функционала — оформите китайскую карту.'
      }
    },
    {
      q: { zh: '支付宝里的钱怎么提现？', en: 'How to withdraw money from Alipay?', ru: 'Как вывести деньги из Alipay?' },
      a: {
        zh: '点击"我的" → "余额" → "提现"，选择银行卡，输入金额。到账时间：实时到2个工作日不等（多数2小时内）。提现到本人银行卡免费，超出免费额度后收取0.1%手续费。',
        en: 'Go to "My" → "Balance" → "Withdraw", select bank card, enter amount. Arrival time: instant to 2 business days (most within 2 hours). Free to your own card within the free quota; 0.1% fee after that.',
        ru: '"Мой" → "Баланс" → "Вывести", выберите карту, введите сумму. Время: мгновенно до 2 рабочих дней (обычно за 2 часа). На свою карту бесплатно в пределах лимита, далее 0,1%.'
      }
    },
    {
      q: { zh: '扫码支付时输错金额怎么办？', en: 'What if I enter the wrong amount when scanning?', ru: 'Что делать, если ввёл неверную сумму?' },
      a: {
        zh: '如果是扫商家码（你输入金额），支付后无法撤回。请立即联系商户协商退款，或拨打支付宝客服 95188 求助。如果是商家扫你（出示付款码），金额由商家输入，请当面确认金额后再输入密码。',
        en: 'If you scanned a merchant code (you entered the amount), the payment cannot be reversed. Contact the merchant immediately for a refund, or call Alipay support at 95188. If the merchant scanned your code, the amount is set by them — always verify before entering your PIN.',
        ru: 'Если вы отсканировали код (вы вводили сумму) — отменить нельзя. Сразу свяжитесь с продавцом для возврата или звоните 95188. Если продавец сканировал ваш код — сумму вводит он, всегда проверяйте перед вводом PIN.'
      }
    }
  ],
  relatedGuides: ['setup-wechat', 'buy-sim-card', 'open-bank-account']
};
