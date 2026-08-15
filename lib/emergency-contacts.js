/**
 * 鹿鸣集 · 紧急求助助手
 * 各国紧急电话 + 中国大使馆联系方式 + 应急指南
 * 
 * 功能：
 * - 按国家/城市搜索紧急联系方式
 * - 提供多语言应急短语
 * - 紧急情况处理指南
 */

const emergencyData = {
  // ===== 中国 =====
  china: {
    country: { zh: '中国', en: 'China', ru: 'Китай' },
    countryCode: 'CN',
    flag: '🇨🇳',
    emergency: {
      police: { number: '110', label: { zh: '报警', en: 'Police', ru: 'Полиция' } },
      fire: { number: '119', label: { zh: '火警', en: 'Fire', ru: 'Пожарная' } },
      ambulance: { number: '120', label: { zh: '急救', en: 'Ambulance', ru: 'Скорая' } },
      traffic: { number: '122', label: { zh: '交通事故', en: 'Traffic Accident', ru: 'ДТП' } },
    },
    foreignAffairs: {
      phone: '12308',
      label: { zh: '外交部全球领事保护热线', en: 'MFA Global Consular Hotline', ru: 'Горячая линия МИД' },
    },
    usefulNumbers: [
      { number: '12345', label: { zh: '市民服务热线', en: 'Citizen Service', ru: 'Горячая линия города' } },
      { number: '12315', label: { zh: '消费者投诉', en: 'Consumer Complaints', ru: 'Жалобы потребителей' } },
      { number: '12320', label: { zh: '卫生热线', en: 'Health Hotline', ru: 'Медицинская линия' } },
    ],
    emergencyPhrases: {
      zh: ['救命！', '请叫救护车！', '我需要帮助！', '我的护照丢了', '请帮我报警'],
      en: ['Help!', 'Please call an ambulance!', 'I need help!', 'I lost my passport', 'Please call the police'],
      ru: ['Помогите!', 'Вызовите скорую!', 'Мне нужна помощь!', 'Я потерял паспорт', 'Вызовите полицию'],
    },
  },

  // ===== 俄罗斯 =====
  russia: {
    country: { zh: '俄罗斯', en: 'Russia', ru: 'Россия' },
    countryCode: 'RU',
    flag: '🇷🇺',
    emergency: {
      police: { number: '102', label: { zh: '警察', en: 'Police', ru: 'Полиция' } },
      fire: { number: '101', label: { zh: '火警', en: 'Fire', ru: 'Пожарная' } },
      ambulance: { number: '103', label: { zh: '急救', en: 'Ambulance', ru: 'Скорая' } },
      gas: { number: '104', label: { zh: '燃气紧急', en: 'Gas Emergency', ru: 'Аварийная газовая' } },
      universal: { number: '112', label: { zh: '通用紧急', en: 'Universal Emergency', ru: 'Единый номер' } },
    },
    embassy: {
      name: { zh: '中国驻俄罗斯大使馆', en: 'Chinese Embassy in Russia', ru: 'Посольство КНР в России' },
      consularPhone: '+7-499-951-8661',
      emergencyPhone: '+7-916-999-5157',
      address: { zh: '莫斯科友谊大街6号', en: '6 Druzhby St, Moscow', ru: 'ул. Дружбы, 6, Москва' },
      website: 'ru.china-embassy.gov.cn',
      workingHours: { zh: '工作日 15:00-18:00（领事业务）', en: 'Weekdays 15:00-18:00', ru: 'Пн-Пт 15:00-18:00' },
    },
    usefulNumbers: [
      { number: '8-800-2000-122', label: { zh: '儿童求助热线', en: 'Child Helpline', ru: 'Детская линия помощи' } },
    ],
    emergencyPhrases: {
      zh: ['救命！', '请叫救护车！', '我需要帮助！', '我的护照丢了', '请帮我报警'],
      ru: ['Помогите!', 'Вызовите скорую!', 'Мне нужна помощь!', 'Я потерял паспорт', 'Вызовите полицию'],
      en: ['Help!', 'Call an ambulance!', 'I need help!', 'I lost my passport', 'Please call the police'],
    },
  },

  // ===== 美国 =====
  usa: {
    country: { zh: '美国', en: 'USA', ru: 'США' },
    countryCode: 'US',
    flag: '🇺🇸',
    emergency: {
      universal: { number: '911', label: { zh: '通用紧急（警察/消防/急救）', en: 'Universal (Police/Fire/Medical)', ru: 'Единый (Полиция/Пожарная/Скорая)' } },
    },
    embassy: {
      name: { zh: '中国驻美国大使馆', en: 'Chinese Embassy in USA', ru: 'Посольство КНР в США' },
      consularPhone: '+1-202-855-1561',
      emergencyPhone: '+1-202-421-1115',
      address: { zh: '华盛顿特区国际广场2200号', en: '2200 International Pl NW, Washington DC', ru: '' },
      website: 'us.china-embassy.gov.cn',
    },
    emergencyPhrases: {
      zh: ['救命！', '请叫救护车！', '我需要帮助！'],
      en: ['Help!', 'Call 911!', 'I need help!', 'I lost my passport'],
    },
  },

  // ===== 日本 =====
  japan: {
    country: { zh: '日本', en: 'Japan', ru: 'Япония' },
    countryCode: 'JP',
    flag: '🇯🇵',
    emergency: {
      police: { number: '110', label: { zh: '警察', en: 'Police', ru: 'Полиция' } },
      fire: { number: '119', label: { zh: '消防/急救', en: 'Fire/Ambulance', ru: 'Пожарная/Скорая' } },
    },
    embassy: {
      name: { zh: '中国驻日本大使馆', en: 'Chinese Embassy in Japan', ru: 'Посольство КНР в Японии' },
      consularPhone: '+81-3-3403-3388',
      emergencyPhone: '+81-90-8899-1688',
      address: { zh: '东京都港区元麻布3-4-33', en: '3-4-33 Moto-Azabu, Minato-ku, Tokyo', ru: '' },
      website: 'jp.china-embassy.gov.cn',
    },
    emergencyPhrases: {
      zh: ['救命！', '请叫救护车！'],
      ja: ['助けて！', '救急車を呼んでください！'],
      en: ['Help!', 'Call an ambulance!'],
    },
  },

  // ===== 韩国 =====
  korea: {
    country: { zh: '韩国', en: 'South Korea', ru: 'Южная Корея' },
    countryCode: 'KR',
    flag: '🇰🇷',
    emergency: {
      police: { number: '112', label: { zh: '警察', en: 'Police', ru: 'Полиция' } },
      fire: { number: '119', label: { zh: '消防/急救', en: 'Fire/Ambulance', ru: 'Пожарная/Скорая' } },
    },
    embassy: {
      name: { zh: '中国驻韩国大使馆', en: 'Chinese Embassy in South Korea', ru: 'Посольство КНР в Южной Корее' },
      consularPhone: '+82-2-738-1037',
      emergencyPhone: '+82-10-2960-8112',
      address: { zh: '首尔钟路区孝子洞54', en: '54 Hyoja-dong, Jongno-gu, Seoul', ru: '' },
      website: 'kr.china-embassy.gov.cn',
    },
  },

  // ===== 英国 =====
  uk: {
    country: { zh: '英国', en: 'UK', ru: 'Великобритания' },
    countryCode: 'GB',
    flag: '🇬🇧',
    emergency: {
      universal: { number: '999', label: { zh: '通用紧急', en: 'Universal Emergency', ru: 'Единый номер' } },
      nonEmergency: { number: '101', label: { zh: '非紧急报警', en: 'Non-emergency Police', ru: 'Неэкстренная полиция' } },
    },
    embassy: {
      name: { zh: '中国驻英国大使馆', en: 'Chinese Embassy in UK', ru: 'Посольство КНР в Великобритании' },
      consularPhone: '+44-20-7299-4020',
      emergencyPhone: '+44-7578686881',
      address: { zh: '伦敦波特兰广场49号', en: '49 Portland Place, London', ru: '' },
      website: 'uk.china-embassy.gov.cn',
    },
  },

  // ===== 德国 =====
  germany: {
    country: { zh: '德国', en: 'Germany', ru: 'Германия' },
    countryCode: 'DE',
    flag: '🇩🇪',
    emergency: {
      universal: { number: '112', label: { zh: '通用紧急（欧洲通用）', en: 'Universal Emergency (EU)', ru: 'Единый номер (ЕС)' } },
      police: { number: '110', label: { zh: '警察', en: 'Police', ru: 'Полиция' } },
    },
    embassy: {
      name: { zh: '中国驻德国大使馆', en: 'Chinese Embassy in Germany', ru: 'Посольство КНР в Германии' },
      consularPhone: '+49-30-275890',
      emergencyPhone: '+49-173-6137581',
      address: { zh: '柏林 Märkisches Ufer 54', en: 'Märkisches Ufer 54, Berlin', ru: '' },
      website: 'de.china-embassy.gov.cn',
    },
  },

  // ===== 法国 =====
  france: {
    country: { zh: '法国', en: 'France', ru: 'Франция' },
    countryCode: 'FR',
    flag: '🇫🇷',
    emergency: {
      police: { number: '17', label: { zh: '警察', en: 'Police', ru: 'Полиция' } },
      fire: { number: '18', label: { zh: '消防', en: 'Fire', ru: 'Пожарная' } },
      ambulance: { number: '15', label: { zh: '急救(SAMU)', en: 'Ambulance (SAMU)', ru: 'Скорая (SAMU)' } },
      universal: { number: '112', label: { zh: '欧洲通用紧急', en: 'EU Universal', ru: 'Единый номер ЕС' } },
    },
    embassy: {
      name: { zh: '中国驻法国大使馆', en: 'Chinese Embassy in France', ru: 'Посольство КНР во Франции' },
      consularPhone: '+33-1-48888888',
      emergencyPhone: '+33-618895395',
      address: { zh: '巴黎11区华盛顿街20号', en: '20 rue de Washington, 75008 Paris', ru: '' },
      website: 'fr.china-embassy.gov.cn',
    },
  },

  // ===== 意大利 =====
  italy: {
    country: { zh: '意大利', en: 'Italy', ru: 'Италия' },
    countryCode: 'IT',
    flag: '🇮🇹',
    emergency: {
      universal: { number: '112', label: { zh: '通用紧急（欧洲通用）', en: 'Universal Emergency (EU)', ru: 'Единый номер (ЕС)' } },
      police: { number: '113', label: { zh: '警察', en: 'Police', ru: 'Полиция' } },
      fire: { number: '115', label: { zh: '消防', en: 'Fire', ru: 'Пожарная' } },
    },
    embassy: {
      name: { zh: '中国驻意大利大使馆', en: 'Chinese Embassy in Italy', ru: 'Посольство КНР в Италии' },
      consularPhone: '+39-06-8413458',
      emergencyPhone: '+39-3272866649',
      address: { zh: '罗马布鲁塞尔街56号', en: 'Via Bruxelles 56, Roma', ru: '' },
      website: 'it.china-embassy.gov.cn',
    },
  },
};

// 通用紧急电话（全球通用）
const UNIVERSAL_EMERGENCY = {
  eu: { number: '112', label: { zh: '欧盟通用紧急号码', en: 'EU Universal Emergency', ru: 'Единый номер ЕС' } },
  chinaForeign: { number: '12308', label: { zh: '外交部全球领事保护热线（+86-10-12308）', en: 'MFA Global Consular Protection', ru: 'Горячая линия МИД КНР' } },
};

/**
 * 搜索紧急联系方式
 */
export function searchEmergencyContacts(query, lang = 'zh') {
  const q = (query || '').toLowerCase();
  const results = [];

  // 国家关键词映射
  const countryKeywords = {
    china: ['中国', 'china', 'китай', '国内'],
    russia: ['俄罗斯', 'russia', 'россия', '俄国', '莫斯科', 'moscow'],
    usa: ['美国', 'usa', 'америка', 'сша', '美利坚'],
    japan: ['日本', 'japan', 'япония', '东京', 'tokyo'],
    korea: ['韩国', 'korea', 'корея', '首尔', 'seoul'],
    uk: ['英国', 'uk', 'britain', 'британия', '伦敦', 'london'],
    germany: ['德国', 'germany', 'deutschland', 'германия', '柏林', 'berlin'],
    france: ['法国', 'france', 'francia', 'франция', '巴黎', 'paris'],
    italy: ['意大利', 'italy', 'italia', 'италия', '罗马', 'rome'],
  };

  for (const [countryKey, keywords] of Object.entries(countryKeywords)) {
    if (keywords.some(k => q.includes(k))) {
      const country = emergencyData[countryKey];
      if (country) results.push({ type: 'country', key: countryKey, data: country });
    }
  }

  // 大使馆相关
  if (/使馆|embassy|посольств|consulate|领事/i.test(q)) {
    const embassyResults = Object.entries(emergencyData)
      .filter(([_, data]) => data.embassy)
      .map(([key, data]) => ({ type: 'embassy', key, data }));
    if (results.length === 0) results.push(...embassyResults);
  }

  // 默认返回中国（因为是在中国生活的留学生平台）
  if (results.length === 0) {
    results.push({ type: 'country', key: 'china', data: emergencyData.china });
  }

  return results;
}

/**
 * 格式化紧急联系方式为AI可读文本
 */
export function formatEmergencyContext(results, lang = 'zh') {
  if (!results || results.length === 0) return '';

  const parts = ['🚨 紧急联系方式：'];

  for (const result of results) {
    if (result.type === 'country') {
      const c = result.data;
      parts.push(`\n${c.flag} ${c.country[lang] || c.country.zh}`);
      parts.push('--- 紧急电话 ---');
      for (const [type, info] of Object.entries(c.emergency)) {
        parts.push(`  📞 ${info.label[lang] || info.label.zh}：${info.number}`);
      }
      if (c.foreignAffairs) {
        parts.push(`  📞 ${c.foreignAffairs.label[lang] || c.foreignAffairs.label.zh}：${c.foreignAffairs.phone}`);
      }
      if (c.usefulNumbers?.length) {
        parts.push('--- 实用热线 ---');
        for (const item of c.usefulNumbers) {
          parts.push(`  📞 ${item.label[lang] || item.label.zh}：${item.number}`);
        }
      }
      if (c.embassy) {
        parts.push('--- 中国大使馆 ---');
        parts.push(`  🏛️ ${c.embassy.name[lang] || c.embassy.name.zh}`);
        if (c.embassy.consularPhone) parts.push(`  📞 领事电话：${c.embassy.consularPhone}`);
        if (c.embassy.emergencyPhone) parts.push(`  🆘 紧急电话：${c.embassy.emergencyPhone}`);
        if (c.embassy.address) parts.push(`  📍 地址：${c.embassy.address[lang] || c.embassy.address.zh}`);
        if (c.embassy.workingHours) parts.push(`  ⏰ 工作时间：${c.embassy.workingHours[lang] || c.embassy.workingHours.zh}`);
      }
      if (c.emergencyPhrases) {
        parts.push('--- 应急短语 ---');
        const phrases = c.emergencyPhrases[lang] || c.emergencyPhrases.zh || [];
        if (phrases.length > 0) {
          parts.push(`  ${phrases.join(' | ')}`);
        }
      }
    }
  }

  // 通用信息
  parts.push('\n--- 全球通用 ---');
  parts.push(`  📞 ${UNIVERSAL_EMERGENCY.eu.label[lang] || UNIVERSAL_EMERGENCY.eu.label.zh}：${UNIVERSAL_EMERGENCY.eu.number}`);
  parts.push(`  📞 ${UNIVERSAL_EMERGENCY.chinaForeign.label[lang] || UNIVERSAL_EMERGENCY.chinaForeign.label.zh}：${UNIVERSAL_EMERGENCY.chinaForeign.number}`);

  return parts.join('\n');
}

/**
 * 生成完整的紧急指南文本
 */
export function generateEmergencyGuide(lang = 'zh') {
  const guide = {
    zh: `🚨 紧急求助指南

📞 中国紧急电话
• 报警：110
• 火警：119
• 急救：120
• 交通事故：122

🌍 海外求助
• 欧盟通用紧急号码：112
• 外交部全球领事保护热线：+86-10-12308

📝 紧急情况处理
1. 保持冷静，拨打对应紧急电话
2. 说明所在位置、事件性质、受伤情况
3. 如护照丢失，24小时内到派出所报案，保留报案单
4. 联系所在国中国大使馆领事处
5. 通知学校国际学生办公室

💡 重要提醒
• 存好大使馆紧急联系电话
• 护照复印件和电子版与原件分开保管
• 记住住宿地址（中文+拼音）
• 下载"外交部12308"App`,
    en: `🚨 Emergency Guide

📞 Emergency Numbers (China)
• Police: 110
• Fire: 119
• Ambulance: 120
• Traffic: 122

🌍 International Help
• EU Emergency: 112
• MFA Hotline: +86-10-12308

📝 Emergency Steps
1. Stay calm, call the emergency number
2. Report location, incident, injuries
3. If passport lost, file police report within 24 hours
4. Contact Chinese Embassy consular section
5. Notify your university's international office

💡 Tips
• Save embassy emergency contacts
• Keep passport copies separate from original
• Remember your address in Chinese
• Download "MFA 12308" app`,
    ru: `🚨 Экстренное руководство

📞 Экстренные номера (Китай)
• Полиция: 110
• Пожарная: 119
• Скорая: 120
• ДТП: 122

🌍 Международная помощь
• Единый номер ЕС: 112
• Горячая линия МИД: +86-10-12308

📝 При ЧС
1. Сохраняйте спокойствие
2. Сообщите место, ситуацию, травмы
3. При потере паспорта — заявление в полицию за 24 часа
4. Свяжитесь с консульством Посольства КНР
5. Уведомите международный офис университета`,
  };

  return guide[lang] || guide.zh;
}

export default {
  emergencyData,
  searchEmergencyContacts,
  formatEmergencyContext,
  generateEmergencyGuide,
  UNIVERSAL_EMERGENCY,
};
