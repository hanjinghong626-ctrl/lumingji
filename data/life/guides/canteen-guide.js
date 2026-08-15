// Guide: 大学食堂攻略
export default {
  id: 'canteen-guide',
  category: 'food',
  icon: '🍱',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["canteen", "campus", "food"],
  title: { zh: '大学食堂攻略', en: 'University Canteen Guide', ru: 'Университетская столовая' },
  summary: { zh: '食堂就餐流程、菜品选择、省钱技巧', en: 'Canteen process, dish selection, money-saving tips', ru: 'Процесс, выбор блюд, экономия' },
  intro: { zh: '大学食堂是最经济实惠的就餐选择，菜品丰富、价格便宜。', en: 'University canteens are the most economical dining option with rich choices and low prices.', ru: 'Столовые вузов — самый экономичный вариант с большим выбором и низкими ценами.' },
  preparation: { zh: ['校园卡'], en: ['Campus card'], ru: ['Кампусная карта'] },
  steps: [
    {
      title: { zh: '找到你的食堂', en: 'Find your canteen', ru: 'Найти свою столовую' },
      desc: {
        zh: '中国大学通常有多个食堂，分布在教学楼、宿舍区附近。新生入学时会发放校园卡，上面印有食堂就餐功能。可以先在教学楼附近或宿舍附近的食堂就餐，后续再探索其他食堂。',
        en: 'Chinese universities usually have multiple canteens near teaching buildings and dormitory areas. New students receive a campus card that includes dining functions. Start with canteens near your classrooms or dorms, then explore others later.',
        ru: 'В китайских вузах обычно несколько столовых возле учебных корпусов и общежитий. Новые студенты получают кампусную карту с функцией питания. Начните со столовых рядом с учебными корпусами или общежитиями, потом исследуйте остальные.'
      }
    },
    {
      title: { zh: '充值校园卡', en: 'Top up your campus card', ru: 'Пополнение кампусной карты' },
      desc: {
        zh: '食堂一般不接受现金或手机支付，需要使用校园卡。充值方式：①食堂一楼的自助充值机（插卡→输入金额→扫码/现金支付）；②校园卡服务中心窗口；③部分学校支持支付宝/微信在线充值。每次充值金额建议50-200元，因为毕业时余额退还较麻烦。',
        en: 'Canteens generally don\'t accept cash or mobile payments — you need a campus card. Top-up methods: ① Self-service machines on the ground floor (insert card → enter amount → scan pay/cash); ② Campus card service center window; ③ Some schools support Alipay/WeChat online top-up. Recommend topping up ¥50-200 each time, as refunding the balance upon graduation can be tedious.',
        ru: 'Столовые обычно не принимают наличные или мобильные платежи — нужна кампусная карта. Способы пополнения: ① Автоматы на первом этаже (вставить карту → ввести сумму → оплата); ② Окно обслуживания кампусных карт; ③ Некоторые вузы поддерживают онлайн-пополнение через Alipay/WeChat. Рекомендуем пополнять на ¥50-200, т.к. возврат остатка при выпуске сложен.'
      }
,      tip: {
        zh: '校园卡丢失后立即去校园卡中心挂失补办，原卡余额可以转移到新卡。',
        en: 'If you lose your campus card, go to the card center immediately to report it and get a replacement. The balance can be transferred to the new card.',
        ru: 'При потере кампусной карты немедленно обратитесь в центр для перевыпуска. Баланс можно перенести на новую карту.'
      }
    },
    {
      title: { zh: '点餐和就餐', en: 'Order and dine', ru: 'Заказ и приём пищи' },
      desc: {
        zh: '进入食堂后，找到喜欢的窗口排队。看准菜牌上的价格，用手指或者筷子示意想要的菜品。工作人员会将菜打到你端着的餐盘上。部分食堂使用托盘+不锈钢碗的标准配置。米饭通常另算（1-2元/碗，有些食堂免费续饭）。',
        en: 'Enter the canteen, find a window you like and queue up. Check prices on the menu board, point or gesture to indicate which dishes you want. Staff will serve food onto your tray. Some canteens use standard trays with stainless steel bowls. Rice is usually charged separately (¥1-2/bowl, some canteens offer free refills).',
        ru: 'Войдите в столовую, найдите понравившееся окошко и встаньте в очередь. Смотрите цены на табличке, пальцем покажите желаемые блюда. Персонал положит еду на ваш поднос. Рис обычно оплачивается отдельно (¥1-2/порция, в некоторых столовых бесплатная добавка).'
      }
,      tip: {
        zh: '高峰期（11:30-12:30午餐，17:30-18:30晚餐）人很多，建议错峰就餐。早10分钟或晚20分钟可以大大减少排队时间。',
        en: 'Peak hours (11:30-12:30 lunch, 17:30-18:30 dinner) are very crowded. Eat 10 minutes early or 20 minutes late to significantly reduce waiting time.',
        ru: 'В часы пик (11:30-12:30 обед, 17:30-18:30 ужин) очень много людей. Приходите на 10 минут раньше или на 20 минут позже, чтобы значительно сократить время ожидания.'
      }
    },
    {
      title: { zh: '结算和清理', en: 'Payment and cleanup', ru: 'Оплата и уборка' },
      desc: {
        zh: '吃完后将餐盘送到回收处（通常有明确的"餐具回收"标识）。校园卡在打菜时已经扣费，无需额外结算。部分学校使用称重计费（自选菜按克计价），需要在出口处的结算机刷卡扣费。',
        en: 'After eating, take your tray to the collection area (usually marked with "餐具回收" signs). Your campus card is already charged when food is served — no extra checkout needed. Some schools use weight-based pricing (self-select dishes charged by gram), where you swipe your card at an exit terminal.',
        ru: 'После еды отнесите поднос в зону сбора (обычно обозначена знаками "餐具回收"). Кампусная карта списывает средства при раздаче еды — дополнительная оплата не нужна. В некоторых вузах используется взвешивание (блюда на выбор по граммам), оплата на выходе через терминал.'
      }
,      tip: {
        zh: '注意：很多食堂不提供纸巾，建议随身带纸巾。另外大部分食堂提供免费汤（紫菜蛋花汤等），在入口处自取。',
        en: 'Note: Many canteens don\'t provide tissues — carry your own. Most canteens offer free soup (seaweed egg drop soup, etc.) at the entrance.',
        ru: 'Примечание: Во многих столовых нет салфеток — носите свои. В большинстве столовых есть бесплатный суп (суп с водорослями и яйцом и т.д.) на входе.'
      }
    }
  ],
  faq: [
    { q: { zh: '食堂有清真/素食窗口吗？', en: 'Are there halal/vegetarian windows?', ru: 'Есть ли халяль/вегетарианские окна?' }, a: { zh: '大部分有留学生的大学都设有清真窗口（标有"清真"或"回族"标识）。素食窗口较少，但大部分窗口有素菜。', en: 'Most universities with international students have halal windows (marked "清真" or "回族"). Vegetarian windows are rarer, but most windows have veggie dishes.', ru: 'Большинство вузов с иностранцами имеют халяль-окна ("清真"). Вегетарианских меньше, но есть овощные блюда.' } },
  ],
  nextGuides: ['food-delivery', 'restaurant-ordering', 'halal-food']
};