// Guide: 淘宝购物攻略
export default {
  id: 'taobao-guide',
  category: 'shopping',
  icon: '🛒',
  type: 'hands-on',
  difficulty: 1,
  estimatedTime: 30,
  apps: ['taobao'],
  prerequisites: [],
  tags: ['taobao', 'online-shopping', 'ecommerce'],
  title: {
    zh: '淘宝购物攻略',
    en: 'Taobao Shopping Guide',
    ru: 'Руководство по покупкам на Taobao'
  },
  summary: {
    zh: '注册使用、搜索技巧、下单流程、收货与退换货',
    en: 'Registration, search tips, ordering, receiving and returns',
    ru: 'Регистрация, поиск, заказ, получение и возврат'
  },
  intro: {
    zh: '淘宝是中国最大的网购平台，几乎什么都能买到。学会用淘宝，留学生活方便又省钱。',
    en: 'Taobao is China\'s largest online shopping platform — you can buy almost anything. Learning to use it makes student life easier and cheaper.',
    ru: 'Taobao — крупнейшая платформа онлайн-покупок в Китае.'
  },
  preparation: {
    zh: [
      '支付宝账号（已实名认证）',
      '收货地址'
    ],
    en: [
      'Alipay account (verified)',
      'Delivery address'
    ],
    ru: [
      'Аккаунт Alipay',
      'Адрес доставки'
    ]
  },
  steps: [
    {
      title: { zh: '了解淘宝', en: 'Understand Taobao', ru: 'Что такое Taobao' },
      desc: {
        zh: '淘宝（Taobao）是中国最大的C2C电商平台，几乎什么都能买到：衣服、电子产品、家居用品、学习资料、零食……价格通常比实体店便宜很多。国际学生可以通过淘宝体验最地道的中国网购。',
        en: 'Taobao is China\'s largest C2C e-commerce platform — you can buy almost anything: clothes, electronics, home goods, study materials, snacks. Prices are usually much cheaper than physical stores. International students can experience authentic Chinese online shopping through Taobao.',
        ru: 'Taobao — крупнейшая C2C платформа электронной коммерции в Китае — можно купить почти всё: одежду, электронику, товары для дома, учебные материалы, закуски. Цены обычно значительно ниже, чем в обычных магазинах. Иностранные студенты могут почувствовать настоящий китайский онлайн-шопинг.'
      }
    },
    {
      title: { zh: '下载注册和搜索商品', en: 'Download, register, and search products', ru: 'Скачивание, регистрация и поиск товаров' },
      desc: {
        zh: '在应用商店搜索"淘宝"下载（橙色图标）。支持手机号注册或支付宝快捷登录。首页搜索框输入你想要的商品关键词。善用筛选功能：按"销量"排序可以找到热门商品，按"价格"排序可以找到最便宜的。',
        en: 'Search "淘宝" in app stores (orange icon). Register with phone number or quick login via Alipay. Enter product keywords in the search bar. Use filters: sort by "sales" for popular items, sort by "price" for cheapest.',
        ru: 'Найдите "淘宝" в магазинах приложений (оранжевая иконка). Регистрация по номеру или быстрый вход через Alipay. Введите ключевые слова в поиск. Используйте фильтры: по продажам для популярных, по цене для самых дешёвых.'
      }
,      tip: {
        zh: '淘宝上同一商品可能有成千上万个卖家。技巧：①看销量（月销1000+的通常靠谱）；②看评价（特别是带图评价）；③看店铺等级（皇冠/金冠店铺更可靠）。',
        en: 'Same products may have thousands of sellers. Tips: ① Check sales volume (1000+ monthly sales is usually reliable); ② Read reviews (especially photo reviews); ③ Check store rating (crown/gold crown stores are more reliable).',
        ru: 'Один товар могут продавать тысячи продавцов. Советы: ① Объём продаж (1000+ в месяц обычно надёжно); ② Отзывы (особенно с фото); ③ Рейтинг магазина (коронные/золотые магазины надёжнее).'
      }
    },
    {
      title: { zh: '下单购买和收货', en: 'Order and receive', ru: 'Заказ и получение' },
      desc: {
        zh: '选择商品规格（颜色、尺寸等），点击"立即购买"或"加入购物车"。收货地址填写学校地址或宿舍地址。使用支付宝付款。淘宝购物一般3-7天到货。支持7天无理由退货（部分商品标注"不支持七天退货"的除外）。',
        en: 'Select product specifications (color, size, etc.), tap "Buy Now" or "Add to Cart". Fill in school or dorm address. Pay with Alipay. Taobao orders usually arrive in 3-7 days. Supports 7-day no-reason returns (except items marked "no 7-day returns").',
        ru: 'Выберите параметры (цвет, размер и т.д.), нажмите "Купить" или "В корзину". Укажите адрес школы или общежития. Оплата через Alipay. Доставка обычно 3-7 дней. Поддержка возврата без причины 7 дней (кроме товаров с отметкой "без возврата").'
      }
,      tip: {
        zh: '淘宝的"菜鸟驿站"是校园包裹代收点。收到取件短信后，凭取件码去菜鸟驿站领取包裹。一般免费保管3-5天，超期可能退回。',
        en: 'Taobao\'s "Cainiao Station" is the campus package pickup point. After receiving the pickup SMS, use the pickup code to collect your package. Usually free storage for 3-5 days; packages may be returned if overdue.',
        ru: '"Cainiao Station" — пункт получения посылок в кампусе. После SMS с кодом получения заберите посылку. Бесплатное хранение 3-5 дней; при просрочке посылка может быть возвращена.'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '淘宝怎么切换英文界面？',
        en: 'How to switch Taobao to English?',
        ru: 'Как переключить Taobao на английский?'
      },
      a: {
        zh: '淘宝App目前没有完整的英文界面。建议：① 用截图翻译功能 ② 让中国朋友帮忙 ③ 用图片搜索（拍照搜索同款）。',
        en: 'Taobao app doesn\'t have a full English interface. Tips: ① Use screenshot translation ② Ask Chinese friends ③ Use image search (photo search).',
        ru: 'Taobao не имеет полного английского интерфейса. Используйте перевод скриншотов или поиск по фото.'
      }
    }
  ],
  nextGuides: ['jd-guide', 'express-delivery']
};
