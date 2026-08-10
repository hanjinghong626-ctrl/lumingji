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
      title: {
        zh: '了解医院分类',
        en: 'Understanding Hospital Types',
        ru: 'Типы больниц'
      },
      desc: {
        zh: '中国医院等级划分：\n\n🏥 三级甲等（三甲）\n• 最高等级，设备齐全，专家多\n• 适合：重症、疑难杂症\n• 缺点：人多排队时间长\n\n🏥 二级医院\n• 中等规模，常见病可处理\n• 适合：普通疾病\n• 优点：人少，等待时间短\n\n🏥 社区卫生服务中心\n• 基层医疗机构\n• 适合：感冒发烧、小伤口处理\n• 优点：近、快、便宜\n\n💡 建议：小病去社区，大病去三甲。急诊任何医院都可以直接去。',
        en: 'Chinese hospital classification:\n\n🏥 Grade 3A (三甲)\n• Highest level, full equipment, many specialists\n• Best for: serious/complex conditions\n• Drawback: crowds, long wait times\n\n🏥 Grade 2 hospitals\n• Medium scale, can handle common illnesses\n• Best for: common diseases\n• Advantage: fewer people, shorter wait\n\n🏥 Community health centers\n• Basic medical facilities\n• Best for: colds, fevers, minor wounds\n• Advantage: nearby, fast, cheap\n\n💡 Tip: Community centers for minor issues; Grade 3A for serious conditions. Emergency departments accept walk-ins at any hospital.',
        ru: 'Классификация больниц Китая:\n\n🏥 3-й класс А (三甲)\n• Высший уровень, полное оборудование\n• Для: серьёзных/сложных случаев\n• Минус: очереди\n\n🏥 2-й класс\n• Средний размер, обычные болезни\n• Для: распространённых заболеваний\n\n🏥 Общественные центры здоровья\n• Базовая медицина\n• Для: простуды, мелкие раны\n• Плюс: близко, быстро, дёшево\n\n💡 Мелочи — в центр, серьёзное — в 3А. Экстренная помощь — в любой больнице.'
      }
    },
    {
      title: {
        zh: '挂号与就诊流程',
        en: 'Registration and Consultation Process',
        ru: 'Запись и приём'
      },
      desc: {
        zh: '看病完整流程：\n\n1️⃣ 挂号（预约/现场）\n• 微信搜索医院公众号 → 预约挂号\n• 或到医院自助挂号机/窗口挂号\n• 选择科室：内科、外科、皮肤科等\n• 挂号费：普通号10-50元，专家号50-300元\n\n2️⃣ 候诊\n• 到对应科室候诊区等待叫号\n• 注意听广播/看屏幕上的叫号\n\n3️⃣ 就诊\n• 向医生描述症状（可提前准备好中文描述）\n• 医生检查、开检查单\n\n4️⃣ 检查（如需）\n• 验血、拍X光、B超等\n• 拿到检查报告后回到诊室\n\n5️⃣ 诊断与开药\n• 医生给出诊断，开药方\n\n6️⃣ 缴费\n• 到收费窗口或手机缴费\n\n7️⃣ 取药\n• 到药房窗口凭缴费单取药',
        en: 'Complete hospital visit process:\n\n1️⃣ Register (book ahead or on-site)\n• Search hospital WeChat official account → make appointment\n• Or use self-service kiosk/counter at hospital\n• Choose department: Internal Medicine, Surgery, Dermatology, etc.\n• Registration fee: regular ¥10-50, specialist ¥50-300\n\n2️⃣ Wait for your turn\n• Go to the department waiting area\n• Listen for announcements / watch display screens\n\n3️⃣ Consultation\n• Describe symptoms to doctor (prepare Chinese description in advance)\n• Doctor examines, orders tests if needed\n\n4️⃣ Tests (if required)\n• Blood test, X-ray, ultrasound, etc.\n• Return to consultation room with results\n\n5️⃣ Diagnosis & prescription\n• Doctor gives diagnosis, writes prescription\n\n6️⃣ Pay\n• Pay at cashier window or via phone\n\n7️⃣ Get medicine\n• Go to pharmacy window with payment receipt',
        ru: 'Полный процесс визита:\n\n1️⃣ Запись\n• WeChat аккаунт больницы → запись\n• Или автомат/окно в больнице\n• Выберите отделение\n• Стоимость: обычный 10-50 ¥, специалист 50-300 ¥\n\n2️⃣ Ожидание\n\n3️⃣ Приём — опишите симптомы\n\n4️⃣ Анализы (при необходимости)\n\n5️⃣ Диагноз и рецепт\n\n6️⃣ Оплата\n\n7️⃣ Получение лекарств'
      }
      ,
      tip: {
        zh: '很多医院有国际医疗部（International Department），有英语服务，挂号费较高但沟通更方便。留学生可以先去学校的医务室（校医院），转诊后再去大医院，这样医保报销比例更高。',
        en: 'Many hospitals have an International Department with English service — higher registration fees but easier communication. International students can first visit the campus clinic, then get a referral to larger hospitals for better insurance reimbursement.',
        ru: 'Во многих больницах есть международное отделение с англоязычным обслуживанием — дороже, но проще общаться. Студентам стоит сначала обратиться в университетскую поликлинику, а по направлению — в крупную больницу для лучшего возмещения по страховке.'
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
