// Guide: 第一周待办清单
export default {
  id: 'first-week-checklist',
  category: 'first-landing',
  icon: '✅',
  type: 'checklist',
  difficulty: 1,
  estimatedTime: 0,
  apps: [],
  prerequisites: ['airport-to-city'],
  tags: ['checklist', 'planning', 'first-week', 'essential'],
  title: {
    zh: '第一周待办清单',
    en: 'First Week Checklist',
    ru: 'Чек-лист первой недели'
  },
  summary: {
    zh: '到达中国后第一周必须完成的所有事项，按优先级排列，帮你理清思路不遗漏',
    en: 'Everything you must do in your first week in China, prioritized to help you stay organized',
    ru: 'Всё, что нужно сделать в первую неделю в Китае, в порядке приоритета'
  },
  intro: {
    zh: '刚到中国，千头万绪不知从何做起？这份清单按照优先级和时间顺序帮你梳理第一周必须完成的事项。打勾一项项完成，确保不遗漏重要事务。每个待办项都链接了详细的操作指南，点击即可查看。',
    en: 'Just arrived in China and feeling overwhelmed? This checklist organizes your first-week must-dos by priority and timeline. Check off each item to make sure nothing important is missed. Each item links to a detailed guide — just click to view.',
    ru: 'Только приехали в Китай и не знаете, с чего начать? Этот чек-лист поможет организовать дела первой недели по приоритету. Отмечайте каждый пункт — ничего не пропустите. Каждый пункт ссылается на подробное руководство.'
  },
  preparation: {
    zh: ['护照、签证、录取通知书等重要文件都随身带好', '手机充好电，保持有流量', '提前了解学校报到流程', '准备好现金和银行卡'],
    en: ['Keep passport, visa, admission letter and important documents with you', 'Keep phone charged with mobile data', 'Learn about school registration process in advance', 'Have cash and bank card ready'],
    ru: ['Держите паспорт, визу, письмо о зачислении при себе', 'Телефон заряжен с мобильным интернетом', 'Узнайте о процедуре регистрации заранее', 'Имейте наличные и банковскую карту']
  },
  steps: [
    {
      title: { zh: '📅 第1天：落地必做', en: '📅 Day 1: Must-Do on Arrival', ru: '📅 День 1: Обязательное' },
      desc: {
        zh: '到达当天的紧急事项（按顺序完成）：\n\n☐ 从机场到学校（出租车/地铁/接机）\n  → 详见 Guide「从机场到市区」\n\n☐ 办理宿舍入住，领取钥匙\n  → 详见 Guide「入住宿舍」\n\n☐ 购买中国手机卡\n  → 详见 Guide「购买手机卡」\n\n☐ 连接网络，告诉家人朋友你已安全到达\n\n⚠️ 当天如果太晚（超过17:00到达），手机卡和国际学生办公室可能已关门，这些可以推迟到第2天。',
        en: 'Urgent items on arrival day (complete in order):\n\n☐ Airport to school (taxi/subway/pickup)\n  → See guide "Airport to City"\n\n☐ Check into dormitory, get keys\n  → See guide "Check Into Dormitory"\n\n☐ Buy a Chinese SIM card\n  → See guide "Buy a SIM Card"\n\n☐ Connect to internet, let family/friends know you arrived safely\n\n⚠️ If you arrive too late (after 17:00), SIM card shops and international offices may be closed — these can be moved to Day 2.',
        ru: 'Срочные дела в день приезда (по порядку):\n\n☐ Из аэропорта в университет\n  → См. руководство «Из аэропорта в город»\n\n☐ Заселение в общежитие\n  → См. руководство «Заселение»\n\n☐ Купить китайскую SIM-карту\n  → См. руководство «Купить SIM-карту»\n\n☐ Подключиться к интернету, сообщить семье о безопасном прибытии\n\n⚠️ Если приехали поздно (после 17:00), пункты можно перенести на день 2.'
      }
    },
    {
      title: { zh: '📅 第2-3天：数字生活基础', en: '📅 Day 2-3: Digital Life Essentials', ru: '📅 День 2-3: Основы цифровой жизни' },
      desc: {
        zh: '这些App是中国的"基础设施"，越早开通越好：\n\n☐ 注册微信 + 添加同学好友 + 加入班级群\n  → 详见 Guide「注册并使用微信」\n\n☐ 注册支付宝 + 实名认证\n  → 详见 Guide「注册并开通支付宝」\n\n☐ 下载高德地图，学会导航\n\n☐ 下载美团/饿了么（点外卖）\n\n☐ 学会用微信/支付宝扫码支付\n\n💡 完成这些后，你在中国的基本生活就没有大障碍了——能打车、能付款、能点外卖、能联系朋友。',
        en: 'These apps are China\'s "infrastructure" — set them up ASAP:\n\n☐ Register WeChat + add classmates + join class groups\n  → See guide "Set Up WeChat"\n\n☐ Register Alipay + real-name verification\n  → See guide "Set Up Alipay"\n\n☐ Download Amap (高德地图), learn navigation\n\n☐ Download Meituan/Ele.me (food delivery)\n\n☐ Learn to pay with WeChat/Alipay QR codes\n\n💡 After completing these, daily life in China becomes much easier — you can take taxis, pay for things, order food, and stay in touch.',
        ru: 'Эти приложения — «инфраструктура» Китая — настройте как можно скорее:\n\n☐ Зарегистрируйте WeChat + добавьте однокурсников\n  → См. руководство «Настроить WeChat»\n\n☐ Зарегистрируйте Alipay + верификация\n  → См. руководство «Настроить Alipay»\n\n☐ Скачайте Amap, освойте навигацию\n\n☐ Скачайте Meituan/Ele.me\n\n☐ Научитесь оплачивать QR-кодом\n\n💡 После этого базовая жизнь в Китае станет намного проще.'
      }
    },
    {
      title: { zh: '📅 第3-4天：学校与财务', en: '📅 Day 3-4: School & Finance', ru: '📅 День 3-4: Университет и финансы' },
      desc: {
        zh: '完成学校手续和财务准备：\n\n☐ 到国际学生办公室正式报到注册\n  • 提交所有入学材料\n  • 领取学生证/校园卡\n  • 了解选课流程\n\n☐ 办理临时住宿登记（法律要求！入住24小时内）\n  → 详见 Guide「入住宿舍」\n\n☐ 开设中国银行账户\n  → 详见 Guide「开设银行账户」\n\n☐ 绑定银行卡到微信/支付宝\n\n☐ 缴纳学费/住宿费（如尚未缴纳）\n\n☐ 购买医疗保险或确认学校保险覆盖范围',
        en: 'Complete school procedures and financial preparation:\n\n☐ Formal registration at International Student Office\n  • Submit all enrollment documents\n  • Receive student ID/campus card\n  • Learn about course registration\n\n☐ Complete temporary residence registration (legally required! within 24 hours of move-in)\n  → See guide "Check Into Dormitory"\n\n☐ Open a Chinese bank account\n  → See guide "Open a Bank Account"\n\n☐ Link bank card to WeChat/Alipay\n\n☐ Pay tuition/accommodation fees (if not yet paid)\n\n☐ Purchase medical insurance or confirm school insurance coverage',
        ru: 'Оформление в университете и финансовая подготовка:\n\n☐ Регистрация в офисе иностранных студентов\n  • Подайте все документы\n  • Получите студенческий билет\n  • Узнайте о записи на курсы\n\n☐ Регистрация проживания (обязательно по закону!)\n  → См. руководство «Заселение»\n\n☐ Откройте банковский счёт\n  → См. руководство «Открыть счёт»\n\n☐ Привяжите карту к WeChat/Alipay\n\n☐ Оплатите обучение/проживание\n\n☐ Оформите медстраховку'
      }
    },
    {
      title: { zh: '📅 第5-7天：生活适应', en: '📅 Day 5-7: Settling In', ru: '📅 День 5-7: Адаптация' },
      desc: {
        zh: '安顿下来，熟悉周围环境和日常生活：\n\n☐ 熟悉校园：教学楼、图书馆、食堂、体育设施\n\n☐ 找到最近的超市/商场\n\n☐ 了解学校食堂菜单和价格\n\n☐ 尝试第一次外卖点餐\n\n☐ 下载12306（火车票）/携程（机票）App\n\n☐ 办理电话卡充值（了解充值方式）\n\n☐ 与室友/同学一起吃顿饭，建立社交关系\n\n☐ 了解学校周边交通（公交站、地铁站）\n\n☐ 设置闹钟，适应中国作息时间\n\n☐ 探索校园周边，找几家喜欢的餐厅\n\n🎉 完成以上所有事项后，恭喜你！你已经基本完成了在中国的"着陆"，可以开始享受留学生活了！',
        en: 'Settle in and get familiar with your surroundings:\n\n☐ Explore campus: teaching buildings, library, cafeterias, sports facilities\n\n☐ Find the nearest supermarket/mall\n\n☐ Learn cafeteria menu and prices\n\n☐ Try your first food delivery order\n\n☐ Download 12306 (train tickets) / Ctrip (flights) apps\n\n☐ Top up your phone (learn how to recharge)\n\n☐ Have a meal with roommates/classmates, build social connections\n\n☐ Learn nearby transportation (bus stops, metro stations)\n\n☐ Set alarms, adapt to China time zone\n\n☐ Explore campus surroundings, find favorite restaurants\n\n🎉 After completing all items above, congratulations! You\'ve basically completed your "landing" in China and can start enjoying student life!',
        ru: 'Обустройтесь и осмотритесь:\n\n☐ Осмотрите кампус: учебные корпуса, библиотека, столовые\n\n☐ Найдите ближайший супермаркет\n\n☐ Изучите меню столовой\n\n☐ Попробуйте доставку еды\n\n☐ Скачайте 12306 (поезда) / Ctrip (авиа)\n\n☐ Пополните телефон\n\n☐ Поешьте с соседями/однокурсниками\n\n☐ Узнайте о транспорте рядом\n\n☐ Поставьте будильник, адаптируйтесь к часовому поясу\n\n☐ Исследуйте окрестности кампуса\n\n🎉 Поздравляем! Вы завершили «приземление» в Китае!'
      }
    }
  ],
  faq: [
    {
      q: { zh: '第一周花销大概多少？', en: 'How much should I budget for the first week?', ru: 'Сколько нужно на первую неделю?' },
      a: { zh: '大致预算：手机卡50-100元 + 预存话费50元 + 宿舍押金/首月房租500-3000元 + 餐饮100-200元 + 日用品100-200元 + 交通50-100元。总计约800-3500元（不含学费），具体取决于城市和消费水平。建议随身携带2000-3000元现金备用。', en: 'Approximate budget: SIM card ¥50-100 + prepaid credit ¥50 + dorm deposit/first month rent ¥500-3000 + meals ¥100-200 + daily supplies ¥100-200 + transport ¥50-100. Total: ~¥800-3500 (excluding tuition), varies by city. Recommend bringing ¥2000-3000 in cash as backup.', ru: 'Примерный бюджет: SIM 50-100 ¥ + предоплата 50 ¥ + общежитие 500-3000 ¥ + еда 100-200 ¥ + товары 100-200 ¥ + транспорт 50-100 ¥. Итого: ~800-3500 ¥ (без обучения). Рекомендуем иметь 2000-3000 ¥ наличными.' }
    },
    {
      q: { zh: '如果第一周没完成所有事项怎么办？', en: 'What if I don\'t finish everything in the first week?', ru: 'Что если не успею всё за первую неделю?' },
      a: { zh: '不用太焦虑，按优先级来就好。最紧急的是：手机卡→微信/支付宝→报到注册→银行开户。其他可以逐步完成。但注意「临时住宿登记」必须在入住24小时内完成，这是法律要求。', en: 'Don\'t stress — just prioritize. Most urgent: SIM card → WeChat/Alipay → registration → bank account. Others can be done gradually. But "temporary residence registration" MUST be done within 24 hours of move-in — it\'s a legal requirement.', ru: 'Не переживайте — расставьте приоритеты. Самое срочное: SIM → WeChat/Alipay → регистрация → банк. Но «регистрация проживания» обязательна в течение 24 часов — это закон.' }
    },
    {
      q: { zh: '到了以后语言不通怎么办？', en: 'What if I don\'t speak Chinese well when I arrive?', ru: 'Что делать, если я плохо говорю по-китайски?' },
      a: { zh: '不用担心！1）手机安装翻译App（推荐：百度翻译、有道翻译，支持拍照翻译和语音翻译）；2）学校国际学生办公室通常有英语服务；3）把关键句子存在手机里（如"你好，我是留学生"），需要时直接给人看；4）本平台的Guide也提供中俄英三语版本。', en: 'Don\'t worry! 1) Install translation apps (recommend: Baidu Translate, Youdao — supports photo and voice translation); 2) International student offices usually offer English service; 3) Save key phrases on your phone (e.g., "你好，我是留学生") and show them when needed; 4) This platform\'s guides also provide Chinese/English/Russian versions.', ru: 'Не волнуйтесь! 1) Установите приложения-переводчики (Baidu Translate, Youdao); 2) Офис иностранных студентов обычно обслуживает на английском; 3) Сохраните ключевые фразы в телефоне; 4) Наш гид также на трёх языках.' }
    }
  ],
  nextGuides: ['setup-wechat', 'setup-alipay', 'open-bank-account']
};
