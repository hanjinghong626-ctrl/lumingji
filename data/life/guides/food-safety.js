// Guide: 饮食安全常识
export default {
  id: 'food-safety',
  category: 'food',
  icon: '🛡️',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["safety", "hygiene", "food"],
  title: { zh: '饮食安全常识', en: 'Food Safety Basics', ru: 'Основы пищевой безопасности' },
  summary: { zh: '留学生饮食安全注意事项：水质、食物过敏、食物中毒应对', en: 'Food safety tips: water quality, allergies, food poisoning response', ru: 'Безопасность: вода, аллергии, отравления' },
  intro: { zh: '初到中国，饮食环境不同，需要注意一些安全常识。', en: 'New to China\'s food environment — some safety basics to know.', ru: 'Новая пищевая среда — нужно знать основы безопасности.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '饮食安全要点', en: 'Food Safety Tips', ru: 'Советы по безопасности' },
      desc: { zh: '💧 饮水：\n• 自来水不建议直饮，烧开后饮用\n• 购买瓶装水（农夫山泉、怡宝等）\n• 餐厅提供的冰水也要注意\n\n🦐 食物过敏：\n• 中国菜可能含花生、芝麻等常见过敏原\n• 点餐时明确告知过敏原\n• 出示文字：「我对XX过敏」（Wǒ duì XX guòmǐn）\n\n🤢 食物中毒应对：\n1. 停止进食\n2. 多喝水\n3. 症状严重时去医院急诊\n4. 保留食物样本（如有）\n5. 拨打120急救电话\n\n💡 适应期：初到中国前1-2周，肠胃可能需要适应，选择清淡饮食', en: '💧 Water: don\'t drink tap water directly; boil or buy bottled (Nongfu Spring, C\'estbon)\n\n🦐 Allergies: Chinese food may contain peanuts, sesame — tell staff: "我对XX过敏" (I\'m allergic to XX)\n\n🤢 Food poisoning: stop eating → drink water → severe cases: hospital ER → keep food sample → call 120\n\n💡 Adjustment: first 1-2 weeks, eat light to let your stomach adapt', ru: '💧 Вода: не пейте из-под крана, кипятите или покупайте\n🦐 Аллергии: скажите "我对XX过敏" (аллергия на XX)\n🤢 Отравление: прекратите есть → вода → при тяжёлом: больница → 120\n💡 Первые 1-2 недели: лёгкая пища для адаптации' },
    },
  ],
  faq: [
    { q: { zh: '中国的自来水能喝吗？', en: 'Is tap water drinkable in China?', ru: 'Можно ли пить воду из-под крана?' }, a: { zh: '不建议直接饮用。虽然出厂水质合格，但管道老化可能导致二次污染。建议烧开后饮用或购买瓶装水。', en: 'Not recommended directly. Although treatment quality is fine, aging pipes may cause secondary contamination. Boil before drinking or buy bottled water.', ru: 'Не рекомендуется. Кипятите или покупайте бутилированную.' } },
  ],
  nextGuides: ['dietary-restrictions', 'food-delivery', 'canteen-guide']
};