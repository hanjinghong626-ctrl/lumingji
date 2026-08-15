// Guide: 地图导航使用
export default {
  id: 'navigation-apps',
  category: 'transport',
  icon: '🗺️',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: ["gaode-map"],
  prerequisites: [],
  tags: ["map", "navigation", "amap"],
  title: { zh: '地图导航使用', en: 'Map & Navigation Apps', ru: 'Навигация и карты' },
  summary: { zh: '高德/百度地图全面使用指南：导航、公交规划、周边搜索', en: 'Amap/Baidu Maps: navigation, transit planning, nearby search', ru: 'Amap/Baidu Maps: навигация, маршруты, поиск рядом' },
  intro: { zh: '在中国出行，地图App是必备工具。高德地图和百度地图功能强大，覆盖导航、公交、打车等。', en: 'Map apps are essential in China. Amap and Baidu Maps cover navigation, transit, ride-hailing, and more.', ru: 'Карточные приложения обязательны в Китае. Amap и Baidu Maps — навигация, транспорт, такси.' },
  preparation: { zh: ['高德地图或百度地图App'], en: ['Amap or Baidu Maps app'], ru: ['Приложение Amap или Baidu Maps'] },
  steps: [
    {
      title: { zh: '下载地图App', en: 'Download map apps', ru: 'Скачайте приложения карт' },
      desc: {
        zh: '在中国出行必备地图App。推荐「高德地图」（功能最全）或「百度地图」。在应用商店搜索下载。iPhone用户也可使用Apple Maps（在中国有英文界面，数据来自高德）。',
        en: 'Map apps are essential for getting around China. Recommended: Amap (most feature-rich) or Baidu Maps. Search and download from your app store. iPhone users can also use Apple Maps (has English UI in China, powered by Amap data).',
        ru: 'Приложения карт необходимы для передвижения по Китаю. Рекомендуется: Amap (наиболее функциональное) или Baidu Maps. Найдите и скачайте в магазине приложений. Пользователи iPhone также могут использовать Apple Maps (имеет английский интерфейс в Китае, данные от Amap).'
      }
,      tip: {
        zh: '高德地图虽有英文部分界面，但核心功能足够使用。也可配合翻译App使用。',
        en: 'Amap core functions work well even with limited English. You can also use translation apps alongside it.',
        ru: 'Основные функции Amap хорошо работают даже с ограниченным английским. Вы также можете использовать приложения перевода.'
      }
    },
    {
      title: { zh: '路线导航', en: 'Route navigation', ru: 'Навигация по маршруту' },
      desc: {
        zh: '打开高德地图，点击「路线」按钮，输入起点和终点。选择出行方式（驾车/步行/骑行/公交）。驾车模式支持实时路况避堵和语音导航。步行和骑行模式显示精确路线和预计时间。设置好目的地后点击「开始导航」即可。',
        en: 'Open Amap, tap the Route button, enter start and end points. Choose travel mode (driving/walking/cycling/transit). Driving mode supports real-time traffic avoidance and voice navigation. Walking and cycling modes show precise routes and estimated time. Set your destination and tap Start Navigation.',
        ru: 'Откройте Amap, нажмите кнопку Маршрут, введите начальную и конечную точки. Выберите режим путешествия (вождение/ходьба/велосипед/транспорт). Режим вождения поддерживает избежание пробок в реальном времени и голосовую навигацию. Режимы ходьбы и велосипеда показывают точные маршруты и расчётное время. Установите пункт назначения и нажмите Начать навигацию.'
      }
,      tip: {
        zh: '语音导航默认为中文，可在设置中检查是否有英文语音包。',
        en: 'Voice navigation defaults to Chinese — check settings for English voice pack availability.',
        ru: 'Голосовая навигация по умолчанию на китайском — проверьте настройки на наличие английского голосового пакета.'
      }
    },
    {
      title: { zh: '公交规划', en: 'Transit planning', ru: 'Планирование транспорта' },
      desc: {
        zh: '选择「公交」出行模式，输入目的地。系统推荐最优公交/地铁组合，显示：线路号、上下车站、换乘信息、预计用时、步行距离。还有「推荐」「少步行」「少换乘」等偏好选项。',
        en: 'Select Transit mode and enter your destination. The system recommends optimal bus/metro combinations showing: route number, boarding stop, transfer info, estimated time, walking distance. There are also preference options like Recommended, Less Walking, Less Transfers.',
        ru: 'Выберите режим Транзит и введите пункт назначения. Система рекомендует оптимальные комбинации автобус/метро, показывая: номер маршрута, остановку посадки, информацию о пересадке, расчётное время, расстояние ходьбы. Также есть параметры предпочтений: Рекомендуется, Меньше ходьбы, Меньше пересадок.'
      }
,      tip: {
        zh: '高德地图的实时公交功能可以显示下一班车还有几分钟到达，避免盲目等车。',
        en: 'Amap real-time bus feature shows minutes until the next bus arrives — no more blind waiting.',
        ru: 'Функция автобусов реального времени Amap показывает минуты до прибытия следующего автобуса — больше никакого слепого ожидания.'
      }
    },
    {
      title: { zh: '周边搜索', en: 'Nearby search', ru: 'Поиск поблизости' },
      desc: {
        zh: '点击首页「周边」或在搜索栏输入关键词（如「餐厅」「ATM」「药店」），地图会显示附近的搜索结果，附带评分、距离、营业时间等信息。点击结果可查看详情、导航前往或直接拨打电话。',
        en: 'Tap Nearby on the homepage or search keywords (like restaurant, ATM, pharmacy) in the search bar. The map shows nearby results with ratings, distance, business hours, and other info. Tap a result for details, navigation, or direct calling.',
        ru: 'Нажмите Рядом на главной странице или введите ключевые слова (ресторан, ATM, аптека) в строке поиска. Карта показывает ближайшие результаты с рейтингами, расстоянием, часами работы и другой информацией. Нажмите на результат для подробностей, навигации или прямого звонка.'
      }
,      tip: {
        zh: '搜索结果按评分排序通常更靠谱。注意看最新评论，有些高分可能是刷的。',
        en: 'Sort results by rating for more reliable choices. Check recent reviews — some high ratings may be fake.',
        ru: 'Сортируйте результаты по рейтингу для более надёжного выбора. Проверяйте последние отзывы — некоторые высокие рейтинги могут быть поддельными.'
      }
    }
  ],
  faq: [
    { q: { zh: '有英文界面的地图App吗？', en: 'Any map app with English UI?', ru: 'Есть ли карта на английском?' }, a: { zh: 'Apple Maps在中国有英文界面，数据来自高德，质量不错。iPhone用户可以优先使用。', en: 'Apple Maps has English UI in China, powered by Amap data. Good quality for iPhone users.', ru: 'Apple Maps в Китае имеет английский интерфейс на данных Amap. Хорошее качество для iPhone.' } },
  ],
  nextGuides: ['metro-guide', 'bus-guide', 'ride-hailing']
};