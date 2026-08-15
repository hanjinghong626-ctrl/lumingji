// Guide: 城际出行规划
export default {
  id: 'intercity-travel',
  category: 'transport',
  icon: '🗺️',
  type: 'guide',
  difficulty: 2,
  estimatedTime: 15,
  apps: ["ctrip"],
  prerequisites: [],
  tags: ["intercity", "travel", "planning"],
  title: { zh: '城际出行规划', en: 'Intercity Travel Planning', ru: 'Междугородние поездки' },
  summary: { zh: '高铁/飞机/大巴对比与城际出行最优方案', en: 'Compare train/plane/bus for intercity travel and find optimal routes', ru: 'Сравнение поезда/самолёта/автобуса для междугородних поездок' },
  intro: { zh: '中国城市间出行选择丰富：高铁、飞机、长途大巴各有优势。本指南帮你选择最优方案。', en: 'China offers rich intercity options: trains, flights, and long-distance buses each have advantages.', ru: 'Богатый выбор: поезда, самолёты, автобусы — у каждого свои преимущества.' },
  preparation: { zh: ['携程或12306 App', '确定目的地和预算'], en: ['Ctrip or 12306 app', 'Destination and budget decided'], ru: ['Ctrip или 12306', 'Цель и бюджет'] },
  steps: [
    {
      title: { zh: '选择交通方式', en: 'Choose transportation', ru: 'Выбор транспорта' },
      desc: {
        zh: '中国城市间交通主要有：①高铁（推荐，最快最方便，时速300-350km）；②普通火车（K/T/Z字头，便宜但慢）；③飞机（远距离首选，提前订票便宜）；④长途大巴（短途无高铁时选择）；⑤自驾/顺风车（滴滴顺风车）。留学生最常用高铁和飞机。',
        en: 'Major intercity options in China: ① High-speed rail (recommended, fastest, 300-350 km/h); ② Regular trains (K/T/Z-prefix, cheap but slower); ③ Flights (best for long distances, book early for cheap fares); ④ Long-distance buses (when no HSR available); ⑤ Self-driving/carpooling (Didi hitchhike). Students most commonly use HSR and flights.',
        ru: 'Основные варианты междугороднего транспорта: ① Скоростной поезд (рекомендуется, 300-350 км/ч); ② Обычные поезда (K/T/Z, дёшево, но медленнее); ③ Самолёты (для дальних расстояний); ④ Дальние автобусы (при отсутствии скоростных); ⑤ Попутки (Didi). Студенты чаще используют скоростные поезда и самолёты.'
      }
    },
    {
      title: { zh: '购买高铁/火车票', en: 'Buy HSR/train tickets', ru: 'Покупка билетов на скоростной поезд' },
      desc: {
        zh: '使用12306官方App（铁路唯一官方购票渠道）或携程/Trip.com购买。提前15天可以购买车票。高铁二等座约0.4-0.5元/公里（如北京→上海约553元，4.5小时）。持护照在车站人工窗口取票（部分车站支持护照自助取票）。',
        en: 'Use the official 12306 app (China Railway\'s only official ticket channel) or Trip.com. Tickets available 15 days in advance. HSR second class ~¥0.4-0.5/km (e.g., Beijing→Shanghai ~¥553, 4.5 hours). Pick up tickets at manual counters with passport (some stations support passport self-service).',
        ru: 'Используйте официальное приложение 12306 (единственный канал China Railway) или Trip.com. Билеты за 15 дней. Второй класс ~¥0,4-0,5/км (Пекин→Шанхай ~¥553, 4,5 часа). Получите билеты в кассах с паспортом.'
      }
,      tip: {
        zh: '春运（春节前后约40天）和国庆假期（10月1-7日）期间车票非常紧张，建议提前抢票。学生证可以购买学生票（二等座7.5折）。',
        en: 'During Spring Festival travel (~40 days around CNY) and National Day holiday (Oct 1-7), tickets are very competitive — book early. Student ID allows student tickets (25% off second class).',
        ru: 'Во время весеннего фестиваля и Национального дня билеты раскупают быстро — бронируйте заранее. Студенческий билет даёт скидку 25% на второй класс.'
      }
    },
    {
      title: { zh: '乘坐高铁的流程', en: 'HSR travel process', ru: 'Процесс поездки на скоростном поезде' },
      desc: {
        zh: '出发当天提前45分钟到火车站。流程：①进站安检（护照+车票信息）；②找到对应候车厅（看大屏幕上的车次信息）；③检票上车（刷护照或身份证通过闸机）；④找到座位号（车票上的车厢号+座位号）。车上可以购买餐食，但建议自带零食和水。',
        en: 'Arrive at the station 45 minutes early. Process: ① Security check (passport + ticket info); ② Find waiting hall (check screens for train info); ③ Board (scan passport/ID at gate); ④ Find seat number (car number + seat on ticket). Food available on board, but bring snacks and water.',
        ru: 'Приезжайте на вокзал за 45 минут. Процесс: ① Досмотр (паспорт + билет); ② Зал ожидания (смотрите табло); ③ Посадка (сканирование паспорта); ④ Найдите место (номер вагона + места). Еда на борту, но лучше взять снеки.'
      }
,      tip: {
        zh: '高铁上WiFi信号不稳定（尤其在隧道中），建议提前下载好电影或电子书。每节车厢两端有卫生间，二等座充电口在座位下方。',
        en: 'WiFi on HSR is unstable (especially in tunnels) — download movies/ebooks in advance. Restrooms at both ends of each car; second class charging outlets under seats.',
        ru: 'WiFi в поезде нестабильный (особенно в тоннелях) — скачайте фильмы заранее. Туалеты в обоих концах вагонов; розетки для зарядки под сиденьями второго класса.'
      }
    },
    {
      title: { zh: '到达和出站', en: 'Arrival and exit', ru: 'Прибытие и выход' },
      desc: {
        zh: '到站后跟随"出站"标识走到出站口。刷护照或身份证出站。出站后可以乘坐地铁、公交、出租车或网约车前往最终目的地。大城市的火车站通常与地铁站直接连通。打车时建议使用滴滴App（避免被出租车宰客）。',
        en: 'Follow "出站" (exit) signs to the exit gate. Scan passport/ID to exit. After exiting, take metro, bus, taxi, or ride-hailing to your final destination. Major city train stations usually connect directly to metro. Use Didi app for rides (avoid taxi scams).',
        ru: 'Следуйте указателям "出站" к выходу. Сканируйте паспорт для выхода. После выхода — метро, автобус, такси или райд-хейлинг. Крупные вокзалы связаны с метро. Используйте Didi (избегайте мошенников-таксистов).'
      }
,      tip: {
        zh: '如果是到陌生城市旅游，建议提前在高德/百度地图上查好从火车站到酒店的路线。晚上到达时注意安全，尽量选择正规出租车或网约车。',
        en: 'If visiting an unfamiliar city, plan your route from the station to your hotel on Amap/Baidu Maps in advance. For late arrivals, stick to official taxis or ride-hailing for safety.',
        ru: 'Если едете в незнакомый город, заранее спланируйте маршрут на Amap/Baidu Maps. При позднем прибытии используйте официальные такси или Didi.'
      }
    }
  ],
  faq: [
    { q: { zh: '怎么规划多城市行程？', en: 'How to plan multi-city trips?', ru: 'Как спланировать маршрут по нескольким городам?' }, a: { zh: '携程有「行程」功能，可添加多个目的地，自动规划路线。也可用高德地图的「路线规划」查看各段距离和时间。', en: 'Ctrip has a "trip" feature for multi-city planning. Amap also shows distances and times between segments.', ru: 'Ctrip имеет функцию маршрута для нескольких городов. Amap показывает расстояния.' } },
  ],
  nextGuides: ['train-ticket', 'flight-booking', 'travel-planning']
};