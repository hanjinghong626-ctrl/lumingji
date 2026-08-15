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
      title: { zh: '下载购票App', en: 'Download the ticket booking app', ru: 'Скачайте приложение для покупки билетов' },
      desc: {
        zh: '下载「铁路12306」App（官方购票平台），这是中国火车票唯一的官方渠道。也可在支付宝内搜索「12306」直接进入小程序。注册账号时需要护照信息，支持外国人注册。',
        en: 'Download Railway 12306 app — the official railway ticket platform. You can also search 12306 in Alipay to access the mini-program. Registration requires passport info and supports foreign users.',
        ru: 'Скачайте приложение «Railway 12306» — официальная платформа продажи билетов. Также можно найти «12306» в Alipay. Для регистрации требуется паспорт, поддерживается регистрация иностранцев.'
      }
,      tip: {
        zh: '12306 App有英文界面选项，在设置中切换语言。',
        en: 'The 12306 app has an English interface option — switch language in settings.',
        ru: 'В приложении 12306 есть английский интерфейс — переключите язык в настройках.'
      }
    },
    {
      title: { zh: '搜索车次与选择座位', en: 'Search trains and select seats', ru: 'Поиск поездов и выбор мест' },
      desc: {
        zh: '输入出发站、到达站和日期，点击搜索。结果会显示所有车次、时间、历时和余票。高铁G字头最快（如北京到上海4.5小时），D字头动车次之，K/Z字头普速最慢但便宜。选择车次后，选座位类型：商务座、一等座、二等座、硬卧/软卧。',
        en: 'Enter departure station, arrival station, and date, then search. Results show all trains, times, duration, and availability. G-series high-speed trains are fastest (Beijing to Shanghai 4.5hrs), D-series next, K/Z-series slowest but cheapest. After choosing, pick seat type: Business, First, Second, or Sleeper.',
        ru: 'Введите станцию отправления, прибытия и дату. Результаты покажут все поезда, время и наличие билетов. Самые быстрые — поезда G (Пекин-Шанхай 4,5ч), затем D, самые медленные но дешёвые — K/Z. После выбора поезда выберите тип места: бизнес, первый, второй класс или спальный.'
      }
,      tip: {
        zh: '学生证可买学生票（硬座半价、硬卧减价），每学年需到车站窗口核验一次。',
        en: 'Student ID gets student tickets (hard seat half-price, hard sleeper discount). Verify at a station window once per academic year.',
        ru: 'По студенческому удостоверению можно купить студенческий билет (жёсткое сидение — полцены). Подтверждайте раз в учебный год в окне станции.'
      }
    },
    {
      title: { zh: '填写乘客信息与支付', en: 'Enter passenger info and pay', ru: 'Заполните данные пассажира и оплатите' },
      desc: {
        zh: '添加乘车人信息（姓名需与护照一致），选择保险（可不买），提交订单。支持支付宝、微信支付。付款成功后会生成电子客票（二维码），无需取纸质票。',
        en: 'Add passenger information (name must match passport exactly), choose insurance (optional), and submit order. Payment via Alipay or WeChat Pay. After payment, an electronic ticket (QR code) is generated — no paper ticket needed.',
        ru: 'Добавьте данные пассажира (имя должно точно соответствовать паспорту), выберите страховку (необязательно) и отправьте заказ. Оплата через Alipay или WeChat Pay. После оплаты генерируется электронный билет (QR-код).'
      }
,      tip: {
        zh: '姓名填写格式注意：按护照机读区顺序填写，姓和名之间不要加空格。',
        en: 'Name format matters: follow the machine-readable zone order on your passport, no spaces between surname and given name.',
        ru: 'Важно: следуйте порядку машиночитаемой зоны паспорта, без пробелов между фамилией и именем.'
      }
    },
    {
      title: { zh: '乘车与出站', en: 'Board the train and exit', ru: 'Посадка и выход' },
      desc: {
        zh: '出发当天，持护照原件（或电子客票二维码）过安检和人工验票通道进站（部分高铁站支持刷护照自助进站）。找到对应候车区和检票口，听到广播后排队检票上车。到站后刷护照或二维码出站。',
        en: 'On departure day, bring your original passport (or e-ticket QR code) through security and manual ticket check (some high-speed stations support passport self-check). Find your waiting area and gate, queue when boarding announcement plays. At arrival, scan passport or QR to exit.',
        ru: 'В день отправления пройдите с оригиналом паспорта (или QR-кодом) через досмотр и ручную проверку (некоторые станции поддерживают самостоятельную проверку по паспорту). Найдите зону ожидания и выход, встаньте в очередь при объявлении посадки. По прибытии отсканируйте паспорт для выхода.'
      }
,      tip: {
        zh: '建议提前1小时到达车站，留足安检和找检票口的时间。',
        en: 'Arrive at the station 1 hour early to allow time for security and finding your gate.',
        ru: 'Прибывайте на станцию за 1 час, чтобы успеть пройти досмотр и найти выход.'
      }
    }
  ],
  faq: [
    { q: { zh: '外国人能买学生票吗？', en: 'Can foreigners get student tickets?', ru: 'Могут ли иностранцы купить студенческие билеты?' }, a: { zh: '可以。持有效学生证并通过12306学生认证的外国留学生，可以享受学生票优惠。每年有次数限制（通常4次单程）。', en: 'Yes. International students with valid student ID and 12306 verification can get student discounts. Limited to usually 4 one-way trips per year.', ru: 'Да. С действующим студенческим билетом и верификацией 12306. Обычно 4 поездки в год.' } },
  ],
  nextGuides: ['intercity-travel', 'flight-booking', 'ride-hailing']
};