// Guide: 紧急联系方式大全
export default {
  id: 'emergency-contacts',
  category: 'visa-legal',
  icon: '🆘',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["emergency", "contacts", "safety"],
  title: { zh: '紧急联系方式大全', en: 'Emergency Contacts Directory', ru: 'Экстренные контакты' },
  summary: { zh: '报警、急救、火警、领事保护等所有紧急电话汇总', en: 'All emergency numbers: police, ambulance, fire, consular protection', ru: 'Все экстренные номера: полиция, скорая, пожарные, консульство' },
  intro: { zh: '保存这些紧急联系方式，以备不时之需。', en: 'Save these emergency contacts for when you need them.', ru: 'Сохраните эти контакты на случай экстренных ситуаций.' },
  preparation: { zh: ['保存到手机通讯录'], en: ['Save to phone contacts'], ru: ['Сохраните в контакты телефона'] },
  steps: [
    {
      title: { zh: '紧急电话', en: 'Emergency Numbers', ru: 'Экстренные номера' },
      desc: { zh: '🆘 通用紧急电话：\n• 报警：110\n• 急救：120\n• 火警：119\n• 交通事故：122\n\n📞 服务热线：\n• 12345：市民服务热线（综合投诉）\n• 12348：法律援助热线\n• 12315：消费者投诉\n• 12320：卫生热线\n\n🌐 领事保护：\n• 外交部全球领事保护热线：+86-10-12308\n• 联系你所在国家的大使馆/领事馆\n\n💡 拨打紧急电话免费，无需区号，任何电话均可拨打。', en: '🆘 Emergency numbers:\n• Police: 110\n• Ambulance: 120\n• Fire: 119\n• Traffic accident: 122\n\n📞 Service hotlines:\n• 12345: citizen hotline (complaints)\n• 12348: legal aid\n• 12315: consumer complaints\n• 12320: health hotline\n\n🌐 Consular: MFA global hotline +86-10-12308, contact your embassy\n💡 Emergency calls are free, no area code needed, any phone works.', ru: '🆘 Экстренные:\n• Полиция: 110\n• Скорая: 120\n• Пожарные: 119\n• ДТП: 122\n📞 Сервисы: 12345 (жалобы), 12348 (юридическая), 12315 (потребители)\n🌐 Консульство: +86-10-12308\n💡 Бесплатно с любого телефона.' },
    },
  ],
  faq: [
    { q: { zh: '不会中文能打110吗？', en: 'Can I call 110 without Chinese?', ru: 'Можно звонить 110 без китайского?' }, a: { zh: '可以。大部分城市110有英文服务。如果语言不通，尽量说清位置和情况关键词（如help、hospital），或让身边的中国朋友帮忙拨打。', en: 'Yes. Most cities have English service for 110. If language is a barrier, say location and keywords (help, hospital), or ask a Chinese friend to call.', ru: 'Да. В большинстве городов есть английский. Скажите место и ключевые слова или попросите друга позвонить.' } },
  ],
  nextGuides: ['legal-rights', 'hospital-guide', 'police-registration']
};