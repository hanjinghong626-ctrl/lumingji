// Guide: 线上药房与送药上门
export default {
  id: 'pharmacy-guide',
  category: 'medical',
  icon: '🏪',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 15,
  apps: ['meituan-waimai'],
  prerequisites: ['buy-medicine'],
  tags: ['pharmacy', 'online', 'delivery'],
  title: {
    zh: '线上药房与送药上门',
    en: 'Online Pharmacy & Medicine Delivery',
    ru: 'Онлайн-аптека и доставка лекарств'
  },
  summary: {
    zh: '外卖买药、网上药房、药品配送与注意事项',
    en: 'Food delivery apps for medicine, online pharmacies, delivery and precautions',
    ru: 'Покупка лекарств через доставку, онлайн-аптеки и меры предосторожности'
  },
  intro: {
    zh: '在中国，买药不仅可以去实体药店，还能通过外卖平台30分钟送药上门，非常方便。',
    en: 'In China, besides physical pharmacies, you can order medicine through food delivery apps with 30-minute delivery — very convenient.',
    ru: 'В Китае, помимо аптек, можно заказать лекарства через доставку за 30 минут.'
  },
  preparation: {
    zh: [
      '美团或饿了么App',
      '支付宝/微信支付'
    ],
    en: [
      'Meituan or Ele.me app',
      'Alipay/WeChat Pay'
    ],
    ru: [
      'Приложение Meituan или Ele.me',
      'Alipay/WeChat Pay'
    ]
  },
    steps: [
    {
      title: { zh: '外卖买药步骤', en: 'Steps for medicine delivery', ru: 'Шаги' },
      desc: {
        zh: '外卖买药步骤：',
        en: 'Steps for medicine delivery:',
        ru: 'Шаги:\n1. Откройте App → "买药"\n2. Выберите аптеку\n3. Найдите лекарство\n4. Оформите заказ\n5. Доставка за 30 минут'
      }
    },
    {
      title: { zh: '美团/饿了么买药', en: 'Meituan/Ele.me pharmacy', ru: 'Работает ночью, можно проконсультироваться онлайн.' },
      desc: {
        zh: '📱 美团/饿了么买药\n1. 打开App → 搜索"买药"/"送药"\n2. 选择附近药店\n3. 搜索药品名称或按症状分类浏览\n4. 加入购物车，填写地址\n5. 下单支付\n6. 骑手30分钟内送到',
        en: '📱 Meituan/Ele.me pharmacy\n1. Open app → search "买药" (buy medicine) / "送药" (deliver medicine)\n2. Choose nearby pharmacy\n3. Search medicine name or browse by symptom category\n4. Add to cart, enter address\n5. Order and pay\n6. Rider delivers within 30 minutes',
        ru: '💡 Работает ночью, можно проконсультироваться онлайн.'
      }
    },
    {
      title: { zh: '小技巧', en: 'Tips', ru: 'Работает ночью, можно проконсультироваться онлайн.' },
      desc: {
        zh: '💡 小技巧：\n• 深夜也能买药（很多药店24小时营业）\n• 可以在线咨询药师\n• 处方药需上传处方照片\n• 夜间配送费可能略高',
        en: '💡 Tips:\n• Available late at night (many pharmacies are 24h)\n• Can consult pharmacist online\n• Prescription drugs need prescription photo upload\n• Late-night delivery may cost slightly more',
        ru: '💡 Работает ночью, можно проконсультироваться онлайн.'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['hospital-guide']
};
