// Guide: 实习规定
export default {
  id: 'internship-rules',
  category: 'visa-legal',
  icon: '📝',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ["internship", "rules", "student"],
  title: { zh: '实习规定', en: 'Internship Rules', ru: 'Правила стажировки' },
  summary: { zh: '留学生实习的法律框架、权益保护与注意事项', en: 'Legal framework, rights protection, and tips for student internships', ru: 'Правовая база, защита прав и советы по стажировке' },
  intro: { zh: '实习是留学经历的重要部分，但需要了解相关规定以保护自身权益。', en: 'Internships are an important part of studying abroad, but you need to understand regulations to protect your rights.', ru: 'Стажировки важны, но нужно знать правила для защиты прав.' },
  preparation: { zh: ['学校批准', '实习协议'], en: ['University approval', 'Internship agreement'], ru: ['Согласие вуза', 'Договор стажировки'] },
  steps: [
    {
      title: { zh: '了解实习政策', en: 'Understand internship policies', ru: 'Политика стажировок' },
      desc: {
        zh: '外国留学生在中国实习需满足：①持有效学生居留许可；②获得学校书面同意；③实习内容与专业相关；④实习单位合法。实习期限一般不超过学业期限。未获批准实习属于非法就业。',
        en: 'Foreign students interning in China must: ① Hold a valid student residence permit; ② Obtain written university approval; ③ Internship must relate to your major; ④ Employer must be legally qualified. Internship duration generally cannot exceed your study period. Unauthorized internships constitute illegal employment.',
        ru: 'Иностранные студенты для стажировки в Китае должны: ① Иметь действующий ВНЖ студента; ② Получить письменное одобрение вуза; ③ Стажировка должна быть связана с вашей специальностью; ④ Работодатель должен иметь законную квалификацию. Срок стажировки обычно не превышает срок обучения. Неодобренные стажировки считаются незаконной занятостью.'
      }
    },
    {
      title: { zh: '办理实习手续', en: 'Complete internship procedures', ru: 'Оформление стажировки' },
      desc: {
        zh: '流程：①获得实习offer；②向学校国际学生办公室提交实习申请（附offer和实习协议）；③学校审核并出具同意函；④到出入境管理处办理居留许可上的实习备注；⑤开始实习。全程约2-3周。',
        en: 'Process: ① Get an internship offer; ② Submit application to the international student office (with offer and internship agreement); ③ University reviews and issues approval letter; ④ Go to Exit-Entry Administration to add internship annotation to residence permit; ⑤ Start internship. The whole process takes about 2-3 weeks.',
        ru: 'Процесс: ① Получите предложение о стажировке; ② Подайте заявление в международный офис (с предложением и договором); ③ Вуз рассматривает и выдаёт письмо-одобрение; ④ Обратитесь в Управление въезда-выезда для отметки в ВНЖ; ⑤ Начните стажировку. Весь процесс занимает около 2-3 недель.'
      }
,      tip: {
        zh: '一定要走正规流程，不要为了省时间跳过学校审批环节。',
        en: 'Follow the proper process — do not skip the university approval step to save time.',
        ru: 'Следуйте правильной процедуре — не пропускайте этап одобрения вузом для экономии времени.'
      }
    },
    {
      title: { zh: '实习期间注意事项', en: 'Key points during internship', ru: 'Важные моменты во время стажировки' },
      desc: {
        zh: '①实习内容必须与申请时描述一致，变更需重新申请；②实习时间不能影响正常学业（出勤率需达标）；③实习报酬需依法纳税（月入5000元以上部分）；④实习结束后向学校和出入境管理处报备。',
        en: '① Internship duties must match what was applied for — changes require re-application; ② Work hours must not affect studies (attendance must meet standards); ③ Internship income is taxable (income above 5000 yuan/month); ④ Report to the university and Exit-Entry Administration after the internship ends.',
        ru: '① Обязанности должны соответствовать заявленным — изменения требуют повторного заявления; ② Рабочее время не должно влиять на учёбу (посещаемость должна соответствовать стандартам); ③ Доход от стажировки облагается налогом (свыше 5000 юаней/мес); ④ Сообщите вузу и Управлению въезда-выезда после окончания стажировки.'
      }
,      tip: {
        zh: '实习期间保持良好出勤记录非常重要，这可能影响签证续签。',
        en: 'Maintaining good attendance during your internship is crucial — it may affect visa renewal.',
        ru: 'Поддержание хорошей посещаемости во время стажировки критически важно — это может повлиять на продление визы.'
      }
    }
  ],
  faq: [
    { q: { zh: '实习不付工资合法吗？', en: 'Is unpaid internship legal?', ru: 'Законна ли неоплачиваемая стажировка?' }, a: { zh: '取决于实习性质。学校必修的学分实习可以不付薪。但企业自主招聘的实习岗位应当支付合理报酬。签协议时明确约定。', en: 'Depends. Required credit internships may be unpaid. Company-recruited intern positions should pay reasonable compensation. Clarify in the agreement.', ru: 'Зависит. Обязательная учебная — может быть без оплаты. Корпоративная — должна оплачиваться. Уточните в договоре.' } },
  ],
  nextGuides: ['work-permit', 'legal-rights', 'part-time-payment']
};