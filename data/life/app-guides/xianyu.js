// 鹿鸣集 · 闲鱼使用指南
// 版本：2026-08-10

export default {
  id: 'xianyu',
  version: '2026-08-10',
  title: {
    zh: '闲鱼使用指南',
    en: 'Xianyu (Idle Fish) Guide',
    ru: 'Руководство по Xianyu (Idle Fish)'
  },
  desc: {
    zh: '阿里巴巴旗下二手交易平台，可以买卖二手物品、闲置好物。留学生可以在这里低价买到好东西，也可以在离开时卖掉不需要的物品。',
    en: 'Alibaba\'s second-hand trading platform. Buy and sell used items — perfect for finding bargains or selling things when leaving China.',
    ru: 'Платформа б/у товаров от Alibaba. Покупайте и продайте — идеально для выгодных покупок и продажи при отъезде.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id956539460',
    android_google: 'https://play.google.com/store/search?q=com.taobao.idlefish&c=apps',
    android_cn: 'https://www.goofish.com',
    note: {
      zh: '国内Android手机建议在应用商店搜索下载，或访问官网下载',
      en: 'For Android phones in China, search in your app store or download from the official website',
      ru: 'Для Android в Китае скачайте из магазина приложений или с официального сайта'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '下载安装',
        en: 'Download & Install',
        ru: 'Скачать и установить'
      },
      desc: {
        zh: '在应用商店搜索"闲鱼"下载，或使用淘宝账号直接登录。',
        en: 'Search "闲鱼" in your app store. Login with your Taobao account directly.',
        ru: 'Найдите "闲鱼" в магазине приложений. Войдите через аккаунт Taobao.'
      },
    },
    {
      title: {
        zh: '淘宝/支付宝登录',
        en: 'Login via Taobao/Alipay',
        ru: 'Вход через Taobao/Alipay'
      },
      desc: {
        zh: '闲鱼使用淘宝或支付宝账号登录，无需单独注册。完成支付宝实名认证后即可交易。',
        en: 'Xianyu uses Taobao or Alipay account login — no separate registration needed. Complete Alipay verification to start trading.',
        ru: 'Вход через Taobao или Alipay. Завершите верификацию Alipay для торговли.'
      },
    },
    {
      title: {
        zh: '搜索与购买',
        en: 'Search & Purchase',
        ru: 'Поиск и покупка'
      },
      desc: {
        zh: '搜索想要的物品，可按价格、距离排序。看到合适的商品后，可以先"我想要"和卖家聊天沟通，确认商品状态后再下单。',
        en: 'Search for items, sort by price or distance. Tap "我想要" (I want it) to chat with the seller about the item before purchasing.',
        ru: 'Ищите товары, сортируйте по цене или расстоянию. Нажмите "我想要" для общения с продавцом перед покупкой.'
      },
      tip: {
        zh: '💡 同城交易可以面交验货，更放心。邮寄的话注意选有平台担保的交易',
        en: '💡 Local meetups allow in-person inspection. For shipping, use platform-guaranteed transactions',
        ru: '💡 Личная встреча позволяет проверить товар. При доставке используйте гарант платформы'
      },
    },
    {
      title: {
        zh: '出售闲置',
        en: 'Sell Unused Items',
        ru: 'Продажа ненужных вещей'
      },
      desc: {
        zh: '点击"卖闲置"，拍照上传，描述物品情况和价格。定价可参考同类商品。买家下单后通过快递寄出即可。',
        en: 'Tap "卖闲置" (Sell), take photos, describe condition and set price. Check similar items for pricing. Ship after buyer purchases.',
        ru: 'Нажмите "卖闲置", сфотографируйте, опишите и установите цену. Отправьте после покупки.'
      },
    },
  ],
  coreFeatures: [
    {
      icon: '💸',
      title: { zh: '低价好物', en: 'Bargain Finds', ru: 'Выгодные находки' },
      desc: { zh: '二手物品价格通常是原价的2-5折', en: 'Used items typically 20-50% of original price', ru: 'Б/у товары обычно за 20-50% от оригинальной цены' }
    },
    {
      icon: '🔒',
      title: { zh: '担保交易', en: 'Guaranteed Transactions', ru: 'Гарантированные сделки' },
      desc: { zh: '支付宝担保，确认收货后卖家才收到钱', en: 'Alipay escrow — seller gets paid only after you confirm receipt', ru: 'Alipay-эскроу — продавец получает оплату после подтверждения' }
    },
    {
      icon: '📍',
      title: { zh: '同城面交', en: 'Local Meetup', ru: 'Личная встреча' },
      desc: { zh: '支持同城当面交易，先验货再付款', en: 'Supports local face-to-face trading — inspect before paying', ru: 'Поддерживается личная встреча — осмотр перед оплатой' }
    },
    {
      icon: '📱',
      title: { zh: '一键发布', en: 'Easy Listing', ru: 'Простая публикация' },
      desc: { zh: '拍照一键发布，自动识别商品信息', en: 'Snap a photo to list — auto-detects product info', ru: 'Фото для публикации — автоопределение товара' }
    },
  ],
  tips: [
    {
      title: { zh: '防骗指南', en: 'Anti-Scam Tips', ru: 'Защита от мошенников' },
      content: {
        zh: '① 只在平台内交易，不要私下转账；② 贵重物品选同城面交；③ 价格过低的要警惕；④ 保留聊天记录作为证据。',
        en: '① Only transact within the platform, no private transfers; ② Meet in person for valuable items; ③ Be wary of prices too low; ④ Keep chat records as evidence.',
        ru: '① Только через платформу; ② Личная встреча для дорогих вещей; ③ Остерегайтесь слишком низких цен; ④ Сохраняйте переписку.'
      }
    },
  ],
  faq: [
    {
      q: { zh: '留学生能在闲鱼上卖东西吗？', en: 'Can international students sell on Xianyu?', ru: 'Могут ли студенты продавать на Xianyu?' },
      a: {
        zh: '可以。只要有支付宝实名认证账号就能买卖。毕业离开中国时，闲鱼是处理家具、电器等大件物品的最佳渠道。',
        en: 'Yes. As long as you have a verified Alipay account. When leaving China, Xianyu is the best way to sell furniture, appliances, etc.',
        ru: 'Да. Нужен верифицированный аккаунт Alipay. При отъезде — лучший способ продать мебель и технику.'
      }
    },
  ],
  relatedGuides: ['taobao', 'jd']
};
