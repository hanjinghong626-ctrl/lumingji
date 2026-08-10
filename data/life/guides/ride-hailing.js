// Guide: 打车（滴滴）完全指南
export default {
  id: 'ride-hailing',
  category: 'transport',
  icon: '🚗',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: ["didi"],
  prerequisites: [],
  tags: ["didi", "taxi", "ride-hailing"],
  title: { zh: '打车（滴滴）完全指南', en: 'Ride-hailing (Didi) Complete Guide', ru: 'Полный гид по такси (Didi)' },
  summary: { zh: '滴滴打车全流程：叫车、选车型、安全功能、费用计算', en: 'Didi ride-hailing: ordering, car types, safety features, pricing', ru: 'Didi: заказ, типы авто, безопасность, цены' },
  intro: { zh: '滴滴是中国最大的网约车平台，类似Uber。通过App即可叫车，非常方便。', en: 'Didi is China\'s largest ride-hailing platform, similar to Uber. Order via app — very convenient.', ru: 'Didi — крупнейшая платформа такси в Китае, аналог Uber.' },
  preparation: { zh: ['滴滴App或支付宝中的滴滴小程序', '支付方式已设置'], en: ['Didi app or Didi mini-program in Alipay', 'Payment set up'], ru: ['Приложение Didi или мини-программа в Alipay', 'Оплата настроена'] },
  steps: [
    {
      title: { zh: '叫车流程', en: 'Ordering Process', ru: 'Процесс заказа' },
      desc: { zh: '1. 打开滴滴 → 系统自动定位上车点\n2. 确认上车点和目的地（可手动调整）\n3. 选择车型：\n   • 快车：经济型，最常用\n   • 专车：品质型，车况更好\n   • 拼车：与其他乘客共享，更便宜\n   • 豪华车：高端车型\n4. 点击「呼叫」→ 等待司机接单\n5. 查看司机信息和车牌号\n6. 上车确认身份\n7. 到达后自动扣款\n\n💡 安全功能：行程分享、一键报警、录音保护', en: '1. Open Didi → auto-detects pickup location\n2. Confirm pickup and destination\n3. Choose car type:\n   • Express: economy, most common\n   • Premier: better quality\n   • Pool: share with others, cheaper\n   • Luxury: high-end\n4. Tap "Call" → wait for driver\n5. Check driver info and plate number\n6. Confirm identity when boarding\n7. Auto-deducted on arrival\n\n💡 Safety: trip sharing, SOS button, recording protection', ru: '1. Откройте Didi → определение позиции\n2. Подтвердите точки\n3. Тип авто: Express, Premier, Pool, Luxury\n4. «Call» → ждите водителя\n5. Проверьте номер\n6. Подтвердите личность\n7. Автосписание\n\n💡 Безопасность: поделиться поездкой, SOS' },
    },
  ],
  faq: [
    { q: { zh: '深夜打车安全吗？', en: 'Is late-night ride safe?', ru: 'Безопасно ли такси ночью?' }, a: { zh: '滴滴有完善的安全功能：全程录音、行程分享、一键报警。建议夜间使用专车或优享车型，上车后将行程分享给朋友。', en: 'Didi has robust safety features: full recording, trip sharing, SOS. At night, use Premier or higher tier, share trip with friends.', ru: 'Didi имеет защиту: запись, paylaş, SOS. Ночью используйте Premier, поделитесь поездкой.' } },
  ],
  nextGuides: ['metro-guide', 'bus-guide', 'bike-sharing']
};