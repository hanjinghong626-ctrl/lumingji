// Guide: 交通规则与安全
export default {
  id: 'traffic-rules',
  category: 'transport',
  icon: '🚦',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["traffic", "safety", "rules"],
  title: { zh: '交通规则与安全', en: 'Traffic Rules & Safety', ru: 'Правила дорожного движения' },
  summary: { zh: '在中国出行必须了解的交通规则和安全常识', en: 'Essential traffic rules and safety tips for getting around in China', ru: 'Основные ПДД и безопасность в Китае' },
  intro: { zh: '中国的交通规则有自己的特点，了解这些规则对日常出行安全非常重要。', en: 'China\'s traffic rules have unique features. Understanding them is essential for daily safety.', ru: 'Правила движения в Китае имеют свои особенности. Важно для безопасности.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '基本交通规则', en: 'Basic traffic rules', ru: 'Основные правила дорожного движения' },
      desc: {
        zh: '中国靠右行驶。关键规则：①红灯停、绿灯行、黄灯减速；②行人走斑马线，闯红灯罚款5-50元；③非机动车（自行车/电动车）走非机动车道；④机动车礼让行人（违者罚款扣分）。城市道路限速一般40-60km/h，高速公路80-120km/h。',
        en: 'China drives on the right. Key rules: ① Red stop, green go, yellow slow down; ② Pedestrians use crosswalks — jaywalking fined 5-50 yuan; ③ Non-motorized vehicles (bikes/e-bikes) use bike lanes; ④ Motor vehicles must yield to pedestrians (violators fined and penalized). City road speed limits are usually 40-60km/h, highways 80-120km/h.',
        ru: 'В Китае правостороннее движение. Ключевые правила: ① Красный стой, зелёный иди, жёлтый замедляйся; ② Пешеходы используют переходы — нарушение штрафа 5-50 юаней; ③ Немоторизованные транспортные средства (велосипеды/электровелосипеды) используют велодорожки; ④ Моторизованные транспортные средства должны уступать пешеходам (нарушители штрафуются). Ограничения скорости в городе обычно 40-60км/ч, на автомагистралях 80-120км/ч.'
      }
    },
    {
      title: { zh: '行人和非机动车注意事项', en: 'Tips for pedestrians and cyclists', ru: 'Советы пешеходам и велосипедистам' },
      desc: {
        zh: '走路时：走人行道、看红绿灯、过马路走斑马线或地下通道。骑共享单车时：不走机动车道、不逆行、不闯红灯（违者罚款20-50元）。电动自行车需上牌并佩戴头盔，限速25km/h。',
        en: 'Walking: use sidewalks, obey traffic lights, cross at crosswalks or underpasses. Riding shared bikes: do not use vehicle lanes, do not go against traffic, do not run red lights (fined 20-50 yuan). E-bikes need license plates and helmets, speed limit 25km/h.',
        ru: 'Ходьба: используйте тротуары, соблюдайте светофоры, переходите на переходах или подземных переходах. Езда на велосипедах: не используйте полосы для транспорта, не двигайтесь против движения, не проезжайте на красный (штраф 20-50 юаней). Электровелосипеды требуют номеров и шлемов, ограничение скорости 25км/ч.'
      }
,      tip: {
        zh: '即使绿灯，过马路前也先左右看一眼，确认安全再通过。',
        en: 'Even with a green light, glance left and right before crossing to make sure it is safe.',
        ru: 'Даже при зелёном свете посмотрите налево и направо перед переходом, чтобы убедиться в безопасности.'
      }
    },
    {
      title: { zh: '常见违章与处罚', en: 'Common violations and penalties', ru: 'Распространённые нарушения и наказания' },
      desc: {
        zh: '行人闯红灯：罚款5-50元。酒后驾驶：血液酒精含量20-80mg/100ml为酒驾（扣证+罚款+拘留）；超过80mg为醉驾（追究刑事责任，吊销驾照）。无证驾驶：罚款200-2000元，可拘留15天。超速：罚款100-2000元，扣分。',
        en: 'Pedestrian running red light: 5-50 yuan fine. Drunk driving: BAC 20-80mg/100ml is DUI (license suspension + fine + detention); over 80mg is criminal offense (license revoked, criminal charges). Driving without permit: 200-2000 yuan fine, possible 15-day detention. Speeding: 100-2000 yuan fine, demerit points.',
        ru: 'Пешеход на красный: штраф 5-50 юаней. Пьяное вождение: BAC 20-80мг/100мл — DUI (лишение прав + штраф + задержание); свыше 80мг — уголовное преступление (лишение прав, уголовное преследование). Вождение без прав: штраф 200-2000 юаней, возможно 15 дней задержания. Превышение скорости: штраф 100-2000 юаней, штрафные баллы.'
      }
,      tip: {
        zh: '中国对酒驾处罚非常严格，切勿酒后驾车，即使少量饮酒也不行。',
        en: 'China has extremely strict penalties for drunk driving — never drive after drinking, even a small amount.',
        ru: 'В Китае крайне строгие наказания за пьяное вождение — никогда не садитесь за руль после употребления алкоголя, даже в небольшом количестве.'
      }
    }
  ],
  faq: [
    { q: { zh: '电动车需要驾照吗？', en: 'Do e-bikes need a license?', ru: 'Нужны ли права на электровелосипед?' }, a: { zh: '符合国标（速度≤25km/h）的电动自行车不需要驾照和上牌。但超过标准的电动摩托车需要驾照和牌照。', en: 'Standard e-bikes (≤25km/h) don\'t need license or registration. E-motorcycles above standard require license and plates.', ru: 'Стандартные (≤25 км/ч) — не нужны. Превышающие стандарт — нужны права и номера.' } },
  ],
  nextGuides: ['drive-in-china', 'parking-guide', 'metro-guide']
};