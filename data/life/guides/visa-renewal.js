// Guide: 年度签注续签
export default {
  id: 'visa-renewal',
  category: 'visa-legal',
  icon: '📅',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: [],
  prerequisites: ["residence-permit"],
  tags: ["visa", "annual", "renewal"],
  title: { zh: '年度签注续签', en: 'Annual Visa Renewal', ru: 'Ежегодное продление' },
  summary: { zh: '每年居留许可年度续签的注意事项和流程', en: 'Annual residence permit renewal notes and process', ru: 'Ежегодное продление ВНЖ' },
  intro: { zh: '居留许可通常每年续签一次，需要提前准备相关材料。', en: 'Residence permits are typically renewed annually. Prepare documents in advance.', ru: 'ВНЖ обычно продлевается ежегодно. Подготовьте документы заранее.' },
  preparation: { zh: ['护照', '在读证明', '成绩单', '体检报告（部分城市）'], en: ['Passport', 'Enrollment cert', 'Transcript', 'Medical report (some cities)'], ru: ['Паспорт', 'Справка об обучении', 'Транскрипт', 'Медсправка'] },
  steps: [
    {
      title: { zh: '年度续签', en: 'Annual Renewal', ru: 'Ежегодное продление' },
      desc: { zh: '📅 每年续签流程：\n1. 学校提前通知续签时间\n2. 准备在读证明、成绩单\n3. 部分城市需要重新体检\n4. 学校统一提交或自行到出入境办理\n5. 缴费（400-800元）\n6. 等待领取\n\n💡 注意事项：\n• 成绩不达标可能影响续签\n• 出勤率低于要求可能被拒\n• 换专业/学校需要重新办理', en: '📅 Annual renewal:\n1. School notifies timing\n2. Prepare enrollment cert, transcript\n3. Some cities require re-examination\n4. School submits or go personally\n5. Pay (¥400-800)\n6. Wait and collect\n\n💡 Notes: poor grades may affect renewal; low attendance may be rejected; changing major/school requires re-application.', ru: '📅 Ежегодное продление:\n1. Школа уведомит\n2. Справка, транскрипт\n3. Иногда — медосмотр\n4. Школа или лично\n5. 400-800 ¥\n💡 Плохие оценки/посещаемость — проблемы. Смена вуза — заново.' },
    },
  ],
  faq: [
    { q: { zh: '续签需要重新体检吗？', en: 'Do I need a new medical exam?', ru: 'Нужен ли новый медосмотр?' }, a: { zh: '取决于城市。部分城市每年续签不需要重新体检（首次入境时已做），但部分城市要求每年体检。咨询学校国际学生办公室确认当地要求。', en: 'Depends on the city. Some don\'t require annual re-examination (done at first entry), but some do. Check with your international student office.', ru: 'Зависит от города. Уточните в международном офисе.' } },
  ],
  nextGuides: ['visa-extension', 'residence-permit', 'police-registration']
};