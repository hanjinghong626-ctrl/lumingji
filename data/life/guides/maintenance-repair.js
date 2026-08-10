// Guide: 报修与维修
export default {
  id: 'maintenance-repair',
  category: 'housing',
  icon: '🔧',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 30,
  apps: ['wechat'],
  prerequisites: ['dormitory-guide', 'rent-apartment'],
  tags: ['repair', 'maintenance', 'landlord'],
  title: {
    zh: '报修与维修',
    en: 'Reporting & Handling Repairs',
    ru: 'Заявки на ремонт'
  },
  summary: {
    zh: '报修流程、常见故障处理、费用承担规则与自助维修资源',
    en: 'Repair process, common issues, cost responsibility and DIY resources',
    ru: 'Процесс заявок, типичные проблемы, распределение расходов и самостоятельный ремонт'
  },
  intro: {
    zh: '住房设施难免出现故障。了解如何高效报修、哪些维修由房东负责、以及简单的自助维修技巧，能让你的生活更顺畅。',
    en: 'Housing facilities inevitably develop issues. Knowing how to efficiently report repairs, what the landlord is responsible for, and basic DIY skills can make your life smoother.',
    ru: 'В жилье неизбежно возникают неисправности. Знание, как эффективно заявить о ремонте, за что отвечает арендодатель и базовые навыки самостоятельного ремонта облегчат жизнь.'
  },
  preparation: {
    zh: [
      '拍照记录故障情况',
      '准备好描述问题的中文表达',
      '联系房东或宿管的联系方式'
    ],
    en: [
      'Take photos of the issue',
      'Prepare Chinese phrases to describe the problem',
      'Have landlord/warden\'s contact info ready'
    ],
    ru: [
      'Сфотографируйте проблему',
      'Подготовьте фразы на китайском для описания',
      'Контакты арендодателя/коменданта'
    ]
  },
  steps: [
    {
      title: {
        zh: '报修流程',
        en: 'Reporting Process',
        ru: 'Процесс заявки'
      },
      desc: {
        zh: '报修步骤：\n\n🏠 宿舍报修\n1. 联系宿管办公室或在学校后勤系统提交报修单\n2. 描述故障情况（可拍照发送）\n3. 维修人员上门处理\n4. 确认修好，签字\n\n🏘️ 校外租房报修\n1. 联系房东，说明问题\n2. 协商维修方式（房东派人修/你自己找人修后报销）\n3. 保留维修单据\n\n💡 常用报修用语：\n• "你好，我房间的[水龙头/空调/灯]坏了" = My [faucet/AC/light] is broken\n• "请问什么时候能来修？" = When can someone come to fix it?\n• "这个需要我自己出钱修吗？" = Do I need to pay for this repair?',
        en: 'Repair reporting steps:\n\n🏠 Dormitory repair\n1. Contact dormitory office or submit repair request in school logistics system\n2. Describe the issue (photos help)\n3. Maintenance staff come to fix\n4. Confirm repair, sign off\n\n🏘️ Off-campus rental repair\n1. Contact landlord, explain the issue\n2. Agree on repair method (landlord sends someone / you hire someone and get reimbursed)\n3. Keep repair receipts\n\n💡 Useful phrases:\n• "你好，我房间的[水龙头/空调/灯]坏了" = My [faucet/AC/light] is broken\n• "请问什么时候能来修？" = When can someone come fix it?\n• "这个需要我自己出钱修吗？" = Do I pay for this repair?',
        ru: 'Подача заявки:\n\n🏠 В общежитии\n1. Свяжитесь с комендантом или подайте заявку через систему\n2. Опишите проблему (фото)\n3. Мастер придёт для ремонта\n4. Подтвердите и подпишите\n\n🏘️ Вне кампуса\n1. Свяжитесь с арендодателем\n2. Договоритесь о способе ремонта\n3. Сохраните квитанции\n\n💡 Фразы:\n• "我房间的...坏了" — У меня сломалось...\n• "什么时候能来修？" — Когда придут чинить?'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '维修费应该谁出？',
        en: 'Who pays for repairs?',
        ru: 'Кто оплачивает ремонт?'
      },
      a: {
        zh: '一般原则：因自然损耗导致的故障由房东承担（如水管老化、电器故障）；因使用不当造成的损坏由租客承担（如打碎窗户、堵塞马桶）。具体以合同约定为准。',
        en: 'General principle: natural wear and tear is landlord\'s responsibility (aging pipes, appliance failure); damage from misuse is tenant\'s responsibility (broken windows, clogged toilet). Check your contract for specifics.',
        ru: 'Общий принцип: естественный износ — за арендодателя; повреждения от неправильного использования — за арендатора. Смотрите договор.'
      }
    }
  ],
  nextGuides: ['hospital-guide', 'buy-sim-card']
};
