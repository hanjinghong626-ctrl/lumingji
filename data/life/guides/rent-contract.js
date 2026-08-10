// Guide: 租房合同签订
export default {
  id: 'rent-contract',
  category: 'housing',
  icon: '📝',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 60,
  apps: [],
  prerequisites: ['rent-apartment'],
  tags: ['contract', 'rent', 'legal'],
  title: {
    zh: '租房合同签订',
    en: 'Signing a Rental Contract',
    ru: 'Подписание договора аренды'
  },
  summary: {
    zh: '合同关键条款解读、押金规则、违约处理与权益保障',
    en: 'Key contract terms, deposit rules, breach handling and rights protection',
    ru: 'Ключевые условия договора, правила залога, штрафы и защита прав'
  },
  intro: {
    zh: '租房合同是保障你权益的重要文件。在中国签订租房合同有一些特有的注意事项，特别是对于外国人来说，理解合同条款至关重要。',
    en: 'A rental contract is an important document protecting your rights. There are specific considerations when signing rental contracts in China, especially for foreigners — understanding the terms is crucial.',
    ru: 'Договор аренды — важный документ для защиты ваших прав. При подписании договора в Китае есть специфические моменты, особенно для иностранцев.'
  },
  preparation: {
    zh: [
      '房东身份证复印件',
      '房产证复印件',
      '租房合同文本',
      '翻译工具或中国朋友协助'
    ],
    en: [
      'Landlord\'s ID copy',
      'Property certificate copy',
      'Rental contract document',
      'Translation tool or Chinese friend to help'
    ],
    ru: [
      'Копия ID арендодателя',
      'Копия документа на собственность',
      'Текст договора аренды',
      'Переводчик или китайский друг для помощи'
    ]
  },
  steps: [
    {
      title: {
        zh: '合同关键条款',
        en: 'Key Contract Terms',
        ru: 'Ключевые условия договора'
      },
      desc: {
        zh: '签订前必须确认的条款：\n\n📋 基本信息\n• 双方身份信息（你的护照号 + 房东身份证号）\n• 房屋详细地址\n• 租赁期限（起止日期）\n• 月租金额和支付方式\n\n💰 费用条款\n• 押金金额及退还条件\n• 水电气网等费用谁承担\n• 物业费是否包含\n• 逾期付款的违约金\n\n🔧 维修责任\n• 哪些损坏由房东负责\n• 哪些由租客负责\n• 报修响应时间\n\n📌 特别注意\n• "转租"条款：是否允许你中途转租\n• "退租"条款：提前退租的违约金是多少\n• "续租"条款：到期后是否优先续租权',
        en: 'Terms to confirm before signing:\n\n📋 Basic info\n• Both parties\' IDs (your passport number + landlord\'s ID number)\n• Exact property address\n• Lease period (start and end dates)\n• Monthly rent and payment method\n\n💰 Financial terms\n• Deposit amount and refund conditions\n• Who pays utilities (water, electricity, gas, internet)\n• Whether property management fee is included\n• Late payment penalty\n\n🔧 Maintenance responsibility\n• What damages landlord covers\n• What tenant covers\n• Response time for repairs\n\n📌 Special attention\n• "Subletting" clause: whether you can sublet mid-term\n• "Early termination" clause: penalty for leaving early\n• "Renewal" clause: priority renewal right after expiry',
        ru: 'Условия для подтверждения перед подписанием:\n\n📋 Основная информация\n• Данные обеих сторон\n• Точный адрес жилья\n• Срок аренды\n• Месячная арендная плата\n\n💰 Финансовые условия\n• Размер и условия возврата залога\n• Кто оплачивает коммунальные услуги\n• Включена ли плата за обслуживание\n• Штраф за просрочку оплаты\n\n🔧 Ответственность за ремонт\n📌 Особое внимание\n• Условия субаренды\n• Условия досрочного расторжения\n• Условия продления'
      }
    },
    {
      title: {
        zh: '押金与退租',
        en: 'Deposit and Move-out',
        ru: 'Залог и выезд'
      },
      desc: {
        zh: '押金规则：\n• 通常为1-3个月租金\n• 退租时扣除损坏赔偿后退还\n• 合同应明确列出扣款标准\n\n退租流程：\n1. 提前30天通知房东（或按合同约定）\n2. 清洁房屋恢复原状\n3. 双方验房确认\n4. 结清所有费用\n5. 退还押金（通常7-15天内）\n\n💡 重要：入住时的照片记录是退押金的重要依据！',
        en: 'Deposit rules:\n• Usually 1-3 months\' rent\n• Refunded after deducting damage costs at move-out\n• Contract should clearly list deduction standards\n\nMove-out process:\n1. Notify landlord 30 days in advance (or per contract)\n2. Clean and restore the apartment\n3. Joint inspection\n4. Settle all outstanding fees\n5. Deposit refund (usually within 7-15 days)\n\n💡 Important: Move-in photos are crucial evidence for deposit refund!',
        ru: 'Правила залога:\n• Обычно 1-3 месяца аренды\n• Возвращается за вычетом ущерба\n• В договоре должны быть указаны стандарты вычетов\n\nПроцесс выезда:\n1. Уведомите за 30 дней\n2. Уберите и восстановите жилье\n3. Совместная проверка\n4. Оплата всех задолженностей\n5. Возврат залога (обычно 7-15 дней)\n\n💡 Фото при заселении — доказательство для возврата залога!'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '合同需要用中文签吗？',
        en: 'Does the contract need to be in Chinese?',
        ru: 'Договор должен быть на китайском?'
      },
      a: {
        zh: '合同可以是中英双语版本。如果只有中文版，务必请人翻译关键条款后再签。签名可以用你的名字（拉丁字母），但建议同时附上护照签名。',
        en: 'The contract can be bilingual (Chinese-English). If only in Chinese, make sure to have key terms translated before signing. You can sign with your Latin name, but adding your passport signature is recommended.',
        ru: 'Договор может быть двуязычным. Если только на китайском — переведите ключевые условия перед подписанием. Подписываться можно латиницей.'
      }
    }
  ],
  nextGuides: ['utility-setup', 'internet-setup']
};
