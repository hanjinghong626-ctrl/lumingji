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
      title: { zh: '扫码点餐', en: 'QR Scan Ordering', ru: 'QR-заказ' },
      desc: { zh: '📱 现代中餐厅流程：\n1. 入座后扫描桌上二维码\n2. 微信/支付宝打开菜单\n3. 选择菜品 → 加入购物车\n4. 确认下单 → 支付\n5. 厨房接单制作\n\n🌶️ 辣度选择：\n• 不辣（bú là）\n• 微辣（wēi là）— 轻度辣\n• 中辣（zhōng là）\n• 特辣（tè là）— 非常辣！\n\n💡 点菜技巧：\n• 看图片选菜\n• 推荐菜通常排在前面\n• 一份菜一般够1-2人吃\n• 人均30-80元的餐厅品质不错', en: '📱 Modern process: sit → scan QR → browse menu in WeChat/Alipay → add to cart → order & pay → kitchen prepares\n\n🌶️ Spice levels:\n• 不辣 (bú là) — not spicy\n• 微辣 (wēi là) — mild\n• 中辣 (zhōng là) — medium\n• 特辣 (tè là) — very hot!\n\n💡 Tips: use photos, recommended dishes listed first, one dish serves 1-2 people, ¥30-80 per person for decent quality', ru: '📱 Процесс: сядьте → QR → меню в WeChat/Alipay → заказ → оплата\n\n🌶️ Острота:\n• 不辣 — не остро\n• 微辣 — слегка\n• 中辣 — средне\n• 特辣 — очень остро!\n\n💡 Фото, рекомендуемые блюда первыми, 30-80 ¥/чел.' },
    },
  ],
  faq: [
    { q: { zh: '怎么告诉服务员不要辣？', en: 'How to tell them no spice?', ru: 'Как сказать «без острого»?' }, a: { zh: '可以说「不要辣」（bú yào là）或出示文字。扫码点餐时可以在备注中选「不辣」。', en: 'Say "不要辣" (bú yào là) or show text on phone. In QR ordering, select "不辣" in notes.', ru: 'Скажите "不要辣" (bú yào là) или покажите текст. В QR-заказе выберите "不辣".' } },
  ],
  nextGuides: ['food-delivery', 'canteen-guide', 'bubble-tea']
};