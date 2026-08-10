// 鹿鸣集 · 菜鸟裹裹使用指南
// 版本：2026-08-10

export default {
  id: 'cainiao',
  version: '2026-08-10',
  title: {
    zh: '菜鸟裹裹使用指南',
    en: 'Cainiao Guide',
    ru: 'Руководство по Cainiao'
  },
  desc: {
    zh: '阿里巴巴旗下物流平台，一站式管理所有快递包裹。查快递、寄快递、找驿站取件，留学生必备工具。',
    en: 'Alibaba\'s logistics platform — manage all your parcels in one place. Track packages, send deliveries, and find pickup stations. Essential for students.',
    ru: 'Логистическая платформа Alibaba — управление всеми посылками. Отслеживание, отправка, поиск пунктов выдачи.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id961939554',
    android_google: 'https://play.google.com/store/search?q=com.cainiao.wireless&c=apps',
    android_cn: 'https://www.cainiao.com',
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
        zh: '在应用商店搜索"菜鸟"下载。',
        en: 'Search "菜鸟" in your app store.',
        ru: 'Найдите "菜鸟" в магазине приложений.'
      },
    },
    {
      title: {
        zh: '登录与绑定',
        en: 'Login & Bind',
        ru: 'Вход и привязка'
      },
      desc: {
        zh: '使用淘宝或支付宝账号登录。首次登录后系统会自动关联你在淘宝/天猫的订单物流信息。绑定手机号后，其他平台的快递也能通过运单号导入。',
        en: 'Login with Taobao or Alipay. The system auto-imports logistics from Taobao/Tmall orders. Bind your phone number to import tracking from other platforms.',
        ru: 'Вход через Taobao или Alipay. Автоимпорт логистики из Taobao/Tmall. Привяжите номер для импорта с других платформ.'
      },
    },
    {
      title: {
        zh: '查看快递',
        en: 'Track Packages',
        ru: 'Отслеживание посылок'
      },
      desc: {
        zh: '首页显示所有在途快递。点击可查看详细物流轨迹：已揽收→运输中→派送中→已签收。到件后会推送取件通知，包含取件码。',
        en: 'Home page shows all in-transit packages. Tap for detailed tracking: collected → in transit → delivering → delivered. Push notification with pickup code upon arrival.',
        ru: 'Главная показывает все посылки в пути. Детальное отслеживание. Уведомление с кодом получения при прибытии.'
      },
      tip: {
        zh: '💡 取件码很重要，去驿站取件时要出示',
        en: '💡 The pickup code is important — show it at the pickup station',
        ru: '💡 Код получения важен — покажите его в пункте выдачи'
      },
    },
    {
      title: {
        zh: '寄快递',
        en: 'Send Packages',
        ru: 'Отправка посылок'
      },
      desc: {
        zh: '点击"寄快递"，填写寄件和收件地址，选择快递公司，下单后快递员会上门取件。也可以送到附近驿站。国际寄件也支持。',
        en: 'Tap "寄快递", fill in sender/receiver addresses, choose courier, and a courier will pick up. You can also drop off at nearby stations. International shipping supported.',
        ru: 'Нажмите "寄快递", заполните адреса, выберите курьера. Курьер заберёт или отнесите в пункт. Поддерживается международная доставка.'
      },
    },
  ],
  coreFeatures: [
    {
      icon: '📍',
      title: { zh: '实时追踪', en: 'Real-Time Tracking', ru: 'Отслеживание в реальном времени' },
      desc: { zh: '全链路物流信息实时更新', en: 'Full-chain logistics info updated in real time', ru: 'Полная логистическая информация в реальном времени' }
    },
    {
      icon: '🏪',
      title: { zh: '驿站取件', en: 'Station Pickup', ru: 'Пункт выдачи' },
      desc: { zh: '查找附近菜鸟驿站，扫码取件', en: 'Find nearby Cainiao stations, scan to pick up', ru: 'Поиск ближайших пунктов, сканирование для получения' }
    },
    {
      icon: '📮',
      title: { zh: '上门取件', en: 'Door Pickup', ru: 'Забор у двери' },
      desc: { zh: '下单后快递员上门取件，方便快捷', en: 'Courier picks up at your door after ordering', ru: 'Курьер забирает у двери после заказа' }
    },
    {
      icon: '🌍',
      title: { zh: '国际物流', en: 'International Logistics', ru: 'Международная логистика' },
      desc: { zh: '支持国际包裹查询和寄送', en: 'Supports international package tracking and sending', ru: 'Отслеживание и отправка международных посылок' }
    },
  ],
  tips: [
    {
      title: { zh: '快递地址填写', en: 'Address Tips', ru: 'Советы по адресу' },
      content: {
        zh: '收件地址格式：省+市+区+街道+详细地址+邮编。学校收件通常写到"XX大学XX校区XX楼"。电话一定要填能接到短信的号码。',
        en: 'Format: Province + City + District + Street + Details + Postal Code. For campus delivery, write "XX University, XX Campus, Building XX". Use a phone number that receives SMS.',
        ru: 'Формат: провинция + город + район + улица + детали + индекс. Для кампуса: "Университет XX, кампус XX, здание XX".'
      }
    },
  ],
  faq: [
    {
      q: { zh: '包裹到了没收到通知怎么办？', en: 'What if I missed a delivery notification?', ru: 'Что делать, если не получил уведомление?' },
      a: {
        zh: '打开菜鸟App查看物流状态，如果显示"已放入驿站"，凭取件码或手机号去驿站取件。如果超过保管期（通常3-5天），可能会被退回。',
        en: 'Check the Cainiao app for status. If it says "placed in station", go pick up with your code or phone number. Packages may be returned after the holding period (usually 3-5 days).',
        ru: 'Проверьте статус в приложении. Если "в пункте выдачи", заберите по коду. Посылки могут быть возвращены через 3-5 дней.'
      }
    },
  ],
  relatedGuides: ['taobao', 'jd', 'sf-express']
};
