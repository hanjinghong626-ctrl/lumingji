// Guide: 大学食堂攻略
export default {
  id: 'canteen-guide',
  category: 'food',
  icon: '🍱',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["canteen", "campus", "food"],
  title: { zh: '大学食堂攻略', en: 'University Canteen Guide', ru: 'Университетская столовая' },
  summary: { zh: '食堂就餐流程、菜品选择、省钱技巧', en: 'Canteen process, dish selection, money-saving tips', ru: 'Процесс, выбор блюд, экономия' },
  intro: { zh: '大学食堂是最经济实惠的就餐选择，菜品丰富、价格便宜。', en: 'University canteens are the most economical dining option with rich choices and low prices.', ru: 'Столовые вузов — самый экономичный вариант с большим выбором и низкими ценами.' },
  preparation: { zh: ['校园卡'], en: ['Campus card'], ru: ['Кампусная карта'] },
  steps: [
    {
      title: { zh: '食堂就餐', en: 'Dining at Canteen', ru: 'Обед в столовой' },
      desc: { zh: '🍱 就餐流程：\n1. 带校园卡到食堂\n2. 选择窗口排队\n3. 指菜点餐（或自选称重）\n4. 刷卡付费\n5. 找座位用餐\n6. 餐后自行收拾餐盘\n\n💰 费用：\n• 一餐约8-15元\n• 早餐更便宜（3-8元）\n\n💡 技巧：\n• 避开高峰（11:30-12:30）\n• 多尝试不同窗口\n• 部分食堂有留学生窗口（英文菜单）\n• 注意食堂营业时间（通常6:30-20:00）', en: '🍱 Process: bring card → choose window → point at dishes → tap card → eat → clean up\n\n💰 Cost: ¥8-15 per meal, breakfast ¥3-8\n\n💡 Tips: avoid peak (11:30-12:30), try different windows, some have international student windows with English menus, hours usually 6:30-20:00', ru: '🍱 Процесс: карта → окно → выберите → оплата → ешьте → уберите\n💰 8-15 ¥ за обед, завтрак 3-8 ¥\n💡 Избегайте пика (11:30-12:30), ищите окна для иностранцев' },
    },
  ],
  faq: [
    { q: { zh: '食堂有清真/素食窗口吗？', en: 'Are there halal/vegetarian windows?', ru: 'Есть ли халяль/вегетарианские окна?' }, a: { zh: '大部分有留学生的大学都设有清真窗口（标有"清真"或"回族"标识）。素食窗口较少，但大部分窗口有素菜。', en: 'Most universities with international students have halal windows (marked "清真" or "回族"). Vegetarian windows are rarer, but most windows have veggie dishes.', ru: 'Большинство вузов с иностранцами имеют халяль-окна ("清真"). Вегетарианских меньше, но есть овощные блюда.' } },
  ],
  nextGuides: ['food-delivery', 'restaurant-ordering', 'halal-food']
};