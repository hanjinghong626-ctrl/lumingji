// Guide: 电动车充电
export default {
  id: 'ev-charging',
  category: 'transport',
  icon: '🔋',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["ev", "charging", "electric"],
  title: { zh: '电动车充电', en: 'EV Charging Guide', ru: 'Зарядка электромобилей' },
  summary: { zh: '新能源汽车充电桩查找与使用方法', en: 'How to find and use EV charging stations', ru: 'Поиск и использование зарядных станций' },
  intro: { zh: '中国是全球最大的新能源汽车市场，充电桩覆盖广泛。', en: 'China is the world\'s largest EV market with extensive charging infrastructure.', ru: 'Китай — крупнейший рынок электромобилей с развитой инфраструктурой зарядки.' },
  preparation: { zh: ['充电App（特来电/星星充电/国家电网）'], en: ['Charging app (TELD/Star Charge/State Grid)'], ru: ['Приложение зарядки (TELD/Star Charge/State Grid)'] },
  steps: [
    {
      title: { zh: '找桩与充电', en: 'Find and Charge', ru: 'Поиск и зарядка' },
      desc: { zh: '🔋 查找充电桩：\n• 高德/百度地图搜索「充电站」\n• 特来电、星星充电等App\n\n📱 充电步骤：\n1. 导航到充电站\n2. 选择空闲充电桩\n3. 插入充电枪\n4. 扫描桩上二维码启动充电\n5. 充满后拔枪归位\n\n💰 费用：约1-2元/度电（含服务费）\n💡 部分商场停车场充电免费', en: '🔋 Find stations: search "充电站" in Amap/Baidu, or use TEDL/Star Charge apps\n\n📱 Steps: navigate → choose available charger → plug in → scan QR → charge → unplug\n\n💰 Cost: ~¥1-2/kWh (incl. service)\n💡 Some malls offer free charging while parking', ru: '🔋 Поиск: "充电站" в Amap/Baidu, приложения TEDL/Star Charge\n📱 Шаги: навигация → выберите → подключите → QR → зарядка\n💰 ~1-2 ¥/кВт·ч\n💡 В некоторых ТЦ бесплатно' },
    },
  ],
  faq: [
    { q: { zh: '外国电动车能在中国充电吗？', en: 'Can foreign EVs charge in China?', ru: 'Могут ли зарубежные электромобили заряжаться в Китае?' }, a: { zh: '中国使用国标GB/T充电接口，与欧美CCS/CHAdeMO不同。需要确认车辆支持国标或使用转接头。', en: 'China uses GB/T standard, different from CCS/CHAdeMO. Check if your vehicle supports GB/T or use an adapter.', ru: 'Китай использует стандарт GB/T, отличается от CCS/CHAdeMO. Проверьте совместимость.' } },
  ],
  nextGuides: ['drive-in-china', 'parking-guide', 'traffic-rules']
};