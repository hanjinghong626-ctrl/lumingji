// Guide: 奶茶文化入门
export default {
  id: 'bubble-tea',
  category: 'food',
  icon: '🧋',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 5,
  apps: [],
  prerequisites: [],
  tags: ["tea", "bubble-tea", "food"],
  title: { zh: '奶茶文化入门', en: 'Bubble Tea Culture', ru: 'Культура молочного чая' },
  summary: { zh: '中国奶茶品牌、点单方式、糖度冰量选择', en: 'Chinese tea brands, ordering, sugar and ice customization', ru: 'Бренды, заказ, выбор сахара и льда' },
  intro: { zh: '奶茶是中国年轻人最流行的饮品。蜜雪冰城、喜茶、瑞幸等品牌遍地开花。', en: 'Bubble tea is the most popular drink among Chinese youth. Mixue, Heytea, Luckin Coffee are everywhere.', ru: 'Молочный чай — самый популярный напиток молодёжи. Mixue, Heytea, Luckin повсюду.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '选择奶茶品牌', en: 'Choose a bubble tea brand', ru: 'Выбор бренда молочного чая' },
      desc: {
        zh: '中国最受欢迎的奶茶品牌：蜜雪冰城（最便宜，5-8元）、一点点/CoCo（10-15元）、喜茶/奈雪（20-30元）、茶百道/古茗（12-18元）。蜜雪冰城门店最多、性价比最高，推荐留学生首选。',
        en: 'Popular Chinese bubble tea brands: Mixue (cheapest, ¥5-8), Yidian/CoCo (¥10-15), Heytea/Nayuki (¥20-30), Chabaidao/Guming (¥12-18). Mixue has the most locations and best value — recommended for international students.',
        ru: 'Популярные бренды: Mixue (самый дешёвый, ¥5-8), Yidian/CoCo (¥10-15), Heytea/Nayuki (¥20-30), Chabaidao/Guming (¥12-18). Mixue — больше всего точек и лучшее соотношение цена/качество, рекомендуем студентам.'
      }
    },
    {
      title: { zh: '下单点奶茶', en: 'How to order', ru: 'Как заказать' },
      desc: {
        zh: '可以用微信小程序搜索品牌名（如"蜜雪冰城"）在线下单，或直接到门店排队点单。点单时需要选择：①饮品类型（奶茶/果茶/纯茶）；②甜度（全糖/七分/半糖/三分/无糖）；③冰量（正常冰/少冰/去冰/常温/热饮）；④加料（珍珠/椰果/芋圆等，部分免费）。',
        en: 'You can search the brand name in WeChat mini-programs (e.g., "蜜雪冰城") to order online, or queue at the store. When ordering, choose: ① Drink type (milk tea/fruit tea/pure tea); ② Sweetness (full/70%/half/30%/none); ③ Ice level (regular/less/no ice/warm/hot); ④ Toppings (pearls/coconut jelly/taro balls, some free).',
        ru: 'Можно найти бренд в мини-программах WeChat (например, "蜜雪冰城") для онлайн-заказа или стоять в очереди в магазине. При заказе выберите: ① Тип (молочный чай/фруктовый/чистый чай); ② Сладость (полная/70%/половина/30%/без сахара); ③ Лёд (обычный/меньше/без льда/тёплый/горячий); ④ Добавки (жемчуг/кокос/таро, некоторые бесплатны).'
      }
,      tip: {
        zh: '不知道选什么？第一次可以点"招牌奶茶，半糖，少冰"——这是最安全的入门选择。',
        en: 'Not sure what to order? For your first time, try "招牌奶茶，半糖，少冰" (signature milk tea, half sugar, less ice) — the safest beginner choice.',
        ru: 'Не знаете что выбрать? В первый раз закажите "招牌奶茶，半糖，少冰" (фирменный молочный чай, полсладости, меньше льда) — самый безопасный выбор.'
      }
    },
    {
      title: { zh: '取餐和饮用', en: 'Pickup and enjoy', ru: 'Получение и наслаждение' },
      desc: {
        zh: '下单后会给你一个取餐号（或短信通知）。等叫号或看到屏幕显示你的号码时去取餐。奶茶通常有封口膜，用吸管戳破即可饮用。大杯一般700ml左右，建议当天喝完（尤其是加了鲜奶或水果的）。',
        en: 'After ordering, you\'ll get a pickup number (or SMS notification). When your number is called or displayed on screen, go collect your drink. Bubble tea usually comes sealed with a film — pierce it with the straw to drink. Large cups are about 700ml; recommend drinking the same day (especially with fresh milk or fruit).',
        ru: 'После заказа вам дадут номер (или SMS-уведомление). Когда назовут ваш номер, заберите напиток. Молочный чай обычно запечатан плёнкой — проткните трубочкой. Большие стаканчики ~700 мл, рекомендуем выпить в тот же день (особенно со свежим молоком или фруктами).'
      }
,      tip: {
        zh: '外卖也可以通过美团/饿了么点奶茶，一般30分钟内送到。部分品牌外卖会额外收取包装费1-2元。',
        en: 'You can also order bubble tea via Meituan/Ele.me for delivery, usually within 30 minutes. Some brands charge an extra ¥1-2 for packaging on delivery orders.',
        ru: 'Также можно заказать через Meituan/Ele.me с доставкой, обычно за 30 минут. Некоторые бренды берут дополнительную плату за упаковку ¥1-2.'
      }
    }
  ],
  faq: [
    { q: { zh: '怎么点单？', en: 'How to order?', ru: 'Как заказать?' }, a: { zh: '大部分奶茶店支持小程序点单，到店取。也可以直接到柜台说「一杯珍珠奶茶，少糖，少冰」。', en: 'Most shops support mini-program ordering for pickup. Or tell the counter: "一杯珍珠奶茶，少糖，少冰" (one bubble tea, less sugar, less ice).', ru: 'Большинство — мини-программа для самовывоза. Или скажите: "一杯珍珠奶茶，少糖，少冰".' } },
  ],
  nextGuides: ['night-market', 'food-delivery', 'restaurant-ordering']
};