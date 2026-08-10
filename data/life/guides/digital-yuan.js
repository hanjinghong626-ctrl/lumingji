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
      title: { zh: '开通与使用', en: 'Setup and Usage', ru: 'Открытие и использование' },
      desc: { zh: '1. 下载「数字人民币」官方App\n2. 手机号注册\n3. 选择运营机构（工行、农行等）\n4. 护照实名认证\n5. 设置密码\n\n💡 与支付宝/微信的区别：\n• 数字人民币是钱本身（法定货币）\n• 支持双离线支付（没网也能用）\n• 支付宝/微信是装钱的钱包工具', en: '1. Download "数字人民币" official app\n2. Register with phone\n3. Select institution (ICBC, ABC, etc.)\n4. Passport verification\n5. Set PIN\n\n💡 Difference from Alipay/WeChat:\n• e-CNY IS money (legal tender)\n• Supports dual offline payment (works without internet)\n• Alipay/WeChat are wallets that hold money', ru: '1. Скачайте "数字人民币"\n2. Регистрация\n3. Выберите банк\n4. Верификация по паспорту\n5. Пароль\n\n💡 Отличие: e-CNY — это деньги (законное средство). Alipay/WeChat — кошельки.' },
    },
  ],
  faq: [
    { q: { zh: '所有城市都能用吗？', en: 'Available in all cities?', ru: 'Доступно во всех городах?' }, a: { zh: '目前仅在试点城市可用，包括北京、上海、深圳、成都、青岛等。具体范围可在App中查看。', en: 'Currently only in pilot cities including Beijing, Shanghai, Shenzhen, Chengdu, Qingdao. Check the app for the full list.', ru: 'Только в пилотных городах: Пекин, Шанхай, Шэньчжэнь, Циндао и др.' } },
  ],
  nextGuides: ['alipay-full-guide', 'wechat-pay-guide', 'bank-transfer']
};