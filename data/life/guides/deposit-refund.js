// Guide: 押金退还攻略
export default {
  id: 'deposit-refund',
  category: 'payment',
  icon: '💰',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ["deposit", "refund", "rent"],
  title: { zh: '押金退还攻略', en: 'Deposit Refund Guide', ru: 'Возврат залога' },
  summary: { zh: '租房押金、共享单车押金等各类押金的退还方法与维权技巧', en: 'How to get deposits back: rental, bike-sharing, and dispute tips', ru: 'Возврат залогов: аренда, велосипеды, защита прав' },
  intro: { zh: '生活中各种场景需缴纳押金。了解退还规则和维权方式，避免经济损失。', en: 'Many scenarios require deposits. Understanding refund rules and rights prevents losses.', ru: 'Залоги нужны во многих ситуациях. Знание правил возврата поможет избежать потерь.' },
  preparation: { zh: ['押金凭证/收据', '合同或协议', '支付记录'], en: ['Deposit receipt', 'Contract', 'Payment records'], ru: ['Квитанция залога', 'Договор', 'Записи оплаты'] },
  steps: [
    {
      title: { zh: '租房押金退还', en: 'Rental Deposit Refund', ru: 'Возврат арендного залога' },
      desc: { zh: '退房押金流程：\n1. 提前30天通知房东\n2. 按合同清洁恢复房屋\n3. 约定验房时间\n4. 结清未缴费用\n5. 房东7-15天内退还押金\n\n⚠️ 自然损耗不应扣押金。纠纷拨打12345市民热线。', en: 'Move-out deposit process:\n1. Notify landlord 30 days ahead\n2. Clean per contract\n3. Schedule inspection\n4. Settle outstanding bills\n5. Refund within 7-15 days\n\n⚠️ Normal wear should not be deducted. Disputes: call 12345.', ru: 'Процесс возврата:\n1. Уведомите за 30 дней\n2. Уберите\n3. Осмотр\n4. Оплата долгов\n5. Возврат за 7-15 дней\n\n⚠️ Износ не вычитается. Споры: 12345.' },
    },
  ],
  faq: [
    { q: { zh: '房东不退押金怎么办？', en: 'Landlord refuses refund?', ru: 'Арендодатель не возвращает залог?' }, a: { zh: '1）协商；2）找学校留学生办公室协助；3）拨打12345投诉；4）寻求法律援助。保留合同和沟通记录。', en: '1) Negotiate; 2) University international office; 3) Call 12345; 4) Legal aid. Keep all records.', ru: '1) Переговоры; 2) Интернациональный офис; 3) 12345; 4) Юридическая помощь.' } },
  ],
  nextGuides: ['rent-apartment', 'rent-contract', 'legal-rights']
};