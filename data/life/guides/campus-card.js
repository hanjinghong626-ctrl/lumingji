// Guide: 校园卡使用指南
export default {
  id: 'campus-card',
  category: 'payment',
  icon: '🎓',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ["campus", "card", "student"],
  title: { zh: '校园卡使用指南', en: 'Campus Card Guide', ru: 'Кампусная карта' },
  summary: { zh: '大学一卡通：食堂、门禁、图书馆、洗浴、超市', en: 'All-in-one card: dining, access, library, showers, stores', ru: 'Единая карта: столовая, доступ, библиотека, душ, магазин' },
  intro: { zh: '中国大学实行一卡通制度，集成食堂消费、门禁、图书馆等多种功能。', en: 'Chinese universities use an all-in-one card for multiple campus services.', ru: 'В китайских вузах одна карта для всех услуг кампуса.' },
  preparation: { zh: ['学生证或录取通知书', '初始充值费用'], en: ['Student ID or admission letter', 'Initial top-up funds'], ru: ['Студенческий билет', 'Средства для пополнения'] },
    steps: [
    {
      title: { zh: '入学注册时领取校园卡，修改初始密码后充值使用。', en: 'Get card at enrollment, change PIN, then top up.', ru: 'Получите при регистрации, смените PIN, пополните.' },
      desc: {
        zh: '入学注册时领取校园卡，修改初始密码后充值使用。',
        en: 'Get card at enrollment, change PIN, then top up.',
        ru: 'Получите при регистрации, смените PIN, пополните.'
      }
    },
    {
      title: { zh: '食堂：刷卡消费', en: 'Dining: tap card', ru: 'Столовая: приложите карту' },
      desc: {
        zh: '🍽️ 食堂：刷卡消费',
        en: '🍽️ Dining: tap card',
        ru: '🍽️ Столовая: приложите карту'
      }
    },
    {
      title: { zh: '洗浴：插卡出水，按时间计费', en: 'Showers: insert card, billed by time', ru: 'Душ: карта активирует воду' },
      desc: {
        zh: '🚿 洗浴：插卡出水，按时间计费',
        en: '🚿 Showers: insert card, billed by time',
        ru: '🚿 Душ: карта активирует воду'
      }
    },
    {
      title: { zh: '图书馆：刷卡进入、借还书', en: 'Library: card for entry and borrowing', ru: 'Библиотека: вход и книги' },
      desc: {
        zh: '📚 图书馆：刷卡进入、借还书',
        en: '📚 Library: card for entry and borrowing',
        ru: '📚 Библиотека: вход и книги'
      }
    },
    {
      title: { zh: '超市：刷卡购物', en: 'Stores: card payment', ru: 'Магазин: оплата картой' },
      desc: {
        zh: '🏪 超市：刷卡购物',
        en: '🏪 Stores: card payment',
        ru: '🏪 Магазин: оплата картой'
      }
    },
    {
      title: { zh: '部分学校支持电子校园卡（微信/支付宝扫码）', en: 'Some schools support e-cards via WeChat/Alipay', ru: 'Магазин: оплата картой' },
      desc: {
        zh: '💡 部分学校支持电子校园卡（微信/支付宝扫码）',
        en: '💡 Some schools support e-cards via WeChat/Alipay',
        ru: '🏪 Магазин: оплата картой'
      }
    }
  ],
  faq: [
    {
      q: { zh: '校园卡丢了怎么办？', en: 'Lost campus card?', ru: 'Потеряли карту?' },
      a: { zh: '立即到校园卡中心挂失，余额安全。可申请补办（10-20元工本费）。', en: 'Report lost at card center immediately. Balance is safe. Replacement costs ¥10-20.', ru: 'Сразу заблокируйте в карточном центре. Замена стоит ¥10-20.' },
    },
  ],
  nextGuides: ['canteen-guide', 'food-delivery', 'dormitory-guide']
};