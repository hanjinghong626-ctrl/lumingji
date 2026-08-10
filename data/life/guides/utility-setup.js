// Guide: 水电燃气开通
export default {
  id: 'utility-setup',
  category: 'housing',
  icon: '💡',
  type: 'hands-on',
  difficulty: 1,
  estimatedTime: 30,
  apps: ['alipay', 'wechat'],
  prerequisites: ['rent-apartment'],
  tags: ['utility', 'electricity', 'water', 'gas'],
  title: {
    zh: '水电燃气开通',
    en: 'Setting Up Utilities',
    ru: 'Подключение коммунальных услуг'
  },
  summary: {
    zh: '水电燃气开户、缴费方式、用量查询与省钱技巧',
    en: 'Utility account setup, payment methods, usage tracking and money-saving tips',
    ru: 'Открытие счетов за коммунальные услуги, способы оплаты, контроль расхода и экономия'
  },
  intro: {
    zh: '入住后需要确认水电燃气是否正常开通。在中国，水电燃气费用可以通过支付宝、微信在线缴纳，非常方便。',
    en: 'After moving in, you need to confirm that water, electricity and gas are properly connected. In China, utility bills can be paid conveniently online through Alipay or WeChat.',
    ru: 'После заселения убедитесь, что вода, электричество и газ подключены. В Китае коммунальные платежи можно удобно оплачивать онлайн через Alipay или WeChat.'
  },
  preparation: {
    zh: [
      '房屋租赁合同',
      '水电燃气户号（找房东或物业获取）',
      '支付宝或微信（已实名认证）'
    ],
    en: [
      'Rental contract',
      'Utility account numbers (get from landlord or property management)',
      'Alipay or WeChat (verified)'
    ],
    ru: [
      'Договор аренды',
      'Номера счетов коммунальных услуг (у арендодателя)',
      'Alipay или WeChat (верифицированный)'
    ]
  },
  steps: [
    {
      title: {
        zh: '确认账户信息',
        en: 'Confirm Account Information',
        ru: 'Подтверждение информации об аккаунте'
      },
      desc: {
        zh: '入住时向房东或物业获取：\n• 电费户号（国家电网/南方电网）\n• 水费户号（当地自来水公司）\n• 燃气户号（当地燃气公司）\n• 物业缴费信息\n\n问清楚：\n• 费用是预付还是后付\n• 是否有预付费电表/水表\n• 当前读数是多少（拍照记录）',
        en: 'Get these from landlord or property management:\n• Electricity account (State Grid/Southern Grid)\n• Water account (local water company)\n• Gas account (local gas company)\n• Property management fee info\n\nAsk clearly:\n• Prepaid or post-paid\n• Whether there are prepaid meters\n• Current readings (take photos)',
        ru: 'Получите от арендодателя:\n• Счёт за электричество\n• Счёт за воду\n• Счёт за газ\n• Информация об обслуживании\n\nУточните:\n• Предоплата или постоплата\n• Есть ли предоплатные счётчики\n• Текущие показания (сфотографируйте)'
      }
    },
    {
      title: {
        zh: '在线缴费',
        en: 'Pay Bills Online',
        ru: 'Онлайн-оплата'
      },
      desc: {
        zh: '支付宝/微信缴费步骤：\n\n📱 支付宝\n1. 首页搜索"生活缴费"\n2. 选择缴费类型（水/电/燃气）\n3. 输入户号\n4. 确认地址和户名\n5. 选择金额，完成支付\n\n📱 微信\n1. "我"→"服务"→"生活缴费"\n2. 选择类型和地区\n3. 输入户号\n4. 确认缴费\n\n💡 可以开启自动缴费，避免逾期。',
        en: 'Alipay/WeChat payment steps:\n\n📱 Alipay\n1. Search "生活缴费" on homepage\n2. Select bill type (water/electricity/gas)\n3. Enter account number\n4. Confirm address and name\n5. Choose amount and pay\n\n📱 WeChat\n1. "Me" → "Services" → "Utility Bills"\n2. Select type and region\n3. Enter account number\n4. Confirm payment\n\n💡 Enable auto-payment to avoid overdue.',
        ru: 'Оплата через Alipay/WeChat:\n\n📱 Alipay\n1. Найдите "生活缴费"\n2. Выберите тип (вода/электричество/газ)\n3. Введите номер счёта\n4. Подтвердите адрес\n5. Оплатите\n\n💡 Включите автоплатеж.'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '水电费大概多少？',
        en: 'How much are utilities?',
        ru: 'Сколько стоят коммунальные услуги?'
      },
      a: {
        zh: '因城市和用量而异。一般参考：电费0.5-0.6元/度，水费3-5元/吨，燃气2-3元/立方米。单人月均水电约100-200元，夏天开空调会更高。',
        en: 'Varies by city and usage. General reference: electricity ¥0.5-0.6/kWh, water ¥3-5/ton, gas ¥2-3/m³. Single person monthly utility cost ~¥100-200, higher in summer with AC.',
        ru: 'Зависит от города и расхода. Ориентир: электричество 0.5-0.6 ¥/кВт·ч, вода 3-5 ¥/тонн, газ 2-3 ¥/м³. Среднемесячно ~100-200 ¥, летом с кондиционером больше.'
      }
    }
  ],
  nextGuides: ['internet-setup', 'home-appliances']
};
