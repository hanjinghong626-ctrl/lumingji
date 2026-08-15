// Guide: 医疗保险使用指南
export default {
  id: 'health-insurance',
  category: 'medical',
  icon: '🛡️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 45,
  apps: [],
  prerequisites: ['hospital-guide'],
  tags: ['insurance', 'medical', 'reimbursement'],
  title: {
    zh: '医疗保险使用指南',
    en: 'Health Insurance Guide',
    ru: 'Руководство по медицинскому страхованию'
  },
  summary: {
    zh: '留学生医保类型、报销流程、覆盖范围与理赔技巧',
    en: 'Student insurance types, reimbursement process, coverage and claims tips',
    ru: 'Типы студенческой страховки, процесс возмещения, покрытие и советы'
  },
  intro: {
    zh: '中国要求所有来华留学生购买医疗保险。了解你的保险覆盖什么、怎么报销、需要哪些材料，可以避免很多不必要的花费。',
    en: 'China requires all international students to have health insurance. Understanding what your insurance covers, how to get reimbursed, and what documents you need can save you unnecessary expenses.',
    ru: 'Китай требует от всех иностранных студентов иметь медицинскую страховку. Понимание покрытия, процесса возмещения и необходимых документов сэкономит вам деньги.'
  },
  preparation: {
    zh: [
      '保险单/保险卡',
      '护照',
      '就诊发票和病历'
    ],
    en: [
      'Insurance policy/card',
      'Passport',
      'Medical receipts and records'
    ],
    ru: [
      'Полис/карточка страховки',
      'Паспорт',
      'Медицинские чеки и записи'
    ]
  },
    steps: [
    {
      title: { zh: '来华留学生通常有两种保险', en: 'School-purchased insurance', ru: 'Два типа страховки' },
      desc: {
        zh: '来华留学生通常有两种保险：\n\n🏫 学校统一购买的保险\n• 通常是"来华留学生综合保险"\n• 年费约400-800元\n• 覆盖：门诊、住院、意外伤害\n• 报销比例：校医院70-90%，转诊医院50-70%\n• 注意：通常有免赔额（如200元以下不报）',
        en: 'International students in China typically have two types of insurance:\n\n🏫 School-purchased insurance\n• Usually "Comprehensive Insurance for International Students"\n• Annual fee ~¥400-800\n• Coverage: outpatient, hospitalization, accidents\n• Reimbursement: campus clinic 70-90%, referred hospitals 50-70%\n• Note: usually has a deductible (e.g., under ¥200 not covered)',
        ru: 'Два типа страховки:\n\n🏫 Университетская\n• Обычно "Комплексная страховка для иностранных студентов"\n• 400-800 ¥/год\n• Покрытие: амбулаторно, стационар, травмы\n• Возмещение: поликлиника 70-90%, другие больницы 50-70%\n• Есть франшиза (до 200 ¥ не возмещается)'
      }
    },
    {
      title: { zh: '个人购买的商业保险', en: 'Personal commercial insurance', ru: 'Коммерческая — шире покрытие' },
      desc: {
        zh: '💼 个人购买的商业保险\n• 覆盖范围更广\n• 可能包含牙科、眼科等\n• 适合有特殊需求的学生',
        en: '💼 Personal commercial insurance\n• Broader coverage\n• May include dental, vision, etc.\n• Suitable for students with special needs',
        ru: '💼 Коммерческая — шире покрытие'
      }
    },
    {
      title: { zh: '报销所需材料', en: 'Reimbursement documents needed', ru: 'Для возмещения' },
      desc: {
        zh: '📋 报销所需材料\n• 门诊：发票 + 病历 + 处方 + 费用清单\n• 住院：发票 + 出院小结 + 费用明细 + 诊断证明\n• 意外伤害：以上 + 事故证明',
        en: '📋 Reimbursement documents needed\n• Outpatient: receipt + medical record + prescription + cost breakdown\n• Hospitalization: receipt + discharge summary + cost details + diagnosis\n• Accidents: above + accident report',
        ru: '📋 Для возмещения:\n• Амбулаторно: чек + запись + рецепт + детали расходов\n• Стационар: + выписка + диагноз'
      }
    },
    {
      title: { zh: '所有材料都要保留原件！报销时需要提交。', en: 'Step 4', ru: 'Храните все оригиналы!' },
      desc: {
        zh: '💡 所有材料都要保留原件！报销时需要提交。',
        en: '💡 Keep all original documents! They\'re needed for reimbursement.',
        ru: '💡 Храните все оригиналы!'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '回国看病能报销吗？',
        en: 'Can I get reimbursed for treatment in my home country?',
        ru: 'Можно ли получить возмещение за лечение на родине?'
      },
      a: {
        zh: '通常不可以。留学生医保一般只覆盖在中国境内医疗机构的就诊费用。假期回国期间的医疗费用需要自行购买旅行保险覆盖。',
        en: 'Usually no. Student insurance typically only covers treatment at Chinese medical institutions. Medical expenses during holidays back home need separate travel insurance.',
        ru: 'Обычно нет. Страховка покрывает только лечение в Китае. На родине нужна отдельная страховка.'
      }
    }
  ],
  nextGuides: ['mental-health', 'emergency-room']
};
