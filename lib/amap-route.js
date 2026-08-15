// 高德地图路线规划 API 集成
// 免费额度：5000次/天，对个人项目完全够用

// API Key - 优先从环境变量读取
const AMAP_API_KEY = process.env.AMAP_API_KEY || '93c79b20782ec936122fa6b6dcae6cd0';

// 高德 API 基础地址
const AMAP_BASE = 'https://restapi.amap.com/v3';

/**
 * 地理编码：将地址转换为经纬度坐标
 * @param {string} address - 中文地址
 * @param {string} city - 城市名（可选，提高精度）
 * @returns {Promise<{location: string, formatted: string} | null>}
 */
export async function geocode(address, city = '') {
  if (!AMAP_API_KEY) return null;

  try {
    const params = new URLSearchParams({
      key: AMAP_API_KEY,
      address,
      output: 'JSON',
    });
    if (city) params.set('city', city);

    const res = await fetch(`${AMAP_BASE}/geocode/geo?${params}`);
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== '1' || !data.geocodes?.length) return null;

    const geo = data.geocodes[0];
    return {
      location: geo.location, // "经度,纬度"
      formatted: geo.formatted_address,
      city: geo.city,
      district: geo.district,
    };
  } catch (e) {
    console.error('Geocode error:', e);
    return null;
  }
}

/**
 * 逆地理编码：将经纬度转换为地址
 * @param {string} location - "经度,纬度"
 * @returns {Promise<{formatted: string, city: string} | null>}
 */
export async function reverseGeocode(location) {
  if (!AMAP_API_KEY) return null;

  try {
    const params = new URLSearchParams({
      key: AMAP_API_KEY,
      location,
      output: 'JSON',
    });

    const res = await fetch(`${AMAP_BASE}/geocode/regeo?${params}`);
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== '1') return null;

    return {
      formatted: data.regeocode?.formatted_address || '',
      city: data.regeocode?.addressComponent?.city || '',
    };
  } catch (e) {
    console.error('Reverse geocode error:', e);
    return null;
  }
}

/**
 * 公交/地铁路线规划
 * @param {string} origin - "经度,纬度"
 * @param {string} destination - "经度,纬度"
 * @param {string} city - 城市名（必填）
 * @returns {Promise<object|null>}
 */
export async function planTransitRoute(origin, destination, city) {
  if (!AMAP_API_KEY) return null;

  try {
    const params = new URLSearchParams({
      key: AMAP_API_KEY,
      origin,
      destination,
      city,
      strategy: '0', // 最快捷模式
      output: 'JSON',
    });

    const res = await fetch(`${AMAP_BASE}/direction/transit/integrated?${params}`);
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== '1' || !data.route?.transits?.length) return null;

    // 取前 3 个方案
    const routes = data.route.transits.slice(0, 3).map((transit, idx) => {
      const duration = parseInt(transit.duration); // 秒
      const cost = parseFloat(transit.cost) || 0; // 元
      const nightflag = transit.nightflag === '1'; // 是否夜班车
      const walkingDistance = parseInt(transit.walking_distance) || 0; // 步行距离（米）

      // 提取关键路段信息
      const segments = (transit.segments || []).map(seg => {
        const mode = [];

        // 步行段
        if (seg.walking?.distance && parseInt(seg.walking.distance) > 0) {
          mode.push({
            type: 'walk',
            distance: parseInt(seg.walking.distance),
            instruction: seg.walking.instruction || '',
          });
        }

        // 公交/地铁段
        if (seg.bus?.bus_lines?.length) {
          const line = seg.bus.bus_lines[0];
          mode.push({
            type: line.type === '地铁线路' || line.name?.includes('地铁') ? 'metro' : 'bus',
            name: line.name || '',
            departureName: line.departure_stop?.name || '',
            arrivalName: line.arrival_stop?.name || '',
            stops: line.via_stops?.length || 0,
            duration: parseInt(line.duration) || 0,
          });
        }

        // 铁路段（城际等）
        if (seg.railway?.spaces?.length) {
          const rail = seg.railway;
          mode.push({
            type: 'train',
            name: `${rail.name || ''} ${rail.trip || ''}`,
            departureName: rail.departure_stop?.name || '',
            arrivalName: rail.arrival_stop?.name || '',
          });
        }

        return mode;
      }).flat();

      return {
        index: idx + 1,
        duration,
        cost,
        nightflag,
        walkingDistance,
        segments,
        summary: formatTransitSummary(segments, duration, cost),
      };
    });

    return {
      origin: data.route.origin,
      destination: data.route.destination,
      routes,
    };
  } catch (e) {
    console.error('Transit route error:', e);
    return null;
  }
}

/**
 * 驾车路线规划
 * @param {string} origin - "经度,纬度"
 * @param {string} destination - "经度,纬度"
 * @returns {Promise<object|null>}
 */
export async function planDrivingRoute(origin, destination) {
  if (!AMAP_API_KEY) return null;

  try {
    const params = new URLSearchParams({
      key: AMAP_API_KEY,
      origin,
      destination,
      strategy: '10', // 综合考虑时间和费用
      output: 'JSON',
    });

    const res = await fetch(`${AMAP_BASE}/direction/driving?${params}`);
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== '1' || !data.route?.paths?.length) return null;

    const best = data.route.paths[0];
    const distance = parseInt(best.distance); // 米
    const duration = parseInt(best.duration); // 秒
    const tolls = parseFloat(best.tolls) || 0; // 过路费
    const tollDistance = parseInt(best.toll_distance) || 0;

    return {
      distance,
      duration,
      tolls,
      tollDistance,
      summary: formatDrivingSummary(distance, duration, tolls),
    };
  } catch (e) {
    console.error('Driving route error:', e);
    return null;
  }
}

/**
 * 步行路线规划
 * @param {string} origin - "经度,纬度"
 * @param {string} destination - "经度,纬度"
 * @returns {Promise<object|null>}
 */
export async function planWalkingRoute(origin, destination) {
  if (!AMAP_API_KEY) return null;

  try {
    const params = new URLSearchParams({
      key: AMAP_API_KEY,
      origin,
      destination,
      output: 'JSON',
    });

    const res = await fetch(`${AMAP_BASE}/direction/walking?${params}`);
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== '1' || !data.route?.paths?.length) return null;

    const best = data.route.paths[0];
    const distance = parseInt(best.distance);
    const duration = parseInt(best.duration);

    return {
      distance,
      duration,
      summary: formatWalkingSummary(distance, duration),
    };
  } catch (e) {
    console.error('Walking route error:', e);
    return null;
  }
}

// ===== 格式化工具函数 =====

function formatDuration(seconds) {
  if (seconds < 60) return `${seconds}秒`;
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins}分钟`;
  const hours = Math.floor(mins / 60);
  const remainMins = mins % 60;
  return remainMins > 0 ? `${hours}小时${remainMins}分钟` : `${hours}小时`;
}

function formatDistance(meters) {
  if (meters < 1000) return `${meters}米`;
  return `${(meters / 1000).toFixed(1)}公里`;
}

function formatTransitSummary(segments, duration, cost) {
  const transitParts = segments.filter(s => s.type === 'metro' || s.type === 'bus' || s.type === 'train');
  const walkDist = segments.filter(s => s.type === 'walk').reduce((sum, s) => sum + (s.distance || 0), 0);

  let summary = `约${formatDuration(duration)}`;
  if (cost > 0) summary += `，¥${cost}`;
  if (walkDist > 0) summary += `，步行${formatDistance(walkDist)}`;

  if (transitParts.length > 0) {
    const lines = transitParts.map(p => {
      if (p.type === 'metro') return `🚇 ${p.name}`;
      if (p.type === 'bus') return `🚌 ${p.name}`;
      if (p.type === 'train') return `🚄 ${p.name}`;
      return '';
    }).filter(Boolean);
    summary += `\n${lines.join(' → ')}`;
  }

  return summary;
}

function formatDrivingSummary(distance, duration, tolls) {
  let summary = `${formatDistance(distance)}，约${formatDuration(duration)}`;
  if (tolls > 0) summary += `，过路费¥${tolls}`;
  return summary;
}

function formatWalkingSummary(distance, duration) {
  return `${formatDistance(distance)}，约${formatDuration(duration)}`;
}

/**
 * 综合路线查询：根据起终点获取多种出行方案
 * @param {string} originText - 起点地址文本
 * @param {string} destText - 终点地址文本
 * @param {string} city - 城市名（用于公交查询）
 * @returns {Promise<object>}
 */
export async function queryRoutes(originText, destText, city = '') {
  // 1. 地理编码
  const [originGeo, destGeo] = await Promise.all([
    geocode(originText, city),
    geocode(destText, city),
  ]);

  if (!originGeo || !destGeo) {
    return {
      success: false,
      error: '无法定位起点或终点，请检查地址是否正确',
      originText,
      destText,
    };
  }

  const resolvedCity = originGeo.city || destGeo.city || city;
  const cityName = typeof resolvedCity === 'string' ? resolvedCity.replace(/市$/, '') : '';

  // 2. 并行查询多种出行方式
  const [transit, driving, walking] = await Promise.all([
    cityName ? planTransitRoute(originGeo.location, destGeo.location, cityName) : null,
    planDrivingRoute(originGeo.location, destGeo.location),
    planWalkingRoute(originGeo.location, destGeo.location),
  ]);

  // 3. 组装结果
  const result = {
    success: true,
    origin: {
      text: originText,
      resolved: originGeo.formatted,
      location: originGeo.location,
    },
    destination: {
      text: destText,
      resolved: destGeo.formatted,
      location: destGeo.location,
    },
    routes: {},
  };

  if (transit?.routes?.length) {
    result.routes.transit = transit.routes;
  }
  if (driving) {
    result.routes.driving = driving;
  }
  // 步行只在 3km 以内时返回
  if (walking && walking.distance < 3000) {
    result.routes.walking = walking;
  }

  return result;
}

/**
 * POI 周边搜索：搜索附近兴趣点
 * @param {string} keyword - 搜索关键词（如"超市"、"餐厅"）
 * @param {string} location - "经度,纬度"（可选）
 * @param {string} city - 城市名（可选）
 * @param {string} address - 参考地址文本（用于地理编码，可选）
 * @param {number} radius - 搜索半径（米），默认 2000
 * @returns {Promise<object>}
 */
export async function searchPOI(keyword, { location, city, address, radius = 2000 } = {}) {
  if (!AMAP_API_KEY) return { success: false, error: 'API Key 未配置' };

  // 如果没有经纬度，先地理编码
  let center = location;
  let centerAddress = address || '';
  if (!center && address) {
    const geo = await geocode(address, city);
    if (geo) {
      center = geo.location;
      centerAddress = geo.formatted;
    }
  }

  if (!center && !city) {
    return { success: false, error: '无法确定搜索位置，请提供更具体的地点' };
  }

  try {
    const params = new URLSearchParams({
      key: AMAP_API_KEY,
      keywords: keyword,
      offset: '8', // 每页8条
      page: '1',
      output: 'JSON',
      sortrule: 'weight', // 按综合权重排序
    });

    if (center) {
      params.set('location', center);
      params.set('radius', String(radius));
      params.set('sortrule', 'distance'); // 有坐标时按距离排序
    } else if (city) {
      params.set('city', city);
    }

    const res = await fetch(`${AMAP_BASE}/place/around?${params}`);
    if (!res.ok) return { success: false, error: 'API 请求失败' };

    const data = await res.json();
    if (data.status !== '1') {
      return { success: false, error: data.info || '查询失败' };
    }

    const pois = (data.pois || []).map(poi => ({
      name: poi.name,
      address: poi.address || poi.pname + poi.cityname + poi.adname,
      distance: poi.distance,
      tel: poi.tel || '',
      rating: poi.biz_ext?.rating || '',
      business_area: poi.business_area || '',
      type: poi.type,
    }));

    return {
      success: true,
      keyword,
      center: center || '',
      centerAddress,
      pois,
    };
  } catch (e) {
    console.error('POI search error:', e);
    return { success: false, error: '搜索失败：' + e.message };
  }
}
