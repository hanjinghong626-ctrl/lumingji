// Guide: 从机场到市区
export default {
  id: 'airport-to-city',
  category: 'first-landing',
  icon: '✈️',
  type: 'hands-on',
  difficulty: 1,
  estimatedTime: 30,
  apps: ['gaode-map', 'didi', 'metro-app'],
  prerequisites: [],
  tags: ['arrival', 'airport', 'transport'],
  title: {
    zh: '从机场到市区',
    en: 'Airport to City',
    ru: 'Из аэропорта в город'
  },
  summary: {
    zh: '落地后第一步：地铁、大巴、出租车、网约车——选最适合你的方式到达学校或住处',
    en: 'First step after landing: metro, shuttle bus, taxi, or ride-hailing — choose the best way to reach your school or accommodation',
    ru: 'Первый шаг после прилёта: метро, автобус, такси или каршеринг — выберите лучший способ добраться до университета'
  },
  intro: {
    zh: '恭喜你落地中国！第一件事就是从机场到你的学校或住处。中国的主要国际机场都有完善的公共交通系统，不用担心。本指南涵盖地铁、机场大巴、出租车和网约车四种方式，帮你选择最适合自己的方案。',
    en: 'Congratulations on landing in China! The first thing is getting from the airport to your school or accommodation. China\'s major international airports all have well-developed public transport systems. This guide covers metro, airport shuttle bus, taxi, and ride-hailing — helping you choose the best option.',
    ru: 'Поздравляем с прилётом в Китай! Первое дело — добраться из аэропорта до университета или жилья. Все крупные международные аэропорты Китая имеют развитую транспортную систему. Этот гайд охватывает метро, аэропортовый автобус, такси и каршеринг.'
  },
  preparation: {
    zh: ['护照和签证（随身携带）', '录取通知书或学校地址（手机截图保存）', '下载高德地图或百度地图（导航用）', '少量人民币现金（打车/买票备用）', '手机充电宝（长时间出行必备）'],
    en: ['Passport and visa (keep on person)', 'Admission letter or school address (save a screenshot)', 'Download Amap or Baidu Maps (for navigation)', 'Some RMB cash (for taxi/ticket backup)', 'Phone power bank (essential for long journeys)'],
    ru: ['Паспорт и виза (при себе)', 'Письмо о зачислении или адрес университета (сохраните скриншот)', 'Скачать Amap или Baidu Maps (навигация)', 'Немного наличных юаней (на такси/билеты)', 'Пауэрбанк (обязательно при долгой дороге)']
  },
  steps: [
    {
      title: { zh: '确认目的地地址', en: 'Confirm Your Destination', ru: 'Уточните адрес destination' },
      desc: {
        zh: '出发前先确认你要去哪里。把学校/住处的中文地址保存在手机里（截图或备忘录），因为出租车司机和问路都需要看中文。\n\n典型格式：山东省青岛市崂山区松岭路99号 中国海洋大学\n\n如果有接机老师，在到达大厅找到举牌的学校工作人员，直接联系。',
        en: 'Before leaving, confirm where you\'re going. Save the Chinese address of your school/accommodation on your phone (screenshot or notes), because taxi drivers and asking for directions both require Chinese text.\n\nTypical format: 山东省青岛市崂山区松岭路99号 中国海洋大学\n\nIf your school has arranged airport pickup, find the staff holding a sign in the arrivals hall and contact them directly.',
        ru: 'Перед выездом уточните, куда вы едете. Сохраните китайский адрес университета/жилья на телефоне (скриншот или заметки) — таксистам и для уточнения направления нужен китайский текст.\n\nТипичный формат: 山东省青岛市崂山区松岭路99号 中国海洋大学\n\nЕсли университет организовал встречу, найдите сотрудника с табличкой в зале прилёта.'
      },
      tip: {
        zh: '把中文地址也写在小纸条上，万一手机没电可以应急。',
        en: 'Write the Chinese address on a small piece of paper as backup in case your phone dies.',
        ru: 'Запишите китайский адрес на бумажке — на случай, если телефон разрядится.'
      }
    },
    {
      title: { zh: '方式一：地铁（最推荐）', en: 'Option 1: Metro (Most Recommended)', ru: 'Вариант 1: Метро (самый рекомендуемый)' },
      desc: {
        zh: '中国大部分国际机场都通了地铁，这是最可靠、最便宜的方式。\n\n操作步骤：\n1. 跟随"地铁/Metro"指示牌走到地铁站（通常在航站楼地下或相连的交通中心）\n2. 在自动售票机买票：选择语言→选择目的地站→投入现金/扫码支付→取票\n3. 刷卡进站，按指示牌换乘，到达目的地站\n4. 从正确的出口出站\n\n主要机场地铁线路：\n• 北京首都机场 → 首都机场线 → 东直门（换乘2号线/13号线）\n• 北京大兴机场 → 大兴机场线 → 草桥（换乘10号线/19号线）\n• 上海浦东机场 → 地铁2号线 → 直达市区\n• 上海虹桥机场 → 地铁2号线/10号线 → 直达市区\n• 广州白云机场 → 地铁3号线 → 直达市区\n• 成都天府机场 → 地铁18号线 → 直达市区\n• 青岛胶东机场 → 地铁8号线 → 直达市区\n\n票价通常5-35元，耗时40-90分钟（视距离而定）。',
        en: 'Most major Chinese international airports are connected to metro systems — the most reliable and cheapest option.\n\nSteps:\n1. Follow "Metro/地铁" signs to the metro station (usually underground or in connected transport hub)\n2. Buy ticket at vending machine: select language → choose destination station → insert cash/scan QR → collect ticket\n3. Swipe card to enter, follow transfer signs, arrive at destination station\n4. Exit from the correct exit\n\nMajor airport metro lines:\n• Beijing Capital → Capital Airport Express → Dongzhimen (transfer Line 2/13)\n• Beijing Daxing → Daxing Airport Express → Caoqiao (transfer Line 10/19)\n• Shanghai Pudong → Metro Line 2 → direct to city center\n• Shanghai Hongqiao → Metro Line 2/10 → direct to city center\n• Guangzhou Baiyun → Metro Line 3 → direct to city center\n• Chengdu Tianfu → Metro Line 18 → direct to city center\n• Qingdao Jiaodong → Metro Line 8 → direct to city center\n\nFare: usually ¥5-35, time: 40-90 minutes depending on distance.',
        ru: 'Большинство крупных международных аэропортов Китая подключены к метро — самый надёжный и дешёвый вариант.\n\nШаги:\n1. Следуйте указателям \"Метро/Metro\" до станции (обычно под терминалом или в транспортном хабе)\n2. Купите билет в автомате: выберите язык → станцию назначения → внесите оплату → заберите билет\n3. Приложите карту для входа, следуйте указателям пересадок\n4. Выходите на нужной станции\n\nОсновные линии:\n• Пекин Capital → Capital Airport Express → Дунчжимэнь (пересадка линия 2/13)\n• Пекин Daxing → Daxing Airport Express → Цаоцяо (пересадка линия 10/19)\n• Шанхай Пудун → линия 2 → прямо в центр\n• Гуанчжоу Байюнь → линия 3 → прямо в центр\n• Чэнду Тяньфу → линия 18 → прямо в центр\n• Циндао Цзяодун → линия 8 → прямо в центр\n\nЦена: обычно 5-35 ¥, время: 40-90 минут.'
      },
      tip: {
        zh: '地铁高峰时段（7-9点、17-19点）可能很挤，带大件行李要注意安全。部分机场地铁线路有"机场快线"，停站少、速度快，但票价稍贵。',
        en: 'During rush hours (7-9am, 5-7pm) metros can be very crowded — be careful with large luggage. Some airport lines have "Airport Express" trains with fewer stops, faster but slightly more expensive.',
        ru: 'В часы пик (7-9 утра, 17-19) метро бывает очень переполнено — берегите багаж. На некоторых линиях есть \"Airport Express\" — меньше остановок, быстрее, но чуть дороже.'
      }
    },
    {
      title: { zh: '方式二：机场大巴', en: 'Option 2: Airport Shuttle Bus', ru: 'Вариант 2: Аэропортовый автобус' },
      desc: {
        zh: '如果地铁不到你的目的地附近，机场大巴是很好的替代选择。\n\n操作步骤：\n1. 跟随"机场大巴/Airport Bus"指示牌，通常在到达大厅外有售票点\n2. 选择目的地方向的线路（售票点有线路图展示）\n3. 购票：现金或扫码支付，票价通常15-30元\n4. 上车后把行李放入行李舱\n5. 到达目的地站点下车\n\n机场大巴的优势：\n• 线路覆盖地铁不到的地方\n• 有行李存放空间\n• 一般走高速，速度较快\n• 班次间隔15-30分钟\n\n缺点：\n• 可能堵车（非高速路段）\n• 线路较少，不如地铁灵活',
        en: 'If the metro doesn\'t go near your destination, the airport shuttle bus is a great alternative.\n\nSteps:\n1. Follow "Airport Bus/机场大巴" signs, ticket counters are usually outside the arrivals hall\n2. Choose a route heading toward your destination (route maps are displayed)\n3. Buy ticket: cash or QR payment, usually ¥15-30\n4. Board and put luggage in the luggage compartment\n5. Get off at your destination stop\n\nAdvantages:\n• Covers areas metro doesn\'t reach\n• Luggage storage space\n• Usually takes expressways, fairly fast\n• Departures every 15-30 minutes\n\nDisadvantages:\n• Can get stuck in traffic (non-expressway sections)\n• Fewer routes than metro',
        ru: 'Если метро не идёт к вашему месту назначения, аэропортовый автобус — отличная альтернатива.\n\nШаги:\n1. Следуйте указателям \"Airport Bus/机场大巴\", кассы обычно у выхода из зала прилёта\n2. Выберите маршрут в нужном направлении (схемы выставлены)\n3. Купите билет: наличные или QR-оплата, обычно 15-30 ¥\n4. Погрузите багаж в багажный отсек\n5. Выйдите на нужной остановке\n\nПреимущества:\n• Покрывает зоны, куда не ходит метро\n• Место для багажа\n• Обычно идёт по скоростным трассам\n• Отправления каждые 15-30 минут\n\nНедостатки:\n• Возможны пробки\n• Меньше маршрутов, чем метро'
      }
    },
    {
      title: { zh: '方式三：出租车', en: 'Option 3: Taxi', ru: 'Вариант 3: Такси' },
      desc: {
        zh: '如果行李多、目的地偏，或者深夜到达没有公共交通，出租车是最省心的选择。\n\n操作步骤：\n1. 跟随"出租车/Taxi"指示牌，到指定的出租车排队点\n2. 排队等候，按顺序上车\n3. 上车后告诉司机目的地（出示中文地址纸条或手机截图）\n4. 到达后看计价器付款：起步价+里程费，通常50-200元（视距离而定）\n5. 索要发票（红色小纸条），上面有车号和费用明细\n\n注意事项：\n• 只坐正规出租车（有顶灯、计价器、公司标识）\n•  insist使用计价器（"打表"），不要接受"一口价"\n• 夜间（23:00-5:00）有夜间附加费，约加收20-30%\n• 高速通行费需要乘客额外支付\n• 把发票留好，万一落下东西可以凭发票找车',
        en: 'If you have lots of luggage, your destination is off the beaten path, or you arrive late at night when public transport has stopped, taxi is the most hassle-free option.\n\nSteps:\n1. Follow "Taxi/出租车" signs to the designated taxi queue\n2. Wait in line, board in order\n3. Show the driver your destination (present the Chinese address on paper or phone screenshot)\n4. Pay by meter upon arrival: flag-fall + distance fare, usually ¥50-200 depending on distance\n5. Ask for a receipt (small red slip) with car number and fare details\n\nImportant notes:\n• Only take official taxis (with roof light, meter, company logo)\n• Insist on using the meter ("打表"), don\'t accept flat-rate offers from touts\n• Night surcharge (23:00-5:00) adds about 20-30%\n• Expressway tolls are paid by passengers\n• Keep the receipt in case you leave something in the taxi',
        ru: 'Если много багажа, место назначения далеко, или вы прилетели поздно ночью — такси самый простой вариант.\n\nШаги:\n1. Следуйте указателям \"Taxi/出租车\" к очереди такси\n2. Дождитесь очереди, садитесь по порядку\n3. Покажите водителю адрес (китайский адрес на бумажке или скриншот)\n4. Оплата по счётчику: обычно 50-200 ¥ в зависимости от расстояния\n5. Возьмите чек (маленькая красная квитанция) с номером машины\n\nВажно:\n• Только официальные такси (с фонарём, счётчиком, логотипом)\n• Настаивайте на счётчике (\"打表\"), не соглашайтесь на фиксированную цену\n• Ночной тариф (23:00-5:00) наценка 20-30%\n• Платные дороги оплачивает пассажир\n• Сохраните чек — по нему можно найти машину, если что-то забыли'
      }
    },
    {
      title: { zh: '方式四：网约车（滴滴出行）', en: 'Option 4: Ride-hailing (DiDi)', ru: 'Вариант 4: Каршеринг (DiDi)' },
      desc: {
        zh: '如果你有支付宝或微信，可以用滴滴出行App叫网约车，比出租车更方便，因为不需要语言沟通。\n\n操作步骤：\n1. 打开"滴滴出行"App（或支付宝/微信内的滴滴小程序）\n2. 系统自动定位你在机场，选择上车点（跟着App提示走）\n3. 输入目的地地址\n4. 选择车型：\n   • 快车（Express）：最便宜，普通轿车\n   • 专车（Premier）：稍贵，更好的车和服务\n   • 拼车（Pool）：最便宜，和其他乘客共享\n5. 确认叫车，等司机接单\n6. 核对车牌号和车型，上车\n7. 到达后自动扣款（或手动确认支付）\n\n网约车优势：\n• 不需要说中文，地址输入即可\n• 价格透明，提前知道费用\n• 有行程记录和电子发票\n• 可以提前预约（预约接机）',
        en: 'If you have Alipay or WeChat, you can use DiDi (China\'s Uber) to call a ride — more convenient than taxis since no language barrier.\n\nSteps:\n1. Open DiDi app (or the DiDi mini-program inside Alipay/WeChat)\n2. System auto-locates you at the airport, select pickup point (follow app directions)\n3. Enter destination address\n4. Choose car type:\n   • Express: cheapest, standard sedan\n   • Premier: slightly pricier, better car and service\n   • Pool: cheapest, share with other passengers\n5. Confirm ride, wait for driver to accept\n6. Verify license plate and car model, board\n7. Auto-deducted on arrival (or manually confirm payment)\n\nAdvantages:\n• No need to speak Chinese, just enter the address\n• Transparent pricing, know the cost upfront\n• Trip history and e-receipts\n• Can book in advance (airport pickup reservation)',
        ru: 'Если у вас есть Alipay или WeChat, можно вызвать машину через DiDi (китайский Uber) — удобнее такси, не нужно говорить по-китайски.\n\nШаги:\n1. Откройте приложение DiDi (или мини-программу в Alipay/WeChat)\n2. Система определит вас в аэропорту, выберите точку посадки\n3. Введите адрес назначения\n4. Выберите тип:\n   • Express: самый дешёвый, обычный седан\n   • Premier: чуть дороже, лучший автомобиль\n   • Pool: самый дешёвый, попутчики\n5. Подтвердите, ждите принятия заказа\n6. Проверьте номер машины, садитесь\n7. Авто списание по прибытии\n\nПреимущества:\n• Не нужен китайский язык\n• Прозрачная цена\n• История поездок и электронные чеки\n• Можно заказать заранее'
      },
      tip: {
        zh: '网约车上车点通常在停车楼的指定区域，跟着App指引走即可。深夜到达建议提前预约。',
        en: 'Ride-hailing pickup points are usually on designated levels of parking structures — follow the app directions. For late-night arrivals, consider booking in advance.',
        ru: 'Точки посадки обычно на определённых уровнях парковки — следуйте указаниям приложения. Для ночных прилётов лучше заказать заранее.'
      }
    },
    {
      title: { zh: '到达后的注意事项', en: 'After You Arrive', ru: 'После прибытия' },
      desc: {
        zh: '到达市区后，记得做这几件事：\n\n1. 给家人/学校报平安\n2. 确认手机有网络（如果还没买SIM卡，先连WiFi）\n3. 如果在校园内，找到宿舍楼或国际学生办公室\n4. 如果在外面，确认住处地址和入住方式\n5. 调整时差、休息好\n\n接下来你需要尽快完成：买手机卡→注册支付宝→注册微信，这样你在中国的基本生活就能运转起来了。',
        en: 'After arriving in the city, remember to:\n\n1. Let family/school know you\'ve arrived safely\n2. Make sure your phone has internet (if you haven\'t bought a SIM card yet, connect to WiFi first)\n3. If on campus, find your dormitory building or international student office\n4. If off-campus, confirm your address and check-in procedure\n5. Adjust to jet lag, get good rest\n\nNext steps: buy a SIM card → set up Alipay → set up WeChat — then your basic life in China will be up and running.',
        ru: 'После прибытия в город:\n\n1. Сообщите семье/университету, что вы прибыли\n2. Убедитесь, что телефон подключён к интернету (если ещё нет SIM — подключитесь к WiFi)\n3. Если в кампусе — найдите общежитие или офис международных студентов\n4. Если вне кампуса — уточните адрес и порядок заселения\n5. Адаптируйтесь к часовому поясу, отдохните\n\nСледующие шаги: купить SIM-карту → настроить Alipay → настроить WeChat — и базовая жизнь в Китае будет работать.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '我完全不会中文，怎么和出租车司机沟通？', en: 'I don\'t speak Chinese at all — how do I communicate with taxi drivers?', ru: 'Я совсем не говорю по-китайски — как объясниться с таксистом?' },
      a: { zh: '把中文地址给他看就行（手机截图或纸条）。如果还是不行，打开高德地图，让司机看导航。也可以在机场找志愿者或工作人员帮忙写地址。', en: 'Just show the Chinese address (screenshot or paper). If that fails, open Amap/Baidu Maps and let the driver follow the navigation. You can also ask airport volunteers or staff to help write the address.', ru: 'Просто покажите китайский адрес (скриншот или бумажку). Если не получается — откройте Amap и пусть водитель следует навигации. Можно попросить волонтёров в аэропорту помочь написать адрес.' }
    },
    {
      q: { zh: '机场有免费WiFi吗？', en: 'Is there free WiFi at the airport?', ru: 'Есть ли бесплатный WiFi в аэропорту?' },
      a: { zh: '有的。中国大部分国际机场提供免费WiFi，通常需要手机号验证（连接后弹出认证页面，输入中国手机号获取验证码）。如果没有中国手机号，可以找机场服务台或工作人员求助。', en: 'Yes. Most major Chinese airports offer free WiFi, usually requiring a phone number for verification (a captive portal pops up — enter a Chinese number to get a code). If you don\'t have a Chinese number yet, ask airport service desks for help.', ru: 'Да. Большинство аэропортов предлагают бесплатный WiFi, обычно нужна верификация по номеру телефона. Если китайского номера нет — обратитесь к стойке обслуживания.' }
    },
    {
      q: { zh: '深夜到达（凌晨1-5点）怎么办？', en: 'What if I arrive very late (1-5am)?', ru: 'Что делать, если прилечу глубокой ночью (1-5 утра)?' },
      a: { zh: '深夜到达地铁可能已停运。推荐方案：1）提前联系学校安排接机；2）在机场到达层的出租车排队点打车；3）提前预约滴滴网约车。不建议深夜独自打车去陌生地方，安全第一。', en: 'Metro may have stopped running late at night. Options: 1) Contact school in advance for airport pickup; 2) Take taxi from the designated queue at arrivals; 3) Pre-book DiDi. Avoid taking unlicensed rides late at night — safety first.', ru: 'Ночью метро может не работать. Варианты: 1) Запросите встречу в аэропорту у университета; 2) Такси из официальной очереди; 3) Предварительный заказ DiDi. Не берите неофициальные такси ночью — безопасность прежде всего.' }
    },
    {
      q: { zh: '从机场能直接去学校吗？', en: 'Can I go directly to my school from the airport?', ru: 'Можно ли поехать прямо в университет из аэропорта?' },
      a: { zh: '当然可以，只要有地址就行。建议提前和学校国际学生办公室联系，确认：1）是否有人接机；2）宿舍是否可以提前入住；3）需要带哪些材料（护照、录取通知书、照片等）。', en: 'Yes, as long as you have the address. Contact your school\'s international student office in advance to confirm: 1) Whether there\'s airport pickup; 2) Whether you can check into the dorm early; 3) What documents to bring (passport, admission letter, photos, etc.).', ru: 'Да, если есть адрес. Свяжитесь с офисом международных студентов заранее: 1) Есть ли встреча в аэропорту; 2) Можно ли заселиться раньше; 3) Какие документы взять (паспорт, письмо о зачислении, фото).' }
    }
  ],
  nextGuides: ['buy-sim-card', 'setup-alipay', 'setup-wechat']
};
