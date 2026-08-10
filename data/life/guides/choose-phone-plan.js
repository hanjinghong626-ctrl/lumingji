// Guide: 手机套餐选择
export default {
  id: 'choose-phone-plan',
  category: 'communication',
  icon: '📱',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: ["buy-sim-card"],
  tags: ["phone", "plan", "carrier"],
  title: { zh: '手机套餐选择', en: 'Phone Plan Selection', ru: 'Выбор тарифа' },
  summary: { zh: '三大运营商套餐对比与留学生推荐方案', en: 'Compare 3 carriers\' plans and recommended options for students', ru: 'Сравнение тарифов 3 операторов для студентов' },
  intro: { zh: '选择合适的手机套餐能省钱又满足需求。', en: 'Choosing the right plan saves money and meets your needs.', ru: 'Правильный тариф экономит деньги.' },
  preparation: { zh: ['了解各运营商套餐'], en: ['Check carrier plans'], ru: ['Изучите тарифы'] },
  steps: [
    {
      title: { zh: '套餐对比', en: 'Plan Comparison', ru: 'Сравнение тарифов' },
      desc: { zh: '📱 推荐方案：\n\n💰 经济型（30-58元/月）：\n• 10-30GB流量 + 100-300分钟通话\n• 适合WiFi环境多的同学\n\n🎓 学生套餐（39-79元/月）：\n• 30-100GB流量 + 300-500分钟\n• 校园营业厅有专属优惠\n\n📱 大流量（79-129元/月）：\n• 100GB+或不限量\n• 适合重度上网\n\n💡 建议：先问同学用哪个运营商，同网通话更优惠。开学季通常有特惠。', en: '💰 Economy (¥30-58/month): 10-30GB + 100-300min, for WiFi-heavy users\n🎓 Student (¥39-79/month): 30-100GB + 300-500min, campus-exclusive deals\n📱 Large data (¥79-129/month): 100GB+ or unlimited, heavy users\n💡 Ask classmates which carrier — same-network calls are cheaper. Enrollment season has special offers.', ru: '💰 Эконом (30-58 ¥): 10-30 ГБ + 100-300 мин\n🎓 Студенческий (39-79 ¥): 30-100 ГБ + 300-500 мин\n📱 Большой (79-129 ¥): 100 ГБ+\n💡 Спросите однокурсников. Сезон поступления — скидки.' },
    },
  ],
  faq: [
    { q: { zh: '套餐可以中途更换吗？', en: 'Can I change plans mid-contract?', ru: 'Можно сменить тариф?' }, a: { zh: '可以。大部分套餐次月生效，无合约限制。但部分优惠套餐有合约期（12个月），提前变更可能有违约金。', en: 'Yes. Most plans change next month, no contract. But some promotional plans have 12-month contracts with early termination fees.', ru: 'Да. Большинство — со следующего месяца. Но акции с контрактом 12 мес — штраф при досрочном.' } },
  ],
  nextGuides: ['recharge-phone', 'buy-sim-card', 'use-qq']
};