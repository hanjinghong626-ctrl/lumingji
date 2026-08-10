// Guide: 校外租房指南
export default {
  id: 'rent-apartment',
  category: 'housing',
  icon: '🔑',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 120,
  apps: ['alipay', 'wechat'],
  prerequisites: ['dormitory-guide'],
  tags: ['rent', 'apartment', 'off-campus'],
  title: {
    zh: '校外租房指南',
    en: 'Off-campus Apartment Rental',
    ru: 'Аренда квартиры вне кампуса'
  },
  summary: {
    zh: '找房渠道、看房注意事项、租金谈判、签约要点与防骗指南',
    en: 'Finding apartments, viewing tips, rent negotiation, contract signing and scam prevention',
    ru: 'Поиск жилья, осмотр, торг за аренду, подписание договора и защита от мошенничества'
  },
  intro: {
    zh: '有些留学生因为宿舍条件有限或个人需求，选择在校外租房。在中国租房需要通过中介平台找房、实地看房、签订合同、办理入住。整个过程需要一些中文基础或朋友帮助。',
    en: 'Some international students choose to rent off-campus due to dormitory limitations or personal needs. Renting in China involves finding apartments through agencies, viewing in person, signing a contract, and moving in. The process requires some Chinese proficiency or help from friends.',
    ru: 'Некоторые студенты снимают жильё вне кампуса. Аренда в Китае включает поиск через агентства, осмотр, подписание договора и заселение. Процесс требует знания китайского или помощи друзей.'
  },
  preparation: {
    zh: [
      '预算规划（月租+押金+中介费）',
      '有效的中文沟通能力或中国朋友陪同',
      '护照和中国银行账户信息',
      '了解学校周边的交通和商圈'
    ],
    en: [
      'Budget planning (rent + deposit + agency fee)',
      'Chinese communication ability or Chinese friend to accompany',
      'Passport and Chinese bank account info',
      'Know the transportation and commercial areas near school'
    ],
    ru: [
      'Планирование бюджета (аренда + залог + комиссия агентства)',
      'Знание китайского или китайский друг для сопровождения',
      'Паспорт и данные банковского счёта в Китае',
      'Знайте транспорт и инфраструктуру рядом с вузом'
    ]
  },
  steps: [
    {
      title: {
        zh: '通过平台找房',
        en: 'Search for Apartments',
        ru: 'Поиск квартир'
      },
      desc: {
        zh: '主要找房渠道：\n\n🏠 租房平台\n• 贝壳找房（beike.com）：房源多、信息相对真实\n• 链家（lianjia.com）：大品牌中介，服务规范\n• 58同城/安居客：信息量大，但需仔细辨别\n• 闲鱼：个人直租，没有中介费\n\n📱 微信小程序\n• 搜索"租房"可以找到很多本地租房小程序\n\n💡 建议：\n• 选择离学校地铁30分钟以内的区域\n• 预算一般为月收入的30%左右\n• 注意区分"整租"（整套）和"合租"（单间）',
        en: 'Main channels for finding apartments:\n\n🏠 Rental platforms\n• Beike (beike.com): Many listings, relatively reliable\n• Lianjia (lianjia.com): Major agency, standardized service\n• 58.com/Anjuke: Large volume, verify carefully\n• Xianyu: Direct rental from owners, no agency fee\n\n📱 WeChat mini-programs\n• Search "租房" for local rental apps\n\n💡 Tips:\n• Choose area within 30 min subway from school\n• Budget ~30% of monthly income\n• Distinguish "整租" (whole apartment) vs "合租" (shared room)',
        ru: 'Основные каналы поиска:\n\n🏠 Платформы аренды\n• Beike (beike.com): много вариантов, относительно надёжно\n• Lianjia (lianjia.com): крупное агентство\n• 58.com/Anjuke: большой объём, проверяйте тщательно\n• Xianyu: прямая аренда без комиссии\n\n💡 Советы:\n• Выбирайте район в 30 мин метро от вуза\n• Бюджет ~30% месячного дохода\n• Различайте "整租" (вся квартира) и "合租" (комната)'
      }
    },
    {
      title: {
        zh: '实地看房',
        en: 'View Apartments in Person',
        ru: 'Осмотр квартир'
      },
      desc: {
        zh: '看房时重点检查：\n\n✅ 必查项\n• 水电煤气是否正常\n• 热水器、空调是否工作\n• 墙壁有无渗水/发霉\n• 马桶冲水、下水道是否畅通\n• 门锁是否安全\n• 手机信号强度\n\n⚠️ 注意事项\n• 白天和晚上各看一次（检查采光和噪音）\n• 问清楚物业费、取暖费谁承担\n• 了解周边超市、医院、公交站距离\n• 确认家具家电是否齐全\n• 拍照记录房屋现状\n\n💰 费用构成\n• 月租金 + 押金（通常1-3个月租金）\n• 中介费（通常半个月到一个月租金）\n• 物业费（有些包含在租金中）',
        en: 'Key things to check during viewing:\n\n✅ Must check\n• Water, electricity, gas working\n• Water heater, AC functional\n• Walls for moisture/mold\n• Toilet flush, drain flow\n• Door lock security\n• Mobile signal strength\n\n⚠️ Notes\n• Visit both day and night (check lighting and noise)\n• Ask who pays property management and heating fees\n• Check nearby supermarket, hospital, bus stops\n• Confirm furniture/appliances included\n• Photograph current condition\n\n💰 Cost breakdown\n• Monthly rent + deposit (usually 1-3 months)\n• Agency fee (0.5-1 month rent)\n• Property management fee (sometimes included)',
        ru: 'Что проверить при осмотре:\n\n✅ Обязательно\n• Вода, электричество, газ\n• Бойлер, кондиционер\n• Стены на влажность/плесень\n• Смыв туалета, слив\n• Замки дверей\n• Сила мобильного сигнала\n\n⚠️ Важно\n• Посетите днём и вечером\n• Уточните, кто платит за обслуживание и отопление\n• Проверьте ближайшие магазины, больницу, остановки\n• Сфотографируйте состояние жилья\n\n💰 Расходы\n• Аренда + залог (обычно 1-3 мес)\n• Комиссия агентства (0.5-1 мес)\n• Коммунальные услуги'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '外国人可以签租房合同吗？',
        en: 'Can foreigners sign rental contracts?',
        ru: 'Могут ли иностранцы подписывать договор аренды?'
      },
      a: {
        zh: '可以。外国人凭护照可以合法签订租房合同。合同建议用中英双语，或请朋友帮助翻译关键条款。签订后保留合同原件，退租时凭合同退押金。',
        en: 'Yes. Foreigners can legally sign rental contracts with their passport. It\'s recommended to have bilingual (Chinese-English) contracts, or have a friend translate key terms. Keep the original contract for deposit refund.',
        ru: 'Да, иностранцы могут легально подписывать договор аренды по паспорту. Рекомендуется двуязычный договор. Сохраните оригинал для возврата залога.'
      }
    },
    {
      q: {
        zh: '如何防止租房被骗？',
        en: 'How to avoid rental scams?',
        ru: 'Как избежать мошенничества при аренде?'
      },
      a: {
        zh: '① 不提前转账定金（看房前不付任何钱）② 核实房东身份证和房产证 ③ 通过正规中介交易 ④ 签订正式合同并保留所有收据 ⑤ 不租明显低于市场价的好房（可能是陷阱）。',
        en: '① Never transfer deposit before viewing (don\'t pay anything before seeing the apartment) ② Verify landlord\'s ID and property certificate ③ Use reputable agencies ④ Sign formal contract and keep all receipts ⑤ Avoid deals that seem too good to be true.',
        ru: '① Не переводите деньги до осмотра ② Проверьте ID арендодателя и документы на собственность ③ Используйте проверенные агентства ④ Подпишите официальный договор ⑤ Остерегайтесь слишком выгодных предложений.'
      }
    }
  ],
  nextGuides: ['rent-contract', 'utility-setup']
};
