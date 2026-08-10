// Guide: 微信支付完全指南
export default {
  id: 'wechat-pay-guide',
  category: 'payment',
  icon: '💚',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 20,
  apps: ["wechat"],
  prerequisites: ["setup-wechat"],
  tags: ["wechat", "payment", "wallet"],
  title: { zh: '微信支付完全指南', en: 'WeChat Pay Complete Guide', ru: 'Полное руководство по WeChat Pay' },
  summary: { zh: '开通钱包、收付款、转账、红包、AA付款等全功能', en: 'Enable wallet, payments, transfers, red packets, split bills', ru: 'Кошелёк, платежи, переводы, красные конверты, разделение счетов' },
  intro: { zh: '微信支付深度集成在微信中，社交与支付无缝结合。本指南帮你完全掌握微信支付。', en: 'WeChat Pay is deeply integrated into WeChat, combining social and payment features.', ru: 'WeChat Pay интегрирован в WeChat, объединяя общение и платежи.' },
  preparation: { zh: ['已注册微信', '已完成实名认证', '已绑定银行卡'], en: ['Registered WeChat', 'Real-name verified', 'Bank card linked'], ru: ['WeChat зарегистрирован', 'Верификация пройдена', 'Карта привязана'] },
  steps: [
    {
      title: { zh: '开通微信钱包', en: 'Enable Wallet', ru: 'Активируйте кошелёк' },
      desc: {
        zh: '1. 微信 → 我 → 服务 → 钱包\n2. 设置6位支付密码\n3. 绑定银行卡\n\n开通后显示：零钱、零钱通、银行卡、收付款码',
        en: '1. WeChat → Me → Services → Wallet\n2. Set 6-digit payment PIN\n3. Link bank card\n\nShows: Balance, Balance Plus, Cards, QR codes',
        ru: '1. WeChat → Me → Services → Wallet\n2. Установите 6-значный PIN\n3. Привяжите карту'
      },
    },
    {
      title: { zh: '收付款与红包', en: 'Payments & Red Packets', ru: 'Платежи и красные конверты' },
      desc: {
        zh: '💰 付款给商家：\n• 我 → 服务 → 收付款 → 出示付款码\n• 小额免密（1000元以下）\n\n🧧 发红包：\n• 聊天窗口 → + → 红包\n• 输入金额 → 发送\n• 群红包可设拼手气（随机金额）\n\n💸 转账：聊天窗口 → + → 转账\n\n💡 红包上限200元/个（节日可调至520元）',
        en: '💰 Pay merchants: Me → Services → Money → show QR code. Under ¥1000 is PIN-free.\n\n🧧 Red packets: Chat → + → Red Packet → enter amount → send. Group packets have random amounts.\n\n💸 Transfer: Chat → + → Transfer\n\n💡 Red packet limit: ¥200 each (¥520 on holidays)',
        ru: '💰 Оплата: Me → Services → Money → QR-код. До ¥1000 без PIN.\n\n🧧 Конверты: Чат → + → Red Packet. В группе — случайные суммы.\n\n💸 Перевод: Чат → + → Transfer'
      },
    },
  ],
  faq: [
    {
      q: { zh: '微信和支付宝哪个更好用？', en: 'WeChat Pay vs Alipay?', ru: 'Что лучше — WeChat Pay или Alipay?' },
      a: { zh: '两个都重要，建议同时使用。微信社交场景更方便，支付宝理财功能更丰富。日常消费差不多，但有些商家只支持一个。', en: 'Both are essential. WeChat excels in social scenarios; Alipay has richer financial features. Daily spending is similar, but some merchants only accept one.', ru: 'Оба важны. WeChat удобнее для социальных сценариев; Alipay — больше финансовых функций. Используйте оба.' },
    },
  ],
  nextGuides: ['alipay-full-guide', 'bind-foreign-card', 'campus-card']
};