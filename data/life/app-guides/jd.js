// 鹿鸣集 · 京东使用指南
// 版本：2026-08-10

export default {
  id: 'jd',
  version: '2026-08-10',
  title: {
    zh: '京东使用指南',
    en: 'JD.com Shopping Guide',
    ru: 'Руководство по JD.com'
  },
  desc: {
    zh: '中国第二大电商平台，以正品保障和极速物流著称。买电子数码、家电、日用品的首选——自营商品次日达甚至当日达，品质有保证。',
    en: 'China\'s second-largest e-commerce platform, famous for authentic products and lightning-fast logistics. The go-to for electronics, home appliances, and daily essentials — self-operated items deliver next-day or even same-day with quality guarantee.',
    ru: 'Вторая крупнейшая платформа электронной коммерции в Китае, известна подлинностью товаров и молниеносной логистикой. Выбор для электроники, бытовой техники, товаров повседневного спроса — доставка на следующий день или в тот же день.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id560285658',
    android_google: 'https://play.google.com/store/apps/details?id=com.jingdong.app.mall',
    android_cn: 'https://www.jd.com/',
    note: {
      zh: '应用商店搜索"京东"下载。也可以用微信登录（京东和微信同属腾讯投资生态）。',
      en: 'Search "京东" in your app store. You can also log in with WeChat (JD and WeChat are both in the Tencent investment ecosystem).',
      ru: 'Ищите "京东" в магазине приложений. Можно войти через WeChat (JD и WeChat в экосистеме Tencent).'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '下载并注册',
        en: 'Download and Register',
        ru: 'Скачайте и зарегистрируйтесь'
      },
      desc: {
        zh: '下载安装后，使用手机号注册（需要中国手机号接收验证码）。也可以用微信账号一键登录。注册后建议完善个人信息和收货地址。地址格式同淘宝：省/市/区/详细地址/收件人/手机号。',
        en: 'After installing, register with your phone number (needs Chinese number for SMS verification). You can also log in with WeChat for one-tap access. After registration, complete your profile and add shipping addresses. Address format same as Taobao: Province/City/District/Detailed Address/Recipient/Phone.',
        ru: 'После установки зарегистрируйтесь по номеру телефона (нужен китайский номер для SMS). Можно войти через WeChat. Заполните профиль и добавьте адрес доставки. Формат как в Taobao: Провинция/Город/Район/Адрес/Получатель/Телефон.'
      },
      tip: {
        zh: '💡 推荐微信登录——方便快捷，而且京东的微信支付流程已经很成熟。',
        en: '💡 WeChat login recommended — quick and convenient, and JD\'s WeChat Pay integration is well-established.',
        ru: '💡 Рекомендуется вход через WeChat — быстро и удобно, интеграция с WeChat Pay отлажена.'
      }
    },
    {
      title: {
        zh: '认识京东自营 vs 第三方',
        en: 'Understanding JD Self-Operated vs Third-Party',
        ru: 'JD собственные vs сторонние продавцы'
      },
      desc: {
        zh: '京东有两种商品：①京东自营（商品页面有"京东自营"标识）——京东自己采购、自己发货，品质有保障，物流极快（多数次日达），售后也方便。②第三方商家（类似淘宝卖家入驻）——商品种类更多，但质量参差不齐，物流由商家自行安排。建议优先选京东自营。',
        en: 'JD has two types of products: ①JD Self-Operated (marked with "京东自营" label) — JD procures, ships, and handles after-sales. Quality assured, extremely fast logistics (mostly next-day), easy returns. ②Third-party sellers (like Taobao sellers) — wider variety but quality varies, logistics handled by sellers. Recommendation: prioritize JD Self-Operated.',
        ru: 'На JD два типа товаров: ①JD собственные (метка "京东自营") — JD закупает, доставляет, гарантия качества, быстрая логистика (обычно на следующий день). ②Сторонние продавцы — больше выбор, но качество разное. Рекомендация: приоритет — JD собственные.'
      },
      tip: {
        zh: '⚠️ 辨别技巧：商品页面左上角看是否有"京东自营"红色标签。有=京东发货+售后有保障；没有=第三方卖家。买贵重物品（手机、电脑、耳机）一定选自营。',
        en: '⚠️ How to tell: check the top-left of the product page for the red "京东自营" label. Yes = JD ships + guaranteed after-sales; No = third-party seller. For expensive items (phones, computers, headphones), always choose self-operated.',
        ru: '⚠️ Как отличить: в левом верхнем углу — красная метка "京东自营". Есть = JD доставляет + гарантия; Нет — сторонний. Для дорогих покупок (телефоны, компьютеры) — только собственные.'
      }
    },
    {
      title: {
        zh: '搜索与下单',
        en: 'Search and Order',
        ru: 'Поиск и заказ'
      },
      desc: {
        zh: '搜索框输入商品名称（支持中文），可以筛选"京东自营"只看自营商品。查看商品时注意：①价格 ②评价数和好评率 ③配送时间（自营商品会显示预计送达日期）④是否有优惠券可领。确认后加入购物车或直接购买，选择地址和支付方式完成。',
        en: 'Enter product name in the search bar (Chinese), filter "JD Self-Operated" to see only JD products. When viewing products check: ①Price ②Review count and positive rate ③Delivery time (self-operated shows estimated arrival date) ④Available coupons. Add to cart or buy now, select address and payment to complete.',
        ru: 'Введите название товара в поиске (китайский), фильтр "JD собственные". При просмотре: ①Цена ②Отзывы и рейтинг ③Время доставки (собственные показывают дату) ④Купоны. В корзину или купить, выберите адрес и оплату.'
      },
      tip: {
        zh: '💡 京东的价格波动较大——同一商品不同时间价格不同。可以使用"价格走势"功能（商品页面向下滑找到"价格曲线"）查看历史价格，避免在高点购买。',
        en: '💡 JD prices fluctuate significantly — same product, different prices at different times. Use the "Price Trend" feature (scroll down to find "Price Curve") to check historical prices and avoid buying at peak.',
        ru: '💡 Цены на JD сильно колеблются. Используйте "Тренд цен" (прокрутите вниз до "График цен") для проверки истории и избегайте покупок на пике.'
      }
    },
    {
      title: {
        zh: '物流与收货',
        en: 'Logistics and Receiving',
        ru: 'Логистика и получение'
      },
      desc: {
        zh: '京东自营商品的物流是其核心优势——全国大部分地区支持"211限时达"（当日上午11点前下单，当日送达；晚上11点前下单，次日上午送达）。快递员会电话通知取件，或放在京东快递柜/代收点。收到商品后在App中确认收货。',
        en: 'JD self-operated logistics is its core advantage — most areas support "211 timed delivery" (order before 11AM → same-day delivery; order before 11PM → next-morning delivery). Couriers call to notify pickup, or leave at JD lockers/pickup points. Confirm receipt in the app after receiving.',
        ru: 'Логистика JD — ключевое преимущество — "211 доставка" (заказ до 11:00 — в тот же день; до 23:00 — на следующее утро). Курьеры звонят или оставляют в постаматах. Подтвердите получение в приложении.'
      },
      tip: {
        zh: '💡 京东自营支持"7天无理由退货"——收到不满意可以直接退，快递员上门取件，非常方便。贵重物品建议当场开箱验货。',
        en: '💡 JD self-operated supports "7-day no-reason returns" — if unsatisfied, return directly, courier picks up at your door, very convenient. For expensive items, inspect on the spot when opened.',
        ru: '💡 JD собственные поддерживают "Возврат без причины за 7 дней" — курьер забирает у двери. Для дорогих вещей — проверяйте при получении.'
      }
    }
  ],
  coreFeatures: [
    {
      icon: '🛒',
      title: { zh: '自营商城', en: 'Self-Operated Store', ru: 'Собственный магазин' },
      desc: { zh: '京东采购、发货、售后一条龙', en: 'JD procures, ships, handles everything', ru: 'JD закупает, доставляет, обслуживает' }
    },
    {
      icon: '⚡',
      title: { zh: '极速物流', en: 'Express Logistics', ru: 'Быстрая логистика' },
      desc: { zh: '211限时达，当日/次日送达', en: '211 timed delivery, same/next-day', ru: 'Доставка в тот же/на следующий день' }
    },
    {
      icon: '💻',
      title: { zh: '数码家电', en: 'Electronics', ru: 'Электроника' },
      desc: { zh: '电子数码品类最齐全，正品保障', en: 'Most complete electronics, authentic guarantee', ru: 'Полный ассортимент электроники, подлинность' }
    },
    {
      icon: '🔄',
      title: { zh: '无忧售后', en: 'Easy After-Sales', ru: 'Простой возврат' },
      desc: { zh: '上门取件退货，7天无理由', en: 'Door pickup returns, 7-day no-reason', ru: 'Курьер забирает, возврат за 7 дней' }
    },
    {
      icon: '🎫',
      title: { zh: 'PLUS会员', en: 'PLUS Membership', ru: 'Членство PLUS' },
      desc: { zh: '年费会员，享专属价格、运费券、售后特权', en: 'Annual membership with exclusive prices, shipping coupons, priority service', ru: 'Годовая подписка со скидками, купонами доставки, приоритетом' }
    }
  ],
  tips: [
    {
      title: { zh: '京东 vs 淘宝怎么选', en: 'JD vs Taobao: When to Use Which', ru: 'JD vs Taobao: когда что использовать' },
      content: {
        zh: '①买电子产品（手机、电脑、耳机、充电宝）→ 京东（自营正品保障）②买衣服、鞋子、小饰品 → 淘宝（款式更多）③急需品（明天就要用的）→ 京东（次日达）④找便宜小众的东西 → 淘宝 ⑤买大件家电 → 京东（物流+安装一条龙）。两个互补使用最佳。',
        en: '①Electronics (phones, computers, headphones, power banks) → JD (authentic guarantee) ②Clothes, shoes, accessories → Taobao (more styles) ③Urgent items (need tomorrow) → JD (next-day delivery) ④Cheap/niche items → Taobao ⑤Large appliances → JD (logistics + installation). Use both complementarily.',
        ru: '①Электроника → JD (подлинность) ②Одежда, обувь, аксессуары → Taobao (больше стилей) ③Срочное (нужно завтра) → JD (на следующий день) ④Дешёвые/редкие вещи → Taobao ⑤Крупная бытовая техника → JD. Используйте обе.'
      }
    },
    {
      title: { zh: '京东购物节', en: 'JD Shopping Festivals', ru: 'Распродажи JD' },
      content: {
        zh: '京东最大的购物节是"618"（6月18日前后），这是京东的周年庆，折扣力度全年最大。另外"双十一"（11月11日）也有很大优惠。618期间京东的电子产品优惠尤其大，适合买贵重物品。',
        en: 'JD\'s biggest shopping event is "618" (around June 18) — its anniversary sale with the year\'s deepest discounts. "Singles\' Day" (Nov 11) also has major deals. 618 electronics discounts are especially great — ideal for expensive purchases.',
        ru: 'Крупнейшая распродажа JD — "618" (вокруг 18 июня) — юбилейная распродажа с максимальными скидками года. "День холостяков" (11 ноября) тоже с большими скидками. В 618 электроника особенно выгодна.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '外国人可以在京东购物吗？', en: 'Can foreigners shop on JD.com?', ru: 'Могут ли иностранцы покупать на JD.com?' },
      a: {
        zh: '完全可以。用手机号或微信注册，地址填中国地址，用支付宝/微信支付即可。实名认证用护照完成。京东自营商品对外国人没有购买限制。',
        en: 'Absolutely. Register with phone/WeChat, use a Chinese address, pay with Alipay/WeChat Pay. Complete real-name verification with your passport. JD self-operated products have no restrictions for foreigners.',
        ru: 'Конечно. Регистрация по телефону/WeChat, китайский адрес, оплата Alipay/WeChat. Верификация по паспорту. JD собственные товары без ограничений для иностранцев.'
      }
    },
    {
      q: { zh: '京东PLUS会员值得开吗？', en: 'Is JD PLUS membership worth it?', ru: 'Стоит ли оформлять JD PLUS?' },
      a: {
        zh: '如果你在京东购物频率较高（每月2次以上），非常值得。PLUS会员（年费约99-149元）权益包括：①每月免运费券（自营满59免运费，不满则扣券免）②PLUS专属价格（部分商品便宜5-15%）③免费退换货（无限次）④与爱奇艺/腾讯视频联合会员。如果常买电子产品和日用品，很快回本。',
        en: 'If you shop on JD frequently (2+ times/month), absolutely worth it. PLUS membership (~¥99-149/year) includes: ①Monthly free shipping coupons (self-operated free over ¥59, otherwise use coupon) ②PLUS exclusive prices (5-15% cheaper on some items) ③Free unlimited returns ④Bundled with iQiyi/Tencent Video membership. If you often buy electronics and daily goods, it pays off quickly.',
        ru: 'Если покупаете часто (2+ раз/мес) — стоит. PLUS (~99-149¥/год): ①Купоны бесплатной доставки ②Эксклюзивные цены (на 5-15% дешевле) ③Бесплатный возврат без ограничений ④Подписка iQiyi/Tencent Video. При частых покупках электроники и бытовых товаров быстро окупается.'
      }
    },
    {
      q: { zh: '退货方便吗？', en: 'Is returning easy?', ru: 'Легко ли возвращать?' },
      a: {
        zh: '京东自营退货非常方便——在App中申请退货→选择原因→快递员上门取件→退款到账（通常1-3个工作日）。大部分自营商品支持"7天无理由退货"，有些甚至支持30天。退货商品需保持完好（不影响二次销售）。第三方商家退货流程稍复杂，需先与商家协商。',
        en: 'JD self-operated returns are very convenient: apply in app → select reason → courier picks up at your door → refund (usually 1-3 business days). Most self-operated items support "7-day no-reason returns", some even 30 days. Items must be in good condition. Third-party seller returns are slightly more complex — negotiate with seller first.',
        ru: 'Возврат JD собственных очень удобен: заявка в приложении → причина → курьер забирает → возврат (1-3 дня). Большинство поддерживает "7 дней без причины", некоторые 30 дней. Товар должен быть в хорошем состоянии. Возврат сторонних продавцов сложнее.'
      }
    }
  ],
  relatedGuides: ['setup-alipay', 'setup-wechat', 'first-week-checklist', 'taobao']
};
