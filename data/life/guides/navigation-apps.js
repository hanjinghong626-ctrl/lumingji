// Guide: 地图导航使用
export default {
  id: 'navigation-apps',
  category: 'transport',
  icon: '🗺️',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: ["gaode-map"],
  prerequisites: [],
  tags: ["map", "navigation", "amap"],
  title: { zh: '地图导航使用', en: 'Map & Navigation Apps', ru: 'Навигация и карты' },
  summary: { zh: '高德/百度地图全面使用指南：导航、公交规划、周边搜索', en: 'Amap/Baidu Maps: navigation, transit planning, nearby search', ru: 'Amap/Baidu Maps: навигация, маршруты, поиск рядом' },
  intro: { zh: '在中国出行，地图App是必备工具。高德地图和百度地图功能强大，覆盖导航、公交、打车等。', en: 'Map apps are essential in China. Amap and Baidu Maps cover navigation, transit, ride-hailing, and more.', ru: 'Карточные приложения обязательны в Китае. Amap и Baidu Maps — навигация, транспорт, такси.' },
  preparation: { zh: ['高德地图或百度地图App'], en: ['Amap or Baidu Maps app'], ru: ['Приложение Amap или Baidu Maps'] },
  steps: [
    {
      title: { zh: '核心功能', en: 'Core Features', ru: 'Основные функции' },
      desc: { zh: '🗺️ 高德地图核心功能：\n\n1️⃣ 路线导航：\n• 支持驾车、步行、骑行、公交多种模式\n• 实时路况避堵\n• 语音导航（中文）\n\n2️⃣ 公交规划：\n• 输入目的地 → 推荐最优公交/地铁组合\n• 显示到站时间\n\n3️⃣ 周边搜索：\n• 搜索餐厅、酒店、ATM等\n• 显示评分和评价\n\n4️⃣ 打车集成：\n• 可直接在地图中叫滴滴\n\n💡 建议：外国人用高德地图，中文界面对留学生也够用。部分城市百度地图也不错。', en: '🗺️ Amap core features:\n\n1️⃣ Navigation: driving, walking, cycling, transit with real-time traffic\n2️⃣ Transit planning: optimal bus/metro combinations with arrival times\n3️⃣ Nearby search: restaurants, hotels, ATMs with ratings\n4️⃣ Integrated ride-hailing: call Didi directly\n\n💡 Tip: Amap recommended for foreigners. Chinese UI is manageable for students.', ru: '🗺️ Amap:\n1️⃣ Навигация: авто, пешком, вело, транспорт\n2️⃣ Маршруты: оптимальные комбинации\n3️⃣ Поиск рядом: рестораны, отели, ATM\n4️⃣ Вызов такси: Didi прямо из карты' },
    },
  ],
  faq: [
    { q: { zh: '有英文界面的地图App吗？', en: 'Any map app with English UI?', ru: 'Есть ли карта на английском?' }, a: { zh: 'Apple Maps在中国有英文界面，数据来自高德，质量不错。iPhone用户可以优先使用。', en: 'Apple Maps has English UI in China, powered by Amap data. Good quality for iPhone users.', ru: 'Apple Maps в Китае имеет английский интерфейс на данных Amap. Хорошее качество для iPhone.' } },
  ],
  nextGuides: ['metro-guide', 'bus-guide', 'ride-hailing']
};