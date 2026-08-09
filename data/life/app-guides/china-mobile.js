// 鹿鸣集 · 中国移动使用指南
// 版本：2026-08-09

export default {
  id: 'china-mobile',
  version: '2026-08-09',
  title: {
    zh: '中国移动 App 使用指南',
    en: 'China Mobile App Guide',
    ru: 'Руководство по приложению China Mobile'
  },
  desc: {
    zh: '中国移动的手机营业厅App，查话费、充流量、办套餐、看账单，手机卡管理的必备工具。联通/电信用户同理使用各自App。',
    en: 'China Mobile\'s official service app — check balance, top up data, manage plans, view bills. Essential for managing your SIM card. (Unicom/Telecom users use their respective apps similarly.)',
    ru: 'Официальное приложение China Mobile — баланс, пополнение трафика, тарифы, счета. Обязательно для управления SIM-картой. (Для Unicom/Telecom — аналогичные приложения.)'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id438400892',
    android_google: 'https://play.google.com/store/apps/details?id=com.cmcc.mobileui',
    android_cn: 'https://www.10086.cn/',
    note: {
      zh: '中国移动用户下载"中国移动"App；中国联通用户下载"中国联通"App；中国电信用户下载"中国电信"App。根据你办理的运营商选择。',
      en: 'China Mobile users download "中国移动" app; China Unicom users download "中国联通" app; China Telecom users download "中国电信" app. Download based on your carrier.',
      ru: 'Абоненты China Mobile скачивают "中国移动"; China Unicom — "中国联通"; China Telecom — "中国电信". Скачайте приложение вашего оператора.'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '用手机号登录',
        en: 'Log In with Phone Number',
        ru: 'Вход по номеру телефона'
      },
      desc: {
        zh: '打开App，输入你的中国手机号，获取验证码登录。首次登录可能需要输入SIM卡的服务密码（办卡时设置的6位数字密码）。如果忘记服务密码，可通过短信验证码重置。',
        en: 'Open the app, enter your Chinese phone number, and log in via SMS verification code. First login may require your SIM service password (6-digit PIN set when getting the SIM). If you forgot it, reset via SMS verification code.',
        ru: 'Откройте приложение, введите китайский номер, войдите по SMS-коду. Первый вход может потребовать сервисный пароль (6-значный PIN, установленный при получении SIM). Если забыли — сбросьте через SMS.'
      },
      tip: {
        zh: '💡 办卡时一定要记住服务密码！这是管理手机卡的重要凭证。忘记的话拨打10086（移动）/10010（联通）/10000（电信）人工重置。',
        en: '💡 Always remember your SIM service password when getting a card! It\'s essential for SIM management. If forgotten, call 10086 (Mobile) / 10010 (Unicom) / 10000 (Telecom) to reset.',
        ru: '💡 При получении SIM запомните сервисный пароль! Это важно для управления. Если забыли — звоните 10086 (Mobile) / 10010 (Unicom) / 10000 (Telecom).'
      }
    },
    {
      title: {
        zh: '查看套餐与余额',
        en: 'Check Plan and Balance',
        ru: 'Проверка тарифа и баланса'
      },
      desc: {
        zh: '首页即显示当前余额、剩余流量、剩余通话时长、套餐到期日期等关键信息。点击"我的套餐"可查看完整的套餐内容和已使用量。',
        en: 'The home page displays current balance, remaining data, remaining call minutes, and plan expiration date. Tap "My Plan" for full plan details and usage.',
        ru: 'На главной — баланс, остаток трафика, минуты, срок тарифа. Нажмите "Мой тариф" для подробностей и расхода.'
      },
      tip: {
        zh: '💡 养成每周查一次余量的习惯，避免流量用超后被限速或产生额外费用。App会在使用量达到80%时发送提醒短信。',
        en: '💡 Check your remaining data weekly to avoid speed throttling or extra charges from overuse. The app sends a reminder when you reach 80% usage.',
        ru: '💡 Проверяйте остаток трафика еженедельно, чтобы избежать замедления или доплат. Приложение пришлёт уведомление при достижении 80%.'
      }
    },
    {
      title: {
        zh: '充值话费/流量',
        en: 'Top Up Balance / Data',
        ru: 'Пополнение баланса / трафика'
      },
      desc: {
        zh: '点击"充值" → 选择充值金额（30/50/100/200元等）→ 使用微信/支付宝/银行卡支付。也可以在微信/支付宝的"手机充值"功能中充值，效果相同。流量包也可单独购买——如"10元10GB日租包"等临时流量包。',
        en: 'Tap "Top Up" → select amount (¥30/50/100/200 etc.) → pay via WeChat/Alipay/bank card. You can also top up through WeChat or Alipay\'s "Phone Top-up" feature with the same result. Data packs can also be purchased separately — e.g., "¥10 for 10GB daily pack".',
        ru: 'Нажмите "Пополнить" → выберите сумму (¥30/50/100/200) → оплатите через WeChat/Alipay/карту. Можно также через WeChat или Alipay. Пакеты трафика можно покупать отдельно — например, "¥10 за 10ГБ на день".'
      },
      tip: {
        zh: '💡 充值话费前确认号码是否正确。建议通过官方App或微信/支付宝充值，不要在不明网站充值，防止被骗。',
        en: '💡 Double-check the phone number before topping up. Use official apps or WeChat/Alipay — avoid unknown websites to prevent scams.',
        ru: '💡 Проверьте номер перед пополнением. Используйте официальные приложения или WeChat/Alipay — не пополняйте через неизвестные сайты.'
      }
    },
    {
      title: {
        zh: '办理套餐变更',
        en: 'Change Your Plan',
        ru: 'Смена тарифа'
      },
      desc: {
        zh: '如果想更换套餐（如从低月租换到大流量包），在App中搜索"套餐"或到"我的 → 已办业务"中查看可变更的套餐。新套餐通常次月生效。部分套餐变更需要到线下营业厅办理，可以在App中查询最近的营业厅地址。',
        en: 'To change your plan (e.g., from low monthly fee to large data plan), search "套餐" in the app or go to "My → Active Services" to see available plan changes. New plans typically take effect next month. Some changes require visiting a physical store — find the nearest one in the app.',
        ru: 'Для смены тарифа найдите "套餐" в приложении или "Мой → Мои услуги" для доступных вариантов. Новый тариф обычно с следующего месяца. Некоторые изменения требуют визита в офис — ближайший можно найти в приложении.'
      },
      tip: {
        zh: '⚠️ 部分优惠套餐有合约期（如12个月），提前解约需付违约金。办理前仔细阅读条款。',
        en: '⚠️ Some promotional plans have contract periods (e.g., 12 months) — early termination incurs a penalty. Read the terms carefully before subscribing.',
        ru: '⚠️ Некоторые акции имеют контрактный период (например, 12 месяцев) — досрочное расторжение штрафуется. Внимательно читайте условия.'
      }
    },
    {
      title: {
        zh: '查询账单明细',
        en: 'View Bill Details',
        ru: 'Детализация счёта'
      },
      desc: {
        zh: '在"我的 → 账单查询"中可以查看近6个月的消费明细，包括月租费、通话费、流量费、增值业务费等。如果发现不明扣费，可以拨打10086客服或到营业厅要求退费。',
        en: 'Go to "My → Bill Inquiry" to view the past 6 months\' spending details, including monthly fee, call charges, data fees, and value-added services. If you find unknown charges, call 10086 or visit a store to request a refund.',
        ru: '"Мой → Счета" — детализация за 6 месяцев: аренда, звонки, трафик, доп. услуги. При неизвестных списаниях — звоните 10086 или посетите офис для возврата.'
      }
    }
  ],
  coreFeatures: [
    {
      icon: '📊',
      title: { zh: '用量查询', en: 'Usage Check', ru: 'Проверка расхода' },
      desc: { zh: '实时查看流量、通话、短信使用量', en: 'Real-time data, call, SMS usage tracking', ru: 'Отслеживание трафика, звонков, SMS' }
    },
    {
      icon: '💰',
      title: { zh: '充值缴费', en: 'Top Up', ru: 'Пополнение' },
      desc: { zh: '话费充值、流量包购买', en: 'Balance top-up, data pack purchase', ru: 'Пополнение баланса, покупка пакетов' }
    },
    {
      icon: '📋',
      title: { zh: '套餐管理', en: 'Plan Management', ru: 'Управление тарифом' },
      desc: { zh: '查看/变更套餐、办理增值业务', en: 'View/change plans, manage add-on services', ru: 'Просмотр/смена тарифов, доп. услуги' }
    },
    {
      icon: '🎫',
      title: { zh: '积分商城', en: 'Points Mall', ru: 'Магазин бонусов' },
      desc: { zh: '用积分兑换流量、话费、礼品', en: 'Exchange points for data, balance, gifts', ru: 'Обмен бонусов на трафик, баланс, подарки' }
    }
  ],
  tips: [
    {
      title: { zh: '客服电话', en: 'Customer Service Hotline', ru: 'Горячая линия' },
      content: {
        zh: '移动拨打 10086，联通拨打 10010，电信拨打 10000。有英文服务选项（按语音提示选择）。复杂问题（如护照实名、退费纠纷）建议去线下营业厅，面对面沟通更高效。',
        en: 'Mobile: 10086, Unicom: 10010, Telecom: 10000. English service is available (follow voice prompts). For complex issues (passport verification, refund disputes), visit a physical store for more efficient face-to-face communication.',
        ru: 'Mobile: 10086, Unicom: 10010, Telecom: 10000. Есть английский (следуйте подсказкам). Для сложных вопросов (паспорт, возврат) — посетите офис.'
      }
    },
    {
      title: { zh: '留学生推荐套餐', en: 'Recommended Plans for Students', ru: 'Рекомендуемые тарифы для студентов' },
      content: {
        zh: '留学生推荐选择大流量套餐（月租¥39-79，含20-50GB流量+通话分钟）。部分运营商有"校园卡"优惠套餐（更便宜但需要学生证）。建议到校后咨询学校附近的运营商营业厅，经常有针对学生的促销活动。',
        en: 'Students should opt for large data plans (monthly ¥39-79, includes 20-50GB data + call minutes). Some carriers offer "campus card" plans (cheaper but requires student ID). After arriving at school, check nearby carrier stores — they often have student promotions.',
        ru: 'Студентам рекомендуются пакеты с большим трафиком (¥39-79/мес, 20-50ГБ + минуты). Есть "кампусные карты" (дешевле, нужен студенческий). После приезда — проверьте офисы операторов рядом с вузом, часто есть акции для студентов.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '手机卡丢了怎么办？', en: 'What if I lose my SIM card?', ru: 'Что делать, если потерял SIM-карту?' },
      a: {
        zh: '立即拨打客服热线（移动10086/联通10010/电信10000）挂失手机卡，防止被盗用。然后携带护照到最近的营业厅补办新卡，原号码不变，补办费用约¥10-20。建议平时记好自己的手机号码。',
        en: 'Immediately call customer service (Mobile 10086 / Unicom 10010 / Telecom 10000) to report the loss and suspend the card, preventing unauthorized use. Then bring your passport to the nearest store for a replacement — same number, cost ~¥10-20. Memorize your phone number.',
        ru: 'Сразу звоните (Mobile 10086 / Unicom 10010 / Telecom 10000) для блокировки. Затем с паспортом — в ближайший офис за новой SIM, номер сохраняется, стоимость ~¥10-20. Запомните свой номер.'
      }
    },
    {
      q: { zh: '流量用完了会怎样？', en: 'What happens when I run out of data?', ru: 'Что будет, если закончится трафик?' },
      a: {
        zh: '大部分套餐在流量用完后会自动降速（限速到1Mbps或更低），不会额外扣费。如果急需高速流量，可以在App中购买临时流量加速包。也有少数老套餐会按KB计费产生额外费用——建议在App中确认你的套餐类型。',
        en: 'Most plans automatically throttle speed (to 1Mbps or lower) after data is exhausted, without extra charges. If you need high speed urgently, buy a temporary data boost pack in the app. Some older plans may charge per KB — check your plan type in the app.',
        ru: 'Большинство тарифов при исчерпании трафика автоматически снижают скорость (до 1Мбит/с), без доплат. Для срочной скорости — купите пакет ускорения. Некоторые старые тарифы считают по КБ — проверьте свой тариф в приложении.'
      }
    },
    {
      q: { zh: '如何查询本机号码？', en: 'How to check my own phone number?', ru: 'Как узнать свой номер?' },
      a: {
        zh: '方式一：打开运营商App，首页就能看到本机号码。方式二：拨打 *#99# 或 *#1001# 等查询码（不同运营商不同）。方式三：给朋友打一个电话，对方来电显示就是你的号码。方式四：拨打10086/10010/10000客服热线，语音系统会告知你的号码。',
        en: 'Method 1: Open your carrier app — your number is shown on the home page. Method 2: Dial *#99# or *#1001# (varies by carrier). Method 3: Call a friend — the number shown on their screen is yours. Method 4: Call customer service (10086/10010/10000) and the voice system will tell you your number.',
        ru: 'Способ 1: Откройте приложение оператора — номер на главной. Способ 2: Наберите *#99# или *#1001# (зависит от оператора). Способ 3: Позвоните другу — его определитель покажет ваш номер. Способ 4: Позвоните в поддержку, система сообщит ваш номер.'
      }
    }
  ],
  relatedGuides: ['buy-sim-card', 'setup-alipay', 'setup-wechat']
};
