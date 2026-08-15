// Guide: 超市购物指南
export default {
  id: 'supermarket-guide',
  category: 'shopping',
  icon: '🏪',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ['supermarket', 'groceries', 'daily'],
  title: {
    zh: '超市购物指南',
    en: 'Supermarket Shopping Guide',
    ru: 'Руководство по супермаркетам'
  },
  summary: {
    zh: '主要超市品牌、购物方式、会员优惠与自助结账',
    en: 'Major supermarket brands, shopping methods, membership perks and self-checkout',
    ru: 'Основные сети, способы покупок, членство и самообслуживание'
  },
  intro: {
    zh: '中国的超市种类繁多，从大型连锁到社区便利店应有尽有。',
    en: 'Chinese supermarkets range from large chains to neighborhood convenience stores.',
    ru: 'Супермаркеты в Китае — от крупных сетей до маленьких магазинов.'
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
      title: { zh: '主要超市品牌', en: 'Step 1', ru: 'Сети: Walmart, RT-Mart, Yonghui, Hema' },
      desc: {
        zh: '主要超市品牌：',
        en: '🏬 Major chains: Walmart, RT-Mart, Yonghui, Hema Fresh (Alibaba)',
        ru: '🏬 Сети: Walmart, RT-Mart, Yonghui, Hema'
      }
    },
    {
      title: { zh: '大型超市', en: 'Convenience: 7-11, FamilyMart, Lawson (24h)', ru: 'Магазины: 7-11, FamilyMart' },
      desc: {
        zh: '🏬 大型超市\n• 沃尔玛（Walmart）：外资，商品全\n• 大润发（RT-Mart）：本土大型超市\n• 永辉超市：生鲜品质好\n• 盒马鲜生：阿里旗下，新零售',
        en: '🏪 Convenience: 7-11, FamilyMart, Lawson (24h)',
        ru: '🏪 Магазины: 7-11, FamilyMart'
      }
    },
    {
      title: { zh: '便利店', en: 'Payment: Alipay/WeChat QR code', ru: 'Оплата: Alipay/WeChat' },
      desc: {
        zh: '🏪 便利店\n• 7-11/全家/罗森：24小时，价格略高\n• 美宜佳：覆盖广',
        en: '💳 Payment: Alipay/WeChat QR code',
        ru: '💳 Оплата: Alipay/WeChat'
      }
    },
    {
      title: { zh: '支付方式', en: 'Download Hema app for 30-min grocery delivery', ru: 'Hema — доставка за 30 мин' },
      desc: {
        zh: '💳 支付方式\n• 大部分超市支持支付宝/微信扫码支付\n• 部分有自助结账机',
        en: '💡 Download Hema app for 30-min grocery delivery',
        ru: '💡 Hema — доставка за 30 мин'
      }
    },
    {
      title: { zh: '建议下载盒马App，可以30分钟送菜上门。', en: 'Download Hema app for 30-min grocery delivery', ru: 'Hema — доставка за 30 мин' },
      desc: {
        zh: '💡 建议下载盒马App，可以30分钟送菜上门。',
        en: '💡 Download Hema app for 30-min grocery delivery',
        ru: '💡 Hema — доставка за 30 мин'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['shopping-festivals']
};
