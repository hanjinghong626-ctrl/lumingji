// Guide: 留学生法律权益
export default {
  id: 'legal-rights',
  category: 'visa-legal',
  icon: '⚖️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ["rights", "legal", "protection"],
  title: { zh: '留学生法律权益', en: 'International Student Legal Rights', ru: 'Правовые права иностранных студентов' },
  summary: { zh: '留学生在中国的合法权益、求助渠道与自我保护', en: 'Legal rights, help channels, and self-protection for international students', ru: 'Права, помощь и самозащита иностранных студентов' },
  intro: { zh: '了解在中国的合法权益，遇到问题时知道如何求助。', en: 'Know your legal rights in China and how to seek help when needed.', ru: 'Знайте свои права и как получить помощь.' },
  preparation: { zh: ['保存紧急联系方式'], en: ['Save emergency contacts'], ru: ['Сохраните экстренные контакты'] },
  steps: [
    {
      title: { zh: '了解基本法律权利', en: 'Know your basic legal rights', ru: 'Основные юридические права' },
      desc: {
        zh: '在中国的外国人享有与中国公民同等的法律保护。核心权利包括：人身安全受法律保护、消费权益受保护、劳动权益受保护、有权获得法律援助。同时需遵守中国法律法规，居留许可相关义务（如住宿登记、签证续签）务必按时履行。',
        en: 'Foreigners in China enjoy the same legal protections as Chinese citizens. Key rights: personal safety protected by law, consumer rights protected, labor rights protected, right to legal aid. You must also comply with Chinese laws and fulfill residence permit obligations (accommodation registration, visa renewals) on time.',
        ru: 'Иностранцы в Китае пользуются той же правовой защитой, что и граждане Китая. Основные права: личная безопасность защищена законом, права потребителя защищены, трудовые права защищены, право на юридическую помощь. Также необходимо соблюдать законы и выполнять обязательства по ВНЖ (регистрация, продление визы).'
      }
,      tip: {
        zh: '遇到法律问题时，第一时间联系学校国际学生办公室，他们会提供指导和帮助。',
        en: 'When facing legal issues, contact your university international student office first — they provide guidance and assistance.',
        ru: 'При юридических проблемах сначала обратитесь в международный офис вуза — они предоставят помощь.'
      }
    },
    {
      title: { zh: '寻求法律援助', en: 'Seek legal aid', ru: 'Поиск юридической помощи' },
      desc: {
        zh: '如需法律咨询或援助：①拨打12348公共法律服务热线（免费，有翻译服务）；②到学校法学院的法律援助中心咨询（很多大学有免费法律援助）；③联系本国驻华使领馆寻求领事保护；④到当地法律援助中心面谈。',
        en: 'For legal consultation: ① Call 12348 Public Legal Service Hotline (free, translation available); ② Consult the legal aid center at your university law school (many offer free aid); ③ Contact your country embassy/consulate for consular protection; ④ Visit the local legal aid center in person.',
        ru: 'Для консультации: ① Звонок на горячую линию 12348 (бесплатно, есть перевод); ② Консультация в центре правовой помощи при юридическом факультете вуза (многие предлагают бесплатную помощь); ③ Свяжитесь с посольством/консульством вашей страны; ④ Посетите местный центр правовой помощи.'
      }
,      tip: {
        zh: '12348热线服务时间一般为工作日9:00-17:00，部分城市提供24小时服务。',
        en: 'The 12348 hotline usually operates weekdays 9:00-17:00; some cities offer 24-hour service.',
        ru: 'Горячая линия 12348 обычно работает в будни 9:00-17:00; некоторые города предлагают круглосуточное обслуживание.'
      }
    },
    {
      title: { zh: '投诉与维权', en: 'File complaints and protect your rights', ru: 'Жалобы и защита прав' },
      desc: {
        zh: '消费纠纷：拨打12315消费者投诉热线或在12315平台网上投诉。劳动纠纷：向当地劳动仲裁委员会申请仲裁（免费）。遭遇歧视或不公正对待：向公安机关投诉或联系使领馆。所有投诉建议保留书面证据（合同、收据、聊天记录截图等）。',
        en: 'Consumer disputes: call 12315 consumer complaint hotline or file online. Labor disputes: apply for arbitration at the local Labor Arbitration Committee (free). Discrimination or unfair treatment: file complaints with police or contact embassy. Keep written evidence for all complaints (contracts, receipts, chat screenshots).',
        ru: 'Споры потребителей: звонок на горячую линию 12348 или онлайн-жалоба. Трудовые споры: арбитраж в местном комитете (бесплатно). Дискриминация: жалоба в полицию или посольство. Сохраняйте письменные доказательства (контракты, чеки, скриншоты чатов).'
      }
,      tip: {
        zh: '任何维权过程中，证据是最重要的——养成保存截图和收据的习惯。',
        en: 'In any rights protection process, evidence is most important — develop the habit of saving screenshots and receipts.',
        ru: 'В процессе защиты прав доказательства наиболее важны — привыкните сохранять скриншоты и чеки.'
      }
    }
  ],
  faq: [
    { q: { zh: '遇到纠纷怎么办？', en: 'What to do in disputes?', ru: 'Что делать при конфликте?' }, a: { zh: '先联系学校国际学生办公室协助调解。调解不成可拨打12348法律咨询。涉及诈骗或人身安全立即报警110。', en: 'First contact international office for mediation. If unresolved, call 12348 legal aid. For fraud or safety threats, call police 110.', ru: 'Сначала — интернациональный офис. Затем 12348. При угрозе — 110.' } },
  ],
  nextGuides: ['emergency-contacts', 'police-registration', 'work-permit']
};