// Guide: 银行转账操作
export default {
  id: 'bank-transfer',
  category: 'payment',
  icon: '🏦',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 20,
  apps: [],
  prerequisites: ["open-bank-account"],
  tags: ["bank", "transfer", "payment"],
  title: { zh: '银行转账操作', en: 'Bank Transfer Guide', ru: 'Банковский перевод' },
  summary: { zh: '同行转账、跨行转账、国际汇款操作', en: 'Same-bank, cross-bank, and international transfers', ru: 'Внутрибанковские, межбанковские и международные переводы' },
  intro: { zh: '银行转账是大额支付的主要方式，如缴学费、付房租等。', en: 'Bank transfers are the main method for large payments: tuition, rent, etc.', ru: 'Банковские переводы — для крупных платежей: tuition, аренда.' },
  preparation: { zh: ['中国银行储蓄卡', '手机银行App', '收款方信息'], en: ['Chinese bank card', 'Mobile banking app', 'Recipient info'], ru: ['Карта китайского банка', 'Мобильный банк', 'Данные получателя'] },
  steps: [
    {
      title: { zh: '手机银行转账', en: 'Mobile Banking Transfer', ru: 'Перевод через мобильный банк' },
      desc: {
        zh: '1. 打开银行App → 转账\n2. 输入收款方：姓名、卡号、开户行\n3. 输入金额 → 确认 → 密码/短信验证\n\n💡 同行转账实时到账免费；跨行通常2小时内到账',
        en: '1. Bank app → Transfer\n2. Enter recipient: name, card number, bank\n3. Amount → confirm → PIN/SMS\n\n💡 Same-bank: instant and free. Cross-bank: usually within 2 hours.',
        ru: '1. Приложение → Transfer\n2. Получатель: имя, счёт, банк\n3. Сумма → подтверждение\n\n💡 Внутрибанка: мгновенно. Межбанк: ~2 часа.'
      },
    },
    {
      title: { zh: '国际汇款', en: 'International Transfer', ru: 'Международный перевод' },
      desc: {
        zh: '从国外汇款到中国需要的信息：\n• 银行英文名称 + SWIFT代码\n• 账户名称（拼音）+ 账号\n• 银行地址（英文）\n\n⏰ 到账：1-5个工作日\n💰 每人年限额等值5万美元（学费不受限）',
        en: 'For inbound international transfer:\n• Bank English name + SWIFT code\n• Account name (Pinyin) + number\n• Bank address (English)\n\n⏰ 1-5 business days\n💰 Annual limit: USD 50,000 (tuition exempt)',
        ru: 'Для перевода в Китай:\n• Название банка + SWIFT\n• Имя (пиньинь) + счёт\n• Адрес банка\n\n⏰ 1-5 дней. Лимит: $50 000/год (учёба не считается)'
      },
    },
  ],
  faq: [
    {
      q: { zh: '转账转错了怎么办？', en: 'Sent to wrong person?', ru: 'Перевёл не тому?' },
      a: { zh: '银行转账成功后无法撤回。需联系收款人协商退款，或通过法律途径。建议转账前仔细核对信息。', en: 'Completed transfers cannot be reversed. Contact recipient for refund, or seek legal remedy. Always double-check info.', ru: 'Выполненный перевод нельзя отменить. Свяжитесь с получателем. Всегда проверяйте данные.' },
    },
  ],
  nextGuides: ['currency-exchange', 'utility-bills', 'scholarship-payment']
};