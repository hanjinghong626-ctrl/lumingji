// Guide: 水电燃气缴费
export default {
  id: 'utility-bills',
  category: 'payment',
  icon: '💡',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: ["alipay", "wechat"],
  prerequisites: [],
  tags: ["utility", "bills", "payment"],
  title: { zh: '水电燃气缴费', en: 'Utility Bills Payment', ru: 'Оплата коммунальных услуг' },
  summary: { zh: '校外住宿的水电燃气费在线缴纳方法', en: 'How to pay utility bills online when living off-campus', ru: 'Онлайн-оплата коммунальных услуг при аренде' },
  intro: { zh: '如果你在校外租房，水电燃气费通常需自行缴纳。通过支付宝或微信就能轻松完成。', en: 'If you live off-campus, utilities are usually your responsibility. Pay easily via Alipay or WeChat.', ru: 'При аренде вне кампуса — оплачивайте через Alipay или WeChat.' },
  preparation: { zh: ['租房合同（了解户号）', '水电燃气户号', '支付宝或微信'], en: ['Rental contract (for account numbers)', 'Utility account numbers', 'Alipay or WeChat'], ru: ['Договор аренды', 'Номера счетов', 'Alipay или WeChat'] },
  steps: [
    {
      title: { zh: '在线缴费步骤', en: 'Online Payment Steps', ru: 'Онлайн-оплата' },
      desc: { zh: '1. 支付宝搜索「生活缴费」或微信 → 服务 → 生活缴费\n2. 选择类型（水费/电费/燃气费）\n3. 选择城市和缴费单位\n4. 输入客户编号\n5. 确认缴费\n\n💡 可开启自动缴费，避免逾期被停供。', en: '1. Alipay: search "生活缴费" or WeChat: Services → Utility Bills\n2. Select type\n3. City and provider\n4. Account number\n5. Confirm\n\n💡 Enable auto-payment to avoid disconnection.', ru: '1. Alipay: "生活缴费" или WeChat: Services → Utility Bills\n2. Тип\n3. Город и поставщик\n4. Номер счёта\n5. Оплатите\n\n💡 Включите автоплатёж.' },
    },
  ],
  faq: [
    { q: { zh: '不缴费会被停水停电吗？', en: 'Will utilities be cut off?', ru: 'Отключат ли услуги?' }, a: { zh: '会。欠费1-3个月后可能被停供。建议设置自动缴费。', en: 'Yes. After 1-3 months of non-payment, services may be cut off. Enable auto-payment.', ru: 'Да. Через 1-3 месяца могут отключить. Настройте автоплатёж.' } },
  ],
  nextGuides: ['rent-apartment', 'alipay-full-guide', 'wechat-pay-guide']
};