// Guide: 图书馆使用指南
export default {
  id: 'library-guide',
  category: 'academic',
  icon: '📖',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 30,
  apps: [],
  prerequisites: ['course-registration'],
  tags: ['library', 'books', 'study-space', 'CNKI'],
  title: {
    zh: '图书馆使用指南',
    en: 'Library Usage Guide',
    ru: 'Руководство по библиотеке'
  },
  summary: {
    zh: '图书馆资源、借阅规则、自习空间、数据库使用与CNKI论文检索',
    en: 'Library resources, borrowing rules, study spaces, databases and CNKI paper search',
    ru: 'Ресурсы библиотеки, правила выдачи, учебные зоны, базы данных и поиск статей в CNKI'
  },
  intro: {
    zh: '大学图书馆是留学生最重要的学习资源之一。中国高校图书馆不仅藏书丰富，还提供电子数据库、自习空间和多种学术服务。',
    en: 'The university library is one of the most important academic resources for international students. Chinese university libraries not only have rich collections but also provide electronic databases, study spaces and various academic services.',
    ru: 'Библиотека — один из важнейших ресурсов для иностранных студентов. Библиотеки китайских вузов предлагают богатые коллекции, электронные базы данных, учебные зоны и академические услуги.'
  },
  preparation: {
    zh: [
      '学生证（借书凭证）',
      '了解图书馆开放时间'
    ],
    en: [
      'Student ID card (borrowing credential)',
      'Know library opening hours'
    ],
    ru: [
      'Студенческий билет',
      'Знайте часы работы библиотеки'
    ]
  },
  steps: [
    {
      title: {
        zh: '借阅与自习',
        en: 'Borrowing & Study Spaces',
        ru: 'Выдача книг и учебные зоны'
      },
      desc: {
        zh: '图书馆基本服务：\n\n📚 借书\n• 用学生证在自助借还机或前台借书\n• 一般可借5-15本，期限30天，可续借\n• 逾期会罚款（约0.1元/天/本）\n• 可在网上预约已被借出的书\n\n💻 电子资源\n• 校园网内可免费使用各种学术数据库\n• CNKI（中国知网）：最大的中文论文数据库\n• 万方、维普：其他中文学术数据库\n• 超星读书：电子图书\n• EBSCO、ProQuest：外文数据库\n\n🪑 自习空间\n• 开放自习区：先到先得\n• 考研/考试季座位紧张，需早起占座\n• 有些图书馆提供讨论室（需预约）\n• 24小时自习室（部分学校）',
        en: 'Basic library services:\n\n📚 Borrowing\n• Use student ID at self-service machine or front desk\n• Usually 5-15 books, 30-day loan period, renewable\n• Overdue fine: ~¥0.1/day/book\n• Can reserve books that are checked out\n\n💻 Electronic resources\n• Free access to academic databases on campus network\n• CNKI: Largest Chinese academic paper database\n• Wanfang, VIP: Other Chinese academic databases\n• Chaoxing: E-books\n• EBSCO, ProQuest: Foreign databases\n\n🪑 Study spaces\n• Open study areas: first come first served\n• Seats are tight during exam season — arrive early\n• Some libraries offer discussion rooms (reservation needed)\n• 24-hour study rooms (some schools)',
        ru: 'Основные услуги:\n\n📚 Книги: 5-15 штук, 30 дней\n💻 Электронные ресурсы: CNKI, Wanfang, Chaoxing, EBSCO\n🪑 Учебные зоны: свободные места, в сезон экзаменов — приходите рано'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '怎么使用CNKI找中文论文？',
        en: 'How to use CNKI for Chinese papers?',
        ru: 'Как найти китайские статьи в CNKI?'
      },
      a: {
        zh: '在校园网内访问cnki.net，可以用关键词、作者、期刊等搜索。即使不会中文，也可以用英文关键词搜索（部分论文有英文摘要）。下载PDF需要校园网权限，在校外可通过VPN登录校园网账号访问。',
        en: 'Access cnki.net on campus network. Search by keyword, author, or journal. Even without Chinese skills, you can search with English keywords (some papers have English abstracts). PDF download requires campus network access; off-campus, use VPN to log in with campus account.',
        ru: 'Доступ через кампусную сеть на cnki.net. Можно искать по ключевым словам, даже на английском. PDF — через кампусную сеть.'
      }
    }
  ],
  nextGuides: ['academic-writing', 'cnki-guide']
};
