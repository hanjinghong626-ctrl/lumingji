// 鹿鸣集 · 12306 铁路购票使用指南
// 版本：2026-08-09

export default {
  id: '12306',
  version: '2026-08-09',
  title: {
    zh: '12306 火车票购买指南',
    en: '12306 Train Ticket Guide',
    ru: 'Руководство по покупке ж/д билетов (12306)'
  },
  desc: {
    zh: '中国铁路官方购票平台。买高铁票、火车票的唯一官方渠道，支持电子客票直接刷身份证/护照进站。',
    en: 'Official China Railway ticketing platform. The only official channel for high-speed rail and train tickets, supporting e-tickets with ID/passport for entry.',
    ru: 'Официальная платформа ж/д билетов Китая. Единственный официальный канал покупки билетов, поддержка электронных билетов по паспорту.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id566550558',
    android_google: 'https://play.google.com/store/apps/details?id=com.MobileTicket',
    android_cn: 'https://www.12306.cn/index/',
    note: {
      zh: '应用商店搜索"铁路12306"下载，认准蓝色官方图标，避免下载到第三方抢票App。也可以直接使用网页版 www.12306.cn。',
      en: 'Search "铁路12306" in your app store — look for the official blue icon, avoid third-party ticket-grabbing apps. You can also use the website: www.12306.cn.',
      ru: 'Ищите "铁路12306" в магазине приложений — ищите официальный синий значок, избегайте сторонних приложений. Также можно использовать сайт: www.12306.cn.'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '注册12306账号',
        en: 'Register a 12306 Account',
        ru: 'Регистрация аккаунта 12306'
      },
      desc: {
        zh: '打开App或访问 www.12306.cn，点击"注册"。填写手机号（中国号码）获取验证码，设置密码。然后完成"实名认证"——选择证件类型为"护照"，填写护照号、姓名、国籍、出生日期。审核通常即时通过或需要1个工作日。',
        en: 'Open the app or visit www.12306.cn, tap "Register". Enter your phone number (Chinese number) for verification code, set a password. Then complete "Real-name Verification" — select "Passport" as ID type, fill in passport number, name, nationality, date of birth. Review is usually instant or within 1 business day.',
        ru: 'Откройте приложение или www.12306.cn, нажмите "Регистрация". Введите китайский номер для SMS, задайте пароль. Затем пройдите верификацию — выберите "Паспорт", заполните номер, имя, гражданство, дату рождения. Проверка обычно мгновенная или в течение 1 дня.'
      },
      tip: {
        zh: '⚠️ 姓名必须与护照上完全一致。外国人姓名较长时注意不要截断。如遇问题可去火车站售票窗口办理身份核验。',
        en: '⚠️ Name must exactly match your passport. For long foreign names, make sure nothing is truncated. If issues arise, go to a train station ticket window for in-person verification.',
        ru: '⚠️ Имя должно точно совпадать с паспортом. Для длинных имён убедитесь, что ничего не обрезано. При проблемах — обратитесь в кассу вокзала.'
      }
    },
    {
      title: {
        zh: '搜索车票',
        en: 'Search for Tickets',
        ru: 'Поиск билетов'
      },
      desc: {
        zh: '首页输入出发站和到达站（支持中文/拼音输入，如输入"qingdao"会出现"青岛"），选择出发日期，点击"查询车票"。系统显示所有车次的出发/到达时间、历时、余票和票价信息。',
        en: 'Enter departure and arrival stations (supports Chinese/pinyin input, e.g., typing "qingdao" shows "青岛"), select travel date, tap "Search Tickets". The system displays all trains\' departure/arrival times, duration, remaining tickets, and fares.',
        ru: 'Введите станцию отправления и прибытия (поддерживается пиньинь, например "qingdao" покажет "青岛"), выберите дату, нажмите "Поиск". Система покажет все поезда: время, длительность, наличие мест, цены.'
      },
      tip: {
        zh: '💡 提前了解车站全称：青岛有"青岛站"（市中心）和"青岛北站"（城阳区），别选错站。高铁一般在北站。',
        en: '💡 Know the station names: Qingdao has "青岛站" (city center) and "青岛北站" (Chengyang district) — don\'t pick the wrong one. High-speed trains usually depart from the North Station.',
        ru: '💡 Знать название станции: в Циндао есть "青岛站" (центр) и "青岛北站" (район Чэнъян) — не перепутайте. Скоростные обычно с Северного вокзала.'
      }
    },
    {
      title: {
        zh: '选择座位类型并下单',
        en: 'Select Seat Type and Order',
        ru: 'Выбор типа места и заказ'
      },
      desc: {
        zh: '高铁/动车座位等级：①商务座（最豪华，独立空间）②一等座（宽敞舒适）③二等座（最常见，性价比高）。普通列车有硬座/软座/硬卧/软卧。选择座位类型后点击"预订"，选择乘车人，提交订单。',
        en: 'High-speed train seat classes: ①Business Class (most luxurious, private space) ②First Class (spacious, comfortable) ③Second Class (most common, best value). Regular trains have hard seat/soft seat/hard sleeper/soft sleeper. Select seat type, tap "Book", choose passenger, submit order.',
        ru: 'Классы мест скоростных поездов: ①Бизнес (роскошь, личное пространство) ②Первый (просторно, комфортно) ③Второй (самый частый, лучшее соотношение цена/качество). Обычные поезда: жёсткие/мягкие сиденья, жёсткие/мягкие спальные. Выберите тип и нажмите "Заказать".'
      },
      tip: {
        zh: '💡 二等座价格约为高铁票最基础的价位。青岛→济南约1.5小时，二等座约¥95；青岛→北京约5-6小时，二等座约¥350。',
        en: '💡 Second Class is the base fare. Qingdao→Jinan ~1.5hrs, Second Class ~¥95; Qingdao→Beijing ~5-6hrs, Second Class ~¥350.',
        ru: '💡 Второй класс — базовый тариф. Циндао→Цзинань ~1.5ч, второй класс ~¥95; Циндао→Пекин ~5-6ч, второй класс ~¥350.'
      }
    },
    {
      title: {
        zh: '在线支付',
        en: 'Online Payment',
        ru: 'Онлайн-оплата'
      },
      desc: {
        zh: '提交订单后需在30分钟内完成支付，否则车票自动取消。支持微信支付、支付宝、银联卡等方式。支付成功后会收到短信通知和App内电子客票。',
        en: 'After submitting, complete payment within 30 minutes or the ticket is automatically cancelled. Supports WeChat Pay, Alipay, UnionPay card, etc. After payment, you\'ll receive an SMS notification and e-ticket in the app.',
        ru: 'После заказа нужно оплатить в течение 30 минут, иначе билет отменяется. Поддерживается WeChat Pay, Alipay, UnionPay. После оплаты — SMS и электронный билет в приложении.'
      },
      tip: {
        zh: '⚠️ 中国高铁已全面实行电子客票，不需要取纸质票。进站时直接在闸机刷护照（或身份证）即可通过。',
        en: '⚠️ China\'s high-speed rail has fully switched to e-tickets — no need for paper tickets. Just scan your passport (or ID card) at the gate to enter.',
        ru: '⚠️ Скоростные поезда полностью перешли на электронные билеты — бумажные не нужны. Просто приложите паспорт к турникету.'
      }
    },
    {
      title: {
        zh: '乘车流程',
        en: 'Boarding Process',
        ru: 'Процесс посадки'
      },
      desc: {
        zh: '出发当天：①提前30-60分钟到达火车站 ②在进站口排队，刷护照通过实名制验证闸机 ③通过安检（行李过X光机，人过安检门）④根据车票信息找到对应的候车厅和检票口 ⑤开始检票时排队刷护照通过检票闸机 ⑥找到车厢和座位号就座。',
        en: 'On departure day: ①Arrive at the station 30-60 minutes early ②Queue at the entrance, scan your passport at the real-name verification gate ③Pass security screening (luggage through X-ray, person through metal detector) ④Find your waiting area and gate based on ticket info ⑤When boarding starts, queue and scan passport at the gate ⑥Find your carriage and seat number.',
        ru: 'В день отправления: ①Приехать за 30-60 минут ②Очередь на входе, приложить паспорт к турникету ③Досмотр (багаж через рентген, человек через рамку) ④Найти зал ожидания и выход по информации билета ⑤При посадке — очередь и паспорт к турникету ⑥Найти вагон и место.'
      },
      tip: {
        zh: '💡 中国火车站安检类似机场，液体、刀具等受限。不要携带超过100ml的液体容器（如大瓶洗发水），建议放行李箱托运。',
        en: '💡 Chinese train station security is similar to airports — liquids and sharp objects are restricted. Don\'t carry containers over 100ml (like large shampoo bottles); pack them in checked luggage.',
        ru: '💡 Досмотр на вокзале аналогичен аэропорту — жидкости и острые предметы ограничены. Не носите ёмкости более 100мл, кладите в багаж.'
      }
    }
  ],
  coreFeatures: [
    {
      icon: '🚄',
      title: { zh: '购票', en: 'Ticket Purchase', ru: 'Покупка билетов' },
      desc: { zh: '查询、购买全国所有高铁/动车/普速列车车票', en: 'Search and buy tickets for all high-speed/regular trains nationwide', ru: 'Поиск и покупка билетов на все поезда по стране' }
    },
    {
      icon: '🔄',
      title: { zh: '改签/退票', en: 'Change/Refund', ru: 'Обмен/Возврат' },
      desc: { zh: '在线改签其他车次或退票，退票根据时间收取不同手续费', en: 'Change trains or get refunds online; refund fees vary by timing', ru: 'Онлайн обмен или возврат; сбор зависит от сроков' }
    },
    {
      icon: '📋',
      title: { zh: '订单管理', en: 'Order Management', ru: 'Управление заказами' },
      desc: { zh: '查看历史订单、电子客票、报销凭证', en: 'View order history, e-tickets, reimbursement receipts', ru: 'История заказов, электронные билеты, чеки' }
    },
    {
      icon: '🔔',
      title: { zh: '候补购票', en: 'Waitlist Booking', ru: 'Лист ожидания' },
      desc: { zh: '无票时提交候补订单，有人退票时自动帮你抢', en: 'When sold out, submit waitlist — auto-books when someone cancels', ru: 'При распродаже — лист ожидания, автоматическая покупка при отмене' }
    }
  ],
  tips: [
    {
      title: { zh: '购票时间技巧', en: 'Ticket Buying Tips', ru: 'Советы по покупке' },
      content: {
        zh: '12306一般提前15天放票（具体看车站）。热门线路（如青岛→北京）开售后很快售罄。建议：①设置放票提醒 ②抢票当天提前登录 ③没抢到就用"候补购票"功能。春运（春节前15天）和国庆（9月底）期间尤其难抢。',
        en: '12306 generally releases tickets 15 days in advance (varies by station). Popular routes (like Qingdao→Beijing) sell out fast. Tips: ①Set release time reminders ②Log in early on release day ③If sold out, use the "Waitlist" feature. Spring Festival (15 days before CNY) and National Day (late Sept) are especially hard to book.',
        ru: '12306 выпускает билеты за 15 дней (зависит от станции). Популярные маршруты (Циндао→Пекин) быстро раскупаются. Советы: ①Напоминание о продаже ②Войти заранее ③Нет мест — "лист ожидания". Весенний фестиваль и Национальный день — особенно трудно.'
      }
    },
    {
      title: { zh: '护照过闸技巧', en: 'Passport Gate Tips', ru: 'Как проходить с паспортом' },
      content: {
        zh: '外国旅客刷护照进站时，将护照信息页朝下放在闸机扫描区（有护照标志的位置），等待识别。如果闸机无法识别，走人工通道，工作人员会手动核验。首次使用护照购票的旅客建议第一次走人工通道，之后护照信息已录入系统，闸机通过率会提高。',
        en: 'For passport holders, place your passport info page face-down on the scanner area (marked with passport icon) and wait for recognition. If the gate can\'t read it, use the manual lane where staff will verify manually. First-time users are advised to use the manual lane initially; after your passport is registered, gate recognition improves.',
        ru: 'Приложите страницу паспорта данными вниз к сканеру турникета (значок паспорта) и подождите. Если не считывается — идите в ручной коридор. В первый раз лучше через ручной коридор; после регистрации паспорт будет лучше считываться.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '护照能在自助售票机上买票吗？', en: 'Can I buy tickets at self-service machines with a passport?', ru: 'Можно ли купить билет в автомате по паспорту?' },
      a: {
        zh: '大部分自助售票机只支持中国身份证。持护照的旅客建议通过12306 App网上购票，或去人工售票窗口购票。部分新建车站的升级自助机已支持护照，但不保证所有车站都有。',
        en: 'Most self-service machines only accept Chinese ID cards. Passport holders should buy tickets via the 12306 app or at manual ticket windows. Some newer stations\' upgraded machines support passports, but it\'s not guaranteed everywhere.',
        ru: 'Большинство автоматов принимают только китайские ID-карты. С паспортом — покупайте через приложение 12306 или в кассе. Некоторые новые автоматы поддерживают паспорта, но не гарантировано на всех станциях.'
      }
    },
    {
      q: { zh: '可以买学生票吗？', en: 'Can I get student discount tickets?', ru: 'Можно ли купить студенческий билет?' },
      a: {
        zh: '中国铁路学生票优惠仅适用于中国籍学生且需有学生证上的火车票优惠卡（内含芯片）。留学生暂不适用学生票优惠。不过高铁二等座本身价格合理，可以考虑购买高铁定期票/计次票来节省通勤费用。',
        en: 'China Railway student discounts only apply to Chinese students with a student train card (embedded chip). International students are not eligible for this discount. However, Second Class high-speed rail fares are already reasonable. Consider periodic/commuter passes if you travel frequently on the same route.',
        ru: 'Студенческая скидка только для китайских студентов с картой учащегося. Иностранные студенты не имеют права на скидку. Но цены на второй класс скоростных разумные. При частых поездках рассмотрите абонементы.'
      }
    },
    {
      q: { zh: '没赶上火车怎么办？', en: 'What if I miss my train?', ru: 'Что делать, если опоздал на поезд?' },
      a: {
        zh: '列车发车后，可以在12306 App上改签到当天其他有余票的车次（不收取改签费，但可能需要补差价）。如果当天没有后续车次，车票作废。建议提前至少30分钟到达车站，留够安检和候车时间。',
        en: 'After departure, you can change to another train on the same day with available seats via the 12306 app (no change fee, but may need to pay fare difference). If no more trains that day, the ticket is void. Arrive at least 30 minutes early to allow time for security and boarding.',
        ru: 'После отправления можно обменять на другой поезд в тот же день через 12306 (без комиссии за обмен, но доплата за разницу). Если больше нет поездов — билет недействителен. Приезжайте за 30 минут до отправления.'
      }
    }
  ],
  relatedGuides: ['airport-to-city', 'first-week-checklist']
};
