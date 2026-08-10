// Guide: 购买火车票/高铁票
export default {
  id: 'train-ticket',
  category: 'transport',
  icon: '🚄',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 20,
  apps: ["12306"],
  prerequisites: [],
  tags: ["train", "\u9ad8\u94c1", "transport"],
  title: { zh: '购买火车票/高铁票', en: 'Buy Train/High-speed Rail Tickets', ru: 'Покупка билетов на поезд' },
  summary: { zh: '12306购票、高铁乘坐、学生票优惠全流程', en: '12306 booking, high-speed rail riding, student ticket discounts', ru: 'Бронирование через 12306, скоростные поезда, студенческие билеты' },
  intro: { zh: '中国高铁网络全球最大，出行首选。通过12306 App即可购票，非常方便。', en: 'China has the world\'s largest high-speed rail network. Book via 12306 app — very convenient.', ru: 'Китай имеет крупнейшую в мире сеть скоростных поездов. Бронируйте через 12306.' },
  preparation: { zh: ['12306 App已注册', '身份证件（护照）', '支付方式'], en: ['12306 app registered', 'ID (passport)', 'Payment method'], ru: ['Приложение 12306', 'Паспорт', 'Способ оплаты'] },
  steps: [
    {
      title: { zh: '12306购票', en: 'Book via 12306', ru: 'Бронирование через 12306' },
      desc: { zh: '📱 12306 App购票：\n1. 登录12306 → 选择出发站和到达站\n2. 选择日期 → 搜索车次\n3. 选择席别（二等座/一等座/商务座）\n4. 添加乘客（护照信息）\n5. 支付（支付宝/微信）\n6. 获得电子票（二维码或身份证）\n\n🚄 席别对比：\n• 二等座：标准座位，性价比高\n• 一等座：更宽敞，4座一排\n• 商务座：可躺平，含餐饮\n\n💡 学生票：部分线路有75折优惠，需学生证认证', en: '📱 12306 App booking:\n1. Login → select origin and destination\n2. Choose date → search trains\n3. Select class (2nd/1st/business)\n4. Add passenger (passport)\n5. Pay (Alipay/WeChat)\n6. Get e-ticket (QR or ID)\n\n🚄 Classes:\n• 2nd class: standard, good value\n• 1st class: wider, 4 seats per row\n• Business: lie-flat, meals included\n\n💡 Student tickets: 25% off on some routes, need student ID verification', ru: '📱 12306:\n1. Войти → выбрать станции\n2. Дата → поиск\n3. Класс (2-й/1-й/бизнес)\n4. Пассажир (паспорт)\n5. Оплата\n6. Электронный билет\n\n🚄 Классы: 2-й стандарт, 1-й просторнее, бизнес — с кроватью\n💡 Студенческие: -25% на некоторых маршрутах' },
    },
  ],
  faq: [
    { q: { zh: '外国人能买学生票吗？', en: 'Can foreigners get student tickets?', ru: 'Могут ли иностранцы купить студенческие билеты?' }, a: { zh: '可以。持有效学生证并通过12306学生认证的外国留学生，可以享受学生票优惠。每年有次数限制（通常4次单程）。', en: 'Yes. International students with valid student ID and 12306 verification can get student discounts. Limited to usually 4 one-way trips per year.', ru: 'Да. С действующим студенческим билетом и верификацией 12306. Обычно 4 поездки в год.' } },
  ],
  nextGuides: ['intercity-travel', 'flight-booking', 'ride-hailing']
};