// Guide: 住宿登记（派出所）
export default {
  id: 'police-registration',
  category: 'visa-legal',
  icon: '🏠',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 20,
  apps: [],
  prerequisites: [],
  tags: ["police", "registration", "address"],
  title: { zh: '住宿登记（派出所）', en: 'Accommodation Registration (Police Station)', ru: 'Регистрация по месту жительства' },
  summary: { zh: '入境后24小时内到派出所办理住宿登记的流程', en: 'Register at local police station within 24 hours of arrival', ru: 'Регистрация в полиции в течение 24 часов' },
  intro: { zh: '外国人在中国住宿必须办理住宿登记。住校宿舍由学校统一办理，校外住宿需自行办理。', en: 'Foreigners must register accommodation. Dorm residents: school handles it. Off-campus: do it yourself.', ru: 'Иностранцы должны зарегистрировать жильё. В общежитии — школа. Вне кампуса — самостоятельно.' },
  preparation: { zh: ['护照', '租房合同', '房东身份证复印件', '房东房产证复印件'], en: ['Passport', 'Rental contract', 'Landlord\'s ID copy', 'Property certificate copy'], ru: ['Паспорт', 'Договор аренды', 'Копия ID арендодателя', 'Копия свидетельства собственности'] },
  steps: [
    {
      title: { zh: '确认登记时限', en: 'Confirm registration deadline', ru: 'Подтвердите срок регистрации' },
      desc: {
        zh: '根据中国法律，外国人在入住新住处后24小时内必须到辖区派出所办理住宿登记。住学校宿舍的通常由学校统一办理，租房的必须自行办理。',
        en: 'By Chinese law, foreigners must register accommodation at local police station within 24 hours of moving in. Those in university dorms are usually registered by the school; those renting must register themselves.',
        ru: 'По закону Китая, иностранцы должны зарегистрироваться в местном отделении полиции в течение 24 часов после заселения. Проживающие в общежитии регистрируются вузом; арендующие — самостоятельно.'
      }
,      tip: {
        zh: '未按时登记可能被警告或罚款200-500元，务必重视。',
        en: 'Failure to register on time can result in warnings or fines of 200-500 yuan.',
        ru: 'Незарегистрированное проживание может привести к штрафу 200-500 юаней.'
      }
    },
    {
      title: { zh: '准备登记材料', en: 'Prepare registration documents', ru: 'Подготовьте документы' },
      desc: {
        zh: '所需材料：①护照原件及复印件；②租房合同或住宿证明；③房东身份证复印件（租房情况）；④近期一寸照片1-2张；⑤填写《临时住宿登记表》（到派出所现场填写）。建议提前问学校国际学生办公室确认具体要求。',
        en: 'Required: ① Passport original + copy; ② Rental contract or accommodation certificate; ③ Landlord ID copy (if renting); ④ 1-2 recent passport-size photos; ⑤ Temporary Residence Registration Form (fill at station). Check with university international office for specifics.',
        ru: 'Требуется: ① Паспорт + копия; ② Договор аренды или справка о проживании; ③ Копия ID арендодателя (при аренде); ④ 1-2 фото; ⑤ Форма регистрации (заполнить в отделении). Уточните в международном отделе вуза.'
      }
,      tip: {
        zh: '部分城市支持在线登记（通过当地公安微信公众号或App），先查询是否支持。',
        en: 'Some cities support online registration via local police WeChat account or app — check if available.',
        ru: 'Некоторые города поддерживают онлайн-регистрацию через WeChat полиции — проверьте заранее.'
      }
    },
    {
      title: { zh: '到派出所办理', en: 'Go to the police station', ru: 'Идите в отделение полиции' },
      desc: {
        zh: '携带材料到住处所在辖区的派出所（不是公安局，是辖区派出所）。填写《临时住宿登记表》，工作人员核对材料后录入系统。办理完成后会给你一张《临时住宿登记单》，这是重要文件，办理签证续签、居留许可时都需要。',
        en: 'Bring documents to the local police station (paichusuo) that has jurisdiction over your address, NOT the public security bureau. Fill out the form, staff verifies and enters data. You will receive a Temporary Residence Registration Certificate — this is important and required for visa renewals and residence permits.',
        ru: 'Принесите документы в местное отделение полиции (пайчусуо) по вашему адресу. Заполните форму, сотрудники проверят и внесут данные. Вы получите сертификат временной регистрации — он важен для продления визы и ВНЖ.'
      }
,      tip: {
        zh: '登记单务必妥善保管，补办比较麻烦。建议拍照留电子版备份。',
        en: 'Keep the certificate safe — getting a replacement is troublesome. Take a photo for digital backup.',
        ru: 'Храните сертификат — замена хлопотна. Сфотографируйте для цифровой копии.'
      }
    }
  ],
  faq: [
    { q: { zh: '忘记登记了会怎样？', en: 'What if I forget to register?', ru: 'Что если забыть зарегистрироваться?' }, a: { zh: '可能被警告或罚款200-2000元。严重情况下可能影响居留许可续签。建议到达后立即办理。', en: 'May receive warning or fine ¥200-2000. Severe cases may affect residence permit renewal. Register immediately upon arrival.', ru: 'Штраф 200-2000 ¥. Может повлиять на ВНЖ. Зарегистрируйтесь сразу.' } },
  ],
  nextGuides: ['residence-permit', 'visa-types', 'legal-rights']
};