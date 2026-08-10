// Guide: 素食者生存指南
export default {
  id: 'vegetarian-guide',
  category: 'food',
  icon: '🥬',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["vegetarian", "dietary", "food"],
  title: { zh: '素食者生存指南', en: 'Vegetarian Survival Guide', ru: 'Гид для вегетарианцев' },
  summary: { zh: '在中国吃素的方法：素食餐厅、点菜技巧、注意事项', en: 'Being vegetarian in China: veg restaurants, ordering tips, things to watch', ru: 'Вегетарианство в Китае: рестораны, заказ, что учесть' },
  intro: { zh: '中国有悠久的素食传统，但由于烹饪习惯，很多看似素菜的食物可能含有肉制品。', en: 'China has a long vegetarian tradition, but many seemingly veggie dishes may contain meat products due to cooking habits.', ru: 'В Китае долгая вегетарианская традиция, но многие блюда содержат мясо из-за особенностей готовки.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '素食技巧', en: 'Vegetarian Tips', ru: 'Советы вегетарианцам' },
      desc: { zh: '⚠️ 注意：中餐常用以下调料含肉：\n• 蚝油（oyster sauce）\n• 鱼露（fish sauce）\n• 猪油（lard）\n• 肉汤/鸡汤底\n\n✅ 安全选择：\n• 明确说「我吃素，不要肉和鱼」（Wǒ chī sù, bú yào ròu hé yú）\n• 点豆腐、青菜类\n• 素食餐厅（搜索「素食」）\n• 佛教寺院附近的素菜馆\n\n🍽️ 中国素食传统：\n• 佛教素食文化深厚\n• 部分寺庙有素斋（如少林寺）\n• 大城市有纯素/vegan餐厅', en: '⚠️ Watch out for: oyster sauce, fish sauce, lard, meat/stock broth in seemingly veggie dishes\n\n✅ Safe options:\n• Say "我吃素，不要肉和鱼" (I\'m vegetarian, no meat or fish)\n• Order tofu and vegetable dishes\n• Search "素食" for veg restaurants\n• Veg restaurants near Buddhist temples\n\n🍽️ Chinese veg tradition: deep Buddhist vegetarian culture, temple cuisine, vegan restaurants in big cities', ru: '⚠️ Осторожно: устричный соус, рыбный соус, свиной жир, мясной бульон\n✅ Скажите "我吃素" (я вегетарианец). Тофу, овощи, рестораны "素食", храмовая кухня' },
    },
  ],
  faq: [
    { q: { zh: '怎么跟服务员说我是素食者？', en: 'How to tell staff I\'m vegetarian?', ru: 'Как сказать, что я вегетарианец?' }, a: { zh: '说「我是素食者」（Wǒ shì sùshí zhě）或出示手机上的文字。也可以说「不要肉、不要鱼、不要海鲜」。', en: 'Say "我是素食者" (Wǒ shì sùshí zhě) or show text on phone. Also: "不要肉、不要鱼、不要海鲜" (no meat, fish, or seafood).', ru: 'Скажите "我是素食者" или покажите текст. Также: "不要肉、不要鱼、不要海鲜".' } },
  ],
  nextGuides: ['halal-food', 'dietary-restrictions', 'restaurant-ordering']
};