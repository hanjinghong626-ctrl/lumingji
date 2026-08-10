// Guide: 海关与进口购物
export default {
  id: 'customs-import',
  category: 'shopping',
  icon: '📮',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 30,
  apps: [],
  prerequisites: [],
  tags: ['customs', 'import', 'international'],
  title: {
    zh: '海关与进口购物',
    en: 'Customs & International Shopping',
    ru: 'Таможня и международные покупки'
  },
  summary: {
    zh: '国际包裹清关、个人物品入境限制、海淘与关税',
    en: 'International package customs, personal item import limits, overseas shopping and tariffs',
    ru: 'Таможенное оформление, лимиты, зарубежные покупки и пошлины'
  },
  intro: {
    zh: '从国外寄包裹到中国或海淘购物，需要了解海关规定和清关流程。',
    en: 'Sending packages from abroad to China or shopping internationally requires understanding customs regulations.',
    ru: 'Отправка посылок в Китай требует знания таможенных правил.'
  },
  preparation: {
    zh: [
    ],
    en: [
    ],
    ru: [
    ]
  },
  steps: [
    {
      title: {
        zh: '海关规定',
        en: 'Customs Regulations',
        ru: 'Таможенные правила'
      },
      desc: {
        zh: '国际包裹须知：\n\n📦 个人物品清关\n• 个人自用物品可以享受一定免税额度\n• 单次限值：港澳台800元，其他国家和地区1000元\n• 超过限值需缴关税\n• 税率一般为13%-50%不等\n\n🚫 禁止入境物品\n• 武器弹药\n• 毒品\n• 反动出版物\n• 新鲜水果/肉类（未经检疫）\n• 濒危动植物制品\n\n💡 给留学生的建议：\n• 从国内寄东西到学校，注意单包价值不要超标\n• 家人寄来的个人物品通常不会被税\n• 贵重物品建议随身携带而非邮寄',
        en: '📦 Personal items customs: tax-free threshold ¥800 (HK/Macau/TW) or ¥1000 (others); over limit = tariff 13-50%\n🚫 Prohibited: weapons, drugs, unquarantined food/meat, endangered species products\n💡 Keep single package value under threshold; personal items from family usually not taxed',
        ru: '📦 Лимит: 800-1000 ¥, свыше — пошлина 13-50%\n🚫 Запрещено: оружие, наркотики, мясо/фрукты без检疫\n💡 Не превышайте лимит стоимости посылки'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['express-delivery']
};
