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
      title: { zh: '选择订票平台', en: 'Choose a booking platform', ru: 'Выбор платформы для бронирования' },
      desc: {
        zh: '留学生常用的订票平台：①携程（Trip.com英文版，最全的中国航线）；②去哪儿/飞猪（价格比较功能好）；③航司官网（国航airchina.com、东航ceair.com、南航csair.com，有时有学生优惠）。国际航班建议多平台比价。',
        en: 'Popular platforms for students: ① Trip.com (English version, most comprehensive for Chinese routes); ② Qunar/Fliggy (good price comparison); ③ Airline websites (Air China airchina.com, China Eastern ceair.com, China Southern csair.com — sometimes offer student discounts). For international flights, compare across platforms.',
        ru: 'Популярные платформы для студентов: ① Trip.com (англ. версия, самые полные маршруты по Китаю); ② Qunar/Fliggy (хорошее сравнение цен); ③ Сайты авиакомпаний (Air China, China Eastern, China Southern — иногда скидки для студентов). Для международных рейсов сравнивайте цены на разных платформах.'
      }
    },
    {
      title: { zh: '搜索和比较航班', en: 'Search and compare flights', ru: 'Поиск и сравнение рейсов' },
      desc: {
        zh: '输入出发城市、到达城市和日期，点击搜索。结果按价格或时间排序。注意查看：①是否含行李额度（廉价航空如春秋航空不含免费托运行李）；②是否为中转航班（价格低但耗时长）；③出发/到达机场（北京有首都PEK和大兴PKX两个机场）。',
        en: 'Enter departure city, destination, and dates, then search. Results sort by price or duration. Check: ① Baggage allowance (budget airlines like Spring Airlines don\'t include free checked bags); ② Whether it\'s a connecting flight (cheaper but longer); ③ Departure/arrival airports (Beijing has PEK Capital and PKX Daxing).',
        ru: 'Введите город вылета, прилёта и даты, нажмите поиск. Результаты сортируются по цене или времени. Обратите внимание: ① Включён ли багаж (бюджетные авиакомпании, как Spring Airlines, не включают бесплатный багаж); ② Пересадки (дешевле, но дольше); ③ Аэропорты вылета/прилёта (в Пекине два: PEK и PKX).'
      }
,      tip: {
        zh: '学生票优惠：部分航司提供学生票（额外行李额度或折扣），在携程搜索时勾选"学生票"选项。',
        en: 'Student discounts: Some airlines offer student tickets (extra baggage or discount). On Trip.com, check the "Student Ticket" option when searching.',
        ru: 'Студенческие билеты: некоторые авиакомпании предлагают студенческие тарифы (доп. багаж или скидка). На Trip.com отметьте опцию "Student Ticket".'
      }
    },
    {
      title: { zh: '填写信息和支付', en: 'Fill in details and pay', ru: 'Заполнение данных и оплата' },
      desc: {
        zh: '选好航班后，填写乘机人信息（姓名需与护照完全一致，拼音）。选择座位（部分需付费）、行李额度。支付方式支持支付宝、微信、银行卡。国际航班部分平台支持外币支付。',
        en: 'After selecting a flight, enter passenger information (name must exactly match passport, in pinyin). Choose seats (some cost extra) and baggage allowance. Payment supports Alipay, WeChat Pay, bank cards. Some platforms accept foreign currency for international flights.',
        ru: 'После выбора рейса введите данные пассажира (имя должно точно совпадать с паспортом, латиницей). Выберите место (некоторые платные) и багаж. Оплата через Alipay, WeChat Pay, банковские карты. Для международных рейсов некоторые платформы принимают валюту.'
      }
,      tip: {
        zh: '姓名拼音顺序很重要：姓在前还是名在前，务必与护照机读区一致。比如护照上"ZHANG/WEI"就填ZHANG WEI。',
        en: 'Name order in pinyin matters: match exactly with the machine-readable zone on your passport. For example, if passport shows "ZHANG/WEI", enter ZHANG WEI.',
        ru: 'Порядок имени латиницей важен: должно точно совпадать с машиночитаемой зоной паспорта. Например, если в паспорте "ZHANG/WEI", вводите ZHANG WEI.'
      }
    },
    {
      title: { zh: '出票和值机', en: 'Ticketing and check-in', ru: 'Оформление билетов и регистрация' },
      desc: {
        zh: '支付成功后，电子客票行程单会发送到你的邮箱和手机。出发前24小时可在航司App或柜台办理值机选座。国内航班建议提前2小时到机场，国际航班提前3小时。记得携带护照原件（国内航班可用身份证）。',
        en: 'After payment, the e-ticket itinerary will be sent to your email and phone. Check in online via the airline app or at the counter 24 hours before departure. Arrive 2 hours early for domestic flights, 3 hours for international. Bring your passport (ID card accepted for domestic flights).',
        ru: 'После оплаты электронный билет придёт на email и телефон. Регистрация онлайн через приложение авиакомпании или на стойке за 24 часа до вылета. Приезжайте за 2 часа до внутренних рейсов, за 3 часа до международных. Возьмите паспорт (для внутренних рейсов подойдёт ID-карта).'
      }
,      tip: {
        zh: '如果行程有变，大部分机票可以改签（需补差价）或退票（可能收手续费）。廉价航空的退改签政策通常更严格，购买时务必看清。',
        en: 'If plans change, most tickets can be rescheduled (with fare difference) or refunded (with handling fees). Budget airlines usually have stricter policies — read carefully before purchasing.',
        ru: 'Если планы изменились, большинство билетов можно переоформить (с доплатой) или вернуть (с комиссией). У бюджетных авиакомпаний правила строже — внимательно читайте перед покупкой.'
      }
    }
  ],
  faq: [
    { q: { zh: '外国护照能网上值机吗？', en: 'Can foreign passport holders check in online?', ru: 'Можно ли онлайн-регистрацию с иностранным паспортом?' }, a: { zh: '部分航司支持，但很多航司要求外国旅客到机场柜台办理值机。建议提前到机场，留出充足时间。', en: 'Some airlines support it, but many require foreign passengers to check in at the airport counter. Arrive early.', ru: 'Некоторые авиакомпании поддерживают, но многие требуют регистрацию на стойке. Приезжайте заранее.' } },
  ],
  nextGuides: ['train-ticket', 'intercity-travel', 'ctrip-guide']
};