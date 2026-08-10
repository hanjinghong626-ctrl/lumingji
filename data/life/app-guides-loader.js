// 鹿鸣集 · App使用指南统一加载器
// 所有App指南通过此文件统一导出

// ===== Essential Apps =====
import alipayGuide from './app-guides/alipay.js';
import wechatGuide from './app-guides/wechat.js';
import gaodeMapGuide from './app-guides/gaode-map.js';
import didiGuide from './app-guides/didi.js';
import train12306Guide from './app-guides/12306.js';
import chinaMobileGuide from './app-guides/china-mobile.js';
import taobaoGuide from './app-guides/taobao.js';
import meituanWaimaiGuide from './app-guides/meituan-waimai.js';
import elemeGuide from './app-guides/eleme.js';
import jdGuide from './app-guides/jd.js';
import ctripAppGuide from './app-guides/ctrip-app.js';
import meituanAppGuide from './app-guides/meituan-app.js';

// ===== Popular Apps (Second Tier) =====
import xiaohongshuGuide from './app-guides/xiaohongshu.js';
import dianpingGuide from './app-guides/dianping.js';
import bilibiliGuide from './app-guides/bilibili.js';
import pinduoduoGuide from './app-guides/pinduoduo.js';
import xianyuGuide from './app-guides/xianyu.js';
import cainiaoGuide from './app-guides/cainiao.js';
import qunarGuide from './app-guides/qunar.js';
import hellobikeGuide from './app-guides/hellobike.js';

const appGuidesMap = {
  // Essential Apps
  'alipay': alipayGuide,
  'wechat': wechatGuide,
  'gaode-map': gaodeMapGuide,
  'didi': didiGuide,
  '12306': train12306Guide,
  'china-mobile': chinaMobileGuide,
  'taobao': taobaoGuide,
  'meituan-waimai': meituanWaimaiGuide,
  'eleme': elemeGuide,
  'jd': jdGuide,
  'ctrip-app': ctripAppGuide,
  'meituan-app': meituanAppGuide,
  // Popular Apps (Second Tier)
  'xiaohongshu': xiaohongshuGuide,
  'dianping': dianpingGuide,
  'bilibili': bilibiliGuide,
  'pinduoduo': pinduoduoGuide,
  'xianyu': xianyuGuide,
  'cainiao': cainiaoGuide,
  'qunar': qunarGuide,
  'hellobike': hellobikeGuide,
};

/**
 * 获取指定App的使用指南数据
 * @param {string} appId - App的ID
 * @returns {object|null} App指南数据对象，不存在则返回null
 */
export function getAppGuideData(appId) {
  return appGuidesMap[appId] || null;
}

/**
 * 获取所有已编写的App指南列表（摘要信息，用于列表页）
 * @returns {Array} 包含id/title/desc/icon的数组
 */
export function getAllAppGuidesSummary() {
  return Object.values(appGuidesMap).map(guide => ({
    id: guide.id,
    title: guide.title,
    desc: guide.desc,
    version: guide.version,
    stepCount: guide.setupSteps.length,
    featureCount: guide.coreFeatures.length,
    faqCount: guide.faq.length,
    tipCount: guide.tips ? guide.tips.length : 0,
    relatedGuides: guide.relatedGuides || [],
  }));
}

/**
 * 检查指定App是否有使用指南
 * @param {string} appId
 * @returns {boolean}
 */
export function hasAppGuide(appId) {
  return appId in appGuidesMap;
}

/**
 * 获取已注册App指南数量
 */
export function getAppGuideCount() {
  return Object.keys(appGuidesMap).length;
}

export default appGuidesMap;
