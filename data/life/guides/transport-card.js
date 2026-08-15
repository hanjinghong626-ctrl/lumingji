// Guide: 交通卡办理
export default {
  id: 'transport-card',
  category: 'transport',
  icon: '🎫',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["transit-card", "transport"],
  title: { zh: '交通卡办理', en: 'Transit Card Guide', ru: 'Транспортная карта' },
  summary: { zh: '办理城市交通卡，公交地铁通用，支持NFC手机刷卡', en: 'Get city transit card for bus and metro, supports NFC phone tap', ru: 'Транспортная карта для автобуса и метро, поддержка NFC' },
  intro: { zh: '交通卡是乘坐公交地铁最方便的方式，刷卡有折扣优惠，还可在手机上使用。', en: 'Transit cards are the most convenient way to ride buses and metros, with discounts and phone support.', ru: 'Транспортная карта — удобный способ проезда со скидками и поддержкой телефона.' },
  preparation: { zh: ['护照', '押金（约20元）'], en: ['Passport', 'Deposit (~¥20)'], ru: ['Паспорт', 'Залог (~20 ¥)'] },
  steps: [
    {
      title: { zh: '选择交通卡类型', en: 'Choose your transport card type', ru: 'Выберите тип транспортной карты' },
      desc: {
        zh: '中国城市公交卡主要有两种：实体卡（在地铁站购买）和虚拟卡（手机NFC或App扫码）。推荐使用支付宝内的「出行」功能或下载当地的地铁App，免去押金且充值方便。',
        en: 'City transit cards come in two types: physical cards (bought at metro stations) and virtual cards (phone NFC or app QR code). Using the Travel feature in Alipay or downloading the local metro app is recommended — no deposit needed and easy to top up.',
        ru: 'Городские транспортные карты бывают двух типов: физические (покупаются на станциях метро) и виртуальные (NFC телефона или QR-код в приложении). Рекомендуется использовать функцию «Поездка» в Alipay или скачать приложение местного метро — без залога и легко пополнять.'
      }
,      tip: {
        zh: '北京用「一卡通」，上海用「交通卡」，广州用「羊城通」。长住建议办实体卡享折扣。',
        en: 'Beijing uses Yikatong, Shanghai uses Jiaotong Ka, Guangzhou uses Yangxingtong. If staying long-term, a physical card gives discounts.',
        ru: 'В Пекине — Yikatong, в Шанхае — Jiaotong Ka, в Гуанчжоу — Yangxingtong. При длительном пребывании лучше оформить физическую карту для скидок.'
      }
    },
    {
      title: { zh: '购买或开通交通卡', en: 'Purchase or activate your card', ru: 'Покупка или активация карты' },
      desc: {
        zh: '实体卡：到任意地铁站的服务窗口，出示护照，购买普通卡（押金约20元）或学生卡（需学校证明，享5折优惠）。虚拟卡：打开支付宝 → 首页点击「出行」→ 选择所在城市 → 免费领取电子公交卡。',
        en: 'Physical card: go to any metro station service window, show your passport, buy a regular card (~20 yuan deposit) or student card (needs university certificate, 50% discount). Virtual card: open Alipay, tap Travel on homepage, select your city, get a free electronic transit card.',
        ru: 'Физическая карта: подойдите к окошку обслуживания на любой станции метро, покажите паспорт, купите обычную карту (залог ~20 юаней) или студенческую (нужна справка из вуза, скидка 50%). Виртуальная карта: откройте Alipay → «Поездка» на главной → выберите город → получите бесплатную электронную карту.'
      }
,      tip: {
        zh: '学生卡需要学校开具的在读证明，折扣力度很大，非常值得办理。',
        en: 'Student cards need a university enrollment certificate. The discount is substantial and well worth getting.',
        ru: 'Для студенческой карты нужна справка из вуза. Скидка значительная, оформление того стоит.'
      }
    },
    {
      title: { zh: '充值与使用', en: 'Top up and use', ru: 'Пополнение и использование' },
      desc: {
        zh: '实体卡在地铁站自助充值机或窗口充值，现金或扫码支付均可。虚拟卡在支付宝内一键充值。乘车时，实体卡贴近闸机感应区即可通过；虚拟卡打开支付宝「出行」页面，将二维码对准闸机扫码口。',
        en: 'Top up physical cards at metro station machines or service windows (cash or scan-to-pay). Virtual cards are topped up in Alipay with one tap. For physical cards, tap the card on the gate sensor. For virtual cards, open Alipay Travel and hold the QR code at the gate scanner.',
        ru: 'Физические карты пополняются в автоматах или окошках метро (наличные или сканирование). Виртуальные карты пополняются в Alipay одним нажатием. Физическую карту приложите к датчику турникета; виртуальную — откройте «Поездка» в Alipay и направьте QR-код к сканеру.'
      }
,      tip: {
        zh: '每次乘车后记得刷卡出站，否则下次无法正常进站。',
        en: 'Always tap out when exiting, or you won\'t be able to tap in next time.',
        ru: 'После поездки обязательно приложите карту к турникету на выходе, иначе в следующий раз не сможете войти.'
      }
    },
    {
      title: { zh: '了解优惠政策', en: 'Understand discount policies', ru: 'Информация о льготах' },
      desc: {
        zh: '实体普通卡通常享9-9.5折优惠；学生卡5折。每月消费满一定金额后还有累进折扣（如北京满100元后8折）。虚拟电子卡一般不打折但免去带卡烦恼。退卡时到地铁站窗口办理，退还押金和余额。',
        en: 'Regular physical cards usually get 5-10% off per ride; student cards get 50% off. After reaching monthly spending thresholds, progressive discounts kick in (e.g., Beijing: 20% off after 100 yuan/month). Virtual cards usually no discount but no need to carry a card. To return a card, go to a metro station window for deposit and balance refund.',
        ru: 'Обычные физические карты дают скидку 5-10%; студенческие — 50%. После достижения месячного лимита расходов действуют прогрессивные скидки (например, в Пекине после 100 юаней/мес скидка 20%). Виртуальные карты обычно без скидок. Для возврата карты обратитесь к окошку метро.'
      }
    }
  ],
  faq: [
    { q: { zh: '离开城市时交通卡怎么退？', en: 'How to return transit card when leaving?', ru: 'Как вернуть карту при отъезде?' }, a: { zh: '到地铁站的服务窗口退还，退还押金和余额。部分城市需在指定网点办理。', en: 'Return at metro station service counter for deposit and balance refund. Some cities have designated locations.', ru: 'Верните на стойке метро — вернут залог и остаток.' } },
  ],
  nextGuides: ['metro-guide', 'bus-guide', 'bike-sharing']
};