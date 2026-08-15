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
      title: { zh: '了解中国素食情况', en: 'Understand vegetarian options in China', ru: 'Вегетарианство в Китае' },
      desc: {
        zh: '中国的素食文化非常悠久，有专门的"素菜馆"（素食餐厅）。但要注意：普通餐厅的"素菜"可能含有动物成分——蚝油、鱼露、猪油、鸡精（含鸡肉成分）在中国烹饪中广泛使用。真正的严格素食者需要特别沟通。',
        en: 'China has a long vegetarian food culture with dedicated "素菜馆" (vegetarian restaurants). However, "vegetable dishes" at regular restaurants may contain animal ingredients — oyster sauce, fish sauce, lard, and chicken powder (contains chicken) are widely used. Strict vegetarians need to communicate carefully.',
        ru: 'В Китае давняя культура вегетарианства с 전용 "素菜馆" (вегетарианские рестораны). Однако "овощные блюда" в обычных ресторанах могут содержать животные ингредиенты — устричный соус, рыбный соус, свиной жир, куриный порошок широко используются. Строгим вегетарианцам нужно тщательно объяснять.'
      }
    },
    {
      title: { zh: '找到素食友好的餐厅', en: 'Find vegetarian-friendly restaurants', ru: 'Поиск вегетарианских ресторанов' },
      desc: {
        zh: '①专门的素菜馆/素餐厅：搜索"素食"或"素菜"（大众点评App搜索最好用）；②佛教寺庙附近的素斋馆（如杭州灵隐寺周边）；③西方餐厅（沙拉吧、意面等）；④大学食堂通常有"素菜窗口"（但可能有交叉污染）。',
        en: '① Dedicated vegetarian restaurants: search "素食" or "素菜" (best on Dianping app); ② Buddhist temple vegetarian halls (e.g., near Hangzhou\'s Lingyin Temple); ③ Western restaurants (salad bars, pasta, etc.); ④ University canteens usually have a "vegetable window" (but possible cross-contamination).',
        ru: '① Специализированные рестораны: ищите "素食" или "素菜" (лучше в приложении Dianping); ② Вегетарианские залы при буддийских храмах; ③ Западные рестораны (салаты, паста); ④ В столовых вузов есть "овощные окна" (возможно перекрёстное загрязнение).'
      }
,      tip: {
        zh: '下载" HappyCow "App（全球素食餐厅指南），在中国主要城市都能找到标注的素食友好餐厅。',
        en: 'Download the "HappyCow" app (global vegetarian restaurant guide) to find veg-friendly restaurants in major Chinese cities.',
        ru: 'Скачайте приложение "HappyCow" — глобальный гид по вегетарианским ресторанам в крупных городах Китая.'
      }
    },
    {
      title: { zh: '点餐时的关键表达', en: 'Key phrases when ordering', ru: 'Ключевые фразы при заказе' },
      desc: {
        zh: '在普通餐厅点菜时，可以说：
• "我是严格的素食者（纯素），不吃任何肉类、蛋、奶" — I\'m a strict vegan
• "请不要放蚝油、鱼露、鸡精" — Please don\'t use oyster sauce, fish sauce, chicken powder
• "请用植物油烹饪" — Please cook with vegetable oil
• "豆腐和蔬菜，不放肉" — Tofu and vegetables, no meat
如果沟通困难，可以把这些句子翻译成中文保存到手机里展示。',
        en: 'At regular restaurants, say:
• "我是严格的素食者（纯素），不吃任何肉类、蛋、奶" — I\'m a strict vegan
• "请不要放蚝油、鱼露、鸡精" — No oyster sauce, fish sauce, chicken powder
• "请用植物油烹饪" — Cook with vegetable oil
• "豆腐和蔬菜，不放肉" — Tofu and vegetables, no meat
Save these Chinese phrases on your phone to show if communication is difficult.',
        ru: 'В обычном ресторане скажите:
• "我是纯素" — строгий веган
• "请不要放蚝油、鱼露、鸡精" — без устричного соуса, рыбного соуса, куриного порошка
• "请用植物油烹饪" — готовьте на растительном масле
• "豆腐和蔬菜，不放肉" — тофу и овощи, без мяса
Сохраните эти фразы на телефоне для показа.'
      }
,      tip: {
        zh: '建议：最安全的方式是去专门的素食餐厅，或者在超市购买新鲜食材自己烹饪。大型超市（盒马、Ole\'）有丰富的素食食材选择。',
        en: 'Tip: Safest option is dedicated vegetarian restaurants or buying fresh ingredients at supermarkets to cook yourself. Major supermarkets (Hema, Ole\') have great vegetarian ingredient selections.',
        ru: 'Совет: безопаснее всего в вегетарианских ресторанах или готовить самому из свежих продуктов. В супермаркетах (Hema, Ole\') большой выбор вегетарианских ингредиентов.'
      }
    }
  ],
  faq: [
    { q: { zh: '怎么跟服务员说我是素食者？', en: 'How to tell staff I\'m vegetarian?', ru: 'Как сказать, что я вегетарианец?' }, a: { zh: '说「我是素食者」（Wǒ shì sùshí zhě）或出示手机上的文字。也可以说「不要肉、不要鱼、不要海鲜」。', en: 'Say "我是素食者" (Wǒ shì sùshí zhě) or show text on phone. Also: "不要肉、不要鱼、不要海鲜" (no meat, fish, or seafood).', ru: 'Скажите "我是素食者" или покажите текст. Также: "不要肉、不要鱼、不要海鲜".' } },
  ],
  nextGuides: ['halal-food', 'dietary-restrictions', 'restaurant-ordering']
};