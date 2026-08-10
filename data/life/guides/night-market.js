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
      title: { zh: '夜市攻略', en: 'Night Market Tips', ru: 'Советы ночного рынка' },
      desc: { zh: '🏮 必吃小吃：\n• 烤串（羊肉串、牛肉串）\n• 臭豆腐\n• 煎饼果子\n• 炸鸡排\n• 糖葫芦\n• 烧烤海鲜\n\n💡 逛夜市技巧：\n• 先逛一圈再决定吃什么\n• 少量多样，每样尝一点\n• 选人多的摊位（更新鲜）\n• 注意卫生：选择现做现卖的\n• 夜市一般18:00-23:00\n\n📍 如何找到夜市：\n• 大众点评搜索「夜市」\n• 高德地图搜索\n• 问同学推荐', en: '🏮 Must-try: kebabs, stinky tofu, jianbing, fried chicken cutlet, candied hawthorn, grilled seafood\n\n💡 Tips: walk around first, sample small portions, choose busy stalls (fresher), watch hygiene (freshly cooked), hours 18:00-23:00\n\n📍 Find: search "夜市" on Dianping or Amap, ask classmates', ru: '🏮 Попробуйте: шашлыки, тофу с запахом, цзяньбин, жареная курица, засахаренный боярышник\n💡 Сначала обойдите, берите понемногу, выбирайте популярные лавки\n📍 Поиск: "夜市" на Dianping/Amap' },
    },
  ],
  faq: [
    { q: { zh: '夜市食物安全吗？', en: 'Is night market food safe?', ru: 'Безопасна ли еда на рынке?' }, a: { zh: '大部分正规夜市有卫生管理。建议选择人多、现做现卖的摊位。肠胃敏感的同学可以适量尝试，不要一次吃太多品种。', en: 'Most regulated night markets have hygiene management. Choose busy, freshly-cooked stalls. If you have a sensitive stomach, try moderate amounts.', ru: 'Большинство рынков регулируются. Выбирайте популярные лавки со свежей едой.' } },
  ],
  nextGuides: ['bubble-tea', 'food-delivery', 'food-safety']
};