// Guide: 中国知网使用指南
export default {
  id: 'cnki-guide',
  category: 'academic',
  icon: '🔍',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 30,
  apps: [],
  prerequisites: ['library-guide'],
  tags: ['CNKI', 'database', 'research', 'papers'],
  title: {
    zh: '中国知网使用指南',
    en: 'CNKI Database Guide',
    ru: 'Руководство по базе данных CNKI'
  },
  summary: {
    zh: '知网注册与检索、论文下载、高级搜索技巧与替代数据库',
    en: 'CNKI registration, search, paper download, advanced search tips and alternative databases',
    ru: 'Регистрация, поиск, загрузка статей, продвинутый поиск и альтернативные базы'
  },
  intro: {
    zh: '中国知网（CNKI）是中国最大的学术文献数据库，收录了绝大多数中文期刊论文、硕博论文和会议论文。做中国相关的研究，知网是必备工具。',
    en: 'CNKI (China National Knowledge Infrastructure) is China\'s largest academic literature database, indexing most Chinese journal papers, master\'s and doctoral theses, and conference papers. It\'s an essential tool for China-related research.',
    ru: 'CNKI — крупнейшая база данных академической литературы Китая, включающая журнальные статьи, диссертации и материалы конференций. Необходимый инструмент для исследований о Китае.'
  },
  preparation: {
    zh: [
      '校园网连接',
      '知网账号（可用学号注册）'
    ],
    en: [
      'Campus network connection',
      'CNKI account (register with student ID)'
    ],
    ru: [
      'Кампусная сеть',
      'Аккаунт CNKI (регистрация по студенческому ID)'
    ]
  },
    steps: [
    {
      title: { zh: '使用知网的基本流程', en: 'Basic CNKI workflow', ru: 'Основные шаги' },
      desc: {
        zh: '使用知网的基本流程：',
        en: 'Basic CNKI workflow:',
        ru: 'Основные шаги:\n1. cnki.net (авто-вход из кампуса)\n2. Выберите область поиска\n3. Ключевые слова\n4. Продвинутый поиск\n\n📥 Скачивание PDF/CAJ'
      }
    },
    {
      title: { zh: '检索方式', en: 'Search methods', ru: 'Поисковый совет: сортировка по цитированиям' },
      desc: {
        zh: '🔍 检索方式\n1. 访问 cnki.net（校园网内自动登录）\n2. 选择检索范围：期刊、学位论文、会议\n3. 输入关键词（支持中英文）\n4. 高级搜索：按作者、期刊名、发表时间等筛选\n\n📥 下载论文\n• 校园网内可直接下载PDF/CAJ格式\n• CAJ格式需要下载"CAJViewer"阅读器\n• 建议同时下载PDF版本（如有）',
        en: '🔍 Search methods\n1. Visit cnki.net (auto-login on campus network)\n2. Choose search scope: journals, theses, conferences\n3. Enter keywords (supports Chinese and English)\n4. Advanced search: filter by author, journal name, publication date\n\n📥 Download papers\n• Direct PDF/CAJ download on campus network\n• CAJ format requires "CAJViewer" reader\n• Download PDF version too if available',
        ru: '💡 Поисковый совет: сортировка по цитированиям'
      }
    },
    {
      title: { zh: '搜索技巧', en: 'Search tips', ru: 'Альтернативы: Wanfang, VIP, Chaoxing' },
      desc: {
        zh: '💡 搜索技巧：\n• 用"主题"搜索比"全文"更精准\n• 按"被引量"排序可以找到高影响力论文\n• 查看论文的"参考文献"和"引证文献"做文献链追踪\n• 关注该领域的核心期刊',
        en: '💡 Search tips:\n• "Subject" search is more precise than "full text"\n• Sort by "citation count" to find influential papers\n• Check paper\'s "references" and "cited by" for literature chain tracking\n• Focus on core journals in your field',
        ru: '📚 Альтернативы: Wanfang, VIP, Chaoxing'
      }
    },
    {
      title: { zh: '替代数据库', en: 'Alternative databases', ru: 'Альтернативы: Wanfang, VIP, Chaoxing' },
      desc: {
        zh: '📚 替代数据库：\n• 万方数据 (wanfangdata.com.cn)\n• 维普 (cqvip.com)\n• 超星学术搜索',
        en: '📚 Alternative databases:\n• Wanfang Data (wanfangdata.com.cn)\n• VIP (cqvip.com)\n• Chaoxing Academic Search',
        ru: '📚 Альтернативы: Wanfang, VIP, Chaoxing'
      }
    }
  ],
  faq: [
  ],
  nextGuides: ['research-tools', 'academic-conferences']
};
