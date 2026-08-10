// Guide: 公交车乘坐指南
export default {
  id: 'bus-guide',
  category: 'transport',
  icon: '🚌',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["bus", "transport"],
  title: { zh: '公交车乘坐指南', en: 'Bus Guide', ru: 'Пользование автобусом' },
  summary: { zh: '公交乘坐流程：查线路、上车刷卡/扫码、下车', en: 'Bus riding: check routes, board and pay, alight', ru: 'Автобус: маршруты, оплата, выход' },
  intro: { zh: '公交是中国最普及的公共交通，覆盖地铁不到的区域。票价通常1-2元，非常经济。', en: 'Buses are the most widespread public transport in China, covering areas beyond metro. Tickets usually ¥1-2.', ru: 'Автобусы — самый распространённый транспорт, покрывает зоны без метро. Билет 1-2 ¥.' },
  preparation: { zh: ['交通卡或手机支付'], en: ['Transit card or mobile payment'], ru: ['Транспортная карта или мобильная оплата'] },
  steps: [
    {
      title: { zh: '查线路与乘车', en: 'Check Routes & Ride', ru: 'Маршруты и поездка' },
      desc: { zh: '1. 用高德/百度地图查公交线路和到站时间\n2. 到站台等候，看到目标线路车来时招手\n3. 上车后刷卡或扫码（后门旁的刷卡机）\n4. 到站前按铃提示司机停车\n5. 从后门下车\n\n💡 部分城市前后门都有刷卡机，前后门都可上下\n💡 票价：大多数1-2元，部分长线路分段计价', en: '1. Use Amap/Baidu Maps for routes and arrival times\n2. Wait at stop, wave when bus arrives\n3. Board and tap card/QR at scanner\n4. Press bell before your stop\n5. Exit from rear door\n\n💡 Fare: most ¥1-2, some longer routes charge by distance', ru: '1. Маршруты через Amap/Baidu Maps\n2. Ждите на остановке\n3. Войдите и оплатите\n4. Нажмите звонок перед остановкой\n5. Выход через заднюю дверь' },
    },
  ],
  faq: [
    { q: { zh: '公交车有英文报站吗？', en: 'Do buses announce stops in English?', ru: 'Есть ли объявления остановок на английском?' }, a: { zh: '大城市主要线路有中英双语报站，但不是所有线路都有。建议用地图App跟踪位置，到站前准备下车。', en: 'Major city routes have bilingual announcements, but not all. Use map apps to track your location.', ru: 'В крупных городах — двуязычные объявления, но не на всех маршрутах. Отслеживайте через карты.' } },
  ],
  nextGuides: ['metro-guide', 'transport-card', 'bike-sharing']
};