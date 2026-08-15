// Guide: 京东购物指南
export default {
  id: 'jd-guide',
  category: 'shopping',
  icon: '📦',
  type: 'hands-on',
  difficulty: 1,
  estimatedTime: 20,
  apps: ['jd'],
  prerequisites: [],
  tags: ['jd', 'electronics', 'shopping'],
  title: {
    zh: '京东购物指南',
    en: 'JD.com Shopping Guide',
    ru: 'Руководство по JD.com'
  },
  summary: {
    zh: '京东特色、与淘宝对比、电器购买与京东自营',
    en: 'JD features, comparison with Taobao, electronics and JD self-operated',
    ru: 'Особенности JD, сравнение с Taobao, электроника'
  },
  intro: {
    zh: '京东是中国第二大电商平台，以正品保障和物流速度著称，特别适合购买电子产品和日用品。',
    en: 'JD.com is China\'s second-largest e-commerce platform, known for authentic products and fast delivery — ideal for electronics and daily necessities.',
    ru: 'JD.com — вторая по величине платформа, известна подлинностью и быстрой доставкой.'
  },
  preparation: {
    zh: [
    ],
    en: [
    ],
    ru: [
    ]
  },
  steps: [
    {
      title: { zh: '了解京东', en: 'Understand JD.com', ru: 'Что такое JD.com' },
      desc: {
        zh: '京东（JD.com）是中国第二大电商平台，以自营正品和快速物流著称。京东物流（JD Logistics）在很多城市支持"上午下单下午到"或"次日达"。适合购买电子产品、家电、品牌日用品等对品质和速度有要求的商品。',
        en: 'JD.com is China\'s second-largest e-commerce platform, known for authentic self-operated products and fast logistics. JD Logistics supports "order in the morning, deliver by afternoon" or "next-day delivery" in many cities. Ideal for electronics, appliances, and branded daily items where quality and speed matter.',
        ru: 'JD.com — вторая по величине платформа электронной коммерции в Китае, известная подлинными товарами и быстрой доставкой. JD Logistics поддерживает "заказ утром — доставка днём" или "доставка на следующий день". Идеально для электроники, бытовой техники и брендовых товаров.'
      }
    },
    {
      title: { zh: '下载注册和购物', en: 'Download, register, and shop', ru: 'Скачивание, регистрация и покупки' },
      desc: {
        zh: '在应用商店搜索"京东"下载（红色狗头图标）。支持手机号注册或微信一键登录。搜索想要的商品，京东自营商品（标注"京东自营"）品质和物流最有保障。可以用筛选器按品牌、价格、评价排序。',
        en: 'Search "京东" in app stores (red dog-head icon). Register with phone number or one-tap WeChat login. Search for products — "京东自营" (JD self-operated) items have the best quality and logistics guarantee. Use filters for brand, price, and ratings.',
        ru: 'Найдите "京东" в магазинах приложений (красная иконка с головой собаки). Регистрация по номеру или через WeChat. Ищите товары — "京东自营" (собственные товары JD) имеют лучшую гарантию качества и доставки.'
      }
,      tip: {
        zh: '京东PLUS会员（年费约149元）提供免费运费券、专属折扣和会员价。如果经常在京东购物，可以考虑开通。学生有时有半价优惠。',
        en: 'JD PLUS membership (~¥149/year) offers free shipping coupons, exclusive discounts, and member prices. If you shop on JD often, consider subscribing. Students sometimes get 50% off.',
        ru: 'Членство JD PLUS (~¥149/год) предлагает бесплатные купоны на доставку, эксклюзивные скидки. Если часто покупаете на JD, стоит оформить. Для студентов иногда скидка 50%.'
      }
    },
    {
      title: { zh: '下单和售后', en: 'Order and after-sales', ru: 'Заказ и послепродажное обслуживание' },
      desc: {
        zh: '加入购物车或直接购买，填写收货地址。京东自营一般次日达（部分城市当日达）。京东的售后服务很好：7天无理由退货、质量问题免费换新。退货可以上门取件，不需要自己去寄。',
        en: 'Add to cart or buy directly, fill in delivery address. JD self-operated items usually deliver next day (same day in some cities). JD\'s after-sales service is excellent: 7-day no-reason returns, free replacement for quality issues. Returns can be picked up at your door — no need to ship yourself.',
        ru: 'Добавьте в корзину или купите напрямую, укажите адрес. Собственные товары JD обычно доставляются на следующий день (в некоторых городах в тот же день). Посепродажное обслуживание JD отличное: возврат без причины 7 дней, бесплатная замена при дефектах. Курьер заберёт возврат у двери.'
      }
,      tip: {
        zh: '京东还有"京东到家"服务，可以1小时内送到日用品、生鲜食品，类似即时配送。',
        en: 'JD also offers "JD Daojia" service — daily necessities and fresh food delivered within 1 hour, similar to instant delivery.',
        ru: 'JD также предлагает услугу "JD Daojia" — доставка повседневных товаров и свежих продуктов за 1 час.'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['taobao-guide', 'pinduoduo-guide']
};
