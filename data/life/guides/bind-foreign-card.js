// Guide: 绑定境外银行卡
export default {
  id: 'bind-foreign-card',
  category: 'payment',
  icon: '💳',
  type: 'guide',
  difficulty: 3,
  estimatedTime: 30,
  apps: ["alipay", "wechat"],
  prerequisites: ["setup-alipay"],
  tags: ["foreign-card", "visa", "payment"],
  title: { zh: '绑定境外银行卡', en: 'Bind Foreign Bank Card', ru: 'Привязка зарубежной карты' },
  summary: { zh: 'Visa/Mastercard绑定支付宝/微信，限额与注意事项', en: 'Bind Visa/Mastercard to Alipay/WeChat: limits and tips', ru: 'Привязка Visa/Mastercard: лимиты и советы' },
  intro: { zh: '支付宝和微信支持绑定境外银行卡，对刚来华的留学生非常有用，但有限额和限制。', en: 'Alipay and WeChat support foreign bank cards — useful for new students, but with limits.', ru: 'Alipay и WeChat поддерживают зарубежные карты — удобно, но есть лимиты.' },
  preparation: { zh: ['境外Visa/Mastercard', '银行卡接受国际短信', '已完成实名认证'], en: ['Foreign Visa/Mastercard', 'Card accepts international SMS', 'Real-name verified'], ru: ['Зарубежная Visa/Mastercard', 'Принимает международные SMS', 'Верификация пройдена'] },
  steps: [
    {
      title: { zh: '绑定步骤', en: 'Binding Steps', ru: 'Шаги привязки' },
      desc: {
        zh: '支付宝：我的 → 银行卡 → 添加银行卡 → 输入境外卡号 → 填写信息 → 短信验证\n\n微信：我 → 服务 → 钱包 → 银行卡 → 添加\n\n✅ 支持：Visa、Mastercard、JCB、Diners Club\n\n⚠️ 限制：\n• 单笔≤3000元\n• 月累计≤5000元\n• 年累计≤60000元\n• 不能转账/红包/充值余额',
        en: 'Alipay: Me → Bank Cards → Add → enter foreign card → fill info → SMS verify\n\nWeChat: Me → Services → Wallet → Bank Cards → Add\n\n✅ Supports: Visa, Mastercard, JCB, Diners Club\n\n⚠️ Limits: single ¥3000, monthly ¥5000, annual ¥60000. No transfers/red packets/top-ups.',
        ru: 'Alipay: Me → Bank Cards → Add → введите карту → SMS\n\nWeChat: Me → Services → Wallet → Bank Cards → Add\n\n✅ Visa, Mastercard, JCB\n⚠️ Лимиты: 3000/оп, 5000/мес, 60000/год. Без переводов.'
      },
    },
    {
      title: { zh: '手续费与汇率', en: 'Fees & Exchange Rates', ru: 'Комиссии и курс' },
      desc: {
        zh: '💰 手续费：\n• ≤200元：免费\n• >200元：3%手续费\n\n💱 按Visa/Mastercard当日汇率结算\n\n💡 建议：拆分大额消费为多笔200元以下；尽快办中国银行账户。',
        en: '💰 Fees: ≤¥200 free, >¥200 charges 3%\n\n💱 Settled at Visa/Mastercard daily rate\n\n💡 Tip: split large purchases under ¥200; open Chinese bank account ASAP.',
        ru: '💰 Комиссия: ≤¥200 бесплатно, >¥200 — 3%\n💱 По курсу Visa/Mastercard\n💡 Разбивайте покупки до ¥200; откройте китайский счёт.'
      },
    },
  ],
  faq: [
    {
      q: { zh: '境外卡能充值到余额吗？', en: 'Can foreign cards top up balance?', ru: 'Можно пополнить баланс с зарубежной карты?' },
      a: { zh: '不能。境外卡只能直接消费支付，不能充值余额、转账或发红包。', en: 'No. Foreign cards can only be used for direct purchases, not for top-ups, transfers, or red packets.', ru: 'Нет. Только прямые покупки, без пополнения и переводов.' },
    },
  ],
  nextGuides: ['bank-transfer', 'campus-card', 'currency-exchange']
};