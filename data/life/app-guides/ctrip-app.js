// 鹿鸣集 · 携程旅行使用指南
// 版本：2026-08-10

export default {
  id: 'ctrip-app',
  version: '2026-08-10',
  title: {
    zh: '携程旅行使用指南',
    en: 'Ctrip/Trip.com Travel Guide',
    ru: 'Руководство по Ctrip/Trip.com'
  },
  desc: {
    zh: '中国最大的一站式旅行平台——订机票、订酒店、买景点门票、规划行程，旅行所需一应俱全。留学生假期出行必备。',
    en: 'China\'s largest all-in-one travel platform — book flights, hotels, attraction tickets, plan itineraries. Essential for international students traveling during holidays.',
    ru: 'Крупнейшая туристическая платформа Китая — авиабилеты, отели, билеты в достопримечательности, планирование поездок. Необходима для студентов в путешествиях.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id362038458',
    android_google: 'https://play.google.com/store/apps/details?id=ctrip.android.view',
    android_cn: 'https://www.ctrip.com/',
    note: {
      zh: '应用商店搜索"携程旅行"下载。携程国际版是Trip.com（有英文版），但中国版功能更全、价格更优。',
      en: 'Search "携程旅行" in your app store. The international version is Trip.com (English available), but the Chinese version has more features and better prices.',
      ru: 'Ищите "携程旅行" в магазине приложений. Международная версия — Trip.com (есть английский), но китайская версия функциональнее и дешевле.'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '下载并注册',
        en: 'Download and Register',
        ru: 'Скачайте и зарегистрируйтесь'
      },
      desc: {
        zh: '下载安装后使用手机号注册，或通过微信/支付宝一键登录。注册后建议先完善个人信息——包括护照/身份证号、常用手机号，这些在订机票和酒店时需要用到。',
        en: 'After installing, register with your phone number or log in via WeChat/Alipay. After registration, complete your profile — including passport/ID number and phone number, which are needed for booking flights and hotels.',
        ru: 'После установки зарегистрируйтесь по телефону или войдите через WeChat/Alipay. Заполните профиль — паспорт/ID и номер телефона понадобятся для бронирования.'
      },
      tip: {
        zh: '💡 第一次用建议先把护照信息存好（姓名、护照号、有效期、国籍），买机票时可以直接选择，不用每次手动输入。',
        en: '💡 On first use, save your passport info (name, passport number, expiry, nationality) — you can select it when booking flights without typing every time.',
        ru: '💡 При первом использовании сохраните данные паспорта (имя, номер, срок действия, гражданство) — при бронировании авиабилетов не нужно вводить каждый раз.'
      }
    },
    {
      title: {
        zh: '订机票',
        en: 'Book Flights',
        ru: 'Бронирование авиабилетов'
      },
      desc: {
        zh: '首页点击"机票"进入——选择出发城市、到达城市、出发日期 → 搜索。结果按价格/时间/航空公司排列，可以筛选直飞/中转、时间段、航空公司等。选好航班后填写乘客信息（存过的护照信息会自动填充）→ 选择座位（可选）→ 支付。电子票会发送到你的手机和邮箱。',
        en: 'Tap "Flights" on homepage — select departure city, arrival city, departure date → search. Results sorted by price/time/airline, filter by direct/transfer, time slot, airline. After selecting a flight, fill in passenger info (saved passport info auto-fills) → select seat (optional) → pay. E-ticket sent to your phone and email.',
        ru: 'Нажмите "Авиабилеты" — выберите город вылета/прилёта, дату → поиск. Результаты по цене/времени/авиакомпании, фильтр прямой/пересадка. После выбора — данные пассажира (паспорт автозаполнение) → место (опционально) → оплата. Электронный билет на телефон и email.'
      },
      tip: {
        zh: '💡 机票价格波动大——建议提前2-4周买国内航班，提前1-3个月买国际航班。可以用携程的"低价日历"功能看哪天最便宜。外国人买国内航班用护照，买国际航班也用护照（确保姓名与护照完全一致）。',
        en: '💡 Flight prices fluctuate a lot — book domestic flights 2-4 weeks ahead, international 1-3 months ahead. Use the "Low Price Calendar" to find the cheapest days. Foreigners: use passport for both domestic and international flights (ensure name matches passport exactly).',
        ru: '💡 Цены сильно колеблются — внутренние за 2-4 недели, международные за 1-3 месяца. "Календарь низких цен" покажет самые дешёвые дни. Иностранцы: паспорт для внутренних и международных (имя точно как в паспорте).'
      }
    },
    {
      title: {
        zh: '订酒店',
        en: 'Book Hotels',
        ru: 'Бронирование отелей'
      },
      desc: {
        zh: '首页点击"酒店"——输入目的地城市、入住/退房日期 → 搜索。筛选条件包括：价格区间、星级、评分、位置区域等。每个酒店展示：价格、评分、位置地图、设施、真实住客照片。选择后填写入住人信息→支付。预订确认短信会发送到你手机。',
        en: 'Tap "Hotels" on homepage — enter destination city, check-in/check-out dates → search. Filters include: price range, star rating, review score, location area. Each hotel shows: price, rating, location map, facilities, real guest photos. Select and fill in guest info → pay. Confirmation SMS sent to your phone.',
        ru: 'Нажмите "Отели" — введите город, даты заезда/выезда → поиск. Фильтры: цена, звёзды, рейтинг, район. Каждый отель: цена, рейтинг, карта, удобства, фото гостей. Заполните данные гостя → оплата. Подтверждение SMS.'
      },
      tip: {
        zh: '⚠️ 外国人住酒店注意：不是所有酒店都能接待外宾（部分小旅馆只有"内宾"资质）。预订时在筛选条件中勾选"接待外宾"，或看酒店详情是否标注可以接待外国人。如果不确定，下单前打电话给酒店确认。',
        en: '⚠️ Foreigner hotel tip: Not all hotels can accept foreign guests (some small inns only have "domestic guest" licenses). Filter by "Accepts Foreign Guests" in search, or check hotel details. If unsure, call the hotel to confirm before booking.',
        ru: '⚠️ Не все отели принимают иностранцев (некоторые малые гостиницы имеют лицензию только для граждан). Используйте фильтр "Принимает иностранцев" или проверьте детали. При сомнениях — позвоните в отель перед бронированием.'
      }
    },
    {
      title: {
        zh: '买景点门票',
        en: 'Buy Attraction Tickets',
        ru: 'Билеты в достопримечательности'
      },
      desc: {
        zh: '首页点击"景点/门票"或搜索景点名称——可以看到景点介绍、门票价格、开放时间、游客评价。在线购票通常比现场买更便宜（有时优惠10-30%）。购买后生成电子二维码，到景区直接扫码入园，不需要排队买票。',
        en: 'Tap "Attractions/Tickets" on homepage or search by name — see attraction intro, ticket prices, opening hours, visitor reviews. Online tickets are usually cheaper than on-site (sometimes 10-30% off). After purchase, an e-QR code is generated — scan directly at the entrance, no need to queue for tickets.',
        ru: 'Нажмите "Достопримечательности/Билеты" или ищите по названию — описание, цены, часы работы, отзывы. Онлайн обычно дешевле (иногда на 10-30%). После покупки — QR-код, сканирование на входе без очереди.'
      },
      tip: {
        zh: '💡 很多景点对外国人需要查验护照——在线购票后，到现场记得带护照原件。部分景点外国人门票政策不同（如西藏某些地区），提前在携程查看注意事项。',
        en: '💡 Many attractions require passport verification for foreigners — bring your original passport when visiting. Some attractions have different policies for foreigners (e.g., certain areas in Tibet), check Ctrip notes beforehand.',
        ru: '💡 Многие достопримечательности требуют паспорт для иностранцев — берите оригинал паспорта. Некоторые имеют особые правила (например, отдельные районы Тибета), проверьте примечания на Ctrip.'
      }
    },
    {
      title: {
        zh: '行程管理',
        en: 'Trip Management',
        ru: 'Управление поездкой'
      },
      desc: {
        zh: '在"我的"页面可以查看所有订单（机票、酒店、景点）。携程还提供智能行程规划功能——输入目的地和天数，AI自动推荐行程安排。出行前可以在App中查看电子票、入住凭证、景点二维码，全部集中管理。',
        en: 'In "My" page, view all orders (flights, hotels, attractions). Ctrip also offers smart itinerary planning — input destination and days, AI auto-generates an itinerary. Before traveling, check e-tickets, check-in vouchers, and attraction QR codes all in one place.',
        ru: 'В "Мои" — все заказы (авиа, отели, билеты). Ctrip предлагает умное планирование — введите направление и дни, AI составит маршрут. Перед поездкой — электронные билеты, ваучеры, QR-коды в одном месте.'
      },
      tip: {
        zh: '💡 建议在App中开启"消息通知"——航班延误/取消、酒店入住提醒等都会推送通知，不会错过重要信息。',
        en: '💡 Enable push notifications in the app — flight delays/cancellations, hotel check-in reminders, and other important updates will be pushed to you.',
        ru: '💡 Включите push-уведомления — задержки/отмены рейсов, напоминания о заселении и другие важные уведомления.'
      }
    }
  ],
  coreFeatures: [
    {
      icon: '✈️',
      title: { zh: '机票预订', en: 'Flight Booking', ru: 'Авиабилеты' },
      desc: { zh: '国内外航线全覆盖，低价日历比价', en: 'Domestic and international routes, low price calendar', ru: 'Внутренние и международные, календарь цен' }
    },
    {
      icon: '🏨',
      title: { zh: '酒店预订', en: 'Hotel Booking', ru: 'Бронирование отелей' },
      desc: { zh: '全球酒店覆盖，真实评价参考', en: 'Global hotel coverage, real guest reviews', ru: 'Отели по всему миру, отзывы гостей' }
    },
    {
      icon: '🎫',
      title: { zh: '景点门票', en: 'Attraction Tickets', ru: 'Билеты в достопримечательности' },
      desc: { zh: '在线购票扫码入园，比现场更优惠', en: 'Buy online, scan to enter, cheaper than on-site', ru: 'Онлайн-билеты, вход по QR, дешевле' }
    },
    {
      icon: '🗺️',
      title: { zh: '行程规划', en: 'Trip Planning', ru: 'Планирование поездок' },
      desc: { zh: 'AI推荐行程，攻略社区参考', en: 'AI itinerary recommendations, community guides', ru: 'AI-маршруты, рекомендации сообщества' }
    },
    {
      icon: '🚗',
      title: { zh: '接送机/租车', en: 'Airport Transfer/Car Rental', ru: 'Трансфер/Аренда авто' },
      desc: { zh: '接机送机、自驾租车一站式服务', en: 'Airport pickup/drop-off, self-drive car rental', ru: 'Трансфер в аэропорт, аренда авто' }
    }
  ],
  tips: [
    {
      title: { zh: '携程省钱技巧', en: 'Money-Saving Tips on Ctrip', ru: 'Экономия на Ctrip' },
      content: {
        zh: '①机票用"低价日历"功能找最便宜的日期 ②酒店关注"限时特惠"和"今夜特价"（当天入住有时大幅降价）③景点门票在线购买通常比窗口便宜 ④开通"携程超级会员"（年费约99元），享专属折扣和积分加倍 ⑤火车票+酒店的套餐往往比单订便宜。',
        en: '①Use "Low Price Calendar" for cheapest flight dates ②Watch for "Flash Deals" and "Tonight\'s Rate" (same-day hotel check-in can be heavily discounted) ③Attraction tickets online usually cheaper than window ④Get "Ctrip Super Member" (~¥99/year) for exclusive discounts ⑤Flight+Hotel bundles often cheaper than booking separately.',
        ru: '①"Календарь низких цен" для дешёвых дат ②"Акции" и "Сегодняшние цены" (скидки на день заезда) ③Билеты онлайн дешевле ④"Супер-членство" (~99¥/год) со скидками ⑤Пакеты авиа+отель дешевле раздельного бронирования.'
      }
    },
    {
      title: { zh: '外国人出行注意', en: 'Travel Tips for Foreigners', ru: 'Советы для иностранцев' },
      content: {
        zh: '①买机票确保姓名与护照完全一致（包括空格）②订酒店确认"可接待外宾"③部分景区需护照购票（不是所有都支持护照在线购票，可能需到窗口）④高铁票用护照在12306购买更直接，携程也可以但偶尔有证件类型限制 ⑤出行务必随身携带护照原件。',
        en: '①Ensure name matches passport exactly (including spaces) when booking flights ②Confirm hotel accepts foreign guests ③Some attractions require passport for tickets (not all support online passport booking — may need window purchase) ④For train tickets, buying directly on 12306 with passport is more straightforward; Ctrip works but occasionally has document type limitations ⑤Always carry your original passport when traveling.',
        ru: '①Имя точно как в паспорте (включая пробелы) при бронировании ②Подтвердите "принимает иностранцев" ③Некоторые достопримечательности требуют паспорт (не все поддерживают онлайн — возможно, в кассе) ④ЖД билеты напрямую через 12306 удобнее ⑤Всегда берите оригинал паспорта.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '外国人能在携程买火车票吗？', en: 'Can foreigners buy train tickets on Ctrip?', ru: 'Могут ли иностранцы покупать ж/д билеты на Ctrip?' },
      a: {
        zh: '可以，但推荐直接用12306 App（官方铁路平台）买——对护照支持更好。携程上买火车票偶尔会遇到证件类型选择的问题。如果已经在携程买了，到车站需要用护照走人工通道取票/进站（不能刷身份证自助取票）。',
        en: 'Yes, but using the 12306 app (official railway platform) is recommended — better passport support. On Ctrip, occasional document type issues may arise. If you buy on Ctrip, at the station you need to use the manual channel with your passport (can\'t use ID card self-service machines).',
        ru: 'Да, но рекомендуется 12306 (официальная платформа) — лучшая поддержка паспорта. На Ctrip иногда проблемы с типом документа. При покупке на Ctrip — на станции используйте ручной канал с паспортом (нельзя через автоматические терминалы).'
      }
    },
    {
      q: { zh: '航班取消/延误怎么办？', en: 'What if a flight is cancelled/delayed?', ru: 'Что делать при отмене/задержке рейса?' },
      a: {
        zh: '携程会在App推送通知。航空公司原因的取消/延误：可以在携程App中申请"非自愿退票"（全额退款）或改签。个人原因需退票：按机票退改签规则处理（特价票通常不退，全价票可退但收手续费）。建议购买"退改无忧"增值服务（购票时加几十元），可以大幅降低退改损失。',
        en: 'Ctrip will push notifications. For airline-caused cancellations/delays: apply for "involuntary refund" (full refund) or rebooking in the app. For personal reasons: follow the ticket\'s refund/change rules (discounted tickets usually non-refundable, full-price refundable with fee). Consider buying "Refund/Change Protection" add-on (a few dozen yuan extra when booking) to minimize losses.',
        ru: 'Ctrip уведомит в приложении. По вине авиакомпании — "недобровольный возврат" (полный) или перебронирование. По личным причинам — по правилам билета (скидочные обычно невозвратные). Совет: купите "Защиту отмены/изменения" (несколько десятков юаней).'
      }
    },
    {
      q: { zh: '携程有英文界面吗？', en: 'Does Ctrip have an English interface?', ru: 'Есть ли английский интерфейс у Ctrip?' },
      a: {
        zh: '中国版携程（ctrip.com）没有英文界面，但可以用手机系统自带的翻译功能辅助。携程国际版Trip.com（trip.com）有完整英文界面，功能类似但价格可能略高。如果中文阅读有困难，可以用Trip.com预订，或直接到酒店/景区用英文沟通。',
        en: 'The Chinese version (ctrip.com) doesn\'t have an English interface, but you can use your phone\'s built-in translation. The international version Trip.com (trip.com) has full English with similar features but slightly higher prices. If Chinese is difficult, use Trip.com for booking, or communicate in English directly at hotels/attractions.',
        ru: 'Китайская версия (ctrip.com) без английского, но можно использовать перевод телефона. Международная Trip.com (trip.com) с полным английским, но цены чуть выше. Если китайский сложен — используйте Trip.com или общайтесь на английском напрямую.'
      }
    }
  ],
  relatedGuides: ['train-booking', 'hotel-booking', 'airport-to-city', 'travel-planning']
};
