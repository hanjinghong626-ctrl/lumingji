// Guide: 清真饮食指南
export default {
  id: 'halal-food',
  category: 'food',
  icon: '🕌',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["halal", "dietary", "food"],
  title: { zh: '清真饮食指南', en: 'Halal Food Guide', ru: 'Халяльное питание' },
  summary: { zh: '在中国寻找清真餐厅的方法：标识识别、分布区域、推荐菜系', en: 'Finding halal restaurants: identification, distribution areas, recommended cuisines', ru: 'Поиск халяль-ресторанов:标识, районы, кухни' },
  intro: { zh: '中国有大量穆斯林人口，清真餐厅遍布各大城市。识别清真餐厅非常简单。', en: 'China has a large Muslim population. Halal restaurants are found in all major cities. Easy to identify.', ru: 'В Китае много мусульман. Халяль-рестораны есть во всех крупных городах.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '寻找清真餐厅', en: 'Find Halal Restaurants', ru: 'Поиск халяль-ресторанов' },
      desc: { zh: '🔍 识别方法：\n• 门口有「清真」标志（绿色，常带阿拉伯文）\n• 招牌上有「回」字\n• 大众点评搜索「清真」\n\n🍽️ 清真菜系：\n• 兰州拉面 — 全国最多，一碗面10-15元\n• 新疆菜 — 大盘鸡、烤串、馕\n• 回族菜 — 手抓饭、涮羊肉\n\n📍 集中区域：\n• 大学附近通常有清真餐厅\n• 城市中的回民街/穆斯林社区\n• 清真寺附近\n\n💡 清真食堂：大部分高校设有清真窗口', en: '🔍 Identification: green "清真" sign (often with Arabic), "回" character, search "清真" on Dianping\n\n🍽️ Halal cuisines:\n• Lanzhou noodles — most common, ¥10-15/bowl\n• Xinjiang — big chicken, kebabs, naan\n• Hui — hand pilaf, lamb hot pot\n\n📍 Locations: near universities, Muslim streets/communities, near mosques\n💡 Most universities have halal canteen windows', ru: '🔍 Идентификация: зелёный знак "清真", "回", поиск "清真" на Dianping\n🍽️ Кухни: лаомян Ланьчжоу, синьцзянская, хуэйская\n📍 Рядом с вузами, мусульманские улицы, мечети\n💡 В вузах — халяль-окна' },
    },
  ],
  faq: [
    { q: { zh: '清真餐厅含酒精吗？', en: 'Do halal restaurants serve alcohol?', ru: 'Подают ли алкоголь в халяль?' }, a: { zh: '正宗清真餐厅不提供含酒精饮品。部分非严格的可能有啤酒，但你可以明确要求不含酒精的饮品。', en: 'Authentic halal restaurants don\'t serve alcohol. Some relaxed ones may have beer, but you can request non-alcoholic drinks.', ru: 'Настоящие халяль-рестораны не подают алкоголь.' } },
  ],
  nextGuides: ['vegetarian-guide', 'russian-food', 'food-delivery']
};