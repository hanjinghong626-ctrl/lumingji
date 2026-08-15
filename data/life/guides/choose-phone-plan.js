// Guide: 手机套餐选择
export default {
  id: 'choose-phone-plan',
  category: 'communication',
  icon: '📱',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: ["buy-sim-card"],
  tags: ["phone", "plan", "carrier"],
  title: { zh: '手机套餐选择', en: 'Phone Plan Selection', ru: 'Выбор тарифа' },
  summary: { zh: '三大运营商套餐对比与留学生推荐方案', en: 'Compare 3 carriers\' plans and recommended options for students', ru: 'Сравнение тарифов 3 операторов для студентов' },
  intro: { zh: '选择合适的手机套餐能省钱又满足需求。', en: 'Choosing the right plan saves money and meets your needs.', ru: 'Правильный тариф экономит деньги.' },
  preparation: { zh: ['了解各运营商套餐'], en: ['Check carrier plans'], ru: ['Изучите тарифы'] },
  steps: [
    {
      title: { zh: '比较三大运营商套餐', en: 'Compare plans from three major carriers', ru: 'Сравните тарифы трёх операторов' },
      desc: {
        zh: '中国移动（信号覆盖最广）、中国联通（价格适中）、中国电信（宽带融合套餐好）。留学生常用套餐：月租29-59元，含10-30GB流量+100-300分钟通话。校园周边营业厅通常有学生专属套餐。',
        en: 'China Mobile (widest coverage), China Unicom (moderate prices), China Telecom (good broadband bundles). Common student plans: 29-59 yuan/month with 10-30GB data + 100-300 minutes calls. Campus-area stores often have student-exclusive plans.',
        ru: 'China Mobile (самое широкое покрытие), China Unicom (умеренные цены), China Telecom (хорошие комбинированные тарифы). Распространённые тарифы для студентов: 29-59 юаней/мес с 10-30ГБ + 100-300 минут. В офисах у кампуса часто есть эксклюзивные студенческие тарифы.'
      }
,      tip: {
        zh: '建议先问学校国际学生办公室，很多学校和运营商有合作优惠套餐。',
        en: 'Ask your university international student office first — many schools have partnership plans at discounted rates.',
        ru: 'Сначала спросите в международном отделе вуза — многие учебные заведения имеют партнёрские тарифы с операторами.'
      }
    },
    {
      title: { zh: '到营业厅办理', en: 'Visit a business hall to sign up', ru: 'Посетите офис оператора' },
      desc: {
        zh: '携带护照原件到最近的运营商营业厅。告知工作人员你的需求（月预算、流量需求、通话需求），他们会推荐合适套餐。填写入网协议，完成实名认证。部分营业厅可能对外国人办理有限制，可多试几家。',
        en: 'Bring your original passport to the nearest carrier business hall. Tell the staff your needs (monthly budget, data needs, call needs) and they will recommend suitable plans. Fill in the registration agreement and complete real-name verification. Some halls may have restrictions for foreigners — try another if needed.',
        ru: 'Принесите оригинал паспорта в ближайший офис оператора. Сообщите о ваших потребностях (бюджет, трафик, звонки), и они предложат подходящие тарифы. Заполните договор подключения и пройдите верификацию. Некоторые офисы могут иметь ограничения для иностранцев — попробуйте другой.'
      }
,      tip: {
        zh: '大型营业厅（如移动旗舰店）对外国人更友好，小型合作网点可能不太会处理护照入网。',
        en: 'Large flagship stores handle foreign passport registration more smoothly. Small partner outlets may not be familiar with passport registration.',
        ru: 'Крупные фирменные офисы лучше работают с регистрацией по загранпаспорту. Небольшие пункты могут не знать, как оформить.'
      }
    },
    {
      title: { zh: '激活SIM卡', en: 'Activate the SIM card', ru: 'Активируйте SIM-карту' },
      desc: {
        zh: '办理完成后，工作人员会将SIM卡插入你手机或交给你。新卡通常需要等待10-30分钟激活。激活后会收到运营商的确认短信。此时可拨打电话测试是否正常。',
        en: 'After registration, the staff will insert the SIM into your phone or hand it to you. New cards usually take 10-30 minutes to activate. You will receive a confirmation SMS from the carrier. Test by making a call.',
        ru: 'После оформления сотрудник вставит SIM-карту в ваш телефон или передаст её. Новые карты обычно активируются через 10-30 минут. После активации вы получите SMS от оператора. Проверьте, позвонив.'
      }
,      tip: {
        zh: '如果长时间未激活，尝试关机重启手机。',
        en: 'If activation takes too long, try turning the phone off and back on.',
        ru: 'Если активация занимает слишком много времени, попробуйте выключить и включить телефон.'
      }
    },
    {
      title: { zh: '设置流量与套餐管理', en: 'Set up data and plan management', ru: 'Настройте управление тарифом' },
      desc: {
        zh: '在手机上安装运营商官方App（中国移动/联通/电信App），可以随时查看剩余流量、话费余额、套餐详情。设置流量提醒，避免超出套餐限额产生额外费用。如需更多流量，可在App内购买流量包（通常5-10元/GB）。',
        en: 'Install your carrier official app (China Mobile/Unicom/Telecom app) to check remaining data, balance, and plan details anytime. Set up data usage alerts to avoid overage charges. If you need more data, buy data packs in the app (usually 5-10 yuan/GB).',
        ru: 'Установите официальное приложение оператора для проверки остатка трафика, баланса и деталей тарифа. Настройте уведомления о расходе, чтобы избежать дополнительных расходов. При необходимости покупайте пакеты трафика в приложении (обычно 5-10 юаней/ГБ).'
      }
    }
  ],
  faq: [
    { q: { zh: '套餐可以中途更换吗？', en: 'Can I change plans mid-contract?', ru: 'Можно сменить тариф?' }, a: { zh: '可以。大部分套餐次月生效，无合约限制。但部分优惠套餐有合约期（12个月），提前变更可能有违约金。', en: 'Yes. Most plans change next month, no contract. But some promotional plans have 12-month contracts with early termination fees.', ru: 'Да. Большинство — со следующего месяца. Но акции с контрактом 12 мес — штраф при досрочном.' } },
  ],
  nextGuides: ['recharge-phone', 'buy-sim-card', 'use-qq']
};