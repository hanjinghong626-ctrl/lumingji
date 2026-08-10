// Guide: 家用宽带安装
export default {
  id: 'internet-setup',
  category: 'housing',
  icon: '📶',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 60,
  apps: [],
  prerequisites: ['buy-sim-card', 'rent-apartment'],
  tags: ['internet', 'broadband', 'wifi'],
  title: {
    zh: '家用宽带安装',
    en: 'Home Internet Setup',
    ru: 'Установка домашнего интернета'
  },
  summary: {
    zh: '宽带运营商选择、报装流程、套餐对比与网速优化',
    en: 'ISP selection, installation process, plan comparison and speed optimization',
    ru: 'Выбор провайдера, процесс подключения, сравнение тарифов и оптимизация скорости'
  },
  intro: {
    zh: '如果宿舍WiFi不够用或校外租房需要网络，安装家用宽带是必要的。中国有三大宽带运营商，速度和价格各有不同。',
    en: 'If dormitory WiFi isn\'t sufficient or you need internet for off-campus housing, home broadband installation is necessary. China has three major broadband ISPs with different speeds and prices.',
    ru: 'Если WiFi в общежитии недостаточен или нужен интернет для жилья вне кампуса — необходимо подключить домашний интернет. В Китае три основных провайдера.'
  },
  preparation: {
    zh: [
      '手机号（用于绑定宽带账号）',
      '身份证件',
      '了解所在小区的宽带覆盖情况'
    ],
    en: [
      'Phone number (for broadband account binding)',
      'ID document',
      'Know which ISPs cover your area'
    ],
    ru: [
      'Номер телефона (для привязки)',
      'Документ',
      'Знайте, какие провайдеры есть в вашем районе'
    ]
  },
  steps: [
    {
      title: {
        zh: '选择宽带套餐',
        en: 'Choose a Broadband Plan',
        ru: 'Выбор тарифа'
      },
      desc: {
        zh: '三大运营商宽带对比：\n\n📡 中国移动宽带\n• 价格：最便宜（约50-100元/月）\n• 速度：100M-1000M\n• 优势：和手机套餐捆绑优惠\n• 适合：预算有限、日常使用\n\n📡 中国联通宽带\n• 价格：中等（约80-150元/月）\n• 速度：100M-2000M\n• 优势：网速稳定，国际出口较好\n• 适合：有视频会议、下载需求\n\n📡 中国电信宽带\n• 价格：略高（约100-200元/月）\n• 速度：100M-2000M\n• 优势：最稳定，游戏延迟低\n• 适合：对网络质量要求高\n\n💡 建议先打客服电话（移动10086/联通10010/电信10000）确认你所在的小区是否支持。',
        en: 'Comparison of three major ISPs:\n\n📡 China Mobile Broadband\n• Price: Cheapest (~¥50-100/month)\n• Speed: 100M-1000M\n• Advantage: Bundle deals with mobile plans\n• Best for: Budget-conscious, daily use\n\n📡 China Unicom\n• Price: Medium (~¥80-150/month)\n• Speed: 100M-2000M\n• Advantage: Stable speed, better international access\n• Best for: Video calls, downloading needs\n\n📡 China Telecom\n• Price: Higher (~¥100-200/month)\n• Speed: 100M-2000M\n• Advantage: Most stable, low gaming latency\n• Best for: High quality network requirements\n\n💡 Call customer service (Mobile 10086/Unicom 10010/Telecom 10000) to check if your area is covered.',
        ru: 'Сравнение трёх провайдеров:\n\n📡 China Mobile\n• Цена: самый дешёвый (~50-100 ¥/мес)\n• Скорость: 100M-1000M\n• Преимущество:捆绑 с мобильным тарифом\n\n📡 China Unicom\n• Цена: средний (~80-150 ¥/мес)\n• Скорость: 100M-2000M\n• Преимущество: стабильный, лучший международный доступ\n\n📡 China Telecom\n• Цена: выше (~100-200 ¥/мес)\n• Преимущество: самый стабильный, низкий пинг\n\n💡 Позвоните для проверки покрытия в вашем районе.'
      }
    },
    {
      title: {
        zh: '预约安装',
        en: 'Schedule Installation',
        ru: 'Запись на установку'
      },
      desc: {
        zh: '安装流程：\n\n1. 拨打客服电话或到营业厅办理\n2. 提供地址和联系方式\n3. 预约上门安装时间\n4. 技术人员上门安装光猫和路由器\n5. 测试网速，确认正常\n\n⏰ 安装时间：预约后通常1-3天内上门\n💰 费用：首次安装可能有安装费（100-200元），后续按月付费\n📋 需要的材料：身份证/护照 + 手机号',
        en: 'Installation process:\n\n1. Call customer service or visit business hall\n2. Provide address and contact info\n3. Schedule home installation appointment\n4. Technician installs optical modem and router\n5. Test speed, confirm working\n\n⏰ Timeline: Usually 1-3 days after booking\n💰 Cost: Initial installation fee may apply (¥100-200), then monthly\n📋 Required: ID/passport + phone number',
        ru: 'Процесс установки:\n1. Позвоните или посетите офис\n2. Укажите адрес и контакты\n3. Запишитесь на установку\n4. Техник установит модем и роутер\n5. Проверьте скорость\n\n⏰ Обычно 1-3 дня после записи\n💰 Возможна плата за установку (100-200 ¥)'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '留学生可以办理宽带吗？',
        en: 'Can international students get broadband?',
        ru: 'Могут ли иностранные студенты подключить интернет?'
      },
      a: {
        zh: '可以。凭护照即可办理。有些运营商可能需要额外担保，建议去较大的营业厅办理。',
        en: 'Yes. You can apply with your passport. Some ISPs may require additional guarantee — visit a larger business hall.',
        ru: 'Да, по паспорту. Некоторые провайдеры могут потребовать дополнительные гарантии.'
      }
    }
  ],
  nextGuides: ['home-appliances', 'furniture-shopping']
};
