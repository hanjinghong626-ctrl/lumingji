// Guide: 急诊与急救
export default {
  id: 'emergency-room',
  category: 'medical',
  icon: '🚑',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 15,
  apps: [],
  prerequisites: ['hospital-guide'],
  tags: ['emergency', 'ambulance', 'urgent'],
  title: {
    zh: '急诊与急救',
    en: 'Emergency Room & First Aid',
    ru: 'Экстренная помощь и первая помощь'
  },
  summary: {
    zh: '急救电话、急诊就诊流程、常见紧急情况处理',
    en: 'Emergency numbers, ER process, handling common emergencies',
    ru: 'Телефоны экстренных служб, процесс в приёмном покое, действия при ЧС'
  },
  intro: {
    zh: '遇到突发疾病或意外伤害时，知道如何快速获得急救服务非常重要。中国的急救体系包括120急救电话和医院急诊科。',
    en: 'Knowing how to quickly access emergency services is vital when facing sudden illness or injury. China\'s emergency system includes the 120 ambulance hotline and hospital emergency departments.',
    ru: 'Знание, как быстро получить экстренную помощь, критически важно. Система экстренной помощи Китая включает номер 120 и приёмные отделения больниц.'
  },
  preparation: {
    zh: [
      '记住急救电话120',
      '保存学校国际处紧急联系电话',
      '了解最近的三甲医院急诊位置'
    ],
    en: [
      'Memorize emergency number 120',
      'Save international office emergency contact',
      'Know the nearest Grade 3A hospital ER location'
    ],
    ru: [
      'Запомните номер 120',
      'Сохраните контакт международного отдела',
      'Знайте расположение ближайшей больницы 3А'
    ]
  },
    steps: [
    {
      title: { zh: '🚨 急救电话', en: 'Emergency numbers', ru: 'Экстренные номера' },
      desc: {
        zh: '🚨 急救电话\n• 120：急救 ambulance（叫救护车）\n• 110：警察 police\n• 119：消防 fire department',
        en: '🚨 Emergency numbers\n• 120: Ambulance\n• 110: Police\n• 119: Fire department',
        ru: '🚨 Экстренные номера\n• 120: Скорая помощь\n• 110: Полиция\n• 119: Пожарная'
      }
    },
    {
      title: { zh: '拨打120时', en: 'When calling 120', ru: 'При звонке 120' },
      desc: {
        zh: '📞 拨打120时：\n• 说明你的地址（越具体越好）\n• 描述伤者情况和症状\n• 保持电话畅通，按调度员指导操作\n• 如果可以，派人到路口接应救护车',
        en: '📞 When calling 120:\n• State your address (as specific as possible)\n• Describe the patient\'s condition and symptoms\n• Keep phone line open, follow dispatcher instructions\n• If possible, send someone to the main road to guide the ambulance',
        ru: '📞 При звонке 120:\n• Укажите точный адрес\n• Опишите состояние\n• Держите телефон на линии'
      }
    },
    {
      title: { zh: '直接去急诊', en: 'Going to ER directly', ru: 'Приемное отделение — 24 часа, без записи' },
      desc: {
        zh: '🏥 直接去急诊\n• 任何医院的急诊科都24小时开放\n• 不需要预约，直接去\n• 急诊优先级：危重 > 紧急 > 一般\n• 非危重情况可能需要等待',
        en: '🏥 Going to ER directly\n• Any hospital\'s ER is open 24 hours\n• No appointment needed\n• ER priority: critical > urgent > general\n• Non-critical cases may need to wait',
        ru: '🏥 Приемное отделение — 24 часа, без записи'
      }
    },
    {
      title: { zh: '重要', en: 'Important', ru: 'Сохраните в телефоне' },
      desc: {
        zh: '💡 重要：\n• 外国人可以直接去急诊，不需要转诊\n• 带上护照和保险卡\n• 如果不会中文，把关键信息提前写在手机备忘录里：\n  "我是外国人，我需要急救。我的保险信息是..."',
        en: '💡 Important:\n• Foreigners can go to ER directly, no referral needed\n• Bring passport and insurance card\n• If you don\'t speak Chinese, save key info in your phone notes:\n  "我是外国人，我需要急救。我的保险信息是..."',
        ru: '💡 Сохраните в телефоне:\n"我是外国人，我需要急救"'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '叫救护车要多少钱？',
        en: 'How much does an ambulance cost?',
        ru: 'Сколько стоит скорая помощь?'
      },
      a: {
        zh: '120急救车基础费用约100-300元（含出车费），根据距离和救治情况可能更高。急诊就诊费另计。这些费用部分可以通过保险报销。',
        en: 'Basic ambulance (120) fee is about ¥100-300 (dispatch fee), may be higher depending on distance and treatment. ER visit fees are separate. These costs are partially covered by insurance.',
        ru: 'Базовая стоимость скорой 100-300 ¥, зависит от расстояния. Частично покрывается страховкой.'
      }
    }
  ],
  nextGuides: ['pharmacy-guide', 'hospital-guide']
};
