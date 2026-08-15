// Guide: 地铁乘坐指南
export default {
  id: 'metro-guide',
  category: 'transport',
  icon: '🚇',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["metro", "subway", "transport"],
  title: { zh: '地铁乘坐指南', en: 'Metro Guide', ru: 'Пользование метро' },
  summary: { zh: '中国城市地铁乘坐全流程：购票、安检、乘车、换乘', en: 'Complete metro riding guide: tickets, security, riding, transferring', ru: 'Полный гид по метро: билеты, досмотр, поездка, пересадки' },
  intro: { zh: '中国主要城市都有地铁系统，是最便捷的出行方式之一。本指南帮你掌握乘坐地铁的全部流程。', en: 'Major Chinese cities have metro systems, one of the most convenient ways to get around.', ru: 'Крупные города Китая имеют метро — один из удобных видов транспорта.' },
  preparation: { zh: ['手机（用于扫码或App购票）', '零钱（备用）'], en: ['Phone (for QR code or app)', 'Small change (backup)'], ru: ['Телефон (для QR или приложения)', 'Мелочь (запас)'] },
  steps: [
    {
      title: { zh: '购票或准备交通卡', en: 'Buy a ticket or prepare transit card', ru: 'Покупка билета или подготовка карты' },
      desc: {
        zh: '地铁站可通过以下方式进站：①自动售票机买单程票（有英文界面，选择目的地站即可）；②用已开通的交通卡直接刷卡进站；③打开支付宝「出行」扫码进站。单程票票价一般2-9元，根据距离计算。',
        en: 'Enter metro via: ① ticket machines (English interface available, select destination); ② transit card tap at gate; ③ Alipay Travel QR scan. Single-journey tickets cost 2-9 yuan depending on distance.',
        ru: 'Войдите в метро через: ① автоматы (есть английский, выберите станцию); ② транспортную карту; ③ QR-код Alipay «Поездка». Билет стоит 2-9 юаней.'
      }
,      tip: {
        zh: '高峰时段（早7-9点、晚5-7点）售票机可能排长队，建议用交通卡或扫码直接进站。',
        en: 'During rush hours (7-9am, 5-7pm) machines may have long queues — use transit card or QR to skip.',
        ru: 'В часы пик (7-9, 17-19) автоматы могут иметь очереди — используйте карту или QR.'
      }
    },
    {
      title: { zh: '安检与进站', en: 'Security check and entry', ru: 'Досмотр и вход' },
      desc: {
        zh: '所有行李需通过X光安检机，人身需过安检门。液体可能需要开盖检查。安检通过后，在闸机处刷卡或扫码进站。进站后根据指示牌找到对应线路方向。',
        en: 'All bags go through X-ray scanners, walk through security gate. Liquids may need to be opened for inspection. After security, tap card or scan QR at the gate. Follow signs to find your line and direction.',
        ru: 'Все сумки через рентген, пройдите через ворота досмотра. Жидкости могут потребовать открытия. После досмотра приложите карту или QR на турникете. Следуйте указателям к вашей линии.'
      }
    },
    {
      title: { zh: '乘车与换乘', en: 'Ride and transfer', ru: 'Поездка и пересадка' },
      desc: {
        zh: '地铁站内标识清晰，跟着线路颜色和方向标识走。换乘站注意看头顶标识牌，通常有彩色箭头指引换乘方向。列车到站时先下后上，高峰期可能需要等2-3趟才能挤上去。',
        en: 'Metro stations have clear signage — follow line colors and direction markers. At transfer stations, watch overhead signs with colored arrows. Let passengers exit first, then board. During rush hour, you may need to wait 2-3 trains.',
        ru: 'На станциях чёткие указатели — следуйте цветам линий. На пересадочных станциях смотрите на указатели со стрелками. Сначала выпускайте пассажиров, потом садитесь. В час пик возможно ждать 2-3 поезда.'
      }
,      tip: {
        zh: '记住你的目的站名（中文），这样看车上地图和听报站更准确。',
        en: 'Memorize your destination station name in Chinese to follow onboard maps and audio announcements.',
        ru: 'Запомните название станции назначения на китайском для ориентирования по карте и объявлениям.'
      }
    },
    {
      title: { zh: '出站', en: 'Exit the station', ru: 'Выход со станции' },
      desc: {
        zh: '到达目的站后，跟随「出站」标识走到闸机。用交通卡刷卡或扫码出站（单程票投入回收口）。部分站有多个出口，根据出口编号选择离目的地最近的出口。',
        en: 'After arriving, follow Exit signs to the gates. Tap transit card or scan QR to exit (insert single-journey tickets into slot). Some stations have multiple exits — choose the one closest to your destination.',
        ru: 'После прибытия следуйте указателям «Выход» к турникетам. Приложите карту или QR (одноразовый билет вставьте в щель). На некоторых станциях несколько выходов — выберите ближайший к цели.'
      }
,      tip: {
        zh: '出站后如果迷路，大多数地铁站出口附近都有周边地图和方向指示。',
        en: 'If lost after exiting, most metro exits have area maps and direction indicators nearby.',
        ru: 'Если заблудились, у большинства выходов есть карты местности и указатели направлений.'
      }
    }
  ],
  faq: [
    { q: { zh: '不会中文怎么买票？', en: 'How to buy tickets without Chinese?', ru: 'Как купить билет без знания китайского?' }, a: { zh: '大部分自动售票机有英文界面。也可以用支付宝/微信的地铁乘车码直接扫码进站，无需购票。', en: 'Most vending machines have English interface. You can also use Alipay/WeChat metro QR code to scan directly.', ru: 'Большинство автоматов имеют английский интерфейс. Или используйте QR-код метро в Alipay/WeChat.' } },
  ],
  nextGuides: ['bus-guide', 'transport-card', 'bike-sharing']
};