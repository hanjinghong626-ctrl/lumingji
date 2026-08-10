// Guide: 手机充值方法
export default {
  id: 'recharge-phone',
  category: 'communication',
  icon: '🔋',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 5,
  apps: ["alipay", "wechat"],
  prerequisites: [],
  tags: ["recharge", "phone", "top-up"],
  title: { zh: '手机充值方法', en: 'Phone Top-up Methods', ru: 'Пополнение телефона' },
  summary: { zh: '支付宝/微信/银行App手机话费充值方法', en: 'Top-up via Alipay/WeChat/banking apps', ru: 'Пополнение через Alipay/WeChat/банк' },
  intro: { zh: '手机话费充值非常方便，随时随地在线完成。', en: 'Phone top-up is very convenient, can be done online anytime.', ru: 'Пополнение очень удобное, онлайн в любое время.' },
  preparation: { zh: ['手机号', '支付宝/微信'], en: ['Phone number', 'Alipay/WeChat'], ru: ['Номер телефона', 'Alipay/WeChat'] },
  steps: [
    {
      title: { zh: '在线充值', en: 'Online Top-up', ru: 'Онлайн-пополнение' },
      desc: { zh: '📱 充值方法：\n\n1️⃣ 支付宝：首页 → 充值中心 → 输入手机号 → 选金额 → 支付\n2️⃣ 微信：我 → 服务 → 手机充值 → 输入号码 → 支付\n3️⃣ 银行App：大部分银行App也有话费充值\n\n💰 金额：10/30/50/100/200元\n💡 部分充值有折扣（如充50送5元）\n💡 可设置自动充值（余额低于阈值自动充值）', en: '📱 Methods:\n1️⃣ Alipay: homepage → Recharge Center → enter number → amount → pay\n2️⃣ WeChat: Me → Services → Phone Top-up → number → pay\n3️⃣ Bank apps: most have phone top-up\n\n💰 Amounts: 10/30/50/100/200 yuan\n💡 Some have discounts; set up auto top-up', ru: '📱 Методы:\n1️⃣ Alipay: Recharge Center → номер → сумма\n2️⃣ WeChat: Services → Phone Top-up\n💰 Суммы: 10/30/50/100/200 ¥\n💡 Скидки, автопополнение' },
    },
  ],
  faq: [
    { q: { zh: '话费没到账怎么办？', en: 'What if top-up doesn\'t arrive?', ru: 'Пополнение не пришло?' }, a: { zh: '通常即时到账，偶尔延迟1-5分钟。如果超过30分钟未到账，联系充值平台客服或运营商客服（10086/10010/10000）。', en: 'Usually instant, occasionally 1-5 min delay. If over 30 minutes, contact platform support or carrier (10086/10010/10000).', ru: 'Обычно мгновенно. Если >30 мин — свяжитесь с оператором (10086/10010/10000).' } },
  ],
  nextGuides: ['choose-phone-plan', 'buy-sim-card', 'wechat-full-guide']
};