// Guide: 手机充值方法
export default {
  id: 'recharge-phone',
  category: 'communication',
  icon: '🔋',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 5,
  apps: ["alipay", "wechat"],
  prerequisites: [],
  tags: ["recharge", "phone", "top-up"],
  title: { zh: '手机充值方法', en: 'Phone Top-up Methods', ru: 'Пополнение телефона' },
  summary: { zh: '支付宝/微信/银行App手机话费充值方法', en: 'Top-up via Alipay/WeChat/banking apps', ru: 'Пополнение через Alipay/WeChat/банк' },
  intro: { zh: '手机话费充值非常方便，随时随地在线完成。', en: 'Phone top-up is very convenient, can be done online anytime.', ru: 'Пополнение очень удобное, онлайн в любое время.' },
  preparation: { zh: ['手机号', '支付宝/微信'], en: ['Phone number', 'Alipay/WeChat'], ru: ['Номер телефона', 'Alipay/WeChat'] },
  steps: [
    {
      title: { zh: '打开充值入口', en: 'Open the top-up entry', ru: 'Откройте раздел пополнения' },
      desc: {
        zh: '打开支付宝或微信，在首页搜索栏输入「手机充值」或「话费充值」。也可以直接在支付宝首页找到「充值中心」图标入口。',
        en: 'Open Alipay or WeChat and search for phone top-up in the search bar. You can also find the Recharge Center icon directly on Alipay homepage.',
        ru: 'Откройте Alipay или WeChat и введите «手机充值» или «话费充值» в строке поиска. Также можно найти иконку «Центр пополнения» на главной странице Alipay.'
      }
    },
    {
      title: { zh: '输入手机号和金额', en: 'Enter phone number and amount', ru: 'Введите номер и сумму' },
      desc: {
        zh: '输入你要充值的手机号码（11位），选择充值金额。常见面额：30元、50元、100元。部分平台支持自定义金额。确认号码无误后继续。',
        en: 'Enter the 11-digit phone number you want to top up, then select the amount. Common denominations: 30, 50, 100 yuan. Some platforms support custom amounts. Double-check the number before proceeding.',
        ru: 'Введите 11-значный номер телефона для пополнения, затем выберите сумму. Распространённые номиналы: 30, 50, 100 юаней. Некоторые платформы поддерживают произвольные суммы. Перед продолжением проверьте номер.'
      }
,      tip: {
        zh: '充值前再三确认手机号，充错号码无法退回。',
        en: 'Triple-check the phone number before topping up — wrong numbers cannot be refunded.',
        ru: 'Перед пополнением трижды проверьте номер — неверные номера не возвращаются.'
      }
    },
    {
      title: { zh: '支付与到账', en: 'Pay and wait for credit', ru: 'Оплатите и дождитесь зачисления' },
      desc: {
        zh: '选择支付宝余额、绑定的银行卡或微信支付完成付款。通常1-5分钟内到账，到账后会收到运营商短信通知。如果超过10分钟未到账，可在充值记录中查看状态或联系客服。',
        en: 'Pay using Alipay balance, linked bank card, or WeChat Pay. Credit usually arrives within 1-5 minutes, and you will get an SMS from the carrier. If it takes over 10 minutes, check the recharge history or contact customer service.',
        ru: 'Оплатите через баланс Alipay, привязанную карту или WeChat Pay. Зачисление обычно в течение 1-5 минут, после чего придёт SMS от оператора. Если прошло более 10 минут, проверьте историю или свяжитесь с поддержкой.'
      }
    }
  ],
  faq: [
    { q: { zh: '话费没到账怎么办？', en: 'What if top-up doesn\'t arrive?', ru: 'Пополнение не пришло?' }, a: { zh: '通常即时到账，偶尔延迟1-5分钟。如果超过30分钟未到账，联系充值平台客服或运营商客服（10086/10010/10000）。', en: 'Usually instant, occasionally 1-5 min delay. If over 30 minutes, contact platform support or carrier (10086/10010/10000).', ru: 'Обычно мгновенно. Если >30 мин — свяжитесь с оператором (10086/10010/10000).' } },
  ],
  nextGuides: ['choose-phone-plan', 'buy-sim-card', 'wechat-full-guide']
};