// 统一加载所有 Guide 内容
// 新增 Guide 时只需在此处添加 import 和映射

import setupAlipay from './guides/setup-alipay.js';
import airportToCity from './guides/airport-to-city.js';
import buySimCard from './guides/buy-sim-card.js';
import setupWechat from './guides/setup-wechat.js';
import openBankAccount from './guides/open-bank-account.js';
import registerDormitory from './guides/register-dormitory.js';
import firstWeekChecklist from './guides/first-week-checklist.js';

const guidesMap = {
  'setup-alipay': setupAlipay,
  'airport-to-city': airportToCity,
  'buy-sim-card': buySimCard,
  'setup-wechat': setupWechat,
  'open-bank-account': openBankAccount,
  'register-dormitory': registerDormitory,
  'first-week-checklist': firstWeekChecklist,
};

export default function getGuideData(guideId) {
  return guidesMap[guideId] || null;
}
