// Guide: 公交车乘坐指南
export default {
  id: 'bus-guide',
  category: 'transport',
  icon: '🚌',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["bus", "transport"],
  title: { zh: '公交车乘坐指南', en: 'Bus Guide', ru: 'Пользование автобусом' },
  summary: { zh: '公交乘坐流程：查线路、上车刷卡/扫码、下车', en: 'Bus riding: check routes, board and pay, alight', ru: 'Автобус: маршруты, оплата, выход' },
  intro: { zh: '公交是中国最普及的公共交通，覆盖地铁不到的区域。票价通常1-2元，非常经济。', en: 'Buses are the most widespread public transport in China, covering areas beyond metro. Tickets usually ¥1-2.', ru: 'Автобусы — самый распространённый транспорт, покрывает зоны без метро. Билет 1-2 ¥.' },
  preparation: { zh: ['交通卡或手机支付'], en: ['Transit card or mobile payment'], ru: ['Транспортная карта или мобильная оплата'] },
  steps: [
    {
      title: { zh: '查询公交路线', en: 'Look up bus routes', ru: 'Поиск автобусных маршрутов' },
      desc: {
        zh: '打开高德地图或百度地图，输入目的地，选择「公交」出行模式。系统会推荐最优路线，显示：公交线路号、上车站点、换乘站、预计到达时间。也可在公交站牌上查看经过该站的所有线路。',
        en: 'Open Amap or Baidu Maps, enter destination, select bus mode. The app recommends the best route showing: bus number, boarding stop, transfer stops, estimated arrival time. You can also check all routes at the physical signboard.',
        ru: 'Откройте Amap или Baidu Maps, введите место назначения, выберите режим автобуса. Приложение покажет номер маршрута, остановку, пересадки и время прибытия. Также можно посмотреть на табличке остановки.'
      }
,      tip: {
        zh: '高德地图的实时公交功能可以显示下一班车还有几分钟到，非常实用。',
        en: 'Amap real-time bus feature shows minutes until next bus arrives — very handy.',
        ru: 'Функция автобусов реального времени Amap показывает, через сколько минут придёт следующий автобус.'
      }
    },
    {
      title: { zh: '到站等候与上车', en: 'Wait at the stop and board', ru: 'Дождитесь на остановке и садитесь' },
      desc: {
        zh: '提前到站点等候，注意看公交站牌确认是你要的线路方向（同一路公交车可能有两个方向）。公交车到站后招手示意。上车时刷卡（交通卡）或扫码（支付宝/微信乘车码）。',
        en: 'Arrive at the stop early and check the signboard to confirm the correct direction (same bus number may go two directions). Wave to signal the bus. Board by tapping transit card or scanning QR code (Alipay/WeChat ride code).',
        ru: 'Придите заранее и проверьте табличку для подтверждения направления (один номер может идти в двух направлениях). Когда автобус прибудет, машите рукой. Садитесь, приложив карту или отсканировав QR-код.'
      }
,      tip: {
        zh: '部分城市需要上车刷一次、下车再刷一次，注意车内提示。',
        en: 'Some cities require tapping on AND off the bus — watch for in-bus reminders.',
        ru: 'В некоторых городах нужно прикладывать карту и при входе, и при выходе.'
      }
    },
    {
      title: { zh: '乘车与下车', en: 'Ride and exit', ru: 'Поездка и выход' },
      desc: {
        zh: '上车后扶好扶手，注意听报站广播或在地图上跟踪位置。快到目的站时提前移到后门等候。到站后按下车门旁的开门按钮（部分城市需按铃提醒司机开门）。下车时再次刷卡/扫码。',
        en: 'Hold the handrail after boarding. Listen for stop announcements or track your location on the map. Move to the rear door as you approach your stop. Press the door-open button near exit. Tap out when exiting.',
        ru: 'Держитесь за поручень. Слушайте объявления или отслеживайте на карте. Переместитесь к задней двери. Нажмите кнопку открытия двери. При выходе приложите карту.'
      }
,      tip: {
        zh: '错过站不要慌，下一站换乘对面方向回来即可。',
        en: 'If you miss your stop, just transfer to the opposite direction at the next stop.',
        ru: 'Если пропустили остановку, пересадите на противоположное направление на следующей.'
      }
    }
  ],
  faq: [
    { q: { zh: '公交车有英文报站吗？', en: 'Do buses announce stops in English?', ru: 'Есть ли объявления остановок на английском?' }, a: { zh: '大城市主要线路有中英双语报站，但不是所有线路都有。建议用地图App跟踪位置，到站前准备下车。', en: 'Major city routes have bilingual announcements, but not all. Use map apps to track your location.', ru: 'В крупных городах — двуязычные объявления, но не на всех маршрутах. Отслеживайте через карты.' } },
  ],
  nextGuides: ['metro-guide', 'transport-card', 'bike-sharing']
};