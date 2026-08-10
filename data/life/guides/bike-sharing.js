// Guide: 共享单车使用
export default {
  id: 'bike-sharing',
  category: 'transport',
  icon: '🚲',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 5,
  apps: [],
  prerequisites: [],
  tags: ["bike", "sharing", "hellobike"],
  title: { zh: '共享单车使用', en: 'Shared Bike Guide', ru: 'Велосипеды sharing' },
  summary: { zh: '美团/哈啰/青桔共享单车扫码骑行全流程', en: 'Scan and ride Meituan/Hello/Clean shared bikes', ru: 'Сканирование и поездка на велосипедах Meituan/Hello/Clean' },
  intro: { zh: '共享单车遍布中国城市街头，扫码即骑，短途出行首选。', en: 'Shared bikes are everywhere in Chinese cities. Scan to ride — best for short trips.', ru: 'Шеринговые велосипеды по всему городу. Сканируйте и езжайте.' },
  preparation: { zh: ['支付宝或微信（扫码开锁）'], en: ['Alipay or WeChat (scan to unlock)'], ru: ['Alipay или WeChat (сканирование)'] },
  steps: [
    {
      title: { zh: '扫码骑行', en: 'Scan and Ride', ru: 'Сканирование и поездка' },
      desc: { zh: '🚲 三大品牌：\n• 美团单车（黄车）：支付宝扫码\n• 哈啰单车（蓝车）：支付宝扫码\n• 青桔单车（绿车）：微信扫码\n\n📱 操作步骤：\n1. 找到路边停放的共享单车\n2. 打开对应App或支付宝/微信的小程序\n3. 扫描车上二维码\n4. 听到「咔嗒」开锁声\n5. 骑行到目的地\n6. 停放在指定区域 → 手动锁车 → 自动扣费\n\n💰 费用：约1-1.5元/15分钟\n💡 注意停在划线区域内，否则可能被额外收费', en: '🚲 Three brands:\n• Meituan (yellow): scan with Alipay\n• Hello (blue): scan with Alipay\n• Qingju (green): scan with WeChat\n\n📱 Steps: find bike → scan QR → unlock → ride → park in designated area → lock → auto-charge\n\n💰 ~¥1-1.5 per 15 min\n💡 Park in marked areas or get extra charges', ru: '🚲 Три бренда: Meituan (жёлтый), Hello (синий), Qingju (зелёный)\n📱 Найдите → сканируйте → езжайте → припаркуйте в зоне → заблокируйте\n💰 ~1-1.5 ¥/15 мин' },
    },
  ],
  faq: [
    { q: { zh: '可以骑到路边锁车就走吗？', en: 'Can I just lock and leave anywhere?', ru: 'Можно заблокировать и оставить где угодно?' }, a: { zh: '不行。必须停放在指定停车区域（白线框内），否则会被收取调度费（5-20元）。', en: 'No. Must park in designated areas (white marked zones), or face a repositioning fee (¥5-20).', ru: 'Нет. Только в размеченных зонах, иначе штраф 5-20 ¥.' } },
  ],
  nextGuides: ['metro-guide', 'bus-guide', 'transport-card']
};