// 统一加载所有 Guide 内容
// 新增 Guide 时只需在此处添加 import 和映射

import setupAlipay from './guides/setup-alipay.js';
import airportToCity from './guides/airport-to-city.js';
import buySimCard from './guides/buy-sim-card.js';

const guidesMap = {
  'setup-alipay': setupAlipay,
  'airport-to-city': airportToCity,
  'buy-sim-card': buySimCard,
};

export default function getGuideData(guideId) {
  return guidesMap[guideId] || null;
}
