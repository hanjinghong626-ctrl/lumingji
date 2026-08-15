// Guide: 兼职收入与报税
export default {
  id: 'part-time-payment',
  category: 'payment',
  icon: '💼',
  type: 'guide',
  difficulty: 3,
  estimatedTime: 20,
  apps: [],
  prerequisites: [],
  tags: ["part-time", "tax", "work"],
  title: { zh: '兼职收入与报税', en: 'Part-time Income & Tax', ru: 'Подработка и налоги' },
  summary: { zh: '留学生兼职规定、个税计算与退税流程', en: 'Student work regulations, income tax calculation, and refund process', ru: 'Правила подработки, расчёт налога и возврат' },
  intro: { zh: '中国法律对留学生兼职有限制。合法兼职获得收入需了解个税规定。', en: 'Chinese law restricts student part-time work. Legal income requires understanding tax rules.', ru: 'Закон ограничивает подработку студентов. Легальный доход требует знания налогов.' },
  preparation: { zh: ['有效居留许可（含兼职许可）', '中国银行账户'], en: ['Valid residence permit with work permission', 'Chinese bank account'], ru: ['Вид на жительство с разрешением', 'Китайский банковский счёт'] },
    steps: [
    {
      title: { zh: '⚠ 兼职前提', en: 'Requirements', ru: 'Требования' },
      desc: {
        zh: '⚠️ 兼职前提：\n• X1签证 + 居留许可\n• 学校同意并备案\n• 公安机关兼职许可\n• 未经批准的兼职属违法行为\n\n📊 个税计算：\n• 起征点：5000元/月\n• 劳务报酬：每次≤4000元扣800，>4000元扣20%，税率20%',
        en: '⚠️ Requirements:\n• X1 visa + residence permit\n• University approval\n• Police work permission\n• Unauthorized work is illegal\n\n📊 Tax calculation:\n• Threshold: ¥5,000/month\n• Service income: deduct ¥800 (≤¥4,000) or 20% (>¥4,000), rate 20%',
        ru: '⚠️ Требования:\n• Виза X1 + ВНЖ\n• Разрешение вуза\n• Разрешение полиции\n• Нелегальная работа — нарушение\n\n📊 Налог: порог 5000 ¥/мес, ставка 20%'
      }
    },
    {
      title: { zh: '年度汇算：每年3-6月通过「个人所得税」App申报，多缴可退。', en: 'Step 2', ru: 'Годовая декларация: март-июнь, переплата возвращается.' },
      desc: {
        zh: '💡 年度汇算：每年3-6月通过「个人所得税」App申报，多缴可退。',
        en: '💡 Annual reconciliation: March-June via "个人所得税" app. Overpaid can be refunded.',
        ru: '💡 Годовая декларация: март-июнь, переплата возвращается.'
      }
    }
  ],
  faq: [
    { q: { zh: '留学生可以享受个税扣除吗？', en: 'Can students claim tax deductions?', ru: 'Могут ли студенты получить вычеты?' }, a: { zh: '符合条件的留学生可享受继续教育等专项附加扣除。下载「个人所得税」App查看适用项目。', en: 'Eligible students can claim education deductions. Check via "个人所得税" app.', ru: 'Студенты могут получить вычеты через приложение "个人所得税".' } },
  ],
  nextGuides: ['scholarship-payment', 'legal-rights', 'visa-types']
};