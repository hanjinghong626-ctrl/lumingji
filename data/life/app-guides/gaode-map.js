// 鹿鸣集 · 高德地图使用指南
// 版本：2026-08-09

export default {
  id: 'gaode-map',
  version: '2026-08-09',
  title: {
    zh: '高德地图使用指南',
    en: 'Amap (Gaode Maps) Guide',
    ru: 'Руководство по Amap (Gaode)'
  },
  desc: {
    zh: '在中国出行必备。导航精准度最高，公交/地铁/打车/骑行全覆盖，还有实时路况帮你避开拥堵。',
    en: 'Essential for getting around in China. Most accurate navigation with bus/metro/ride-hailing/bike coverage, plus real-time traffic to avoid congestion.',
    ru: 'Обязательно для передвижения по Китаю. Самая точная навигация, транспорт/метро/такси/велосипеды + пробки в реальном времени.'
  },
  downloads: {
    ios: 'https://apps.apple.com/app/id461703208',
    android_google: 'https://play.google.com/store/apps/details?id=com.autonavi.minimap',
    android_cn: 'https://www.amap.com/',
    note: {
      zh: '应用商店搜索"高德地图"下载。注意区分高德地图（导航App）和高德地图车机版。',
      en: 'Search "高德地图" in your app store. Make sure to get the regular version, not the car-head-unit version.',
      ru: 'Ищите "高德地图" в магазине приложений. Не перепутайте с версией для автомобилей.'
    }
  },
  setupSteps: [
    {
      title: {
        zh: '下载并允许权限',
        en: 'Download and Allow Permissions',
        ru: 'Установите и разрешите доступ'
      },
      desc: {
        zh: '下载安装后首次打开，App会请求"定位权限"和"通知权限"。请务必选择"始终允许"定位权限——这是导航的核心功能。通知权限也建议开启，用于导航语音提醒和到站提醒。',
        en: 'After installing, the app will request "Location" and "Notification" permissions. Be sure to select "Always Allow" for location — this is essential for navigation. Enable notifications too, for voice guidance and arrival alerts.',
        ru: 'После установки приложение запросит доступ к "Местоположению" и "Уведомлениям". Обязательно выберите "Всегда разрешать" для местоположения — это основа навигации. Уведомления тоже включите для голосовых подсказок.'
      },
      tip: {
        zh: '⚠️ 如果拒绝定位权限，地图将无法显示你的当前位置，导航也无法使用。',
        en: '⚠️ If you deny location permission, the map cannot show your position and navigation won\'t work.',
        ru: '⚠️ Если запретить доступ к местоположению, карта не покажет вашу позицию и навигация не будет работать.'
      }
    },
    {
      title: {
        zh: '搜索目的地',
        en: 'Search Destination',
        ru: 'Поиск места'
      },
      desc: {
        zh: '点击首页顶部搜索栏，输入目的地名称或地址。支持中文/英文搜索。例如输入"青岛大学"、"栈桥"、"星巴克 附近"。搜索结果会显示距离、评分、营业时间等信息。',
        en: 'Tap the search bar at the top, enter destination name or address. Supports Chinese and English search. E.g., "青岛大学", "栈桥", "星巴克 附近". Results show distance, rating, hours, etc.',
        ru: 'Нажмите на строку поиска вверху, введите название или адрес. Поддержка китайского и английского. Например, "青岛大学", "栈桥", "星巴克 附近". Результаты показывают расстояние, рейтинг, часы работы.'
      },
      tip: {
        zh: '💡 不知道确切地址？可以搜索类别，如"附近的餐厅"、"最近的ATM"、"药店"。也可以用语音搜索（点击搜索栏右侧的麦克风图标）。',
        en: '💡 Don\'t know the exact address? Search by category: "附近的餐厅" (nearby restaurants), "最近的ATM" (nearest ATM), "药店" (pharmacy). You can also use voice search (tap the mic icon next to the search bar).',
        ru: '💡 Не знаете точный адрес? Ищите по категории: "附近的餐厅" (рестораны рядом), "最近的ATM" (ближайший ATM), "药店" (аптека). Можно голосовой поиск (значок микрофона рядом с поиском).'
      }
    },
    {
      title: {
        zh: '选择出行方式并导航',
        en: 'Choose Transport Mode & Navigate',
        ru: 'Выбор транспорта и навигация'
      },
      desc: {
        zh: '搜索目的地后，点击"路线"按钮，顶部会出现出行方式选项：🚗驾车 | 🚌公交/地铁 | 🚶步行 | 🚲骑行 | 🚕打车。选择出行方式后，系统会推荐最优路线（可能有多条备选）。点击"导航"或"开始"开始实时导航。',
        en: 'After searching, tap "Route" button. Transport options appear at top: 🚗Driving | 🚌Transit | 🚶Walking | 🚲Cycling | 🚕Ride-hailing. Select a mode, and the system recommends the best route (alternatives available). Tap "Navigate" or "Start" for real-time navigation.',
        ru: 'После поиска нажмите "Маршрут". Вверху появятся варианты: 🚗Авто | 🚌Транспорт | 🚶Пешком | 🚲Велосипед | 🚕Такси. Выберите режим, система предложит лучший маршрут. Нажмите "Навигация" или "Старт".'
      },
      tip: {
        zh: '公交模式会显示发车时间、到站倒计时、换乘方案，还能开启"到站提醒"——快到你目的地时手机会震动提醒，不怕坐过站。',
        en: 'Transit mode shows departure times, countdown to arrival, transfer routes, and you can enable "stop alert" — your phone vibrates when approaching your stop, so you never miss it.',
        ru: 'В режиме транспорта видно время отправления, обратный отсчёт до станции, маршруты пересадок. Можно включить "уведомление об остановке" — телефон вибрирует перед вашей остановкой.'
      }
    },
    {
      title: {
        zh: '使用打车功能',
        en: 'Use Ride-Hailing Feature',
        ru: 'Вызов такси'
      },
      desc: {
        zh: '在高德地图中选择"打车"选项，输入起点和终点（默认起点为当前位置），系统会同时呼叫多家网约车平台（滴滴、曹操、T3等），显示预估价格和等待时间。确认后等待司机接单，可实时查看车辆位置。到达后通过App内支付。',
        en: 'Select "Ride" option in Amap, enter start and end points (start defaults to current location). The system simultaneously calls multiple ride-hailing platforms (DiDi, Cao Cao, T3, etc.), showing estimated price and wait time. After confirming, wait for driver acceptance and track the car in real time. Pay in-app after arrival.',
        ru: 'Выберите "Такси", введите начальную и конечную точки (начало — текущее местоположение). Система одновременно отправляет запрос в несколько сервисов (DiDi, Cao Cao, T3 и др.), показывая цену и время ожидания. После подтверждения отслеживайте машину. Оплата через приложение.'
      },
      tip: {
        zh: '💡 高德打车的好处是可以同时呼叫多个平台，比单独用滴滴更容易叫到车。价格也会横向比较。',
        en: '💡 Advantage of Amap ride-hailing: it calls multiple platforms simultaneously, increasing your chances of getting a ride. Prices are compared across platforms too.',
        ru: '💡 Преимущество такси через Amap: одновременный вызов нескольких платформ, выше шанс найти машину. Цены тоже сравниваются.'
      }
    },
    {
      title: {
        zh: '离线地图（节省流量）',
        en: 'Offline Maps (Save Data)',
        ru: 'Офлайн-карты (экономия трафика)'
      },
      desc: {
        zh: '如果流量有限，可以下载离线地图：点击"我的" → "离线地图" → 选择你要去的城市下载。下载后在无网络环境下也能查看地图和导航（但实时路况、公交信息需要网络）。建议至少下载你所在城市的离线地图。',
        en: 'If data is limited, download offline maps: tap "My" → "Offline Maps" → select and download your city. After downloading, maps and navigation work without internet (but real-time traffic and transit info need network). At minimum, download your city\'s offline map.',
        ru: 'Если трафик ограничен, скачайте офлайн-карты: "Мой" → "Офлайн-карты" → выберите город. После загрузки карты и навигация работают без интернета (но пробки и транспорт требуют сеть). Скачайте как минимум карту своего города.'
      },
      tip: {
        zh: '⚠️ 离线地图文件较大（一个城市约100-500MB），建议在WiFi环境下下载。',
        en: '⚠️ Offline map files are large (100-500MB per city) — download over WiFi.',
        ru: '⚠️ Файлы большие (100-500МБ на город) — скачивайте через WiFi.'
      }
    }
  ],
  coreFeatures: [
    {
      icon: '🗺️',
      title: { zh: '精准导航', en: 'Precise Navigation', ru: 'Точная навигация' },
      desc: { zh: '驾车、步行、骑行实时导航，语音播报', en: 'Real-time voice-guided navigation for driving, walking, cycling', ru: 'Голосовая навигация в реальном времени' }
    },
    {
      icon: '🚌',
      title: { zh: '公交地铁', en: 'Bus & Metro', ru: 'Автобусы и метро' },
      desc: { zh: '实时公交到站、换乘方案、到站提醒', en: 'Real-time bus arrival, transfer plans, stop alerts', ru: 'Время прибытия автобусов, пересадки, уведомления' }
    },
    {
      icon: '🚕',
      title: { zh: '聚合打车', en: 'Ride-Hailing Hub', ru: 'Вызов такси' },
      desc: { zh: '同时呼叫滴滴、曹操、T3等多平台', en: 'Call DiDi, Cao Cao, T3 and more simultaneously', ru: 'Одновременный вызов DiDi, Cao Cao, T3 и др.' }
    },
    {
      icon: '🚲',
      title: { zh: '骑行导航', en: 'Cycling Navigation', ru: 'Велонавигация' },
      desc: { zh: '共享单车扫码+骑行路线导航', en: 'Bike sharing QR scan + cycling route navigation', ru: 'QR шеринг-велосипедов + маршруты' }
    },
    {
      icon: '🔍',
      title: { zh: '周边搜索', en: 'Nearby Search', ru: 'Поиск рядом' },
      desc: { zh: '餐厅、ATM、药店、超市等一键搜索', en: 'One-tap search for restaurants, ATMs, pharmacies, supermarkets', ru: 'Поиск ресторанов, ATM, аптек, магазинов в один клик' }
    },
    {
      icon: '🌐',
      title: { zh: '离线地图', en: 'Offline Maps', ru: 'Офлайн-карты' },
      desc: { zh: '下载城市地图包，无网络也能导航', en: 'Download city map packs for offline navigation', ru: 'Скачайте карты города для навигации без сети' }
    }
  ],
  tips: [
    {
      title: { zh: '收藏常用地点', en: 'Save Frequent Places', ru: 'Сохранение мест' },
      content: {
        zh: '长按地图上的地点或搜索结果中的地点 → "收藏"。也可以设置"家"和"公司/学校"地址，导航时一键到达。',
        en: 'Long-press a point on the map or in search results → "Save". You can also set "Home" and "Work/School" addresses for one-tap navigation.',
        ru: 'Зажмите точку на карте или в поиске → "Сохранить". Можно задать адреса "Дом" и "Работа/Университет" для навигации в один клик.'
      }
    },
    {
      title: { zh: '实时路况颜色含义', en: 'Traffic Color Codes', ru: 'Цвета пробок' },
      content: {
        zh: '绿色=畅通，黄色=缓行，红色=拥堵，深红=严重拥堵。导航会自动帮你绕开拥堵路段。如果看到路线变红，说明前方堵车。',
        en: 'Green=smooth, yellow=slow, red=congested, dark red=severe congestion. Navigation auto-reroutes around jams. If your route turns red, expect delays ahead.',
        ru: 'Зелёный=свободно, жёлтый=медленно, красный=пробка, тёмно-красный=сильная пробка. Навигация автоматически объезжает пробки.'
      }
    },
    {
      title: { zh: '室内地图', en: 'Indoor Maps', ru: 'Карты помещений' },
      content: {
        zh: '大型商场、火车站、机场等支持室内地图——进入建筑后自动切换室内视图，显示楼层、店铺位置、洗手间等。找路时非常有用。',
        en: 'Major malls, train stations, airports support indoor maps — automatically switches to indoor view inside buildings, showing floors, shops, restrooms. Very useful for finding your way around.',
        ru: 'Крупные ТЦ, вокзалы, аэропорты поддерживают планы этажей — автоматическое переключение внутри зданий, показ магазинов, туалетов. Очень полезно.'
      }
    }
  ],
  faq: [
    {
      q: { zh: '高德地图支持英文界面吗？', en: 'Does Amap support English interface?', ru: 'Поддерживает ли Amap английский интерфейс?' },
      a: {
        zh: '目前高德地图App没有完整的英文界面，但搜索框支持输入英文地名（如"Tsingtao University"），导航语音提示为中文。建议：记住常去地点的中文名称，或提前截图保存。也可以配合翻译App使用。',
        en: 'Currently Amap doesn\'t have a full English interface, but the search bar accepts English place names (e.g., "Tsingtao University"). Navigation voice prompts are in Chinese. Tip: memorize Chinese names of places you visit often, or screenshot them. You can also use a translation app alongside.',
        ru: 'Полного английского интерфейса нет, но поиск принимает английские названия (например, "Tsingtao University"). Голосовые подсказки на китайском. Совет: запомните китайские названия частых мест или сохраняйте скриншоты. Можно использовать переводчик.'
      }
    },
    {
      q: { zh: '没有网络能用高德地图吗？', en: 'Can I use Amap without internet?', ru: 'Можно ли использовать Amap без интернета?' },
      a: {
        zh: '提前下载离线地图后，基础的地图浏览和导航可以在无网络环境下使用。但实时路况、公交到站时间、打车功能等都需要网络连接。建议：在WiFi环境下提前下载好离线地图。',
        en: 'After downloading offline maps, basic map browsing and navigation work offline. But real-time traffic, transit times, and ride-hailing require internet. Tip: download offline maps over WiFi before heading out.',
        ru: 'После скачивания офлайн-карт базовый просмотр и навигация работают без сети. Но пробки, время транспорта и такси требуют интернет. Совет: скачайте карты по WiFi перед выходом.'
      }
    },
    {
      q: { zh: '导航语音太吵怎么关？', en: 'How to turn off navigation voice?', ru: 'Как отключить голос навигации?' },
      a: {
        zh: '导航过程中，点击屏幕右下角的"喇叭"图标可以静音/取消静音。也可以在"设置 → 导航设置"中关闭语音播报，只保留视觉提示。',
        en: 'During navigation, tap the "speaker" icon at the bottom-right to mute/unmute. Or go to "Settings → Navigation Settings" to turn off voice prompts entirely, keeping only visual cues.',
        ru: 'Во время навигации нажмите значок "динамика" внизу справа для выключения звука. Или "Настройки → Навигация" — отключить голосовые подсказки полностью.'
      }
    }
  ],
  relatedGuides: ['airport-to-city', 'first-week-checklist']
};
