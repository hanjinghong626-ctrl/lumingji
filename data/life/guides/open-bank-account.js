// Guide: 开设银行账户
export default {
  id: 'open-bank-account',
  category: 'first-landing',
  icon: '🏦',
  type: 'hands-on',
  difficulty: 3,
  estimatedTime: 60,
  apps: ['boc-app', 'icbc-app'],
  prerequisites: ['buy-sim-card', 'setup-wechat'],
  tags: ['bank', 'payment', 'finance', 'essential'],
  title: {
    zh: '开设银行账户',
    en: 'Open a Bank Account',
    ru: 'Открыть банковский счёт'
  },
  summary: {
    zh: '留学生在中国银行开户的完整流程：选银行、准备材料、柜台办理、绑定微信/支付宝',
    en: 'Complete guide to opening a bank account as an international student: choosing a bank, preparing documents, counter service, linking to WeChat/Alipay',
    ru: 'Полное руководство по открытию счёта для иностранного студента: выбор банка, документы, обслуживание, привязка к WeChat/Alipay'
  },
  intro: {
    zh: '拥有中国银行卡是在中国生活的基础——发奖学金、交学费、绑定微信/支付宝支付、转账汇款都离不开它。外国人可以在中国银行开设个人储蓄账户（借记卡），流程并不复杂，但需要提前准备材料。本指南带你一步步完成。',
    en: 'Having a Chinese bank account is fundamental to life in China — receiving scholarships, paying tuition, linking to WeChat/Alipay, and transferring money all require it. Foreigners can open a personal savings account (debit card) at Chinese banks. The process isn\'t complicated but requires preparation. This guide walks you through it step by step.',
    ru: 'Банковский счёт в Китае — основа жизни: получение стипендии, оплата обучения, привязка к WeChat/Alipay, переводы. Иностранцы могут открыть личный сберегательный счёт (дебетовую карту). Процесс несложный, но требует подготовки.'
  },
  preparation: {
    zh: ['护照原件（必须）', '有效签证或居留许可（必须）', '学校录取通知书或在读证明（必须）', '中国手机号（已实名，必须）', '住宿登记证明（部分银行要求）', '少量现金（存入激活账户，一般50-100元即可）'],
    en: ['Original passport (required)', 'Valid visa or residence permit (required)', 'School admission letter or enrollment certificate (required)', 'Chinese phone number (real-name registered, required)', 'Accommodation registration proof (required by some banks)', 'Some cash to deposit and activate the account (¥50-100 is enough)'],
    ru: ['Оригинал загранпаспорта (обязательно)', 'Действующая виза или вид на жительство (обязательно)', 'Письмо о зачислении или справка об обучении (обязательно)', 'Китайский номер телефона (обязательно)', 'Справка о регистрации проживания (требуется некоторыми банками)', 'Наличные для активации счёта (50-100 ¥ достаточно)']
  },
  steps: [
    {
      title: { zh: '选择开户银行', en: 'Choose a Bank', ru: 'Выберите банк' },
      desc: {
        zh: '推荐留学生使用的银行：\n\n🏦 中国银行（Bank of China）⭐ 首选\n• 外汇业务经验最丰富，外国人开户流程最成熟\n• 支持多币种账户（人民币+外币）\n• 绑定支付宝/微信成功率高\n• 网点遍布全国，校园内通常有ATM\n\n🏦 中国工商银行（ICBC）⭐ 推荐\n• 中国最大的银行，网点最多\n• 手机银行App功能完善\n• 外国人开户经验丰富\n\n🏦 中国建设银行（CCB）\n• 网点较多，服务稳定\n• 适合学校附近有网点的情况\n\n💡 建议：\n• 优先选择学校附近有网点的银行\n• 问问学长学姐用哪家银行，可以少走弯路\n• 部分学校与国际学院合作，校内可以集中办理开户',
        en: 'Recommended banks for international students:\n\n🏦 Bank of China ⭐ Top Choice\n• Most experienced with foreign exchange services, most mature process for foreign accounts\n• Supports multi-currency accounts (RMB + foreign currency)\n• High success rate linking to Alipay/WeChat\n• Branches nationwide, ATMs usually on campus\n\n🏦 ICBC ⭐ Recommended\n• China\'s largest bank, most branches\n• Excellent mobile banking app\n• Extensive experience with foreign customers\n\n🏦 China Construction Bank (CCB)\n• Many branches, stable service\n• Good choice if there\'s a branch near your school\n\n💡 Tips:\n• Prioritize banks with branches near your school\n• Ask senior students which bank they use — saves trouble\n• Some schools partner with international offices for on-campus account opening',
        ru: 'Рекомендуемые банки для иностранных студентов:\n\n🏦 Bank of China ⭐ Лучший выбор\n• Наибольший опыт с иностранцами\n• Мультивалютные счета (юани + валюта)\n• Высокий успех привязки к Alipay/WeChat\n\n🏦 ICBC ⭐ Рекомендуется\n• Крупнейший банк Китая\n• Отличное мобильное приложение\n\n🏦 China Construction Bank (CCB)\n• Много отделений, стабильный сервис\n\n💡 Советы:\n• Выбирайте банк с отделением рядом с университетом\n• Спросите старшекурсников\n• Некоторые университеты организуют открытие счетов на кампусе'
      },
      tip: {
        zh: '很多大学的国际学生办公室会定期组织银行工作人员到校集中办理开户，这是最省心的方式——材料要求清楚、语言沟通有保障。留意学校通知！',
        en: 'Many universities\' international student offices regularly organize on-campus account opening events with bank staff. This is the most convenient option — clear document requirements and language support. Watch for school announcements!',
        ru: 'Многие офисы международных студентов организуют выездное открытие счетов прямо в кампусе. Это самый удобный вариант — чёткие требования и языковая поддержка. Следите за объявлениями!'
      }
    },
    {
      title: { zh: '预约并前往银行', en: 'Make an Appointment & Visit the Bank', ru: 'Запишитесь и посетите банк' },
      desc: {
        zh: '操作步骤：\n\n1. 确认网点：用高德地图搜索「中国银行/工商银行」，找到离学校最近的网点\n\n2. 电话预约（建议）：\n   • 中国银行客服：95566\n   • 工商银行客服：95588\n   • 告诉客服你是外国人，想开户，确认需要带哪些材料\n   • 部分网点外国人开户需要提前预约\n\n3. 前往银行：\n   • 带上所有材料（护照、签证/居留许可、录取通知书、手机号、现金）\n   • 建议工作日早上去（避开周末和下午，人少）\n   • 到银行后取号排队\n\n4. 到柜台办理：\n   • 告诉工作人员你要开户（或出示这张纸条）：\n     「你好，我是外国留学生，想开一个银行储蓄账户。」\n   • 提交所有材料\n   • 工作人员会拍照、复印、让你签字\n   • 设置6位数字密码（务必记住！）\n   • 存入少量现金激活账户（50-100元）\n\n5. 领取银行卡：\n   • 当场领取借记卡\n   • 确认卡片激活，测试ATM取款\n\n⏱️ 全程大约30-60分钟',
        en: 'Steps:\n\n1. Find a branch: Search "中国银行/工商银行" on Amap to find the nearest branch\n\n2. Call to make an appointment (recommended):\n   • Bank of China hotline: 95566\n   • ICBC hotline: 95588\n   • Tell them you\'re a foreigner wanting to open an account, confirm required documents\n   • Some branches require advance appointment for foreigners\n\n3. Visit the bank:\n   • Bring all documents (passport, visa/permit, admission letter, phone, cash)\n   • Go on a weekday morning (avoid weekends and afternoons — fewer people)\n   • Take a queue number at the bank\n\n4. At the counter:\n   • Tell the staff you want to open an account (or show this):\n     「你好，我是外国留学生，想开一个银行储蓄账户。」\n   • Submit all documents\n   • Staff will photograph, photocopy, and have you sign\n   • Set a 6-digit password (remember it!)\n   • Deposit a small amount to activate (¥50-100)\n\n5. Receive your card:\n   • Get your debit card on the spot\n   • Confirm activation, test ATM withdrawal\n\n⏱️ Takes about 30-60 minutes total',
        ru: 'Шаги:\n\n1. Найдите отделение через Amap\n\n2. Запишитесь по телефону (рекомендуется):\n   • Bank of China: 95566\n   • ICBC: 95588\n   • Сообщите, что вы иностранец, уточните документы\n\n3. Посетите банк:\n   • Возьмите все документы\n   • Лучше идти утром в будний день\n   • Возьмите талон очереди\n\n4. У стойки:\n   • Скажите (или покажите): 「你好，我是外国留学生，想开一个银行储蓄账户。」\n   • Подайте документы\n   • Установите 6-значный пароль\n   • Внесите 50-100 ¥ для активации\n\n5. Получите карту\n\n⏱️ Около 30-60 минут'
      },
      tip: {
        zh: '如果柜台人员说外国人不能开户，不要慌——可能他们没办过。礼貌地请他们找主管或打客服电话确认。根据规定，持有效签证和居留许可的外国人是可以在中国开银行账户的。',
        en: 'If the counter staff says foreigners can\'t open an account, don\'t panic — they may not have processed one before. Politely ask them to consult their supervisor or call the hotline. By regulation, foreigners with valid visa and residence permits can open bank accounts in China.',
        ru: 'Если сотрудник говорит, что иностранцы не могут открыть счёт — не паникуйте. Вежливо попросите связаться с руководителем или позвонить на горячую линию. По правилам иностранцы с действующей визой могут открыть счёт.'
      }
    },
    {
      title: { zh: '开通手机银行', en: 'Set Up Mobile Banking', ru: 'Настройте мобильный банк' },
      desc: {
        zh: '拿到银行卡后，下载对应银行的手机App：\n\n1. 在应用商店搜索银行名称（如「中国银行」「中国工商银行」）\n2. 下载安装后打开App\n3. 点击「注册」或「开通手机银行」\n4. 输入银行卡号、手机号、设置登录密码\n5. 接收短信验证码\n6. 完成注册\n\n手机银行常用功能：\n• 转账汇款：给同学AA付款、交房租\n• 余额查询：随时查看账户余额\n• 交易记录：查看消费明细\n• 外汇兑换：如需换汇可在线操作\n• 缴费：水电费、网费等\n\n💡 安全提示：\n• 不要在公共WiFi下使用手机银行\n• 不要将密码和验证码告诉任何人\n• 开启指纹/面容登录',
        en: 'After getting your bank card, download the corresponding bank\'s mobile app:\n\n1. Search for the bank name in app store (e.g., "中国银行", "中国工商银行")\n2. Install and open the app\n3. Tap "Register" or "Activate Mobile Banking"\n4. Enter bank card number, phone number, set login password\n5. Receive SMS verification code\n6. Complete registration\n\nCommon mobile banking features:\n• Transfer money: split bills with classmates, pay rent\n• Balance inquiry: check your balance anytime\n• Transaction history: view spending details\n• Foreign exchange: currency conversion online\n• Bill payment: utilities, internet, etc.\n\n💡 Security tips:\n• Don\'t use mobile banking on public WiFi\n• Never share your password or verification codes\n• Enable fingerprint/face ID login',
        ru: 'После получения карты загрузите приложение банка:\n\n1. Найдите банк в магазине приложений\n2. Установите и откройте\n3. «Регистрация» / «Мобильный банк»\n4. Номер карты, телефон, пароль\n5. SMS-код\n6. Готово\n\nФункции:\n• Переводы: оплата аренды, счета с друзьями\n• Баланс: проверка в любое время\n• История транзакций\n• Обмен валюты\n• Оплата счетов\n\n💡 Безопасность:\n• Не используйте публичный WiFi\n• Никому не сообщайте пароль и коды\n• Включите вход по отпечатку/лицу'
      }
    },
    {
      title: { zh: '绑定微信/支付宝', en: 'Link to WeChat/Alipay', ru: 'Привяжите к WeChat/Alipay' },
      desc: {
        zh: '银行卡到手后，立即绑定到微信和支付宝，开始无现金生活：\n\n绑定微信支付：\n1. 打开微信 →「我」→「服务」→「钱包」\n2. 点击「银行卡」→「添加银行卡」\n3. 输入银行卡号\n4. 输入银行预留手机号，获取验证码\n5. 设置支付密码\n6. 绑定成功！\n\n绑定支付宝：\n1. 打开支付宝 →「我的」→「银行卡」\n2. 点击「添加银行卡」\n3. 输入银行卡号\n4. 获取并输入短信验证码\n5. 设置支付密码\n6. 绑定成功！\n\n✅ 绑定后你就可以：\n• 扫码付款（超市、餐厅、便利店）\n• 线上购物（淘宝、京东、美团）\n• 打车付款（滴滴出行）\n• 外卖点餐（美团、饿了么）',
        en: 'Once you have your bank card, immediately link it to WeChat and Alipay for a cashless life:\n\nLink to WeChat Pay:\n1. Open WeChat → "Me" → "Services" → "Wallet"\n2. Tap "Bank Cards" → "Add Bank Card"\n3. Enter bank card number\n4. Enter phone number linked to bank, get verification code\n5. Set payment password\n6. Linked successfully!\n\nLink to Alipay:\n1. Open Alipay → "My" → "Bank Cards"\n2. Tap "Add Bank Card"\n3. Enter bank card number\n4. Get and enter SMS verification code\n5. Set payment password\n6. Linked successfully!\n\n✅ After linking, you can:\n• Scan to pay (supermarkets, restaurants, convenience stores)\n• Online shopping (Taobao, JD.com, Meituan)\n• Ride-hailing payments (DiDi)\n• Food delivery (Meituan, Ele.me)',
        ru: 'Получив карту, сразу привяжите к WeChat и Alipay:\n\nWeChat Pay:\n1. «Me» → «Services» → «Wallet» → «Bank Cards» → «Add»\n2. Номер карты → код подтверждения → пароль\n3. Готово!\n\nAlipay:\n1. «My» → «Bank Cards» → «Add»\n2. Номер карты → код → пароль\n3. Готово!\n\n✅ После привязки:\n• Оплата QR-кодом\n• Онлайн-покупки\n• Такси\n• Доставка еды'
      }
    }
  ],
  faq: [
    {
      q: { zh: '外国人开户需要多少钱？', en: 'How much does it cost for foreigners to open an account?', ru: 'Сколько стоит открыть счёт иностранцу?' },
      a: { zh: '开户本身免费。但通常需要存入少量现金激活账户（50-100元即可），这笔钱是你的，可以随时使用。部分银行可能要求最低存款额，但一般很低。', en: 'Opening an account is free. However, you usually need to deposit a small amount to activate (¥50-100 is enough) — this money is yours to use. Some banks may require a minimum deposit, but it\'s usually very low.', ru: 'Открытие счёта бесплатно. Обычно нужно внести небольшую сумму для активации (50-100 ¥) — эти деньги ваши. Некоторые банки требуют минимальный депозит, но он обычно очень низкий.' }
    },
    {
      q: { zh: '没有居留许可能开户吗？', en: 'Can I open an account without a residence permit?', ru: 'Можно ли открыть счёт без вида на жительство?' },
      a: { zh: '可以。持X1/X2签证（学习签证）+ 护照 + 录取通知书就可以开户。部分银行可能额外要求住宿登记表。如果持旅游签证（L签），大部分银行不接受开户。建议到学校报到后尽快办理。', en: 'Yes. With an X1/X2 visa (student visa) + passport + admission letter, you can open an account. Some banks may also require an accommodation registration form. Banks generally don\'t accept tourist visas (L visa) for account opening. It\'s best to do this after checking in at your school.', ru: 'Да. С визой X1/X2 + паспортом + письмом о зачислении. Некоторые банки требуют справку о регистрации проживания. Туристическая виза (L) обычно не принимается.' }
    },
    {
      q: { zh: '银行卡丢了或密码忘了怎么办？', en: 'What if I lose my card or forget my password?', ru: 'Что делать, если потерял карту или забыл пароль?' },
      a: { zh: '银行卡丢失：立即拨打银行客服挂失（中国银行95566，工商银行95588），然后带护照去网点补办新卡，一般当场可以拿到。密码忘记：带护照和银行卡到柜台重置密码，免费且当场完成。', en: 'Lost card: Call the bank hotline immediately to report loss (Bank of China: 95566, ICBC: 95588), then visit a branch with your passport to get a replacement — usually issued same day. Forgotten password: Visit a counter with passport and card to reset — free and immediate.', ru: 'Потеря карты: немедленно позвоните в банк (Bank of China: 95566, ICBC: 95588), затем посетите отделение с паспортом для замены — обычно в тот же день. Забытый пароль: посетите стойку с паспортом и картой — бесплатно и сразу.' }
    }
  ],
  nextGuides: ['register-dormitory', 'setup-wechat']
};
