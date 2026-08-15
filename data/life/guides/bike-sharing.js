// Guide: 共享单车使用
export default {
  id: 'bike-sharing',
  category: 'transport',
  icon: '🚲',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 5,
  apps: [],
  prerequisites: [],
  tags: ["bike", "sharing", "hellobike"],
  title: { zh: '共享单车使用', en: 'Shared Bike Guide', ru: 'Велосипеды sharing' },
  summary: { zh: '美团/哈啰/青桔共享单车扫码骑行全流程', en: 'Scan and ride Meituan/Hello/Clean shared bikes', ru: 'Сканирование и поездка на велосипедах Meituan/Hello/Clean' },
  intro: { zh: '共享单车遍布中国城市街头，扫码即骑，短途出行首选。', en: 'Shared bikes are everywhere in Chinese cities. Scan to ride — best for short trips.', ru: 'Шеринговые велосипеды по всему городу. Сканируйте и езжайте.' },
  preparation: { zh: ['支付宝或微信（扫码开锁）'], en: ['Alipay or WeChat (scan to unlock)'], ru: ['Alipay или WeChat (сканирование)'] },
  steps: [
    {
      title: { zh: '选择共享单车平台', en: 'Choose a shared bike platform', ru: 'Выбор платформы велопроката' },
      desc: {
        zh: '中国主要有三大共享单车品牌：美团单车（黄色，原摩拜）、哈啰单车（蓝色）、青桔单车（绿色，滴滴旗下）。月卡价格约15-25元/月（不限次）。建议先下载1-2个App比较学校附近的车辆密度。部分学校校园内禁止共享单车进入。',
        en: 'China has three major shared bike brands: Meituan Bike (yellow, formerly Mobike), Hellobike (blue), and Qingju (green, by Didi). Monthly pass ~¥15-25/month (unlimited rides). Download 1-2 apps to compare bike availability near your school. Some campuses ban shared bikes inside.',
        ru: 'В Китае три основных бренда: Meituan Bike (жёлтый, бывш. Mobike), Hellobike (синий) и Qingju (зелёный, от Didi). Месячный абонемент ~¥15-25/мес. (безлимит). Скачайте 1-2 приложения для сравнения доступности велосипедов. В некоторых кампусах велопрокат запрещён.'
      }
    },
    {
      title: { zh: '扫码骑行', en: 'Scan and ride', ru: 'Сканирование и поездка' },
      desc: {
        zh: '打开对应App（支付宝内也能直接扫哈啰单车），点击"扫码开锁"，扫描车座下方或车把上的二维码。听到"咔嗒"声即表示锁已打开。骑行时请遵守交通规则，在非机动车道骑行，不要载人。',
        en: 'Open the app (you can also scan Hellobike directly within Alipay), tap "Scan to unlock", and scan the QR code under the seat or on the handlebar. A click sound means the lock is open. Follow traffic rules — ride in the non-motorized lane, no passengers.',
        ru: 'Откройте приложение (Hellobike можно сканировать прямо в Alipay), нажмите "Сканировать", QR-код под сиденьем или на руле. Щелчок — замок открыт. Соблюдайте ПДД — ездите по полосе для немоторного транспорта, без пассажиров.'
      }
,      tip: {
        zh: '骑行前检查一下刹车、轮胎和车座是否正常。如果发现问题，直接锁车离开不收费（15分钟内取消订单）。',
        en: 'Check brakes, tires, and seat before riding. If issues found, lock and leave without charge (cancel within 15 minutes).',
        ru: 'Перед поездкой проверьте тормоза, шины и сиденье. При проблемах — заблокируйте и уходите без оплаты (отмена в течение 15 минут).'
      }
    },
    {
      title: { zh: '还车和计费', en: 'Return and billing', ru: 'Возврат и оплата' },
      desc: {
        zh: '到达目的地后，将车停在划线的"非机动车停放区"（白线框内）。在App中点击"还车"或手动拉下后轮锁。计费标准：普通骑行约1.5元/15分钟，月卡用户免费。如果停在非停车区域，会被加收调度费（5-20元不等）。',
        en: 'After arriving, park in marked "non-motorized vehicle parking zones" (white-line boxes). Tap "Return" in the app or manually pull down the rear wheel lock. Pricing: ~¥1.5/15 minutes for regular users, free for monthly pass holders. Parking outside designated zones incurs a relocation fee (¥5-20).',
        ru: 'По прибытии припаркуйте в обозначенных зонах (белые линии). Нажмите "Вернуть" в приложении или опустите задний замок. Тариф: ~¥1,5/15 мин для обычных, бесплатно по абонементу. Парковка вне зон — штраф за перемещение (¥5-20).'
      }
,      tip: {
        zh: '注意：很多城市对共享单车停放有严格要求。违规停放不仅罚款，还可能影响个人信用。务必停在指定区域。',
        en: 'Note: Many cities have strict shared bike parking rules. Illegal parking may result in fines and affect your credit score. Always park in designated areas.',
        ru: 'Примечание: во многих городах строгие правила парковки велопроката. Нарушение грозит штрафом и влиянием на кредитный рейтинг. Паркуйтесь только в отведённых местах.'
      }
    }
  ],
  faq: [
    { q: { zh: '可以骑到路边锁车就走吗？', en: 'Can I just lock and leave anywhere?', ru: 'Можно заблокировать и оставить где угодно?' }, a: { zh: '不行。必须停放在指定停车区域（白线框内），否则会被收取调度费（5-20元）。', en: 'No. Must park in designated areas (white marked zones), or face a repositioning fee (¥5-20).', ru: 'Нет. Только в размеченных зонах, иначе штраф 5-20 ¥.' } },
  ],
  nextGuides: ['metro-guide', 'bus-guide', 'transport-card']
};