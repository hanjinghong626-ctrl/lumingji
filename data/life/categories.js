// 鹿鸣集 · 来华留学生活导引系统 - 15大分类

const categories = [
  {
    id: 'first-landing',
    iconId: 'crane',
    icon: '🛬',
    color: 'rose',
    name: { zh: '新手着陆', en: 'First Landing', ru: 'Первые дни' },
    desc: {
      zh: '刚踏上中国土地？这些是你头三天必须搞定的事',
      en: 'Just landed in China? Here are the must-dos in your first 72 hours',
      ru: 'Только приехали в Китай? Вот что нужно сделать в первые 3 дня'
    },
    guides: [
      'airport-to-city',
      'buy-sim-card',
      'setup-alipay',
      'setup-wechat',
      'open-bank-account',
      'register-dormitory',
      'first-week-checklist'
    ]
  },
  {
    id: 'payment',
    iconId: 'wallet',
    icon: '💳',
    color: 'amber',
    name: { zh: '支付与金融', en: 'Payment & Finance', ru: 'Оплата и финансы' },
    desc: {
      zh: '在中国，现金几乎消失了——学会移动支付，才能畅通无阻',
      en: 'Cash is almost extinct in China — mobile payment is the key to everything',
      ru: 'В Китае наличные почти исчезли — мобильные платежи решают всё'
    },
    guides: [
      'alipay-full-guide',
      'wechat-pay-guide',
      'bind-foreign-card',
      'campus-card',
      'currency-exchange',
      'bank-transfer',
      'utility-bills',
      'deposit-refund',
      'scholarship-payment',
      'part-time-payment',
      'digital-yuan',
      'tax-refund'
    ]
  },
  {
    id: 'communication',
    iconId: 'phone',
    icon: '📱',
    color: 'emerald',
    name: { zh: '通讯与社交', en: 'Communication & Social', ru: 'Связь и общение' },
    desc: {
      zh: '中国的社交生态和海外完全不同，微信就是一切',
      en: "China's social ecosystem is unique — WeChat is everything",
      ru: 'Социальная экосистема Китая уникальна — WeChat это всё'
    },
    guides: [
      'wechat-full-guide',
      'choose-phone-plan',
      'recharge-phone',
      'use-qq',
      'use-xiaohongshu',
      'use-douyin',
      'use-weibo',
      'use-email-china',
      'vpn-legal-notice'
    ]
  },
  {
    id: 'transport',
    icon: '🚄',
    color: 'sky',
    name: { zh: '交通与出行', en: 'Transport & Travel', ru: 'Транспорт' },
    desc: {
      zh: '地铁、公交、高铁、打车、骑车——在中国，出行极其方便',
      en: 'Metro, bus, high-speed rail, ride-hailing, biking — getting around is super easy',
      ru: 'Метро, автобус, скоростной поезд, такси, велосипед — передвигаться очень легко'
    },
    guides: [
      'metro-guide',
      'bus-guide',
      'train-ticket',
      'ride-hailing',
      'bike-sharing',
      'drive-in-china',
      'flight-booking',
      'navigation-apps',
      'transport-card',
      'traffic-rules',
      'parking-guide',
      'ev-charging',
      'intercity-travel'
    ]
  },
  {
    id: 'food',
    iconId: 'bamboo',
    icon: '🍜',
    color: 'orange',
    name: { zh: '饮食攻略', en: 'Food & Dining', ru: 'Еда и питание' },
    desc: {
      zh: '从食堂到外卖，从清真到素食——在中国，吃货的天堂',
      en: 'From cafeteria to delivery, halal to vegan — a foodie paradise',
      ru: 'От столовой до доставки, халяль до веган — рай для гурманов'
    },
    guides: [
      'food-delivery',
      'canteen-guide',
      'restaurant-ordering',
      'halal-food',
      'vegetarian-guide',
      'russian-food',
      'bubble-tea',
      'night-market',
      'food-safety',
      'dietary-restrictions'
    ]
  },
  {
    id: 'housing',
    iconId: 'moongate',
    icon: '🏠',
    color: 'violet',
    name: { zh: '住房与安居', en: 'Housing & Living', ru: 'Жильё' },
    desc: {
      zh: '宿舍、租房、水电网——安顿下来，才算真正开始',
      en: 'Dorm, renting, utilities — settling in means real life begins',
      ru: 'Общежитие, аренда, коммуналка — настоящая жизнь начинается'
    },
    guides: [
      'dormitory-guide',
      'rent-apartment',
      'rent-contract',
      'utility-setup',
      'internet-setup',
      'home-appliances',
      'furniture-shopping',
      'moving-guide',
      'neighbor-etiquette',
      'maintenance-repair'
    ]
  },
  {
    id: 'visa-legal',
    icon: '📋',
    color: 'red',
    name: { zh: '签证与法律', en: 'Visa & Legal', ru: 'Виза и законы' },
    desc: {
      zh: '签证、居留许可、法律常识——合法合规，安心生活',
      en: 'Visa, residence permit, legal basics — stay legal, stay safe',
      ru: 'Виза, ВНЖ, правовые основы — живите легально и спокойно'
    },
    guides: [
      'visa-types',
      'residence-permit',
      'visa-extension',
      'visa-renewal',
      'police-registration',
      'work-permit',
      'internship-rules',
      'legal-rights',
      'emergency-contacts'
    ]
  },
  {
    id: 'medical',
    icon: '🏥',
    color: 'rose',
    name: { zh: '医疗健康', en: 'Medical & Health', ru: 'Медицина' },
    desc: {
      zh: '挂号、看病、买药、保险——身体不适时，要知道怎么办',
      en: 'Registration, doctor visit, pharmacy, insurance — know what to do when sick',
      ru: 'Запись, врач, аптека, страховка — знайте, что делать при болезни'
    },
    guides: [
      'hospital-guide',
      'register-appointment',
      'buy-medicine',
      'health-insurance',
      'mental-health',
      'dental-care',
      'emergency-room',
      'pharmacy-guide'
    ]
  },
  {
    id: 'academic',
    icon: '📚',
    color: 'indigo',
    name: { zh: '学术与学习', en: 'Academic & Study', ru: 'Учёба и наука' },
    desc: {
      zh: '选课、图书馆、论文、学术规范——在中国做学术的全套指南',
      en: 'Courses, library, thesis, academic integrity — your complete academic guide',
      ru: 'Курсы, библиотека, диплом, академическая этика — полный гид по учёбе'
    },
    guides: [
      'course-registration',
      'library-guide',
      'academic-writing',
      'thesis-defense',
      'cnki-guide',
      'research-tools',
      'academic-conferences',
      'lab-safety',
      'study-tips',
      'professor-etiquette'
    ]
  },
  {
    id: 'language',
    icon: '🈶',
    color: 'teal',
    name: { zh: '语言与文化', en: 'Language & Culture', ru: 'Язык и культура' },
    desc: {
      zh: '学中文、理解中国文化、跨越语言障碍',
      en: 'Learn Chinese, understand culture, break language barriers',
      ru: 'Изучайте китайский, понимайте культуру, ломайте языковые барьеры'
    },
    guides: [
      'chinese-basics',
      'tones-pronunciation',
      'useful-phrases',
      'character-writing',
      'language-exchange',
      'hsk-guide',
      'cultural-tips'
    ]
  },
  {
    id: 'social',
    iconId: 'chat',
    icon: '🎭',
    color: 'fuchsia',
    name: { zh: '社交与融入', en: 'Social & Integration', ru: 'Общение и интеграция' },
    desc: {
      zh: '交朋友、参加活动、理解中国社交潜规则',
      en: 'Make friends, join activities, understand Chinese social rules',
      ru: 'Заводите друзей, участвуйте, понимайте негласные правила общения'
    },
    guides: [
      'making-friends',
      'campus-clubs',
      'chinese-festivals',
      'gift-giving',
      'table-manners',
      'dating-culture',
      'social-taboos'
    ]
  },
  {
    id: 'shopping',
    iconId: 'basket',
    icon: '🛒',
    color: 'pink',
    name: { zh: '购物与快递', en: 'Shopping & Delivery', ru: 'Покупки и доставка' },
    desc: {
      zh: '网购、快递、二手市场——中国人的购物方式',
      en: 'Online shopping, delivery, second-hand — how Chinese shop',
      ru: 'Онлайн-покупки, доставка, секонд-хенд — как покупают в Китае'
    },
    guides: [
      'taobao-guide',
      'jd-guide',
      'pinduoduo-guide',
      'express-delivery',
      'return-refund',
      'second-hand',
      'supermarket-guide',
      'shopping-festivals',
      'customs-import'
    ]
  },
  {
    id: 'entertainment',
    iconId: 'fan',
    icon: '🎬',
    color: 'purple',
    name: { zh: '文化与娱乐', en: 'Culture & Entertainment', ru: 'Культура и досуг' },
    desc: {
      zh: '电影、KTV、健身、展览——课余生活不无聊',
      en: 'Movies, KTV, fitness, exhibitions — life beyond study',
      ru: 'Кино, KTV, фитнес, выставки — жизнь за пределами учёбы'
    },
    guides: [
      'movie-theater',
      'ktv-guide',
      'fitness-gym',
      'museum-exhibition',
      'music-scene',
      'nightlife',
      'sports-facilities',
      'streaming-platforms'
    ]
  },
  {
    id: 'travel',
    iconId: 'mountain',
    icon: '✈️',
    color: 'cyan',
    name: { zh: '旅行与探索', en: 'Travel & Explore', ru: 'Путешествия' },
    desc: {
      zh: '携程、12306、景点门票——探索中国的每一个角落',
      en: 'Ctrip, 12306, tickets — explore every corner of China',
      ru: 'Ctrip, 12306, билеты — исследуйте каждый уголок Китая'
    },
    guides: [
      'ctrip-guide',
      'train-booking',
      'hotel-booking',
      'scenic-spots',
      'travel-planning',
      'travel-safety',
      'photo-spots',
      'weekend-trips'
    ]
  },
  {
    id: 'career',
    icon: '💼',
    color: 'slate',
    name: { zh: '职业与发展', en: 'Career & Development', ru: 'Карьера' },
    desc: {
      zh: '实习、求职、创业——在中国的职场生存法则',
      en: 'Internship, job hunting, entrepreneurship — career survival in China',
      ru: 'Стажировка, поиск работы, бизнес — карьера в Китае'
    },
    guides: [
      'internship-guide',
      'job-search',
      'resume-china',
      'interview-tips',
      'work-culture',
      'business-registration',
      'professional-network',
      'post-graduation'
    ]
  }
];

export default categories;
