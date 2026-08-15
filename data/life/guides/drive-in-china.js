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
      title: { zh: '了解驾照要求', en: 'Understand license requirements', ru: 'Требования к водительским правам' },
      desc: {
        zh: '中国不承认国际驾照（IDP）和外国驾照直接使用。外国人在中国驾车必须持有中国驾照或临时机动车驾驶许可。持短期签证的外国人可申请临时驾驶许可（有效期与签证一致），无需考试。',
        en: 'China does not recognize International Driving Permits (IDP) or foreign licenses for direct use. Foreigners must hold a Chinese license or a temporary driving permit. Those on short-term visas can apply for a temporary permit (valid as long as the visa) without taking a test.',
        ru: 'Китай не признаёт международные водительские права (IDP) или иностранные права для прямого использования. Иностранцы должны иметь китайские права или временное разрешение. Те, кто по краткосрочной визе, могут получить временное разрешение (действительно как виза) без экзамена.'
      }
,      tip: {
        zh: '切勿无证驾驶，罚款200-2000元并可拘留15天。',
        en: 'Never drive without a valid permit — fines of 200-2000 yuan and possible 15-day detention.',
        ru: 'Никогда не водите без действительного разрешения — штраф 200-2000 юаней и возможно 15 дней задержания.'
      }
    },
    {
      title: { zh: '申请临时驾驶许可', en: 'Apply for temporary driving permit', ru: 'Заявка на временное разрешение' },
      desc: {
        zh: '携带护照、签证、境外驾照原件+翻译件、证件照到当地车管所申请临时机动车驾驶许可。翻译件需到指定翻译机构翻译并公证。办理当天即可领取，有效期与签证停留期一致。',
        en: 'Bring your passport, visa, original foreign license + translated copy, and ID photos to the local Vehicle Management Office to apply for a temporary driving permit. The translation must be done by a certified translation agency and notarized. The permit is usually issued the same day, valid for the same duration as your visa.',
        ru: 'Принесите паспорт, визу, оригинал иностранных прав + перевод, фото в местное Управление транспортных средств для заявления на временное разрешение. Перевод должен быть выполнен сертифицированным агентством и нотариально заверен. Разрешение обычно выдаётся в тот же день, действительно как виза.'
      }
,      tip: {
        zh: '部分城市车管所可现场提供翻译服务，提前电话咨询。',
        en: 'Some Vehicle Management Offices offer on-site translation — call ahead to confirm.',
        ru: 'Некоторые управления предлагают перевод на месте — позвоните заранее для подтверждения.'
      }
    },
    {
      title: { zh: '租车与驾车', en: 'Renting and driving', ru: 'Аренда и вождение' },
      desc: {
        zh: '持临时驾驶许可可到租车公司租车（神州租车、一嗨租车等），需护照+驾照许可+信用卡押金。自驾时注意：靠右行驶、限速严格（高速120km/h，城市道路通常60km/h）、酒驾零容忍（血液酒精含量>20mg即违法）。',
        en: 'With a temporary permit, rent from companies like CAR Inc. or eHi Car Services. Need passport + permit + credit card deposit. When driving: drive on the right, strict speed limits (highway 120km/h, city roads usually 60km/h), zero tolerance for drunk driving (BAC over 20mg is illegal).',
        ru: 'С временным разрешением арендуйте в компаниях CAR Inc. или eHi Car Services. Нужен паспорт + разрешение + залог по кредитной карте. При вождении: правостороннее движение, строгие ограничения скорости (автомагистраль 120км/ч, городские дороги обычно 60км/ч), нулевая терпимость к пьяному вождению (BAC свыше 20мг незаконно).'
      }
,      tip: {
        zh: '中国城市停车较难，建议优先使用公共交通和打车，仅在必要时租车自驾。',
        en: 'Parking in Chinese cities is difficult — prioritize public transport and ride-hailing. Rent a car only when necessary.',
        ru: 'Парковка в китайских городах сложна — приоритет общественному транспорту и такси. Арендуйте автомобиль только при необходимости.'
      }
    }
  ],
  faq: [
    { q: { zh: '国际驾照在中国能用吗？', en: 'Is International Driving Permit valid in China?', ru: 'Действуют ли международные права в Китае?' }, a: { zh: '不能直接使用。中国不是《日内瓦公约》和《维也纳公约》缔约国，不承认IDP。需要办理临时许可或换领中国驾照。', en: 'No. China is not a signatory to Geneva/Vienna Conventions and does not recognize IDP. You need a temporary permit or Chinese license.', ru: 'Нет. Китай не подписант Женевской/Венской конвенций. Нужно временное разрешение или китайские права.' } },
  ],
  nextGuides: ['traffic-rules', 'parking-guide', 'ev-charging']
};