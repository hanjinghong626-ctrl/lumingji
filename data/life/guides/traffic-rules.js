// Guide: 交通规则与安全
export default {
  id: 'traffic-rules',
  category: 'transport',
  icon: '🚦',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["traffic", "safety", "rules"],
  title: { zh: '交通规则与安全', en: 'Traffic Rules & Safety', ru: 'Правила дорожного движения' },
  summary: { zh: '在中国出行必须了解的交通规则和安全常识', en: 'Essential traffic rules and safety tips for getting around in China', ru: 'Основные ПДД и безопасность в Китае' },
  intro: { zh: '中国的交通规则有自己的特点，了解这些规则对日常出行安全非常重要。', en: 'China\'s traffic rules have unique features. Understanding them is essential for daily safety.', ru: 'Правила движения в Китае имеют свои особенности. Важно для безопасности.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '行人和乘车安全', en: 'Pedestrian & Passenger Safety', ru: 'Пешеходы и пассажиры' },
      desc: { zh: '🚶 行人规则：\n• 靠右行走\n• 红灯停、绿灯行\n• 走斑马线过街\n• 不要翻越护栏\n• 过马路看左右——注意右转车辆\n\n🚗 乘车注意：\n• 后排也系安全带\n• 不向窗外扔物品\n• 电动车必须戴头盔\n• 12岁以下不坐副驾驶\n\n🛵 电动车/摩托车：\n• 中国电动车非常多，注意避让\n• 很多电动车不遵守交规，过马路时格外小心\n• 自己骑电动车必须戴头盔', en: '🚶 Pedestrian:\n• Walk on right side\n• Red stop, green go\n• Use crosswalks\n• Don\'t cross barriers\n• Watch for right-turning vehicles\n\n🚗 Passenger:\n• Seatbelt in back seat too\n• No throwing objects out\n• E-bike: must wear helmet\n• Under 12: no front seat\n\n🛵 E-bikes:\n• Very common in China, watch out\n• Many e-bike riders break rules — be extra careful crossing\n• Must wear helmet when riding', ru: '🚶 Пешеход: правая сторона, светофор, зебра\n🚗 Пассажир: ремень сзади, шлем на электро\n🛵 Электровелосипеды: много, будьте осторожны, шлем обязателен' },
    },
  ],
  faq: [
    { q: { zh: '电动车需要驾照吗？', en: 'Do e-bikes need a license?', ru: 'Нужны ли права на электровелосипед?' }, a: { zh: '符合国标（速度≤25km/h）的电动自行车不需要驾照和上牌。但超过标准的电动摩托车需要驾照和牌照。', en: 'Standard e-bikes (≤25km/h) don\'t need license or registration. E-motorcycles above standard require license and plates.', ru: 'Стандартные (≤25 км/ч) — не нужны. Превышающие стандарт — нужны права и номера.' } },
  ],
  nextGuides: ['drive-in-china', 'parking-guide', 'metro-guide']
};