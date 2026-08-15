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
      title: { zh: '了解押金制度', en: 'Understand the deposit system', ru: 'Понять систему залогов' },
      desc: {
        zh: '在中国，租房、共享单车、充电宝等很多服务需要缴纳押金。部分服务（如共享单车）已逐步免押金。租房押金通常为1-3个月房租，退租时应全额退还。务必保留押金收据和合同。',
        en: 'In China, many services like renting apartments, shared bikes, and power banks require deposits. Some services (like shared bikes) have gradually eliminated deposits. Apartment deposits are usually 1-3 months\' rent and should be fully refundable. Always keep your deposit receipt and contract.',
        ru: 'В Китае многие услуги — аренда жилья, велопрокаты, пауэрбанки — требуют залог. Некоторые услуги (как велопрокат) постепенно отменяют залоги. Залог за квартиру обычно 1-3 месяца аренды и должен полностью возвращаться. Всегда храните квитанцию и договор.'
      }
    },
    {
      title: { zh: '退租退押金流程', en: 'Move-out deposit refund process', ru: 'Процесс возврата залога при переезде' },
      desc: {
        zh: '退租时提前30天通知房东（合同通常有此要求）。退房当天与房东一起验收房屋，核对家具家电状况。如无损坏，押金应在退租后7-15天内退回原支付渠道（微信/支付宝/银行转账）。',
        en: 'Notify the landlord 30 days before moving out (usually required by contract). On move-out day, inspect the apartment together with the landlord and check furniture/appliances. If no damage, the deposit should be refunded within 7-15 days to the original payment method.',
        ru: 'Уведомите арендодателя за 30 дней до переезда (обычно требуется договором). В день выезда осмотрите квартиру вместе с арендодателем, проверьте мебель и технику. При отсутствии повреждений залог возвращают в течение 7-15 дней на исходный способ оплаты.'
      }
,      tip: {
        zh: '如果房东无正当理由扣留押金，可以拨打12345市民热线或12315消费者投诉热线维权。',
        en: 'If the landlord unreasonably withholds the deposit, call 12345 (citizen hotline) or 12315 (consumer complaint hotline) for help.',
        ru: 'Если арендодатель необоснованно удерживает залог, звоните на горячую линию 12345 или 12315 (жалобы потребителей).'
      }
    },
    {
      title: { zh: '共享单车/充电宝退押金', en: 'Shared bike/power bank deposit refund', ru: 'Возврат залога за велопрокат/пауэрбанки' },
      desc: {
        zh: '在共享单车App（如摩拜、哈啰）中，进入"我的"→"钱包"→"押金"→"退押金"。通常即时退还或24小时内到账。充电宝（如街电、怪兽充电）需要归还到指定柜机后才能申请退押金。',
        en: 'In shared bike apps (Mobike, Hellobike), go to Me → Wallet → Deposit → Refund. Usually refunded instantly or within 24 hours. For power banks (Jiedian, Guai Shou), return to a designated cabinet before requesting a refund.',
        ru: 'В приложениях велопроката (Mobike, Hellobike) перейдите в Я → Кошелёк → Залог → Возврат. Обычно мгновенно или в течение 24 часов. Для пауэрбанков (Jiedian) нужно вернуть устройство в шкаф перед возвратом залога.'
      }
,      tip: {
        zh: '建议使用免押金模式（信用分达标即可），避免退押金的等待时间和麻烦。',
        en: 'It\'s recommended to use deposit-free mode (available when credit score qualifies) to avoid waiting time.',
        ru: 'Рекомендуется использовать беспрепятственный режим (при достаточном кредитном рейтинге), чтобы избежать ожидания возврата залога.'
      }
    }
  ],
  faq: [
    { q: { zh: '房东不退押金怎么办？', en: 'Landlord refuses refund?', ru: 'Арендодатель не возвращает залог?' }, a: { zh: '1）协商；2）找学校留学生办公室协助；3）拨打12345投诉；4）寻求法律援助。保留合同和沟通记录。', en: '1) Negotiate; 2) University international office; 3) Call 12345; 4) Legal aid. Keep all records.', ru: '1) Переговоры; 2) Интернациональный офис; 3) 12345; 4) Юридическая помощь.' } },
  ],
  nextGuides: ['rent-apartment', 'rent-contract', 'legal-rights']
};