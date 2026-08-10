// Guide: 奖学金发放与领取
export default {
  id: 'scholarship-payment',
  category: 'payment',
  icon: '🎓',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 15,
  apps: [],
  prerequisites: ["open-bank-account"],
  tags: ["scholarship", "payment", "student"],
  title: { zh: '奖学金发放与领取', en: 'Scholarship Payment Guide', ru: 'Выплата стипендии' },
  summary: { zh: '各类奖学金的发放时间、方式与常见问题', en: 'Payment schedules and FAQs for CSC, university, and other scholarships', ru: 'Сроки и вопросы по стипендиям CSC и вузов' },
  intro: { zh: '中国各类奖学金通常按月发放到中国银行账户。了解发放规律有助于合理规划生活费。', en: 'Scholarships in China are typically paid monthly to your Chinese bank account. Understanding schedules helps planning.', ru: 'Стипендии обычно выплачиваются ежемесячно на китайский счёт. Знание сроков помогает планировать бюджет.' },
  preparation: { zh: ['中国银行储蓄卡', '学生证'], en: ['Chinese bank card', 'Student ID'], ru: ['Карта китайского банка', 'Студенческий билет'] },
  steps: [
    {
      title: { zh: '发放时间与金额', en: 'Schedule and Amounts', ru: 'Сроки и размеры' },
      desc: { zh: '📅 发放时间：\n• CSC奖学金：每月15-25日\n• 校级奖学金：因校而异\n\n💰 常见金额：\n• CSC本科：2500元/月\n• CSC硕士：3000元/月\n• CSC博士：3500元/月\n• 另免学费+住宿+医保\n\n💡 理财建议：到账后部分转入余额宝赚利息，保留1-2个月应急资金。', en: '📅 Schedule:\n• CSC: 15th-25th monthly\n• University: varies\n\n💰 Common amounts:\n• CSC Bachelor: ¥2,500/month\n• CSC Master: ¥3,000/month\n• CSC PhD: ¥3,500/month\n• Plus free tuition + housing + medical\n\n💡 Tip: move savings to Yu\'ebao; keep 1-2 months emergency fund.', ru: '📅 Сроки:\n• CSC: 15-25 число\n• Университетская: зависит от вуза\n\n💰 Размеры:\n• CSC бакалавр: 2500 ¥/мес\n• CSC магистр: 3000 ¥/мес\n• CSC аспирант: 3500 ¥/мес\n+ бесплатное обучение и жильё\n\n💡 Переводите сбережения в Yu\'ebao.' },
    },
  ],
  faq: [
    { q: { zh: '奖学金迟迟不到账怎么办？', en: 'Scholarship payment delayed?', ru: 'Стипендия задерживается?' }, a: { zh: '先检查银行卡状态，再联系学校国际学生办公室。CSC可联系国家留学基金委。延迟一周内属正常。', en: 'Check bank status first, then contact international student office. CSC: contact China Scholarship Council. Under 1 week is normal.', ru: 'Проверьте счёт, обратитесь в международный офис. CSC — свяжитесь с CSC. До недели — норма.' } },
  ],
  nextGuides: ['part-time-payment', 'bank-transfer', 'open-bank-account']
};