// Guide: 货币兑换指南
export default {
  id: 'currency-exchange',
  category: 'payment',
  icon: '💱',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 20,
  apps: [],
  prerequisites: [],
  tags: ["currency", "exchange", "money"],
  title: { zh: '货币兑换指南', en: 'Currency Exchange Guide', ru: 'Обмен валюты' },
  summary: { zh: '银行换汇、ATM取现、汇率与最佳实践', en: 'Bank exchange, ATM withdrawal, rates, and tips', ru: 'Обмен в банке, ATM, курсы и советы' },
  intro: { zh: '了解兑换渠道和汇率差异，能帮你节省费用。', en: 'Understanding exchange channels and rates saves money.', ru: 'Знание каналов и курсов помогает сэкономить.' },
  preparation: { zh: ['护照原件', '了解当前汇率'], en: ['Original passport', 'Check current rates'], ru: ['Паспорт', 'Проверьте курс'] },
  steps: [
    {
      title: { zh: '银行换汇（推荐）', en: 'Bank Exchange (Recommended)', ru: 'Обмен в банке' },
      desc: {
        zh: '🏦 推荐：中国银行（外汇业务最专业）\n\n📋 流程：\n1. 带护照到银行柜台\n2. 填写外汇买卖申请\n3. 告知金额和币种\n4. 确认汇率后办理\n5. 保留兑换水单（离境时可换回）\n\n⚠️ 每天限额等值5000美元',
        en: '🏦 Recommended: Bank of China (most experienced)\n\n📋 Process: passport → fill form → tell amount → confirm rate → get RMB → keep receipt\n\n⚠️ Daily limit: equivalent USD 5,000',
        ru: '🏦 Рекомендуем: Банк Китая\n\n📋 Паспорт → заявка → сумма → курс → юани → сохраните квитанцию\n⚠️ Лимит: $5000/день'
      },
    },
    {
      title: { zh: 'ATM取现', en: 'ATM Withdrawal', ru: 'Снятие в ATM' },
      desc: {
        zh: '用境外卡在ATM直接取人民币：\n• 支持四大行ATM（带Visa/Mastercard标识）\n• 中国ATM端通常免费\n• 发卡行可能收跨境手续费\n• 选择大型银行ATM，一次取够',
        en: 'Use foreign card at Chinese ATMs:\n• Big Four bank ATMs (Visa/MC logos)\n• Chinese side usually free\n• Your bank may charge\n• Use major bank ATMs, withdraw enough at once',
        ru: 'Зарубежной картой в китайских ATM:\n• ATM крупных банков\n• Китайская сторона обычно бесплатна\n• Ваш банк может взять комиссию'
      },
    },
  ],
  faq: [
    {
      q: { zh: '人民币换多了怎么办？', en: 'Too much RMB?', ru: 'Слишком много юаней?' },
      a: { zh: '凭兑换水单，离境前可到银行将未用完的人民币换回。水单有效期通常24个月。', en: 'With receipt, convert unused RMB back before departure. Receipts valid for 24 months.', ru: 'С квитанцией можно обменять обратно. Срок квитанции — 24 месяца.' },
    },
  ],
  nextGuides: ['bank-transfer', 'open-bank-account', 'bind-foreign-card']
};