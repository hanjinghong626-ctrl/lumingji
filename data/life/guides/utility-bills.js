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
      title: { zh: '了解中国的水电燃气费', en: 'Understand utility bills in China', ru: 'Коммунальные платежи в Китае' },
      desc: {
        zh: '中国的公用事业费用包括：水费（约3-5元/吨）、电费（约0.5-0.8元/度，分峰谷电价）、燃气费（约2.5-3.5元/立方米）。租房时需确认房东是否包水电，或自行缴纳。缴费周期通常为每月或每两月一次。',
        en: 'Utility costs in China include: water (~¥3-5/ton), electricity (~¥0.5-0.8/kWh, with peak/off-peak rates), and gas (~¥2.5-3.5/m³). When renting, confirm whether the landlord covers utilities or if you pay separately. Billing cycle is usually monthly or bi-monthly.',
        ru: 'Коммунальные расходы в Китае: вода (~¥3-5/тонна), электричество (~¥0,5-0,8/кВт·ч, с пиковым/ночным тарифом), газ (~¥2,5-3,5/м³). При аренде уточните, включает ли аренда коммунальные услуги. Оплата обычно ежемесячная или раз в два месяца.'
      }
    },
    {
      title: { zh: '用支付宝/微信缴费', en: 'Pay with Alipay/WeChat', ru: 'Оплата через Alipay/WeChat' },
      desc: {
        zh: '打开支付宝"生活缴费"或微信"生活缴费"，选择"水费""电费""燃气费"，输入户号（在合同或往期账单上找到），选择缴费单位，确认金额后支付。支持自动代扣设置，每月自动缴费不用操心。',
        en: 'Open Alipay or WeChat "Utility Payment" service. Select Water/Electricity/Gas, enter your account number (found on previous bills or rental contract), choose the utility provider, confirm the amount and pay. You can also set up auto-deduction for worry-free monthly payments.',
        ru: 'Откройте Alipay или WeChat → "Коммунальные платежи". Выберите Вода/Электричество/Газ, введите номер лицевого счёта (на квитанциях или в договоре), выберите поставщика, подтвердите сумму и оплатите. Можно настроить автоплатёж.'
      }
,      tip: {
        zh: '户号通常印在往期纸质账单上，也可以问房东或物业获取。部分城市支持在支付宝搜索地址直接绑定。',
        en: 'Account numbers are usually printed on previous paper bills; you can also ask the landlord or property management. Some cities allow binding by searching your address in Alipay.',
        ru: 'Номер счёта обычно напечатан на бумажных квитанциях; можно спросить у арендодателя или управляющей компании. В некоторых городах можно привязать по адресу через Alipay.'
      }
    },
    {
      title: { zh: '查看用量和阶梯计费', en: 'Check usage and tiered pricing', ru: 'Проверка расхода и ступенчатый тариф' },
      desc: {
        zh: '部分城市实行阶梯水价/电价：用量越多单价越贵。例如北京居民用电，月用电量220度以内0.4883元/度，超过后价格逐级上涨。可以在国家电网App（"网上国网"）或当地水务局网站查看详细用量。',
        en: 'Some cities use tiered water/electricity pricing: the more you use, the higher the unit price. For example, in Beijing residential electricity: under 220 kWh/month costs ¥0.4883/kWh, with increasing rates above that. Check detailed usage in the State Grid app or local water bureau website.',
        ru: 'В некоторых городах действует ступенчатый тариф: чем больше расход, тем выше цена. Например, в Пекине электричество до 220 кВт·ч/мес — ¥0,4883/кВт·ч, выше — дороже. Детальный расход можно посмотреть в приложении State Grid или на сайте водоканала.'
      }
,      tip: {
        zh: '夏季空调和冬季取暖是用电高峰期，注意控制用电量避免阶梯加价。',
        en: 'Summer AC and winter heating are peak electricity periods — watch your usage to avoid tier surcharges.',
        ru: 'Летом кондиционер и зимой отопление — пиковые периоды, следите за расходом, чтобы избежать повышенных тарифов.'
      }
    }
  ],
  faq: [
    { q: { zh: '不缴费会被停水停电吗？', en: 'Will utilities be cut off?', ru: 'Отключат ли услуги?' }, a: { zh: '会。欠费1-3个月后可能被停供。建议设置自动缴费。', en: 'Yes. After 1-3 months of non-payment, services may be cut off. Enable auto-payment.', ru: 'Да. Через 1-3 месяца могут отключить. Настройте автоплатёж.' } },
  ],
  nextGuides: ['rent-apartment', 'alipay-full-guide', 'wechat-pay-guide']
};