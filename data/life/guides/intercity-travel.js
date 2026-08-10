// Guide: 城际出行规划
export default {
  id: 'intercity-travel',
  category: 'transport',
  icon: '🗺️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: ["ctrip"],
  prerequisites: [],
  tags: ["intercity", "travel", "planning"],
  title: { zh: '城际出行规划', en: 'Intercity Travel Planning', ru: 'Междугородние поездки' },
  summary: { zh: '高铁/飞机/大巴对比与城际出行最优方案', en: 'Compare train/plane/bus for intercity travel and find optimal routes', ru: 'Сравнение поезда/самолёта/автобуса для междугородних поездок' },
  intro: { zh: '中国城市间出行选择丰富：高铁、飞机、长途大巴各有优势。本指南帮你选择最优方案。', en: 'China offers rich intercity options: trains, flights, and long-distance buses each have advantages.', ru: 'Богатый выбор: поезда, самолёты, автобусы — у каждого свои преимущества.' },
  preparation: { zh: ['携程或12306 App', '确定目的地和预算'], en: ['Ctrip or 12306 app', 'Destination and budget decided'], ru: ['Ctrip или 12306', 'Цель и бюджет'] },
  steps: [
    {
      title: { zh: '选择最优交通方式', en: 'Choose Best Transport', ru: 'Выбор транспорта' },
      desc: { zh: '🚄 高铁（推荐）：\n• 500km以内首选\n• 速度快（300km/h）\n• 准点率高\n• 市中心到市中心\n\n✈️ 飞机：\n• 1000km以上考虑\n• 提前买可能更便宜\n• 加上候机时间，500km内不一定比高铁快\n\n🚌 大巴：\n• 高铁不通的小城市\n• 价格最便宜\n• 时间最长\n\n💡 对比方法：携程App可同时查看飞机和火车价格时间\n\n💰 学生优惠：火车票有学生价，飞机可关注特价', en: '🚄 High-speed rail (recommended):\n• Best for under 500km\n• Fast (300km/h), punctual\n• City center to city center\n\n✈️ Plane:\n• Consider for 1000km+\n• Book early for deals\n• Including check-in time, not faster than train for short distances\n\n🚌 Long-distance bus:\n• Cities without high-speed rail\n• Cheapest option\n• Slowest\n\n💡 Compare: Ctrip shows both flights and trains\n💰 Student discounts: train tickets and flight deals', ru: '🚄 Поезд (рекомендуется):\n• До 500 км\n• Быстро (300 км/ч), точно\n• Из центра в центр\n\n✈️ Самолёт:\n• От 1000 км\n• Раннее бронирование дешевле\n\n🚌 Автобус:\n• Без скоростной дороги\n• Самый дешёвый\n• Долгий\n💡 Ctrip сравнивает все варианты' },
    },
  ],
  faq: [
    { q: { zh: '怎么规划多城市行程？', en: 'How to plan multi-city trips?', ru: 'Как спланировать маршрут по нескольким городам?' }, a: { zh: '携程有「行程」功能，可添加多个目的地，自动规划路线。也可用高德地图的「路线规划」查看各段距离和时间。', en: 'Ctrip has a "trip" feature for multi-city planning. Amap also shows distances and times between segments.', ru: 'Ctrip имеет функцию маршрута для нескольких городов. Amap показывает расстояния.' } },
  ],
  nextGuides: ['train-ticket', 'flight-booking', 'travel-planning']
};