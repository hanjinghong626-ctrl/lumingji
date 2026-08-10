// Guide: 购买药品指南
export default {
  id: 'buy-medicine',
  category: 'medical',
  icon: '💊',
  type: 'hands-on',
  difficulty: 1,
  estimatedTime: 20,
  apps: ['alipay', 'wechat'],
  prerequisites: ['hospital-guide'],
  tags: ['pharmacy', 'medicine', 'OTC'],
  title: {
    zh: '购买药品指南',
    en: 'Buying Medicine Guide',
    ru: 'Руководство по покупке лекарств'
  },
  summary: {
    zh: '药店买药流程、常用药品对照表、处方药与非处方药区别',
    en: 'Pharmacy process, common medicine reference table, prescription vs OTC differences',
    ru: 'Процесс покупки в аптеке, таблица лекарств, рецептурные и безрецептурные'
  },
  intro: {
    zh: '中国药店随处可见，买药比去医院方便得多。常见的小病如感冒、腹泻、过敏都可以直接在药店买到药。',
    en: 'Pharmacies are everywhere in China — buying medicine is much more convenient than visiting a hospital. Common ailments like colds, diarrhea, and allergies can all be treated with pharmacy purchases.',
    ru: 'Аптеки есть повсюду в Китае — покупать лекарства намного удобнее, чем идти в больницу. Простуду, диарею, аллергию можно лечить покупными лекарствами.'
  },
  preparation: {
    zh: [
      '了解常见病症的中文表达',
      '准备好症状描述'
    ],
    en: [
      'Know Chinese terms for common symptoms',
      'Prepare symptom description'
    ],
    ru: [
      'Знайте китайские названия симптомов',
      'Подготовьте описание симптомов'
    ]
  },
  steps: [
    {
      title: {
        zh: '药店买药',
        en: 'Buying at a Pharmacy',
        ru: 'Покупка в аптеке'
      },
      desc: {
        zh: '药店购药流程：\n\n1. 走进药店（街边随处可见，招牌通常有"药房"或"药店"）\n2. 向药师描述症状\n3. 药师推荐药品\n4. 付款购买\n\n💊 常用药品中英对照：\n• 感冒药：cold medicine → 感冒灵/白加黑\n• 退烧药：fever reducer → 布洛芬/对乙酰氨基酚\n• 止泻药：anti-diarrhea → 蒙脱石散\n• 消炎药：anti-inflammatory → 阿莫西林\n• 过敏药：allergy medicine → 氯雷他定\n• 创可贴：band-aid → 创可贴\n• 碘伏：iodine → 碘伏\n\n💡 提示：直接给药师看药品图片更高效。很多药品的中文名字很长，用图片最准确。',
        en: 'Pharmacy purchasing process:\n\n1. Enter a pharmacy (found everywhere, signs say "药房" or "药店")\n2. Describe symptoms to the pharmacist\n3. Pharmacist recommends medicine\n4. Pay and purchase\n\n💊 Common medicines reference:\n• Cold medicine → 感冒灵/白加黑\n• Fever reducer → 布洛芬/对乙酰氨基酚\n• Anti-diarrhea → 蒙脱石散\n• Anti-inflammatory → 阿莫西林\n• Allergy medicine → 氯雷他定\n• Band-aid → 创可贴\n• Iodine solution → 碘伏\n\n💡 Tip: Showing pictures of the medicine to the pharmacist is more efficient. Many Chinese medicine names are long — pictures are most accurate.',
        ru: 'Процесс покупки:\n1. Войдите в аптеку (вывеска "药房" или "药店")\n2. Опишите симптомы фармацевту\n3. Получите рекомендации\n4. Оплатите\n\n💊 Популярные лекарства:\n• От простуды → 感冒灵\n• Жаропонижающее → 布洛芬\n• От диареи → 蒙脱石散\n• Противоаллергическое → 氯雷他定\n• Пластырь → 创可贴\n\n💡 Совет: покажите фото лекарства фармацевту — так точнее.'
      }
    },
    {
      title: {
        zh: '处方药注意事项',
        en: 'Prescription Medicine Notes',
        ru: 'Рецептурные лекарства'
      },
      desc: {
        zh: '处方药 vs 非处方药（OTC）：\n\n🟢 OTC非处方药\n• 可以直接购买\n• 药盒上有"OTC"标志\n• 常见如感冒药、止痛药、维生素\n\n🔴 处方药\n• 需要医生处方才能购买\n• 如抗生素、安眠药、精神类药物\n• 正规医院开处方后到药房取药\n• 部分药店凭处方可出售\n\n⚠️ 注意：\n• 中国对抗生素管理较严格，不能随便买\n• 如果你在国内有长期用药需求，建议带足药品或让医生开具翻译处方',
        en: 'Prescription vs OTC (Over-the-Counter):\n\n🟢 OTC medicines\n• Can buy directly\n• Marked with "OTC" on the box\n• Common: cold medicine, painkillers, vitamins\n\n🔴 Prescription medicines\n• Need doctor\'s prescription\n• Such as antibiotics, sleeping pills, psychiatric drugs\n• Get prescription at hospital, fill at pharmacy\n• Some pharmacies sell with valid prescription\n\n⚠️ Notes:\n• China strictly regulates antibiotics — can\'t buy freely\n• If you have long-term medication needs, bring enough supply or get a translated prescription from your doctor',
        ru: 'Рецептурные vs безрецептурные (OTC):\n\n🟢 OTC — свободная продажа\n🔴 Рецептурные — нужны рецепт врача\n\n⚠️ Антибиотики в Китае строго регулируются. При длительном приёме — возьмите запас или переведённый рецепт.'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '可以网购药品吗？',
        en: 'Can I buy medicine online?',
        ru: 'Можно ли покупать лекарства онлайн?'
      },
      a: {
        zh: '可以。美团买药、饿了么买药可以30分钟送药上门。京东健康、阿里健康也可以购买。但处方药需要上传处方。',
        en: 'Yes. Meituan Pharmacy and Ele.me Pharmacy deliver within 30 minutes. JD Health and Ali Health also sell online. Prescription drugs require uploading a prescription.',
        ru: 'Да. Meituan и Ele.me доставляют за 30 минут. JD Health и Ali Health тоже. Рецептурные — нужен рецепт.'
      }
    }
  ],
  nextGuides: ['health-insurance', 'pharmacy-guide']
};
