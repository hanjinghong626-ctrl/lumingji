// Guide: 居留许可办理
export default {
  id: 'residence-permit',
  category: 'visa-legal',
  icon: '🪪',
  type: 'guide',
  difficulty: 3,
  estimatedTime: 30,
  apps: [],
  prerequisites: [],
  tags: ["residence-permit", "visa", "legal"],
  title: { zh: '居留许可办理', en: 'Residence Permit Application', ru: 'Оформление ВНЖ' },
  summary: { zh: 'X1签证入境后办理居留许可的全流程：材料、步骤、时间', en: 'Full process for X1 visa holders: documents, steps, timeline', ru: 'Процесс оформления ВНЖ для визы X1' },
  intro: { zh: '持X1签证入境后，必须在30天内到出入境管理处办理居留许可，否则签证过期。', en: 'X1 visa holders must apply for residence permit at the Exit-Entry Administration within 30 days of entry, or the visa expires.', ru: 'Держатели X1 должны оформить ВНЖ в течение 30 дней, иначе виза истечёт.' },
  preparation: { zh: ['护照原件', '录取通知书', 'JW201/JW202表', '体检报告', '住宿登记证明', '照片', '学校介绍信'], en: ['Passport', 'Admission letter', 'JW201/JW202', 'Medical report', 'Accommodation registration', 'Photo', 'University letter'], ru: ['Паспорт', 'Письмо о зачислении', 'JW201/JW202', 'Медсправка', 'Регистрация жилья', 'Фото', 'Письмо вуза'] },
  steps: [
    {
      title: { zh: '确认申请资格与时间', en: 'Confirm eligibility and timeline', ru: 'Подтвердите право и сроки' },
      desc: {
        zh: '持X1签证（长期学习签证）入境后，必须在30天内到出入境管理处将签证转换为居留许可。居留许可到期前30天也应开始准备续签。确认你的签证类型和有效期，提前做好规划。',
        en: 'After entering with X1 visa (long-term study), must convert to residence permit at Exit-Entry Administration within 30 days. Start renewal 30 days before current permit expires. Check visa type and validity.',
        ru: 'После въезда по визе X1 необходимо в течение 30 дней получить ВНЖ в Управлении въезда-выезда. Начните продление за 30 дней до истечения. Проверьте тип и срок визы.'
      }
,      tip: {
        zh: '超过30天未办理居留许可，X1签证将失效，可能面临非法滞留风险。',
        en: 'Failing to apply within 30 days means X1 visa becomes invalid, risking illegal overstay.',
        ru: 'Неоформление ВНЖ в течение 30 дней означает аннулирование визы X1.'
      }
    },
    {
      title: { zh: '准备申请材料', en: 'Prepare application materials', ru: 'Подготовьте материалы' },
      desc: {
        zh: '所需材料：①护照原件+复印件；②签证申请表（现场领取或官网下载）+近期白底证件照；③学校录取通知书+JW201/JW202表；④健康检查证明（到指定国际旅行卫生保健中心做体检）；⑤住宿登记证明。具体以当地出入境管理局要求为准。',
        en: 'Required: ① Passport + copy; ② Visa application form (pick up on-site or download) + white-background ID photo; ③ Admission letter + JW201/JW202 form; ④ Health check certificate (at designated International Travel Healthcare Center); ⑤ Accommodation registration. Check local requirements.',
        ru: 'Требуется: ① Паспорт + копия; ② Анкета + фото на белом фоне; ③ Письмо о зачислении + форма JW201/JW202; ④ Медицинская справка (в аккредитованном центре); ⑤ Регистрация проживания. Уточните местные требования.'
      }
,      tip: {
        zh: '健康检查需到指定机构（国际旅行卫生保健中心），普通医院体检无效。体检当天需空腹。',
        en: 'Health checks must be at designated centers — regular hospital checkups won\'t be accepted. Fasting required.',
        ru: 'Медосмотр только в аккредитованном центре — обычные больницы не принимаются. Натощак.'
      }
    },
    {
      title: { zh: '到出入境管理处提交', en: 'Submit at Exit-Entry Administration', ru: 'Подача в Управлении въезда-выезда' },
      desc: {
        zh: '携带全部材料到所在城市公安局出入境管理处。取号排队，到窗口提交材料。工作人员审核材料，可能现场拍照和采集指纹。提交后会给你一份受理回执，上面有领取日期。',
        en: 'Bring all documents to your city Exit-Entry Administration. Take queue number, submit at window. Staff reviews documents, may take photo and fingerprints. You will receive a receipt with pickup date.',
        ru: 'Принесите все документы в Управление въезда-выезда вашего города. Возьмите талон, подайте в окне. Сотрудники проверят, могут сфотографировать и снять отпечатки. Получите квитанцию с датой получения.'
      }
,      tip: {
        zh: '建议工作日上午去，人相对少一些。部分城市支持网上预约减少排队时间。',
        en: 'Go on weekday mornings when less crowded. Some cities support online booking to reduce wait.',
        ru: 'Идите утром в будни — меньше очередь. Некоторые города поддерживают онлайн-запись.'
      }
    },
    {
      title: { zh: '等待审批与领取', en: 'Wait for approval and collect', ru: 'Ожидание и получение' },
      desc: {
        zh: '居留许可一般7-15个工作日出结果。部分城市支持邮寄到家。领取时携带回执和护照原件到指定窗口领取。检查居留许可上的信息（姓名、签证类型、有效期、出入境次数）是否正确。',
        en: 'Residence permits usually take 7-15 working days. Some cities offer mail delivery. Collect at designated window with receipt and passport. Check all info (name, visa type, validity, entry count) for accuracy.',
        ru: 'ВНЖ обычно оформляется за 7-15 рабочих дней. Некоторые города предлагают доставку. Получите в указанном окне с квитанцией и паспортом. Проверьте все данные (имя, тип визы, срок, количество въездов).'
      }
,      tip: {
        zh: '拿到居留许可后第一时间核对所有信息，如有错误立即提出更正。',
        en: 'Check all information immediately after receiving. Request corrections right away if anything is wrong.',
        ru: 'Сразу после получения проверьте все данные. При ошибках немедленно запросите исправление.'
      }
    }
  ],
  faq: [
    { q: { zh: '居留许可快到期了怎么办？', en: 'What if residence permit is expiring?', ru: 'ВНЖ скоро истекает?' }, a: { zh: '在到期前30天到学校国际学生办公室申请续签。需要准备在读证明、成绩单等材料。详见签证延期指南。', en: 'Apply for renewal at the international student office 30 days before expiry. Need enrollment certificate, transcript, etc.', ru: 'За 30 дней до окончания подайте на продление в международный офис.' } },
  ],
  nextGuides: ['visa-extension', 'visa-renewal', 'police-registration']
};