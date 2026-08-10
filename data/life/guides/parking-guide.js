// Guide: 停车指南
export default {
  id: 'parking-guide',
  category: 'transport',
  icon: '🅿️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["parking", "driving"],
  title: { zh: '停车指南', en: 'Parking Guide', ru: 'Парковка' },
  summary: { zh: '中国城市停车规则、停车场查找与缴费方法', en: 'Parking rules, finding lots, and payment in Chinese cities', ru: 'Правила парковки, поиск и оплата в городах Китая' },
  intro: { zh: '中国城市停车位紧张，了解停车规则和付费方式很重要。', en: 'Parking spaces are tight in Chinese cities. Understanding rules and payment is important.', ru: 'Парковочных мест мало. Важно знать правила и оплату.' },
  preparation: { zh: ['地图App（查找停车场）'], en: ['Map app (find parking)'], ru: ['Карта (поиск парковки)'] },
  steps: [
    {
      title: { zh: '找停车场与付费', en: 'Find Parking & Pay', ru: 'Поиск и оплата парковки' },
      desc: { zh: '🅿️ 停车场类型：\n• 商场/写字楼地下停车场\n• 路边收费停车位（白色标线）\n• 小区停车位\n\n💰 费用：\n• 一线城市：10-20元/小时\n• 二三线城市：5-10元/小时\n• 路边通常前15分钟免费\n\n📱 付费方式：\n• 扫码支付（支付宝/微信）\n• 部分停车场支持无感支付（绑定车牌）\n\n⚠️ 严禁在非机动车道、消防通道停车，会被拖车或罚款', en: '🅿️ Types: mall/office underground, roadside metered (white lines), residential\n\n💰 Cost: Tier 1 cities ¥10-20/hr, Tier 2-3 ¥5-10/hr, roadside first 15min free\n\n📱 Payment: QR scan (Alipay/WeChat), some support plate-linked auto-pay\n\n⚠️ Never park in bike lanes or fire lanes — towed or fined', ru: '🅿️ Типы: подземные, обочина (белые линии), жилые\n💰 Стоимость: крупные города 10-20 ¥/ч, мелкие 5-10 ¥/ч\n📱 Оплата: QR-код\n⚠️ Не паркуйтесь на велодорожках — штраф' },
    },
  ],
  faq: [
    { q: { zh: '路边停车怎么收费？', en: 'How does roadside parking work?', ru: 'Как оплачивать парковку на обочине?' }, a: { zh: '路边停车位通常有计时器或管理员。停好后扫码缴费，或在管理员引导下缴费。部分城市有免费时段（如夜间）。', en: 'Roadside spots have timers or attendants. Scan QR to pay, or pay the attendant. Some cities offer free nighttime parking.', ru: 'Таймеры или охранники. Сканируйте QR или платите охраннику. В некоторых городах ночью бесплатно.' } },
  ],
  nextGuides: ['drive-in-china', 'traffic-rules', 'ev-charging']
};