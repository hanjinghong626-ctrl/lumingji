// Guide: 奖学金发放与领取
export default {
  id: 'scholarship-payment',
  category: 'payment',
  icon: '🎓',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 15,
  apps: [],
  prerequisites: ["open-bank-account"],
  tags: ["scholarship", "payment", "student"],
  title: { zh: '奖学金发放与领取', en: 'Scholarship Payment Guide', ru: 'Выплата стипендии' },
  summary: { zh: '各类奖学金的发放时间、方式与常见问题', en: 'Payment schedules and FAQs for CSC, university, and other scholarships', ru: 'Сроки и вопросы по стипендиям CSC и вузов' },
  intro: { zh: '中国各类奖学金通常按月发放到中国银行账户。了解发放规律有助于合理规划生活费。', en: 'Scholarships in China are typically paid monthly to your Chinese bank account. Understanding schedules helps planning.', ru: 'Стипендии обычно выплачиваются ежемесячно на китайский счёт. Знание сроков помогает планировать бюджет.' },
  preparation: { zh: ['中国银行储蓄卡', '学生证'], en: ['Chinese bank card', 'Student ID'], ru: ['Карта китайского банка', 'Студенческий билет'] },
  steps: [
    {
      title: { zh: '查看奖学金发放通知', en: 'Check scholarship payment notice', ru: 'Проверьте уведомление о стипендии' },
      desc: {
        zh: '关注学校国际学生办公室或研究生院的通知，了解奖学金发放时间和方式。通常每学期初会公布本学期奖学金发放安排。也可登录学校奖学金管理系统查看个人状态。',
        en: 'Follow notices from the international student office or graduate school to learn payment schedule and method. Usually announced at the beginning of each semester. You can also check your status in the university scholarship management system.',
        ru: 'Следите за уведомлениями международного офиса или аспирантуры о сроках и способах выплаты. Обычно объявляется в начале семестра. Также можно проверить статус в системе управления стипендиями.'
      }
,      tip: {
        zh: '如果长时间未收到奖学金，先联系学校国际学生办公室确认发放进度。',
        en: 'If payment is delayed, contact the international student office first to confirm progress.',
        ru: 'Если выплата задерживается, сначала свяжитесь с международным офисом.'
      }
    },
    {
      title: { zh: '确认银行账户信息', en: 'Confirm bank account info', ru: 'Подтвердите информацию банковского счёта' },
      desc: {
        zh: '奖学金通常通过银行转账发放。确认你在学校登记的银行账户信息正确：开户行、账号、户名。如果需要变更银行账户，提前到学校财务处或国际学生办公室办理变更手续。',
        en: 'Scholarships are usually paid via bank transfer. Confirm your registered bank account info is correct: bank name, account number, account holder name. If you need to change accounts, apply at the finance office or international student office in advance.',
        ru: 'Стипендии обычно перечисляются банковским переводом. Убедитесь, что зарегистрированные данные банковского счёта верны: банк, номер счёта, имя владельца. Если нужно изменить счёт, заранее обратитесь в финансовый отдел или международный офис.'
      }
,      tip: {
        zh: '中国银行、建设银行等大行转账到账较快。确保账户状态正常（未被冻结或注销）。',
        en: 'Major banks like Bank of China and China Construction Bank process transfers faster. Ensure account is active (not frozen or closed).',
        ru: 'Крупные банки, такие как Bank of China, обрабатывают переводы быстрее. Убедитесь, что счёт активен (не заморожен и не закрыт).'
      }
    },
    {
      title: { zh: '提交发放申请', en: 'Submit payment application', ru: 'Подайте заявку на выплату' },
      desc: {
        zh: '部分奖学金需要主动提交发放申请（如国家奖学金、地方政府奖学金等）。在学校系统中填写申请表格，上传所需材料（如成绩单、在读证明等），提交后等待审核。',
        en: 'Some scholarships require active application (e.g., national scholarships, local government scholarships). Fill in application forms in the university system, upload required materials (transcripts, enrollment certificate, etc.), and wait for review.',
        ru: 'Некоторые стипендии требуют подачи заявления (например, государственные, региональные). Заполните форму в университетской системе, загрузите документы (транскрипт, справку об обучении) и ждите рассмотрения.'
      }
,      tip: {
        zh: '注意截止日期，逾期提交可能导致延迟发放或失去资格。',
        en: 'Note the deadline — late submission may delay payment or disqualify you.',
        ru: 'Соблюдайте дедлайн — поздняя подача может задержать выплату или лишить права.'
      }
    },
    {
      title: { zh: '等待到账与查询', en: 'Wait for payment and check', ru: 'Ожидание и проверка' },
      desc: {
        zh: '审核通过后，奖学金一般在1-4周内到账。到账后学校通常会发送通知。如果超过预期时间仍未到账，联系学校财务处查询。注意保留银行流水记录，以备核对。',
        en: 'After approval, scholarship usually arrives within 1-4 weeks. The university usually sends a notification upon arrival. If it exceeds expected time, contact the finance office to inquire. Keep bank records for verification.',
        ru: 'После одобрения стипендия обычно поступает в течение 1-4 недель. Университет обычно уведомляет о поступлении. Если превышает срок — обратитесь в финансовый отдел. Сохраняйте банковские выписки.'
      }
,      tip: {
        zh: '奖学金到账后如需兑换外币，可通过银行App或柜台办理结汇。',
        en: 'If you need to convert to foreign currency after receiving, use bank app or counter for foreign exchange.',
        ru: 'Для конвертации валюты используйте банковское приложение или кассу.'
      }
    }
  ],
  faq: [
    { q: { zh: '奖学金迟迟不到账怎么办？', en: 'Scholarship payment delayed?', ru: 'Стипендия задерживается?' }, a: { zh: '先检查银行卡状态，再联系学校国际学生办公室。CSC可联系国家留学基金委。延迟一周内属正常。', en: 'Check bank status first, then contact international student office. CSC: contact China Scholarship Council. Under 1 week is normal.', ru: 'Проверьте счёт, обратитесь в международный офис. CSC — свяжитесь с CSC. До недели — норма.' } },
  ],
  nextGuides: ['part-time-payment', 'bank-transfer', 'open-bank-account']
};