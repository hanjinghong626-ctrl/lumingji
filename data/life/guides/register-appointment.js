// Guide: 预约挂号攻略
export default {
  id: 'register-appointment',
  category: 'medical',
  icon: '📋',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 30,
  apps: ['wechat'],
  prerequisites: ['hospital-guide'],
  tags: ['appointment', 'registration', 'hospital'],
  title: {
    zh: '预约挂号攻略',
    en: 'Hospital Appointment Booking',
    ru: 'Запись на приём в больницу'
  },
  summary: {
    zh: '微信公众号挂号、App预约、现场挂号方法与技巧',
    en: 'WeChat booking, App reservations, on-site registration tips',
    ru: 'Запись через WeChat, приложение, регистрация на месте'
  },
  intro: {
    zh: '在中国看病，预约挂号比现场排队要高效得多。大多数医院都支持微信在线挂号，提前选择医生和时间段。',
    en: 'In China, booking appointments is much more efficient than queuing on-site. Most hospitals support online registration via WeChat, where you can choose doctors and time slots in advance.',
    ru: 'В Китае запись на приём намного эффективнее, чем очередь на месте. Большинство больниц поддерживают онлайн-запись через WeChat.'
  },
  preparation: {
    zh: [
      '关注目标医院的微信公众号',
      '准备好身份证/护照信息',
      '银行卡或微信/支付宝（支付挂号费）'
    ],
    en: [
      'Follow target hospital\'s WeChat official account',
      'Have ID/passport info ready',
      'Bank card or WeChat/Alipay for registration fee'
    ],
    ru: [
      'Подпишитесь на WeChat аккаунт больницы',
      'Подготовьте данные паспорта',
      'Карта или WeChat/Alipay для оплаты'
    ]
  },
    steps: [
    {
      title: { zh: '微信挂号步骤', en: 'WeChat booking steps', ru: 'Шаги записи через WeChat' },
      desc: {
        zh: '微信挂号步骤：',
        en: 'WeChat booking steps:',
        ru: 'Шаги записи через WeChat:\n1. Найдите аккаунт больницы\n2. Подпишитесь\n3. Меню "预约挂号"\n4. Привяжите данные\n5. Выберите отделение → врача → дату\n6. Оплатите\n7. Получите подтверждение'
      }
    },
    {
      title: { zh: '1. 打开微信，搜索医院名称（如"北京协和医院"）', en: '1. Open WeChat, search hospital name', ru: 'В день приёма — за 30 минут, возьмите талон.' },
      desc: {
        zh: '1. 打开微信，搜索医院名称（如"北京协和医院"）\n2. 关注医院官方公众号\n3. 点击菜单"预约挂号"/"就医服务"\n4. 首次使用需绑定个人信息（手机号、身份证/护照号）\n5. 选择科室 → 选择医生 → 选择日期和时间段\n6. 在线支付挂号费\n7. 收到预约成功通知',
        en: '1. Open WeChat, search hospital name\n2. Follow the hospital\'s official account\n3. Click menu "预约挂号" (Appointment) / "就医服务" (Medical Service)\n4. First-time users need to bind personal info (phone, ID/passport)\n5. Choose department → doctor → date and time slot\n6. Pay registration fee online\n7. Receive appointment confirmation',
        ru: 'В день приёма — за 30 минут, возьмите талон.'
      }
    },
    {
      title: { zh: '就诊当天', en: 'On the day', ru: 'Шаг 3' },
      desc: {
        zh: '就诊当天：\n• 提前30分钟到达\n• 在自助机或窗口取号\n• 到候诊区等待叫号',
        en: 'On the day:\n• Arrive 30 minutes early\n• Get your queue number at self-service kiosk or counter\n• Wait in the consultation area',
        ru: '⚠️ Популярные специалисты — записывайтесь сразу при открытии (обычно за 7 дней).'
      }
    },
    {
      title: { zh: '⚠ 热门专家号很难抢，建议放号当天第一时间预约（通常提前7天放号）。', en: 'Step 4', ru: 'Шаг 4' },
      desc: {
        zh: '⚠️ 热门专家号很难抢，建议放号当天第一时间预约（通常提前7天放号）。',
        en: '⚠️ Popular specialist slots are hard to get — book as soon as slots open (usually 7 days in advance).',
        ru: '⚠️ Популярные специалисты — записывайтесь сразу при открытии (обычно за 7 дней).'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '外国人可以在微信上挂号吗？',
        en: 'Can foreigners book via WeChat?',
        ru: 'Могут ли иностранцы записаться через WeChat?'
      },
      a: {
        zh: '部分医院的微信挂号系统只支持中国身份证。如果遇到问题，可以：① 去医院窗口现场挂号 ② 拨打医院电话预约 ③ 让中国朋友帮忙在网上挂号。',
        en: 'Some hospitals\' WeChat systems only support Chinese ID cards. If you encounter issues: ① Register on-site at the hospital window ② Call the hospital to book ③ Ask a Chinese friend to book online for you.',
        ru: 'Некоторые системы поддерживают только китайский ID. Альтернативы: ① Записаться в окне ② Позвонить ③ Попросить китайского друга записать онлайн.'
      }
    }
  ],
  nextGuides: ['buy-medicine', 'health-insurance']
};
