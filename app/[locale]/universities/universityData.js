// 青岛高校完整数据 — 28所（含所有校区）
// 坐标来源：高德地图POI、Bigemap卫星地图、CSDN高校经纬度库、360地图等多源交叉验证

export const universities = [
  // ========== 公办本科（9所）==========
  {
    id: 'ouc',
    name: { zh: '中国海洋大学', ru: 'Университет Океана Китая', en: 'Ocean University of China' },
    shortName: { zh: '海大', ru: 'ОУК', en: 'OUC' },
    tags: { zh: ['985', '211', '双一流'], ru: ['985', '211', 'Двойной первый класс'], en: ['985', '211', 'Double First-Class'] },
    website: 'https://www.ouc.edu.cn',
    intlWebsite: 'https://iced.ouc.edu.cn',
    campuses: [
      { name: { zh: '崂山校区', ru: 'Кампус Лаошань', en: 'Laoshan Campus' }, address: { zh: '青岛市崂山区松岭路238号', ru: '238 ул. Сунлин, район Лаошань', en: '238 Songling Rd, Laoshan' }, lat: 36.1613, lng: 120.4990 },
      { name: { zh: '鱼山校区', ru: 'Кампус Юйшань', en: 'Yushan Campus' }, address: { zh: '青岛市市南区鱼山路5号', ru: '5 ул. Юйшань, район Шинань', en: '5 Yushan Rd, Shinan' }, lat: 36.0636, lng: 120.3369 },
      { name: { zh: '浮山校区', ru: 'Кампус Фушань', en: 'Fushan Campus' }, address: { zh: '青岛市崂山区香港东路23号', ru: '23 Восточный Hongkong, Лаошань', en: '23 Hongkong East Rd, Laoshan' }, lat: 36.0735, lng: 120.4339 },
      { name: { zh: '西海岸校区', ru: 'Кампус Сибай', en: 'West Coast Campus' }, address: { zh: '青岛市黄岛区三沙路1299号', ru: '1299 ул. Саньша, район Хуандао', en: '1299 Sansha Rd, Huangdao' }, lat: 35.7781, lng: 120.0222 },
    ],
    lat: 36.1613, lng: 120.4990,
    description: {
      zh: '中国海洋大学是教育部直属的综合性重点大学，以海洋和水产学科为特色，是国家"985工程"和"211工程"重点建设高校。学校海洋科学学科全球领先，水产学科全国第一。',
      ru: 'Университет Океана Китая — комплексный исследовательский университет прямого подчинения Министерства образования, специализирующийся на океанологии и рыбоводстве. Является ключевым университетом проектов «985» и «211».',
      en: 'Ocean University of China is a comprehensive research university directly under the Ministry of Education, specializing in oceanography and fisheries. It is a key university of the national "985" and "211" projects.'
    },
    disciplines: {
      zh: [{ name: '海洋科学', level: 'A+', note: '全国第1，全球第2' }, { name: '水产', level: 'A+', note: '全国第1' }, { name: '食品科学与工程', level: 'B+', note: 'ESI全球前1%' }, { name: '药学', level: 'B', note: 'ESI全球前1%' }],
      ru: [{ name: 'Океанология', level: 'A+', note: '№1 в Китае, №2 в мире' }, { name: 'Рыбоводство', level: 'A+', note: '№1 в Китае' }, { name: 'Пищевая наука', level: 'B+', note: 'ESI топ-1%' }, { name: 'Фармация', level: 'B', note: 'ESI топ-1%' }],
      en: [{ name: 'Ocean Science', level: 'A+', note: '#1 in China, #2 globally' }, { name: 'Fisheries', level: 'A+', note: '#1 in China' }, { name: 'Food Science & Engineering', level: 'B+', note: 'ESI top 1%' }, { name: 'Pharmacy', level: 'B', note: 'ESI top 1%' }]
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
    id: 'sdu-qd',
    name: { zh: '山东大学（青岛校区）', ru: 'Университет Шаньдун (Циндао)', en: 'Shandong University (Qingdao Campus)' },
    shortName: { zh: '山大', ru: 'Шаньдун', en: 'SDU' },
    tags: { zh: ['985', '211', '双一流'], ru: ['985', '211', 'Двойной первый класс'], en: ['985', '211', 'Double First-Class'] },
    website: 'https://www.sdu.edu.cn',
    intlWebsite: 'http://www.apply.sdu.edu.cn',
    campuses: [
      { name: { zh: '青岛校区', ru: 'Кампус Циндао', en: 'Qingdao Campus' }, address: { zh: '青岛市即墨区滨海路72号', ru: '72 ул. Биньхай, район Цимо', en: '72 Binhai Rd, Jimo' }, lat: 36.3653, lng: 120.6883 },
    ],
    lat: 36.3653, lng: 120.6883,
    description: {
      zh: '山东大学是教育部直属的综合性全国重点大学，始建于1901年。青岛校区位于即墨区，面向黄海，校园建筑现代大气。山大主校区在济南，青岛校区聚焦计算机、国际政治、临床医学等学科。',
      ru: 'Университет Шаньдун — комплексный национальный ключевой университет, основанный в 1901 году. Циндаоский кампус расположен в районе Цимо, выходит к Жёлтому морю.',
      en: 'Shandong University is a comprehensive national key university directly under the Ministry of Education, founded in 1901. The Qingdao Campus is located in Jimo District, facing the Yellow Sea.'
    },
    disciplines: {
      zh: [{ name: '数学', level: 'A+', note: '全国前3' }, { name: '中国语言文学', level: 'A', note: '全国领先' }, { name: '临床医学', level: 'B+', note: '青岛校区重点发展' }, { name: '计算机科学与技术', level: 'A-', note: '青岛校区重点发展' }],
      ru: [{ name: 'Математика', level: 'A+', note: 'Топ-3 в Китае' }, { name: 'Китайский язык и литература', level: 'A', note: 'Лидер в Китае' }, { name: 'Клиническая медицина', level: 'B+', note: 'Фокус кампуса Циндао' }, { name: 'Компьютерные науки', level: 'A-', note: 'Фокус кампуса Циндао' }],
      en: [{ name: 'Mathematics', level: 'A+', note: 'Top 3 in China' }, { name: 'Chinese Language & Literature', level: 'A', note: 'Leading in China' }, { name: 'Clinical Medicine', level: 'B+', note: 'Key focus of Qingdao Campus' }, { name: 'Computer Science & Technology', level: 'A-', note: 'Key focus of Qingdao Campus' }]
    },
    tuition: {
      zh: { bachelor_zh: '16,000-20,000 元/年', bachelor_en: '18,000-22,000 元/年', master: '22,000-26,000 元/年', master_en: '24,000-28,000 元/年', doctor: '28,000-32,000 元/年', dorm: '约6,000 元/年' },
      ru: { bachelor_zh: '16 000–20 000 ¥/год', bachelor_en: '18 000–22 000 ¥/год', master: '22 000–26 000 ¥/год', master_en: '24 000–28 000 ¥/год', doctor: '28 000–32 000 ¥/год', dorm: '≈6 000 ¥/год' },
      en: { bachelor_zh: '¥16,000-20,000/year', bachelor_en: '¥18,000-22,000/year', master: '¥22,000-26,000/year', master_en: '¥24,000-28,000/year', doctor: '¥28,000-32,000/year', dorm: '~¥6,000/year' }
    },
    scholarships: {
      zh: ['中国政府奖学金（A/B类）', '山东省政府奖学金'],
      ru: ['Стипендия правительства Китая (категории A/B)', 'Стипендия правительства провинции Шаньдун'],
      en: ['Chinese Government Scholarship (Type A/B)', 'Shandong Provincial Government Scholarship']
    },
    admission: {
      zh: { deadline: '6月30日', language: 'HSK 5级 ≥ 180分（文科）/ HSK 4级 ≥ 180分（理工）', age: '本科18-25岁', degree: '高中毕业' },
      ru: { deadline: '30 июня', language: 'HSK 5 ≥ 180 (гум.) / HSK 4 ≥ 180 (техн.)', age: '18–25 лет', degree: 'Аттестат' },
      en: { deadline: 'June 30', language: 'HSK 5 ≥ 180 (Liberal Arts) / HSK 4 ≥ 180 (Science)', age: '18–25 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['始于1901年，百年名校', '青岛校区2016年启用，设施一流', '聚焦计算机、临床、国际政治等', '毗邻青岛蓝色硅谷核心区'],
      ru: ['Основан в 1901 г., вековая история', 'Кампус Циндао открыт в 2016, первоклассная инфраструктура', 'Фокус на IT, клиническую медицину', 'Рядом с Голубой Кремниевой долиной'],
      en: ['Founded in 1901, century-old prestigious university', 'Qingdao Campus opened in 2016, world-class facilities', 'Focus on CS, clinical medicine, international politics', 'Adjacent to Blue Silicon Valley']
    }
  },
  {
    id: 'upc',
    name: { zh: '中国石油大学（华东）', ru: 'Университет нефти Китая (Восток)', en: 'China University of Petroleum (East China)' },
    shortName: { zh: '石大', ru: 'УНК', en: 'UPC' },
    tags: { zh: ['211', '双一流'], ru: ['211', 'Двойной первый класс'], en: ['211', 'Double First-Class'] },
    website: 'https://www.upc.edu.cn',
    intlWebsite: 'https://www.upc.edu.cn',
    campuses: [
      { name: { zh: '唐岛湾校区', ru: 'Кампус Тандаовань', en: 'Tangdaowan Campus' }, address: { zh: '青岛市黄岛区长江西路66号', ru: '66 ул. Чанцзян Си, район Хуандао', en: '66 Changjiang West Rd, Huangdao' }, lat: 35.963, lng: 120.193 },
      { name: { zh: '古镇口校区', ru: 'Кампус Гучжэнькоу', en: 'Guzhenkou Campus' }, address: { zh: '青岛市黄岛区三沙路1006号', ru: '1006 ул. Саньша, район Хуандао', en: '1006 Sansha Rd, Huangdao' }, lat: 35.785, lng: 120.025 },
    ],
    lat: 35.963, lng: 120.193,
    description: {
      zh: '中国石油大学（华东）是教育部直属的全国重点大学，被誉为中国石油石化行业的"黄埔军校"。学校以石油与天然气工程、地质资源与地质工程为特色，与中国石油、中石化、中海油深度对接。',
      ru: 'Университет нефти Китая (Восточно-Китайский) — ключевой университет прямого подчинения Министерства образования, известный как «Хуанпу» нефтегазовой отрасли Китая.',
      en: 'China University of Petroleum (East China) is a national key university directly under the Ministry of Education, known as the "Whampoa Military Academy" of China\'s petroleum industry.'
    },
    disciplines: {
      zh: [{ name: '石油与天然气工程', level: 'A+', note: '全国领先' }, { name: '地质资源与地质工程', level: 'A+', note: '全国领先' }, { name: '化学工程与技术', level: 'A-', note: 'ESI全球前1%' }, { name: '地球科学', level: 'B+', note: 'ESI全球前1%' }],
      ru: [{ name: 'Нефтегазовая инженерия', level: 'A+', note: 'Лидер в Китае' }, { name: 'Геологические ресурсы', level: 'A+', note: 'Лидер в Китае' }, { name: 'Химическая инженерия', level: 'A-', note: 'ESI топ-1%' }, { name: 'Науки о Земле', level: 'B+', note: 'ESI топ-1%' }],
      en: [{ name: 'Petroleum & Natural Gas Engineering', level: 'A+', note: 'Top in China' }, { name: 'Geological Resources & Engineering', level: 'A+', note: 'Top in China' }, { name: 'Chemical Engineering & Technology', level: 'A-', note: 'ESI top 1%' }, { name: 'Earth Science', level: 'B+', note: 'ESI top 1%' }]
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
    id: 'qust',
    name: { zh: '青岛科技大学', ru: 'Университет науки и технологии Циндао', en: 'Qingdao University of Science and Technology' },
    shortName: { zh: '科大', ru: 'Циндао КТ', en: 'QUST' },
    tags: { zh: ['省属重点'], ru: ['Провинциальный ключевой'], en: ['Provincial Key'] },
    website: 'https://www.qust.edu.cn',
    intlWebsite: 'https://iec.qust.edu.cn',
    campuses: [
      { name: { zh: '崂山校区', ru: 'Кампус Лаошань', en: 'Laoshan Campus' }, address: { zh: '青岛市崂山区松岭路99号', ru: '99 ул. Сунлин, район Лаошань', en: '99 Songling Rd, Laoshan' }, lat: 36.1184, lng: 120.4781 },
      { name: { zh: '四方校区', ru: 'Кампус Сыфан', en: 'Sifang Campus' }, address: { zh: '青岛市市北区郑州路53号', ru: '53 ул. Чжэнчжоу, район Шибэй', en: '53 Zhengzhou Rd, Shibei' }, lat: 36.149, lng: 120.392 },
      { name: { zh: '中德校区', ru: 'Китайско-германский кампус', en: 'Sino-German Campus' }, address: { zh: '青岛市西海岸新区小清河路6号', ru: '6 ул. Сяоцинхэ, район Сибай', en: '6 Xiaoqinghe Rd, West Coast' }, lat: 36.0508, lng: 120.0927 },
    ],
    lat: 36.1184, lng: 120.4781,
    description: {
      zh: '青岛科技大学是山东省属重点大学，以化工、高分子材料、橡胶学科为特色，被誉为"中国橡胶工业的黄埔军校"。学校与德国帕德博恩大学等开展中外合作办学。',
      ru: 'Университет науки и технологии Циндао — провинциальный ключевой университет, специализирующийся на химической инженерии и полимерных материалах. Известен как «Хуанпу» каучуковой промышленности Китая.',
      en: 'Qingdao University of Science and Technology is a provincial key university, known for chemical engineering and polymer materials. It is called the "Whampoa" of China\'s rubber industry.'
    },
    disciplines: {
      zh: [{ name: '化学工程与技术', level: 'B+', note: 'ESI全球前1%' }, { name: '材料科学与工程', level: 'B+', note: 'ESI全球前1%' }, { name: '工程学', level: 'B', note: 'ESI全球前1%' }, { name: '计算机科学', level: 'B-', note: '特色方向' }],
      ru: [{ name: 'Химическая инженерия', level: 'B+', note: 'ESI топ-1%' }, { name: 'Материаловедение', level: 'B+', note: 'ESI топ-1%' }, { name: 'Инженерия', level: 'B', note: 'ESI топ-1%' }, { name: 'Компьютерные науки', level: 'B-', note: 'Особенное направление' }],
      en: [{ name: 'Chemical Engineering & Technology', level: 'B+', note: 'ESI top 1%' }, { name: 'Materials Science & Engineering', level: 'B+', note: 'ESI top 1%' }, { name: 'Engineering', level: 'B', note: 'ESI top 1%' }, { name: 'Computer Science', level: 'B-', note: 'Featured direction' }]
    },
    tuition: {
      zh: { bachelor_zh: '16,000-18,000 元/年', bachelor_en: '18,000-20,000 元/年', master: '20,000-24,000 元/年', master_en: '22,000-26,000 元/年', doctor: '26,000-30,000 元/年', dorm: '约5,000 元/年' },
      ru: { bachelor_zh: '16 000–18 000 ¥/год', bachelor_en: '18 000–20 000 ¥/год', master: '20 000–24 000 ¥/год', master_en: '22 000–26 000 ¥/год', doctor: '26 000–30 000 ¥/год', dorm: '≈5 000 ¥/год' },
      en: { bachelor_zh: '¥16,000-18,000/year', bachelor_en: '¥18,000-20,000/year', master: '¥20,000-24,000/year', master_en: '¥22,000-26,000/year', doctor: '¥26,000-30,000/year', dorm: '~¥5,000/year' }
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
      zh: ['中国橡胶工业"黄埔军校"', '与德国帕德博恩大学合办', '4个学科ESI全球前1%', '中德校区开设多个德国合作项目'],
      ru: ['«Хуанпу» каучуковой промышленности Китая', 'Совместные программы с Падерборнским университетом', '4 дисциплины в ESI топ-1%', 'Китайско-германский кампус с немецкими программами'],
      en: ['"Whampoa" of China\'s rubber industry', 'Joint programs with Paderborn University (Germany)', '4 disciplines in ESI top 1%', 'Sino-German Campus with German programs']
    }
  },
  {
    id: 'qdu',
    name: { zh: '青岛大学', ru: 'Университет Циндао', en: 'Qingdao University' },
    shortName: { zh: '青大', ru: 'УЦ', en: 'QDU' },
    tags: { zh: ['省属重点'], ru: ['Провинциальный ключевой'], en: ['Provincial Key'] },
    website: 'https://www.qdu.edu.cn',
    intlWebsite: 'https://ice.qdu.edu.cn',
    campuses: [
      { name: { zh: '浮山校区', ru: 'Кампус Фушань', en: 'Fushan Campus' }, address: { zh: '青岛市市南区宁夏路308号', ru: '308 ул. Нинся, район Шинань', en: '308 Ningxia Rd, Shinan' }, lat: 36.072, lng: 120.4229 },
      { name: { zh: '金家岭校区', ru: 'Кампус Цзиньцзялин', en: 'Jinjialing Campus' }, address: { zh: '青岛市崂山区松岭路93号', ru: '93 ул. Сунлин, район Лаошань', en: '93 Songling Rd, Laoshan' }, lat: 36.1152, lng: 120.4784 },
      { name: { zh: '松山校区', ru: 'Кампус Суншань', en: 'Songshan Campus' }, address: { zh: '青岛市市北区登州路38号', ru: '38 ул. Дэнчжоу, район Шибэй', en: '38 Dengzhou Rd, Shibei' }, lat: 36.0861, lng: 120.3482 },
    ],
    lat: 36.072, lng: 120.4229,
    description: {
      zh: '青岛大学是山东省属重点综合性大学，由原青岛大学、青岛医学院、山东纺织工学院、青岛师范专科学校合并组建。学校学科门类齐全，医学、纺织、教育学科实力突出。',
      ru: 'Университет Циндао — провинциальный комплексный ключевой университет, образованный слиянием четырёх вузов. Медицина, текстиль и педагогика — сильные стороны.',
      en: 'Qingdao University is a provincial comprehensive key university, formed by merging four institutions. It excels in medicine, textiles, and education.'
    },
    disciplines: {
      zh: [{ name: '临床医学', level: 'B+', note: '原青岛医学院' }, { name: '纺织科学与工程', level: 'B+', note: '原山东纺织工学院' }, { name: '系统科学', level: 'B', note: 'ESI全球前1%' }, { name: '教育学', level: 'B', note: '特色学科' }],
      ru: [{ name: 'Клиническая медицина', level: 'B+', note: 'От бывшего Медицинского института' }, { name: 'Текстильная наука', level: 'B+', note: 'От Текстильного института' }, { name: 'Системные науки', level: 'B', note: 'ESI топ-1%' }, { name: 'Педагогика', level: 'B', note: 'Особенность вуза' }],
      en: [{ name: 'Clinical Medicine', level: 'B+', note: 'From former Medical College' }, { name: 'Textile Science & Engineering', level: 'B+', note: 'From former Textile Institute' }, { name: 'Systems Science', level: 'B', note: 'ESI top 1%' }, { name: 'Education', level: 'B', note: 'Featured discipline' }]
    },
    tuition: {
      zh: { bachelor_zh: '14,000-18,000 元/年', bachelor_en: '16,000-20,000 元/年', master: '18,000-24,000 元/年', master_en: '20,000-26,000 元/年', doctor: '24,000-28,000 元/年', dorm: '约5,500 元/年' },
      ru: { bachelor_zh: '14 000–18 000 ¥/год', bachelor_en: '16 000–20 000 ¥/год', master: '18 000–24 000 ¥/год', master_en: '20 000–26 000 ¥/год', doctor: '24 000–28 000 ¥/год', dorm: '≈5 500 ¥/год' },
      en: { bachelor_zh: '¥14,000-18,000/year', bachelor_en: '¥16,000-20,000/year', master: '¥18,000-24,000/year', master_en: '¥20,000-26,000/year', doctor: '¥24,000-28,000/year', dorm: '~¥5,500/year' }
    },
    scholarships: {
      zh: ['中国政府奖学金', '山东省政府来华留学生奖学金', '青岛大学校长奖学金'],
      ru: ['Стипендия правительства Китая', 'Стипендия правительства провинции Шаньдун', 'Стипендия ректора УЦ'],
      en: ['Chinese Government Scholarship', 'Shandong Provincial Government Scholarship', 'Qingdao University Presidential Scholarship']
    },
    admission: {
      zh: { deadline: '6月30日', language: 'HSK 4级 ≥ 180分', age: '本科18-25岁', degree: '高中毕业' },
      ru: { deadline: '30 июня', language: 'HSK 4 ≥ 180', age: '18–25 лет', degree: 'Аттестат' },
      en: { deadline: 'June 30', language: 'HSK 4 ≥ 180', age: '18–25 (bachelor)', degree: 'High school diploma' }
    },
    features: {
      zh: ['四校合并，综合性强', '医学学科实力突出（原青岛医学院）', '3个校区分布在市南、崂山、市北', '国际学生约1200人'],
      ru: ['Слияние 4 вузов, комплексный характер', 'Сильная медицина (бывш. Мед. институт)', '3 кампуса: Шинань, Лаошань, Шибэй', '≈1200 иностранных студентов'],
      en: ['Merger of 4 institutions, comprehensive', 'Strong medical programs (former Medical College)', '3 campuses in Shinan, Laoshan, and Shibei', '~1,200 international students']
    }
  },
  {
    id: 'qut',
    name: { zh: '青岛理工大学', ru: 'Технологический университет Циндао', en: 'Qingdao University of Technology' },
    shortName: { zh: '理工', ru: 'Циндао ТТ', en: 'QUT' },
    tags: { zh: ['省属'], ru: ['Провинциальный'], en: ['Provincial'] },
    website: 'https://www.qut.edu.cn',
    intlWebsite: 'https://oia.qut.edu.cn',
    campuses: [
      { name: { zh: '黄岛校区', ru: 'Кампус Хуандао', en: 'Huangdao Campus' }, address: { zh: '青岛市黄岛区嘉陵江东路777号', ru: '777 Восточный Цзялинцзян, район Хуандао', en: '777 Jialingjiang East Rd, Huangdao' }, lat: 35.9726, lng: 120.2061 },
      { name: { zh: '市北校区', ru: 'Кампус Шибэй', en: 'Shibei Campus' }, address: { zh: '青岛市市北区抚顺路11号', ru: '11 ул. Фушунь, район Шибэй', en: '11 Fushun Rd, Shibei' }, lat: 36.1057, lng: 120.3782 },
    ],
    lat: 35.9726, lng: 120.2061,
    description: {
      zh: '青岛理工大学是山东省属理工科大学，以建筑、土木工程见长。学校主校区位于黄岛区，市北校区位于市中心，交通便利。',
      ru: 'Технологический университет Циндао — провинциальный理工ический университет, известный архитектурой и гражданским строительством. Главный кампус в Хуандао, кампус Шибэй в центре города.',
      en: 'Qingdao University of Technology is a provincial university of technology, known for architecture and civil engineering. Main campus in Huangdao, Shibei campus in the city center.'
    },
    disciplines: {
      zh: [{ name: '建筑学', level: 'B+', note: '省内领先' }, { name: '土木工程', level: 'B+', note: '特色学科' }, { name: '机械工程', level: 'B', note: 'ESI前1%' }, { name: '环境工程', level: 'B', note: '特色方向' }],
      ru: [{ name: 'Архитектура', level: 'B+', note: 'Лидер в провинции' }, { name: 'Гражданское строительство', level: 'B+', note: 'Особенность вуза' }, { name: 'Машиностроение', level: 'B', note: 'ESI топ-1%' }, { name: 'Экологическая инженерия', level: 'B', note: 'Особенное направление' }],
      en: [{ name: 'Architecture', level: 'B+', note: 'Leading in the province' }, { name: 'Civil Engineering', level: 'B+', note: 'Featured discipline' }, { name: 'Mechanical Engineering', level: 'B', note: 'ESI top 1%' }, { name: 'Environmental Engineering', level: 'B', note: 'Featured direction' }]
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
      zh: ['建筑类学科省内领先', '2个校区：黄岛+市北', 'SQA奖学金覆盖率72.4%', '与韩国又石大学等合作办学'],
      ru: ['Архитектура — лидер в провинции', '2 кампуса: Хуандао + Шибэй', 'Покрытие стипендий SQA 72,4%', 'Партнёрство с вузами Кореи'],
      en: ['Architecture leading in the province', '2 campuses: Huangdao + Shibei', 'SQA scholarship coverage 72.4%', 'Partnerships with Korean universities']
    }
  },
  {
    id: 'qau',
    name: { zh: '青岛农业大学', ru: 'Сельскохозяйственный университет Циндао', en: 'Qingdao Agricultural University' },
    shortName: { zh: '农大', ru: 'СХУЦ', en: 'QAU' },
    tags: { zh: ['省属'], ru: ['Провинциальный'], en: ['Provincial'] },
    website: 'https://www.qau.edu.cn',
    intlWebsite: 'https://io.qau.edu.cn',
    campuses: [
      { name: { zh: '城阳校区', ru: 'Кампус Чэнъян', en: 'Chengyang Campus' }, address: { zh: '青岛市城阳区长城路700号', ru: '700 ул. Чанчэн, район Чэнъян', en: '700 Changcheng Rd, Chengyang' }, lat: 36.324, lng: 120.4064 },
      { name: { zh: '平度校区', ru: 'Кампус Пинду', en: 'Pingdu Campus' }, address: { zh: '青岛市平度市黄海路2-17号', ru: '2-17 ул. Хуанхай, г. Пинду', en: '2-17 Huanghai Rd, Pingdu' }, lat: 36.555, lng: 120.130 },
      { name: { zh: '蓝谷校区', ru: 'Кампус Ланьгу', en: 'Langu Campus' }, address: { zh: '青岛市即墨区鳌山卫街道问海路17号', ru: '17 ул. Вэньхай, район Цимо', en: '17 Wenhai Rd, Jimo' }, lat: 36.3444, lng: 120.6731 },
    ],
    lat: 36.324, lng: 120.4064,
    description: {
      zh: '青岛农业大学是山东省属重点建设的农业院校。学校与英国皇家农业大学合办巴瑟斯未来农业科技学院，是全国农科领域办学规模最大的中外合作办学机构。',
      ru: 'Сельскохозяйственный университет Циндао — провинциальный ключевой аграрный университет. Совместно с Королевским сельскохозяйственным университетом Великобритании создан Институт Батерса.',
      en: 'Qingdao Agricultural University is a provincial key agricultural university. It co-established the Bathers Future Agriculture College with the Royal Agricultural University of the UK.'
    },
    disciplines: {
      zh: [{ name: '农学', level: 'B+', note: '特色学科' }, { name: '植物保护', level: 'B', note: 'ESI前1%' }, { name: '动物医学', level: 'B+', note: '特色学科' }, { name: '食品科学与工程', level: 'B', note: 'ESI前1%' }],
      ru: [{ name: 'Агрономия', level: 'B+', note: 'Особенность вуза' }, { name: 'Защита растений', level: 'B', note: 'ESI топ-1%' }, { name: 'Ветеринария', level: 'B+', note: 'Особенность вуза' }, { name: 'Пищевая наука', level: 'B', note: 'ESI топ-1%' }],
      en: [{ name: 'Agronomy', level: 'B+', note: 'Featured discipline' }, { name: 'Plant Protection', level: 'B', note: 'ESI top 1%' }, { name: 'Veterinary Medicine', level: 'B+', note: 'Featured discipline' }, { name: 'Food Science & Engineering', level: 'B', note: 'ESI top 1%' }]
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
      zh: ['与英国皇家农业大学合办', '全国农科最大中外合作机构', '3个校区：城阳、平度、蓝谷', '2026年首次招硕博留学生'],
      ru: ['Совместный проект с Королевским СХУ Великобритании', 'Крупнейший аграрный совместный институт в Китае', '3 кампуса: Чэнъян, Пинду, Ланьгу', 'Первый набор магистрантов в 2026'],
      en: ['Joint program with Royal Agricultural University UK', 'Largest Sino-foreign agricultural institution in China', '3 campuses: Chengyang, Pingdu, Langu', 'First Master\'s & PhD international students in 2026']
    }
  },
  {
    id: 'ruc',
    name: { zh: '康复大学', ru: 'Университет реабилитации', en: 'University of Health and Rehabilitation Sciences' },
    shortName: { zh: '康复', ru: 'УР', en: 'UHR' },
    tags: { zh: ['新建大学'], ru: ['Новый университет'], en: ['New University'] },
    website: 'https://www.ruc.edu.cn',
    intlWebsite: 'https://www.ruc.edu.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市高新区登云路369号', ru: '369 ул. Дэнъюнь, район Гаосиньцюй', en: '369 Dengyun Rd, High-tech Zone' }, lat: 36.2199, lng: 120.1776 },
    ],
    lat: 36.2199, lng: 120.1776,
    description: {
      zh: '康复大学是一所以康复科学为特色的新建大学，由中国残联、国家卫健委等共建。学校位于青岛高新区，2024年正式获批设立，聚焦康复医学、健康管理等学科，是中国首所以"康复"命名的本科高校。',
      ru: 'Университет реабилитации — новый университет с фокусом на реабилитологии, совместно учреждённый инвалидной федерацией и Минздравом КНР. Расположен в высокотехнологичной зоне Циндао.',
      en: 'University of Health and Rehabilitation Sciences is a newly established university specializing in rehabilitation science. Located in Qingdao High-tech Zone, it was officially approved in 2024.'
    },
    disciplines: {
      zh: [{ name: '康复物理治疗', level: 'A', note: '核心专业' }, { name: '康复作业治疗', level: 'A', note: '核心专业' }, { name: '临床医学', level: 'B', note: '新建学科' }, { name: '生物医学工程', level: 'B', note: '交叉学科' }],
      ru: [{ name: 'Физическая реабилитация', level: 'A', note: 'Ключевая специальность' }, { name: 'Эрготерапия', level: 'A', note: 'Ключевая специальность' }, { name: 'Клиническая медицина', level: 'B', note: 'Новая дисциплина' }, { name: 'Биомедицинская инженерия', level: 'B', note: 'Междисциплинарная' }],
      en: [{ name: 'Rehabilitation PT', level: 'A', note: 'Core program' }, { name: 'Occupational Therapy', level: 'A', note: 'Core program' }, { name: 'Clinical Medicine', level: 'B', note: 'New discipline' }, { name: 'Biomedical Engineering', level: 'B', note: 'Interdisciplinary' }]
    },
    tuition: {
      zh: { bachelor_zh: '待定', bachelor_en: '待定', master: '待定', master_en: '待定', doctor: '待定', dorm: '待定' },
      ru: { bachelor_zh: 'Уточняется', bachelor_en: 'Уточняется', master: 'Уточняется', master_en: 'Уточняется', doctor: 'Уточняется', dorm: 'Уточняется' },
      en: { bachelor_zh: 'TBD', bachelor_en: 'TBD', master: 'TBD', master_en: 'TBD', doctor: 'TBD', dorm: 'TBD' }
    },
    scholarships: {
      zh: ['中国政府奖学金（预期）', '山东省政府奖学金（预期）'],
      ru: ['Стипендия правительства Китая (ожидается)', 'Стипендия провинции Шаньдун (ожидается)'],
      en: ['Chinese Government Scholarship (expected)', 'Shandong Provincial Government Scholarship (expected)']
    },
    admission: {
      zh: { deadline: '待定', language: '待定', age: '待定', degree: '高中毕业' },
      ru: { deadline: 'Уточняется', language: 'Уточняется', age: 'Уточняется', degree: 'Аттестат' },
      en: { deadline: 'TBD', language: 'TBD', age: 'TBD', degree: 'High school diploma' }
    },
    features: {
      zh: ['中国首所以"康复"命名的大学', '中国残联与国家卫健委共建', '2024年正式获批', '位于青岛高新区，设施全新'],
      ru: ['Первый в Китае университет реабилитации', 'Совместно с инвалидной федерацией и Минздравом', 'Официально утверждён в 2024', 'Новые объекты в Высокотехнологичной зоне Циндао'],
      en: ['China\'s first university named for rehabilitation', 'Co-established with CDPF and NHC', 'Officially approved in 2024', 'Brand-new facilities in Qingdao High-tech Zone']
    }
  },
  {
    id: 'sdust',
    name: { zh: '山东科技大学', ru: 'Университет науки и технологии Шаньдун', en: 'Shandong University of Science and Technology' },
    shortName: { zh: '山科', ru: 'Шаньдун КТ', en: 'SDUST' },
    tags: { zh: ['省属重点'], ru: ['Провинциальный ключевой'], en: ['Provincial Key'] },
    website: 'https://www.sdust.edu.cn',
    intlWebsite: 'https://www.sdust.edu.cn',
    campuses: [
      { name: { zh: '青岛校区', ru: 'Кампус Циндао', en: 'Qingdao Campus' }, address: { zh: '青岛市黄岛区前湾港路579号', ru: '579 ул. Цяньваньган, район Хуандао', en: '579 Qianwan Port Rd, Huangdao' }, lat: 36.0018, lng: 120.1204 },
    ],
    lat: 36.0018, lng: 120.1204,
    description: {
      zh: '山东科技大学是山东省属重点大学，以矿业、安全、测绘为特色。学校矿业工程、安全科学与工程、测绘科学与技术三个学科进入ESI全球前1‰。',
      ru: 'Университет науки и технологии Шаньдун — провинциальный ключевой университет, специализирующийся на горном деле, безопасности и геодезии. Три дисциплины в ESI топ-1‰.',
      en: 'Shandong University of Science and Technology is a provincial key university specializing in mining, safety, and surveying. Three disciplines are in the ESI top 1‰ globally.'
    },
    disciplines: {
      zh: [{ name: '矿业工程', level: 'A-', note: 'ESI全球前1‰' }, { name: '安全科学与工程', level: 'A-', note: 'ESI全球前1‰' }, { name: '测绘科学与技术', level: 'B+', note: 'ESI全球前1‰' }, { name: '工程学', level: 'B', note: 'ESI全球前1%' }],
      ru: [{ name: 'Горное дело', level: 'A-', note: 'ESI топ-1‰' }, { name: 'Наука о безопасности', level: 'A-', note: 'ESI топ-1‰' }, { name: 'Геодезия и картография', level: 'B+', note: 'ESI топ-1‰' }, { name: 'Инженерия', level: 'B', note: 'ESI топ-1%' }],
      en: [{ name: 'Mining Engineering', level: 'A-', note: 'ESI top 1‰ globally' }, { name: 'Safety Science & Engineering', level: 'A-', note: 'ESI top 1‰ globally' }, { name: 'Surveying & Mapping', level: 'B+', note: 'ESI top 1‰ globally' }, { name: 'Engineering', level: 'B', note: 'ESI top 1%' }]
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
  // ========== 民办本科（6所）==========
  {
    id: 'qingdao-binhai',
    name: { zh: '青岛滨海学院', ru: 'Университет Биньхай', en: 'Qingdao Binhai University' },
    shortName: { zh: '滨海', ru: 'Биньхай', en: 'BHU' },
    tags: { zh: ['民办本科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.qdbhu.edu.cn',
    intlWebsite: 'https://www.qdbhu.edu.cn',
    campuses: [
      { name: { zh: '小珠山校区', ru: 'Кампус Сяочжушань', en: 'Xiaozhushan Campus' }, address: { zh: '青岛市西海岸新区嘉陵江西路425号', ru: '425 Западный Цзялинцзян, район Сибай', en: '425 Jialingjiang West Rd, West Coast' }, lat: 35.9822, lng: 120.166 },
      { name: { zh: '大珠山校区', ru: 'Кампус Дачжушань', en: 'Dazhushan Campus' }, address: { zh: '青岛市西海岸新区山川路1568号', ru: '1568 ул. Шаньчуань, район Сибай', en: '1568 Shanchuan Rd, West Coast' }, lat: 35.8068, lng: 119.9981 },
    ],
    lat: 35.9822, lng: 120.166,
    description: {
      zh: '青岛滨海学院是山东省首批民办本科高校之一，创建于1992年。学校以工科为主，兼有医、管、经、教等多学科，位于西海岸新区，拥有小珠山和大珠山两个校区。',
      ru: 'Университет Биньхай — один из первых частных вузов провинции Шаньдун, основан в 1992 г. Расположен в районе Сибай, имеет два кампуса.',
      en: 'Qingdao Binhai University is one of the first private undergraduate universities in Shandong Province, founded in 1992. Located in West Coast New Area with two campuses.'
    },
    disciplines: { zh: [], ru: [], en: [] },
    tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] },
    admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['山东省首批民办本科', '两个校区：小珠山+大珠山', '工科为主的多学科大学', '创办于1992年'], ru: ['Один из первых частных вузов Шаньдуна', '2 кампуса: Сяочжушань + Дачжушань', 'Многопрофильный с фокусом на инженерию', 'Основан в 1992 г.'], en: ['One of Shandong\'s first private universities', '2 campuses: Xiaozhushan + Dazhushan', 'Multi-disciplinary with engineering focus', 'Founded in 1992'] }
  },
  {
    id: 'qingdao-hxst',
    name: { zh: '青岛恒星科技学院', ru: 'Институт науки и технологий Хэнсин', en: 'Qingdao Hengxing Science and Technology College' },
    shortName: { zh: '恒星', ru: 'Хэнсин', en: 'HX' },
    tags: { zh: ['民办本科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.hx.cn',
    intlWebsite: 'https://www.hx.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市李沧区九水东路588号', ru: '588 Восточный Цзюшуй, район Липан', en: '588 Jiushui East Rd, Licang' }, lat: 36.174, lng: 120.489 },
    ],
    lat: 36.174, lng: 120.489,
    description: { zh: '青岛恒星科技学院是一所民办本科高校，以工学、管理学为主，注重应用型人才培养。学校位于李沧区，交通便利。', ru: 'Частный вуз с фокусом на инженерию и менеджмент. Расположен в районе Липан.', en: 'A private university focusing on engineering and management, located in Licang District.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['应用型本科高校', '工学与管理学为主', '位于李沧区九水东路', '注重校企合作实训'], ru: ['Прикладной бакалавриат', 'Фокус на инженерию и менеджмент', 'Район Липан, ул. Цзюшуй', 'Сотрудничество с предприятиями'], en: ['Applied undergraduate education', 'Focus on engineering and management', 'Located in Licang District', 'Industry-university cooperation'] }
  },
  {
    id: 'qingdao-hhxy',
    name: { zh: '青岛黄海学院', ru: 'Университет Хуанхай', en: 'Qingdao Huanghai University' },
    shortName: { zh: '黄海', ru: 'Хуанхай', en: 'HH' },
    tags: { zh: ['民办本科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.qdhh.cn',
    intlWebsite: 'https://www.qdhh.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市黄岛区灵海路1145号', ru: '1145 ул. Линхай, район Хуандао', en: '1145 Linghai Rd, Huangdao' }, lat: 35.9237, lng: 120.1125 },
    ],
    lat: 35.9237, lng: 120.1125,
    description: { zh: '青岛黄海学院是经教育部批准的全日制民办普通本科高校，位于西海岸新区。学校设有工学、管理学、医学、教育学等多个学科门类。', ru: 'Полноценный частный вуз в районе Сибай. Представлены инженерия, менеджмент, медицина, педагогика.', en: 'A full-time private university in West Coast New Area with disciplines in engineering, management, medicine, and education.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['西海岸新区办学', '多学科综合性民办高校', '设有医学相关专业', '校企合作紧密'], ru: ['Расположен в районе Сибай', 'Многопрофильный частный вуз', 'Есть медицинские специальности', 'Тесное сотрудничество с бизнесом'], en: ['Located in West Coast New Area', 'Multi-disciplinary private university', 'Medical programs available', 'Close industry partnerships'] }
  },
  {
    id: 'qingdao-cuhk',
    name: { zh: '青岛城市学院', ru: 'Городской институт Циндао', en: 'Qingdao City University' },
    shortName: { zh: '城院', ru: 'ГИЦ', en: 'QCU' },
    tags: { zh: ['民办本科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.quc.edu.cn',
    intlWebsite: 'https://www.quc.edu.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市城阳区铁骑山路79号', ru: '79 ул. Тецзишань, район Чэнъян', en: '79 Tieqishan Rd, Chengyang' }, lat: 36.3069, lng: 120.5045 },
    ],
    lat: 36.3069, lng: 120.5045,
    description: { zh: '青岛城市学院是经教育部批准设立的民办全日制普通本科高校，位于城阳区。学校以城市建设和管理、信息技术为特色。', ru: 'Частный вуз в районе Чэнъян. Специализация: городское строительство и IT.', en: 'A private university in Chengyang District, specializing in urban construction, management, and information technology.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['以城建和IT为特色', '位于城阳区铁骑山路', '民办全日制本科', '注重实践教学'], ru: ['Специализация: урбанистика и IT', 'Район Чэнъян', 'Частный полный бакалавриат', 'Практико-ориентированное обучение'], en: ['Specialized in urban construction and IT', 'Located in Chengyang District', 'Full-time private undergraduate', 'Practice-oriented education'] }
  },
  {
    id: 'qingdao-git',
    name: { zh: '青岛工学院', ru: 'Инженерный институт Циндао', en: 'Qingdao Institute of Technology' },
    shortName: { zh: '工院', ru: 'ИИЦ', en: 'QIT' },
    tags: { zh: ['民办本科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.qit.edu.cn',
    intlWebsite: 'https://www.qit.edu.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市胶州市福州南路236号', ru: '236 Южный Фучжоу, г. Цзяочжоу', en: '236 Fuzhou South Rd, Jiaozhou' }, lat: 36.2395, lng: 120.0204 },
    ],
    lat: 36.2395, lng: 120.0204,
    description: { zh: '青岛工学院是经教育部批准设立的民办全日制本科高校，位于胶州市。学校以工科为主，涵盖工、管、经、艺等学科。', ru: 'Частный вуз в г. Цзяочжоу. Инженерные, управленческие и художественные специальности.', en: 'A private university in Jiaozhou, with disciplines in engineering, management, economics, and arts.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['位于胶州市', '以工科为主的综合性民办高校', '学科门类齐全', '校园环境优美'], ru: ['Расположен в г. Цзяочжоу', 'Инженерный профиль', 'Широкий спектр специальностей', 'Живописный кампус'], en: ['Located in Jiaozhou', 'Engineering-focused comprehensive university', 'Wide range of disciplines', 'Beautiful campus'] }
  },
  {
    id: 'qfa',
    name: { zh: '青岛电影学院', ru: 'Академия кино Циндао', en: 'Qingdao Film Academy' },
    shortName: { zh: '电影', ru: 'АК', en: 'QFA' },
    tags: { zh: ['民办本科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.qfa.edu.cn',
    intlWebsite: 'https://www.qfa.edu.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市黄岛区金沙滩路689号', ru: '689 ул. Цзиньшато, район Хуандао', en: '689 Jinshatan Rd, Huangdao' }, lat: 35.9727, lng: 120.2611 },
    ],
    lat: 35.9727, lng: 120.2611,
    description: { zh: '青岛电影学院是经教育部批准设立的全日制本科艺术院校，位于西海岸新区金沙滩附近。学校依托青岛东方影都影视产业基地，培养影视制作、表演等专业人才。', ru: 'Полноценный художественный вуз в районе Сибай. Опирается на киноиндустриальную базу Dongfang Yingdu.', en: 'A full-time undergraduate arts university in West Coast New Area, leveraging the Oriental Movie Metropolis industrial base.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['依托东方影都影视基地', '西海岸新区金沙滩旁', '影视制作与表演专业', '艺术类本科高校'], ru: ['Опирается на киностудию Dongfang Yingdu', 'Рядом с пляжем Цзиньшато', 'Специальности: кинематограф и актёрское мастерство', 'Художественный вуз'], en: ['Leverages Oriental Movie Metropolis', 'Near Jinshatan Beach, West Coast', 'Film production and performing arts', 'Undergraduate arts university'] }
  },
  // ========== 公办专科（7所）==========
  {
    id: 'qtc',
    name: { zh: '青岛职业技术学院', ru: 'Профессионально-технический колледж Циндао', en: 'Qingdao Technical College' },
    shortName: { zh: '青职', ru: 'ПТК', en: 'QTC' },
    tags: { zh: ['国家示范高职'], ru: ['Гос. образцовый колледж'], en: ['National Model Vocational'] },
    website: 'https://www.qdc.cn',
    intlWebsite: 'https://www.qdc.cn',
    campuses: [
      { name: { zh: '黄岛校区', ru: 'Кампус Хуандао', en: 'Huangdao Campus' }, address: { zh: '青岛市黄岛区钱塘江路369号', ru: '369 ул. Цяньтанцзян, район Хуандао', en: '369 Qiantangjiang Rd, Huangdao' }, lat: 35.9762, lng: 120.167 },
      { name: { zh: '市南校区', ru: 'Кампус Шинань', en: 'Shinan Campus' }, address: { zh: '青岛市市南区金坛路17号', ru: '17 ул. Цзиньтань, район Шинань', en: '17 Jintan Rd, Shinan' }, lat: 36.072, lng: 120.385 },
      { name: { zh: '市北校区', ru: 'Кампус Шибэй', en: 'Shibei Campus' }, address: { zh: '青岛市市北区郭口路2号', ru: '2 ул. Гокоу, район Шибэй', en: '2 Guokou Rd, Shibei' }, lat: 36.095, lng: 120.370 },
    ],
    lat: 35.9762, lng: 120.167,
    description: { zh: '青岛职业技术学院是国家示范性高等职业院校，以制造业和服务业人才培养为特色。学校有黄岛、市南、市北三个校区。', ru: 'Государственный образцовый профессиональный колледж. Три кампуса: Хуандао, Шинань, Шибэй.', en: 'A national model vocational college with three campuses, specializing in manufacturing and service industry talent.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['国家示范性高职院校', '3个校区：黄岛+市南+市北', '制造业和服务业人才培养', '校企合作办学模式成熟'], ru: ['Гос. образцовый профколледж', '3 кампуса: Хуандао, Шинань, Шибэй', 'Подготовка кадров для промышленности', 'Зрелая модель сотрудничества'], en: ['National model vocational college', '3 campuses: Huangdao, Shinan, Shibei', 'Manufacturing and service training', 'Mature industry-school cooperation'] }
  },
  {
    id: 'sdftc',
    name: { zh: '山东外贸职业学院', ru: 'Профессиональный колледж внешней торговли Шаньдуна', en: 'Shandong Foreign Trade Vocational College' },
    shortName: { zh: '外贸', ru: 'ВТ', en: 'SDFT' },
    tags: { zh: ['省属高职'], ru: ['Провинциальный'], en: ['Provincial Vocational'] },
    website: 'https://www.sdftc.com',
    intlWebsite: 'https://www.sdftc.com',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市李沧区巨峰路201号', ru: '201 ул. Цзюфэн, район Липан', en: '201 Jufeng Rd, Licang' }, lat: 36.1725, lng: 120.4372 },
    ],
    lat: 36.1725, lng: 120.4372,
    description: { zh: '山东外贸职业学院是省属公办全日制高等职业院校，以外贸、商务、物流等专业为特色，位于李沧区。', ru: 'Провинциальный государственный колледж. Специализация: внешняя торговля, коммерция, логистика.', en: 'A provincial public vocational college specializing in foreign trade, commerce, and logistics, located in Licang District.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['外贸特色鲜明', '位于李沧区', '商务与物流专业', '省属公办院校'], ru: ['Специализация: внешняя торговля', 'Район Липан', 'Коммерция и логистика', 'Провинциальный гос. колледж'], en: ['Distinctive foreign trade focus', 'Located in Licang District', 'Commerce and logistics programs', 'Provincial public college'] }
  },
  {
    id: 'qdjdgzyxy',
    name: { zh: '青岛酒店管理职业技术学院', ru: 'Профессиональный колледж гостиничного менеджмента', en: 'Qingdao Hotel Management Vocational College' },
    shortName: { zh: '酒管', ru: 'Гостиничный', en: 'QHMC' },
    tags: { zh: ['省属高职'], ru: ['Провинциальный'], en: ['Provincial Vocational'] },
    website: 'https://www.qdgzxy.cn',
    intlWebsite: 'https://www.qdgzxy.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市李沧区九水东路599号', ru: '599 Восточный Цзюшуй, район Липан', en: '599 Jiushui East Rd, Licang' }, lat: 36.1756, lng: 120.4963 },
    ],
    lat: 36.1756, lng: 120.4963,
    description: { zh: '青岛酒店管理职业技术学院是全国唯一一所以"酒店管理"命名的公办高职院校，位于李沧区，以酒店管理、旅游管理、烹饪等专业见长。', ru: 'Единственный в Китае гос. колледж с названием «Гостиничный менеджмент». Специализация: гостиничное дело, туризм, кулинария.', en: 'China\'s only public vocational college named for hotel management, specializing in hotel management, tourism, and culinary arts.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['全国唯一以"酒店管理"命名的公办高职', '酒店管理、旅游、烹饪特色', '位于李沧区九水东路', '校企合作紧密'], ru: ['Единственный в Китае колледж гостиничного менеджмента', 'Гостиничное дело, туризм, кулинария', 'Район Липан', 'Тесное сотрудничество с индустрией'], en: ['Only public college named for hotel management in China', 'Hotel management, tourism, culinary arts', 'Located in Licang District', 'Close industry partnerships'] }
  },
  {
    id: 'qd-gangwan',
    name: { zh: '青岛港湾职业技术学院', ru: 'Профессиональный колледж порта Циндао', en: 'Qingdao Harbor Vocational and Technical College' },
    shortName: { zh: '港湾', ru: 'Порт', en: 'QHVC' },
    tags: { zh: ['省属高职'], ru: ['Провинциальный'], en: ['Provincial Vocational'] },
    website: 'https://www.qdgw.com',
    intlWebsite: 'https://www.qdgw.com',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市黄岛区映山红路316号', ru: '316 ул. Иншаньхун, район Хуандао', en: '316 Yingshanhong Rd, Huangdao' }, lat: 35.8167, lng: 120.0302 },
    ],
    lat: 35.8167, lng: 120.0302,
    description: { zh: '青岛港湾职业技术学院是省属公办高职院校，依托青岛港的港口资源优势，以港口物流、机电一体化等专业为特色。', ru: 'Гос. колледж, опирающийся на ресурсы порта Циндао. Специализация: портовая логистика, мехатроника.', en: 'A provincial public vocational college leveraging Qingdao Port resources, specializing in port logistics and mechatronics.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['依托青岛港资源', '港口物流与机电一体化特色', '位于黄岛区映山红路', '省属公办院校'], ru: ['Опирается на ресурсы порта Циндао', 'Портовая логистика и мехатроника', 'Район Хуандао', 'Провинциальный гос. колледж'], en: ['Leverages Qingdao Port resources', 'Port logistics and mechatronics focus', 'Located in Huangdao District', 'Provincial public college'] }
  },
  {
    id: 'qdhyy',
    name: { zh: '青岛远洋船员职业学院', ru: 'Морской колледж Циндао', en: 'Qingdao Ocean Shipping Marine College' },
    shortName: { zh: '远洋', ru: 'Морской', en: 'QOSMC' },
    tags: { zh: ['省属高职'], ru: ['Провинциальный'], en: ['Provincial Vocational'] },
    website: 'https://www.qmc.edu.cn',
    intlWebsite: 'https://www.qmc.edu.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市黄岛区海军路1166号', ru: '1166 ул. Хайцзюнь, район Хуандао', en: '1166 Haijun Rd, Huangdao' }, lat: 35.785, lng: 120.035 },
    ],
    lat: 35.785, lng: 120.035,
    description: { zh: '青岛远洋船员职业学院是培养远洋航运人才的专业院校，隶属于中国远洋海运集团。主校区位于黄岛区海军路，紧邻古镇口区域。', ru: 'Профессиональный морской колледж, подчинённый COSCO. Главный кампус в районе Хуандао.', en: 'A professional maritime college under COSCO Group. Main campus is in Huangdao District, near Guzhenkou area.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['隶属中国远洋海运集团', '培养远洋航运人才', '位于黄岛区海军路', '海事类专业实力强'], ru: ['Подчинён группе COSCO', 'Подготовка морских специалистов', 'Район Хуандао, ул. Хайцзюнь', 'Сильные морские специальности'], en: ['Under COSCO Group', 'Training maritime professionals', 'Located in Huangdao, Haijun Road', 'Strong maritime programs'] }
  },
  {
    id: 'qdgzyxy',
    name: { zh: '青岛工程职业学院', ru: 'Профессиональный инженерный колледж Циндао', en: 'Qingdao Engineering Vocational College' },
    shortName: { zh: '工程', ru: 'ПИК', en: 'QEVC' },
    tags: { zh: ['市属高职'], ru: ['Городской'], en: ['Municipal Vocational'] },
    website: 'https://www.qdegc.com',
    intlWebsite: 'https://www.qdegc.com',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市城阳区上马街道龙翔路3号', ru: '3 ул. Лунсян, пос. Шанма, район Чэнъян', en: '3 Longxiang Rd, Shangma, Chengyang' }, lat: 36.23, lng: 120.26 },
    ],
    lat: 36.23, lng: 120.26,
    description: { zh: '青岛工程职业学院是青岛市属公办高职院校，以工程技术和先进制造为特色，位于城阳区上马街道。', ru: 'Городской гос. колледж. Специализация: инженерные технологии и передовое производство. Район Чэнъян.', en: 'A municipal public vocational college specializing in engineering technology and advanced manufacturing, located in Chengyang District.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['青岛市属公办高职', '工程技术与先进制造特色', '位于城阳区上马街道', '新建设施完善'], ru: ['Муниципальный гос. колледж', 'Инженерные технологии', 'Район Чэнъян, пос. Шанма', 'Новая инфраструктура'], en: ['Municipal public vocational college', 'Engineering and advanced manufacturing', 'Located in Shangma, Chengyang', 'Modern facilities'] }
  },
  {
    id: 'qdyesf',
    name: { zh: '青岛幼儿师范高等专科学校', ru: 'Педагогический колледж дошкольного образования Циндао', en: 'Qingdao Preschool Education College' },
    shortName: { zh: '幼师', ru: 'Пед. колледж', en: 'QPEC' },
    tags: { zh: ['公办专科'], ru: ['Гос. колледж'], en: ['Public College'] },
    website: 'https://www.qdyesz.cn',
    intlWebsite: 'https://www.qdyesz.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市胶州经济技术开发区淮河路1007号', ru: '1007 ул. Хуайхэ, Цзяочжоу', en: '1007 Huaihe Rd, Jiaozhou Development Zone' }, lat: 36.1741, lng: 120.1124 },
    ],
    lat: 36.1741, lng: 120.1124,
    description: { zh: '青岛幼儿师范高等专科学校是公办全日制高等专科院校，以学前教育为特色，位于胶州经济技术开发区。学校培养幼儿教师和早期教育工作者。', ru: 'Гос. колледж со специализацией в дошкольном образовании. Расположен в зоне развития Цзяочжоу.', en: 'A public college specializing in preschool education, located in Jiaozhou Economic Development Zone.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['学前教育特色鲜明', '培养幼儿教师', '位于胶州开发区', '公办全日制专科'], ru: ['Специализация: дошкольное образование', 'Подготовка воспитателей', 'Зона развития Цзяочжоу', 'Гос. полный колледж'], en: ['Distinctive preschool education focus', 'Training kindergarten teachers', 'Located in Jiaozhou Development Zone', 'Public full-time college'] }
  },
  // ========== 民办专科（5所）==========
  {
    id: 'qd-feiyang',
    name: { zh: '青岛飞洋职业技术学院', ru: 'Профессиональный колледж Фэйян', en: 'Qingdao Feiyang Vocational and Technical College' },
    shortName: { zh: '飞洋', ru: 'Фэйян', en: 'FY' },
    tags: { zh: ['民办专科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.qdfeiyang.com',
    intlWebsite: 'https://www.qdfeiyang.com',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市城阳区青大工业园荣海三路', ru: 'Промзона Циндаоского ун-та, район Чэнъян', en: 'Ronghai 3rd Rd, Qingda Industrial Park, Chengyang' }, lat: 36.3163, lng: 120.3255 },
    ],
    lat: 36.3163, lng: 120.3255,
    description: { zh: '青岛飞洋职业技术学院是一所民办高职院校，位于城阳区青大工业园内。学校曾于2014年暂停招生，后恢复办学。', ru: 'Частный профессиональный колледж в районе Чэнъян. Приостанавливал набор в 2014, затем возобновил.', en: 'A private vocational college in Chengyang District. Suspended enrollment in 2014, later resumed operations.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['民办高职院校', '位于城阳区青大工业园', '2014年曾暂停招生后恢复', '多种职业技能培训'], ru: ['Частный профколледж', 'Район Чэнъян', 'Возобновил набор после 2014', 'Профессиональное обучение'], en: ['Private vocational college', 'Chengyang District', 'Resumed after 2014 suspension', 'Vocational skills training'] }
  },
  {
    id: 'qd-qiushi',
    name: { zh: '青岛求实职业技术学院', ru: 'Профессиональный колледж Цюши', en: 'Qingdao Qiushi Vocational and Technical College' },
    shortName: { zh: '求实', ru: 'Цюши', en: 'QS' },
    tags: { zh: ['民办专科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.qdqiushi.com',
    intlWebsite: 'https://www.qdqiushi.com',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市城阳区丰海路51号', ru: '51 ул. Фэнхай, район Чэнъян', en: '51 Fenghai Rd, Chengyang' }, lat: 36.2318, lng: 120.3426 },
    ],
    lat: 36.2318, lng: 120.3426,
    description: { zh: '青岛求实职业技术学院是一所民办高职院校，位于城阳区。学校注重实践教学，培养应用型人才。', ru: 'Частный профколледж в районе Чэнъян. Практико-ориентированное обучение.', en: 'A private vocational college in Chengyang District, focusing on practical training and applied talents.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['民办高职院校', '位于城阳区丰海路', '注重实践教学', '应用型人才培养'], ru: ['Частный профколледж', 'Район Чэнъян, ул. Фэнхай', 'Практико-ориентированность', 'Подготовка прикладных кадров'], en: ['Private vocational college', 'Chengyang District', 'Practice-oriented education', 'Applied talent training'] }
  },
  {
    id: 'sd-whcy',
    name: { zh: '山东文化产业职业学院', ru: 'Колледж индустрии культуры Шаньдуна', en: 'Shandong Cultural Industry Vocational College' },
    shortName: { zh: '文产', ru: 'Культура', en: 'SDCI' },
    tags: { zh: ['民办专科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.sdwhcy.com',
    intlWebsite: 'https://www.sdwhcy.com',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市莱西市学院路1号', ru: '1 ул. Сюэюань, г. Лайси', en: '1 Xueyuan Rd, Laixi' }, lat: 36.86, lng: 120.52 },
    ],
    lat: 36.86, lng: 120.52,
    description: { zh: '山东文化产业职业学院是一所民办高职院校，以文化产业管理为特色，位于莱西市。', ru: 'Частный колледж со специализацией в индустрии культуры. Расположен в г. Лайси.', en: 'A private vocational college specializing in cultural industry management, located in Laixi.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['文化产业特色', '位于莱西市', '民办高职院校', '文化管理人才培养'], ru: ['Специализация: культурная индустрия', 'Г. Лайси', 'Частный колледж', 'Подготовка менеджеров культуры'], en: ['Cultural industry focus', 'Located in Laixi', 'Private vocational college', 'Cultural management training'] }
  },
  {
    id: 'qd-hangkong',
    name: { zh: '青岛航空科技职业学院', ru: 'Авиационный колледж Циндао', en: 'Qingdao Aviation Science and Technology Vocational College' },
    shortName: { zh: '航科', ru: 'Авиа', en: 'QAVC' },
    tags: { zh: ['民办专科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.qdhkkj.com',
    intlWebsite: 'https://www.qdhkkj.com',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市莱西市店埠镇南城路177号', ru: '177 Южный Чэнлу, пос. Дяньбу, г. Лайси', en: '177 Nancheng Rd, Dianbu Town, Laixi' }, lat: 36.7225, lng: 120.3422 },
    ],
    lat: 36.7225, lng: 120.3422,
    description: { zh: '青岛航空科技职业学院是一所民办高职院校，以航空科技和飞行器维修为特色，位于莱西市店埠镇。学校紧邻通用航空机场。', ru: 'Частный колледж со специализацией в авиационных технологиях. Расположен в пос. Дяньбу, г. Лайси, рядом с аэропортом общей авиации.', en: 'A private vocational college specializing in aviation technology and aircraft maintenance, located in Dianbu Town, Laixi, near a general aviation airport.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['航空科技特色', '飞行器维修专业', '位于莱西市店埠镇', '紧邻通用航空机场'], ru: ['Авиационные технологии', 'Техобслуживание воздушных судов', 'Пос. Дяньбу, г. Лайси', 'Рядом с аэропортом общей авиации'], en: ['Aviation technology focus', 'Aircraft maintenance programs', 'Dianbu Town, Laixi', 'Adjacent to general aviation airport'] }
  },
  {
    id: 'qd-jiankang',
    name: { zh: '青岛健康科技职业学院', ru: 'Колледж здоровья и технологий Циндао', en: 'Qingdao Health Technology Vocational College' },
    shortName: { zh: '健科', ru: 'Здоровье', en: 'QHTC' },
    tags: { zh: ['民办专科'], ru: ['Частный'], en: ['Private'] },
    website: 'https://www.qdjkzy.com',
    intlWebsite: 'https://www.qdjkzy.com',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市莱西姜山产业新城躬仁路567号', ru: '567 ул. Гунжэнь, Цзяншань, г. Лайси', en: '567 Gongren Rd, Jiangshan, Laixi' }, lat: 36.72, lng: 120.53 },
    ],
    lat: 36.72, lng: 120.53,
    description: { zh: '青岛健康科技职业学院是一所民办高职院校，以健康科技和医学技术为特色，位于莱西姜山产业新城。', ru: 'Частный колледж со специализацией в здоровье и медицинских технологиях. Расположен в Цзяншань, г. Лайси.', en: 'A private vocational college specializing in health technology and medical technology, located in Jiangshan, Laixi.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['健康科技特色', '医学技术专业', '位于莱西姜山产业新城', '新建院校设施现代'], ru: ['Специализация: здоровье и технологии', 'Медицинские технологии', 'Цзяншань, г. Лайси', 'Новый кампус'], en: ['Health technology focus', 'Medical technology programs', 'Jiangshan, Laixi', 'Modern new campus'] }
  },
  // ========== 特别标注 ==========
  {
    id: 'menuhin',
    name: { zh: '青岛耶胡迪梅纽因学校', ru: 'Школа Иегуди Менюхина в Циндао', en: 'Qingdao Yehudi Menuhin School' },
    shortName: { zh: '梅纽因', ru: 'Менюхин', en: 'Menuhin' },
    tags: { zh: ['音乐学校', 'K12'], ru: ['Музыкальная школа', 'K12'], en: ['Music School', 'K12'] },
    website: 'https://www.menuhinschool.cn',
    intlWebsite: 'https://www.menuhinschool.cn',
    campuses: [
      { name: { zh: '主校区', ru: 'Главный кампус', en: 'Main Campus' }, address: { zh: '青岛市黄岛区银沙滩路299号', ru: '299 ул. Иньшато, район Хуандао', en: '299 Yinshatan Rd, Huangdao' }, lat: 35.950, lng: 120.200 },
    ],
    lat: 35.950, lng: 120.200,
    description: { zh: '青岛耶胡迪梅纽因学校是以世界著名小提琴家耶胡迪·梅纽因命名的音乐学校，位于黄岛区唐岛湾滨海公园内银沙滩路。学校面向有音乐天赋的青少年提供专业音乐教育，是青岛特色音乐教育资源。', ru: 'Музыкальная школа, названная в честь скрипача Иегуди Менюхина. Расположена на берегу моря в районе Хуандао.面向 талантливой молодёжи.', en: 'A music school named after the world-renowned violinist Yehudi Menuhin. Located near Tangdaowan Seaside Park in Huangdao District, providing professional music education for talented youth.' },
    disciplines: { zh: [], ru: [], en: [] }, tuition: { zh: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, ru: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' }, en: { bachelor_zh: '—', bachelor_en: '—', master: '—', master_en: '—', doctor: '—', dorm: '—' } },
    scholarships: { zh: [], ru: [], en: [] }, admission: { zh: { deadline: '—', language: '—', age: '—', degree: '—' }, ru: { deadline: '—', language: '—', age: '—', degree: '—' }, en: { deadline: '—', language: '—', age: '—', degree: '—' } },
    features: { zh: ['以小提琴大师梅纽因命名', '位于唐岛湾银沙滩路', '面向音乐天赋青少年', '青岛特色音乐教育资源'], ru: ['Названа в честь скрипача Менюхина', 'Рядом с парком Тандаовань', 'Для музыкально одарённой молодёжи', 'Уникальный музыкальный ресурс Циндао'], en: ['Named after violin master Menuhin', 'Located near Tangdaowan Beach', 'For musically talented youth', 'Unique music education resource in Qingdao'] }
  }
];

export function getUniversityById(id) {
  return universities.find(u => u.id === id);
}
