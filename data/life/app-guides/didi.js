// 鹿鸣集 · 滴滴出行使用指南
// 版本：2026-08-09

export default {
  id: 'didi',
  version: '2026-08-09',
  title: {
    zh: '滴滴出行使用指南',
    en: 'DiDi Ride-Hailing Guide',
    ru: 'Руководство по DiDi'
  },
  desc: {
    zh: '中国最大的网约车平台，类似Uber。出门打车首选，也支持顺风车、代驾、租车等服务。',
    en: 'China\'s largest ride-hailing platform, similar to Uber. The go-to app for getting rides, also supports carpooling, designated driving, and car rental.',
    ru: 'Крупнейшая платформа такси в Китае, аналог Uber. Выбор №1 для поездок, также доступны карпулинг, трезвый водитель, аренда авто.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id576736875',
    android_google: 'https://play.google.com/store/apps/details?id=com.sdu.didi.psnger',
    android_cn: 'https://www.didiglobal.com/',
    note: {
      zh: '应用商店搜索"滴滴出行"下载。也可以直接使用高德地图的打车功能（聚合多平台，不需要单独下载滴滴）。',
      en: 'Search "滴滴出行" in your app store. Alternatively, use the ride-hailing feature in Amap (aggregates multiple platforms, no need to download DiDi separately).',
      ru: 'Ищите "滴滴出行" в магазине приложений. Альтернативно — используйте функцию такси в Amap (агрегирует несколько платформ).'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '注册并登录',
        en: 'Register and Log In',
        ru: 'Регистрация и вход'
      },
      desc: {
        zh: '下载后使用中国手机号注册，输入验证码完成登录。如果没有中国手机号，可以先通过微信登录（微信需已绑定手机号）。首次登录需要同意服务协议。',
        en: 'Register with your Chinese phone number and verify via SMS. If you don\'t have a Chinese number, log in via WeChat (which must already be linked to a phone number). Accept the service agreement on first login.',
        ru: 'Зарегистрируйтесь по китайскому номеру телефона и подтвердите SMS. Если нет китайского номера — войдите через WeChat (к которому уже привязан номер). Примите соглашение при первом входе.'
      },
      tip: {
        zh: '💡 推荐用手机号注册，比微信登录更稳定，换手机时也不会丢失行程记录。',
        en: '💡 Phone number registration is recommended over WeChat login — more stable and you won\'t lose ride history when switching devices.',
        ru: '💡 Рекомендуется регистрация по номеру телефона — стабильнее WeChat-входа, история поездок не теряется при смене устройства.'
      }
    },
    {
      title: {
        zh: '设置出行信息',
        en: 'Set Travel Info',
        ru: 'Настройка поездки'
      },
      desc: {
        zh: '打开App后，系统自动获取你当前位置作为起点。手动输入终点地址（可输入中文地址或搜索地标名称）。系统会显示预估费用、预计到达时间和可选车型。',
        en: 'The app auto-detects your current location as the starting point. Enter the destination address manually (you can enter Chinese addresses or search landmark names). The system shows estimated fare, arrival time, and available car types.',
        ru: 'Приложение автоматически определяет ваше местоположение. Введите адрес назначения (можно вводить китайские адреса или искать ориентиры). Система покажет стоимость, время прибытия и типы авто.'
      },
      tip: {
        zh: '💡 起点可以手动修改——如果你人在室内，GPS定位可能不精确，手动调整起点到最近的路口或标志性建筑。',
        en: '💡 You can manually adjust the pickup point — indoor GPS can be inaccurate, so set it to the nearest intersection or landmark.',
        ru: '💡 Точку подачи можно изменить вручную — GPS в помещении неточен, укажите ближайший перекрёсток или ориентир.'
      }
    },
    {
      title: {
        zh: '选择车型并叫车',
        en: 'Choose Car Type & Request Ride',
        ru: 'Выбор типа авто и вызов'
      },
      desc: {
        zh: '滴滴提供多种车型：①快车（经济实惠，最常见）②专车（品质更高，价格稍贵）③拼车（与其他乘客拼乘，最便宜但可能绕路）④优享（介于快车和专车之间）。根据需求选择后，点击"呼叫"。高峰期（上下班时间、雨天）可能需要排队等待。',
        en: 'DiDi offers several car types: ①Express (economical, most common) ②Premier (higher quality, slightly pricier) ③Carpool (share with others, cheapest but may detour) ④Comfort (between Express and Premier). Select your preferred type and tap "Call". During peak hours (rush hours, rainy days) you may need to wait in a queue.',
        ru: 'DiDi предлагает типы авто: ①Экспресс (экономичный, самый частый) ②Премьер (качественнее, дороже) ③Карпулинг (с попутчиками, дешевле, но с крюком) ④Комфорт (между экспресс и премьер). Выберите и нажмите "Вызвать". В час пик может быть очередь.'
      },
      tip: {
        zh: '💡 建议同时勾选多个车型增加叫车成功率。赶时间选快车/专车，不赶时间可以试拼车省钱。',
        en: '💡 Select multiple car types to increase your chances of getting a ride. For urgency, choose Express/Premier; to save money, try Carpool.',
        ru: '💡 Отметьте несколько типов авто — выше шанс найти машину. Торопитесь — Экспресс/Премьер. Экономите — Карпулинг.'
      }
    },
    {
      title: {
        zh: '等待上车与行程中',
        en: 'Waiting & During the Ride',
        ru: 'Ожидание и поездка'
      },
      desc: {
        zh: '司机接单后会显示车牌号、车型、颜色和你到上车点的步行导航。到达上车点后确认上车。行程中可以在App内看到实时路线，还能使用"分享行程"功能把实时位置发给朋友（安全保障）。',
        en: 'After the driver accepts, you\'ll see the license plate, car model, color, and walking directions to the pickup point. Confirm boarding when the car arrives. During the ride, the app shows the real-time route and you can use "Share Trip" to send your live location to friends (safety feature).',
        ru: 'После принятия заказа видно номер, модель, цвет авто и маршрут до точки подачи. После посадки в пути виден маршрут. Можно "Поделиться поездкой" — отправить местоположение другу (безопасность).'
      },
      tip: {
        zh: '⚠️ 上车前务必核对车牌号是否正确！尤其是夜间或车辆颜色相近时。安全功能中的"行程分享"建议养成习惯。',
        en: '⚠️ Always verify the license plate before getting in! Especially at night or when cars look similar. Make "Share Trip" a habit.',
        ru: '⚠️ Перед посадкой обязательно проверьте номерной знак! Особенно ночью или когда машины похожи. Приучите себя делиться поездкой.'
      }
    },
    {
      title: {
        zh: '支付与评价',
        en: 'Payment and Rating',
        ru: 'Оплата и оценка'
      },
      desc: {
        zh: '到达目的地后自动扣费（优先使用微信支付/支付宝免密支付）。也可以在App内手动支付。支付后可以对司机进行评分（1-5星）和留言。如果遇到绕路、态度差等问题，可以"投诉"要求客服介入。',
        en: 'Fare is automatically charged upon arrival (WeChat Pay/Alipay auto-deduct preferred). You can also pay manually in the app. After payment, rate the driver (1-5 stars) and leave a comment. If there are issues like detour or bad attitude, use "Complain" to request customer service intervention.',
        ru: 'По прибытии стоимость автоматически списывается (WeChat Pay/Alipay без пароля). Можно оплатить вручную. После оплаты оцените водителя (1-5 звёзд). При проблемах (объезд, грубость) — "Жалоба" для связи с поддержкой.'
      },
      tip: {
        zh: '💡 开通免密支付可以免去每次输入密码的麻烦。在"设置 → 支付设置"中开启。',
        en: '💡 Enable auto-pay to skip entering your password each time. Go to Settings → Payment Settings.',
        ru: '💡 Включите автоплатёж, чтобы не вводить пароль каждый раз. Настройки → Платежи.'
      }
    }
  ],
  coreFeatures: [
    {
      icon: '🚗',
      title: { zh: '快车/专车', en: 'Express/Premier', ru: 'Экспресс/Премьер' },
      desc: { zh: '最常见的叫车服务，按需选择经济或品质', en: 'Most common ride service, economy or premium options', ru: 'Самый частый вызов, эконом или премиум' }
    },
    {
      icon: '👥',
      title: { zh: '拼车', en: 'Carpool', ru: 'Карпулинг' },
      desc: { zh: '与顺路乘客共享行程，费用更低', en: 'Share ride with others going the same way, lower cost', ru: 'Поездка с попутчиками, дешевле' }
    },
    {
      icon: '🔒',
      title: { zh: '安全中心', en: 'Safety Center', ru: 'Центр безопасности' },
      desc: { zh: '行程分享、紧急求助、录音保护', en: 'Trip sharing, emergency SOS, recording protection', ru: 'Делиться поездкой, SOS, запись' }
    },
    {
      icon: '🕐',
      title: { zh: '预约叫车', en: 'Schedule Ride', ru: 'Заказ заранее' },
      desc: { zh: '提前预约未来某时间的用车', en: 'Book a ride for a future time', ru: 'Заказ на будущее время' }
    }
  ],
  tips: [
    {
      title: { zh: '高峰期打车技巧', en: 'Peak Hour Tips', ru: 'Советы для часа пик' },
      content: {
        zh: '上下班高峰期（7:30-9:00/17:30-19:00）和雨天打车很难，建议：①提前预约用车 ②多勾选几种车型 ③走到远离商圈/地铁站的位置叫车 ④考虑拼车 ⑤使用高德地图聚合打车（同时呼叫多平台）。',
        en: 'During rush hours (7:30-9:00 / 17:30-19:00) and rain, rides are hard to get. Tips: ①Schedule in advance ②Select multiple car types ③Walk away from commercial areas/metro stations ④Try carpool ⑤Use Amap\'s aggregated ride-hailing (calls multiple platforms).',
        ru: 'В час пик (7:30-9:00 / 17:30-19:00) и в дождь трудно поймать машину. Советы: ①Заказывайте заранее ②Отмечайте несколько типов ③Отойдите от ТЦ/метро ④Карпулинг ⑤Агрегированный вызов через Amap.'
      }
    },
    {
      title: { zh: '定位不准怎么办', en: 'GPS Inaccuracy Fix', ru: 'Что делать, если GPS неточен' },
      content: {
        zh: '在商场、地下停车场等室内环境，GPS定位可能偏差较大。建议走到室外开阔地带再叫车，或手动在地图上拖动定位针到准确位置。叫车后可以给司机打电话沟通具体上车点。',
        en: 'Indoors (malls, underground parking), GPS can be very inaccurate. Walk to an open area outside before requesting, or manually drag the pin on the map to the correct spot. After requesting, you can call the driver to clarify the pickup point.',
        ru: 'В помещениях (ТЦ, подземные парковки) GPS может сильно врать. Выйдите на открытое место или перетащите точку на карте. После заказа можно позвонить водителю и уточнить точку подачи.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '不会说中文怎么跟司机沟通？', en: 'How to communicate with the driver if I don\'t speak Chinese?', ru: 'Как общаться с водителем, если не знаю китайский?' },
      a: {
        zh: '①行程目的地的中文地址可以直接给司机看手机屏幕 ②App内有内置消息翻译功能 ③可以拨打司机电话，说"你好，我是外国人，请带我去[目的地]"——大多数司机能理解简单英语或用导航 ④提前在地图上收藏目的地，直接导航给司机看。',
        en: '①Show the Chinese address on your phone screen to the driver ②The app has built-in message translation ③Call the driver and say "你好, I\'m a foreigner, please take me to [destination]" — most drivers understand basic English or use navigation ④Save the destination in maps beforehand and show it to the driver.',
        ru: '①Покажите китайский адрес на экране телефона ②В приложении есть перевод сообщений ③Позвоните водителю: "你好, я иностранец, пожалуйста, везите в [место]" — многие понимают базовый английский ④Сохраните адрес в картах заранее и покажите водителю.'
      }
    },
    {
      q: { zh: '打车费用怎么算的？', en: 'How is the fare calculated?', ru: 'Как рассчитывается стоимость?' },
      a: {
        zh: '费用=起步价+里程费+时长费+远途费（超过一定距离加收）。高峰期/恶劣天气会动态加价（1.2x-2x）。预估价和实际价可能有差异（如路线变化、等待时间），但不会差太多。支付前可以查看费用明细。',
        en: 'Fare = base price + distance fee + duration fee + long-distance surcharge. During peak/bad weather, surge pricing applies (1.2x-2x). Estimated and actual fare may differ slightly (route changes, waiting time) but won\'t be drastically different. You can see the fare breakdown before paying.',
        ru: 'Стоимость = начальная цена + за км + за время + дальний поезд (сверх расстояния). В час пик/плохую погоду — повышенный коэффициент (1.2x-2x). Примерная и фактическая цена могут отличаться, но незначительно. Перед оплатой видна детализация.'
      }
    },
    {
      q: { zh: '东西落在车上了怎么办？', en: 'What if I left something in the car?', ru: 'Что делать, если забыл вещь в машине?' },
      a: {
        zh: '在"订单详情"中找到该行程，点击"物品遗失" → "联系司机"。滴滴会提供虚拟号码保护双方隐私。如果司机不配合，联系滴滴客服（App内在线客服或拨打 400-000-0999）协助处理。',
        en: 'Find the trip in "Order Details", tap "Lost Item" → "Contact Driver". DiDi provides a virtual number to protect both parties\' privacy. If the driver is uncooperative, contact DiDi customer service (in-app chat or call 400-000-0999) for assistance.',
        ru: 'Найдите поездку в "Детали заказа", нажмите "Потерянная вещь" → "Связаться с водителем". DiDi предоставляет виртуальный номер. Если водитель не помогает — обратитесь в поддержку (чат в приложении или 400-000-0999).'
      }
    }
  ],
  relatedGuides: ['airport-to-city', 'setup-alipay', 'first-week-checklist']
};
