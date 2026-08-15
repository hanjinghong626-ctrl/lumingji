// Guide: 网络与VPN须知
export default {
  id: 'vpn-legal-notice',
  category: 'communication',
  icon: '🔒',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["vpn", "internet", "legal"],
  title: { zh: '网络与VPN须知', en: 'Internet & VPN Notice', ru: 'Internet & VPN Notice' },
  summary: { zh: '中国互联网使用规定与VPN法律说明', en: 'China internet rules and VPN legality', ru: 'China internet rules and VPN legality' },
  intro: { zh: '中国互联网使用规定与VPN法律说明。', en: 'China internet rules and VPN legality.', ru: 'China internet rules and VPN legality.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '了解中国网络法规', en: 'Understand China internet regulations', ru: 'Понимание интернет-регулирования Китая' },
      desc: {
        zh: '中国实行网络主权管理，部分境外网站和服务在中国大陆无法直接访问。根据《中华人民共和国网络安全法》，使用未经许可的VPN服务属于违规行为。外国留学生应遵守中国法律法规，合法使用互联网。',
        en: 'China exercises internet sovereignty, and some foreign websites and services are not directly accessible in mainland China. According to the Cybersecurity Law of the PRC, using unlicensed VPN services is a violation. International students should comply with Chinese laws and use the internet legally.',
        ru: 'Китай осуществляет интернет-суверенитет, и некоторые зарубежные веб-сайты и сервисы недоступны напрямую в материковом Китае. Согласно Закону о кибербезопасности КНР, использование нелицензированных VPN-сервисов является нарушением. Иностранные студенты должны соблюдать китайские законы и использовать интернет легально.'
      }
    },
    {
      title: { zh: '合法上网方式', en: 'Legal internet access methods', ru: 'Легальные способы доступа к интернету' },
      desc: {
        zh: '高校校园网通常可以正常访问大部分学术资源网站（如Google Scholar、大学图书馆数据库等）。学校提供的校园网是合法渠道，优先使用。部分国际邮件服务（如Gmail）在校园网下可能可以正常收发。',
        en: 'University campus networks usually provide normal access to most academic resource websites (like Google Scholar, university library databases, etc.). The campus network provided by the university is a legal channel — use it first. Some international email services (like Gmail) may work on campus networks.',
        ru: 'Университетские кампусные сети обычно предоставляют нормальный доступ к большинству академических ресурсов (Google Scholar, базы данных университетских библиотек и т.д.). Кампусная сеть, предоставленная университетом, является легальным каналом — используйте её в первую очередь. Некоторые международные почтовые сервисы (например, Gmail) могут работать в кампусных сетях.'
      }
,      tip: {
        zh: '学校图书馆的电子资源数据库是获取学术文献的最佳合法渠道。',
        en: 'The university library electronic resource databases are the best legal channel for accessing academic literature.',
        ru: 'Электронные ресурсные базы данных университетской библиотеки являются лучшим легальным каналом для доступа к академической литературе.'
      }
    },
    {
      title: { zh: '建议与注意事项', en: 'Recommendations and precautions', ru: 'Рекомендации и меры предосторожности' },
      desc: {
        zh: '①优先使用校园网访问学术资源；②需要联系海外家人可用微信视频通话、FaceTime等方式；③学校通常有国际邮件收发解决方案，咨询网络中心；④切勿使用非法VPN服务，被发现可能面临罚款和签证影响。',
        en: '① Use campus network for academic resources first; ② Contact family abroad via WeChat video, FaceTime, etc.; ③ Universities usually have solutions for international email — consult the IT center; ④ Never use illegal VPN services — discovery may result in fines and visa consequences.',
        ru: '① Сначала используйте кампусную сеть для академических ресурсов; ② Свяжитесь с семьёй за границей через видеозвонки WeChat, FaceTime и т.д.; ③ Университеты обычно имеют решения для международной почты — проконсультируйтесь с IT-центром; ④ Никогда не используйте незаконные VPN-сервисы — обнаружение может привести к штрафам и последствиям для визы.'
      }
,      tip: {
        zh: '如遇到学术资源访问问题，联系学校图书馆或网络中心寻求帮助。',
        en: 'If you have trouble accessing academic resources, contact the university library or IT center for help.',
        ru: 'Если у вас есть проблемы с доступом к академическим ресурсам, свяжитесь с университетской библиотекой или IT-центром для получения помощи.'
      }
    }
  ],
  faq: [
    { q: { zh: '外国人能注册吗？', en: 'Can foreigners register?', ru: 'Могут иностранцы зарегистрироваться?' }, a: { zh: '大部分中国社交平台支持外国手机号注册，但部分功能可能受限。建议使用中国手机号注册以获得完整功能。', en: 'Most Chinese social platforms support foreign phone registration, but some features may be limited. Use a Chinese number for full access.', ru: 'Большинство поддерживают иностраные номера, но с ограничениями. Китайский номер — полный доступ.' } },
  ],
  nextGuides: ['wechat-full-guide', 'choose-phone-plan', 'recharge-phone']
};