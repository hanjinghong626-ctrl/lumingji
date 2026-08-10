// Guide: 退换货指南
export default {
  id: 'return-refund',
  category: 'shopping',
  icon: '↩️',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 20,
  apps: [],
  prerequisites: ['taobao-guide'],
  tags: ['return', 'refund', 'complaint'],
  title: {
    zh: '退换货指南',
    en: 'Return & Refund Guide',
    ru: 'Руководство по возврату'
  },
  summary: {
    zh: '七天无理由退货、退款流程、投诉渠道与维权',
    en: '7-day no-reason return, refund process, complaint channels and rights protection',
    ru: 'Возврат без причины за 7 дней, процесс возврата, жалобы и защита прав'
  },
  intro: {
    zh: '在中国网购有完善的退换货保障。了解退货流程和维权渠道，买到不满意的可以退。',
    en: 'Online shopping in China has comprehensive return policies. Knowing the process means you can return unsatisfactory purchases.',
    ru: 'Онлайн-покупки в Китае имеют полную систему возврата.'
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
        zh: '退换货流程',
        en: 'Return Process',
        ru: 'Процесс возврата'
      },
      desc: {
        zh: '🔄 七天无理由退货\n• 网购商品签收后7天内可无理由退\n• 商品需完好、不影响二次销售\n• 定制商品、鲜活易腐等除外\n\n📋 退货步骤\n1. 在订单页面点击"申请退货/退款"\n2. 选择退货原因\n3. 卖家同意（通常24小时内）\n4. 寄回商品（快递费看情况）\n5. 卖家收货确认后退款\n6. 退款到支付宝（1-3天）\n\n⚠️ 运费规则\n• 商品质量问题：卖家承担运费\n• 无理由退货：通常买家承担运费\n• 有"运费险"的商品可以免退货运费\n\n💡 如果卖家不同意退货，可以申请平台介入（淘宝客服）。',
        en: '🔄 7-day no-reason return: within 7 days of receipt, item must be in original condition\n📋 Steps: apply → seller agrees (24h) → ship back → refund to Alipay (1-3 days)\n⚠️ Quality issues: seller pays shipping; no-reason: buyer usually pays\n💡 If seller refuses, request platform intervention',
        ru: '🔄 7 дней без причины\n📋 Заявка → одобрение → отправка → возврат (1-3 дня)\n⚠️ Брак: продавец платит; без причины: покупатель\n💡 При отказе — вмешательство платформы'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['shopping-festivals', 'taobao-guide']
};
