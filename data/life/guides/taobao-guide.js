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
      title: {
        zh: '淘宝购物流程',
        en: 'Taobao Shopping Process',
        ru: 'Процесс покупки на Taobao'
      },
      desc: {
        zh: '📱 基本流程\n1. 下载淘宝App或访问taobao.com\n2. 用支付宝/手机号登录\n3. 搜索商品（支持中文/英文）\n4. 浏览评价和详情\n5. 选择规格（颜色、尺寸等）\n6. 加入购物车或直接购买\n7. 填写收货地址\n8. 支付宝付款\n9. 等待快递（通常2-5天）\n10. 确认收货\n\n💡 购物技巧：\n• 看"销量"排序找热门商品\n• 仔细看买家评价（尤其是差评和图片评价）\n• 注意"包邮"标签\n• 用"找相似"比价\n• 大促时（双11/618）价格最低\n\n⚠️ 注意：淘宝上的部分商品可能是仿品，注意辨别。',
        en: '📱 Basic flow:\n1. Download Taobao app\n2. Login with Alipay/phone\n3. Search products\n4. Check reviews and details\n5. Select specs\n6. Add to cart or buy now\n7. Enter address\n8. Pay with Alipay\n9. Wait for delivery (2-5 days)\n10. Confirm receipt\n\n💡 Tips: Sort by sales, read reviews carefully, look for "包邮" (free shipping), compare prices\n⚠️ Watch out for counterfeit products',
        ru: '📱 Шаг: скачать → войти → искать → отзывы → заказать → оплатить → получить\n💡 Сортировка по продажам, читайте отзывы\n⚠️ Остерегайтесь подделок'
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
