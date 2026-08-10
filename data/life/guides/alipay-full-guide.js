// Guide: 支付宝进阶使用
export default {
  id: 'alipay-full-guide',
  category: 'payment',
  icon: '💙',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 20,
  apps: ["alipay"],
  prerequisites: ["setup-alipay"],
  tags: ["alipay", "payment", "advanced"],
  title: { zh: '支付宝进阶使用', en: 'Alipay Advanced Guide', ru: 'Продвинутое использование Alipay' },
  summary: { zh: '支付宝高级功能：生活缴费、余额宝、花呗、蚂蚁森林等实用功能详解', en: 'Advanced Alipay features: utility bills, Yu\'ebao, Huabei, Ant Forest, and more', ru: 'Продвинутый Alipay: оплата ЖКХ, Yu\'ebao, Huabei, Ant Forest и другое' },
  intro: { zh: '完成基础设置后，支付宝还有大量实用功能。本指南教你使用生活缴费、余额宝、花呗、蚂蚁森林等功能，让支付宝真正融入日常生活。', en: 'After basic setup, Alipay has many useful features. This guide covers utility payments, Yu\'ebao, Huabei, and Ant Forest.', ru: 'После базовой настройки Alipay предлагает множество функций: ЖКХ, Yu\'ebao, Huabei, Ant Forest.' },
  preparation: { zh: ['已完成支付宝基础设置和实名认证', '有余额或已绑定银行卡', '支付宝App更新至最新版'], en: ['Completed basic Alipay setup and real-name verification', 'Have balance or linked bank card', 'Alipay app updated to latest'], ru: ['Завершена базовая настройка и верификация', 'Есть баланс или привязана карта', 'Приложение обновлено'] },
  steps: [
    {
      title: { zh: '生活缴费', en: 'Utility Bills', ru: 'Коммунальные услуги' },
      desc: {
        zh: '支付宝可直接缴纳水费、电费、燃气费：\n\n1. 首页点击「生活缴费」（或搜索"缴费"）\n2. 选择缴费类型（水费/电费/燃气费）\n3. 选择城市和缴费单位\n4. 输入户号（可从账单或房东处获取）\n5. 确认金额并支付\n6. 可开启自动缴费\n\n💡 首次缴费建议先缴小额测试，确认户号正确。',
        en: 'Alipay can pay water, electricity, gas bills:\n\n1. Tap "Utility Bills" on homepage\n2. Select bill type\n3. Select city and provider\n4. Enter account number\n5. Confirm and pay\n6. Enable auto-payment\n\n💡 For first payment, try small amount to verify.',
        ru: 'Alipay оплачивает воду, электричество, газ:\n\n1. Нажмите "Utility Bills"\n2. Выберите тип\n3. Город и поставщик\n4. Номер счёта\n5. Оплатите\n6. Включите автоплатёж\n\n💡 Первый раз оплатите небольшую сумму для проверки.'
      },
    },
    {
      title: { zh: '蚂蚁森林', en: 'Ant Forest', ru: 'Ant Forest' },
      desc: {
        zh: '蚂蚁森林是支付宝的环保功能，通过低碳行为收集绿色能量，积攒后在真实世界种树：\n\n🌱 获取能量方式：\n• 步行（打开运动步数）\n• 线上缴费（水电煤）\n• 共享单车/公交地铁出行\n\n🌳 玩法：\n• 每天7:00后能量成熟，及时收取\n• 可以偷朋友的能量（社交互动）\n• 积攒足够能量申请种真树\n\n这是了解中国环保文化的好方式。',
        en: 'Ant Forest is Alipay\'s eco feature — collect green energy through low-carbon behaviors and plant real trees:\n\n🌱 Earn energy: walking, online payments, shared bikes, public transit\n🌳 Play: collect after 7AM daily, steal friends\' energy, plant real trees\n\nA fun way to understand Chinese eco-culture.',
        ru: 'Ant Forest — экологическая функция Alipay: собирайте зелёную энергию за экологичные действия и сажайте настоящие деревья.\n\n🌱 Энергия: ходьба, оплата, транспорт\n🌳 Игра: собирайте после 7:00, «крадите» у друзей'
      },
    },
    {
      title: { zh: '余额宝与花呗', en: 'Yu\'ebao & Huabei', ru: 'Yu\'ebao и Huabei' },
      desc: {
        zh: '💰 余额宝：\n• 将余额转入余额宝，每天获得收益（年化约1.5-2%）\n• 随存随取，不影响支付\n• 风险极低（货币基金）\n\n💳 花呗：\n• 消费信贷产品，先用后付\n• 每月9号为还款日\n• 全额还款免利息\n\n⚠️ 留学生注意：\n• 逾期会影响信用记录\n• 建议谨慎使用，量力而行',
        en: '💰 Yu\'ebao:\n• Transfer balance, earn daily returns (~1.5-2% annualized)\n• Deposit/withdraw anytime\n• Very low risk (money market fund)\n\n💳 Huabei:\n• Buy now, pay later credit\n• Due date: 9th of each month\n• Full repayment = no interest\n\n⚠️ For students: late payments damage credit. Use cautiously.',
        ru: '💰 Yu\'ebao: переводите средства, получайте ежедневный доход (~1.5-2%)\n💳 Huabei: кредит «покупай сейчас, плати потом». Срок: 9-е число. Полное погашение = без процентов.\n⚠️ Просрочка влияет на кредитную историю.'
      },
    },
  ],
  faq: [
    {
      q: { zh: '芝麻信用分是什么？', en: 'What is Zhima Credit Score?', ru: 'Что такое рейтинг Zhima?' },
      a: { zh: '芝麻信用是支付宝的信用评分系统，350-950分。根据支付习惯、履约历史等评估。高分可享免押金租车等特权。', en: 'Zhima Credit is Alipay\'s scoring system (350-950). Based on payment habits and history. High scores unlock perks.', ru: 'Zhima Credit — система оценки Alipay (350-950). По платёжной дисциплине. Высокий рейтинг даёт привилегии.' },
    },
  ],
  nextGuides: ['wechat-pay-guide', 'bind-foreign-card', 'utility-bills']
};