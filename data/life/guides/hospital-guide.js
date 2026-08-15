// Guide: 中国就医指南
export default {
  id: 'hospital-guide',
  category: 'medical',
  icon: '🏥',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 60,
  apps: [],
  prerequisites: ['first-landing-overview'],
  tags: ['hospital', 'health', 'medical'],
  title: {
    zh: '中国就医指南',
    en: 'Guide to Visiting Hospitals in China',
    ru: 'Руководство по посещению больниц в Китае'
  },
  summary: {
    zh: '医院类型、挂号流程、就诊步骤与留学生医保使用',
    en: 'Hospital types, registration process, visit steps and student insurance usage',
    ru: 'Типы больниц, процесс записи, этапы приёма и использование студенческой страховки'
  },
  intro: {
    zh: '中国的医疗体系和俄罗斯有很大不同。了解医院的分类、挂号看病的完整流程，以及如何使用留学生医保，是每个留学生必须掌握的知识。',
    en: 'China\'s medical system is very different from Russia\'s. Understanding hospital categories, the complete process of registration and consultation, and how to use student health insurance is essential knowledge for every international student.',
    ru: 'Медицинская система Китая сильно отличается от российской. Понимание типов больниц, процесса записи и приёма, а также использование студенческой страховки — необходимые знания для каждого иностранного студента.'
  },
  preparation: {
    zh: [
      '护照或身份证',
      '留学生医疗保险卡/保险单',
      '银行卡或手机支付',
      '常用药品清单（如有长期用药）'
    ],
    en: [
      'Passport or ID',
      'Student health insurance card/policy',
      'Bank card or mobile payment',
      'Medication list (if on long-term medication)'
    ],
    ru: [
      'Паспорт или ID',
      'Карточка/полис студенческой страховки',
      'Банковская карта или мобильный платёж',
      'Список лекарств (при длительном приёме)'
    ]
  },
  steps: [
    {
      title: { zh: '预约挂号', en: 'Book an appointment', ru: 'Запись на приём' },
      desc: {
        zh: '大部分三甲医院（大型综合医院）需要提前预约挂号。方式：①医院官方微信公众号（微信搜索医院名称后关注，点击预约挂号）；②支付宝搜索「挂号」进入挂号平台；③拨打114电话预约。选择科室（如内科、外科、眼科等）和就诊时间。',
        en: 'Most major hospitals require advance booking. Methods: ① Hospital WeChat Official Account (search hospital name, follow, tap appointment); ② Alipay search appointment booking platform; ③ Call 114 to book. Choose department (Internal Medicine, Surgery, Ophthalmology, etc.) and time.',
        ru: 'Большинство крупных больниц требуют предварительной записи. Способы: ① Официальный аккаунт больницы в WeChat (найдите, подпишитесь, запишитесь); ② Поиск записи в Alipay; ③ Звонок 114. Выберите отделение и время.'
      }
,      tip: {
        zh: '急诊（急诊科）不需要预约，直接去医院急诊窗口即可。',
        en: 'Emergency departments do not require appointments — go directly to the ER window.',
        ru: 'Приёмный покой не требует записи — идите напрямую в окно экстренной помощи.'
      }
    },
    {
      title: { zh: '到达医院与签到', en: 'Arrive and check in', ru: 'Прибытие и регистрация' },
      desc: {
        zh: '按照预约时间提前30分钟到达医院。找到自助挂号机（通常在大厅），插入身份证/护照或扫描预约码完成签到。部分医院需要先去挂号窗口缴费领取就诊卡。注意看大厅屏幕上的叫号信息。',
        en: 'Arrive 30 minutes before your appointment. Find self-service machines (usually in lobby), insert ID/passport or scan appointment code. Some hospitals require payment at the registration window for a medical card. Watch the lobby screen for queue numbers.',
        ru: 'Прибудьте за 30 минут до приёма. Найдите автоматы регистрации (обычно в холле), вставьте паспорт или отсканируйте код записи. Некоторые больницы требуют оплату в окне регистрации. Следите за экраном с номерами очереди.'
      }
,      tip: {
        zh: '第一次去某家医院建议提前40分钟到，留出找路和排队的时间。',
        en: 'For first visit, arrive 40 minutes early to allow time for finding way and queuing.',
        ru: 'При первом посещении приходите за 40 минут, чтобы найти путь и очередь.'
      }
    },
    {
      title: { zh: '就诊与检查', en: 'Consultation and tests', ru: 'Осмотр и обследования' },
      desc: {
        zh: '听到叫号后进入对应诊室。医生会询问症状、做初步检查。如果需要进一步检查（验血、拍片等），医生会开具检查单。拿着检查单到对应科室做检查，等结果出来后返回诊室让医生看结果并给出诊断。',
        en: 'Enter the consultation room when your number is called. Doctor will ask about symptoms and do preliminary examination. If further tests needed (blood work, X-rays), doctor issues test orders. Take orders to relevant department, wait for results, return to doctor for diagnosis.',
        ru: 'Войдите в кабинет при вызове номера. Врач спросит о симптомах и проведёт осмотр. Если нужны анализы (кровь, рентген), врач выдаст направления. Отнесите в соответствующий кабинет, дождитесь результатов, вернитесь к врачу.'
      }
,      tip: {
        zh: '如果听不懂医生的中文诊断，可以请医生写下来或拍照翻译。必要时可请朋友陪同翻译。',
        en: 'If you don\'t understand the diagnosis, ask doctor to write it down or take a photo for translation. Bring a friend as interpreter if needed.',
        ru: 'Если не понимаете диагноз, попросите записать или сфотографируйте для перевода. Приведите друга как переводчика.'
      }
    },
    {
      title: { zh: '缴费与取药', en: 'Pay and collect medicine', ru: 'Оплата и получение лекарств' },
      desc: {
        zh: '诊断完成后，医生会开具处方或治疗方案。到缴费窗口（或自助缴费机）用支付宝/微信支付缴费。缴费后凭缴费凭证到药房窗口排队取药。药师会告知用药方法和剂量。',
        en: 'After diagnosis, doctor issues prescription or treatment plan. Pay at payment window or self-service machine via Alipay/WeChat Pay. After payment, take receipt to pharmacy window and queue for medicine. Pharmacist will explain dosage and instructions.',
        ru: 'После диагноза врач выпишет рецепт или план лечения. Оплатите в окне или автомате через Alipay/WeChat Pay. После оплаты идите в аптеку с квитанцией. Фармацевт объяснит дозировку.'
      }
,      tip: {
        zh: '保留所有医疗单据和诊断记录，保险理赔可能用到。',
        en: 'Keep all medical receipts and diagnostic records — you may need them for insurance claims.',
        ru: 'Сохраняйте все медицинские квитанции и записи — они могут понадобиться для страхования.'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '不会中文怎么看医生？',
        en: 'How to see a doctor without Chinese?',
        ru: 'Как попасть к врачу без знания китайского?'
      },
      a: {
        zh: '① 去有国际医疗部的三甲医院（有英语服务）② 带中国朋友陪同翻译 ③ 提前把症状写在手机上给医生看 ④ 部分城市有外国人医疗热线。校医院通常有留学生办公室可协助。',
        en: '① Go to Grade 3A hospitals with International Department (English service) ② Bring a Chinese friend to translate ③ Write symptoms on your phone to show the doctor ④ Some cities have foreigner medical hotlines. Campus clinics usually have international student offices to assist.',
        ru: '① Обратитесь в больницу 3А с международным отделением ② Возьмите китайского друга для перевода ③ Запишите симптомы на телефоне ④ В некоторых городах есть горячие линии для иностранцев. В вузовской поликлинике поможет офис иностранных студентов.'
      }
    },
    {
      q: {
        zh: '看病能报销吗？',
        en: 'Can medical expenses be reimbursed?',
        ru: 'Можно ли возместить расходы?'
      },
      a: {
        zh: '留学生通常参加了中国的大学生医保。在校医院就诊报销比例最高（70-90%），转诊到校外医院也可报销（50-70%）。保留所有发票和诊断证明，到校医院或国际处办理报销。',
        en: 'International students usually have Chinese university medical insurance. Highest reimbursement at campus clinics (70-90%), referral to external hospitals also covered (50-70%). Keep all receipts and diagnosis certificates, process reimbursement at campus clinic or international office.',
        ru: 'Иностранные студенты обычно застрахованы. Максимальное возмещение в вузовской поликлинике (70-90%), по направлению в другие больницы (50-70%). Сохраняйте все чеки и справки.'
      }
    }
  ],
  nextGuides: ['register-appointment', 'buy-medicine']
};
