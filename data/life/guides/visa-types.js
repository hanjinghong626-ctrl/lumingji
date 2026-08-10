// Guide: 签证类型详解
export default {
  id: 'visa-types',
  category: 'visa-legal',
  icon: '📋',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ["visa", "types", "legal"],
  title: { zh: '签证类型详解', en: 'Visa Types Explained', ru: 'Типы виз' },
  summary: { zh: '中国签证类型：X1/X2学生签、L旅游签、工作签等详解', en: 'Chinese visa types: X1/X2 student, L tourist, work visa, etc.', ru: 'Типы виз Китая: X1/X2 учебная, L туристическая, рабочая' },
  intro: { zh: '了解中国签证类型对留学生非常重要。不同签证有不同的停留期限和活动范围。', en: 'Understanding Chinese visa types is essential. Different visas have different stay durations and activity scopes.', ru: 'Знание типов виз важно. Разные визы — разные сроки и ограничения.' },
  preparation: { zh: ['护照', '录取通知书', 'JW201/JW202表'], en: ['Passport', 'Admission letter', 'JW201/JW202 form'], ru: ['Паспорт', 'Письмо о зачислении', 'Форма JW201/JW202'] },
  steps: [
    {
      title: { zh: '签证类型', en: 'Visa Types', ru: 'Типы виз' },
      desc: { zh: '📋 常见签证类型：\n\n🎓 X1签证（长期学习）：\n• 停留>180天\n• 入境后30天内须办理居留许可\n• 适用于学历生\n\n🎓 X2签证（短期学习）：\n• 停留≤180天\n• 无需办理居留许可\n• 适用于短期进修/交换\n\n其他签证：\n• L签：旅游\n• Z签：工作\n• Q签：家庭团聚\n• M签：商务\n\n💡 留学生通常持X1签证入境，然后办理居留许可。', en: '📋 Common types:\n\n🎓 X1 (long-term study): >180 days, must get residence permit within 30 days of entry, for degree students\n🎓 X2 (short-term): ≤180 days, no residence permit needed, for exchange/short courses\n\nOthers: L (tourist), Z (work), Q (family), M (business)\n💡 Students usually enter on X1, then get residence permit.', ru: '📋 Типы:\n🎓 X1 (>180 дней, ВНЖ за 30 дней, для студентов)\n🎓 X2 (≤180 дней, без ВНЖ)\nДругие: L (туризм), Z (работа), Q (семья), M (бизнес)\n💡 Студенты въезжают по X1, затем ВНЖ.' },
    },
  ],
  faq: [
    { q: { zh: 'X1和X2有什么区别？', en: 'Difference between X1 and X2?', ru: 'Разница X1 и X2?' }, a: { zh: 'X1停留超180天，入境后30天内必须办理居留许可；X2停留不超过180天，无需居留许可。长期学历生一般拿X1，短期交换生拿X2。', en: 'X1: stay >180 days, must get residence permit within 30 days. X2: ≤180 days, no residence permit. Degree students get X1, exchange students get X2.', ru: 'X1: >180 дней + ВНЖ за 30 дней. X2: ≤180 дней, без ВНЖ.' } },
  ],
  nextGuides: ['residence-permit', 'visa-extension', 'police-registration']
};