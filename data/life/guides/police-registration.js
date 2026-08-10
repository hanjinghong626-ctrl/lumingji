// Guide: 住宿登记（派出所）
export default {
  id: 'police-registration',
  category: 'visa-legal',
  icon: '🏠',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 20,
  apps: [],
  prerequisites: [],
  tags: ["police", "registration", "address"],
  title: { zh: '住宿登记（派出所）', en: 'Accommodation Registration (Police Station)', ru: 'Регистрация по месту жительства' },
  summary: { zh: '入境后24小时内到派出所办理住宿登记的流程', en: 'Register at local police station within 24 hours of arrival', ru: 'Регистрация в полиции в течение 24 часов' },
  intro: { zh: '外国人在中国住宿必须办理住宿登记。住校宿舍由学校统一办理，校外住宿需自行办理。', en: 'Foreigners must register accommodation. Dorm residents: school handles it. Off-campus: do it yourself.', ru: 'Иностранцы должны зарегистрировать жильё. В общежитии — школа. Вне кампуса — самостоятельно.' },
  preparation: { zh: ['护照', '租房合同', '房东身份证复印件', '房东房产证复印件'], en: ['Passport', 'Rental contract', 'Landlord\'s ID copy', 'Property certificate copy'], ru: ['Паспорт', 'Договор аренды', 'Копия ID арендодателя', 'Копия свидетельства собственности'] },
  steps: [
    {
      title: { zh: '办理住宿登记', en: 'Register Accommodation', ru: 'Регистрация жилья' },
      desc: { zh: '🏠 住校宿舍：\n• 学校统一办理，无需自己操心\n\n🏠 校外租房：\n1. 入住后24小时内办理\n2. 带齐材料到辖区派出所\n3. 填写《境外人员临时住宿登记表》\n4. 提交材料\n5. 获得《住宿登记证明》\n\n⚠️ 重要：\n• 24小时内必须办理（否则罚款）\n• 搬家后需重新登记\n• 居留许可续签时需要此证明\n• 部分城市支持在线登记', en: '🏠 Dorm: school handles it\n\n🏠 Off-campus:\n1. Register within 24 hours of moving in\n2. Bring documents to local police station\n3. Fill "Temporary Accommodation Registration Form"\n4. Submit documents\n5. Get "Accommodation Registration Certificate"\n\n⚠️ Important: within 24hrs (or fined), re-register after moving, needed for residence permit renewal, some cities support online registration', ru: '🏠 Общежитие: школа делает\n🏠 Аренда: в течение 24 часов в полицию с документами → форма → свидетельство\n⚠️ 24 часа иначе штраф. При переезде — заново. Нужно для ВНЖ.' },
    },
  ],
  faq: [
    { q: { zh: '忘记登记了会怎样？', en: 'What if I forget to register?', ru: 'Что если забыть зарегистрироваться?' }, a: { zh: '可能被警告或罚款200-2000元。严重情况下可能影响居留许可续签。建议到达后立即办理。', en: 'May receive warning or fine ¥200-2000. Severe cases may affect residence permit renewal. Register immediately upon arrival.', ru: 'Штраф 200-2000 ¥. Может повлиять на ВНЖ. Зарегистрируйтесь сразу.' } },
  ],
  nextGuides: ['residence-permit', 'visa-types', 'legal-rights']
};