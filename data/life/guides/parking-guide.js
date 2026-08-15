// Guide: 停车指南
export default {
  id: 'parking-guide',
  category: 'transport',
  icon: '🅿️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["parking", "driving"],
  title: { zh: '停车指南', en: 'Parking Guide', ru: 'Парковка' },
  summary: { zh: '中国城市停车规则、停车场查找与缴费方法', en: 'Parking rules, finding lots, and payment in Chinese cities', ru: 'Правила парковки, поиск и оплата в городах Китая' },
  intro: { zh: '中国城市停车位紧张，了解停车规则和付费方式很重要。', en: 'Parking spaces are tight in Chinese cities. Understanding rules and payment is important.', ru: 'Парковочных мест мало. Важно знать правила и оплату.' },
  preparation: { zh: ['地图App（查找停车场）'], en: ['Map app (find parking)'], ru: ['Карта (поиск парковки)'] },
  steps: [
    {
      title: { zh: '了解中国停车规则', en: 'Understand parking rules in China', ru: 'Правила парковки в Китае' },
      desc: {
        zh: '中国城市停车管理较严格。路边停车需在划定的收费停车位（白色标线）内停放，超时或违停会被罚款（通常200元）。商场、写字楼、学校通常有地下停车场，收费约5-15元/小时。部分城市有智慧停车App可以查看空位。',
        en: 'Parking management in Chinese cities is strict. Street parking must be in marked paid spaces (white lines). Illegal parking can result in ¥200 fines. Malls, offices, and schools usually have underground lots at ~¥5-15/hour. Some cities have smart parking apps to check availability.',
        ru: 'Парковка в китайских городах строго регулируется. Уличная парковка только на размеченных платных местах (белые линии). Нарушение — штраф ~¥200. ТЦ, офисы и вузы обычно имеют подземные парковки ~¥5-15/час. В некоторых городах есть приложения для проверки свободных мест.'
      }
    },
    {
      title: { zh: '找到停车位并停车', en: 'Find a parking spot and park', ru: 'Поиск места и парковка' },
      desc: {
        zh: '使用高德/百度地图搜索"停车场"，导航到最近的停车场。进入停车场时取卡或扫描车牌识别入场。找空位停车时注意方向箭头指示（必须按箭头方向停车）。停好后记得锁车、关窗、带走贵重物品。',
        en: 'Use Amap/Baidu Maps to search "停车场" and navigate to the nearest lot. Enter by taking a card or license plate recognition. Follow directional arrows when finding a spot (must park in the indicated direction). After parking: lock car, close windows, take valuables.',
        ru: 'Используйте Amap/Baidu Maps для поиска "停车场". Въезд по карте или распознаванию номера. Следуйте стрелкам при поиске места (парковка по направлению стрелки). После парковки: заблокируйте авто, закройте окна, заберите ценные вещи.'
      }
,      tip: {
        zh: '很多停车场有"残疾人车位"（蓝色标识），非残疾人占用会被重罚。另外注意不要占用电动车充电车位（绿色标识），除非你在充电。',
        en: 'Don\'t park in "disabled spaces" (blue signs) — heavy fines for non-disabled drivers. Also avoid EV charging spots (green signs) unless you\'re actually charging.',
        ru: 'Не паркуйтесь на "местах для инвалидов" (синие знаки) — крупные штрафы. Также не занимайте места для зарядки EV (зелёные знаки), если не заряжаетесь.'
      }
    },
    {
      title: { zh: '缴费出场', en: 'Pay and exit', ru: 'Оплата и выезд' },
      desc: {
        zh: '离开停车场时，在出口处刷卡或扫描缴费二维码。大部分停车场支持微信/支付宝扫码支付，也支持ETC（不停车电子收费）。缴费后栏杆自动抬起。部分商场消费满一定金额可以免费停车（购物小票去服务台兑换停车券）。',
        en: 'When leaving, swipe your card or scan the payment QR code at the exit. Most lots support WeChat/Alipay scan payment or ETC (electronic toll collection). The gate opens automatically after payment. Some malls offer free parking with minimum purchase (exchange receipt for parking voucher at service desk).',
        ru: 'При выезде оплатите картой или QR-кодом. Большинство парковок принимают WeChat/Alipay или ETC (автоматическая оплата). Шлагбаум поднимается после оплаты. В некоторых ТЦ бесплатная парковка при покупке (обменяйте чек на талон).'
      }
,      tip: {
        zh: '建议下载"ETCP停车"或"停简单"App，可以提前缴费、查找车位，避免排队。长期停车可以办理月卡（约300-800元/月，因城市而异）。',
        en: 'Download "ETCP Parking" or "停简单" app for advance payment and spot finding. For long-term parking, get a monthly pass (~¥300-800/month, varies by city).',
        ru: 'Скачайте приложение "ETCP" или "停简单" для предварительной оплаты и поиска мест. Для постоянной парковки — месячный абонемент (~¥300-800/мес, зависит от города).'
      }
    }
  ],
  faq: [
    { q: { zh: '路边停车怎么收费？', en: 'How does roadside parking work?', ru: 'Как оплачивать парковку на обочине?' }, a: { zh: '路边停车位通常有计时器或管理员。停好后扫码缴费，或在管理员引导下缴费。部分城市有免费时段（如夜间）。', en: 'Roadside spots have timers or attendants. Scan QR to pay, or pay the attendant. Some cities offer free nighttime parking.', ru: 'Таймеры или охранники. Сканируйте QR или платите охраннику. В некоторых городах ночью бесплатно.' } },
  ],
  nextGuides: ['drive-in-china', 'traffic-rules', 'ev-charging']
};