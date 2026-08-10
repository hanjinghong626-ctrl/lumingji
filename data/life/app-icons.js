// 鹿鸣集 · App 图标映射
// 使用 Apple App Store CDN 图标（稳定、高清、圆角）
// 数据来源: iTunes Lookup API (country=cn)

const appIcons = {
  // ===== Essential Apps =====
  'alipay':          'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/07/fb/2307fb7a-2c77-243a-a7a9-513ff7632c0a/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/100x100bb.jpg',
  'wechat':          'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e4/4f/16/e44f16cb-0a64-464e-13f2-05091f930c79/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-0-85-220.png/100x100bb.jpg',
  'gaode-map':       'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f3/d2/15/f3d215b6-7224-c6b3-8fef-b7006ab3473a/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/100x100bb.jpg',
  'didi':            'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0a/99/02/0a9902b1-bf54-8d31-6ef6-abfb8528de00/AppIcon_default-0-0-1x_U007ephone-0-1-0-85-220.png/100x100bb.jpg',
  '12306':           'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ad/05/62/ad056221-9f87-c034-ce27-00c21a921bf3/AppIcon-0-0-1x_U007epad-0-1-0-0-85-220.png/100x100bb.jpg',
  'china-mobile':    'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e0/ca/8a/e0ca8aca-daa1-7646-2611-09cf9b51f2a4/AppIcon-0-0-1x_U007epad-0-1-0-0-sRGB-85-220.png/100x100bb.jpg',
  'taobao':          'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/eb/ef/45/ebef4580-08f0-ffdd-8b23-f4bd7a0220ab/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.jpg',
  'meituan-waimai':  'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8c/fd/9e/8cfd9ee0-025b-1e73-4f63-94b126577291/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/100x100bb.jpg',
  'eleme':           'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/74/5a/bf/745abfbd-cdd1-aa7c-9d0c-f4d71abd5a75/AppIcon_new-0-1x_U007epad-0-1-0-85-220-0.png/100x100bb.jpg',
  'jd':              'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/59/c5/d9/59c5d9b7-658f-2214-52f7-4281bc71f9bd/AppIcon-0-0-1x_U007epad-0-1-0-0-85-220.png/100x100bb.jpg',
  'ctrip-app':       'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cb/45/8d/cb458d8e-6ee1-9c3d-e549-731e463ec006/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/100x100bb.jpg',
  'meituan-app':     'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/de/44/7e/de447ee7-33b4-fb43-96e8-f7754154a8e0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-85-220.png/100x100bb.jpg',

  // ===== Popular Apps (Second Tier) =====
  'xiaohongshu':     'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/6e/9c/226e9c7b-10c1-c69a-0124-5f5958f945f5/AppIcon-0-0-1x_U007epad-0-11-0-85-220.png/100x100bb.jpg',
  'dianping':        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/58/c0/0e/58c00e11-7803-733a-1bce-5daf7226c721/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/100x100bb.jpg',
  'bilibili':        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/44/ef/40/44ef4051-f1ae-3b11-9e83-edb96696940a/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/100x100bb.jpg',
  'pinduoduo':       'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c1/09/59/c109598a-a832-712f-68eb-00e0a890286e/AppIcon-1x_U007emarketing-0-8-0-0-0-85-220-0.png/100x100bb.jpg',
  'xianyu':          'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b9/cd/a7/b9cda78b-0c0c-6f84-0494-4735d05682a4/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/100x100bb.jpg',
  'cainiao':         'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/88/b5/5a/88b55af9-e3e2-4cae-81a9-cd7da363618d/AppIcon-0-1x_U007epad-0-1-0-85-220-0.png/100x100bb.jpg',
  'qunar':           'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8c/6d/e2/8c6de2e8-06d5-90eb-08e2-a67a33ec0b2e/AppIcon-0-0-1x_U007epad-0-1-85-220.png/100x100bb.jpg',
  'hellobike':       'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/68/9b/76/689b76c8-756e-ab3c-92b7-a89cd253b227/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/100x100bb.jpg',
};

// 获取App图标URL
export function getAppIcon(appId) {
  return appIcons[appId] || null;
}

export default appIcons;
