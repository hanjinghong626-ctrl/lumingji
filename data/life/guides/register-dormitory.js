// Guide: 入住宿舍
export default {
  id: 'register-dormitory',
  category: 'first-landing',
  icon: '🏠',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 45,
  apps: [],
  prerequisites: ['airport-to-city'],
  tags: ['housing', 'dormitory', 'registration', 'essential'],
  title: {
    zh: '入住宿舍',
    en: 'Check Into Dormitory',
    ru: 'Заселение в общежитие'
  },
  summary: {
    zh: '留学生宿舍入住全流程：报到登记、领取钥匙、熟悉设施、办理校园卡、了解宿舍规则',
    en: 'Complete dorm move-in process: registration, key pickup, facilities tour, campus card, dorm rules',
    ru: 'Полный процесс заселения: регистрация, получение ключей, знакомство с удобствами, карта кампуса, правила'
  },
  intro: {
    zh: '到达学校后，第一件事就是入住宿舍。中国大学的留学生宿舍通常是独立楼栋或指定区域，条件因学校而异。本指南帮你顺利完成入住，快速适应新环境。',
    en: 'After arriving at your university, the first thing is to check into your dormitory. International student dorms in Chinese universities are usually in separate buildings or designated areas. Conditions vary by school. This guide helps you check in smoothly and settle into your new environment.',
    ru: 'По прибытии в университет первое дело — заселение в общежитие. Общежития для иностранных студентов обычно в отдельных зданиях. Условия зависят от университета. Это руководство поможет вам заселиться и адаптироваться.'
  },
  preparation: {
    zh: ['录取通知书（原件或打印件）', '护照原件', '签证/居留许可', '证件照片若干（1寸和2寸，白底，约8-10张）', '现金（住宿费可能需要现场缴纳）', '基本洗漱用品和换洗衣物'],
    en: ['Admission letter (original or printed copy)', 'Original passport', 'Visa/residence permit', 'Several passport photos (1-inch and 2-inch, white background, about 8-10)', 'Cash (accommodation fees may need on-site payment)', 'Basic toiletries and change of clothes'],
    ru: ['Письмо о зачислении (оригинал или распечатка)', 'Оригинал паспорта', 'Виза/вид на жительство', 'Фотографии (1 и 2 дюйма, белый фон, 8-10 шт.)', 'Наличные (возможна оплата проживания на месте)', 'Базовые туалетные принадлежности и сменная одежда']
  },
  steps: [
    {
      title: { zh: '到国际学生办公室报到', en: 'Report to International Student Office', ru: 'Регистрация в офисе иностранных студентов' },
      desc: {
        zh: '到达学校后的第一件事：\n\n1. 找到国际学生办公室（或留学生接待点）\n   • 通常在校园地图上标注为"International Student Office"或"留学生办公室"\n   • 也可以问门卫或路人，出示录取通知书上的地址\n   • 开学季通常在校门口有接待点\n\n2. 携带材料：\n   • 护照原件 + 复印件\n   • 录取通知书\n   • 签证/JW202表\n   • 证件照片\n\n3. 办理手续：\n   • 提交材料，填写登记表\n   • 领取校园卡/学生证\n   • 缴纳住宿费（如未提前缴纳）\n   • 获取宿舍分配单（楼栋号、房间号、床位号）\n   • 领取宿舍钥匙/门禁卡\n\n💡 开学季人多，建议尽早到达办理',
        en: 'First thing after arriving at school:\n\n1. Find the International Student Office (or reception point)\n   • Usually marked on campus map as "International Student Office"\n   • Ask guards or passersby, show the address on your admission letter\n   • During enrollment season, reception desks are usually at the school gate\n\n2. Bring these documents:\n   • Original passport + copies\n   • Admission letter\n   • Visa/JW202 form\n   • Passport photos\n\n3. Complete procedures:\n   • Submit documents, fill in registration form\n   • Receive campus card/student ID\n   • Pay accommodation fees (if not paid in advance)\n   • Get dorm assignment slip (building number, room number, bed number)\n   • Receive dorm key/access card\n\n💡 It\'s crowded during enrollment — arrive early!',
        ru: 'Первое дело по прибытии:\n\n1. Найдите офис иностранных студентов\n   • Отмечен на карте кампуса\n   • Спросите охранников\n   • В сезон поступления — стойки у ворот\n\n2. Документы:\n   • Паспорт + копии\n   • Письмо о зачислении\n   • Виза/JW202\n   • Фотографии\n\n3. Оформление:\n   • Подайте документы\n   • Получите карту кампуса\n   • Оплатите проживание\n   • Получите направление в общежитие\n   • Получите ключи\n\n💡 В сезон поступления много людей — приходите рано'
      },
      tip: {
        zh: '建议带上一个中国朋友或学长一起去报到，语言沟通会顺畅很多。如果英语也不通，可以用手机翻译App辅助。',
        en: 'It\'s helpful to bring a Chinese friend or senior student to help with communication. If language is a barrier, translation apps on your phone can help too.',
        ru: 'Рекомендуется взять с собой китайского друга или старшекурсника для помощи в общении. Если языковой барьер — используйте приложения-переводчики.'
      }
    },
    {
      title: { zh: '入住并检查房间', en: 'Move In and Inspect Your Room', ru: 'Заселение и проверка комнаты' },
      desc: {
        zh: '拿到钥匙后，前往宿舍：\n\n1. 找到宿舍楼（根据分配单上的楼栋号）\n2. 到一楼宿管处登记（出示学生证/录取通知书）\n3. 上楼找到你的房间\n\n入住检查清单：\n✅ 家具检查：床铺、书桌、椅子、衣柜是否完好\n✅ 电器检查：灯、插座、空调/风扇是否正常\n✅ 卫浴检查：水龙头、淋浴、马桶是否正常工作\n✅ 网络检查：是否有WiFi接口或网线端口\n✅ 门窗检查：门锁是否正常、窗户能否关严\n\n如发现问题：\n• 立即拍照留证\n• 到宿管处报修（填写报修单或扫码报修）\n• 说明是入住前就存在的问题，避免退房时被追责\n\n💡 中国大学宿舍通常配置：\n• 上床下桌（床在上铺，下面是书桌和衣柜）或上下铺\n• 公共卫生间（每层楼共用）或独立卫生间\n• 有热水供应（部分学校限时供应）\n• 部分宿舍有公共洗衣机和饮水机',
        en: 'After getting the keys, head to your dorm:\n\n1. Find the building (check building number on assignment slip)\n2. Register at the ground-floor dorm manager\'s office (show student ID/admission letter)\n3. Go upstairs and find your room\n\nMove-in checklist:\n✅ Furniture: bed, desk, chair, wardrobe — all intact?\n✅ Electronics: lights, outlets, AC/fan — working?\n✅ Bathroom: faucet, shower, toilet — functioning?\n✅ Internet: WiFi access or network port available?\n✅ Doors/windows: lock working? Windows seal properly?\n\nIf you find problems:\n• Take photos immediately as evidence\n• Report to dorm manager (fill repair form or scan QR to report)\n• Clarify issues existed before move-in to avoid liability when checking out\n\n💡 Typical Chinese university dorm setup:\n• Loft bed with desk below, or bunk beds\n• Shared bathroom (each floor) or private en-suite\n• Hot water supply (some schools have time-limited supply)\n• Some dorms have shared washing machines and water dispensers',
        ru: 'Получив ключи, идите в общежитие:\n\n1. Найдите здание (номер в направлении)\n2. Зарегистрируйтесь у коменданта\n3. Найдите свою комнату\n\nЧек-лист при заселении:\n✅ Мебель: кровать, стол, стул, шкаф\n✅ Электрика: свет, розетки, кондиционер\n✅ Санузел: кран, душ, туалет\n✅ Интернет: WiFi или сетевой порт\n✅ Двери/окна: замок, створки\n\nПри проблемах:\n• Сфотографируйте\n• Сообщите коменданту\n• Укажите, что проблемы были до заселения\n\n💡 Типичное оснащение:\n• Кровать-чердак или двухъярусная\n• Общий или отдельный санузел\n• Горячая вода (иногда по графику)\n• Общие стиральные машины'
      }
    },
    {
      title: { zh: '了解宿舍规则和设施', en: 'Learn Dorm Rules and Facilities', ru: 'Правила и удобства общежития' },
      desc: {
        zh: '入住后请尽快了解以下内容：\n\n📋 宿舍规则（务必了解）：\n• 门禁时间：通常22:30-23:00关门，晚归需要登记\n• 访客规定：一般不允许异性进入，访客需登记\n• 用电安全：禁止使用大功率电器（电磁炉、电热毯等），会被没收\n• 卫生检查：学校定期查寝，保持整洁\n• 安静时间：通常23:00后需要保持安静\n\n🏪 周边设施：\n• 食堂位置和营业时间\n• 超市/便利店\n• 快递收发点\n• 洗衣房\n• 开水房/饮水机\n• 校医院/医务室\n\n🔑 安全须知：\n• 出门锁门，即使只是去走廊\n• 贵重物品放在柜子里锁好\n• 不要给陌生人开门\n• 记住宿管电话和保卫处电话\n\n💡 和室友相处：\n• 中国学生通常比较友好，主动打招呼\n• 可以带些家乡特产分享\n• 尊重彼此的生活习惯和作息时间\n• 有矛盾及时沟通，不要积累',
        en: 'After moving in, learn these as soon as possible:\n\n📋 Dorm Rules (important!):\n• Curfew: usually 22:30-23:00, late return requires registration\n• Visitors: generally no opposite-gender visitors, all guests need registration\n• Electrical safety: no high-power appliances (hot plates, electric blankets) — they will be confiscated\n• Hygiene inspections: regular room checks, keep things tidy\n• Quiet hours: usually after 23:00\n\n🏪 Nearby Facilities:\n• Cafeteria location and hours\n• Supermarket/convenience store\n• Package pickup point\n• Laundry room\n• Hot water room/dispenser\n• Campus clinic\n\n🔑 Safety:\n• Lock the door even for short trips\n• Keep valuables locked in your cabinet\n• Don\'t open the door for strangers\n• Save dorm manager and security phone numbers\n\n💡 Getting along with roommates:\n• Chinese students are generally friendly — say hello first\n• Bring snacks from your hometown to share\n• Respect each other\'s habits and schedules\n• Address conflicts early, don\'t let them build up',
        ru: 'После заселения узнайте:\n\n📋 Правила:\n• Комендантский час: обычно 22:30-23:00\n• Посетители: регистрация обязательна\n• Электрика: запрещены мощные приборы\n• Проверки: регулярные, поддерживайте чистоту\n• Тишина: после 23:00\n\n🏪 Рядом:\n• Столовая\n• Магазин\n• Пункт получения посылок\n• Прачечная\n• Кипяток\n• Кампусная поликлиника\n\n🔑 Безопасность:\n• Запирайте дверь\n• Ценности — под замок\n• Не открывайте незнакомцам\n\n💡 С соседями:\n• Будьте дружелюбны\n• Привезите угощения из дома\n• Уважайте привычки друг друга'
      },
      tip: {
        zh: '很多学校的宿管阿姨/大叔人很好，会帮你收快递、提供针线等日常用品。和他们搞好关系，住宿生活会方便很多。',
        en: 'Many dorm managers (usually called "阿姨/大叔") are very helpful — they can receive packages for you, provide sewing kits and daily necessities. Building a good relationship with them makes dorm life much easier.',
        ru: 'Коменданты общежитий обычно очень полезны — принимают посылки, дают нитки и предметы первой необходимости. Хорошие отношения с ними облегчают жизнь.'
      }
    },
    {
      title: { zh: '办理校园卡和临时住宿登记', en: 'Get Campus Card & Temporary Residence Registration', ru: 'Карта кампуса и регистрация проживания' },
      desc: {
        zh: '这两个证件/手续非常重要：\n\n📇 校园卡：\n• 功能：图书馆借书、食堂就餐、洗澡、门禁、打印、校园巴士\n• 充值方式：校园卡自助充值机、微信/支付宝充值、现金充值\n• 补办：丢了去校园卡中心补办，带护照，费用约20-30元\n• 注意：校园卡仅限校内使用，不记名不挂失的卡要保管好\n\n📋 临时住宿登记（境外人员住宿登记）：\n• 这是中国法律的硬性要求！所有外国人入住后24小时内必须办理\n• 如果住在校内宿舍：由学校统一到派出所办理，你只需提交材料\n• 如果住在校外：需本人或房东到辖区派出所办理\n• 所需材料：护照、签证、住宿地址证明\n• 不办理的处罚：警告或罚款2000元以下\n\n💡 后续如果搬家或签证续签，都需要重新办理住宿登记。',
        en: 'These two documents/procedures are very important:\n\n📇 Campus Card:\n• Functions: library borrowing, cafeteria meals, shower, door access, printing, campus bus\n• Top-up methods: self-service machines, WeChat/Alipay top-up, cash\n• Replacement: go to campus card center with passport, costs about ¥20-30\n• Note: campus card is for on-campus use only; non-registered cards can\'t be reported lost\n\n📋 Temporary Residence Registration (for foreigners):\n• This is a MANDATORY requirement under Chinese law! Must be done within 24 hours of moving in\n• Living on campus: school handles it at the police station, you just submit documents\n• Living off campus: you or landlord must go to the local police station\n• Required documents: passport, visa, proof of address\n• Penalty for non-compliance: warning or fine up to ¥2,000\n\n💡 If you move or renew your visa later, you\'ll need to re-register.',
        ru: 'Эти два документа/процедуры очень важны:\n\n📇 Карта кампуса:\n• Функции: библиотека, столовая, душ, доступ, печать\n• Пополнение: автоматы, WeChat/Alipay, наличные\n• Замена: с паспортом, около 20-30 ¥\n\n📋 Регистрация проживания (для иностранцев):\n• ОБЯЗАТЕЛЬНО по закону Китая! В течение 24 часов\n• В кампусе: университет оформляет, вы только подаёте документы\n• Вне кампуса: вы или арендодатель идёте в участок\n• Документы: паспорт, виза, адрес\n• Штраф за невыполнение: до 2000 ¥\n\n💡 При переезде или продлении визы — повторная регистрация'
      }
    }
  ],
  faq: [
    {
      q: { zh: '宿舍费大概多少钱？', en: 'How much does dormitory accommodation cost?', ru: 'Сколько стоит проживание в общежитии?' },
      a: { zh: '中国大学留学生宿舍费用因城市和房型差异较大：一线城市（北京、上海）双人间约1500-3000元/月，二三线城市约600-1500元/月。单人间更贵，四人间更便宜。通常按学期或学年缴纳。奖学金生一般免住宿费。', en: 'Costs vary greatly by city and room type: first-tier cities (Beijing, Shanghai) ~¥1500-3000/month for a double room, second/third-tier cities ~¥600-1500/month. Singles cost more, quads cost less. Usually paid per semester or year. Scholarship students usually have accommodation covered.', ru: 'Зависит от города и типа комнаты: в крупных городах (Пекин, Шанхай) двухместная ~1500-3000 ¥/мес, в других ~600-1500 ¥/мес. Одноместные дороже, четырёхместные дешевле. Стипендиаты обычно не платят за проживание.' }
    },
    {
      q: { zh: '可以申请换宿舍或校外住宿吗？', en: 'Can I switch dorms or live off-campus?', ru: 'Можно ли поменять общежитие или жить вне кампуса?' },
      a: { zh: '可以申请换宿舍，但需要有空的床位，需向国际学生办公室申请。校外住宿也是允许的，但需要：1）向学校申请校外住宿审批；2）到辖区派出所办理住宿登记；3）确保住宿地址在签证登记范围内。部分学校对大一新生要求必须住校。', en: 'You can request a room change, but there must be available beds — apply to the international student office. Living off-campus is also allowed, but requires: 1) Apply for off-campus housing approval from school; 2) Register at the local police station; 3) Ensure address is within visa registration area. Some schools require first-year students to live on campus.', ru: 'Можно поменять комнату при наличии свободных мест — подайте заявление. Проживание вне кампуса разрешено, но требует: 1) Одобрения школы; 2) Регистрации в участке; 3) Соответствия адреса визе. Некоторые вузы требуют проживания в кампусе на первом курсе.' }
    },
    {
      q: { zh: '宿舍可以做饭吗？', en: 'Can I cook in the dormitory?', ru: 'Можно ли готовить в общежитии?' },
      a: { zh: '大多数学校宿舍内禁止使用大功率电器（电磁炉、电饭煲等），查到会被没收并通报。但部分学校有公共厨房可以使用。建议使用学校食堂或外卖解决日常饮食，价格也很实惠。', en: 'Most dorms prohibit high-power appliances (induction cookers, rice cookers, etc.) — they will be confiscated if found. However, some schools have shared kitchens. Using the cafeteria or food delivery for daily meals is convenient and affordable.', ru: 'В большинстве общежитий запрещены мощные приборы. Но некоторые вузы имеют общие кухни. Столовая и доставка еды — удобная и недорогая альтернатива.' }
    }
  ],
  nextGuides: ['setup-wechat', 'setup-alipay', 'first-week-checklist']
};
