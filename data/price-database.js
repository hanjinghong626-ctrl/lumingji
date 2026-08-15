/**
 * 鹿鸣集 · 物价数据库
 * 数据来源：135篇生活指南中提取的真实价格
 * 单位：人民币（元）
 * 
 * 用途：AI Agent 工具调用层，直接返回真实价格数据
 */

const priceDatabase = {
  meta: {
    version: '1.0',
    lastUpdated: '2026-08-15',
    dataSource: '135篇来华留学生生活指南',
    currency: 'CNY (人民币)'
  },

  // ===== 交通出行 =====
  transportation: {
    label: { zh: '交通出行', en: 'Transportation', ru: 'Транспорт' },
    items: [
      {
        id: 'metro',
        name: { zh: '地铁', en: 'Metro', ru: 'Метро' },
        price: '2-8元/次',
        priceRange: [2, 8],
        unit: '次',
        note: '按里程计价，大多数城市起步价2-3元'
      },
      {
        id: 'bus',
        name: { zh: '公交车', en: 'Bus', ru: 'Автобус' },
        price: '1-2元/次',
        priceRange: [1, 2],
        unit: '次',
        note: '大多数线路1-2元，部分长线路分段计价'
      },
      {
        id: 'bike-sharing',
        name: { zh: '共享单车', en: 'Bike Sharing', ru: 'Велосипед' },
        price: '1-1.5元/15分钟',
        priceRange: [1, 1.5],
        unit: '15分钟',
        note: '美团/哈啰/青桔，超时另计；调度费5-20元'
      },
      {
        id: 'taxi-start',
        name: { zh: '出租车起步价', en: 'Taxi Starting Fare', ru: 'Такси (начальная цена)' },
        price: '10-15元',
        priceRange: [10, 15],
        unit: '起步',
        note: '一线城市稍贵，二三线便宜'
      },
      {
        id: 'taxi-per-km',
        name: { zh: '出租车每公里', en: 'Taxi Per KM', ru: 'Такси за км' },
        price: '2-3.5元/公里',
        priceRange: [2, 3.5],
        unit: '公里',
        note: '因城市而异'
      },
      {
        id: 'didi-cheap',
        name: { zh: '滴滴快车(短途)', en: 'Didi (short trip)', ru: 'Didi (короткая)' },
        price: '10-25元',
        priceRange: [10, 25],
        unit: '次',
        note: '5公里内短途'
      },
      {
        id: 'didi-medium',
        name: { zh: '滴滴快车(中途)', en: 'Didi (medium trip)', ru: 'Didi (средняя)' },
        price: '25-60元',
        priceRange: [25, 60],
        unit: '次',
        note: '10-20公里'
      },
      {
        id: 'airport-metro',
        name: { zh: '机场地铁', en: 'Airport Metro', ru: 'Метро из аэропорта' },
        price: '5-35元',
        priceRange: [5, 35],
        unit: '次',
        note: '40-90分钟，因距离而异'
      },
      {
        id: 'airport-bus',
        name: { zh: '机场大巴', en: 'Airport Bus', ru: 'Автобус из аэропорта' },
        price: '15-30元',
        priceRange: [15, 30],
        unit: '次',
        note: '覆盖地铁不到的区域'
      },
      {
        id: 'airport-taxi',
        name: { zh: '机场打车', en: 'Airport Taxi', ru: 'Такси из аэропорта' },
        price: '50-200元',
        priceRange: [50, 200],
        unit: '次',
        note: '因距离和城市差异大'
      },
      {
        id: 'parking',
        name: { zh: '停车费', en: 'Parking', ru: 'Парковка' },
        price: '5-20元/小时',
        priceRange: [5, 20],
        unit: '小时',
        note: '一线城市10-20元，二三线5-10元；前15分钟常免费'
      },
      {
        id: 'ev-charging',
        name: { zh: '电动车充电', en: 'EV Charging', ru: 'Зарядка электроавто' },
        price: '1-2元/度',
        priceRange: [1, 2],
        unit: '度电',
        note: '含服务费，部分商场免费'
      },
      {
        id: 'transport-card',
        name: { zh: '交通卡工本费', en: 'Transport Card Fee', ru: 'Транспортная карта' },
        price: '20元',
        priceRange: [20, 20],
        unit: '张',
        note: '押金制，退卡可退'
      }
    ]
  },

  // ===== 餐饮饮食 =====
  food: {
    label: { zh: '餐饮饮食', en: 'Food & Dining', ru: 'Еда и питание' },
    items: [
      {
        id: 'canteen-breakfast',
        name: { zh: '食堂早餐', en: 'Canteen Breakfast', ru: 'Завтрак в столовой' },
        price: '3-8元',
        priceRange: [3, 8],
        unit: '餐',
        note: '大学食堂'
      },
      {
        id: 'canteen-lunch',
        name: { zh: '食堂正餐', en: 'Canteen Meal', ru: 'Обед в столовой' },
        price: '8-15元',
        priceRange: [8, 15],
        unit: '餐',
        note: '大学食堂，一荤两素到两荤一素'
      },
      {
        id: 'restaurant-budget',
        name: { zh: '小餐馆人均', en: 'Budget Restaurant', ru: 'Бюджетный ресторан' },
        price: '15-40元',
        priceRange: [15, 40],
        unit: '人',
        note: '快餐、面馆、盖饭类'
      },
      {
        id: 'restaurant-mid',
        name: { zh: '中档餐厅人均', en: 'Mid-range Restaurant', ru: 'Средний ресторан' },
        price: '30-80元',
        priceRange: [30, 80],
        unit: '人',
        note: '品质不错的餐厅'
      },
      {
        id: 'restaurant-high',
        name: { zh: '高档餐厅人均', en: 'Upscale Restaurant', ru: 'Ресторан премиум' },
        price: '100-300元',
        priceRange: [100, 300],
        unit: '人',
        note: '西餐、日料等高端餐厅'
      },
      {
        id: 'bubble-tea-cheap',
        name: { zh: '平价奶茶(蜜雪冰城等)', en: 'Budget Bubble Tea', ru: 'Доступный чай с молоком' },
        price: '4-8元',
        priceRange: [4, 8],
        unit: '杯',
        note: '蜜雪冰城柠檬水4元'
      },
      {
        id: 'bubble-tea-premium',
        name: { zh: '品牌奶茶(喜茶等)', en: 'Premium Bubble Tea', ru: 'Премиум чай с молоком' },
        price: '15-30元',
        priceRange: [15, 30],
        unit: '杯',
        note: '喜茶、奈雪等高端品牌'
      },
      {
        id: 'halal-meal',
        name: { zh: '清真餐', en: 'Halal Meal', ru: 'Халяль' },
        price: '10-15元',
        priceRange: [10, 15],
        unit: '餐',
        note: '校园周边清真餐厅'
      },
      {
        id: 'night-market-snack',
        name: { zh: '夜市小吃', en: 'Night Market Snack', ru: 'Ночной рынок' },
        price: '10-30元',
        priceRange: [10, 30],
        unit: '份',
        note: '烤串、炒面、煎饼等'
      },
      {
        id: 'bar-beer',
        name: { zh: '酒吧啤酒', en: 'Bar Beer', ru: 'Пиво в баре' },
        price: '30-60元',
        priceRange: [30, 60],
        unit: '杯',
        note: '清吧/Live Bar'
      },
      {
        id: 'club-minimum',
        name: { zh: '夜店最低消费', en: 'Nightclub Minimum', ru: 'Мин. расход в клубе' },
        price: '100-300元',
        priceRange: [100, 300],
        unit: '人',
        note: '因城市和场所差异大'
      }
    ]
  },

  // ===== 通讯话费 =====
  telecom: {
    label: { zh: '通讯话费', en: 'Telecom Plans', ru: 'Мобильная связь' },
    items: [
      {
        id: 'plan-economy',
        name: { zh: '经济型套餐', en: 'Economy Plan', ru: 'Эконом тариф' },
        price: '30-58元/月',
        priceRange: [30, 58],
        unit: '月',
        note: '10-30GB流量 + 100-300分钟通话，适合WiFi环境多的人'
      },
      {
        id: 'plan-student',
        name: { zh: '学生套餐', en: 'Student Plan', ru: 'Студенческий тариф' },
        price: '39-79元/月',
        priceRange: [39, 79],
        unit: '月',
        note: '30-100GB流量 + 300-500分钟，校园营业厅有专属优惠'
      },
      {
        id: 'plan-heavy',
        name: { zh: '大流量套餐', en: 'Heavy Data Plan', ru: 'Большой тариф' },
        price: '79-129元/月',
        priceRange: [79, 129],
        unit: '月',
        note: '100GB+或不限量，适合重度上网'
      },
      {
        id: 'recharge',
        name: { zh: '话费充值面额', en: 'Recharge Amounts', ru: 'Суммы пополнения' },
        price: '10/30/50/100/200元',
        priceRange: [10, 200],
        unit: '次',
        note: '支付宝/微信/银行App充值，部分有折扣'
      }
    ]
  },

  // ===== 住房 =====
  housing: {
    label: { zh: '住房费用', en: 'Housing', ru: 'Жильё' },
    items: [
      {
        id: 'dorm-single',
        name: { zh: '宿舍单人间', en: 'Dorm Single Room', ru: 'Одноместная комната' },
        price: '800-2000元/月',
        priceRange: [800, 2000],
        unit: '月',
        note: '因城市和档次差异'
      },
      {
        id: 'dorm-double',
        name: { zh: '宿舍双人间', en: 'Dorm Double Room', ru: 'Двухместная комната' },
        price: '400-1000元/月',
        priceRange: [400, 1000],
        unit: '月',
        note: '最常见，性价比好'
      },
      {
        id: 'dorm-quad',
        name: { zh: '宿舍四人间', en: 'Dorm Quad Room', ru: 'Четырёхместная' },
        price: '200-500元/月',
        priceRange: [200, 500],
        unit: '月',
        note: '最便宜'
      },
      {
        id: 'rent-tier1',
        name: { zh: '校外租房(一线城市)', en: 'Rent (Tier 1 City)', ru: 'Аренда (крупный город)' },
        price: '1500-4000元/月',
        priceRange: [1500, 4000],
        unit: '月',
        note: '北京/上海/深圳，合租单间'
      },
      {
        id: 'rent-tier2',
        name: { zh: '校外租房(二三线城市)', en: 'Rent (Tier 2-3 City)', ru: 'Аренда (средний город)' },
        price: '600-1500元/月',
        priceRange: [600, 1500],
        unit: '月',
        note: '青岛/成都/武汉等'
      },
      {
        id: 'rent-deposit',
        name: { zh: '租房押金', en: 'Rent Deposit', ru: 'Залог за аренду' },
        price: '1-3个月租金',
        priceRange: null,
        unit: '月',
        note: '退租时扣除损坏赔偿后退还'
      },
      {
        id: 'rent-agent-fee',
        name: { zh: '中介费', en: 'Agent Fee', ru: 'Комиссия агента' },
        price: '半个月到1个月租金',
        priceRange: null,
        unit: '次',
        note: '通过中介找房需付'
      },
      {
        id: 'dorm-deposit',
        name: { zh: '宿舍押金', en: 'Dorm Deposit', ru: 'Залог за общежитие' },
        price: '200-500元',
        priceRange: [200, 500],
        unit: '次',
        note: '退房时退还'
      }
    ]
  },

  // ===== 日常生活 =====
  daily: {
    label: { zh: '日常生活', en: 'Daily Life', ru: 'Повседневная жизнь' },
    items: [
      {
        id: 'campus-card-reissue',
        name: { zh: '校园卡补办', en: 'Campus Card Reissue', ru: 'Переоформление кампус-карты' },
        price: '10-30元',
        priceRange: [10, 30],
        unit: '次',
        note: '丢失去校园卡中心补办'
      },
      {
        id: 'shower',
        name: { zh: '洗浴费', en: 'Shower Fee', ru: 'Душ' },
        price: '0.1-0.3元/分钟',
        priceRange: [0.1, 0.3],
        unit: '分钟',
        note: '插卡计时，因学校而异'
      },
      {
        id: 'laundry',
        name: { zh: '洗衣费', en: 'Laundry', ru: 'Стирка' },
        price: '2-5元/次',
        priceRange: [2, 5],
        unit: '次',
        note: '宿舍公共洗衣机'
      },
      {
        id: 'library-overdue',
        name: { zh: '图书逾期', en: 'Library Overdue', ru: 'Просрочка книги' },
        price: '0.1元/天/本',
        priceRange: [0.1, 0.1],
        unit: '天/本',
        note: '逾期罚款'
      },
      {
        id: 'express-domestic',
        name: { zh: '国内快递(首重)', en: 'Domestic Express (first weight)', ru: 'Доставка по Китаю' },
        price: '8-15元',
        priceRange: [8, 15],
        unit: '件',
        note: '续重2-5元/kg'
      },
      {
        id: 'utility-water',
        name: { zh: '水费', en: 'Water', ru: 'Вода' },
        price: '3-5元/吨',
        priceRange: [3, 5],
        unit: '吨',
        note: '居民用水'
      },
      {
        id: 'utility-electric',
        name: { zh: '电费', en: 'Electricity', ru: 'Электричество' },
        price: '0.5-0.6元/度',
        priceRange: [0.5, 0.6],
        unit: '度',
        note: '居民用电'
      },
      {
        id: 'utility-gas',
        name: { zh: '燃气费', en: 'Gas', ru: 'Газ' },
        price: '2-3元/立方米',
        priceRange: [2, 3],
        unit: '立方米',
        note: '管道天然气'
      },
      {
        id: 'internet',
        name: { zh: '宽带费', en: 'Internet', ru: 'Интернет' },
        price: '50-200元/月',
        priceRange: [50, 200],
        unit: '月',
        note: '校园网通常50-100元，家庭宽带80-150元'
      },
      {
        id: 'moving-small',
        name: { zh: '搬家(小面包车)', en: 'Moving (small van)', ru: 'Переезд (маленький)' },
        price: '50-100元',
        priceRange: [50, 100],
        unit: '次',
        note: '货拉拉小面包车'
      },
      {
        id: 'moving-medium',
        name: { zh: '搬家(中型货车)', en: 'Moving (medium truck)', ru: 'Переезд (средний)' },
        price: '150-300元',
        priceRange: [150, 300],
        unit: '次',
        note: '货拉拉中型货车'
      },
      {
        id: 'moving-pro',
        name: { zh: '搬家(专业公司)', en: 'Moving (pro company)', ru: 'Переезд (профи)' },
        price: '300-800元',
        priceRange: [300, 800],
        unit: '次',
        note: '含打包+搬运+归位'
      }
    ]
  },

  // ===== 医疗健康 =====
  healthcare: {
    label: { zh: '医疗健康', en: 'Healthcare', ru: 'Здравоохранение' },
    items: [
      {
        id: 'hospital-registration',
        name: { zh: '挂号费', en: 'Hospital Registration', ru: 'Регистрация в больнице' },
        price: '10-50元',
        priceRange: [10, 50],
        unit: '次',
        note: '普通号10-20元，专家号50元+'
      },
      {
        id: 'hospital-visit',
        name: { zh: '门诊费用', en: 'Outpatient Visit', ru: 'Амбулаторный приём' },
        price: '50-300元',
        priceRange: [50, 300],
        unit: '次',
        note: '含检查+药品'
      },
      {
        id: 'ambulance',
        name: { zh: '救护车', en: 'Ambulance', ru: 'Скорая помощь' },
        price: '100-300元',
        priceRange: [100, 300],
        unit: '次',
        note: '120急救车基础费用'
      },
      {
        id: 'dental-cleaning',
        name: { zh: '洗牙', en: 'Dental Cleaning', ru: 'Чистка зубов' },
        price: '100-300元',
        priceRange: [100, 300],
        unit: '次',
        note: '公立医院较低，私立较高'
      },
      {
        id: 'dental-filling',
        name: { zh: '补牙', en: 'Dental Filling', ru: 'Пломбирование' },
        price: '200-800元',
        priceRange: [200, 800],
        unit: '颗',
        note: '因材料和医院差异'
      },
      {
        id: 'dental-extraction',
        name: { zh: '拔牙', en: 'Tooth Extraction', ru: 'Удаление зуба' },
        price: '200-1000元',
        priceRange: [200, 1000],
        unit: '颗',
        note: '智齿更贵'
      },
      {
        id: 'dental-root-canal',
        name: { zh: '根管治疗', en: 'Root Canal', ru: 'Лечение каналов' },
        price: '1000-3000元',
        priceRange: [1000, 3000],
        unit: '次',
        note: '因牙位和复杂度差异'
      },
      {
        id: 'dental-implant',
        name: { zh: '种植牙', en: 'Dental Implant', ru: 'Имплантация' },
        price: '5000-20000元',
        priceRange: [5000, 20000],
        unit: '颗',
        note: '因品牌和医院差异大'
      },
      {
        id: 'mental-health-campus',
        name: { zh: '校内心理咨询', en: 'Campus Counseling', ru: 'Консультация в вузе' },
        price: '免费',
        priceRange: [0, 0],
        unit: '次',
        note: '留学生通常免费，包含在学费/保险费中'
      },
      {
        id: 'mental-health-external',
        name: { zh: '校外心理咨询', en: 'External Counseling', ru: 'Внешняя консультация' },
        price: '300-800元',
        priceRange: [300, 800],
        unit: '次',
        note: '社会心理咨询机构'
      },
      {
        id: 'health-insurance',
        name: { zh: '医疗保险(年费)', en: 'Health Insurance (annual)', ru: 'Медстраховка (год)' },
        price: '400-800元',
        priceRange: [400, 800],
        unit: '年',
        note: '留学生综合医疗保险'
      }
    ]
  },

  // ===== 娱乐 =====
  entertainment: {
    label: { zh: '娱乐休闲', en: 'Entertainment', ru: 'Развлечения' },
    items: [
      {
        id: 'movie',
        name: { zh: '电影票', en: 'Movie Ticket', ru: 'Кино' },
        price: '30-80元',
        priceRange: [30, 80],
        unit: '张',
        note: '猫眼/淘票票可优惠，周末更贵'
      },
      {
        id: 'ktv-weekday',
        name: { zh: 'KTV(工作日)', en: 'KTV (Weekday)', ru: 'KTV (будни)' },
        price: '30-50元/小时',
        priceRange: [30, 50],
        unit: '小时/间',
        note: '量贩式KTV，可自带酒水'
      },
      {
        id: 'ktv-weekend',
        name: { zh: 'KTV(周末)', en: 'KTV (Weekend)', ru: 'KTV (выходные)' },
        price: '50-100元/小时',
        priceRange: [50, 100],
        unit: '小时/间',
        note: '团购更便宜'
      },
      {
        id: 'concert-large',
        name: { zh: '大型演唱会', en: 'Big Concert', ru: 'Большой концерт' },
        price: '200-2000元',
        priceRange: [200, 2000],
        unit: '张',
        note: '体育馆级别'
      },
      {
        id: 'livehouse',
        name: { zh: 'Livehouse', en: 'Livehouse', ru: 'Лайвхаус' },
        price: '80-300元',
        priceRange: [80, 300],
        unit: '张',
        note: '小型现场演出'
      },
      {
        id: 'music-festival',
        name: { zh: '音乐节', en: 'Music Festival', ru: 'Музыкальный фестиваль' },
        price: '200-800元/天',
        priceRange: [200, 800],
        unit: '天',
        note: '户外多天音乐节'
      },
      {
        id: 'classical-concert',
        name: { zh: '古典音乐会', en: 'Classical Concert', ru: 'Классический концерт' },
        price: '50-500元',
        priceRange: [50, 500],
        unit: '张',
        note: '音乐厅，学生票通常半价'
      },
      {
        id: 'opera-ballet',
        name: { zh: '歌剧/芭蕾', en: 'Opera/Ballet', ru: 'Опера/Балет' },
        price: '100-1000元',
        priceRange: [100, 1000],
        unit: '张',
        note: '大剧院'
      },
      {
        id: 'museum',
        name: { zh: '博物馆', en: 'Museum', ru: 'Музей' },
        price: '免费-100元',
        priceRange: [0, 100],
        unit: '次',
        note: '大部分公立博物馆免费，特展30-100元'
      },
      {
        id: 'badminton',
        name: { zh: '羽毛球馆', en: 'Badminton Court', ru: 'Бадминтон' },
        price: '5-30元/小时',
        priceRange: [5, 30],
        unit: '小时',
        note: '校园体育馆'
      },
      {
        id: 'swimming',
        name: { zh: '游泳池', en: 'Swimming Pool', ru: 'Бассейн' },
        price: '5-20元/次',
        priceRange: [5, 20],
        unit: '次',
        note: '校园游泳池'
      },
      {
        id: 'gym-semester',
        name: { zh: '健身房(学期)', en: 'Gym (semester)', ru: 'Тренажёрный зал (семестр)' },
        price: '50-200元',
        priceRange: [50, 200],
        unit: '学期',
        note: '校园健身房'
      },
      {
        id: 'gym-external',
        name: { zh: '健身房(校外)', en: 'Gym (external)', ru: 'Фитнес-клуб' },
        price: '1500-5000元',
        priceRange: [1500, 5000],
        unit: '年',
        note: '商业健身房年卡'
      },
      {
        id: 'gym-day-pass',
        name: { zh: '健身房(次卡)', en: 'Gym (day pass)', ru: 'Разовое посещение' },
        price: '5-30元',
        priceRange: [5, 30],
        unit: '次',
        note: '单次入场'
      },
      {
        id: 'streaming',
        name: { zh: '视频平台会员', en: 'Streaming Membership', ru: 'Стриминг-подписка' },
        price: '25元/月',
        priceRange: [25, 25],
        unit: '月',
        note: 'B站/爱奇艺/腾讯/优酷均为25元/月'
      }
    ]
  },

  // ===== 学习考试 =====
  education: {
    label: { zh: '学习考试', en: 'Education & Exams', ru: 'Обучение и экзамены' },
    items: [
      {
        id: 'hsk-1-2',
        name: { zh: 'HSK 1-2级考试', en: 'HSK 1-2 Exam', ru: 'Экзамен HSK 1-2' },
        price: '150-200元',
        priceRange: [150, 200],
        unit: '次',
        note: 'HSK入门级'
      },
      {
        id: 'hsk-3-6',
        name: { zh: 'HSK 3-6级考试', en: 'HSK 3-6 Exam', ru: 'Экзамен HSK 3-6' },
        price: '300-600元',
        priceRange: [300, 600],
        unit: '次',
        note: '级别越高越贵'
      }
    ]
  },

  // ===== 签证行政 =====
  visa: {
    label: { zh: '签证与行政', en: 'Visa & Admin', ru: 'Виза и документы' },
    items: [
      {
        id: 'residence-permit',
        name: { zh: '居留许可', en: 'Residence Permit', ru: 'Вид на жительство' },
        price: '400-800元/年',
        priceRange: [400, 800],
        unit: '年',
        note: '入境30天内必须办理，逾期罚款500元/天'
      },
      {
        id: 'visa-overstay',
        name: { zh: '签证逾期罚款', en: 'Visa Overstay Fine', ru: 'Штраф за просрочку' },
        price: '500元/天',
        priceRange: [500, 500],
        unit: '天',
        note: '最高10000元'
      },
      {
        id: 'police-registration-fine',
        name: { zh: '未办住宿登记罚款', en: 'No Registration Fine', ru: 'Штраф за незарегистрирован.' },
        price: '200-2000元',
        priceRange: [200, 2000],
        unit: '次',
        note: '入住24小时内必须办理'
      },
      {
        id: 'bank-deposit',
        name: { zh: '银行开户存入', en: 'Bank Account Initial Deposit', ru: 'Первый взнос' },
        price: '50-100元',
        priceRange: [50, 100],
        unit: '次',
        note: '激活账户的最低存入'
      }
    ]
  },

  // ===== 奖学金 =====
  scholarship: {
    label: { zh: '奖学金标准', en: 'Scholarship Rates', ru: 'Стипендии' },
    items: [
      {
        id: 'csc-bachelor',
        name: { zh: 'CSC本科奖学金', en: 'CSC Bachelor', ru: 'CSC бакалавр' },
        price: '2500元/月',
        priceRange: [2500, 2500],
        unit: '月',
        note: '另免学费+住宿+医保'
      },
      {
        id: 'csc-master',
        name: { zh: 'CSC硕士奖学金', en: 'CSC Master', ru: 'CSC магистр' },
        price: '3000元/月',
        priceRange: [3000, 3000],
        unit: '月',
        note: '另免学费+住宿+医保'
      },
      {
        id: 'csc-phd',
        name: { zh: 'CSC博士奖学金', en: 'CSC PhD', ru: 'CSC аспирант' },
        price: '3500元/月',
        priceRange: [3500, 3500],
        unit: '月',
        note: '另免学费+住宿+医保'
      }
    ]
  },

  // ===== 购物参考 =====
  shopping: {
    label: { zh: '购物参考', en: 'Shopping', ru: 'Покупки' },
    items: [
      {
        id: 'textbook-used',
        name: { zh: '二手教材', en: 'Used Textbook', ru: 'Б/у учебник' },
        price: '10元',
        priceRange: [5, 15],
        unit: '本',
        note: '原价约50元，毕业季校园低价处理'
      },
      {
        id: 'hotel-budget',
        name: { zh: '经济酒店', en: 'Budget Hotel', ru: 'Эконом-отель' },
        price: '100-300元/晚',
        priceRange: [100, 300],
        unit: '晚',
        note: '如家、汉庭等连锁'
      },
      {
        id: 'hotel-mid',
        name: { zh: '中档酒店', en: 'Mid-range Hotel', ru: 'Средний отель' },
        price: '300-600元/晚',
        priceRange: [300, 600],
        unit: '晚',
        note: '全季、亚朵等品质连锁'
      },
      {
        id: 'hotel-premium',
        name: { zh: '高档酒店', en: 'Premium Hotel', ru: 'Премиум-отель' },
        price: '600-2000元/晚',
        priceRange: [600, 2000],
        unit: '晚',
        note: '五星级酒店'
      },
      {
        id: 'home-ac',
        name: { zh: '空调', en: 'Air Conditioner', ru: 'Кондиционер' },
        price: '1500-5000元',
        priceRange: [1500, 5000],
        unit: '台',
        note: '因品牌和功能差异'
      },
      {
        id: 'home-washer',
        name: { zh: '洗衣机', en: 'Washing Machine', ru: 'Стиральная машина' },
        price: '600-2000元',
        priceRange: [600, 2000],
        unit: '台',
        note: '半自动便宜，全自动贵'
      },
      {
        id: 'home-fridge',
        name: { zh: '冰箱', en: 'Refrigerator', ru: 'Холодильник' },
        price: '800-3000元',
        priceRange: [800, 3000],
        unit: '台',
        note: '小冰箱便宜，对开门贵'
      },
      {
        id: 'home-water-heater',
        name: { zh: '热水器', en: 'Water Heater', ru: 'Водонагреватель' },
        price: '500-2000元',
        priceRange: [500, 2000],
        unit: '台',
        note: '即热式和储水式'
      }
    ]
  }
};

/**
 * 根据关键词搜索物价数据
 * @param {string} query - 用户查询（如"牛奶多少钱""打车费""食堂"）
 * @param {string} category - 可选，指定分类
 * @returns {Array} 匹配的价格条目
 */
export function searchPrices(query, category = null) {
  if (!query) return [];
  
  const q = query.toLowerCase();
  const results = [];
  
  // 关键词映射表（中英文俄同义词）
  const keywordMap = {
    // 交通
    '地铁': ['metro', 'subway', 'transportation'],
    '公交': ['bus', 'transportation'],
    '打车': ['taxi', 'didi', 'cab', 'transportation'],
    '出租': ['taxi', 'didi', 'transportation'],
    '滴滴': ['didi', 'taxi', 'transportation'],
    '自行车': ['bike', 'bike-sharing', 'transportation'],
    '共享单车': ['bike', 'bike-sharing', 'transportation'],
    '机场': ['airport', 'transportation'],
    '停车': ['parking', 'transportation'],
    '充电': ['ev-charging', 'transportation'],
    '交通': ['transportation'],
    // 餐饮
    '食堂': ['canteen', 'food'],
    '吃饭': ['canteen', 'restaurant', 'food'],
    '早餐': ['canteen-breakfast', 'food'],
    '午饭': ['canteen-lunch', 'food'],
    '晚饭': ['canteen-lunch', 'food'],
    '餐厅': ['restaurant', 'food'],
    '奶茶': ['bubble-tea', 'food'],
    '咖啡': ['bubble-tea', 'food'],
    '酒吧': ['bar', 'nightlife', 'food'],
    '夜店': ['club', 'nightlife', 'food'],
    '夜市': ['night-market', 'food'],
    '清真': ['halal', 'food'],
    '外卖': ['express', 'food'],
    // 通讯
    '话费': ['plan', 'telecom'],
    '手机卡': ['plan', 'sim', 'telecom'],
    '套餐': ['plan', 'telecom'],
    '流量': ['plan', 'telecom'],
    '充值': ['recharge', 'telecom'],
    // 住房
    '宿舍': ['dorm', 'housing'],
    '租房': ['rent', 'housing'],
    '房租': ['rent', 'housing'],
    '押金': ['deposit', 'housing'],
    '中介': ['agent', 'housing'],
    '单人间': ['dorm-single', 'housing'],
    '双人间': ['dorm-double', 'housing'],
    // 日常
    '快递': ['express', 'daily'],
    '水费': ['utility-water', 'daily'],
    '电费': ['utility-electric', 'daily'],
    '网费': ['internet', 'daily'],
    '宽带': ['internet', 'daily'],
    '搬家': ['moving', 'daily'],
    '洗衣': ['laundry', 'daily'],
    '校园卡': ['campus-card', 'daily'],
    // 医疗
    '医院': ['hospital', 'healthcare'],
    '挂号': ['hospital-registration', 'healthcare'],
    '看牙': ['dental', 'healthcare'],
    '洗牙': ['dental-cleaning', 'healthcare'],
    '补牙': ['dental-filling', 'healthcare'],
    '拔牙': ['dental-extraction', 'healthcare'],
    '种植牙': ['dental-implant', 'healthcare'],
    '救护车': ['ambulance', 'healthcare'],
    '心理咨询': ['mental-health', 'healthcare'],
    '保险': ['health-insurance', 'healthcare'],
    // 娱乐
    '电影': ['movie', 'entertainment'],
    'ktv': ['ktv', 'entertainment'],
    '演唱会': ['concert', 'entertainment'],
    '音乐节': ['music-festival', 'entertainment'],
    '音乐会': ['classical-concert', 'opera-ballet', 'entertainment'],
    '博物馆': ['museum', 'entertainment'],
    '游泳': ['swimming', 'entertainment'],
    '健身': ['gym', 'entertainment'],
    '羽毛球': ['badminton', 'entertainment'],
    'b站': ['streaming', 'entertainment'],
    '爱奇艺': ['streaming', 'entertainment'],
    // 学习
    'hsk': ['hsk', 'education'],
    '考试': ['hsk', 'education'],
    // 签证
    '签证': ['visa', 'residence-permit', 'visa-admin'],
    '居留': ['residence-permit', 'visa'],
    // 奖学金
    '奖学金': ['scholarship', 'csc'],
    'csc': ['csc', 'scholarship'],
    // 购物
    '酒店': ['hotel', 'shopping'],
    '冰箱': ['home-fridge', 'shopping'],
    '洗衣机': ['home-washer', 'shopping'],
    '空调': ['home-ac', 'shopping'],
    '热水器': ['home-water-heater', 'shopping'],
    '教材': ['textbook', 'shopping'],
    // 通用
    '钱': [],
    '价格': [],
    '费用': [],
    '多少钱': [],
    '花费': [],
    '生活费': [],
    '物价': [],
    '便宜': [],
    '贵': [],
  };
  
  // 遍历分类搜索
  const categories = category ? { [category]: priceDatabase[category] } : 
    Object.fromEntries(Object.entries(priceDatabase).filter(([k]) => !['meta'].includes(k)));
  
  for (const [catKey, catData] of Object.entries(categories)) {
    if (!catData?.items) continue;
    
    for (const item of catData.items) {
      // 检查item id是否在关键词匹配中
      let score = 0;
      
      for (const [keyword, matchIds] of Object.entries(keywordMap)) {
        if (q.includes(keyword)) {
          if (matchIds.includes(item.id) || matchIds.includes(catKey)) {
            score += 10;
          }
        }
      }
      
      // 名称匹配
      const nameZh = item.name?.zh?.toLowerCase() || '';
      const nameEn = item.name?.en?.toLowerCase() || '';
      const noteZh = item.note?.toLowerCase() || '';
      
      if (nameZh.includes(q) || q.includes(nameZh)) score += 8;
      if (nameEn.includes(q) || q.includes(nameEn)) score += 8;
      if (noteZh.includes(q)) score += 3;
      
      // 通用查询词给所有条目基础分
      const genericWords = ['钱', '价格', '费用', '多少钱', '花费', '生活费', '物价', '便宜', '贵', 'cost', 'price', 'how much'];
      if (genericWords.some(w => q.includes(w))) score += 1;
      
      if (score > 0) {
        results.push({
          ...item,
          category: catKey,
          categoryLabel: catData.label,
          score
        });
      }
    }
  }
  
  // 按相关度排序
  results.sort((a, b) => b.score - a.score);
  
  return results.slice(0, 15);
}

/**
 * 获取特定分类的所有价格数据
 */
export function getCategoryPrices(category) {
  const cat = priceDatabase[category];
  if (!cat) return null;
  return {
    label: cat.label,
    items: cat.items
  };
}

/**
 * 生成价格摘要文本（给AI做上下文）
 */
export function formatPriceContext(query) {
  const results = searchPrices(query);
  if (!results.length) return '';
  
  let text = '💰 物价参考数据（来源：鹿鸣集生活指南数据库）：\n';
  
  // 按分类分组
  const grouped = {};
  for (const r of results) {
    const cat = r.categoryLabel.zh;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(r);
  }
  
  for (const [cat, items] of Object.entries(grouped)) {
    text += `\n【${cat}】\n`;
    for (const item of items) {
      text += `• ${item.name.zh}：${item.price}`;
      if (item.note) text += `（${item.note}）`;
      text += '\n';
    }
  }
  
  return text;
}

/**
 * 生成月度生活费估算
 */
export function estimateMonthlyBudget(city = '二线城市') {
  const isTier1 = ['北京', '上海', '广州', '深圳', '一线'].some(c => city.includes(c));
  
  const estimates = {
    food: { min: 800, max: 1500, note: '以食堂为主+偶尔外食' },
    transport: { min: 50, max: 200, note: '地铁+公交+偶尔打车' },
    telecom: { min: 30, max: 129, note: '手机套餐' },
    housing: isTier1 
      ? { min: 1500, max: 3000, note: '校外租房（合租）' }
      : { min: 600, max: 1500, note: '校外租房' },
    daily: { min: 100, max: 300, note: '日用品+快递+洗衣等' },
    entertainment: { min: 50, max: 300, note: '偶尔娱乐' },
  };
  
  let totalMin = 0, totalMax = 0;
  const lines = [];
  
  for (const [key, val] of Object.entries(estimates)) {
    totalMin += val.min;
    totalMax += val.max;
    const catLabel = { food: '餐饮', transport: '交通', telecom: '通讯', housing: '住房', daily: '日常', entertainment: '娱乐' };
    lines.push(`• ${catLabel[key]}：${val.min}-${val.max}元/月（${val.note}）`);
  }
  
  return {
    total: `${totalMin}-${totalMax}元/月`,
    breakdown: lines.join('\n'),
    city: isTier1 ? '一线城市' : '二三线城市'
  };
}

export default priceDatabase;
