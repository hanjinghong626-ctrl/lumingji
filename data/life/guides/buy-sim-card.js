// Guide: 购买手机卡
export default {
  id: 'buy-sim-card',
  category: 'first-landing',
  icon: '📲',
  type: 'hands-on',
  difficulty: 1,
  estimatedTime: 45,
  apps: [],
  prerequisites: [],
  tags: ['sim', 'phone', 'registration'],
  title: {
    zh: '购买手机卡',
    en: 'Buy a SIM Card',
    ru: 'Купить SIM-карту'
  },
  summary: {
    zh: '实名制买卡流程、三大运营商选择、套餐推荐、外国人常见问题',
    en: 'Real-name registration, choosing among the 3 carriers, recommended plans, and common questions for foreigners',
    ru: 'Регистрация по паспорту, выбор оператора, рекомендуемые тарифы и частые вопросы иностранцев'
  },
  intro: {
    zh: '在中国，手机号码是数字生活的钥匙——注册支付宝、微信、银行App等几乎所有服务都需要手机号。中国有三大运营商：中国移动、中国联通、中国电信。作为外国人，你需要到线下营业厅实名办理手机卡。本指南手把手带你完成。',
    en: 'In China, a phone number is the key to digital life — you need it to register for Alipay, WeChat, banking apps, and virtually every service. China has three major carriers: China Mobile, China Unicom, and China Telecom. As a foreigner, you need to visit a physical business hall to register for a SIM card with real-name authentication. This guide walks you through it step by step.',
    ru: 'В Китае номер телефона — ключ к цифровой жизни: он нужен для регистрации Alipay, WeChat, банковских приложений и практически всех сервисов. В Китае три основных оператора: China Mobile, China Unicom и China Telecom. Иностранцам нужно лично посетить офис оператора для регистрации SIM-карты с верификацией личности.'
  },
  preparation: {
    zh: ['护照原件（必须）', '录取通知书或在读证明（部分营业厅需要）', '准备好中文名字（部分系统需要录入）', '了解你要去哪家运营商的营业厅'],
    en: ['Original passport (required)', 'Admission letter or enrollment certificate (some stores require it)', 'Have your Chinese name ready (some systems require it)', 'Know which carrier\'s business hall you\'re going to'],
    ru: ['Оригинал загранпаспорта (обязательно)', 'Письмо о зачислении или справка об обучении (некоторые офисы требуют)', 'Подготовьте китайское имя (некоторые системы требуют)', 'Знайте, в офис какого оператора вы идёте']
  },
  steps: [
    {
      title: { zh: '选择运营商', en: 'Choose a Carrier', ru: 'Выберите оператора' },
      desc: {
        zh: '中国三大运营商对比：\n\n📱 中国移动（China Mobile）\n• 优势：覆盖最广，农村和偏远地区信号最好\n• 套餐：起步价稍高，流量充足\n• 推荐指数：⭐⭐⭐⭐⭐\n\n📱 中国联通（China Unicom）\n• 优势：城市网速快，和国际网络兼容性稍好\n• 套餐：性价比高，经常有优惠\n• 推荐指数：⭐⭐⭐⭐\n\n📱 中国电信（China Telecom）\n• 优势：宽带质量好，和手机捆绑优惠\n• 套餐：家庭套餐划算\n• 推荐指数：⭐⭐⭐⭐\n\n💡 建议：先问问同学和室友用哪家。同一个运营商之间打电话、组网更方便。如果不确定，中国移动是最稳妥的选择。',
        en: 'Comparison of China\'s three major carriers:\n\n📱 China Mobile\n• Advantage: Widest coverage, best signal in rural/remote areas\n• Plans: Slightly higher starting price, generous data\n• Recommendation: ⭐⭐⭐⭐⭐\n\n📱 China Unicom\n• Advantage: Fast urban speeds, slightly better international compatibility\n• Plans: Good value, frequent promotions\n• Recommendation: ⭐⭐⭐⭐\n\n📱 China Telecom\n• Advantage: Good broadband quality, phone+bundle deals\n• Plans: Family plans are cost-effective\n• Recommendation: ⭐⭐⭐⭐\n\n💡 Tip: Ask classmates and roommates which carrier they use. Same-carrier calls and networking are more convenient. If unsure, China Mobile is the safest bet.',
        ru: 'Сравнение трёх операторов Китая:\n\n📱 China Mobile\n• Преимущество: Самое широкое покрытие, лучший сигнал в сельской местности\n• Тарифы: Чуть дороже, но много трафика\n• Рекомендация: ⭐⭐⭐⭐⭐\n\n📱 China Unicom\n• Преимущество: Быстрый интернет в городе, лучшая совместимость с международными сетями\n• Тарифы: Хорошее соотношение цена/качество\n• Рекомендация: ⭐⭐⭐⭐\n\n📱 China Telecom\n• Преимущество: Хороший широкополосный интернет\n• Тарифы: Выгодные семейные тарифы\n• Рекомендация: ⭐⭐⭐⭐\n\n💡 Совет: Спросите однокурсников, какой оператор у них. Звонки внутри сети удобнее. Если не уверены — China Mobile самый надёжный выбор.'
      },
      tip: {
        zh: '校园内通常有运营商的服务点，开学季会有优惠套餐。先去学校附近的营业厅问问。',
        en: 'Campuses usually have carrier service points, with special offers during enrollment season. Visit the business hall near your school first.',
        ru: 'В кампусе обычно есть точки обслуживания операторов, в сезон поступления — специальные тарифы. Сначала посетите офис рядом с университетом.'
      }
    },
    {
      title: { zh: '找到最近的营业厅', en: 'Find the Nearest Business Hall', ru: 'Найдите ближайший офис оператора' },
      desc: {
        zh: '操作步骤：\n1. 打开高德地图或百度地图\n2. 搜索"中国移动营业厅"（或联通/电信）\n3. 选择距离最近的、标注为"营业厅"（不是"合作营业厅"或"代理点"，大营业厅业务更全）\n4. 导航前往\n\n注意事项：\n• 只有"自有营业厅"（主营业厅）才能办理外国人开户业务\n• 小的合作网点可能无法处理护照开户\n• 建议去之前先打电话确认是否支持外籍人士开户\n• 营业时间通常为 9:00-18:00，周末部分网点休息',
        en: 'Steps:\n1. Open Amap (高德地图) or Baidu Maps\n2. Search "中国移动营业厅" (or 联通/电信)\n3. Choose the nearest one labeled "营业厅" (not "合作营业厅" or agent points — main halls handle more services)\n4. Navigate there\n\nNotes:\n• Only "self-operated business halls" (自有营业厅) can handle foreign passport registration\n• Small agent shops may not process passport registrations\n• Call ahead to confirm they support foreign registration\n• Business hours usually 9:00-18:00, some closed on weekends',
        ru: 'Шаги:\n1. Откройте Amap или Baidu Maps\n2. Найдите \"中国移动营业厅\" (или 联通/电信)\n3. Выберите ближайший с пометкой \"营业厅\" (не \"合作营业厅\" — главные офисы обслуживают больше услуг)\n4. Следуйте навигации\n\nВажно:\n• Только \"自有营业厅\" (собственные офисы) могут оформить регистрацию по паспорту\n• Маленькие пункты могут не обслуживать иностранцев\n• Позвоните заранее, чтобы уточнить\n• Часы работы обычно 9:00-18:00, некоторые закрыты по выходным'
      }
    },
    {
      title: { zh: '到营业厅办理开户', en: 'Register at the Business Hall', ru: 'Оформление в офисе оператора' },
      desc: {
        zh: '到达营业厅后：\n\n1. 取号排队：进门找到叫号机，取一个号等待\n2. 轮到你时，到柜台办理\n3. 告诉工作人员（或出示手机上的文字）：\n   "你好，我是外国留学生，想办一张手机卡。"\n   Hello, I\'m a foreign student, I want to get a SIM card.\n4. 出示护照原件，工作人员会扫描和复印\n5. 选择套餐（见下一步）\n6. 工作人员帮你选号、激活\n7. 当场测试：插入SIM卡，打电话/上网确认正常\n8. 保留好业务回执单（上面有你的号码和套餐信息）',
        en: 'After arriving at the business hall:\n\n1. Take a queue number: find the queuing machine at the entrance\n2. When it\'s your turn, go to the counter\n3. Tell the staff (or show this on your phone):\n   "你好，我是外国留学生，想办一张手机卡。"\n   (Hello, I\'m a foreign student, I want to get a SIM card.)\n4. Present your original passport — staff will scan and copy it\n5. Choose a plan (see next step)\n6. Staff will help you pick a number and activate it\n7. Test on the spot: insert SIM, make a call / use internet to confirm\n8. Keep the receipt (has your number and plan details)',
        ru: 'После прибытия в офис:\n\n1. Возьмите талон очереди у автомата\n2. Когда подойдёт очередь — подойдите к стойке\n3. Скажите сотруднику (или покажите на телефоне):\n   "你好，我是外国留学生，想办一张手机卡。"\n   (Здравствуйте, я иностранный студент, хочу оформить SIM-карту.)\n4. Предъявите оригинал паспорта\n5. Выберите тариф (см. следующий шаг)\n6. Сотрудник поможет выбрать номер и активирует\n7. Проверьте на месте: вставьте SIM, позвоните / проверьте интернет\n8. Сохраните квитанцию (с номером и деталями тарифа)'
      },
      tip: {
        zh: '如果柜台人员说外国人办不了，不要放弃——可能是他们不熟悉流程。礼貌地要求找经理，或者换一家更大的营业厅试试。根据规定，外国人是可以实名开户的。',
        en: 'If the counter staff says foreigners can\'t register, don\'t give up — they may not be familiar with the process. Politely ask for the manager, or try a larger business hall. By regulation, foreigners are allowed to register with real-name authentication.',
        ru: 'Если сотрудник говорит, что иностранцы не могут оформить — не сдавайтесь. Возможно, он не знает процедуру. Вежливо попросите менеджера или попробуйте более крупный офис. По правилам иностранцы могут оформить SIM.'
      }
    },
    {
      title: { zh: '选择合适的套餐', en: 'Choose the Right Plan', ru: 'Выберите подходящий тариф' },
      desc: {
        zh: '留学生推荐的套餐类型：\n\n💰 经济实惠型（月租30-58元）\n• 流量：10-30GB/月\n• 通话：100-300分钟\n• 适合：日常通讯为主，WiFi环境多\n\n🎓 学生套餐（月租39-79元）\n• 流量：30-100GB/月（校园区域可能更多）\n• 通话：300-500分钟\n• 适合：重度上网用户\n• 注意：校园营业厅通常有专属学生套餐，问工作人员"有没有学生套餐"\n\n📱 大流量套餐（月租79-129元）\n• 流量：100GB+甚至不限量\n• 通话：500-1000分钟或无限\n• 适合：不常连WiFi，流量需求大\n\n💡 小贴士：\n• 问清楚是否有"合约期"（一般12个月），提前销号有违约金\n• 问清楚超出套餐后的流量和通话费用\n• 确认套餐是否包含"来电显示"功能（免费的）\n• 部分套餐首月免费或半价',
        en: 'Recommended plan types for international students:\n\n💰 Economy (¥30-58/month)\n• Data: 10-30GB/month\n• Calls: 100-300 minutes\n• Best for: Basic communication, lots of WiFi access\n\n🎓 Student Plan (¥39-79/month)\n• Data: 30-100GB/month (more in campus zones)\n• Calls: 300-500 minutes\n• Best for: Heavy internet users\n• Note: Campus stores usually have exclusive student plans — ask "有没有学生套餐"\n\n📱 Large Data Plan (¥79-129/month)\n• Data: 100GB+ or unlimited\n• Calls: 500-1000 min or unlimited\n• Best for: Rarely on WiFi, high data needs\n\n💡 Tips:\n• Ask about contract period (usually 12 months) — early termination has fees\n• Ask about overage charges for data and calls\n• Confirm the plan includes "caller ID display" (free)\n• Some plans offer first month free or half price',
        ru: 'Рекомендуемые тарифы для иностранных студентов:\n\n💰 Экономный (30-58 ¥/мес)\n• Трафик: 10-30 ГБ/мес\n• Звонки: 100-300 мин\n• Для: базового общения, при наличии WiFi\n\n🎓 Студенческий (39-79 ¥/мес)\n• Трафик: 30-100 ГБ/мес\n• Звонки: 300-500 мин\n• Для: активных пользователей\n• Спросите \"有没有学生套餐\" (есть ли студенческий тариф)\n\n📱 Большой трафик (79-129 ¥/мес)\n• Трафик: 100 ГБ+ или безлимит\n• Звонки: 500-1000 мин или безлимит\n\n💡 Советы:\n• Уточните срок контракта (обычно 12 мес) — досрочное расторжение = штраф\n• Спросите о стоимости сверх тарифа\n• Убедитесь, что включён Caller ID (бесплатно)\n• Некоторые тарифы — первый месяц бесплатно'
      }
    },
    {
      title: { zh: '激活SIM卡并测试', en: 'Activate and Test', ru: 'Активируйте и проверьте' },
      desc: {
        zh: '拿到SIM卡后：\n\n1. 把SIM卡插入手机（关机状态下操作更安全）\n2. 开机，等待信号出现（通常1-5分钟）\n3. 确认状态栏显示信号格和运营商名称\n4. 测试打电话：拨打10086（移动）/10010（联通）/10000（电信）确认能拨通\n5. 测试上网：打开浏览器随便访问一个网站\n6. 测试发短信：给自己或同学发一条短信\n\n如果15分钟后仍无信号：\n• 检查SIM卡是否正确插入\n• 重启手机\n• 拨打运营商客服确认激活状态\n• 可能需要等待24小时完全激活',
        en: 'After receiving the SIM card:\n\n1. Insert the SIM card into your phone (power off for safety)\n2. Power on, wait for signal (usually 1-5 minutes)\n3. Confirm signal bars and carrier name appear in the status bar\n4. Test calling: dial 10086 (Mobile) / 10010 (Unicom) / 10000 (Telecom)\n5. Test internet: open a browser and visit any website\n6. Test SMS: send a message to yourself or a friend\n\nIf no signal after 15 minutes:\n• Check SIM is properly inserted\n• Restart the phone\n• Call customer service to confirm activation\n• May need up to 24 hours for full activation',
        ru: 'Получив SIM-карту:\n\n1. Вставьте SIM в телефон (лучше при выключенном)\n2. Включите, ждите сигнал (обычно 1-5 минут)\n3. Проверьте значки сигнала и имя оператора\n4. Тест звонка: наберите 10086 (Mobile) / 10010 (Unicom) / 10000 (Telecom)\n5. Тест интернета: откройте любой сайт\n6. Тест SMS: отправьте сообщение себе или другу\n\nЕсли нет сигнала 15 минут:\n• Проверьте правильность установки SIM\n• Перезагрузите телефон\n• Позвоните в службу поддержки\n• Полная активация может занять до 24 часов'
      }
    }
  ],
  faq: [
    {
      q: { zh: '外国人办手机卡有限制吗？', en: 'Are there restrictions for foreigners getting a SIM card?', ru: 'Есть ли ограничения для иностранцев при оформлении SIM?' },
      a: { zh: '根据工信部规定，外国人可以凭护照实名登记办理手机卡。但实际操作中，部分小营业厅可能不熟悉流程或拒绝办理。如果遇到困难，可以去运营商的市级主营业厅，或拨打客服热线投诉。', en: 'According to MIIT regulations, foreigners can register SIM cards with their passports. In practice, some small shops may not be familiar with the process. If you encounter difficulties, go to the carrier\'s main city-level business hall, or call their hotline.', ru: 'По правилам MIIT, иностранцы могут оформить SIM по паспорту. На практике мелкие пункты могут не знать процедуру. Обратитесь в главный офис оператора или позвоните на горячую линию.' }
    },
    {
      q: { zh: '需要预存话费吗？', en: 'Do I need to prepay?', ru: 'Нужно ли вносить предоплату?' },
      a: { zh: '通常需要。大部分套餐要求预存50-100元话费，这笔钱直接从你的账户余额中扣除用于月租和消费。也有部分套餐是"先使用后付费"，但留学生一般选择预付费套餐更简单。', en: 'Usually yes. Most plans require a ¥50-100 prepaid deposit, which is used for monthly fees and usage. Some plans are post-paid, but prepaid is simpler for international students.', ru: 'Обычно да. Большинство тарифов требуют предоплату 50-100 ¥. Для студентов проще предоплаченные тарифы.' }
    },
    {
      q: { zh: '手机号可以注销吗？离开中国时怎么办？', en: 'Can I cancel my number? What about when leaving China?', ru: 'Можно ли отменить номер? Что делать при отъезде?' },
      a: { zh: '可以注销，但需要到营业厅办理。离开中国前建议：1）用完套餐余额或申请退款；2）解绑所有用该号码注册的服务（支付宝、微信、银行等）；3）到营业厅注销号码。如果有合约期，提前注销可能需要支付违约金。', en: 'Yes, but you must visit a business hall. Before leaving China: 1) Use up balance or request refund; 2) Unbind all services registered with this number (Alipay, WeChat, banks, etc.); 3) Cancel the number at a business hall. Early cancellation during contract period may incur fees.', ru: 'Да, но нужно посетить офис. Перед отъездом: 1) Используйте баланс или запросите возврат; 2) Отвяжите все сервисы; 3) Отмените номер в офисе. Досрочная отмена может иметь штраф.' }
    }
  ],
  nextGuides: ['setup-alipay', 'setup-wechat', 'register-dormitory']
};
