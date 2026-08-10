// Guide: 居留许可办理
export default {
  id: 'residence-permit',
  category: 'visa-legal',
  icon: '🪪',
  type: 'guide',
  difficulty: 3,
  estimatedTime: 30,
  apps: [],
  prerequisites: [],
  tags: ["residence-permit", "visa", "legal"],
  title: { zh: '居留许可办理', en: 'Residence Permit Application', ru: 'Оформление ВНЖ' },
  summary: { zh: 'X1签证入境后办理居留许可的全流程：材料、步骤、时间', en: 'Full process for X1 visa holders: documents, steps, timeline', ru: 'Процесс оформления ВНЖ для визы X1' },
  intro: { zh: '持X1签证入境后，必须在30天内到出入境管理处办理居留许可，否则签证过期。', en: 'X1 visa holders must apply for residence permit at the Exit-Entry Administration within 30 days of entry, or the visa expires.', ru: 'Держатели X1 должны оформить ВНЖ в течение 30 дней, иначе виза истечёт.' },
  preparation: { zh: ['护照原件', '录取通知书', 'JW201/JW202表', '体检报告', '住宿登记证明', '照片', '学校介绍信'], en: ['Passport', 'Admission letter', 'JW201/JW202', 'Medical report', 'Accommodation registration', 'Photo', 'University letter'], ru: ['Паспорт', 'Письмо о зачислении', 'JW201/JW202', 'Медсправка', 'Регистрация жилья', 'Фото', 'Письмо вуза'] },
  steps: [
    {
      title: { zh: '办理流程', en: 'Application Process', ru: 'Процесс оформления' },
      desc: { zh: '📋 办理步骤：\n1. 入学后学校会通知办理时间\n2. 准备所有材料（见上方清单）\n3. 到当地出入境管理处\n4. 填写申请表\n5. 提交材料\n6. 缴费（通常400-800元/年）\n7. 等待7-15个工作日\n8. 领取居留许可（贴在护照上）\n\n⏰ 重要时限：\n• 入境后30天内必须办理\n• 逾期每天罚款500元（最高10000元）\n• 严重可能影响未来签证\n\n💡 大部分学校会统一组织办理，跟着学校安排走。', en: '📋 Steps:\n1. School will notify timing after enrollment\n2. Prepare all documents\n3. Go to Exit-Entry Administration\n4. Fill application form\n5. Submit documents\n6. Pay fee (usually ¥400-800/year)\n7. Wait 7-15 working days\n8. Collect permit (sticker in passport)\n\n⏰ Deadlines: within 30 days of entry. Overstay fine: ¥500/day (max ¥10,000).\n💡 Most schools organize group processing — follow school arrangements.', ru: '📋 Шаги:\n1. Школа уведомит\n2. Подготовьте документы\n3. Имиграционная служба\n4. Заявление\n5. Подача\n6. Оплата (400-800 ¥/год)\n7. Ожидание 7-15 дней\n8. Получение\n⏰ В течение 30 дней. Штраф: 500 ¥/день.' },
    },
  ],
  faq: [
    { q: { zh: '居留许可快到期了怎么办？', en: 'What if residence permit is expiring?', ru: 'ВНЖ скоро истекает?' }, a: { zh: '在到期前30天到学校国际学生办公室申请续签。需要准备在读证明、成绩单等材料。详见签证延期指南。', en: 'Apply for renewal at the international student office 30 days before expiry. Need enrollment certificate, transcript, etc.', ru: 'За 30 дней до окончания подайте на продление в международный офис.' } },
  ],
  nextGuides: ['visa-extension', 'visa-renewal', 'police-registration']
};