// Guide: 国内机票预订
export default {
  id: 'flight-booking',
  category: 'transport',
  icon: '✈️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 20,
  apps: ["ctrip"],
  prerequisites: [],
  tags: ["flight", "booking", "travel"],
  title: { zh: '国内机票预订', en: 'Domestic Flight Booking', ru: 'Бронирование внутренних рейсов' },
  summary: { zh: '携程/去哪儿订机票全流程：比价、选座、值机、行李', en: 'Book domestic flights via Ctrip/Qunar: compare, seat selection, check-in, baggage', ru: 'Бронирование через Ctrip/Qunar: сравнение, места, регистрация, багаж' },
  intro: { zh: '中国国内航线发达，机票价格常比高铁便宜。通过携程或去哪儿即可轻松预订。', en: 'China has extensive domestic routes, often cheaper than high-speed rail. Book easily via Ctrip or Qunar.', ru: 'Развитая сеть внутренних рейсов, часто дешевле поездов. Бронируйте через Ctrip или Qunar.' },
  preparation: { zh: ['携程或去哪儿App', '护照信息', '支付方式'], en: ['Ctrip or Qunar app', 'Passport info', 'Payment'], ru: ['Приложение Ctrip или Qunar', 'Паспорт', 'Оплата'] },
  steps: [
    {
      title: { zh: '订票与值机', en: 'Booking and Check-in', ru: 'Бронирование и регистрация' },
      desc: { zh: '📱 订票步骤：\n1. 打开携程/去哪儿 → 选择「机票」\n2. 输入出发/到达城市和日期\n3. 对比价格和时间\n4. 选择航班 → 填写乘客信息（护照）\n5. 选择座位（可选）\n6. 支付 → 收到电子行程单\n\n✅ 值机：\n• 航班起飞前24小时可在线值机\n• 携程App → 我的订单 → 在线值机 → 选座\n• 到机场也可柜台办理\n\n💡 廉航（春秋/九元/中联航）不含免费行李额，需另购', en: '📱 Booking: open Ctrip/Qunar → select flights → enter cities and date → compare → fill passenger (passport) → choose seat → pay\n\n✅ Check-in: available 24hrs before via app, or at airport counter\n\n💡 Budget airlines (Spring/9Air/China United) don\'t include free baggage', ru: '📱 Бронирование: Ctrip/Qunar → рейсы → города и дата → сравните → пассажир (паспорт) → оплата\n✅ Регистрация: за 24 часа через приложение\n💡 Бюджетные авиакомпании — багаж отдельно' },
    },
  ],
  faq: [
    { q: { zh: '外国护照能网上值机吗？', en: 'Can foreign passport holders check in online?', ru: 'Можно ли онлайн-регистрацию с иностранным паспортом?' }, a: { zh: '部分航司支持，但很多航司要求外国旅客到机场柜台办理值机。建议提前到机场，留出充足时间。', en: 'Some airlines support it, but many require foreign passengers to check in at the airport counter. Arrive early.', ru: 'Некоторые авиакомпании поддерживают, но многие требуют регистрацию на стойке. Приезжайте заранее.' } },
  ],
  nextGuides: ['train-ticket', 'intercity-travel', 'ctrip-guide']
};