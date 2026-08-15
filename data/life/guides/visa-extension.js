// Guide: 签证延期
export default {
  id: 'visa-extension',
  category: 'visa-legal',
  icon: '🔄',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: [],
  prerequisites: ["residence-permit"],
  tags: ["visa", "extension", "renewal"],
  title: { zh: '签证延期', en: 'Visa Extension', ru: 'Продление визы' },
  summary: { zh: '居留许可到期前的续签流程和材料准备', en: 'Renewal process and documents before residence permit expiry', ru: 'Продление ВНЖ до истечения срока' },
  intro: { zh: '居留许可到期前需要及时续签，避免非法滞留。', en: 'Renew residence permit before expiry to avoid illegal overstay.', ru: 'Продлите ВНЖ до истечения, чтобы избежать нелегального пребывания.' },
  preparation: { zh: ['护照', '在读证明', '成绩单', '学校续签函'], en: ['Passport', 'Enrollment certificate', 'Transcript', 'University renewal letter'], ru: ['Паспорт', 'Справка об обучении', 'Транскрипт', 'Письмо вуза'] },
    steps: [
    {
      title: { zh: '⏰ 时间：到期前30天开始办理', en: 'Start 30 days before expiry', ru: 'За 30 дней до окончания' },
      desc: {
        zh: '⏰ 时间：到期前30天开始办理\n\n1. 到学校国际学生办公室领取续签材料清单\n2. 准备：在读证明、成绩单、护照复印件等\n3. 到出入境管理处提交申请\n4. 缴费\n5. 等待7-15个工作日\n6. 领取新居留许可',
        en: '⏰ Start 30 days before expiry\n\n1. Get renewal checklist from international office\n2. Prepare: enrollment cert, transcript, passport copy\n3. Submit at Exit-Entry Administration\n4. Pay fee\n5. Wait 7-15 working days\n6. Collect new permit',
        ru: '⏰ За 30 дней до окончания\n1. Список документов в офисе\n2. Подготовьте\n3. Подайте\n4. Оплата\n5. 7-15 дней\n6. Получите новый'
      }
    },
    {
      title: { zh: '建议至少提前一个月办理，留出缓冲时间。', en: 'Start at least one month early for buffer time.', ru: 'Начните за месяц.' },
      desc: {
        zh: '💡 建议至少提前一个月办理，留出缓冲时间。',
        en: '💡 Start at least one month early for buffer time.',
        ru: '💡 Начните за месяц.'
      }
    }
  ],
  faq: [
    { q: { zh: '续签被拒了怎么办？', en: 'What if renewal is rejected?', ru: 'Отказ в продлении?' }, a: { zh: '常见原因：出勤率不达标、成绩不合格、违纪记录。联系学校国际学生办公室了解原因，部分情况可以补充材料后重新申请。', en: 'Common reasons: low attendance, poor grades, disciplinary record. Contact international office to understand reasons; some cases can re-apply with additional documents.', ru: 'Частые причины: посещаемость, оценки, нарушения. Обратитесь в международный офис.' } },
  ],
  nextGuides: ['visa-renewal', 'residence-permit', 'work-permit']
};