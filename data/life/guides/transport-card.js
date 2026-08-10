// Guide: 交通卡办理
export default {
  id: 'transport-card',
  category: 'transport',
  icon: '🎫',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["transit-card", "transport"],
  title: { zh: '交通卡办理', en: 'Transit Card Guide', ru: 'Транспортная карта' },
  summary: { zh: '办理城市交通卡，公交地铁通用，支持NFC手机刷卡', en: 'Get city transit card for bus and metro, supports NFC phone tap', ru: 'Транспортная карта для автобуса и метро, поддержка NFC' },
  intro: { zh: '交通卡是乘坐公交地铁最方便的方式，刷卡有折扣优惠，还可在手机上使用。', en: 'Transit cards are the most convenient way to ride buses and metros, with discounts and phone support.', ru: 'Транспортная карта — удобный способ проезда со скидками и поддержкой телефона.' },
  preparation: { zh: ['护照', '押金（约20元）'], en: ['Passport', 'Deposit (~¥20)'], ru: ['Паспорт', 'Залог (~20 ¥)'] },
  steps: [
    {
      title: { zh: '办理与使用', en: 'Get and Use', ru: 'Оформление и использование' },
      desc: { zh: '📍 办理地点：\n• 地铁站服务窗口\n• 部分便利店（如7-11）\n\n📋 流程：\n1. 到窗口说「办一张交通卡」\n2. 缴纳押金（约20元）+ 首次充值\n3. 拿到卡片即可使用\n\n📱 手机交通卡：\n• iPhone: 钱包App → 添加交通卡（部分城市支持）\n• 华为/小米: 钱包App中开通\n• 刷卡过闸机，和实体卡一样\n\n💡 交通联合卡可跨城市使用（全国300+城市）', en: '📍 Where: metro station counters, some convenience stores\n\n📋 Process: ask for transit card → pay deposit (~¥20) + top-up → done\n\n📱 Phone transit card:\n• iPhone: Wallet → add transit card (some cities)\n• Huawei/Xiaomi: Wallet app\n• Tap phone at gates\n\n💡 China T-Union card works in 300+ cities nationwide', ru: '📍 Где: стойки метро, магазины\n📋 Процесс: запросите карту → залог ~20 ¥ + пополнение\n📱 Телефон: iPhone Wallet, Huawei/Xiaomi Wallet\n💡 T-Union — 300+ городов' },
    },
  ],
  faq: [
    { q: { zh: '离开城市时交通卡怎么退？', en: 'How to return transit card when leaving?', ru: 'Как вернуть карту при отъезде?' }, a: { zh: '到地铁站的服务窗口退还，退还押金和余额。部分城市需在指定网点办理。', en: 'Return at metro station service counter for deposit and balance refund. Some cities have designated locations.', ru: 'Верните на стойке метро — вернут залог и остаток.' } },
  ],
  nextGuides: ['metro-guide', 'bus-guide', 'bike-sharing']
};