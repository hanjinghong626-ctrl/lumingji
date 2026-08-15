// Guide: 学术论文写作
export default {
  id: 'academic-writing',
  category: 'academic',
  icon: '✍️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 45,
  apps: [],
  prerequisites: ['library-guide'],
  tags: ['writing', 'thesis', 'paper', 'academic'],
  title: {
    zh: '学术论文写作',
    en: 'Academic Paper Writing',
    ru: 'Написание академических работ'
  },
  summary: {
    zh: '中文论文格式、写作规范、查重系统与投稿流程',
    en: 'Chinese paper format, writing standards, plagiarism check system and submission process',
    ru: 'Формат китайских работ, стандарты написания, система проверки на плагиат и подача'
  },
  intro: {
    zh: '在中国写学术论文有一些独特的规范，特别是用中文撰写论文时。了解格式要求、查重机制和投稿流程，能帮助你顺利完成学术任务。',
    en: 'Writing academic papers in China has some unique standards, especially when writing in Chinese. Understanding format requirements, plagiarism checking mechanisms and submission processes helps you complete academic tasks smoothly.',
    ru: 'Написание академических работ в Китае имеет свои стандарты, особенно на китайском языке. Понимание формата, проверки на плагиат и процесса подачи помогает顺利完成.'
  },
  preparation: {
    zh: [
      '了解论文的格式模板',
      '准备好参考文献管理工具',
      '了解查重系统（知网/万方）'
    ],
    en: [
      'Understand paper format template',
      'Prepare reference management tools',
      'Know plagiarism check systems (CNKI/Wanfang)'
    ],
    ru: [
      'Шаблон формата работы',
      'Инструмент управления ссылками',
      'Системы проверки на плагиат'
    ]
  },
    steps: [
    {
      title: { zh: '中文学术论文基本格式', en: 'Basic format for Chinese academic papers', ru: 'Структура китайских академических работ' },
      desc: {
        zh: '中文学术论文基本格式：',
        en: 'Basic format for Chinese academic papers:',
        ru: 'Структура китайских академических работ:\n1. Заголовок\n2. Аннотация + ключевые слова\n3. Введение\n4. Обзор литературы\n5. Методы\n6. Результаты\n7. Обсуждение\n8. Заключение\n9. Список литературы'
      }
    },
    {
      title: { zh: '结构', en: 'Structure', ru: 'Формат: шрифт Song, интервал 1.5x, ГОСТ GB/T 7714' },
      desc: {
        zh: '📄 结构\n1. 标题（中英文）\n2. 摘要 + 关键词（中英文）\n3. 引言/绪论\n4. 文献综述\n5. 研究方法\n6. 研究结果\n7. 讨论\n8. 结论\n9. 参考文献\n10. 致谢（学位论文）',
        en: '📄 Structure\n1. Title (Chinese + English)\n2. Abstract + Keywords (Chinese + English)\n3. Introduction\n4. Literature Review\n5. Research Methods\n6. Results\n7. Discussion\n8. Conclusion\n9. References\n10. Acknowledgments (thesis)',
        ru: '📐 Формат: шрифт Song, интервал 1.5x, ГОСТ GB/T 7714'
      }
    },
    {
      title: { zh: '格式要求', en: 'Format requirements', ru: 'Скачайте работы старших студентов как шаблон.' },
      desc: {
        zh: '📐 格式要求\n• 字体：正文宋体小四，标题黑体\n• 行距：1.5倍或固定22磅\n• 页边距：上下2.54cm，左右3.17cm\n• 引用格式：GB/T 7714（国家标准）\n• 参考文献格式与英文论文不同，注意学校要求',
        en: '📐 Format requirements\n• Font: Song typeface size small-4 for body, Heiti for headings\n• Line spacing: 1.5x or fixed 22pt\n• Margins: top/bottom 2.54cm, left/right 3.17cm\n• Citation format: GB/T 7714 (national standard)\n• Reference format differs from English papers — check school requirements',
        ru: '💡 Скачайте работы старших студентов как шаблон.'
      }
    },
    {
      title: { zh: '建议：下载学长学姐的论文作为参考模板。', en: 'Step 4', ru: 'Скачайте работы старших студентов как шаблон.' },
      desc: {
        zh: '💡 建议：下载学长学姐的论文作为参考模板。',
        en: '💡 Tip: Download senior students\' papers as format templates.',
        ru: '💡 Скачайте работы старших студентов как шаблон.'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '查重率要求多少？',
        en: 'What plagiarism rate is acceptable?',
        ru: 'Какой допустимый процент заимствования?'
      },
      a: {
        zh: '本科毕业论文一般要求查重率低于20-30%，硕士论文低于10-15%，博士论文低于5-10%。超过查重率要求会被要求修改甚至延期答辩。建议定稿前自己先用知网/万方自查一次。',
        en: 'Undergraduate thesis usually requires plagiarism rate below 20-30%, master\'s 10-15%, doctoral 5-10%. Exceeding the limit requires revision or even delayed defense. Self-check using CNKI/Wanfang before final submission.',
        ru: 'Бакалавр: <20-30%, магистр: <10-15%, докторант: <5-10%. Превышение — доработка. Проверьте заранее через CNKI/Wanfang.'
      }
    }
  ],
  nextGuides: ['thesis-defense', 'cnki-guide']
};
