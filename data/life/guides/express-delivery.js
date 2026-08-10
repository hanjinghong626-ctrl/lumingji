// Guide: 快递收寄指南
export default {
  id: 'express-delivery',
  category: 'shopping',
  icon: '🚚',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ['express', 'delivery', 'logistics'],
  title: {
    zh: '快递收寄指南',
    en: 'Express Delivery Guide',
    ru: 'Руководство по экспресс-доставке'
  },
  summary: {
    zh: '快递查询、代收点取件、寄件流程与国际快递',
    en: 'Package tracking, pickup points, sending packages and international shipping',
    ru: 'Отслеживание, пункты получения, отправка и международная доставка'
  },
  intro: {
    zh: '中国的快递系统非常发达，网购后通常2-5天就能收到包裹。了解收寄流程很重要。',
    en: 'China\'s express delivery system is highly developed — packages usually arrive in 2-5 days. Understanding the process is important.',
    ru: 'Система доставки в Китае развита — посылки за 2-5 дней.'
  },
  preparation: {
    zh: [
    ],
    en: [
    ],
    ru: [
    ]
  },
  steps: [
    {
      title: {
        zh: '收寄快递',
        en: 'Receiving & Sending Packages',
        ru: 'Получение и отправка'
      },
      desc: {
        zh: '📬 收快递\n• 网购填写地址后，卖家发货\n• 快递到了会收到短信/电话通知\n• 到快递柜（菜鸟/丰巢）或代收点取件\n• 取件码：短信里的取件码或菜鸟App扫码\n\n📮 寄快递\n1. 支付宝/微信搜索"快递"\n2. 选择快递公司（推荐顺丰/中通/圆通）\n3. 填写寄件人和收件人信息\n4. 快递员上门取件（或到代收点）\n5. 称重计费，在线支付\n6. 获得运单号，可追踪\n\n🌍 国际快递\n• DHL/FedEx/UPS：3-7天，价格高\n• 中国邮政EMS：7-30天，性价比高\n• 顺丰国际：东南亚较快\n\n💡 快递费参考：国内首重8-15元，续重2-5元/kg',
        en: '📬 Receiving: seller ships → SMS notification → pickup at locker/station with code\n📮 Sending: search "快递" in Alipay/WeChat → fill info → courier picks up → pay online → track\n🌍 International: DHL/FedEx 3-7 days (expensive), EMS 7-30 days (good value)\n💡 Domestic: first weight ¥8-15, additional ¥2-5/kg',
        ru: '📬 Получение: SMS → пункт выдачи с кодом\n📮 Отправка: "快递" в Alipay/WeChat → заполнить → курьер → оплата\n🌍 Международная: DHL 3-7 дней, EMS 7-30 дней\n💡 Внутри страны: 8-15 ¥'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['return-refund', 'taobao-guide']
};
