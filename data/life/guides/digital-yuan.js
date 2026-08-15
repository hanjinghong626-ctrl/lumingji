// Guide: 数字人民币(e-CNY)
export default {
  id: 'digital-yuan',
  category: 'payment',
  icon: '🔵',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ["e-cny", "digital", "payment"],
  title: { zh: '数字人民币(e-CNY)', en: 'Digital Yuan (e-CNY)', ru: 'Цифровой юань (e-CNY)' },
  summary: { zh: '中国央行数字货币：开通方式、使用场景、与支付宝微信的区别', en: 'Central bank digital currency: setup, use cases, differences from Alipay/WeChat', ru: 'Цифровая валюта ЦБ: открытие, использование, отличия от Alipay/WeChat' },
  intro: { zh: '数字人民币（e-CNY）是中国人民银行发行的法定数字货币，与纸币等价但更便捷。目前已在多个城市试点。', en: 'Digital Yuan (e-CNY) is the legal digital currency issued by PBOC, equivalent to cash but more convenient. Currently piloted in multiple cities.', ru: 'e-CNY — цифровая валюта Народного банка Китая, эквивалентна наличным. Пилотируется в ряде городов.' },
  preparation: { zh: ['所在城市在试点范围', '中国大陆手机号', '护照'], en: ['City in pilot zone', 'Chinese phone number', 'Passport'], ru: ['Город в пилотной зоне', 'Китайский номер', 'Паспорт'] },
  steps: [
    {
      title: { zh: '了解数字人民币', en: 'Understand Digital RMB (e-CNY)', ru: 'Что такое цифровой юань (e-CNY)' },
      desc: {
        zh: '数字人民币（e-CNY）是中国人民银行发行的官方数字货币，等同于现金。目前在部分城市试点，支持离线支付、无网络也能交易。外国人可使用，但需要中国手机号注册。',
        en: 'Digital RMB (e-CNY) is the official digital currency issued by the People\'s Bank of China, equivalent to cash. Currently piloted in select cities, it supports offline payments and transactions without internet. Foreigners can use it, but need a Chinese phone number to register.',
        ru: 'Цифровой юань (e-CNY) — официальная цифровая валюта Народного банка Китая, эквивалент наличных. Пилотируется в отдельных городах, поддерживает офлайн-платежи без интернета. Иностранцы могут пользоваться, но нужен китайский номер для регистрации.'
      }
    },
    {
      title: { zh: '下载并注册数字人民币App', en: 'Download and register the e-CNY App', ru: 'Скачать и зарегистрировать приложение e-CNY' },
      desc: {
        zh: '在应用商店搜索"数字人民币"或"e-CNY"（App Store和各大安卓应用商店均有）。下载安装后，使用中国手机号注册，设置钱包密码。试点城市包括北京、上海、深圳、苏州、成都、西安、杭州、冬奥场景等。',
        en: 'Search "数字人民币" or "e-CNY" in app stores (available on App Store and major Android stores). After installing, register with your Chinese phone number and set a wallet password. Pilot cities include Beijing, Shanghai, Shenzhen, Suzhou, Chengdu, Xi\'an, Hangzhou, and Winter Olympics venues.',
        ru: 'Найдите "数字人民币" или "e-CNY" в магазинах приложений (App Store и основные магазины Android). После установки зарегистрируйтесь по китайскому номеру и установите пароль кошелька. Пилотные города: Пекин, Шанхай, Шэньчжэнь, Сучжоу, Чэнду, Сиань, Ханчжоу.'
      }
,      tip: {
        zh: '如果不在试点城市，可能无法开通钱包。可以先下载App查看是否支持你所在的城市。',
        en: 'If you\'re not in a pilot city, you may not be able to activate the wallet. Download the app first to check if your city is supported.',
        ru: 'Если вы не в пилотном городе, кошелёк может не активироваться. Сначала скачайте приложение и проверьте поддержку вашего города.'
      }
    },
    {
      title: { zh: '充值和使用', en: 'Top up and use', ru: 'Пополнение и использование' },
      desc: {
        zh: '开通钱包后，可以绑定银行卡进行"充钱包"操作。使用时，出示付款码或扫描商家二维码均可。数字人民币与微信/支付宝支付体验类似，但它是法定货币，商家不得拒收。',
        en: 'After activating the wallet, bind a bank card to top up. To pay, show your payment code or scan the merchant\'s QR code. The experience is similar to WeChat/Alipay, but e-CNY is legal tender — merchants cannot refuse it.',
        ru: 'После активации кошелька привяжите карту для пополнения. Для оплаты покажите код оплаты или отсканируйте QR-код продавца. Опыт похож на WeChat/Alipay, но e-CNY — законное платёжное средство, продавцы не могут отказать.'
      }
,      tip: {
        zh: '目前数字人民币不收取任何手续费（转账、充值、消费均免费），这是相比微信/支付宝的一大优势。',
        en: 'Currently, e-CNY charges no fees at all (transfers, top-ups, and payments are all free) — a significant advantage over WeChat/Alipay.',
        ru: 'В настоящее время e-CNY не взимает комиссий (переводы, пополнения и платежи бесплатны) — значительное преимущество перед WeChat/Alipay.'
      }
    }
  ],
  faq: [
    { q: { zh: '所有城市都能用吗？', en: 'Available in all cities?', ru: 'Доступно во всех городах?' }, a: { zh: '目前仅在试点城市可用，包括北京、上海、深圳、成都、青岛等。具体范围可在App中查看。', en: 'Currently only in pilot cities including Beijing, Shanghai, Shenzhen, Chengdu, Qingdao. Check the app for the full list.', ru: 'Только в пилотных городах: Пекин, Шанхай, Шэньчжэнь, Циндао и др.' } },
  ],
  nextGuides: ['alipay-full-guide', 'wechat-pay-guide', 'bank-transfer']
};