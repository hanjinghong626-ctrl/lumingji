// Guide: 餐厅点餐技巧
export default {
  id: 'restaurant-ordering',
  category: 'food',
  icon: '🍜',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["restaurant", "ordering", "food"],
  title: { zh: '餐厅点餐技巧', en: 'Restaurant Ordering Tips', ru: 'Заказ в ресторане' },
  summary: { zh: '中餐厅点餐方法：扫码点餐、常用菜名、辣度选择', en: 'Ordering at Chinese restaurants: QR scan ordering, common dishes, spice levels', ru: 'Заказ в китайских ресторанах: QR-заказ, популярные блюда, острота' },
  intro: { zh: '在中餐厅吃饭，大部分使用扫码点餐或看菜单点餐。了解一些技巧能帮你点到好吃的菜。', en: 'Most Chinese restaurants use QR scan ordering or paper menus. Knowing some tips helps you order well.', ru: 'В китайских ресторанах — QR-заказ или меню. Знание нюансов помогает выбрать.' },
  preparation: { zh: ['手机（扫码点餐）'], en: ['Phone (QR ordering)'], ru: ['Телефон (QR-заказ)'] },
  steps: [
    {
      title: { zh: '选择餐厅和入座', en: 'Choose a restaurant and be seated', ru: 'Выбор ресторана и размещение' },
      desc: {
        zh: '到达餐厅后，通常有服务员引导你入座（说"几位"就是在问人数）。小餐馆可能需要拼桌。热门餐厅（如海底捞、外婆家）建议在美团/大众点评上提前排队取号。',
        en: 'When you arrive, a host will usually guide you to a table (they\'ll ask "几位" meaning "how many people"). Small restaurants may require sharing a table. For popular restaurants (like Haidilao, Grandma\'s Home), it\'s best to queue in advance on Meituan/Dianping.',
        ru: 'По прибытии хостес проведёт вас к столику (вопрос "几位" означает "сколько человек"). В маленьких ресторанах возможно совместное размещение. В популярных ресторанах (Haidilao и т.д.) лучше заранее встать в очередь через Meituan/Dianping.'
      }
    },
    {
      title: { zh: '扫码点餐', en: 'Order by scanning QR code', ru: 'Заказ по QR-коду' },
      desc: {
        zh: '大多数餐厅使用扫码点餐：用微信扫一扫桌上的二维码，进入小程序菜单。选择菜品、规格（辣度、份量）、数量后提交订单。部分餐厅仍使用纸质菜单，用手指数菜品即可。',
        en: 'Most restaurants use QR code ordering: scan the code on the table with WeChat to enter the mini-program menu. Select dishes, specifications (spice level, portion size), quantity, then submit. Some restaurants still use paper menus — just point to what you want.',
        ru: 'Большинство ресторанов используют заказ по QR-коду: отсканируйте код на столе через WeChat для входа в меню. Выберите блюда, параметры (острота, размер порции), количество и отправьте заказ. В некоторых ресторанах всё ещё бумажное меню — просто укажите пальцем.'
      }
,      tip: {
        zh: '不会中文？很多扫码点餐小程序支持英文界面。如果不行，可以用翻译App拍照翻译菜单，或指着菜单图片给服务员看。',
        en: 'Don\'t speak Chinese? Many QR ordering mini-programs support English. If not, use a translation app to photograph the menu, or point at pictures for the server.',
        ru: 'Не знаете китайский? Многие мини-программы поддерживают английский. Если нет — используйте приложение-переводчик для фото меню или покажите картинки серверу.'
      }
    },
    {
      title: { zh: '用餐中的注意事项', en: 'Dining etiquette notes', ru: 'Этикет в ресторане' },
      desc: {
        zh: '中国餐厅通常提供免费的茶水（入座后自动倒上）。米饭、纸巾可能需要额外收费（米饭1-2元，纸巾1-2元/包）。如果需要加菜、加水，举手示意服务员或按桌上的呼叫按钮。',
        en: 'Chinese restaurants usually provide free tea (poured after seating). Rice and tissues may cost extra (rice ¥1-2, tissues ¥1-2/pack). To order more food or refill water, raise your hand or press the call button on the table.',
        ru: 'В китайских ресторанах обычно подают бесплатный чай (наливают после размещения). Рис и салфетки могут оплачиваться отдельно (рис ¥1-2, салфетки ¥1-2/упак). Для добавления блюд или воды поднимите руку или нажмите кнопку вызова на столе.'
      }
,      tip: {
        zh: '中国人的用餐习惯：菜放在桌子中间大家共享（合餐制），每个人用自己的筷子从公共盘子夹菜。如果介意，可以说"请给我一双公筷"。',
        en: 'Chinese dining custom: dishes are shared in the center of the table (communal dining). Everyone uses their own chopsticks to pick from shared plates. If uncomfortable, say "请给我一双公筷" (please give me serving chopsticks).',
        ru: 'Китайская традиция: блюда ставятся в центр стола для всех (общая трапеза). Каждый палочками берёт из общих тарелок. Если неудобно, скажите "请给我一双公筷" (дайте общие палочки).'
      }
    },
    {
      title: { zh: '结账', en: 'Paying the bill', ru: 'Оплата счёта' },
      desc: {
        zh: '吃完后说"买单"或"结账"。大部分餐厅支持微信/支付宝扫码付款（桌上有付款二维码），或前台结账。人均消费参考：普通餐厅30-60元，中档餐厅80-150元，高档餐厅200元以上。可以要求开发票（"请开发票"）。',
        en: 'After eating, say "买单" (mǎi dān) or "结账" (jié zhàng). Most restaurants accept WeChat/Alipay scan (QR code on table) or pay at the front desk. Price reference: casual ¥30-60/person, mid-range ¥80-150/person, upscale ¥200+/person. You can request a receipt/invoice by saying "请开发票".',
        ru: 'После еды скажите "买单" или "结账". Большинство ресторанов принимают WeChat/Alipay (QR на столе) или оплата на кассе. Примерные цены: обычные ¥30-60/чел., средние ¥80-150/чел., дорогие ¥200+/чел. Можно попросить чек: "请开发票".'
      }
,      tip: {
        zh: 'AA制在中国不太常见，通常是轮流请客。如果是朋友聚餐，可以说"AA"或"分开付"来分摊费用。',
        en: 'Splitting bills (going Dutch) is not very common in China — usually people take turns paying. Among friends, you can say "AA" or "分开付" to split the cost.',
        ru: 'Разделение счёта не очень распространено в Китае — обычно платят по очереди. Среди друзей можно сказать "AA" или "分开付" для разделения расходов.'
      }
    }
  ],
  faq: [
    { q: { zh: '怎么告诉服务员不要辣？', en: 'How to tell them no spice?', ru: 'Как сказать «без острого»?' }, a: { zh: '可以说「不要辣」（bú yào là）或出示文字。扫码点餐时可以在备注中选「不辣」。', en: 'Say "不要辣" (bú yào là) or show text on phone. In QR ordering, select "不辣" in notes.', ru: 'Скажите "不要辣" (bú yào là) или покажите текст. В QR-заказе выберите "不辣".' } },
  ],
  nextGuides: ['food-delivery', 'canteen-guide', 'bubble-tea']
};