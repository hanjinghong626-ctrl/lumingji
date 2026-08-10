// Guide: 校园宿舍指南
export default {
  id: 'dormitory-guide',
  category: 'housing',
  icon: '🏠',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 30,
  apps: [],
  prerequisites: ['first-landing-overview'],
  tags: ['dorm', 'accommodation', 'campus'],
  title: {
    zh: '校园宿舍指南',
    en: 'Campus Dormitory Guide',
    ru: 'Руководство по кампусному общежитию'
  },
  summary: {
    zh: '宿舍申请流程、房间类型、设施配置、住宿规定与常见问题',
    en: 'Application process, room types, facilities, regulations and FAQs',
    ru: 'Процесс заявки, типы комнат, удобства, правила и FAQ'
  },
  intro: {
    zh: '中国大学的宿舍是留学生生活的重要部分。大多数学校会为留学生提供专门的宿舍楼，条件和设施因学校而异。本指南帮你了解宿舍的申请流程、入住须知和日常生活规则。',
    en: 'University dormitories are an important part of international student life in China. Most universities provide dedicated dormitory buildings for international students, with varying conditions and facilities. This guide helps you understand the application process, move-in procedures, and daily life rules.',
    ru: 'Университетские общежития — важная часть жизни иностранных студентов в Китае. Большинство вузов предоставляют отдельные здания для иностранцев с различными условиями. Это руководство поможет понять процесс заявки, заселение и правила проживания.'
  },
  preparation: {
    zh: [
      '护照和录取通知书',
      '宿舍申请表（国际处领取）',
      '住宿押金（通常200-500元）',
      '个人床上用品（有些学校提供租赁）'
    ],
    en: [
      'Passport and admission letter',
      'Dormitory application form (from international office)',
      'Accommodation deposit (usually ¥200-500)',
      'Personal bedding (some schools offer rental)'
    ],
    ru: [
      'Паспорт и письмо о зачислении',
      'Заявление на общежитие (в международном отделе)',
      'Залог за проживание (обычно 200-500 ¥)',
      'Личное постельное бельё (некоторые вузы предоставляют в аренду)'
    ]
  },
  steps: [
    {
      title: {
        zh: '申请宿舍',
        en: 'Apply for Dormitory',
        ru: 'Заявка на общежитие'
      },
      desc: {
        zh: '到校报到后，前往国际学生办公室或宿管中心申请宿舍。\n\n房间类型通常有：\n• 单人间：私密性好，价格较高（800-2000元/月）\n• 双人间：最常见，性价比好（400-1000元/月）\n• 多人间：价格便宜，但空间有限\n\n💡 建议尽早申请，好房间先到先得。',
        en: 'After registration, go to the international student office or dormitory center to apply.\n\nRoom types usually include:\n• Single room: Private, higher price (¥800-2000/month)\n• Double room: Most common, good value (¥400-1000/month)\n• Shared room: Cheaper but limited space\n\n💡 Apply early — good rooms are first-come-first-served.',
        ru: 'После регистрации обратитесь в международный отдел или центр общежитий.\n\nТипы комнат:\n• Одноместная: приватность, дороже (800-2000 ¥/мес)\n• Двухместная: самая частая, хорошее соотношение (400-1000 ¥/мес)\n• Многоместная: дешевле, но меньше места\n\n💡 Подавайте заявку заранее — лучшие комнаты разбирают быстро.'
      }
      ,
      tip: {
        zh: '有些学校允许在到达前通过邮件或在线系统提前预订宿舍，出发前先查查学校官网。',
        en: 'Some schools allow you to reserve a dormitory via email or online system before arrival — check your university website first.',
        ru: 'Некоторые вузы позволяют забронировать общежитие по email или онлайн до приезда — проверьте сайт университета.'
      }
    },
    {
      title: {
        zh: '办理入住',
        en: 'Check-in Process',
        ru: 'Процесс заселения'
      },
      desc: {
        zh: '拿到宿舍分配单后：\n\n1. 到宿管办公室报到，出示护照\n2. 缴纳住宿费和押金（押金退房时退还）\n3. 领取宿舍钥匙/门禁卡\n4. 宿管带你到房间，检查现有设施\n5. 填写入住登记表\n\n入住时务必检查：\n• 家具是否完好（床、桌、椅、柜子）\n• 电器是否正常（空调、热水器、灯）\n• 门窗锁是否安全\n• 卫生间是否干净、下水是否正常\n\n如有问题，当场报告，拍照留证。',
        en: 'After receiving your room assignment:\n\n1. Report to the dormitory office with your passport\n2. Pay accommodation fee and deposit (refundable at checkout)\n3. Receive room key/access card\n4. Warden takes you to the room, check existing facilities\n5. Fill in the check-in registration form\n\nMust check during move-in:\n• Furniture condition (bed, desk, chair, wardrobe)\n• Appliances working (AC, water heater, lights)\n• Door/window locks secure\n• Bathroom clean, drains working\n\nReport issues immediately and take photos as evidence.',
        ru: 'Получив направление в комнату:\n\n1. Зарегистрируйтесь в офисе общежития с паспортом\n2. Оплатите проживание и залог (возвращается при выезде)\n3. Получите ключ/карту доступа\n4. Комендант покажет комнату, проверьте состояние\n5. Заполните регистрационную форму\n\nОбязательно проверьте:\n• Мебель (кровать, стол, стул, шкаф)\n• Техника (кондиционер, бойлер, свет)\n• Замки дверей/окон\n• Санузел, слив\n\nСообщите о проблемах сразу, сфотографируйте.'
      }
    },
    {
      title: {
        zh: '宿舍日常规定',
        en: 'Daily Dormitory Rules',
        ru: 'Правила проживания'
      },
      desc: {
        zh: '中国大学宿舍通常有以下规定：\n\n⏰ 门禁时间\n• 一般为 23:00-24:00 锁门\n• 晚归需登记，可能需要说明原因\n• 部分学校门禁较严，注意时间\n\n🔌 用电规定\n• 禁止使用大功率电器（电磁炉、电热毯等）\n• 宿舍可能有用电额度，超额需额外缴费\n• 离开时关闭所有电器\n\n🧹 卫生要求\n• 定期有卫生检查（通常每周一次）\n• 保持房间和公共区域整洁\n• 垃圾按分类投放\n\n🤫 安静时间\n• 22:00-23:00 后保持安静\n• 不要在休息时间大声喧哗或播放音乐\n\n🚫 禁止事项\n• 不允许留宿外人\n• 禁止在宿舍做饭（有指定公共厨房的除外）\n• 禁止养宠物',
        en: 'Chinese university dormitories typically have these rules:\n\n⏰ Gate curfew\n• Usually locked at 23:00-24:00\n• Late return requires registration\n• Some schools have strict curfew — mind the time\n\n🔌 Electricity rules\n• High-power appliances prohibited (induction cookers, electric blankets)\n• May have electricity quota, extra charges for overuse\n• Turn off all appliances when leaving\n\n🧹 Hygiene requirements\n• Regular inspections (usually weekly)\n• Keep room and common areas clean\n• Sort garbage by category\n\n🤫 Quiet hours\n• Keep quiet after 22:00-23:00\n• No loud noise or music during rest hours\n\n🚫 Prohibited\n• No overnight guests\n• No cooking in rooms (unless designated kitchen available)\n• No pets',
        ru: 'Типичные правила китайских общежитий:\n\n⏰ Комендантский час\n• Обычно закрытие в 23:00-24:00\n• Позднее возвращение требует регистрации\n• В некоторых вузах строгий режим\n\n🔌 Электричество\n• Запрещены мощные приборы (плитки, обогреватели)\n• Может быть лимит электроэнергии\n• Выключайте все приборы при уходе\n\n🧹 Гигиена\n• Регулярные проверки (обычно еженедельно)\n• Поддерживайте чистоту\n• Сортировка мусора\n\n🤫 Тишина\n• После 22:00-23:00 соблюдайте тишину\n\n🚫 Запрещено\n• Нельзя оставлять посторонних ночевать\n• Нельзя готовить в комнате\n• Нельзя держать животных'
      }
      ,
      tip: {
        zh: '和室友建立好的关系很重要。可以准备一份小礼物（如本国零食）在入住时分享，能很快拉近距离。',
        en: 'Building good relationships with roommates is important. Consider bringing a small gift (like snacks from your country) to share when you move in — it quickly breaks the ice.',
        ru: 'Важно построить хорошие отношения с соседями. Принесите небольшой подарок (снеки из вашей страны) при заселении — это быстро растопит лёд.'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '宿舍有WiFi吗？',
        en: 'Is there WiFi in the dormitory?',
        ru: 'Есть ли WiFi в общежитии?'
      },
      a: {
        zh: '大多数学校宿舍有公共WiFi覆盖，但速度可能不稳定。有些需要登录校园网账号。如果网速不够用，可以自己办理宽带或用手机热点。',
        en: 'Most dormitories have public WiFi coverage, but speed may be unstable. Some require campus network login. If speed is insufficient, you can get your own broadband or use mobile hotspot.',
        ru: 'В большинстве общежитий есть общественный WiFi, но скорость может быть нестабильной. Для входа нужен аккаунт кампусной сети. Если скорости не хватает — можно подключить свой интернет.'
      }
    },
    {
      q: {
        zh: '可以换房间吗？',
        en: 'Can I change rooms?',
        ru: 'Можно ли сменить комнату?'
      },
      a: {
        zh: '可以，但需要向宿管中心提出申请，说明原因（如室友矛盾、设施问题等）。能否换房取决于是否有空房。开学初比较灵活，学期中途较难。',
        en: 'Yes, you can apply to the dormitory center with a reason (roommate conflicts, facility issues, etc.). Availability depends on vacant rooms. It\'s easier at the beginning of the semester, harder mid-semester.',
        ru: 'Да, можно подать заявку в центр общежитий с указанием причины. Замена зависит от наличия свободных комнат. Легче в начале семестра, сложнее в середине.'
      }
    }
  ],
  nextGuides: ['rent-apartment', 'utility-setup']
};
