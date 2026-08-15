// Guide: 购物退税指南
export default {
  id: 'tax-refund',
  category: 'payment',
  icon: '🛍️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: [],
  prerequisites: [],
  tags: ["tax-refund", "shopping", "departure"],
  title: { zh: '购物退税指南', en: 'Shopping Tax Refund Guide', ru: 'Возврат налога Tax Free' },
  summary: { zh: '离境时购物退税流程：条件、步骤与注意事项', en: 'Tax refund process on departure: eligibility, steps, and tips', ru: 'Возврат Tax Free при выезде: условия, шаги, советы' },
  intro: { zh: '在指定商店购物后，留学生离境时可申请退还增值税。', en: 'After shopping at designated stores, students can apply for VAT refund upon departure.', ru: 'После покупок в магазинах Tax Free можно вернуть НДС при выезде.' },
  preparation: { zh: ['护照原件', '退税专用购物发票', '购买商品（未使用）'], en: ['Original passport', 'Tax-free invoice', 'Goods (unused)'], ru: ['Паспорт', 'Счёт Tax Free', 'Товары (не использованные)'] },
  steps: [
    {
      title: { zh: '了解退税条件', en: 'Understand tax refund conditions', ru: 'Условия возврата налога' },
      desc: {
        zh: '外国留学生在以下情况可申请退税：①兼职/实习收入被扣税但年收入未达到起征点（月入5000元以下免税）；②奖学金超出免税部分被误扣税；③其他多扣税款的情况。退税一般在次年3-6月通过个人所得税汇算清缴办理。',
        en: 'Foreign students can apply for tax refunds when: ① Part-time/internship income was taxed but annual income is below the threshold (monthly income under 5000 yuan is tax-free); ② Scholarship income beyond the tax-free portion was incorrectly taxed; ③ Other cases of over-withholding. Refunds are usually processed during the annual tax reconciliation from March to June of the following year.',
        ru: 'Иностранные студенты могут подать заявление на возврат налога, если: ① Налог удержан с дохода от подработки/стажировки, но годовой доход ниже порога (менее 5000 юаней/мес не облагается); ② Стипендия свыше необлагаемой части была неправильно обложена; ③ Другие случаи чрезмерного удержания. Возврат обычно оформляется с марта по июнь следующего года.'
      }
,      tip: {
        zh: '保留所有工资单和扣税凭证，这是退税的依据。',
        en: 'Keep all pay slips and tax withholding certificates — they are the basis for refund claims.',
        ru: 'Сохраняйте все расчётные листы и справки об удержании налога — они являются основанием для возврата.'
      }
    },
    {
      title: { zh: '准备退税材料', en: 'Prepare refund documents', ru: 'Подготовка документов для возврата' },
      desc: {
        zh: '所需材料：①护照原件及复印件；②扣缴税款凭证（单位提供或个人所得税App下载）；③收入证明（工资单、劳务合同等）；④个人银行账户信息（用于接收退税款）；⑤《个人所得税年度汇算申报表》（在「个人所得税」App内填写）。',
        en: 'Required: ① Passport + copy; ② Tax withholding certificates (from employer or download from Individual Income Tax app); ③ Income proof (pay slips, labor contracts); ④ Personal bank account info (for receiving the refund); ⑤ Annual Individual Income Tax Reconciliation Form (filled in the Individual Income Tax app).',
        ru: 'Требуется: ① Паспорт + копия; ② Справки об удержании налога (от работодателя или скачать в приложении); ③ Подтверждение дохода (расчётные листы, трудовые договоры); ④ Данные банковского счёта (для получения возврата); ⑤ Годовая декларация (заполняется в приложении налога на доходы).'
      }
,      tip: {
        zh: '下载「个人所得税」App，用护照信息注册后可以查看自己的全部纳税记录。',
        en: 'Download the Individual Income Tax app — register with your passport info to view all your tax records.',
        ru: 'Скачайте приложение налога на доходы — зарегистрируйтесь по паспорту для просмотра всех налоговых записей.'
      }
    },
    {
      title: { zh: '提交退税申请', en: 'Submit refund application', ru: 'Подача заявления на возврат' },
      desc: {
        zh: '在「个人所得税」App内完成年度汇算申报：选择「综合所得年度汇算」→核对收入和扣除信息→系统自动计算应退/应补税额→确认提交。如有应退税额，绑定银行卡后税款会退到你的账户。也可到税务服务大厅现场办理。',
        en: 'Complete the annual reconciliation in the Individual Income Tax app: select Annual Comprehensive Income Reconciliation, verify income and deduction info, the system auto-calculates refund/due amount, confirm and submit. If there is a refund, bind your bank card and the amount will be deposited. You can also handle this in person at the tax service hall.',
        ru: 'Заполните годовую декларацию в приложении: выберите «Годовая декларация совокупных доходов», проверьте информацию о доходах и вычетах, система автоматически рассчитает сумму возврата/доплаты, подтвердите и отправьте. При наличии возврата привяжите банковскую карту и сумма будет зачислена.'
      }
,      tip: {
        zh: '退税一般在提交后1-3个月到账，请耐心等待。',
        en: 'Refunds usually arrive 1-3 months after submission — please be patient.',
        ru: 'Возврат обычно поступает через 1-3 месяца после подачи — пожалуйста, будьте терпеливы.'
      }
    }
  ],
  faq: [
    { q: { zh: '所有商品都能退税吗？', en: 'All products eligible?', ru: 'Все товары?' }, a: { zh: '不是。食品、烟酒、药品等消耗品不能退税。只有非消耗品且满足金额条件才行。', en: 'No. Food, tobacco, alcohol, medicine are excluded. Only non-consumables meeting the minimum.', ru: 'Нет. Еда, табак, алкоголь, лекарства не подлежат.' } },
  ],
  nextGuides: ['airport-to-city', 'currency-exchange', 'deposit-refund']
};