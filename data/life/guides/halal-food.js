// Guide: 清真饮食指南
export default {
  id: 'halal-food',
  category: 'food',
  icon: '🕌',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["halal", "dietary", "food"],
  title: { zh: '清真饮食指南', en: 'Halal Food Guide', ru: 'Халяльное питание' },
  summary: { zh: '在中国寻找清真餐厅的方法：标识识别、分布区域、推荐菜系', en: 'Finding halal restaurants: identification, distribution areas, recommended cuisines', ru: 'Поиск халяль-ресторанов:标识, районы, кухни' },
  intro: { zh: '中国有大量穆斯林人口，清真餐厅遍布各大城市。识别清真餐厅非常简单。', en: 'China has a large Muslim population. Halal restaurants are found in all major cities. Easy to identify.', ru: 'В Китае много мусульман. Халяль-рестораны есть во всех крупных городах.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '寻找清真餐厅', en: 'Find halal restaurants', ru: 'Поиск халяльных ресторанов' },
      desc: {
        zh: '中国的清真餐厅标志通常是绿色的，招牌上写有"清真"（Qingzhen）字样，有时还标注阿拉伯文。大学附近通常有清真食堂或清真餐厅（照顾穆斯林留学生和少数民族学生）。可以在高德/百度地图搜索"清真"找到附近的清真餐厅。',
        en: 'Halal restaurants in China typically have green signage with "清真" (Qingzhen) and sometimes Arabic text. Universities usually have halal canteens or restaurants (for Muslim international and minority students). Search "清真" on Amap/Baidu Maps to find nearby halal restaurants.',
        ru: 'Халяльные рестораны обычно с зелёными вывесками и надписью "清真" (Цинчжэнь), иногда с арабским текстом. В вузах обычно есть халяльные столовые. Ищите "清真" на Amap/Baidu Maps для поиска ближайших.'
      }
    },
    {
      title: { zh: '认识中国清真菜', en: 'Know Chinese halal food', ru: 'Халяльная кухня Китая' },
      desc: {
        zh: '中国的清真菜以西北风味为主（兰州拉面、新疆大盘鸡、烤羊肉串等），口味偏重（辣、咸）。常见菜品：①兰州牛肉面（手拉面+牛肉汤，约10-15元）；②大盘鸡（鸡肉+土豆+宽面，约40-60元/份）；③烤馕（新疆烤饼，约3-5元/个）。这些在全国各地都能找到。',
        en: 'Chinese halal food is mainly northwest-style (Lanzhou noodles, Xinjiang big plate chicken, lamb skewers) with bold flavors (spicy, salty). Common dishes: ① Lanzhou beef noodles (hand-pulled + beef broth, ~¥10-15); ② Big plate chicken (chicken + potato + wide noodles, ~¥40-60); ③ Naan bread (Xinjiang flatbread, ~¥3-5/piece). Available nationwide.',
        ru: 'Халяльная кухня Китая в основном северо-западного стиля (лапша Ланьчжоу, курица Синьцзяна, шашлык) с яркими вкусами. Блюда: ① Ланьчжоуская говядина-лапша (~¥10-15); ② Курица на большой тарелке (~¥40-60); ③ Наан (~¥3-5/шт). Доступны по всей стране.'
      }
,      tip: {
        zh: '清真餐厅绝对不提供猪肉和酒。但请注意：非清真餐厅即使有"素菜"选项，烹饪过程中可能使用了猪油或非清真食材。',
        en: 'Halal restaurants never serve pork or alcohol. Note: at non-halal restaurants, even "vegetarian" options may use lard or non-halal ingredients in cooking.',
        ru: 'Халяльные рестораны никогда не подают свинину и алкоголь. Примечание: в нехаляльных ресторанах даже "овощные" блюда могут готовиться на свином жире.'
      }
    },
    {
      title: { zh: '清真认证和注意事项', en: 'Halal certification and notes', ru: 'Халяльная сертификация' },
      desc: {
        zh: '中国有官方的清真认证体系，由各地伊斯兰教协会颁发。认准餐厅挂有的"清真食品准营证"或"清真标志"。如果是留学生，很多大学的清真食堂会标明由穆斯林员工管理。遇到不确定的情况，可以直接询问餐厅是否有"清真证"。',
        en: 'China has an official halal certification system issued by local Islamic Associations. Look for "清真食品准营证" or "清真标志" displayed in restaurants. For international students, many university halal canteens are managed by Muslim staff. When unsure, ask directly if they have a "清真证".',
        ru: 'В Китае действует официальная система халяльной сертификации от местных Исламских ассоциаций. Ищите "清真食品准营证" или "清真标志" в ресторанах. В вузах халяльные столовые управляются мусульманскими сотрудниками. При сомнениях спросите о наличии "清真证".'
      }
,      tip: {
        zh: '注意：中国的"清真"概念与中东/东南亚的Halal认证体系不完全相同。如果要求严格，建议选择有明确伊斯兰协会认证的餐厅，或自己做。',
        en: 'Note: China\'s "halal" concept differs from Middle Eastern/Southeast Asian Halal certification. If requirements are strict, choose restaurants with clear Islamic Association certification, or cook yourself.',
        ru: 'Примечание: китайское понятие "халяль" отличается от ближневосточной/юго-восточной сертификации Halal. При строгих требованиях выбирайте рестораны с сертификацией Исламской ассоциации или готовьте сами.'
      }
    }
  ],
  faq: [
    { q: { zh: '清真餐厅含酒精吗？', en: 'Do halal restaurants serve alcohol?', ru: 'Подают ли алкоголь в халяль?' }, a: { zh: '正宗清真餐厅不提供含酒精饮品。部分非严格的可能有啤酒，但你可以明确要求不含酒精的饮品。', en: 'Authentic halal restaurants don\'t serve alcohol. Some relaxed ones may have beer, but you can request non-alcoholic drinks.', ru: 'Настоящие халяль-рестораны не подают алкоголь.' } },
  ],
  nextGuides: ['vegetarian-guide', 'russian-food', 'food-delivery']
};