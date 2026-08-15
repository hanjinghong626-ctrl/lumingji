/**
 * 鹿鸣集 · 奖学金数据库
 * 为AI助手提供真实可查的奖学金数据
 * 
 * 数据来源：CSC官网、各大学国际学生招生简章（公开信息）
 * ⚠️ 金额和时间仅供参考，以学校/官方最新通知为准
 */

// ===== 奖学金数据 =====
const scholarshipData = {
  // ---------- 中国政府奖学金 (CSC) ----------
  csc: {
    id: 'csc',
    name: { zh: '中国政府奖学金', en: 'Chinese Government Scholarship (CSC)', ru: 'Стипендия правительства КНР (CSC)' },
    type: 'government',
    level: ['本科', '硕士', '博士', '进修生', '高级进修生'],
    coverage: {
      tuition: { zh: '全额免除', en: 'Full tuition waiver', ru: 'Полное освобождение от оплаты обучения' },
      accommodation: { zh: '免费校内宿舍或住房补贴', en: 'Free on-campus housing or housing subsidy', ru: 'Бесплатное общежитие или субсидия на жильё' },
      medical: { zh: '综合医疗保险', en: 'Comprehensive medical insurance', ru: 'Медицинская страховка' },
      monthly: {
        bachelor: 2500,
        master: 3000,
        doctoral: 3500,
        general_scholar: 2500,
        senior_scholar: 3500,
      },
      currency: 'CNY'
    },
    eligibility: {
      zh: '非中国公民，身心健康，符合申请项目的学历和年龄要求的来华留学生',
      en: 'Non-Chinese citizen, in good health, meeting academic and age requirements',
      ru: 'Не гражданин КНР, хорошее здоровье, соответствие требованиям программы'
    },
    applicationTime: {
      zh: '通常每年1月初至4月初（因推荐渠道不同而异）',
      en: 'Usually early January to early April (varies by nomination channel)',
      ru: 'Обычно с начала января по начало апреля'
    },
    applicationChannel: {
      zh: [
        'Type A：通过本国教育部/中国大使馆推荐（ bilateral program）',
        'Type B：通过中国高校直接推荐（ university program）',
        '中国-欧盟、中国-东盟等专项项目',
      ],
      en: [
        'Type A: Through home country ministry/Chinese Embassy (bilateral)',
        'Type B: Through Chinese university recommendation',
        'Special programs: China-EU, China-ASEAN, etc.',
      ],
      ru: [
        'Тип A: Через министерство образования своей страны/посольство КНР',
        'Тип B: Через рекомендацию китайского университета',
        'Специальные программы: Китай-ЕС, Китай-АСЕАН и др.',
      ]
    },
    website: 'https://www.csc.edu.cn/study',
    notes: {
      zh: 'CSC是最全面的奖学金，覆盖学费+住宿+医保+生活费。竞争激烈，建议提前6个月准备材料。',
      en: 'CSC is the most comprehensive: tuition + housing + insurance + living stipend. Highly competitive, start preparing 6 months early.',
      ru: 'CSC — самая полная стипендия: обучение + жильё + страховка + проживание. Высокая конкуренция, готовьтесь за 6 месяцев.'
    }
  },

  // ---------- 国际中文教师奖学金（原孔子学院奖学金）----------
  cilsc: {
    id: 'cilsc',
    name: { zh: '国际中文教师奖学金', en: 'International Chinese Language Teachers Scholarship', ru: 'Стипендия учителей китайского языка' },
    type: 'government',
    level: ['汉语进修生', '汉语本科', '汉语国际教育硕士', '汉语国际教育博士'],
    coverage: {
      tuition: { zh: '全额免除', en: 'Full tuition waiver', ru: 'Полное освобождение' },
      accommodation: { zh: '免费校内宿舍', en: 'Free on-campus housing', ru: 'Бесплатное общежитие' },
      medical: { zh: '综合医疗保险', en: 'Medical insurance', ru: 'Медицинская страховка' },
      monthly: {
        oneSemester: 2500,
        bachelor: 2500,
        master: 3000,
        doctoral: 3500,
      },
      currency: 'CNY'
    },
    eligibility: {
      zh: '非中国国籍，HSK/HSKK成绩达标，年龄在16-35岁（进修生）/ 45岁（硕博）',
      en: 'Non-Chinese, HSK/HSKK scores meet requirements, age 16-35 (non-degree) / 45 (graduate)',
      ru: 'Не гражданин КНР, оценки HSK/HSKK, возраст 16-35 / до 45 (магистр/доктор)'
    },
    applicationTime: {
      zh: '每年3月（秋季入学）和9月（春季入学）前提交',
      en: 'Submit before March (fall) and September (spring) each year',
      ru: 'Подача до марта (осень) и сентября (весна)'
    },
    website: 'https://www.chinese.cn',
    notes: {
      zh: '原孔子学院奖学金，2020年更名。专注中文教育方向，需通过HSK考试。',
      en: 'Formerly Confucius Institute Scholarship, renamed in 2020. Focused on Chinese language education, requires HSK.',
      ru: 'Ранее стипендия Института Конфуция, переименована в 2020. Направление китайского языка, требуется HSK.'
    }
  },

  // ---------- 地方政府奖学金 ----------
  localGovernment: {
    id: 'local-gov',
    name: { zh: '地方政府奖学金', en: 'Local Government Scholarship', ru: 'Стипендия местного правительства' },
    type: 'local',
    examples: [
      {
        city: { zh: '北京市', en: 'Beijing', ru: 'Пекин' },
        name: { zh: '北京市外国留学生奖学金', en: 'Beijing Municipal Government Scholarship', ru: 'Стипендия правительства Пекина' },
        amount: { zh: '全额（免学费+住宿+生活费2500-3500/月）或半额（免学费）', en: 'Full (tuition+housing+2500-3500/month) or Half (tuition only)', ru: 'Полная (обучение+жильё+2500-3500/мес) или половинная (только обучение)' },
        website: 'https://educ.beijing.gov.cn'
      },
      {
        city: { zh: '上海市', en: 'Shanghai', ru: 'Шанхай' },
        name: { zh: '上海市政府奖学金', en: 'Shanghai Government Scholarship', ru: 'Стипендия правительства Шанхая' },
        amount: { zh: 'A类（全额）：免学费+住宿+生活费3000/月；B类（半额）：免学费', en: 'Type A (Full): tuition+housing+3000/month; Type B (Half): tuition only', ru: 'Тип A (полная): обучение+жильё+3000/мес; Тип B (половинная): только обучение' },
        website: 'https://edu.sh.gov.cn'
      },
      {
        city: { zh: '江苏省', en: 'Jiangsu', ru: 'Цзянсу' },
        name: { zh: '江苏省"茉莉花"奖学金', en: 'Jiangsu "Jasmine" Scholarship', ru: 'Стипендия "Жасмин" провинции Цзянсу' },
        amount: { zh: '全额：免学费+住宿+生活费；半额：免学费', en: 'Full: tuition+housing+living; Half: tuition only', ru: 'Полная: обучение+жильё+проживание; Половинная: только обучение' },
        website: 'http://jse.jiangsu.gov.cn'
      },
      {
        city: { zh: '浙江省', en: 'Zhejiang', ru: 'Чжэцзян' },
        name: { zh: '浙江省政府奖学金', en: 'Zhejiang Provincial Government Scholarship', ru: 'Стипендия правительства провинции Чжэцзян' },
        amount: { zh: '全额：免学费+住宿+生活费；半额：免学费', en: 'Full: tuition+housing+living; Half: tuition only', ru: 'Полная: обучение+жильё+проживание; Половинная: только обучение' },
        website: ''
      },
      {
        city: { zh: '广东省', en: 'Guangdong', ru: 'Гуандун' },
        name: { zh: '广东省优秀国际生奖学金', en: 'Guangdong Outstanding International Student Scholarship', ru: 'Стипендия для выдающихся иностранных студентов провинции Гуандун' },
        amount: { zh: '约6000-10000元/年（一次性发放）', en: 'Approx. ¥6,000-10,000/year (one-time)', ru: 'Ок. 6000-10000 ¥/год (единоразово)' },
        website: ''
      },
      {
        city: { zh: '山东省', en: 'Shandong', ru: 'Шаньдун' },
        name: { zh: '山东省政府奖学金', en: 'Shandong Provincial Government Scholarship', ru: 'Стипендия правительства провинции Шаньдун' },
        amount: { zh: '全额：免学费+住宿+生活费2500-3000/月', en: 'Full: tuition+housing+2500-3000/month', ru: 'Полная: обучение+жильё+2500-3000/мес' },
        website: ''
      },
      {
        city: { zh: '湖北省', en: 'Hubei', ru: 'Хубэй' },
        name: { zh: '湖北省政府奖学金', en: 'Hubei Provincial Government Scholarship', ru: 'Стипендия правительства провинции Хубэй' },
        amount: { zh: '全额：免学费+住宿+生活费', en: 'Full: tuition+housing+living', ru: 'Полная: обучение+жильё+проживание' },
        website: ''
      },
      {
        city: { zh: '青岛市', en: 'Qingdao', ru: 'Циндао' },
        name: { zh: '青岛市政府奖学金', en: 'Qingdao Municipal Government Scholarship', ru: 'Стипендия правительства Циндао' },
        amount: { zh: '具体金额因学校而异，通常包含部分学费减免', en: 'Amount varies by university, usually partial tuition reduction', ru: 'Сумма зависит от вуза, обычно частичное снижение оплаты' },
        website: ''
      },
    ],
    notes: {
      zh: '地方政府奖学金由各省市自行管理，金额和申请方式各不相同。通常需要通过所在大学申请。',
      en: 'Local government scholarships are managed by each province/city. Amounts and application methods vary. Usually applied through your university.',
      ru: 'Стипендии местных органов власти управляются каждой провинцией/городом. Суммы и способы подачи различаются. Обычно через университет.'
    }
  },

  // ---------- 大学奖学金（示例，各校不同）----------
  university: {
    id: 'university',
    name: { zh: '大学自设奖学金', en: 'University Scholarships', ru: 'Университетские стипендии' },
    type: 'university',
    examples: [
      {
        university: { zh: '北京大学', en: 'Peking University', ru: 'Пекинский университет' },
        scholarships: [
          { name: { zh: '北大外国留学生奖学金', en: 'PKU International Student Scholarship', ru: 'Стипендия PKU для иностранных студентов' }, amount: { zh: '全额/半额/部分学费减免', en: 'Full/Half/Partial tuition waiver', ru: 'Полная/половинная/частичная' } },
        ]
      },
      {
        university: { zh: '清华大学', en: 'Tsinghua University', ru: 'Университет Цинхуа' },
        scholarships: [
          { name: { zh: '清华大学国际学生奖学金', en: 'Tsinghua International Student Scholarship', ru: 'Стипендия Цинхуа для иностранных студентов' }, amount: { zh: '全额/半额学费减免+生活费', en: 'Full/Half tuition + living stipend', ru: 'Полная/половинная обучение + проживание' } },
        ]
      },
      {
        university: { zh: '中央音乐学院', en: 'Central Conservatory of Music', ru: 'Центральная консерватория музыки' },
        scholarships: [
          { name: { zh: '中央音乐学院国际学生奖学金', en: 'CCOM International Student Scholarship', ru: 'Стипендия CCOM для иностранных студентов' }, amount: { zh: '部分学费减免，具体咨询国际交流处', en: 'Partial tuition waiver, consult international office', ru: 'Частичное снижение, уточните в международном отделе' } },
        ]
      },
      {
        university: { zh: '中国音乐学院', en: 'China Conservatory of Music', ru: 'Китайская консерватория музыки' },
        scholarships: [
          { name: { zh: '中国音乐学院国际学生奖学金', en: 'CCM International Student Scholarship', ru: 'Стипендия CCM для иностранных студентов' }, amount: { zh: '部分学费减免，具体咨询国际交流处', en: 'Partial tuition waiver, consult international office', ru: 'Частичное снижение, уточните в международном отделе' } },
        ]
      },
      {
        university: { zh: '上海音乐学院', en: 'Shanghai Conservatory of Music', ru: 'Шанхайская консерватория музыки' },
        scholarships: [
          { name: { zh: '上海音乐学院国际学生奖学金', en: 'SHCM International Student Scholarship', ru: 'Стипендия SHCM для иностранных студентов' }, amount: { zh: '部分学费减免+上海市政府奖学金名额', en: 'Partial tuition + Shanghai Govt Scholarship quota', ru: 'Частичное снижение + квота стипендии Шанхая' } },
        ]
      },
    ],
    notes: {
      zh: '大多数中国高校都有自己的外国留学生奖学金体系，金额和条件各不相同。音乐院校名额较少，建议同时申请CSC和地方政府奖学金。',
      en: 'Most Chinese universities have their own scholarship systems for international students. Music conservatories have limited quotas — apply for CSC and local government scholarships simultaneously.',
      ru: 'Большинство вузов имеют свою систему стипендий. В консерваториях квоты ограничены — подавайте на CSC и стипендии местного правительства одновременно.'
    }
  },

  // ---------- 企业/社会奖学金 ----------
  enterprise: {
    id: 'enterprise',
    name: { zh: '企业/社会奖学金', en: 'Enterprise / Social Scholarships', ru: 'Корпоративные / общественные стипендии' },
    type: 'enterprise',
    examples: [
      {
        name: { zh: '华为奖学金', en: 'Huawei Scholarship', ru: 'Стипендия Huawei' },
        amount: { zh: '约6000-10000元/年', en: 'Approx. ¥6,000-10,000/year', ru: 'Ок. 6000-10000 ¥/год' },
        eligibility: { zh: '理工科优秀国际留学生', en: 'Excellent international students in STEM', ru: 'Отличники-иностранцы технических специальностей' },
      },
      {
        name: { zh: '中日友好奖学金', en: 'China-Japan Friendship Scholarship', ru: 'Стипендия дружбы Китай-Япония' },
        amount: { zh: '约14万日元/月（约合人民币7000-8000元）', en: 'Approx. ¥140,000 JPY/month (≈¥7,000-8,000 CNY)', ru: 'Ок. 140 000 ¥/мес (≈7000-8000 ¥)' },
        eligibility: { zh: '特定大学的中国/日本留学生', en: 'Students at designated universities', ru: 'Студенты определённых вузов' },
      },
      {
        name: { zh: '中俄政府互换奖学金', en: 'China-Russia Government Exchange Scholarship', ru: 'Российско-китайская стипендия по обмену' },
        amount: { zh: '按CSC标准或俄方标准执行', en: 'Based on CSC or Russian government standards', ru: 'По стандартам CSC или правительства РФ' },
        eligibility: { zh: '中国/俄罗斯公民，两国有合作项目的院校', en: 'Chinese/Russian citizens, universities with bilateral programs', ru: 'Граждане Китая/РФ, вузы с двусторонними программами' },
      },
    ],
    notes: {
      zh: '企业奖学金名额少、竞争激烈，通常由大学推荐。建议优先申请CSC和地方政府奖学金。',
      en: 'Enterprise scholarships are rare and competitive, usually nominated by universities. Prioritize CSC and local government scholarships.',
      ru: 'Корпоративные стипендии редки и конкурентны, обычно по рекомендации вуза. Приоритет — CSC и стипендии местных органов власти.'
    }
  },
};

// ===== 申请时间线 =====
const applicationTimeline = {
  zh: {
    title: '📅 奖学金申请时间线',
    steps: [
      { month: '1-3月', task: '确定目标学校和奖学金类型，准备申请材料（成绩单、推荐信、个人陈述、护照复印件）' },
      { month: '3-4月', task: '提交CSC申请（Type A/B）、各大学自主招生申请、地方政府奖学金申请' },
      { month: '5-6月', task: '等待审核结果，部分学校有面试' },
      { month: '7-8月', task: '收到录取通知，办理签证（X1/X2），准备来华' },
      { month: '9月', task: '入学注册，申请校内奖学金（如有第二轮）' },
    ]
  },
  en: {
    title: '📅 Scholarship Application Timeline',
    steps: [
      { month: 'Jan-Mar', task: 'Choose target universities and scholarship types, prepare documents (transcripts, recommendation letters, personal statement, passport copy)' },
      { month: 'Mar-Apr', task: 'Submit CSC (Type A/B), university, and local government scholarship applications' },
      { month: 'May-Jun', task: 'Wait for results, some universities conduct interviews' },
      { month: 'Jul-Aug', task: 'Receive admission, apply for visa (X1/X2), prepare for China' },
      { month: 'Sep', task: 'Enroll, apply for on-campus scholarships (if 2nd round available)' },
    ]
  },
  ru: {
    title: '📅 Календарь подачи заявок на стипендию',
    steps: [
      { month: 'Янв-Мар', task: 'Выберите вузы и типы стипендий, подготовьте документы (транскрипт, рекомендации, эссе, копия паспорта)' },
      { month: 'Мар-Апр', task: 'Подайте заявку CSC (тип A/B), университетские и местные стипендии' },
      { month: 'Май-Июн', task: 'Ожидание результатов, некоторые вузы проводят собеседования' },
      { month: 'Июл-Авг', task: 'Получение уведомления, оформление визы (X1/X2), подготовка к поездке' },
      { month: 'Сен', task: 'Зачисление, подача на campus-стипендии (если есть 2-й раунд)' },
    ]
  }
};

// ===== 搜索功能 =====
/**
 * 检测用户是否在查询奖学金相关信息
 */
function detectScholarshipQuery(message) {
  const msg = message.toLowerCase();
  const patterns = [
    /奖学金/, /scholarship/i, /стипенди/i,
    /CSC/, /国家留学基金/, /中国.*奖学金/,
    /免学费/, /tuition.*waiver/i, /освоб.*обуч/i,
    /生活费.*补助/, /living.*allowance/i, /monthly.*stipend/i,
    /助学/, /资助/, /financial.*aid/i, /финанс.*помощ/i,
    /公费/, /全额/, /full.*funded/i, /полн.*стипен/i,
    /申请.*钱/, /apply.*money/i,
    /有没有.*钱/, /is there.*fund/i, /есть.*стипен/i,
    /孔子学院/, /confucius/i, /конфуц/i,
    /国际中文教师/,
  ];
  return patterns.some(p => p.test(msg));
}

/**
 * 搜索奖学金信息
 * @param {string} query 用户查询
 * @param {string} lang 语言偏好
 * @returns {Object|null} 匹配的奖学金信息
 */
function searchScholarships(query, lang = 'zh') {
  const q = query.toLowerCase();
  const results = [];

  // 搜索CSC
  if (/csc|中国政府|government|правительств|国家留学基金|全额/.test(q)) {
    results.push({
      ...scholarshipData.csc,
      matchType: 'exact'
    });
  }

  // 搜索国际中文教师奖学金
  if (/孔子学院|confucius|конфуц|国际中文教师|汉语.*奖学金|chinese.*teacher/.test(q)) {
    results.push({
      ...scholarshipData.cilsc,
      matchType: 'exact'
    });
  }

  // 搜索地方政府奖学金
  if (/地方|省|市|local|местн|правительств/.test(q)) {
    results.push({
      ...scholarshipData.localGovernment,
      matchType: 'exact'
    });
  }

  // 搜索特定城市
  const cityMatch = query.match(/(北京|上海|江苏|浙江|广东|山东|湖北|青岛|南京|广州|武汉)/);
  if (cityMatch) {
    const cityName = cityMatch[1];
    const localExamples = scholarshipData.localGovernment.examples.filter(e =>
      e.city.zh.includes(cityName) || e.city.en.toLowerCase().includes(cityName.toLowerCase())
    );
    if (localExamples.length > 0) {
      results.push({
        ...scholarshipData.localGovernment,
        examples: localExamples,
        matchType: 'city-specific'
      });
    }
  }

  // 搜索大学奖学金
  if (/大学|学院|university|вуз|университет|学校/.test(q)) {
    results.push({
      ...scholarshipData.university,
      matchType: 'exact'
    });
  }

  // 搜索音乐学院
  if (/音乐| conservatory|conservatoire|консерватор|music/.test(q)) {
    const musicSchools = scholarshipData.university.examples.filter(e =>
      /音乐|music|музык|Conservatory|Conservatoire|консерватор/i.test(JSON.stringify(e.university))
    );
    if (musicSchools.length > 0) {
      results.push({
        ...scholarshipData.university,
        examples: musicSchools,
        matchType: 'music-specific'
      });
    }
  }

  // 搜索企业奖学金
  if (/企业|华为|公司|enterprise|company|корпоратив|huawei/.test(q)) {
    results.push({
      ...scholarshipData.enterprise,
      matchType: 'exact'
    });
  }

  // 搜索中俄相关
  if (/俄|روس|russia|росс|china.*russia|中俄/.test(q)) {
    const rusExamples = scholarshipData.enterprise.examples.filter(e =>
      /俄|روس|russia|росс/i.test(JSON.stringify(e.name))
    );
    if (rusExamples.length > 0) {
      results.push({
        ...scholarshipData.enterprise,
        examples: rusExamples,
        matchType: 'russia-specific'
      });
    }
  }

  // 如果没匹配到特定的，但检测到奖学金关键词，返回全部摘要
  if (results.length === 0 && detectScholarshipQuery(query)) {
    results.push({
      type: 'overview',
      data: scholarshipData,
      matchType: 'general'
    });
  }

  return results.length > 0 ? results : null;
}

/**
 * 格式化奖学金搜索结果为AI上下文
 */
function formatScholarshipContext(results, lang = 'zh') {
  if (!results || results.length === 0) return '';

  let context = '\n\n🎓 === 奖学金数据 ===\n';

  for (const result of results) {
    if (result.type === 'overview') {
      // 返回所有奖学金类型摘要
      context += '\n📋 中国主要奖学金类型一览：\n';
      for (const [key, data] of Object.entries(result.data)) {
        const name = data.name?.[lang] || data.name?.zh || key;
        context += `\n• ${name}\n`;
        if (data.coverage?.monthly) {
          const m = data.coverage.monthly;
          const amounts = Object.entries(m)
            .filter(([k, v]) => typeof v === 'number')
            .map(([k, v]) => `${k}: ¥${v}/月`)
            .join(', ');
          if (amounts) context += `  生活津贴: ${amounts}\n`;
        }
        if (data.notes) {
          context += `  ${data.notes[lang] || data.notes.zh}\n`;
        }
      }
      // 添加时间线
      const timeline = applicationTimeline[lang] || applicationTimeline.zh;
      context += `\n${timeline.title}\n`;
      timeline.steps.forEach(s => {
        context += `  ${s.month}: ${s.task}\n`;
      });
    } else if (result.coverage) {
      // 政府/特定奖学金
      const name = result.name?.[lang] || result.name?.zh || result.id;
      context += `\n📌 ${name}\n`;
      context += `  类型: ${result.type}\n`;
      context += `  覆盖层次: ${result.level?.join(', ')}\n`;
      if (result.coverage.tuition) {
        context += `  学费: ${result.coverage.tuition[lang] || result.coverage.tuition.zh}\n`;
      }
      if (result.coverage.accommodation) {
        context += `  住宿: ${result.coverage.accommodation[lang] || result.coverage.accommodation.zh}\n`;
      }
      if (result.coverage.medical) {
        context += `  保险: ${result.coverage.medical[lang] || result.coverage.medical.zh}\n`;
      }
      if (result.coverage.monthly) {
        const m = result.coverage.monthly;
        if (m.bachelor) context += `  本科生活津贴: ¥${m.bachelor}/月\n`;
        if (m.master) context += `  硕士生活津贴: ¥${m.master}/月\n`;
        if (m.doctoral) context += `  博士生活津贴: ¥${m.doctoral}/月\n`;
        if (m.general_scholar) context += `  进修生生活津贴: ¥${m.general_scholar}/月\n`;
        if (m.senior_scholar) context += `  高级进修生生活津贴: ¥${m.senior_scholar}/月\n`;
      }
      if (result.eligibility) {
        context += `  申请条件: ${result.eligibility[lang] || result.eligibility.zh}\n`;
      }
      if (result.applicationTime) {
        context += `  申请时间: ${result.applicationTime[lang] || result.applicationTime.zh}\n`;
      }
      if (result.applicationChannel) {
        const channels = result.applicationChannel[lang] || result.applicationChannel.zh;
        context += `  申请渠道:\n`;
        channels.forEach(c => context += `    - ${c}\n`);
      }
      if (result.website) {
        context += `  官网: ${result.website}\n`;
      }
      if (result.notes) {
        context += `  📝 ${result.notes[lang] || result.notes.zh}\n`;
      }
    } else if (result.examples) {
      // 有示例列表的奖学金（地方政府/大学/企业）
      const name = result.name?.[lang] || result.name?.zh || result.id;
      context += `\n📌 ${name}\n`;
      result.examples.forEach(ex => {
        if (ex.city) {
          context += `  🏙️ ${ex.city[lang] || ex.city.zh}:\n`;
        }
        if (ex.university) {
          context += `  🏫 ${ex.university[lang] || ex.university.zh}:\n`;
        }
        if (ex.name) {
          context += `    ${ex.name[lang] || ex.name.zh}: `;
        }
        if (ex.amount) {
          context += `${ex.amount[lang] || ex.amount.zh}\n`;
        }
        if (ex.eligibility) {
          context += `    条件: ${ex.eligibility[lang] || ex.eligibility.zh}\n`;
        }
        if (ex.scholarships) {
          ex.scholarships.forEach(s => {
            context += `    ${s.name[lang] || s.name.zh}: ${s.amount[lang] || s.amount.zh}\n`;
          });
        }
      });
      if (result.notes) {
        context += `  📝 ${result.notes[lang] || result.notes.zh}\n`;
      }
    }
  }

  // 添加申请时间线（如果结果中没包含）
  const hasTimeline = results.some(r => r.type === 'overview');
  if (!hasTimeline) {
    const timeline = applicationTimeline[lang] || applicationTimeline.zh;
    context += `\n${timeline.title}\n`;
    timeline.steps.forEach(s => {
      context += `  ${s.month}: ${s.task}\n`;
    });
  }

  context += '\n⚠️ 以上金额和数据仅供参考，具体以各大学和国际学生办公室最新通知为准。';

  return context;
}

module.exports = {
  scholarshipData,
  applicationTimeline,
  detectScholarshipQuery,
  searchScholarships,
  formatScholarshipContext,
};
