// Guide: 微信支付完全指南
export default {
  id: 'wechat-pay-guide',
  category: 'payment',
  icon: '💚',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 20,
  apps: ["wechat"],
  prerequisites: ["setup-wechat"],
  tags: ["wechat", "payment", "wallet"],
  title: { zh: '微信支付完全指南', en: 'WeChat Pay Complete Guide', ru: 'Полное руководство по WeChat Pay' },
  summary: { zh: '开通钱包、收付款、转账、红包、AA付款等全功能', en: 'Enable wallet, payments, transfers, red packets, split bills', ru: 'Кошелёк, платежи, переводы, красные конверты, разделение счетов' },
  intro: { zh: '微信支付深度集成在微信中，社交与支付无缝结合。本指南帮你完全掌握微信支付。', en: 'WeChat Pay is deeply integrated into WeChat, combining social and payment features.', ru: 'WeChat Pay интегрирован в WeChat, объединяя общение и платежи.' },
  preparation: { zh: ['已注册微信', '已完成实名认证', '已绑定银行卡'], en: ['Registered WeChat', 'Real-name verified', 'Bank card linked'], ru: ['WeChat зарегистрирован', 'Верификация пройдена', 'Карта привязана'] },
  steps: [
    {
      title: { zh: '下载并安装微信', en: 'Download and install WeChat', ru: 'Скачать и установить WeChat' },
      desc: {
        zh: '在App Store或安卓应用商店搜索"WeChat"或"微信"，认准绿色图标（两个对话气泡）。下载后打开，选择"注册"→"用手机号注册"，输入中国手机号获取验证码完成注册。',
        en: 'Search "WeChat" in App Store or Android app store. Look for the green icon with two chat bubbles. After downloading, open it and tap Register → Register with phone number. Enter your Chinese phone number and verify with the SMS code.',
        ru: 'Найдите "WeChat" в App Store или магазине приложений Android. Ищите зелёную иконку с двумя пузырьками. После скачивания откройте и нажмите Регистрация → Регистрация по номеру. Введите китайский номер и подтвердите кодом из SMS.'
      }
    },
    {
      title: { zh: '开通微信支付', en: 'Activate WeChat Pay', ru: 'Активировать WeChat Pay' },
      desc: {
        zh: '注册微信后，进入"我"→"服务"（或"支付"）→"钱包"→"银行卡"。点击"添加银行卡"，输入境外Visa/Mastercard信息完成绑定。实名认证需要上传护照照片。',
        en: 'After registering WeChat, go to Me → Services → Wallet → Bank Cards. Tap Add Bank Card and enter your overseas Visa/Mastercard details. Real-name verification requires uploading your passport photo.',
        ru: 'После регистрации WeChat перейдите в Я → Сервисы → Кошелёк → Банковские карты. Нажмите Добавить карту и введите данные зарубежной Visa/Mastercard. Для верификации нужно загрузить фото паспорта.'
      }
,      tip: {
        zh: '绑定境外卡后，单笔限额2000元，月累计限额10000元，年累计限额50000元。',
        en: 'After binding a foreign card: per-transaction limit ¥2,000, monthly limit ¥10,000, annual limit ¥50,000.',
        ru: 'После привязки зарубежной карты: лимит за транзакцию ¥2 000, в месяц ¥10 000, в год ¥50 000.'
      }
    },
    {
      title: { zh: '扫码支付', en: 'Scan to Pay', ru: 'Оплата по QR-коду' },
      desc: {
        zh: '在商店、餐厅等场所，打开微信右上角"+"→"扫一扫"，扫描商家的收款二维码。输入金额和支付密码（或指纹/面容验证）即可完成付款。',
        en: 'At shops, restaurants, etc., open WeChat tap "+" in the top right → "Scan" and scan the merchant\'s QR code. Enter the amount and payment password (or biometric verification) to complete payment.',
        ru: 'В магазинах, ресторанах и т.д. откройте WeChat, нажмите "+" вверху справа → "Сканировать" и отсканируйте QR-код продавца. Введите сумму и пароль оплаты (или биометрию) для завершения.'
      }
,      tip: {
        zh: '如果没有二维码，可以点击"收付款"→"向商家付款"出示你的付款码让商家扫。',
        en: 'If there\'s no QR code, tap "Pay" → "Pay to Merchant" to show your payment code for the merchant to scan.',
        ru: 'Если нет QR-кода, нажмите "Оплатить" → "Оплата продавцу" и покажите свой код оплаты для сканирования.'
      }
    },
    {
      title: { zh: '管理账单和提现', en: 'Manage bills and withdraw', ru: 'Управление счетами и вывод средств' },
      desc: {
        zh: '进入"我"→"服务"→"钱包"→"账单"可以查看所有交易记录。微信支付收到的转账余额可以提现到银行卡（免费额度1000元/人，超出部分收0.1%手续费）。',
        en: 'Go to Me → Services → Wallet → Bills to view all transactions. Balance received via WeChat Pay can be withdrawn to bank cards (free quota: ¥1,000/person; 0.1% fee above that).',
        ru: 'Перейдите в Я → Сервисы → Кошелёк → Счета для просмотра всех транзакций. Баланс, полученный через WeChat Pay, можно вывести на карту (бесплатно до ¥1 000/чел.; комиссия 0,1% сверх того).'
      }
,      tip: {
        zh: '注意：境外卡收到的退款会原路返回到境外卡，可能需要5-15个工作日。',
        en: 'Note: Refunds to foreign cards are returned to the original card, which may take 5-15 business days.',
        ru: 'Примечание: возвраты на зарубежные карты возвращаются на исходную карту, это может занять 5-15 рабочих дней.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '微信和支付宝哪个更好用？', en: 'WeChat Pay vs Alipay?', ru: 'Что лучше — WeChat Pay или Alipay?' },
      a: { zh: '两个都重要，建议同时使用。微信社交场景更方便，支付宝理财功能更丰富。日常消费差不多，但有些商家只支持一个。', en: 'Both are essential. WeChat excels in social scenarios; Alipay has richer financial features. Daily spending is similar, but some merchants only accept one.', ru: 'Оба важны. WeChat удобнее для социальных сценариев; Alipay — больше финансовых функций. Используйте оба.' },
    },
  ],
  nextGuides: ['alipay-full-guide', 'bind-foreign-card', 'campus-card']
};