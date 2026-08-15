// Guide: 打工/实习许可
export default {
  id: 'work-permit',
  category: 'visa-legal',
  icon: '💼',
  type: 'guide',
  difficulty: 3,
  estimatedTime: 20,
  apps: [],
  prerequisites: ["residence-permit"],
  tags: ["work", "permit", "part-time"],
  title: { zh: '打工/实习许可', en: 'Work/Internship Permit', ru: 'Разрешение на работу/стажировку' },
  summary: { zh: '留学生打工和实习的法律要求与申请流程', en: 'Legal requirements and process for student work and internships', ru: 'Требования и процесс для подработки и стажировки' },
  intro: { zh: '留学生在中国打工需要办理合法手续，否则属于违法行为。', en: 'Students need legal procedures to work in China; otherwise it\'s illegal.', ru: 'Студентам нужно легальное оформление для работы.' },
  preparation: { zh: ['护照和居留许可', '学校同意函', '实习单位证明'], en: ['Passport and residence permit', 'University consent letter', 'Internship offer'], ru: ['Паспорт и ВНЖ', 'Согласие вуза', 'Письмо от работодателя'] },
  steps: [
    {
      title: { zh: '了解留学生工作规定', en: 'Understand work regulations for students', ru: 'Правила работы для студентов' },
      desc: {
        zh: '持学生居留许可的外国留学生，在中国工作需满足特定条件：①必须是全日制在读学生；②实习/兼职需学校同意并在居留许可上注明；③全职工作需要取得工作许可（通常需毕业后）。未经批准擅自工作属于非法就业，面临罚款和遣返风险。',
        en: 'Foreign students on a student residence permit must meet specific conditions to work in China: ① Must be a full-time enrolled student; ② Internships/part-time jobs need university approval and annotation on residence permit; ③ Full-time work requires a work permit (usually after graduation). Unauthorized work is illegal employment, risking fines and deportation.',
        ru: 'Иностранные студенты с видом на жительство должны соблюдать условия для работы в Китае: ① Полная дневная форма обучения; ② Стажировки/подработки требуют одобрения вуза и отметки в ВНЖ; ③ Полная работа требует разрешения (обычно после выпуска). Незаконная работа грозит штрафом и депортацией.'
      }
    },
    {
      title: { zh: '申请实习/兼职许可', en: 'Apply for internship/part-time permission', ru: 'Заявка на стажировку/подработку' },
      desc: {
        zh: '如需实习或兼职：①获得用人单位的录用通知/实习协议；②向学校国际学生办公室提交申请；③学校出具同意实习的证明函；④携带证明到出入境管理处，申请在居留许可上添加实习备注。整个过程约1-2周。',
        en: 'For internships or part-time work: ① Get an offer/internship agreement from the employer; ② Submit application to the university international student office; ③ University issues an approval letter; ④ Bring the letter to Exit-Entry Administration to add internship annotation to residence permit. Process takes about 1-2 weeks.',
        ru: 'Для стажировки или подработки: ① Получите предложение от работодателя; ② Подайте заявление в международный офис вуза; ③ Вуз выдаёт письмо-одобрение; ④ Отнесите письмо в Управление въезда-выезда для отметки в ВНЖ. Процесс занимает 1-2 недели.'
      }
,      tip: {
        zh: '建议通过学校官方渠道找实习，合法且有保障。',
        en: 'Use official university channels to find internships — they are legal and protected.',
        ru: 'Используйте официальные каналы вуза для поиска стажировок — это легально и защищено.'
      }
    },
    {
      title: { zh: '办理工作许可（毕业后）', en: 'Apply for work permit after graduation', ru: 'Оформление разрешения на работу после выпуска' },
      desc: {
        zh: '毕业后如拟在中国工作，需由用人单位协助办理：①申请外国人工作许可通知；②办理Z字工作签证（如需出境重新入境）；③到出入境管理处办理工作类居留许可。所需材料：学历认证、无犯罪记录、体检证明、聘用合同等。',
        en: 'After graduation, if you plan to work in China, the employer assists with: ① Apply for Foreigner Work Permit Notification; ② Obtain Z work visa (if you need to exit and re-enter); ③ Apply for work-type residence permit at Exit-Entry Administration. Required: degree authentication, criminal record check, health check, employment contract.',
        ru: 'После выпуска для работы в Китае работодатель помогает: ① Заявка на уведомление о разрешении на работу; ② Получение рабочей визы Z (при необходимости выезда и въезда); ③ Оформление ВНЖ рабочего типа. Требуется: легализация диплома, справка о несудимости, медосмотр, трудовой договор.'
      }
,      tip: {
        zh: '工作单位必须有聘用外国人的资质，入职前确认公司是否具备该资格。',
        en: 'The employer must be qualified to hire foreigners — confirm the company qualification before accepting an offer.',
        ru: 'Работодатель должен иметь квалификацию для найма иностранцев — уточните перед принятием предложения.'
      }
    }
  ],
  faq: [
    { q: { zh: '可以在校外兼职吗？', en: 'Can I work part-time off-campus?', ru: 'Можно подрабатывать вне кампуса?' }, a: { zh: '可以，但必须经过学校和出入境管理处批准。未经批准的兼职属于违法，可能被遣返并影响未来签证。', en: 'Yes, but must be approved by university and Exit-Entry Administration. Unauthorized work is illegal and may result in deportation.', ru: 'Да, но с разрешения вуза и иммиграции. Без разрешения — нелегально, депортация.' } },
  ],
  nextGuides: ['internship-rules', 'legal-rights', 'part-time-payment']
};