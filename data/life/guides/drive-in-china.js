// Guide: 在中国开车须知
export default {
  id: 'drive-in-china',
  category: 'transport',
  icon: '🚙',
  type: 'guide',
  difficulty: 3,
  estimatedTime: 25,
  apps: [],
  prerequisites: [],
  tags: ["driving", "license", "transport"],
  title: { zh: '在中国开车须知', en: 'Driving in China Guide', ru: 'Вождение в Китае' },
  summary: { zh: '外国人在中国开车：驾照要求、换证流程、交规要点', en: 'Foreigners driving in China: license requirements, conversion process, traffic rules', ru: 'Иностранцы за рулём: требования, обмен прав, ПДД' },
  intro: { zh: '中国不承认国际驾照，外国人需办理中国驾照或在特定条件下使用临时许可。', en: 'China does not recognize international driving permits. Foreigners need a Chinese license or temporary permit.', ru: 'Китай не признаёт международные права. Нужны китайские права или временное разрешение.' },
  preparation: { zh: ['护照', '外国驾照原件+翻译件', '体检报告', '居住证'], en: ['Passport', 'Foreign license + translation', 'Medical report', 'Residence permit'], ru: ['Паспорт', 'Иностранные права + перевод', 'Медсправка', 'ВНЖ'] },
  steps: [
    {
      title: { zh: '换领中国驾照', en: 'Get Chinese License', ru: 'Получение китайских прав' },
      desc: { zh: '外国人获取中国驾照：\n\n1️⃣ 临时驾驶许可（短期）：\n• 凭外国驾照+翻译件到车管所申请\n• 有效期与签证一致\n• 免考试\n\n2️⃣ 正式驾照（长期居留）：\n• 到驾校报名\n• 科目一笔试（理论，有英文题）\n• 通过后领取C1/C2驾照\n\n⚠️ 中国靠左舵右行\n⚠️ 酒驾处罚极严（拘留+罚款+吊销）', en: 'Getting Chinese license:\n\n1️⃣ Temporary permit (short-term):\n• Apply at vehicle management office with foreign license + translation\n• Valid as long as visa\n• No exam\n\n2️⃣ Full license (long-term):\n• Enroll at driving school\n• Pass theory exam (has English questions)\n• Get C1/C2 license\n\n⚠️ Right-hand drive, drive on right\n⚠️ DUI: severe penalties (detention + fine + revocation)', ru: 'Получение прав:\n\n1️⃣ Временное (краткосрочное):\n• С иностранными правами + перевод\n• Действует как виза\n• Без экзамена\n\n2️⃣ Постоянное:\n• Автошкола\n• Теория (есть английские вопросы)\n• Права C1/C2\n\n⚠️ Правостороннее движение\n⚠️ Алкоголь за рулём: строгий штраф' },
    },
  ],
  faq: [
    { q: { zh: '国际驾照在中国能用吗？', en: 'Is International Driving Permit valid in China?', ru: 'Действуют ли международные права в Китае?' }, a: { zh: '不能直接使用。中国不是《日内瓦公约》和《维也纳公约》缔约国，不承认IDP。需要办理临时许可或换领中国驾照。', en: 'No. China is not a signatory to Geneva/Vienna Conventions and does not recognize IDP. You need a temporary permit or Chinese license.', ru: 'Нет. Китай не подписант Женевской/Венской конвенций. Нужно временное разрешение или китайские права.' } },
  ],
  nextGuides: ['traffic-rules', 'parking-guide', 'ev-charging']
};