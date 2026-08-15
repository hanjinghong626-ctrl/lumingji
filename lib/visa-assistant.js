/**
 * 鹿鸣集 · 签证/行政手续助手
 * 签证类型、居留许可、材料清单、办理流程
 * 
 * 功能：
 * - 签证类型详解（X1/X2/Z/F/M等）
 * - 居留许可办理/续签指南
 * - 材料清单生成
 * - 流程步骤指导
 * - 常见问题解答
 */

// DeepSeek API Key
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || 'sk-51b6e3db1c85457daef0f57a4c94cb65';

const visaInfo = {
  // ===== 签证类型 =====
  visaTypes: {
    'x1': {
      name: { zh: 'X1签证（长期学习）', en: 'X1 Visa (Long-term Study)', ru: 'Виза X1 (Долгосрочное обучение)' },
      icon: '🎓',
      duration: { zh: '入境后30天内须办理居留许可', en: 'Must apply for residence permit within 30 days', ru: 'Вид на жительство в течение 30 дней' },
      eligible: { zh: '来华长期学习（>180天）的学生', en: 'Students studying in China for >180 days', ru: 'Студенты, обучающиеся в Китае более 180 дней' },
      documents: [
        { item: { zh: '有效护照', en: 'Valid passport', ru: 'Действующий загранпаспорт' }, note: { zh: '有效期6个月以上', en: 'Valid for 6+ months', ru: 'Срок действия 6+ месяцев' } },
        { item: { zh: 'JW201/JW202表', en: 'JW201/JW202 Form', ru: 'Форма JW201/JW202' }, note: { zh: '学校签发的外国留学人员签证申请表', en: 'Issued by university', ru: 'Выдаётся университетом' } },
        { item: { zh: '录取通知书', en: 'Admission Notice', ru: 'Письмо о зачислении' }, note: { zh: '原件', en: 'Original', ru: 'Оригинал' } },
        { item: { zh: '体检报告', en: 'Health Check Report', ru: 'Мед. справка' }, note: { zh: '外国人体格检查表（指定医院）', en: 'Physical examination form (designated hospital)', ru: 'Форма мед. осмотра (в указанной больнице)' } },
        { item: { zh: '签证申请表', en: 'Visa Application Form', ru: 'Визовая анкета' }, note: { zh: '在线填写并打印', en: 'Fill online and print', ru: 'Заполнить онлайн и распечатать' } },
        { item: { zh: '证件照', en: 'ID Photo', ru: 'Фото' }, note: { zh: '2寸白底，48×33mm', en: '2-inch, white background, 48×33mm', ru: '48×33мм, белый фон' } },
      ],
      process: [
        { zh: '收到学校录取通知书和JW201/202表', en: 'Receive admission notice and JW201/202 form', ru: 'Получить письмо о зачислении и форму JW201/202' },
        { zh: '准备签证材料', en: 'Prepare visa documents', ru: 'Подготовить документы' },
        { zh: '前往中国驻外使领馆递交申请', en: 'Submit application at Chinese embassy/consulate', ru: 'Подать заявление в посольство/консульство КНР' },
        { zh: '缴纳签证费（因国家而异）', en: 'Pay visa fee (varies by country)', ru: 'Оплатить визовый сбор' },
        { zh: '等待审批（一般4-7个工作日）', en: 'Wait for approval (4-7 business days)', ru: 'Ожидание (4-7 рабочих дней)' },
        { zh: '取得签证后入境中国', en: 'Enter China with visa', ru: 'Въехать в Китай по визе' },
        { zh: '⚠️ 入境30天内办理居留许可', en: '⚠️ Apply for residence permit within 30 days', ru: '⚠️ Подать на ВНЖ в течение 30 дней' },
      ],
      tips: [
        { zh: 'X1签证本身只是入境签证，真正合法居留需要办理居留许可', en: 'X1 is only an entry visa; you need a residence permit for legal stay', ru: 'X1 — только для въезда, нужен ВНЖ для легального пребывания' },
        { zh: '入境后尽快办理住宿登记（24小时内）', en: 'Register accommodation within 24 hours of entry', ru: 'Зарегистрировать проживание в течение 24 часов' },
        { zh: '体检需要在指定医院做，出国前在国内做好可以省钱', en: 'Health check at designated hospital; doing it before departure saves money', ru: 'Медосмотр в указанной больнице; можно сделать заранее' },
      ],
    },

    'x2': {
      name: { zh: 'X2签证（短期学习）', en: 'X2 Visa (Short-term Study)', ru: 'Виза X2 (Краткосрочное обучение)' },
      icon: '📚',
      duration: { zh: '停留期一般不超过180天', en: 'Stay up to 180 days', ru: 'Пребывание до 180 дней' },
      eligible: { zh: '来华短期学习（≤180天）的学生', en: 'Students studying in China for ≤180 days', ru: 'Студенты до 180 дней' },
      documents: [
        { item: { zh: '有效护照', en: 'Valid passport', ru: 'Действующий загранпаспорт' }, note: { zh: '有效期6个月以上', en: 'Valid 6+ months', ru: '6+ месяцев' } },
        { item: { zh: 'JW201/JW202表', en: 'JW201/JW202 Form', ru: 'Форма JW201/JW202' }, note: '' },
        { item: { zh: '录取通知书', en: 'Admission Notice', ru: 'Письмо о зачислении' }, note: '' },
        { item: { zh: '证件照', en: 'ID Photo', ru: 'Фото' }, note: { zh: '2寸白底', en: '2-inch white background', ru: 'Белый фон' } },
      ],
      process: [
        { zh: '准备材料（同X1但无需体检）', en: 'Prepare documents (same as X1 but no health check needed)', ru: 'Подготовить документы (без мед. осмотра)' },
        { zh: '向使领馆递交申请', en: 'Submit to embassy/consulate', ru: 'Подать в посольство/консульство' },
        { zh: '获批后入境', en: 'Enter China after approval', ru: 'Въехать после одобрения' },
        { zh: '在签证停留期内离境即可', en: 'Leave before visa expiry', ru: 'Выехать до истечения визы' },
      ],
      tips: [
        { zh: 'X2不需要办理居留许可', en: 'X2 does not require a residence permit', ru: 'Для X2 не нужен ВНЖ' },
        { zh: '如果需要延期，联系学校国际学生办公室', en: 'Contact international office for extension', ru: 'Для продления — обратитесь в международный офис' },
      ],
    },

    'z': {
      name: { zh: 'Z签证（工作）', en: 'Z Visa (Work)', ru: 'Виза Z (Работа)' },
      icon: '💼',
      duration: { zh: '入境后30天内办理工作类居留许可', en: 'Apply for work residence permit within 30 days', ru: 'ВНЖ для работы в течение 30 дней' },
      eligible: { zh: '来华工作的人员', en: 'Foreign workers in China', ru: 'Иностранные работники' },
      documents: [
        { item: { zh: '有效护照', en: 'Valid passport', ru: 'Действующий паспорт' }, note: '' },
        { item: { zh: '外国人工作许可通知', en: 'Foreign Work Permit Notification', ru: 'Уведомление о разрешении на работу' }, note: { zh: '由雇主申请办理', en: 'Applied by employer', ru: 'Оформляет работодатель' } },
        { item: { zh: '聘用合同', en: 'Employment Contract', ru: 'Трудовой договор' }, note: '' },
        { item: { zh: '体检报告', en: 'Health Check', ru: 'Мед. справка' }, note: '' },
        { item: { zh: '无犯罪记录证明', en: 'No Criminal Record Certificate', ru: 'Справка о несудимости' }, note: { zh: '需公证认证', en: 'Needs notarization', ru: 'Нужна нотариальная заверка' } },
        { item: { zh: '学历证书', en: 'Degree Certificate', ru: 'Диплом' }, note: { zh: '需认证', en: 'Needs certification', ru: 'Нужна легализация' } },
      ],
      tips: [
        { zh: '工作需要工作许可，不能持X签证工作', en: 'Work requires work permit; cannot work on X visa', ru: 'Для работы нужно разрешение, нельзя работать по визе X' },
        { zh: '留学生实习需要学校同意', en: 'Internship requires university approval', ru: 'Стажировка требует одобрения университета' },
      ],
    },

    'f': {
      name: { zh: 'F签证（访问/交流）', en: 'F Visa (Visit/Exchange)', ru: 'Виза F (Визит/Обмен)' },
      icon: '🤝',
      duration: { zh: '停留期由邀请方决定', en: 'Duration determined by inviter', ru: 'Срок определяется приглашающей стороной' },
      eligible: { zh: '来华从事交流、考察、访问等活动', en: 'Exchange, investigation, visit activities', ru: 'Обмен, посещение, инспекция' },
      documents: [
        { item: { zh: '有效护照', en: 'Valid passport', ru: 'Действующий паспорт' }, note: '' },
        { item: { zh: '中方邀请函', en: 'Invitation Letter from China', ru: 'Пригласительное письмо' }, note: { zh: '需由中方单位出具', en: 'Issued by Chinese organization', ru: 'От китайской организации' } },
      ],
      tips: [
        { zh: 'F签证一般不可转为工作签证', en: 'F visa generally cannot be converted to work visa', ru: 'Виза F обычно не конвертируется в рабочую' },
      ],
    },

    'm': {
      name: { zh: 'M签证（商务贸易）', en: 'M Visa (Business/Trade)', ru: 'Виза M (Бизнес/Торговля)' },
      icon: '💰',
      duration: { zh: '停留期一般30-90天', en: 'Stay 30-90 days typically', ru: 'Пребывание обычно 30-90 дней' },
      eligible: { zh: '来华从事商业贸易活动', en: 'Commercial and trade activities', ru: 'Коммерческая и торговая деятельность' },
      documents: [
        { item: { zh: '有效护照', en: 'Valid passport', ru: 'Действующий паспорт' }, note: '' },
        { item: { zh: '贸易伙伴邀请函', en: 'Invitation from trade partner', ru: 'Приглашение от торгового партнёра' }, note: '' },
      ],
    },
  },

  // ===== 居留许可 =====
  residencePermit: {
    name: { zh: '外国人居留许可', en: 'Foreigner Residence Permit', ru: 'Вид на жительство иностранца' },
    validity: { zh: '通常6个月至5年', en: 'Usually 6 months to 5 years', ru: 'Обычно от 6 месяцев до 5 лет' },
    renewNotice: { zh: '到期前30天申请续签', en: 'Apply for renewal 30 days before expiry', ru: 'Подать на продление за 30 дней до истечения' },
    
    documents: [
      { item: { zh: '有效护照及签证', en: 'Valid passport and visa', ru: 'Действующий паспорт и виза' }, note: { zh: '原件+复印件', en: 'Original + copy', ru: 'Оригинал + копия' } },
      { item: { zh: '住宿登记表', en: 'Accommodation Registration Form', ru: 'Форма регистрации проживания' }, note: { zh: '派出所开具', en: 'From local police station', ru: 'Из полицейского участка' } },
      { item: { zh: '外国人体格检查记录', en: 'Health Examination Record', ru: 'Запись о мед. осмотре' }, note: { zh: '出入境检验检疫局', en: 'Entry-Exit Inspection Bureau', ru: 'Бюро контроля въезда-выезда' } },
      { item: { zh: 'JW201/JW202表（学生）', en: 'JW201/JW202 Form (students)', ru: 'Форма JW201/JW202 (студенты)' }, note: '' },
      { item: { zh: '学校在读证明', en: 'School Enrollment Certificate', ru: 'Справка об обучении' }, note: { zh: '学校开具', en: 'Issued by university', ru: 'Выдаётся университетом' } },
      { item: { zh: '证件照', en: 'ID Photo', ru: 'Фото' }, note: { zh: '2寸白底，近期免冠', en: '2-inch, white background, recent', ru: '48×33мм, белый фон, недавнее' } },
      { item: { zh: '签证申请表', en: 'Visa Application Form', ru: 'Визовая анкета' }, note: { zh: '现场填写或网上下载', en: 'Fill on-site or download online', ru: 'Заполнить на месте или скачать' } },
    ],
    
    process: [
      { zh: '到指定医院做体检', en: 'Health check at designated hospital', ru: 'Медосмотр в указанной больнице' },
      { zh: '到派出所办理住宿登记', en: 'Register accommodation at local police station', ru: 'Зарегистрировать проживание в полицейском участке' },
      { zh: '学校出具在读证明', en: 'Get enrollment certificate from university', ru: 'Получить справку об обучении' },
      { zh: '准备所有材料', en: 'Prepare all documents', ru: 'Подготовить все документы' },
      { zh: '到当地出入境管理局递交申请（部分城市需网上预约）', en: 'Submit at local Exit-Entry Administration (some cities need online appointment)', ru: 'Подать в бюро въезда-выезда (в некоторых городах — онлайн-запись)' },
      { zh: '缴费（400-800元/年）', en: 'Pay fee (400-800 CNY/year)', ru: 'Оплатить сбор (400-800 юаней/год)' },
      { zh: '等待审批（约7-15个工作日）', en: 'Wait for approval (7-15 business days)', ru: 'Ожидание (7-15 рабочих дней)' },
      { zh: '领取居留许可', en: 'Collect residence permit', ru: 'Получить ВНЖ' },
    ],

    renewal: {
      timing: { zh: '到期前30天内申请', en: 'Apply within 30 days before expiry', ru: 'Подать за 30 дней до истечения' },
      overstayPenalty: { zh: '逾期每天罚款500元，最高10000元', en: 'Overstay fine: 500 CNY/day, max 10,000 CNY', ru: 'Штраф за просрочку: 500 юаней/день, макс. 10000' },
      requiredDocs: { zh: '同首次申请材料 + 旧居留许可', en: 'Same as first application + old permit', ru: 'Как при первом оформлении + старый ВНЖ' },
    },
    
    changeOrReplace: [
      { zh: '换学校/换专业：需要重新办理居留许可', en: 'Change school/major: need new residence permit', ru: 'Смена вуза/специальности: нужен новый ВНЖ' },
      { zh: '护照丢失：10天内到出入境管理局补办', en: 'Passport lost: report within 10 days', ru: 'Потеря паспорта: сообщить в течение 10 дней' },
      { zh: '离开中国再入境：通常需要办理再入境许可', en: 'Re-entry after leaving: may need re-entry permit', ru: 'Повторный въезд: может потребоваться разрешение' },
    ],
  },

  // ===== 常见问题 =====
  faqs: [
    {
      q: { zh: '签证过期了怎么办？', en: 'What if my visa expires?', ru: 'Что делать если виза истекла?' },
      a: { 
        zh: '① 立即联系学校国际学生办公室\n② 到出入境管理局说明情况\n③ 逾期罚款500元/天（最高10000元）\n④ 严重逾期可能被遣返并禁止入境',
        en: '① Contact international student office immediately\n② Go to Exit-Entry Administration\n③ Overstay fine: 500 CNY/day (max 10,000)\n④ Serious overstay may result in deportation',
        ru: '① Свяжитесь с международным офисом\n② Обратитесь в бюро въезда-выезда\n③ Штраф: 500 юаней/день (макс. 10000)\n④ Депортация при серьёзной просрочке',
      },
    },
    {
      q: { zh: '可以打工吗？', en: 'Can I work part-time?', ru: 'Можно ли подрабатывать?' },
      a: { 
        zh: '⚠️ 持X签证不能直接工作！\n• 校内勤工助学：需学校批准\n• 校外实习：需学校同意+出入境批准\n• 擅自工作属违法，可能被遣返\n• 建议：通过学校官方渠道申请',
        en: '⚠️ Cannot work directly on X visa!\n• On-campus work-study: requires university approval\n• Off-campus internship: needs university + exit-entry approval\n• Unauthorized work is illegal, may result in deportation',
        ru: '⚠️ Нельзя работать по визе X!\n• Работа в кампусе: нужно одобрение вуза\n• Стажировка вне кампуса: нужно одобрение\n• Несанкционированная работа — депортация',
      },
    },
    {
      q: { zh: '住宿登记怎么办？', en: 'How to register accommodation?', ru: 'Как зарегистрировать проживание?' },
      a: { 
        zh: '📋 入境24小时内必须办理！\n• 住校内宿舍：学校统一代办\n• 住校外租房：带租房合同到辖区派出所\n• 所需材料：护照+租房合同+房东身份证复印件\n• 不办可能被警告或罚款',
        en: '📋 Must register within 24 hours of entry!\n• Dorm: university handles it\n• Off-campus: bring lease to local police station\n• Need: passport + lease + landlord ID copy\n• Penalty for not registering',
        ru: '📋 Регистрация в течение 24 часов!\n• Общежитие: вуз оформляет\n• Аренда: контракт в полицейский участок\n• Нужны: паспорт + контракт + копия ID арендодателя',
      },
    },
    {
      q: { zh: '居留许可被拒了怎么办？', en: 'What if residence permit is rejected?', ru: 'Что делать если ВНЖ отклонили?' },
      a: { 
        zh: '① 问清楚拒签原因\n② 补充缺少的材料\n③ 通过学校国际学生办公室协助\n④ 可以申诉\n⑤ 在签证有效期内尽快处理，避免非法滞留',
        en: '① Ask for rejection reason\n② Supplement missing documents\n③ Seek help from international office\n④ Can appeal\n⑤ Handle within visa validity to avoid illegal stay',
        ru: '① Узнать причину отказа\n② Дополнить документы\n③ Помощь международного офиса\n④ Можно подать апелляцию',
      },
    },
  ],
};

/**
 * 检测签证相关问题
 */
export function detectVisaQuery(message) {
  if (!message) return false;
  
  const keywords = [
    '签证', 'visa', 'виза',
    '居留', 'residence', 'вид на жительство', 'ВНЖ',
    '护照', 'passport', 'паспорт',
    '延期', '续签', 'extension', 'renewal', 'продление', 'продлить',
    '入境', 'entry', 'въезд',
    '出境', 'exit', 'выезд',
    '注册', 'registration', 'регистрация',
    '体检', 'health check', 'медосмотр',
    'JW201', 'JW202',
    'X1', 'X2', 'x1', 'x2', 'Z签证', 'F签证',
    '出入境', 'exit-entry', 'въезд-выезд',
    '遣返', 'deportation', 'депортация',
    '逾期', 'overstay', 'просрочка', 'просрочить',
  ];
  
  return keywords.some(k => message.toLowerCase().includes(k.toLowerCase()));
}

/**
 * 提取签证类型
 */
function extractVisaType(message) {
  if (!message) return null;
  const msg = message.toUpperCase();
  
  if (/X1|X-1|х1|长期.*学|long.*study/i.test(message)) return 'x1';
  if (/X2|X-2|х2|短期.*学|short.*study/i.test(message)) return 'x2';
  if (/Z签证|work.*visa|рабоч|工作.*签/i.test(message)) return 'z';
  if (/F签证|visit.*visa|访问|обмен|exchange/i.test(message)) return 'f';
  if (/M签证|business|商务|бизнес|торгов/i.test(message)) return 'm';
  
  return null;
}

/**
 * 获取签证相关信息
 */
export function getVisaInfo(query) {
  if (!query) return null;
  
  const msg = query.toLowerCase();
  
  // 检查签证类型
  const visaType = extractVisaType(query);
  if (visaType) {
    return {
      type: 'visaType',
      data: visaInfo.visaTypes[visaType],
      visaType,
    };
  }
  
  // 居留许可相关
  if (/居留|residence|ВНЖ|вид на жительство/i.test(query)) {
    return {
      type: 'residencePermit',
      data: visaInfo.residencePermit,
    };
  }
  
  // 匹配FAQ
  const matchedFaqs = visaInfo.faqs.filter(faq => {
    const q = (faq.q.zh + ' ' + faq.q.en + ' ' + faq.q.ru).toLowerCase();
    const keywords = ['怎么办', 'what if', 'что делать', '过期', 'expire', 'истек', '打工', 'work', 'работ', '住宿', 'accommodation', '住', 'reject', '拒', 'отклон'];
    return keywords.some(k => msg.includes(k) && q.includes(k));
  });
  
  if (matchedFaqs.length > 0) {
    return {
      type: 'faq',
      data: matchedFaqs,
    };
  }
  
  return null;
}

/**
 * 格式化签证信息为AI可读文本
 */
export function formatVisaContext(visaResult, lang = 'zh') {
  if (!visaResult) return '';
  
  const parts = [];
  
  if (visaResult.type === 'visaType') {
    const visa = visaResult.data;
    parts.push(`📋 ${visa.icon} ${visa.name[lang] || visa.name.zh}`);
    parts.push(`有效期/停留：${visa.duration[lang] || visa.duration.zh}`);
    if (visa.eligible) parts.push(`适用人群：${visa.eligible[lang] || visa.eligible.zh}`);
    
    if (visa.documents?.length) {
      parts.push('\n📑 所需材料：');
      for (const doc of visa.documents) {
        const item = doc.item[lang] || doc.item.zh;
        const note = doc.note ? `（${typeof doc.note === 'string' ? doc.note : (doc.note[lang] || doc.note.zh)}）` : '';
        parts.push(`  • ${item}${note}`);
      }
    }
    
    if (visa.process?.length) {
      parts.push('\n📝 办理流程：');
      for (let i = 0; i < visa.process.length; i++) {
        const step = visa.process[i][lang] || visa.process[i].zh;
        parts.push(`  ${i + 1}. ${step}`);
      }
    }
    
    if (visa.tips?.length) {
      parts.push('\n💡 重要提醒：');
      for (const tip of visa.tips) {
        const t = typeof tip === 'string' ? tip : (tip[lang] || tip.zh);
        parts.push(`  ⚠️ ${t}`);
      }
    }
  }
  
  if (visaResult.type === 'residencePermit') {
    const rp = visaResult.data;
    parts.push(`📋 ${rp.name[lang] || rp.name.zh}`);
    parts.push(`有效期：${rp.validity[lang] || rp.validity.zh}`);
    parts.push(`续签提醒：${rp.renewNotice[lang] || rp.renewNotice.zh}`);
    
    parts.push('\n📑 所需材料：');
    for (const doc of rp.documents) {
      const item = doc.item[lang] || doc.item.zh;
      const note = doc.note ? `（${typeof doc.note === 'string' ? doc.note : (doc.note[lang] || doc.note.zh)}）` : '';
      parts.push(`  • ${item}${note}`);
    }
    
    parts.push('\n📝 办理流程：');
    for (let i = 0; i < rp.process.length; i++) {
      const step = rp.process[i][lang] || rp.process[i].zh;
      parts.push(`  ${i + 1}. ${step}`);
    }
    
    parts.push('\n🔄 续签说明：');
    const rn = rp.renewal;
    parts.push(`  • 时间：${rn.timing[lang] || rn.timing.zh}`);
    parts.push(`  • 罚款：${rn.overstayPenalty[lang] || rn.overstayPenalty.zh}`);
    
    parts.push('\n📌 变更/补办：');
    for (const item of rp.changeOrReplace) {
      const text = typeof item === 'string' ? item : (item[lang] || item.zh);
      parts.push(`  • ${text}`);
    }
  }
  
  if (visaResult.type === 'faq') {
    parts.push('📋 签证/居留常见问题解答：');
    for (const faq of visaResult.data) {
      parts.push(`\nQ: ${faq.q[lang] || faq.q.zh}`);
      parts.push(`A: ${faq.a[lang] || faq.a.zh}`);
    }
  }
  
  parts.push('\n\n---\n数据来源：鹿鸣集签证知识库。重要政策变动建议咨询学校国际学生办公室或当地出入境管理局。');
  
  return parts.join('\n');
}

export default {
  visaInfo,
  detectVisaQuery,
  getVisaInfo,
  formatVisaContext,
};
