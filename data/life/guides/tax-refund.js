// Guide: 购物退税指南
export default {
  id: 'tax-refund',
  category: 'payment',
  icon: '🛍️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ["tax-refund", "shopping", "departure"],
  title: { zh: '购物退税指南', en: 'Shopping Tax Refund Guide', ru: 'Возврат налога Tax Free' },
  summary: { zh: '离境时购物退税流程：条件、步骤与注意事项', en: 'Tax refund process on departure: eligibility, steps, and tips', ru: 'Возврат Tax Free при выезде: условия, шаги, советы' },
  intro: { zh: '在指定商店购物后，留学生离境时可申请退还增值税。', en: 'After shopping at designated stores, students can apply for VAT refund upon departure.', ru: 'После покупок в магазинах Tax Free можно вернуть НДС при выезде.' },
  preparation: { zh: ['护照原件', '退税专用购物发票', '购买商品（未使用）'], en: ['Original passport', 'Tax-free invoice', 'Goods (unused)'], ru: ['Паспорт', 'Счёт Tax Free', 'Товары (не использованные)'] },
  steps: [
    {
      title: { zh: '退税条件与流程', en: 'Requirements and Process', ru: 'Условия и процесс' },
      desc: { zh: '📋 条件：\n• 同日同店消费≥500元\n• 商品未使用\n• 商店有Tax Free标识\n• 90天内离境\n\n📝 流程：\n1. 购物时索取退税申请单和发票\n2. 离境提前3小时到机场\n3. 海关验核：护照+退税单+商品\n4. 海关盖章\n5. 退税窗口领款\n\n💰 退税率：约11%（扣手续费后约9%）', en: '📋 Requirements: same store/day ≥¥500, unused, Tax Free sign, depart within 90 days\n\n📝 Process: get refund form → arrive 3hrs early → customs check (passport + form + goods) → stamp → collect refund\n\n💰 Rate: ~11% (actual ~9% after fees)', ru: '📋 Условия: ≥¥500 в одном магазине, не использовано, знак Tax Free, выезд за 90 дней\n\n📝 Процесс: форма → за 3 часа → таможня → печать → возврат\n💰 ~11% (фактически ~9%)' },
    },
  ],
  faq: [
    { q: { zh: '所有商品都能退税吗？', en: 'All products eligible?', ru: 'Все товары?' }, a: { zh: '不是。食品、烟酒、药品等消耗品不能退税。只有非消耗品且满足金额条件才行。', en: 'No. Food, tobacco, alcohol, medicine are excluded. Only non-consumables meeting the minimum.', ru: 'Нет. Еда, табак, алкоголь, лекарства не подлежат.' } },
  ],
  nextGuides: ['airport-to-city', 'currency-exchange', 'deposit-refund']
};