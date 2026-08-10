// Guide: 地铁乘坐指南
export default {
  id: 'metro-guide',
  category: 'transport',
  icon: '🚇',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["metro", "subway", "transport"],
  title: { zh: '地铁乘坐指南', en: 'Metro Guide', ru: 'Пользование метро' },
  summary: { zh: '中国城市地铁乘坐全流程：购票、安检、乘车、换乘', en: 'Complete metro riding guide: tickets, security, riding, transferring', ru: 'Полный гид по метро: билеты, досмотр, поездка, пересадки' },
  intro: { zh: '中国主要城市都有地铁系统，是最便捷的出行方式之一。本指南帮你掌握乘坐地铁的全部流程。', en: 'Major Chinese cities have metro systems, one of the most convenient ways to get around.', ru: 'Крупные города Китая имеют метро — один из удобных видов транспорта.' },
  preparation: { zh: ['手机（用于扫码或App购票）', '零钱（备用）'], en: ['Phone (for QR code or app)', 'Small change (backup)'], ru: ['Телефон (для QR или приложения)', 'Мелочь (запас)'] },
  steps: [
    {
      title: { zh: '购票进站', en: 'Buy Ticket & Enter', ru: 'Покупка билета и вход' },
      desc: { zh: '🎫 购票方式：\n• 手机扫码：支付宝/微信搜索当地地铁App或小程序\n• 自动售票机：选线路→选站→付款→出票\n• 交通卡：办理当地交通卡刷卡进站\n• 单程票：在窗口或机器购买\n\n🔒 安检：\n• 所有行李过X光机\n• 随身包需打开检查\n• 液体可能需要试饮\n\n💡 高峰期（7:30-9:00, 17:30-19:00）人多，注意排队', en: '🎫 Ticket options:\n• Phone QR: search local metro mini-program in Alipay/WeChat\n• Vending machine: select line → station → pay → ticket\n• Transit card: tap to enter\n• Single-trip ticket: window or machine\n\n🔒 Security:\n• All bags through X-ray\n• Open bags for inspection\n• Liquids may need taste test\n\n💡 Rush hours (7:30-9:00, 17:30-19:00) are crowded', ru: '🎫 Билеты:\n• QR в Alipay/WeChat\n• Автомат: линия → станция → оплата\n• Транспортная карта\n• Одноразовый билет\n\n🔒 Досмотр: сумки через рентген, жидкости на проверку' },
    },
    {
      title: { zh: '乘车与换乘', en: 'Riding & Transferring', ru: 'Поездка и пересадки' },
      desc: { zh: '🚇 乘车：\n• 看线路图确认方向\n• 先下后上，排队候车\n• 车厢内不要大声说话或外放声音\n\n🔄 换乘：\n• 跟随「换乘」标识\n• 部分换乘需要出站再进站\n• 注意末班车时间（通常22:30-23:30）\n\n💡 用高德地图查询最优路线', en: '🚇 Riding: check direction on map, let passengers exit first, keep quiet\n\n🔄 Transferring: follow transfer signs, some require exit and re-entry, watch last train time (usually 22:30-23:30)\n\n💡 Use Amap for optimal routes', ru: '🚇 Поездка: проверьте направление, сначала выход, потом вход\n🔄 Пересадки: следуйте знакам, следите за последним поездом\n💡 Используйте Amap для маршрутов' },
    },
  ],
  faq: [
    { q: { zh: '不会中文怎么买票？', en: 'How to buy tickets without Chinese?', ru: 'Как купить билет без знания китайского?' }, a: { zh: '大部分自动售票机有英文界面。也可以用支付宝/微信的地铁乘车码直接扫码进站，无需购票。', en: 'Most vending machines have English interface. You can also use Alipay/WeChat metro QR code to scan directly.', ru: 'Большинство автоматов имеют английский интерфейс. Или используйте QR-код метро в Alipay/WeChat.' } },
  ],
  nextGuides: ['bus-guide', 'transport-card', 'bike-sharing']
};