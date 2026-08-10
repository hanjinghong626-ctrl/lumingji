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
      title: { zh: '申请打工许可', en: 'Apply for Work Permit', ru: 'Заявка на разрешение' },
      desc: { zh: '📋 步骤：\n1. 获得学校书面同意\n2. 到出入境管理处申请\n3. 在居留许可上加注「实习」或「兼职」\n4. 获得批准后方可工作\n\n⚠️ 注意：\n• 未经批准的打工是违法行为\n• 被发现可能被遣返\n• 每周工作时间有限制\n• 实习需与专业相关', en: '📋 Steps: get school written consent → apply at Exit-Entry → add "internship" or "part-time" to residence permit → get approval\n\n⚠️ Unauthorized work is illegal; may face deportation; weekly hour limits; internship must be major-related.', ru: '📋 Согласие вуза → иммиграционная служба → пометка в ВНЖ → разрешение\n⚠️ Без разрешения — нелегально, депортация. Лимит часов. Стажировка по специальности.' },
    },
  ],
  faq: [
    { q: { zh: '可以在校外兼职吗？', en: 'Can I work part-time off-campus?', ru: 'Можно подрабатывать вне кампуса?' }, a: { zh: '可以，但必须经过学校和出入境管理处批准。未经批准的兼职属于违法，可能被遣返并影响未来签证。', en: 'Yes, but must be approved by university and Exit-Entry Administration. Unauthorized work is illegal and may result in deportation.', ru: 'Да, но с разрешения вуза и иммиграции. Без разрешения — нелегально, депортация.' } },
  ],
  nextGuides: ['internship-rules', 'legal-rights', 'part-time-payment']
};