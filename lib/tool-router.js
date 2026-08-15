/**
 * 意图检测与工具路由
 * 分析用户消息，判断需要调用哪些工具获取真实数据
 */

// 路线/交通问题关键词（排除纯价格查询）
const ROUTE_PATTERNS = [
  /怎么走/, /怎么去/, /怎么到/, /怎么坐/,
  /到.{2,20}(怎么走|怎么去|怎么到)/,
  /从.{2,20}到.{2,20}/,
  /路线/, /导航/,
  /最近的/, /附近有/, /周边有/,
];

// POI/周边搜索关键词
const POI_PATTERNS = [
  /附近.*(超市|餐厅|饭店|医院|银行|ATM|药店|学校|公园|商场|餐厅|美食|咖啡)/,
  /哪里有.*(超市|餐厅|饭店|医院|银行|ATM|药店|学校|公园|商场|餐厅|美食|咖啡)/,
  /周围.*(有|是)/,
  /推荐.*(餐厅|饭店|美食|咖啡|奶茶)/,
  /好吃的/, /好玩的/,
];

// 物价/生活费查询关键词
const PRICE_PATTERNS = [
  /多少钱/, /价格/, /费用/, /花费/, /物价/, /生活费/,
  /贵不贵/, /便宜/, /大概.*钱/, /大概.*元/,
  /一个月.*花/, /每月.*花/, /月.*开销/, /月.*费用/,
  /学费/, /住宿费/, /房租/, /餐费/, /伙食费/,
  /打车.*钱/, /地铁.*钱/, /公交.*钱/,
  /洗牙.*钱/, /看病.*钱/, /挂号.*钱/,
  /套餐.*钱/, /话费.*钱/, /网费/,
  /水电费/, /快递费/,
  /预算/, /开销/, /支出/,
  /cost/i, /price/i, /how much/i, /expensive/i, /cheap/i,
  /сколько.*стоит/, /цена/, /расход/i, /бюджет/i,
];

// 天气关键词
const WEATHER_PATTERNS = [
  /天气/, /气温/, /温度/, /下雨/, /下雪/,
  /冷不冷/, /热不热/, /需要.*伞/,
  /今天.*天气/, /明天.*天气/, /这周.*天气/,
];

// 汇率关键词
const EXCHANGE_PATTERNS = [
  /汇率/, /换.*钱/, /兑换/, /多少.*卢布/, /多少.*美元/,
  /人民币.*换/, /换.*人民币/,
];

// 翻译关键词
const TRANSLATE_PATTERNS = [
  /^翻译[：:\s]/, /^translate[：:\s]/i,
  /翻译一下/, /帮我翻译/, /请翻译/,
  /翻译成/, /translate.*(?:to|into)/i,
  /用\w+怎么说/, /用\w+怎么表达/,
  /how\s+(?:do\s+you|to)\s+say/i,
  /怎么?翻译/, /这是什么意思/,
];

// 紧急求助关键词
const EMERGENCY_PATTERNS = [
  /紧急/, /求救/, /救命/, /emergency/i, /s.o.s/i,
  /报警/, /叫警察/, /полиц/i,
  /大使馆/, /领事馆/, /embassy/i, /consulat/i, /посольств/i,
  /护照丢/, /护照丢失/, /lost.*passport/i, /потеря.*паспорт/i,
  /急救/, /救护车/, /ambulance/i, /скорая/i,
  /火警/, /着火了/, /fire!/i, /пожар/i,
];

// 签证/行政手续关键词
const VISA_PATTERNS = [
  /签证/, /visa/i, /виза/i,
  /居留许可/, /residence\s*permit/i, /вид на жит/i, /ВНЖ/i,
  /续签/, /延期/, /renewal/i, /продлен/i,
  /出入境/, /exit.?entry/i,
  /住宿登记/, /registration/i, /регистр.*прожив/i,
  /JW201/i, /JW202/i,
  /X1签证/, /X2签证/, /Z签证/, /F签证/,
  /遣返/, /deportation/i, /депортац/i,
  /逾期/, /overstay/i, /просроч/i,
];

/**
 * 检测用户意图
 * @param {string} message - 用户最新消息
 * @returns {object} - { intent, keywords }
 */
export function detectIntent(message) {
  if (!message) return { intent: 'general', keywords: [] };

  const intents = [];

  // 优先检测路线（具体起终点）
  for (const pattern of ROUTE_PATTERNS) {
    if (pattern.test(message)) {
      intents.push('route');
      break;
    }
  }

  // POI 搜索
  for (const pattern of POI_PATTERNS) {
    if (pattern.test(message)) {
      intents.push('poi');
      break;
    }
  }

  // 物价查询
  for (const pattern of PRICE_PATTERNS) {
    if (pattern.test(message)) {
      intents.push('price');
      break;
    }
  }

  // 天气
  for (const pattern of WEATHER_PATTERNS) {
    if (pattern.test(message)) {
      intents.push('weather');
      break;
    }
  }

  // 汇率
  for (const pattern of EXCHANGE_PATTERNS) {
    if (pattern.test(message)) {
      intents.push('exchange');
      break;
    }
  }

  // 翻译
  for (const pattern of TRANSLATE_PATTERNS) {
    if (pattern.test(message)) {
      intents.push('translate');
      break;
    }
  }

  // 紧急求助
  for (const pattern of EMERGENCY_PATTERNS) {
    if (pattern.test(message)) {
      intents.push('emergency');
      break;
    }
  }

  // 签证/行政手续
  for (const pattern of VISA_PATTERNS) {
    if (pattern.test(message)) {
      intents.push('visa');
      break;
    }
  }

  return {
    intent: intents.length > 0 ? intents[0] : 'general',
    allIntents: intents,
    message,
  };
}

/**
 * 用 DeepSeek 从用户消息中提取起点和终点
 * @param {string} message - 用户消息
 * @param {string} apiKey - DeepSeek API Key
 * @returns {Promise<{origin: string, destination: string, city: string} | null>}
 */
export async function extractRouteInfo(message, apiKey) {
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `你是一个地址提取工具。从用户消息中提取起点和终点。
只返回 JSON 格式，不要有其他内容：
{"origin": "起点地址", "destination": "终点地址", "city": "城市名"}

规则：
- origin 和 destination 尽量具体，包含城市名
- city 填城市名（不含"市"字），如"青岛"、"北京"
- 如果无法确定城市，根据上下文推断（如提到"胶东机场"则是青岛）
- 如果无法提取，返回 {"origin": "", "destination": "", "city": ""}`
          },
          { role: 'user', content: message }
        ],
        temperature: 0.1,
        max_tokens: 200,
      }),
    });

    if (!response.ok) return null;
    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    // 尝试解析 JSON
    const jsonMatch = content.match(/\{[\s\S]*?\}/);
    if (!jsonMatch) return null;

    const parsed = JSON.parse(jsonMatch[0]);
    if (!parsed.origin || !parsed.destination) return null;

    return {
      origin: parsed.origin,
      destination: parsed.destination,
      city: parsed.city || '',
    };
  } catch (e) {
    console.error('Extract route info error:', e);
    return null;
  }
}

/**
 * 用 DeepSeek 从用户消息中提取 POI 搜索信息
 * @param {string} message - 用户消息
 * @param {string} apiKey - DeepSeek API Key
 * @returns {Promise<{keyword: string, city: string, location: string} | null>}
 */
export async function extractPOIInfo(message, apiKey) {
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `你是一个POI搜索信息提取工具。从用户消息中提取搜索关键词和位置。
只返回 JSON 格式：
{"keyword": "搜索关键词", "city": "城市名", "location": "参考位置"}

规则：
- keyword: 用户想找的类型，如"超市"、"餐厅"、"医院"
- city: 城市名
- location: 用户提到的参考位置（如学校名、地标）
- 如果无法提取某字段，填空字符串`
          },
          { role: 'user', content: message }
        ],
        temperature: 0.1,
        max_tokens: 200,
      }),
    });

    if (!response.ok) return null;
    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    const jsonMatch = content.match(/\{[\s\S]*?\}/);
    if (!jsonMatch) return null;

    const parsed = JSON.parse(jsonMatch[0]);
    if (!parsed.keyword) return null;

    return {
      keyword: parsed.keyword,
      city: parsed.city || '',
      location: parsed.location || '',
    };
  } catch (e) {
    console.error('Extract POI info error:', e);
    return null;
  }
}

/**
 * 格式化路线数据为 AI 可读的上下文
 */
export function formatRouteContext(routeData) {
  if (!routeData || !routeData.success) {
    if (routeData?.error) {
      return `【路线查询结果】查询失败：${routeData.error}`;
    }
    return '';
  }

  const parts = [];
  parts.push('【高德地图真实路线数据】');
  parts.push(`起点：${routeData.origin.text}（定位：${routeData.origin.resolved}）`);
  parts.push(`终点：${routeData.destination.text}（定位：${routeData.destination.resolved}）`);

  if (routeData.routes.transit?.length) {
    parts.push('\n--- 公共交通方案 ---');
    for (const route of routeData.routes.transit) {
      const duration = formatDuration(route.duration);
      const cost = route.cost > 0 ? `¥${route.cost}` : '免费';
      const walk = route.walkingDistance > 0 ? `步行${route.walkingDistance}米` : '';

      parts.push(`\n方案${route.index}：`);
      parts.push(`耗时：${duration} | 费用：${cost}${walk ? ' | ' + walk : ''}`);
      if (route.nightflag) parts.push('（含夜班车）');

      // 详细路线
      const segments = [];
      for (const seg of route.segments) {
        if (seg.type === 'walk') {
          segments.push(`步行${seg.distance}米`);
        } else if (seg.type === 'metro') {
          segments.push(`🚇${seg.name}（${seg.departureName}→${seg.arrivalName}，${seg.stops}站）`);
        } else if (seg.type === 'bus') {
          segments.push(`🚌${seg.name}（${seg.departureName}→${seg.arrivalName}，${seg.stops}站）`);
        } else if (seg.type === 'train') {
          segments.push(`🚄${seg.name}（${seg.departureName}→${seg.arrivalName}）`);
        }
      }
      parts.push(`路线：${segments.join(' → ')}`);
    }
  }

  if (routeData.routes.driving) {
    const d = routeData.routes.driving;
    parts.push('\n--- 打车/驾车方案 ---');
    parts.push(`距离：${(d.distance / 1000).toFixed(1)}公里 | 耗时：${formatDuration(d.duration)}${d.tolls > 0 ? ` | 过路费¥${d.tolls}` : ''}`);
    // 估算打车费用（基于经验公式）
    const taxiEstimate = estimateTaxiFare(d.distance, d.duration);
    if (taxiEstimate) {
      parts.push(`打车预估：${taxiEstimate}`);
    }
  }

  if (routeData.routes.walking) {
    const w = routeData.routes.walking;
    parts.push('\n--- 步行方案 ---');
    parts.push(`距离：${(w.distance / 1000).toFixed(1)}公里 | 耗时：${formatDuration(w.duration)}`);
  }

  return parts.join('\n');
}

/**
 * 格式化 POI 数据为 AI 可读的上下文
 */
export function formatPOIContext(poiData) {
  if (!poiData || !poiData.success) {
    if (poiData?.error) return `【周边搜索失败】${poiData.error}`;
    return '';
  }

  const parts = [];
  parts.push(`【高德地图周边搜索结果 - 关键词"${poiData.keyword}"】`);
  parts.push(`参考位置：${poiData.centerAddress || poiData.center}`);

  if (poiData.pois?.length) {
    for (let i = 0; i < Math.min(poiData.pois.length, 8); i++) {
      const poi = poiData.pois[i];
      parts.push(`\n${i + 1}. ${poi.name}`);
      if (poi.address) parts.push(`   地址：${poi.address}`);
      if (poi.distance) parts.push(`   距离：${poi.distance}米`);
      if (poi.tel) parts.push(`   电话：${poi.tel}`);
      if (poi.rating) parts.push(`   评分：${poi.rating}`);
      if (poi.business_area) parts.push(`   商圈：${poi.business_area}`);
    }
  }

  return parts.join('\n');
}

function formatDuration(seconds) {
  if (seconds < 60) return `${seconds}秒`;
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins}分钟`;
  const hours = Math.floor(mins / 60);
  const remainMins = mins % 60;
  return remainMins > 0 ? `${hours}小时${remainMins}分钟` : `${hours}小时`;
}

function estimateTaxiFare(distanceMeters, durationSeconds) {
  // 基于中国主要城市出租车定价的粗略估算
  // 起步价 10-14 元（3km 内），之后 2-2.5 元/km
  const km = distanceMeters / 1000;
  if (km < 3) return `约¥12-14（起步价）`;
  const base = 13;
  const perKm = 2.3;
  const estimate = Math.round(base + (km - 3) * perKm);
  // 加上可能的拥堵附加费
  const mins = durationSeconds / 60;
  const speedKmh = km / (mins / 60);
  const congestion = speedKmh < 20 ? '（含低速等待费）' : '';
  return `约¥${estimate}-${estimate + 20}${congestion}`;
}
