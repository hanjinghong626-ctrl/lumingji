// Guide: 特殊饮食需求沟通
export default {
  id: 'dietary-restrictions',
  category: 'food',
  icon: '📋',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["dietary", "allergies", "communication"],
  title: { zh: '特殊饮食需求沟通', en: 'Dietary Restrictions Communication', ru: 'Коммуникация особых диет' },
  summary: { zh: '如何用中文表达饮食限制：过敏、宗教、健康等', en: 'How to express dietary restrictions in Chinese: allergies, religious, health', ru: 'Как выразить диетические ограничения на китайском' },
  intro: { zh: '有特殊饮食需求的留学生需要学会用中文表达自己的要求。本指南提供实用的沟通模板。', en: 'Students with special dietary needs should learn to express requirements in Chinese. This guide provides practical templates.', ru: 'Студентам с особыми потребностями нужно уметь выразить их на китайском.' },
  preparation: { zh: ['将以下句子保存在手机中'], en: ['Save these phrases on your phone'], ru: ['Сохраните эти фразы в телефоне'] },
  steps: [
    {
      title: { zh: '了解中国的饮食标签', en: 'Understand food labeling in China', ru: 'Маркировка продуктов в Китае' },
      desc: {
        zh: '中国的食品包装上必须标注过敏原信息（根据GB 7718标准），包括：含麸质的谷物、甲壳类、鸡蛋、鱼类、花生、大豆、乳制品、坚果等8大类。但注意：中国目前没有强制标注"可能含有"的交叉污染警告，严重过敏者需要格外小心。',
        en: 'Chinese food packaging must list allergens (per GB 7718 standard): gluten cereals, crustaceans, eggs, fish, peanuts, soybeans, dairy, nuts — 8 major categories. Note: China does not currently mandate "may contain" cross-contamination warnings. Those with severe allergies should be extra cautious.',
        ru: 'На упаковке продуктов в Китае обязательно указываются аллергены (по стандарту GB 7718): злаки с глютеном, ракообразные, яйца, рыба, арахис, соя, молочные продукты, орехи — 8 основных категорий. Примечание: предупреждения о перекрёстом загрязнении не обязательны. При тяжёлой аллергии будьте осторожны.'
      }
    },
    {
      title: { zh: '在餐厅沟通饮食限制', en: 'Communicate dietary restrictions at restaurants', ru: 'Сообщение о пищевых ограничениях' },
      desc: {
        zh: '在中国餐厅用餐时，可以用手机翻译App展示以下关键句子：\n• "我对花生过敏，请不要放花生" — I\'m allergic to peanuts, please don\'t add peanuts\n• "我不吃猪肉" — I don\'t eat pork\n• "我吃素，请不要放肉和动物油" — I\'m vegetarian, no meat or animal oil\n• "请不要放辣" — Please don\'t make it spicy\n大部分服务员会理解并配合，但建议点菜时再次确认。',
        en: 'When dining in China, show these key phrases via translation app:\n• "我对花生过敏，请不要放花生" — I\'m allergic to peanuts\n• "我不吃猪肉" — I don\'t eat pork\n• "我吃素，请不要放肉和动物油" — I\'m vegetarian, no meat/animal oil\n• "请不要放辣" — Please don\'t make it spicy\nMost servers will understand, but always double-check when ordering.',
        ru: 'Показывайте эти фразы через переводчик:\n• "我对花生过敏" — аллергия на арахис\n• "我不吃猪肉" — не ем свинину\n• "我吃素" — вегетарианец\n• "请不要放辣" — не делайте остро\nБольшинство серверов поймут, но всегда уточняйте при заказе.'
      }
,      tip: {
        zh: '中国菜中隐藏的过敏原很多：酱油含小麦、很多菜用花生油烹饪、火锅底料可能含虾皮/贝类。点菜时务必反复强调。',
        en: 'Hidden allergens in Chinese food: soy sauce contains wheat, many dishes use peanut oil, hotpot bases may contain shrimp/shellfish. Always emphasize your restrictions when ordering.',
        ru: 'Скрытые аллергены: соевый соус содержит пшеницу, многие блюда на арахисовом масле, основу хогоута может содержать креветки. Всегда подчёркивайте ограничения.'
      }
    },
    {
      title: { zh: '购买安全食品', en: 'Buy safe food', ru: 'Покупка безопасных продуктов' },
      desc: {
        zh: '推荐购买有明确成分表的包装食品：在大型超市（沃尔玛、家乐福、盒马鲜生）购买进口食品区的产品。注意看配料表（"配料"或"成分"字样后列出）。对严重过敏者，建议随身携带过敏急救药物（如肾上腺素笔），并教会周围朋友使用方法。',
        en: 'Buy packaged foods with clear ingredient lists at major supermarkets (Walmart, Carrefour, Hema Fresh). Look for the ingredients list after "配料" or "成分". For severe allergies, carry emergency medication (e.g., epinephrine auto-injector) and teach friends how to use it.',
        ru: 'Покупайте продукты с чётким составом в крупных супермаркетах (Walmart, Carrefour, Hema). Ищите список ингредиентов после "配料" или "成分". При тяжёлой аллергии носите экстренные препараты (адреналин) и научите друзей пользоваться.'
      }
,      tip: {
        zh: '如果饮食限制非常严格（如乳糜泻），建议尽量自己做饭，使用专门的厨房工具，避免交叉污染。',
        en: 'If restrictions are very strict (e.g., celiac disease), cook for yourself with dedicated kitchen tools to avoid cross-contamination.',
        ru: 'При строгих ограничениях (например, целиакия) готовьте сами, используя отдельные инструменты, чтобы избежать перекрёстного загрязнения.'
      }
    }
  ],
  faq: [
    { q: { zh: '怎么在餐厅说明过敏？', en: 'How to explain allergies at restaurants?', ru: 'Как объяснить аллергию в ресторане?' }, a: { zh: '直接出示手机上的中文句子给服务员看。也可以在手机备忘录中写好过敏信息，包括严重程度和应对方法。', en: 'Show the Chinese text on your phone directly. You can also keep allergy details (severity, response plan) in your phone notes.', ru: 'Покажите китайский текст на телефоне. Храните детали аллергии в заметках.' } },
  ],
  nextGuides: ['halal-food', 'vegetarian-guide', 'food-safety']
};