// Guide: 求职指南
export default {
  id: 'job-search',
  category: 'career',
  icon: '🔎',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 30,
  apps: [],
  prerequisites: [],
  tags: ['job', 'search', 'graduation'],
  title: {
    zh: '求职指南',
    en: 'Job Search Guide',
    ru: 'Руководство по поиску работы'
  },
  summary: {
    zh: '求职渠道、简历准备、面试技巧与签证转换',
    en: 'Job search channels, resume preparation, interview tips and visa conversion',
    ru: 'Каналы поиска, резюме, собеседование и виза'
  },
  intro: {
    zh: '毕业后想在中国工作，需要提前了解求职流程和签证转换。',
    en: 'If you want to work in China after graduation, understand the job search process and visa conversion in advance.',
    ru: 'Для работы в Китае после выпуска — изучите процесс заранее.'
  },
  preparation: {
    zh: [
    ],
    en: [
    ],
    ru: [
    ]
  },
    steps: [
    {
      title: { zh: '🔎 求职渠道', en: 'Step 1', ru: 'BOSS直聘, ярмарки вакансий, хедхантеры' },
      desc: {
        zh: '🔎 求职渠道\n• 招聘网站：BOSS直聘、智联招聘、前程无忧\n• 校园招聘会：学校组织\n• 猎头公司：高端岗位\n• 人脉推荐：学长学姐/老师',
        en: '🔎 Channels: BOSS直聘, Zhaopin, 51job; campus fairs; headhunters; networking',
        ru: '🔎 BOSS直聘, ярмарки вакансий, хедхантеры'
      }
    },
    {
      title: { zh: '简历准备', en: 'Step 2', ru: 'Резюме: китайское + английское, выделите двуязычность' },
      desc: {
        zh: '📄 简历准备\n• 中文简历 + 英文简历\n• 突出双语/多语优势\n• 突出跨文化经验\n• 一页为佳',
        en: '📄 Resume: Chinese + English, highlight bilingual + cross-cultural skills, 1 page',
        ru: '📄 Резюме: китайское + английское, выделите двуязычность'
      }
    },
    {
      title: { zh: '毕业后工作签证', en: 'Step 3', ru: 'После выпуска: рабочая виза Z' },
      desc: {
        zh: '📋 毕业后工作签证\n• 需要找到愿意聘用外国人的公司\n• 申请工作许可（Work Permit）\n• 将学生签证转为工作签证（Z签证）\n• 部分城市有留学生创业优惠政策',
        en: '📋 After graduation: find company willing to hire foreigners → work permit → Z visa',
        ru: '📋 После выпуска: рабочая виза Z'
      }
    },
    {
      title: { zh: '留学生在中国的就业优势：双语能力、跨文化理解、国际视野。', en: 'Step 4', ru: 'Преимущества: bilingual, cross-cultural' },
      desc: {
        zh: '💡 留学生在中国的就业优势：双语能力、跨文化理解、国际视野。',
        en: '💡 Advantages: bilingual, cross-cultural, international perspective',
        ru: '💡 Преимущества: bilingual, cross-cultural'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['resume-china', 'interview-tips']
};
