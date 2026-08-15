// Guide: 点外卖完全指南
export default {
  id: 'food-delivery',
  category: 'food',
  icon: '🛵',
  type: 'hands-on',
  difficulty: 1,
  estimatedTime: 15,
  apps: ["meituan-waimai", "eleme"],
  prerequisites: [],
  tags: ["delivery", "food", "meituan", "eleme"],
  title: { zh: '点外卖完全指南', en: 'Food Delivery Complete Guide', ru: 'Полный гид по доставке еды' },
  summary: { zh: '美团外卖/饿了么点餐全流程：选店、下单、跟踪、评价', en: 'Full Meituan/Ele.me ordering: browse, order, track, rate', ru: 'Meituan/Ele.me: выбор, заказ, отслеживание, оценка' },
  intro: { zh: '外卖是中国留学生最常用的就餐方式，美团外卖和饿了么覆盖几乎所有餐厅。', en: 'Food delivery is the most popular dining option for students. Meituan and Ele.me cover almost all restaurants.', ru: 'Доставка еды — самый популярный вариант. Meituan и Ele.me покрывают почти все рестораны.' },
  preparation: { zh: ['美团或饿了么App', '支付宝/微信支付', '收货地址'], en: ['Meituan or Ele.me app', 'Alipay/WeChat Pay', 'Delivery address'], ru: ['Meituan или Ele.me', 'Alipay/WeChat Pay', 'Адрес доставки'] },
  steps: [
    {
      title: { zh: '下载并设置外卖App', en: 'Download and set up delivery app', ru: 'Скачайте приложение доставки' },
      desc: {
        zh: '在App Store或应用商店搜索下载「美团」或「饿了么」App。打开后允许获取位置权限，系统才能推荐附近餐厅。用手机号注册登录，绑定支付宝或微信支付。',
        en: 'Search and download Meituan or Ele.me from App Store. Allow location access. Register with your phone number and bind Alipay or WeChat Pay.',
        ru: 'Найдите в App Store и скачайте Meituan или Ele.me. Разрешите доступ к геолокации. Зарегистрируйтесь по номеру телефона и привяжите Alipay или WeChat Pay.'
      }
,      tip: {
        zh: '建议两个App都下载，方便比价。新用户首单通常有大幅优惠。',
        en: 'Download both apps to compare prices. New users usually get big first-order discounts.',
        ru: 'Скачайте оба приложения для сравнения цен. Новые пользователи получают скидки на первый заказ.'
      }
    },
    {
      title: { zh: '搜索餐厅与选择菜品', en: 'Search restaurants and choose dishes', ru: 'Поиск ресторанов и выбор блюд' },
      desc: {
        zh: '在首页搜索栏输入菜名或餐厅名（支持拼音搜索）。浏览时注意：评分4.5以上比较靠谱，月售1000+说明出品稳定。选择菜品加入购物车，注意查看起送价和配送费。',
        en: 'Enter dish or restaurant name in the search bar (pinyin works too). Look for ratings above 4.5 and monthly sales over 1000. Add dishes to cart, note the minimum order and delivery fee.',
        ru: 'Введите название блюда или ресторана в строку поиска (поддерживается пиньинь). Ищите рейтинг выше 4,5 и более 1000 заказов в месяц. Добавьте блюда в корзину, обратите внимание на минимальную сумму и стоимость доставки.'
      }
,      tip: {
        zh: '搜索英文菜名如pizza也能找到结果。菜品有图片的可以对照图片点。',
        en: 'Searching English dish names like pizza also works. Dishes with photos make ordering easier.',
        ru: 'Поиск по английским названиям тоже работает. Блюда с фотографиями облегчают выбор.'
      }
    },
    {
      title: { zh: '确认订单与备注', en: 'Confirm order and add notes', ru: 'Подтвердите заказ и добавьте примечания' },
      desc: {
        zh: '进入购物车页面，核对菜品和数量。在备注栏填写特殊要求，如不要辣、少盐、多加醋等。确认收货地址正确，选择立即送达或预约时间。',
        en: 'Go to your cart, review items and quantities. In the notes field add special requests like no spice, less salt, extra vinegar. Confirm delivery address and choose deliver now or schedule a time.',
        ru: 'Перейдите в корзину, проверьте блюда и количество. В поле примечаний укажите особые пожелания: без острого, меньше соли, больше уксуса. Подтвердите адрес и выберите время доставки.'
      }
    },
    {
      title: { zh: '支付并等待配送', en: 'Pay and wait for delivery', ru: 'Оплатите и дождитесь доставки' },
      desc: {
        zh: '点击提交订单，选择支付宝或微信支付完成付款。下单后可在App中实时查看骑手位置。配送通常需要30-60分钟。骑手到达后会打电话或发短信通知取餐。',
        en: 'Tap Submit Order and pay with Alipay or WeChat Pay. Track the rider location in real time. Delivery usually takes 30-60 minutes. The rider will call or text on arrival.',
        ru: 'Нажмите «Оформить заказ» и оплатите через Alipay или WeChat Pay. Отслеживайте курьера в реальном времени. Доставка обычно занимает 30-60 минут. Курьер позвонит или напишет по прибытии.'
      }
,      tip: {
        zh: '如果超时未送达，可在App内联系骑手或申请催单。',
        en: 'If delivery is delayed, contact the rider or request expedited delivery through the app.',
        ru: 'Если доставка задерживается, свяжитесь с курьером через приложение.'
      }
    },
    {
      title: { zh: '取餐与评价', en: 'Pick up and rate', ru: 'Получите заказ и оставьте отзыв' },
      desc: {
        zh: '外卖一般送到宿舍楼下或指定地点。接到通知后尽快取餐，避免食物变凉。用餐后记得在App里给餐厅和骑手打分评价，帮助其他留学生做出选择。',
        en: 'Delivery is usually to your dorm entrance or designated spot. Pick up promptly so food stays warm. After eating, rate the restaurant and rider in the app to help other international students.',
        ru: 'Доставка обычно ко входу в общежитие или в указанное место. Заберите заказ сразу, чтобы еда не остыла. После еды оцените ресторан и курьера в приложении.'
      }
,      tip: {
        zh: '给5星好评+带图评价，有时能获得优惠券奖励。',
        en: 'Giving 5-star ratings with photos sometimes earns coupon rewards.',
        ru: 'Оценка 5 звёзд с фото иногда приносит бонусные купоны.'
      }
    }
  ],
  faq: [
    { q: { zh: '不会中文怎么点外卖？', en: 'How to order without Chinese?', ru: 'Как заказать без китайского?' }, a: { zh: '可以用图片搜索（拍照翻译菜名），或搜索「汉堡」「pizza」等英文词。大部分餐厅菜品有图片。也可以让中国朋友帮忙点第一次，熟悉流程后就会了。', en: 'Use image search (photo-translate dish names), or search English words like "burger". Most dishes have photos. Ask a Chinese friend to help first time.', ru: 'Используйте поиск по фото или английские слова. У большинства блюд есть фото. Попросите друга помочь впервые.' } },
  ],
  nextGuides: ['canteen-guide', 'restaurant-ordering', 'bubble-tea']
};