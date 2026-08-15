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
      title: { zh: '了解中国电动车充电', en: 'Understand EV charging in China', ru: 'Зарядка электромобилей в Китае' },
      desc: {
        zh: '中国有全球最大的电动车充电网络。主要充电运营商：国家电网（e充电）、特来电、星星充电、小桔充电（滴滴旗下）。充电桩分为快充（DC，30-60分钟充至80%）和慢充（AC，6-8小时充满）。',
        en: 'China has the world\'s largest EV charging network. Major operators: State Grid (e-Charging), TELD, Star Charge, Xiaoju Charging (Didi). Charging piles come in fast charging (DC, 30-60 min to 80%) and slow charging (AC, 6-8 hours full charge).',
        ru: 'В Китае крупнейшая в мире сеть зарядных станций. Основные операторы: State Grid (e-Charging), TELD, Star Charge, Xiaoju Charging (Didi). Станции: быстрая зарядка (DC, 30-60 мин до 80%) и медленная (AC, 6-8 часов до полной).'
      }
    },
    {
      title: { zh: '查找充电桩', en: 'Find charging stations', ru: 'Поиск зарядных станций' },
      desc: {
        zh: '使用高德地图或百度地图搜索"充电站"，可以看到附近的充电站位置、空闲桩数、充电价格和距离。也可以下载专门的App：特来电、星星充电等。部分充电站需要注册对应App才能启动充电。',
        en: 'Use Amap (高德地图) or Baidu Maps to search "充电站" — see nearby stations, available piles, prices, and distance. You can also download dedicated apps: TELD, Star Charge, etc. Some stations require registering their app to start charging.',
        ru: 'Используйте Amap (高德地图) или Baidu Maps для поиска "充电站" — ближайшие станции, свободные стойки, цены, расстояние. Можно скачать приложения: TELD, Star Charge и др. Некоторые станции требуют регистрации.'
      }
,      tip: {
        zh: '充电价格因时段不同：高峰期约1.5-2元/度，低谷期（23:00-7:00）约0.5-0.8元/度。建议选择低谷期充电省钱。',
        en: 'Prices vary by time: peak hours ~¥1.5-2/kWh, off-peak (23:00-7:00) ~¥0.5-0.8/kWh. Charge during off-peak to save money.',
        ru: 'Цены зависят от времени: пик ~¥1,5-2/кВт·ч, минимум (23:00-7:00) ~¥0,5-0,8/кВт·ч. Заряжайте в минимальные часы для экономии.'
      }
    },
    {
      title: { zh: '启动充电和支付', en: 'Start charging and pay', ru: 'Запуск зарядки и оплата' },
      desc: {
        zh: '到达充电站后，将充电枪插入车辆充电口。打开App扫描充电桩上的二维码启动充电。实时可以在App中查看充电进度和费用。充电完成后App会通知。支付支持微信/支付宝。部分充电桩支持即插即充（无需扫码）。',
        en: 'At the station, plug the charging gun into your vehicle\'s charging port. Open the app and scan the QR code on the pile to start. Monitor charging progress and costs in the app in real-time. You\'ll be notified when done. Payment via WeChat/Alipay. Some piles support plug-and-charge (no scanning needed).',
        ru: 'На станции вставьте зарядный пистолет в порт. Откройте приложение и отсканируйте QR-код стойки. Отслеживайте прогресс и стоимость в реальном времени. Уведомление о завершении. Оплата через WeChat/Alipay. Некоторые стойки поддерживают plug-and-charge.'
      }
,      tip: {
        zh: '注意：充电时车辆会锁住充电口，无法拔出。充满后及时移走车辆，部分站点超时占位会收取额外费用。',
        en: 'Note: The vehicle locks the charging port during charging — it cannot be unplugged. Move the car promptly after charging; some stations charge extra for overstaying.',
        ru: 'Примечание: во время зарядки порт блокируется. После зарядки своевременно уберите автомобиль; некоторые станции берут плату за простое.'
      }
    }
  ],
  faq: [
    { q: { zh: '外国电动车能在中国充电吗？', en: 'Can foreign EVs charge in China?', ru: 'Могут ли зарубежные электромобили заряжаться в Китае?' }, a: { zh: '中国使用国标GB/T充电接口，与欧美CCS/CHAdeMO不同。需要确认车辆支持国标或使用转接头。', en: 'China uses GB/T standard, different from CCS/CHAdeMO. Check if your vehicle supports GB/T or use an adapter.', ru: 'Китай использует стандарт GB/T, отличается от CCS/CHAdeMO. Проверьте совместимость.' } },
  ],
  nextGuides: ['drive-in-china', 'parking-guide', 'traffic-rules']
};