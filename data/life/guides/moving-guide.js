// Guide: 搬家攻略
export default {
  id: 'moving-guide',
  category: 'housing',
  icon: '📦',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 60,
  apps: ['didi'],
  prerequisites: ['rent-apartment'],
  tags: ['moving', 'logistics', 'tips'],
  title: {
    zh: '搬家攻略',
    en: 'Moving Guide',
    ru: 'Руководство по переезду'
  },
  summary: {
    zh: '搬家准备清单、搬运方式选择、打包技巧与注意事项',
    en: 'Moving checklist, transportation options, packing tips and precautions',
    ru: 'Чек-лист переезда, варианты транспортировки, упаковка и меры предосторожности'
  },
  intro: {
    zh: '换宿舍或换租房时，搬家是个不小的工程。中国的搬家服务很方便，从叫货车到找搬家公司都可以在线完成。',
    en: 'When changing dorms or apartments, moving can be a significant undertaking. Moving services in China are convenient — from renting a truck to hiring a moving company, all can be done online.',
    ru: 'При смене общежития или квартиры переезд — серьёзное дело. Услуги переезда в Китае удобны — от грузовика до транспортной компании, всё онлайн.'
  },
  preparation: {
    zh: [
      '提前2-3周规划搬家',
      '准备打包材料（纸箱、胶带、气泡膜）',
      '清理不需要的物品（可闲鱼出售）'
    ],
    en: [
      'Plan 2-3 weeks ahead',
      'Prepare packing materials (boxes, tape, bubble wrap)',
      'Declutter items you don\'t need (sell on Xianyu)'
    ],
    ru: [
      'Планируйте за 2-3 недели',
      'Подготовьте упаковку (коробки, скотч, плёнка)',
      'Избавьтесь от ненужного (продайте на Xianyu)'
    ]
  },
    steps: [
    {
      title: { zh: '搬家方式对比', en: 'Moving options', ru: 'Варианты переезда' },
      desc: {
        zh: '搬家方式对比：\n\n🚚 货拉拉（推荐）\n• App下单，选择车型\n• 小面包车：50-100元起\n• 中型货车：150-300元\n• 可加钱请司机帮忙搬运\n\n🏢 专业搬家公司\n• 费用较高（300-800元起）\n• 提供打包+搬运+归位一条龙\n• 适合大件家具多的情况\n\n🤝 朋友帮忙\n• 费用最低\n• 需要自己准备车和人力\n• 适合行李不多的情况',
        en: 'Moving options:\n\n🚚 Huolala (Recommended)\n• Order via app, choose vehicle\n• Small van: from ¥50-100\n• Medium truck: ¥150-300\n• Pay extra for driver to help carry\n\n🏢 Professional movers\n• Higher cost (from ¥300-800)\n• Full service: packing + moving + placement\n• Best for lots of large furniture\n\n🤝 Friends help\n• Cheapest option\n• Need to arrange vehicle and manpower\n• Suitable for light loads',
        ru: 'Варианты переезда:\n\n🚚 Huolala (рекомендуется)\n• Заказ через приложение\n• Микроавтобус: от 50-100 ¥\n• Грузовик: 150-300 ¥\n\n🏢 Профессиональные грузчики\n• От 300-800 ¥\n• Полный сервис\n\n🤝 Помощь друзей\n• Самый дешёвый вариант'
      }
    },
    {
      title: { zh: '行李少的话，也可以用顺丰快递寄送大件（有上门取件服务）。', en: 'Step 2', ru: 'Для небольшого количества — SF Express с забором на дому.' },
      desc: {
        zh: '💡 行李少的话，也可以用顺丰快递寄送大件（有上门取件服务）。',
        en: '💡 For fewer items, SF Express can ship large packages (door pickup service available).',
        ru: '💡 Для небольшого количества — SF Express с забором на дому.'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['neighbor-etiquette', 'maintenance-repair']
};
