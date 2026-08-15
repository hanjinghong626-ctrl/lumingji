// Guide: 家电购置指南
export default {
  id: 'home-appliances',
  category: 'housing',
  icon: '🔌',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 30,
  apps: ['jd', 'taobao'],
  prerequisites: ['rent-apartment'],
  tags: ['appliance', 'furniture', 'shopping'],
  title: {
    zh: '家电购置指南',
    en: 'Home Appliance Shopping Guide',
    ru: 'Руководство по покупке бытовой техники'
  },
  summary: {
    zh: '必备家电清单、购买渠道、安装服务与使用注意事项',
    en: 'Essential appliance list, where to buy, installation services and usage tips',
    ru: 'Список необходимой техники, где покупать, установка и советы'
  },
  intro: {
    zh: '校外租房通常需要自己配置一些家电。中国的家电购买非常方便，京东、淘宝都能送货上门并包安装。',
    en: 'Off-campus rentals often require purchasing your own appliances. Buying appliances in China is very convenient — JD.com and Taobao deliver to your door with installation included.',
    ru: 'При аренде вне кампуса часто нужно покупать свою технику. В Китае это удобно — JD и Taobao доставляют с установкой.'
  },
  preparation: {
    zh: [
      '确认房间已有的家电和插座位置',
      '测量房间尺寸',
      '预算规划'
    ],
    en: [
      'Check existing appliances and outlet locations',
      'Measure room dimensions',
      'Budget planning'
    ],
    ru: [
      'Проверьте имеющуюся технику и розетки',
      'Измерьте комнату',
      'Планирование бюджета'
    ]
  },
    steps: [
    {
      title: { zh: '校外租房常见必备家电', en: 'Common essential appliances for off-campus living', ru: 'Необходимая техника' },
      desc: {
        zh: '校外租房常见必备家电：',
        en: 'Common essential appliances for off-campus living:',
        ru: 'Необходимая техника:'
      }
    },
    {
      title: { zh: '大件', en: 'Large items', ru: 'Крупная' },
      desc: {
        zh: '🏠 大件\n• 洗衣机（600-2000元）\n• 冰箱（800-3000元）\n• 空调（1500-5000元，部分房间已有）\n• 热水器（500-2000元，部分房间已有）\n\n🍳 厨房\n• 电饭煲（100-500元）\n• 微波炉（200-800元）\n• 电热水壶（50-200元）',
        en: '🏠 Large items\n• Washing machine (¥600-2000)\n• Refrigerator (¥800-3000)\n• AC (¥1500-5000, may already exist)\n• Water heater (¥500-2000, may already exist)\n\n🍳 Kitchen\n• Rice cooker (¥100-500)\n• Microwave (¥200-800)\n• Electric kettle (¥50-200)',
        ru: '🏠 Крупная\n• Стиральная машина (600-2000 ¥)\n• Холодильник (800-3000 ¥)\n• Кондиционер (1500-5000 ¥)\n• Бойлер (500-2000 ¥)\n\n🍳 Кухня\n• Рисоварка (100-500 ¥)\n• Микроволновка (200-800 ¥)\n• Чайник (50-200 ¥)'
      }
    },
    {
      title: { zh: '建议：先确认房间已有哪些设备，只买缺的。二手家电可以在闲鱼上找到很便宜的。', en: 'Step 3', ru: 'Шаг 3' },
      desc: {
        zh: '💡 建议：先确认房间已有哪些设备，只买缺的。二手家电可以在闲鱼上找到很便宜的。',
        en: '💡 Tip: Check what\'s already in the room first, only buy what\'s missing. Second-hand appliances on Xianyu can be very cheap.',
        ru: '💡 Сначала проверьте, что уже есть. Б/у техника на Xianyu очень дешёвая.'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '京东和淘宝哪个买家电好？',
        en: 'JD or Taobao for appliances?',
        ru: 'JD или Taobao для техники?'
      },
      a: {
        zh: '家电推荐京东自营（物流快、售后好、正品保障）。淘宝选择更多但需辨别店铺信誉。两者都提供免费送货和部分包安装服务。',
        en: 'For appliances, JD self-operated (京东自营) is recommended — fast delivery, good after-sales, guaranteed authentic. Taobao has more choices but verify seller reputation. Both offer free delivery and some include installation.',
        ru: 'Для техники рекомендуется JD (京东自营) — быстрая доставка, хорошее обслуживание, гарантия. Taobao — больший выбор, но проверяйте продавца.'
      }
    }
  ],
  nextGuides: ['furniture-shopping', 'express-delivery']
};
