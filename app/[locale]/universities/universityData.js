// 青岛8所高校完整数据
export const universities = [
  {
    id: 'ouc',
    name: { zh: '中国海洋大学', ru: 'Университет Океана Китая', en: 'Ocean University of China' },
    shortName: { zh: '海大', ru: 'ОУК', en: 'OUC' },
    tags: { zh: ['985', '211', '双一流'], ru: ['985', '211', 'Двойной первый класс'], en: ['985', '211', 'Double First-Class'] },
    website: 'https://www.ouc.edu.cn',
    intlWebsite: 'https://iced.ouc.edu.cn',
    address: { zh: '青岛市崂山区松岭路238号', ru: '238 ул. Сунлин, район Лаошань, Циндао', en: '238 Songling Rd, Laoshan District, Qingdao' },
    lat: 36.1613, lng: 120.4990,
    description: {
      zh: '中国海洋大学是教育部直属的综合性重点大学，以海洋和水产学科为特色，是国家"985工程"和"211工程"重点建设高校。学校海洋科学学科全球领先，水产学科全国第一。',
      ru: 'Университет Океана Китая — комплексный исследовательский университет прямого подчинения Министерства образования, специализирующийся на океанологии и рыбоводстве. Является ключевым университетом проектов «985» и «211».',
      en: 'Ocean University of China is a comprehensive research university directly under the Ministry of Education, specializing in oceanography and fisheries. It is a key university of the national "985" and "211" projects.'
    },
    disciplines: {
      zh: [
        { name: '海洋科学', level: 'A+', note: '全国第1，全球第2' },
        { name: '水产', level: 'A+', note: '全国第1' },
        { name: '食品科学与工程', level: 'B+', note: 'ESI全球前1%' },
        { name: '药学', level: 'B', note: 'ESI全球前1%' }
      ],
      ru: [
        { name: 'Океанология', level: 'A+', note: '№1 в Китае, №2 в мире' },
        { name: 'Рыбоводство', level: 'A+', note: '№1 в Китае' },
        { name: 'Пищевая наука', level: 'B+', note: 'ESI топ-1%' },
        { name: 'Фармация', level: 'B', note: 'ESI топ-1%' }
      ],
      en: [
        { name: 'Ocean Science', level: 'A+', note: '#1 in China, #2 globally' },
        { name: 'Fisheries', level: 'A+', note: '#1 in China' },
        { name: 'Food Science & Engineering', level: 'B+', note: 'ESI top 1%' },
        { name: 'Pharmacy', level: 'B', note: 'ESI top 1%' }
      ]
    },
    tuition: {
      zh: { bachelor_zh: '18,000 元/年', bachelor_en: '8,000-23,000 元/年', master: '20,500-23,500 元/年', master_en: '25,000 元/年', doctor: '31,000 元/年', dorm: '5,500 元/学期' },
      ru: { bachelor_zh: '18 000 ¥/год', bachelor_en: '8 000–23 000 ¥/год', master: '20 500–23 500 ¥/год', master_en: '25 000 ¥/год', doctor: '31 000 ¥/год', dorm: '5 500 ¥/семестр' },
      en: { bachelor_zh: '¥18,000/year', bachelor_en: '¥8,000-23,000/year', master: '¥20,500-23,500/year', master_en: '¥25,000/year', doctor: '¥31,000/year', dorm: '¥5,500/semester' }
    },
    scholarships: {
      zh: ['中国政府奖学金（全额）', '国际中文教师奖学金', '校长奖学金（一等/二等/三等）'],
      ru: ['Стипендия правительства Китая (полная)', 'Стипендия преподавателя китайского языка', 'Стипендия ректора (I/II/III степень)'],
      en: ['Chinese Government Scholarship (full)', 'International Chinese Language Teacher Scholarship', 'Presidential Scholarship (1st/2nd/3rd class)']
    },
    admission: {
      zh: { deadline: '6月10日', language: 'HSK 4级 ≥ 180分', age: '本科16-30岁', degree: '高中毕业' },
      ru: { deadline: '10 июня', language: 'HSK 4 ≥ 180', age: '16–30 лет', degree: 'Аттестат' },
      en: { deadline: 'June 10', language: 'HSK 4 ≥ 180', age: '16–30 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['参与"蛟龙号"深潜器研发', '拥有崂山实验室（海洋领域国家实验室）', '海洋科学ESI全球前1‰', '国际学生约1500人'],
      ru: ['Участие в разработке батискафа «Цзяолун»', 'Национальная лаборатория Лаошань', 'Океанология в ESI топ-1‰', '≈1500 иностранных студентов'],
      en: ['Participated in "Jiaolong" deep-sea submersible R&D', 'Laoshan National Laboratory', 'Ocean Science in ESI top 1‰', '~1,500 international students']
    }
  },
  {
    id: 'upc',
    name: { zh: '中国石油大学（华东）', ru: 'Университет нефти Китая (Восток)', en: 'China University of Petroleum (East China)' },
    shortName: { zh: '石大', ru: 'УНК', en: 'UPC' },
    tags: { zh: ['211', '双一流'], ru: ['211', 'Двойной первый класс'], en: ['211', 'Double First-Class'] },
    website: 'https://www.upc.edu.cn',
    intlWebsite: 'https://www.upc.edu.cn',
    address: { zh: '青岛市黄岛区长江西路66号', ru: '66 ул. Чанцзян Си, район Хуандао', en: '66 Changjiang West Rd, Huangdao District' },
    lat: 35.9426, lng: 120.1762,
    description: {
      zh: '中国石油大学（华东）是教育部直属的全国重点大学，被誉为中国石油石化行业的"黄埔军校"。学校以石油与天然气工程、地质资源与地质工程为特色，与中国石油、中石化、中海油深度对接。',
      ru: 'Университет нефти Китая (Восточно-Китайский) — ключевой университет прямого подчинения Министерства образования, известный как «Хуанпу» нефтегазовой отрасли Китая.',
      en: 'China University of Petroleum (East China) is a national key university directly under the Ministry of Education, known as the "Whampoa Military Academy" of China\'s petroleum industry.'
    },
    disciplines: {
      zh: [
        { name: '石油与天然气工程', level: 'A+', note: '全国领先' },
        { name: '地质资源与地质工程', level: 'A+', note: '全国领先' },
        { name: '化学工程与技术', level: 'A-', note: 'ESI全球前1%' },
        { name: '地球科学', level: 'B+', note: 'ESI全球前1%' }
      ],
      ru: [
        { name: 'Нефтегазовая инженерия', level: 'A+', note: 'Лидер в Китае' },
        { name: 'Геологические ресурсы', level: 'A+', note: 'Лидер в Китае' },
        { name: 'Химическая инженерия', level: 'A-', note: 'ESI топ-1%' },
        { name: 'Науки о Земле', level: 'B+', note: 'ESI топ-1%' }
      ],
      en: [
        { name: 'Petroleum & Natural Gas Engineering', level: 'A+', note: 'Top in China' },
        { name: 'Geological Resources & Engineering', level: 'A+', note: 'Top in China' },
        { name: 'Chemical Engineering & Technology', level: 'A-', note: 'ESI top 1%' },
        { name: 'Earth Science', level: 'B+', note: 'ESI top 1%' }
      ]
    },
    tuition: {
      zh: { bachelor_zh: '约16,000 元/年', bachelor_en: '约18,000 元/年', master: '约20,000 元/年', master_en: '约22,000 元/年', doctor: '约26,000 元/年', dorm: '1,500-2,500 元/年' },
      ru: { bachelor_zh: '≈16 000 ¥/год', bachelor_en: '≈18 000 ¥/год', master: '≈20 000 ¥/год', master_en: '≈22 000 ¥/год', doctor: '≈26 000 ¥/год', dorm: '1 500–2 500 ¥/год' },
      en: { bachelor_zh: '~¥16,000/year', bachelor_en: '~¥18,000/year', master: '~¥20,000/year', master_en: '~¥22,000/year', doctor: '~¥26,000/year', dorm: '¥1,500-2,500/year' }
    },
    scholarships: {
      zh: ['中国政府奖学金', '中国石油企业奖学金'],
      ru: ['Стипендия правительства Китая', 'Корпоративная стипендия CNPC'],
      en: ['Chinese Government Scholarship', 'CNPC Corporate Scholarship']
    },
    admission: {
      zh: { deadline: '6月30日', language: 'HSK 4级 ≥ 180分', age: '本科18-25岁', degree: '高中毕业' },
      ru: { deadline: '30 июня', language: 'HSK 4 ≥ 180', age: '18–25 лет', degree: 'Аттестат' },
      en: { deadline: 'June 30', language: 'HSK 4 ≥ 180', age: '18–25 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['石油石化"黄埔军校"', '与中石油/中石化/中海油深度对接', '位于西海岸新区，临海环境优美', '8个学科进入ESI全球前1%'],
      ru: ['«Хуанпу» нефтегазовой отрасли', 'Связи с CNPC/Sinopec/CNOOC', 'Район Сибай, живописное побережье', '8 дисциплин в ESI топ-1%'],
      en: ['"Whampoa" of petroleum industry', 'Deep ties with CNPC/Sinopec/CNOOC', 'Located in West Coast New Area, beautiful seaside', '8 disciplines in ESI top 1%']
    }
  },
  {
    id: 'sdu-qd',
    name: { zh: '山东大学（青岛校区）', ru: 'Университет Шаньдун (Циндао)', en: 'Shandong University (Qingdao Campus)' },
    shortName: { zh: '山大', ru: 'Шаньдун', en: 'SDU' },
    tags: { zh: ['985', '211', '双一流'], ru: ['985', '211', 'Двойной первый класс'], en: ['985', '211', 'Double First-Class'] },
    website: 'https://www.sdu.edu.cn',
    intlWebsite: 'http://www.apply.sdu.edu.cn',
    address: { zh: '青岛市即墨区滨海路72号', ru: '72 ул. Биньхай, район Цимо', en: '72 Binhai Rd, Jimo District' },
    lat: 36.3653, lng: 120.6883,
    description: {
      zh: '山东大学是教育部直属的综合性全国重点大学，始建于1901年。青岛校区位于即墨区，面向黄海，校园建筑现代大气。山大主校区在济南，青岛校区聚焦计算机、国际政治、临床医学等学科。',
      ru: 'Университет Шаньдун — комплексный национальный ключевой университет, основанный в 1901 году. Циндаоский филиал расположен в районе Цимо, выходит к Жёлтому морю.',
      en: 'Shandong University is a comprehensive national key university directly under the Ministry of Education, founded in 1901. The Qingdao campus is located in Jimo District, facing the Yellow Sea.'
    },
    disciplines: {
      zh: [
        { name: '临床医学', level: 'A+', note: '全国第7，ESI前0.63‰（主校区）' },
        { name: '计算机科学与技术', level: 'B+', note: '青岛校区' },
        { name: '国际政治', level: 'B+', note: '青岛校区' },
        { name: '数学', level: 'A+', note: '全国领先' }
      ],
      ru: [
        { name: 'Клиническая медицина', level: 'A+', note: '№7 в Китае, ESI топ-0,63‰' },
        { name: 'Информатика', level: 'B+', note: 'Филиал Циндао' },
        { name: 'Международная политика', level: 'B+', note: 'Филиал Циндао' },
        { name: 'Математика', level: 'A+', note: 'Лидер в Китае' }
      ],
      en: [
        { name: 'Clinical Medicine', level: 'A+', note: '#7 in China, ESI top 0.63‰' },
        { name: 'Computer Science', level: 'B+', note: 'Qingdao campus' },
        { name: 'International Politics', level: 'B+', note: 'Qingdao campus' },
        { name: 'Mathematics', level: 'A+', note: 'Top in China' }
      ]
    },
    tuition: {
      zh: { bachelor_zh: '14,000-25,000 元/年', bachelor_en: '25,000 元/年（临床医学）', master: '18,000-22,000 元/年', master_en: '22,000-26,000 元/年', doctor: '28,000-32,000 元/年', dorm: '约1,000 元/月' },
      ru: { bachelor_zh: '14 000–25 000 ¥/год', bachelor_en: '25 000 ¥/год (клиническая медицина)', master: '18 000–22 000 ¥/год', master_en: '22 000–26 000 ¥/год', doctor: '28 000–32 000 ¥/год', dorm: '≈1 000 ¥/месяц' },
      en: { bachelor_zh: '¥14,000-25,000/year', bachelor_en: '¥25,000/year (Clinical Medicine)', master: '¥18,000-22,000/year', master_en: '¥22,000-26,000/year', doctor: '¥28,000-32,000/year', dorm: '~¥1,000/month' }
    },
    scholarships: {
      zh: ['中国政府奖学金', '山东大学国际学生奖学金'],
      ru: ['Стипендия правительства Китая', 'Стипендия для иностранных студентов Шаньдун'],
      en: ['Chinese Government Scholarship', 'SDU International Student Scholarship']
    },
    admission: {
      zh: { deadline: '6月30日', language: 'HSK 4级 ≥ 180分 / 雅思5.5+', age: '本科18-25岁', degree: '高中毕业' },
      ru: { deadline: '30 июня', language: 'HSK 4 ≥ 180 / IELTS 5.5+', age: '18–25 лет', degree: 'Аттестат' },
      en: { deadline: 'June 30', language: 'HSK 4 ≥ 180 / IELTS 5.5+', age: '18–25 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['综合性大学，学科门类齐全', '青岛校区面向黄海，校园现代', '临床医学ESI全球前0.63‰', '与济南主校区共享资源'],
      ru: ['Комплексный университет', 'Филиал Циндао выходит к морю', 'Клиническая медицина в ESI топ-0,63‰', 'Общие ресурсы с главным кампусом'],
      en: ['Comprehensive university', 'Qingdao campus faces the Yellow Sea', 'Clinical Medicine in ESI top 0.63‰', 'Shared resources with Jinan main campus']
    }
  },
  {
    id: 'qdu',
    name: { zh: '青岛大学', ru: 'Циндаоский университет', en: 'Qingdao University' },
    shortName: { zh: '青大', ru: 'Циндао', en: 'QDU' },
    tags: { zh: ['省属重点'], ru: ['Провинциальный ключевой'], en: ['Provincial Key'] },
    website: 'https://www.qdu.edu.cn',
    intlWebsite: 'https://cie.qdu.edu.cn',
    address: { zh: '青岛市市南区宁夏路308号', ru: '308 ул. Нинся, район Шинань, Циндао', en: '308 Ningxia Rd, Shinan District, Qingdao' },
    lat: 36.0720, lng: 120.4229,
    description: {
      zh: '青岛大学是山东省属重点综合性大学，始建于1909年。学校以医学见长，医学院实力雄厚。近年来与38个国家232所院校建立合作关系，国际学生约1000人。',
      ru: 'Циндаоский университет — провинциальный ключевой комплексный университет провинции Шаньдун, основанный в 1909 году. Школа медицины отличается высоким уровнем подготовки.',
      en: 'Qingdao University is a provincial key comprehensive university in Shandong Province, founded in 1909. The university excels in medical education with about 1,000 international students.'
    },
    disciplines: {
      zh: [
        { name: '临床医学', level: 'A-', note: '国家级特色专业，ESI前1%' },
        { name: '纺织科学与工程', level: 'B', note: '特色学科' },
        { name: '系统科学', level: 'B', note: 'ESI前1%' },
        { name: '电子信息工程', level: 'B+', note: '2026新增中外合作' }
      ],
      ru: [
        { name: 'Клиническая медицина', level: 'A-', note: 'Национальный特色, ESI топ-1%' },
        { name: 'Текстильная наука', level: 'B', note: 'Особенность вуза' },
        { name: 'Системная наука', level: 'B', note: 'ESI топ-1%' },
        { name: 'Электронная инженерия', level: 'B+', note: 'Новая программа (2026)' }
      ],
      en: [
        { name: 'Clinical Medicine', level: 'A-', note: 'National featured major, ESI top 1%' },
        { name: 'Textile Science', level: 'B', note: 'Featured discipline' },
        { name: 'System Science', level: 'B', note: 'ESI top 1%' },
        { name: 'Electronic & Information Engineering', level: 'B+', note: 'New program (2026)' }
      ]
    },
    tuition: {
      zh: { bachelor_zh: '14,000-18,000 元/年', bachelor_en: '16,000-20,000 元/年', master: '18,000-22,000 元/年', master_en: '20,000-25,000 元/年', doctor: '25,000-30,000 元/年', dorm: '约8,000 元/年' },
      ru: { bachelor_zh: '14 000–18 000 ¥/год', bachelor_en: '16 000–20 000 ¥/год', master: '18 000–22 000 ¥/год', master_en: '20 000–25 000 ¥/год', doctor: '25 000–30 000 ¥/год', dorm: '≈8 000 ¥/год' },
      en: { bachelor_zh: '¥14,000-18,000/year', bachelor_en: '¥16,000-20,000/year', master: '¥18,000-22,000/year', master_en: '¥20,000-25,000/year', doctor: '¥25,000-30,000/year', dorm: '~¥8,000/year' }
    },
    scholarships: {
      zh: ['山东省政府来华留学生奖学金', '青岛大学校长奖学金'],
      ru: ['Стипендия правительства провинции Шаньдун', 'Стипендия ректора'],
      en: ['Shandong Provincial Government Scholarship', 'Qingdao University Presidential Scholarship']
    },
    admission: {
      zh: { deadline: '6月30日', language: 'HSK 4级 ≥ 180分', age: '本科18-25岁', degree: '高中毕业' },
      ru: { deadline: '30 июня', language: 'HSK 4 ≥ 180', age: '18–25 лет', degree: 'Аттестат' },
      en: { deadline: 'June 30', language: 'HSK 4 ≥ 180', age: '18–25 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['医学院实力强（始建于1909年）', '与38国232所院校建立合作', '2025届深造率51.66%', '6个学科进入ESI全球前1%'],
      ru: ['Сильная медицинская школа (осн. 1909)', 'Партнёрства с 232 вузами в 38 странах', '51,66% выпускников продолжают обучение', '6 дисциплин в ESI топ-1%'],
      en: ['Strong medical school (founded 1909)', 'Partnerships with 232 institutions in 38 countries', '51.66% pursue further studies', '6 disciplines in ESI top 1%']
    }
  },
  {
    id: 'qust',
    name: { zh: '青岛科技大学', ru: 'Университет науки и технологий Циндао', en: 'Qingdao University of Science & Technology' },
    shortName: { zh: '科大', ru: 'КУНТ', en: 'QUST' },
    tags: { zh: ['省属重点'], ru: ['Провинциальный ключевой'], en: ['Provincial Key'] },
    website: 'https://www.qust.edu.cn',
    intlWebsite: 'https://cic.qust.edu.cn',
    address: { zh: '青岛市崂山区松岭路99号', ru: '99 ул. Сунлин, район Лаошань', en: '99 Songling Rd, Laoshan District' },
    lat: 36.1184, lng: 120.4781,
    description: {
      zh: '青岛科技大学是山东省属重点大学，被誉为中国橡胶工业的"黄埔军校"。学校以化学工程、高分子材料见长，2025年秋季国际学生突破500人。',
      ru: 'Университет науки и технологий Циндао — провинциальный ключевой университет, известный как «Хуанпу» китайской каучуковой промышленности.',
      en: 'Qingdao University of Science & Technology is a provincial key university, known as the "Whampoa" of China\'s rubber industry. International students exceeded 500 in 2025.'
    },
    disciplines: {
      zh: [
        { name: '化学工程与技术', level: 'B+', note: '特色学科' },
        { name: '高分子材料与工程', level: 'A-', note: '"橡胶工业黄埔"' },
        { name: '材料科学与工程', level: 'B', note: 'ESI前1%' },
        { name: '人工智能', level: 'B', note: '2026新开英语授课' }
      ],
      ru: [
        { name: 'Химическая инженерия', level: 'B+', note: 'Особенность вуза' },
        { name: 'Полимерные материалы', level: 'A-', note: '«Хуанпу» каучуковой промышленности' },
        { name: 'Наука о материалах', level: 'B', note: 'ESI топ-1%' },
        { name: 'Искусственный интеллект', level: 'B', note: 'Новая англоязычная программа' }
      ],
      en: [
        { name: 'Chemical Engineering', level: 'B+', note: 'Featured discipline' },
        { name: 'Polymer Materials', level: 'A-', note: '"Whampoa" of rubber industry' },
        { name: 'Materials Science', level: 'B', note: 'ESI top 1%' },
        { name: 'Artificial Intelligence', level: 'B', note: 'New English-taught program' }
      ]
    },
    tuition: {
      zh: { bachelor_zh: '14,000-16,000 元/年', bachelor_en: '16,000-18,000 元/年', master: '18,000-20,000 元/年', master_en: '20,000-22,000 元/年', doctor: '22,000-26,000 元/年', dorm: '约6,000 元/年' },
      ru: { bachelor_zh: '14 000–16 000 ¥/год', bachelor_en: '16 000–18 000 ¥/год', master: '18 000–20 000 ¥/год', master_en: '20 000–22 000 ¥/год', doctor: '22 000–26 000 ¥/год', dorm: '≈6 000 ¥/год' },
      en: { bachelor_zh: '¥14,000-16,000/year', bachelor_en: '¥16,000-18,000/year', master: '¥18,000-20,000/year', master_en: '¥20,000-22,000/year', doctor: '¥22,000-26,000/year', dorm: '~¥6,000/year' }
    },
    scholarships: {
      zh: ['中国政府奖学金（B类）高水平研究生项目'],
      ru: ['Стипендия правительства Китая (категория B)'],
      en: ['Chinese Government Scholarship (Type B) for High-level Postgraduates']
    },
    admission: {
      zh: { deadline: '5月31日', language: 'HSK 4级 ≥ 180分', age: '本科18-25岁', degree: '高中毕业' },
      ru: { deadline: '31 мая', language: 'HSK 4 ≥ 180', age: '18–25 лет', degree: 'Аттестат' },
      en: { deadline: 'May 31', language: 'HSK 4 ≥ 180', age: '18–25 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['中国橡胶工业"黄埔军校"', '2025年国际学生突破500人', '人工智能英语授课新项目', '位于崂山区，紧邻中国海洋大学'],
      ru: ['«Хуанпу» каучуковой промышленности Китая', 'Иностранных студентов >500 в 2025', 'Новая англоязычная программа ИИ', 'Район Лаошань, рядом с УОК'],
      en: ['"Whampoa" of China\'s rubber industry', 'International students >500 in 2025', 'New AI English-taught program', 'Located in Laoshan, near OUC']
    }
  },
  {
    id: 'sdust',
    name: { zh: '山东科技大学', ru: 'Университет науки и технологии Шаньдун', en: 'Shandong University of Science and Technology' },
    shortName: { zh: '山科', ru: 'Шаньдун КТ', en: 'SDUST' },
    tags: { zh: ['省属重点'], ru: ['Провинциальный ключевой'], en: ['Provincial Key'] },
    website: 'https://www.sdust.edu.cn',
    intlWebsite: 'https://www.sdust.edu.cn',
    address: { zh: '青岛市黄岛区前湾港路579号', ru: '579 ул. Цяньваньган, район Хуандао', en: '579 Qianwan Port Rd, Huangdao District' },
    lat: 36.0018, lng: 120.1204,
    description: {
      zh: '山东科技大学是山东省属重点大学，以矿业、安全、测绘为特色。学校矿业工程、安全科学与工程、测绘科学与技术三个学科进入ESI全球前1‰。',
      ru: 'Университет науки и технологии Шаньдун — провинциальный ключевой университет, специализирующийся на горном деле, безопасности и геодезии. Три дисциплины в ESI топ-1‰.',
      en: 'Shandong University of Science and Technology is a provincial key university specializing in mining, safety, and surveying. Three disciplines are in the ESI top 1‰ globally.'
    },
    disciplines: {
      zh: [
        { name: '矿业工程', level: 'A-', note: 'ESI全球前1‰' },
        { name: '安全科学与工程', level: 'A-', note: 'ESI全球前1‰' },
        { name: '测绘科学与技术', level: 'B+', note: 'ESI全球前1‰' },
        { name: '工程学', level: 'B', note: 'ESI全球前1%' }
      ],
      ru: [
        { name: 'Горное дело', level: 'A-', note: 'ESI топ-1‰' },
        { name: 'Наука о безопасности', level: 'A-', note: 'ESI топ-1‰' },
        { name: 'Геодезия и картография', level: 'B+', note: 'ESI топ-1‰' },
        { name: 'Инженерия', level: 'B', note: 'ESI топ-1%' }
      ],
      en: [
        { name: 'Mining Engineering', level: 'A-', note: 'ESI top 1‰ globally' },
        { name: 'Safety Science & Engineering', level: 'A-', note: 'ESI top 1‰ globally' },
        { name: 'Surveying & Mapping', level: 'B+', note: 'ESI top 1‰ globally' },
        { name: 'Engineering', level: 'B', note: 'ESI top 1%' }
      ]
    },
    tuition: {
      zh: { bachelor_zh: '16,400-26,000 元/年', bachelor_en: '18,000-28,000 元/年', master: '20,000-24,000 元/年', master_en: '22,000-26,000 元/年', doctor: '26,000-30,000 元/年', dorm: '约5,000 元/年' },
      ru: { bachelor_zh: '16 400–26 000 ¥/год', bachelor_en: '18 000–28 000 ¥/год', master: '20 000–24 000 ¥/год', master_en: '22 000–26 000 ¥/год', doctor: '26 000–30 000 ¥/год', dorm: '≈5 000 ¥/год' },
      en: { bachelor_zh: '¥16,400-26,000/year', bachelor_en: '¥18,000-28,000/year', master: '¥20,000-24,000/year', master_en: '¥22,000-26,000/year', doctor: '¥26,000-30,000/year', dorm: '~¥5,000/year' }
    },
    scholarships: {
      zh: ['中国政府奖学金', '山东省政府奖学金'],
      ru: ['Стипендия правительства Китая', 'Стипендия правительства провинции Шаньдун'],
      en: ['Chinese Government Scholarship', 'Shandong Provincial Government Scholarship']
    },
    admission: {
      zh: { deadline: '6月30日', language: 'HSK 4级 ≥ 180分', age: '本科18-25岁', degree: '高中毕业' },
      ru: { deadline: '30 июня', language: 'HSK 4 ≥ 180', age: '18–25 лет', degree: 'Аттестат' },
      en: { deadline: 'June 30', language: 'HSK 4 ≥ 180', age: '18–25 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['三大学科ESI全球前1‰', '与意大利巴里理工大学合办硕士', '在青岛/泰安/济南三地办学', '位于黄岛区，靠近中国石油大学'],
      ru: ['3 дисциплины в ESI топ-1‰', 'Совместная магистратура с Политехническим университетом Бари', 'Кампусы в Циндао/Тайане/Цзинане', 'Район Хуандао, рядом с УНК'],
      en: ['3 disciplines in ESI top 1‰ globally', 'Joint Master\'s with Polytechnic University of Bari', 'Campuses in Qingdao/Tai\'an/Jinan', 'Located in Huangdao, near UPC']
    }
  },
  {
    id: 'qut',
    name: { zh: '青岛理工大学', ru: 'Технологический университет Циндао', en: 'Qingdao University of Technology' },
    shortName: { zh: '理工', ru: 'Циндао ТТ', en: 'QUT' },
    tags: { zh: ['省属'], ru: ['Провинциальный'], en: ['Provincial'] },
    website: 'https://www.qut.edu.cn',
    intlWebsite: 'https://oia.qut.edu.cn',
    address: { zh: '青岛市市北区抚顺路11号', ru: '11 ул. Фушунь, район Шибэй', en: '11 Fushun Rd, Shibei District' },
    lat: 36.1006, lng: 120.3656,
    description: {
      zh: '青岛理工大学是山东省属理工科大学，以建筑、土木工程见长。学校位于市北区市中心，交通便利。',
      ru: 'Технологический университет Циндао — провинциальный理工ический университет, известный архитектурой и гражданским строительством. Расположен в центре города.',
      en: 'Qingdao University of Technology is a provincial university of technology, known for architecture and civil engineering. Located in the city center.'
    },
    disciplines: {
      zh: [
        { name: '建筑学', level: 'B+', note: '省内领先' },
        { name: '土木工程', level: 'B+', note: '特色学科' },
        { name: '机械工程', level: 'B', note: 'ESI前1%' },
        { name: '环境工程', level: 'B', note: '特色方向' }
      ],
      ru: [
        { name: 'Архитектура', level: 'B+', note: 'Лидер в провинции' },
        { name: 'Гражданское строительство', level: 'B+', note: 'Особенность вуза' },
        { name: 'Машиностроение', level: 'B', note: 'ESI топ-1%' },
        { name: 'Экологическая инженерия', level: 'B', note: 'Особенное направление' }
      ],
      en: [
        { name: 'Architecture', level: 'B+', note: 'Leading in the province' },
        { name: 'Civil Engineering', level: 'B+', note: 'Featured discipline' },
        { name: 'Mechanical Engineering', level: 'B', note: 'ESI top 1%' },
        { name: 'Environmental Engineering', level: 'B', note: 'Featured direction' }
      ]
    },
    tuition: {
      zh: { bachelor_zh: '14,000-16,000 元/年', bachelor_en: '16,000-18,000 元/年', master: '18,000-22,000 元/年', master_en: '20,000-24,000 元/年', doctor: '24,000-28,000 元/年', dorm: '约5,000 元/年' },
      ru: { bachelor_zh: '14 000–16 000 ¥/год', bachelor_en: '16 000–18 000 ¥/год', master: '18 000–22 000 ¥/год', master_en: '20 000–24 000 ¥/год', doctor: '24 000–28 000 ¥/год', dorm: '≈5 000 ¥/год' },
      en: { bachelor_zh: '¥14,000-16,000/year', bachelor_en: '¥16,000-18,000/year', master: '¥18,000-22,000/year', master_en: '¥20,000-24,000/year', doctor: '¥24,000-28,000/year', dorm: '~¥5,000/year' }
    },
    scholarships: {
      zh: ['SQA项目奖学金（覆盖率72.4%）', '山东省政府奖学金'],
      ru: ['Стипендия SQA (покрытие 72,4%)', 'Стипендия правительства провинции Шаньдун'],
      en: ['SQA Program Scholarship (72.4% coverage)', 'Shandong Provincial Government Scholarship']
    },
    admission: {
      zh: { deadline: '6月30日', language: 'HSK 4级 ≥ 180分', age: '本科18-25岁', degree: '高中毕业' },
      ru: { deadline: '30 июня', language: 'HSK 4 ≥ 180', age: '18–25 лет', degree: 'Аттестат' },
      en: { deadline: 'June 30', language: 'HSK 4 ≥ 180', age: '18–25 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['建筑类学科省内领先', '市北校区位于市中心', 'SQA奖学金覆盖率72.4%', '与韩国又石大学等合作办学'],
      ru: ['Архитектура — лидер в провинции', 'Кампус в центре города', 'Покрытие стипендий SQA 72,4%', 'Партнёрство с вузами Кореи'],
      en: ['Architecture leading in the province', 'Campus in city center', 'SQA scholarship coverage 72.4%', 'Partnerships with Korean universities']
    }
  },
  {
    id: 'qau',
    name: { zh: '青岛农业大学', ru: 'Сельскохозяйственный университет Циндао', en: 'Qingdao Agricultural University' },
    shortName: { zh: '农大', ru: 'СХУЦ', en: 'QAU' },
    tags: { zh: ['省属'], ru: ['Провинциальный'], en: ['Provincial'] },
    website: 'https://www.qau.edu.cn',
    intlWebsite: 'https://io.qau.edu.cn',
    address: { zh: '青岛市城阳区长城路700号', ru: '700 ул. Чанчэн, район Чэнъян', en: '700 Changcheng Rd, Chengyang District' },
    lat: 36.3211, lng: 120.3976,
    description: {
      zh: '青岛农业大学是山东省属重点建设的农业院校。学校与英国皇家农业大学合办巴瑟斯未来农业科技学院，是全国农科领域办学规模最大的中外合作办学机构。',
      ru: 'Сельскохозяйственный университет Циндао — провинциальный ключевой аграрный университет. Совместно с Королевским сельскохозяйственным университетом Великобритании создан Институт Батерса.',
      en: 'Qingdao Agricultural University is a provincial key agricultural university. It co-established the Bathers Future Agriculture College with the Royal Agricultural University of the UK.'
    },
    disciplines: {
      zh: [
        { name: '农学', level: 'B+', note: '特色学科' },
        { name: '植物保护', level: 'B', note: 'ESI前1%' },
        { name: '动物医学', level: 'B+', note: '特色学科' },
        { name: '食品科学与工程', level: 'B', note: 'ESI前1%' }
      ],
      ru: [
        { name: 'Агрономия', level: 'B+', note: 'Особенность вуза' },
        { name: 'Защита растений', level: 'B', note: 'ESI топ-1%' },
        { name: 'Ветеринария', level: 'B+', note: 'Особенность вуза' },
        { name: 'Пищевая наука', level: 'B', note: 'ESI топ-1%' }
      ],
      en: [
        { name: 'Agronomy', level: 'B+', note: 'Featured discipline' },
        { name: 'Plant Protection', level: 'B', note: 'ESI top 1%' },
        { name: 'Veterinary Medicine', level: 'B+', note: 'Featured discipline' },
        { name: 'Food Science & Engineering', level: 'B', note: 'ESI top 1%' }
      ]
    },
    tuition: {
      zh: { bachelor_zh: '14,000-16,000 元/年', bachelor_en: '16,000-18,000 元/年', master: '18,000-22,000 元/年', master_en: '20,000-24,000 元/年', doctor: '24,000-28,000 元/年', dorm: '约4,500 元/年' },
      ru: { bachelor_zh: '14 000–16 000 ¥/год', bachelor_en: '16 000–18 000 ¥/год', master: '18 000–22 000 ¥/год', master_en: '20 000–24 000 ¥/год', doctor: '24 000–28 000 ¥/год', dorm: '≈4 500 ¥/год' },
      en: { bachelor_zh: '¥14,000-16,000/year', bachelor_en: '¥16,000-18,000/year', master: '¥18,000-22,000/year', master_en: '¥20,000-24,000/year', doctor: '¥24,000-28,000/year', dorm: '~¥4,500/year' }
    },
    scholarships: {
      zh: ['中国政府奖学金', '山东省政府来华留学生奖学金'],
      ru: ['Стипендия правительства Китая', 'Стипендия правительства провинции Шаньдун'],
      en: ['Chinese Government Scholarship', 'Shandong Provincial Government Scholarship']
    },
    admission: {
      zh: { deadline: '6月30日', language: 'HSK 4级 ≥ 180分', age: '本科18-25岁', degree: '高中毕业' },
      ru: { deadline: '30 июня', language: 'HSK 4 ≥ 180', age: '18–25 лет', degree: 'Аттестат' },
      en: { deadline: 'June 30', language: 'HSK 4 ≥ 180', age: '18–25 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['与英国皇家农业大学合办', '全国农科最大中外合作机构', '2026年首次招硕博留学生', '位于城阳区，环境清幽'],
      ru: ['Совместный проект с Королевским СХУ Великобритании', 'Крупнейший аграрный совместный институт в Китае', 'Первый набор магистрантов в 2026', 'Район Чэнъян, тихая среда'],
      en: ['Joint program with Royal Agricultural University UK', 'Largest Sino-foreign agricultural institution in China', 'First Master\'s & PhD international students in 2026', 'Located in Chengyang, peaceful environment']
    }
  }
];

export function getUniversityById(id) {
  return universities.find(u => u.id === id);
}
