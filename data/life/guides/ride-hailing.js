// Guide: 打车（滴滴）完全指南
export default {
  id: 'ride-hailing',
  category: 'transport',
  icon: '🚗',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: ["didi"],
  prerequisites: [],
  tags: ["didi", "taxi", "ride-hailing"],
  title: { zh: '打车（滴滴）完全指南', en: 'Ride-hailing (Didi) Complete Guide', ru: 'Полный гид по такси (Didi)' },
  summary: { zh: '滴滴打车全流程：叫车、选车型、安全功能、费用计算', en: 'Didi ride-hailing: ordering, car types, safety features, pricing', ru: 'Didi: заказ, типы авто, безопасность, цены' },
  intro: { zh: '滴滴是中国最大的网约车平台，类似Uber。通过App即可叫车，非常方便。', en: 'Didi is China\'s largest ride-hailing platform, similar to Uber. Order via app — very convenient.', ru: 'Didi — крупнейшая платформа такси в Китае, аналог Uber.' },
  preparation: { zh: ['滴滴App或支付宝中的滴滴小程序', '支付方式已设置'], en: ['Didi app or Didi mini-program in Alipay', 'Payment set up'], ru: ['Приложение Didi или мини-программа в Alipay', 'Оплата настроена'] },
  steps: [
    {
      title: { zh: '打开打车App', en: 'Open the ride-hailing app', ru: 'Откройте приложение вызова такси' },
      desc: {
        zh: '推荐使用「高德地图」内集成的打车功能（可比较多家网约车价格）或直接下载「滴滴出行」App。也可以用支付宝搜索「滴滴出行」小程序，无需额外下载。',
        en: 'Recommended: use the ride-hailing feature built into Amap — it compares prices across multiple platforms. Or download DiDi directly. You can also search DiDi in Alipay mini-programs.',
        ru: 'Рекомендуется: используйте функцию вызова такси в Amap — она сравнивает цены на нескольких платформах. Или скачайте DiDi. Также можно найти DiDi в мини-программах Alipay.'
      }
,      tip: {
        zh: '高德打车能同时呼叫多个平台的车，接单更快。',
        en: 'Amap ride-hailing can call cars from multiple platforms simultaneously for faster pickup.',
        ru: 'Вызов через Amap может одновременно заказывать машины с нескольких платформ.'
      }
    },
    {
      title: { zh: '输入起点与终点', en: 'Enter pickup and destination', ru: 'Введите точку подачи и назначения' },
      desc: {
        zh: '系统会自动定位你的当前位置作为上车点（可手动调整）。在终点栏输入目的地地址（支持中文/拼音搜索）。确认上下车地点后，系统会显示预估价格和预计到达时间。',
        en: 'The app auto-detects your location as pickup point (adjustable manually). Enter destination address (Chinese/pinyin search supported). After confirming locations, the app shows estimated price and arrival time.',
        ru: 'Приложение автоматически определяет ваше местоположение (можно скорректировать). Введите адрес назначения (поддерживается поиск на китайском/пиньинь). После подтверждения приложение покажет примерную стоимость и время прибытия.'
      }
,      tip: {
        zh: '地址搜索用中文更准确，可以先复制目的地中文名粘贴进去。',
        en: 'Chinese addresses are more accurate — copy and paste the Chinese name of your destination if possible.',
        ru: 'Китайские адреса точнее — по возможности скопируйте китайское название места назначения.'
      }
    },
    {
      title: { zh: '选择车型与呼叫', en: 'Choose car type and request', ru: 'Выберите тип и вызовите' },
      desc: {
        zh: '可选择：经济型（最便宜，等待稍久）、舒适型（车况好，价格适中）、豪华型。深夜或偏远地区可选「拼车」提高接单率。点击「呼叫」等待司机接单。',
        en: 'Options: Economy (cheapest, slightly longer wait), Comfort (better car, moderate price), Premium. Late at night or remote areas, choose carpool for higher acceptance rate. Tap Request and wait for driver.',
        ru: 'Варианты: Эконом (дешевле, дольше ждать), Комфорт (лучше машина, умеренная цена), Премиум. Поздно вечером или вдали выберите карпул. Нажмите «Вызов» и ждите.'
      }
    },
    {
      title: { zh: '确认司机信息与安全出行', en: 'Confirm driver and travel safely', ru: 'Подтвердите данные и безопасная поездка' },
      desc: {
        zh: '司机接单后，查看车牌号、车型和司机评分，确认与到达车辆一致。上车前核对车牌号，上车后分享行程给亲友。行程中可在App内查看实时路线。',
        en: 'After driver accepts, check license plate, car model, and driver rating. Verify the plate matches on arrival. Share your trip with friends via the app. Track the real-time route during the ride.',
        ru: 'После принятия проверьте номер, модель и рейтинг водителя. Убедитесь, что номер совпадает. Поделитесь поездкой с друзьями. Во время поездки отслеживайте маршрут.'
      }
,      tip: {
        zh: '夜间出行建议使用App内的「行程分享」功能，让朋友实时看到你的位置。',
        en: 'For night rides, use Trip Share so a friend can track your location in real time.',
        ru: 'Для ночных поездок используйте «Поделиться поездкой» для отслеживания местоположения.'
      }
    }
  ],
  faq: [
    { q: { zh: '深夜打车安全吗？', en: 'Is late-night ride safe?', ru: 'Безопасно ли такси ночью?' }, a: { zh: '滴滴有完善的安全功能：全程录音、行程分享、一键报警。建议夜间使用专车或优享车型，上车后将行程分享给朋友。', en: 'Didi has robust safety features: full recording, trip sharing, SOS. At night, use Premier or higher tier, share trip with friends.', ru: 'Didi имеет защиту: запись, paylaş, SOS. Ночью используйте Premier, поделитесь поездкой.' } },
  ],
  nextGuides: ['metro-guide', 'bus-guide', 'bike-sharing']
};