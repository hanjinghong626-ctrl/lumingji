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
      title: { zh: '点外卖步骤', en: 'Ordering Steps', ru: 'Шаги заказа' },
      desc: { zh: '📱 操作步骤：\n1. 打开美团/饿了么 → 定位你的地址\n2. 搜索餐厅或菜品（可输入中文/拼音）\n3. 选择菜品加入购物车\n4. 确认地址、备注（如「不要辣」）\n5. 选择送达时间\n6. 支付（支付宝/微信）\n7. 等待配送（通常30-60分钟）\n8. 外卖小哥送到后会电话/短信通知\n\n💡 搜索技巧：\n• 搜索「汉堡」「披萨」等中文菜名\n• 查看评分（4.5+推荐）\n• 注意起送价和配送费\n• 新用户常有优惠券', en: '📱 Steps:\n1. Open Meituan/Ele.me → set your address\n2. Search restaurant or dish\n3. Add items to cart\n4. Confirm address, add notes (e.g. "no spicy")\n5. Choose delivery time\n6. Pay (Alipay/WeChat)\n7. Wait (30-60 min)\n8. Rider calls/texts on arrival\n\n💡 Search tips: search Chinese dish names, check rating (4.5+), note minimum order and delivery fee, new user coupons available', ru: '📱 Шаги:\n1. Откройте Meituan/Ele.me → адрес\n2. Поиск ресторана\n3. Добавьте в корзину\n4. Подтвердите адрес, заметки\n5. Время доставки\n6. Оплата\n7. Ждите 30-60 мин\n8. Курьер позвонит\n💡 Рейтинг 4.5+, купоны для новых' },
    },
  ],
  faq: [
    { q: { zh: '不会中文怎么点外卖？', en: 'How to order without Chinese?', ru: 'Как заказать без китайского?' }, a: { zh: '可以用图片搜索（拍照翻译菜名），或搜索「汉堡」「pizza」等英文词。大部分餐厅菜品有图片。也可以让中国朋友帮忙点第一次，熟悉流程后就会了。', en: 'Use image search (photo-translate dish names), or search English words like "burger". Most dishes have photos. Ask a Chinese friend to help first time.', ru: 'Используйте поиск по фото или английские слова. У большинства блюд есть фото. Попросите друга помочь впервые.' } },
  ],
  nextGuides: ['canteen-guide', 'restaurant-ordering', 'bubble-tea']
};