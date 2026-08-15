// Guide: 夜市美食探索
export default {
  id: 'night-market',
  category: 'food',
  icon: '🏮',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["night-market", "street-food", "food"],
  title: { zh: '夜市美食探索', en: 'Night Market Food Guide', ru: 'Ночной рынок' },
  summary: { zh: '夜市逛吃攻略：必吃小吃、卫生建议、砍价技巧', en: 'Night market tips: must-try snacks, hygiene tips, bargaining', ru: 'Ночной рынок: что попробовать, гигиена, торг' },
  intro: { zh: '夜市是中国城市夜生活的精华，各种小吃让人目不暇接。', en: 'Night markets are the essence of Chinese city nightlife, with dazzling street food.', ru: 'Ночные рынки — суть ночной жизни китайских городов.' },
  preparation: { zh: ['现金或手机支付', '好胃口'], en: ['Cash or mobile payment', 'Good appetite'], ru: ['Наличные или телефон', 'Хороший аппетит'] },
  steps: [
    {
      title: { zh: '找到夜市', en: 'Find night markets', ru: 'Поиск ночных рынков' },
      desc: {
        zh: '中国的夜市通常在傍晚6-7点开始，持续到晚上11-12点。著名夜市：北京王府井小吃街、西安回民街、成都锦里/建设路、重庆八一隧道夜市、昆明南屏街。大学附近通常也有本地夜市，可以在大众点评搜索"夜市"或问学长学姐。',
        en: 'Chinese night markets usually open around 6-7 PM and last until 11 PM-midnight. Famous ones: Beijing Wangfujing Snack Street, Xi\'an Muslim Quarter, Chengdu Jinli/Jianshe Road, Chongqing Bayi Tunnel Market, Kunming Nanping Street. Near universities, there are usually local night markets — search "夜市" on Dianping or ask senior students.',
        ru: 'Ночные рынки обычно открываются в 18-19 часов и работают до 23-24 часов. Известные: Пекин Ванфуцзин, Сиань Мусульманский квартал, Чэнду Цзиньли, Чунцин Баи, Куньмин Наньпин. Рядом с вузами обычно есть местные рынки — ищите "夜市" в Dianping или спросите старших.'
      }
    },
    {
      title: { zh: '夜市必吃美食', en: 'Must-eat night market foods', ru: 'Обязательная еда ночного рынка' },
      desc: {
        zh: '夜市美食推荐（按受欢迎程度排序）：①烤串（羊肉串/牛肉串/鱿鱼，约3-10元/串）；②煎饼果子（鸡蛋+薄饼+脆饼，约8-12元）；③臭豆腐（闻起来臭吃起来香，约10-15元）；④炒粉/炒面（各种口味，约8-15元）；⑤水果捞/冰粉（夏天解暑，约5-10元）；⑥烤冷面（东北特色，约8-10元）。',
        en: 'Recommended night market foods (by popularity): ① Skewers (lamb/beef/squid, ~¥3-10/stick); ② Jianbing guozi (egg + thin crepe + crispy, ~¥8-12); ③ Stinky tofu (smells strong, tastes great, ~¥10-15); ④ Stir-fried noodles (~¥8-15); ⑤ Fruit bowls/iced jelly (summer refreshment, ~¥5-10); ⑥ Grilled cold noodles (northeast specialty, ~¥8-10).',
        ru: 'Рекомендуемые блюда: ① Шашлыки (баранина/говядина/кальмар, ~¥3-10/шт); ② Цзяньбин (яйцо + блин + хрустящий, ~¥8-12); ③ Вонючий тофу (пахнет сильно, вкус отличный, ~¥10-15); ④ Жареная лапша (~¥8-15); ⑤ Фруктовые миски/ледяное желе (~¥5-10); ⑥ Жареная холодная лапша (~¥8-10).'
      }
,      tip: {
        zh: '夜市食物价格便宜但卫生条件参差不齐。建议选择人多、翻台快的摊位（食材更新鲜）。避免买生食（如生鱼片）和不明来源的冷饮。',
        en: 'Night market food is cheap but hygiene varies. Choose busy stalls with high turnover (fresher ingredients). Avoid raw food and unverified cold drinks.',
        ru: 'Еда на ночных рынках дешёвая, но гигиена разная. Выбирайте популярные лотки с быстрым оборотом. Избегайте сырых продуктов и непроверенных холодных напитков.'
      }
    },
    {
      title: { zh: '支付和安全', en: 'Payment and safety', ru: 'Оплата и безопасность' },
      desc: {
        zh: '夜市摊位几乎全部支持微信/支付宝扫码支付，少数接受现金。准备零钱不太必要。逛街时注意保管好手机和钱包（夜市人多拥挤，是扒手活跃的地方）。建议穿舒适的平底鞋，带湿巾和纸巾。',
        en: 'Almost all night market stalls accept WeChat/Alipay QR payments; a few accept cash. No need to prepare change. Keep your phone and wallet secure (crowded night markets attract pickpockets). Wear comfortable flat shoes, bring wet wipes and tissues.',
        ru: 'Почти все лотки принимают WeChat/Alipay; некоторые — наличные. Не нужно готовить сдачу. Берегите телефон и кошелёк (на рынках много карманников). Носите удобную обувь, влажные салфетки.'
      }
,      tip: {
        zh: '注意食物过敏：夜市食物成分不透明，如有过敏史，点餐前务必询问摊主食材成分。部分摊位可能使用花生油或含有坚果成分。',
        en: 'Food allergy alert: night market food ingredients aren\'t transparent. If you have allergies, always ask stall owners about ingredients. Some may use peanut oil or contain nuts.',
        ru: 'Предупреждение об аллергии: ингредиенты не всегда прозрачны. При аллергии всегда спрашивайте о составе. Некоторые могут использовать арахисовое масло или орехи.'
      }
    }
  ],
  faq: [
    { q: { zh: '夜市食物安全吗？', en: 'Is night market food safe?', ru: 'Безопасна ли еда на рынке?' }, a: { zh: '大部分正规夜市有卫生管理。建议选择人多、现做现卖的摊位。肠胃敏感的同学可以适量尝试，不要一次吃太多品种。', en: 'Most regulated night markets have hygiene management. Choose busy, freshly-cooked stalls. If you have a sensitive stomach, try moderate amounts.', ru: 'Большинство рынков регулируются. Выбирайте популярные лавки со свежей едой.' } },
  ],
  nextGuides: ['bubble-tea', 'food-delivery', 'food-safety']
};