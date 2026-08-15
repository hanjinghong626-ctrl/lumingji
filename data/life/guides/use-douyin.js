// Guide: 抖音使用指南
export default {
  id: 'use-douyin',
  category: 'communication',
  icon: '🎵',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["douyin", "video", "social"],
  title: { zh: '抖音使用指南', en: 'Douyin Guide', ru: 'Douyin Guide' },
  summary: { zh: '抖音短视频浏览与发布', en: 'Browsing and posting on Douyin', ru: 'Browsing and posting on Douyin' },
  intro: { zh: '抖音短视频浏览与发布。', en: 'Browsing and posting on Douyin.', ru: 'Browsing and posting on Douyin.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '下载抖音', en: 'Download Douyin', ru: 'Скачать Douyin' },
      desc: {
        zh: '抖音是中国版TikTok，内容更丰富。在App Store搜索"抖音"（红色音符图标）下载。安卓手机可在应用商店或官网 douyin.com 扫描二维码下载。注意：抖音和国际版TikTok是独立的App，数据不互通。',
        en: 'Douyin is the Chinese version of TikTok with more diverse content. Search "抖音" in App Store (red music note icon) to download. Android users can download from app stores or scan QR code on douyin.com. Note: Douyin and international TikTok are separate apps with no data sharing.',
        ru: 'Douyin — китайская версия TikTok с более разнообразным контентом. Найдите "抖音" в App Store (красная иконка ноты) для скачивания. Android пользователи могут скачать из магазинов приложений или по QR-коду на douyin.com. Примечание: Douyin и международный TikTok — отдельные приложения без обмена данными.'
      }
    },
    {
      title: { zh: '注册和浏览', en: 'Register and browse', ru: 'Регистрация и просмотр' },
      desc: {
        zh: '打开抖音，选择"用手机号注册"（支持中国手机号+86）。设置头像和昵称后可以开始浏览。首页"推荐"页面是算法推荐内容，上下滑动切换视频。点击右侧"❤"点赞，点击评论图标可以评论互动。',
        en: 'Open Douyin and choose "Register with phone number" (supports Chinese phone number +86). After setting a profile photo and nickname, start browsing. The "推荐" (For You) page shows algorithm-recommended content — swipe up/down to switch videos. Tap "❤" on the right to like, tap the comment icon to interact.',
        ru: 'Откройте Douyin и выберите "Регистрация по номеру" (поддерживает китайский номер +86). После установки аватара и имени начните просмотр. Страница "推荐" показывает контент по алгоритму — листайте вверх/вниз для переключения видео. Нажмите "❤" для лайка, иконку комментария для взаимодействия.'
      }
,      tip: {
        zh: '抖音的内容非常"上瘾"，注意控制使用时间。可以在"设置→时间管理"中开启使用时长提醒。',
        en: 'Douyin content is very addictive — manage your screen time. Enable usage reminders in Settings → Time Management.',
        ru: 'Контент Douyin очень затягивает — контролируйте время. Включите напоминания в Настройки → Управление временем.'
      }
    },
    {
      title: { zh: '实用功能', en: 'Useful features', ru: 'Полезные функции' },
      desc: {
        zh: '①搜索：点击左上角放大镜搜索特定话题、美食攻略等；②直播：很多博主会直播带货或分享生活；③收藏：长按视频可以收藏到"喜欢"列表；④分享：可以将有趣视频分享到微信好友或朋友圈。留学生常用抖音学习中文、了解中国文化、找本地美食推荐。',
        en: '① Search: Tap the magnifier icon (top left) to search topics, food guides, etc.; ② Live streaming: Many creators stream shopping or share daily life; ③ Favorites: Long-press a video to save to your "Liked" list; ④ Share: Share interesting videos to WeChat contacts or Moments. International students commonly use Douyin to learn Chinese, understand Chinese culture, and find local food recommendations.',
        ru: '① Поиск: нажмите иконку лупы (вверху слева) для поиска тем, гастрономических гидов и т.д.; ② Прямые трансляции: многие блогеры ведут трансляции; ③ Избранное: долгое нажатие на видео для сохранения; ④ Поделиться: можно отправить видео в WeChat. Иностранные студенты часто используют Douyin для изучения китайского языка и культуры.'
      }
,      tip: {
        zh: '有些视频会标注"广告"字样，这些是推广内容，仅供参考，注意辨别。',
        en: 'Some videos are marked with "广告" (advertisement) — these are promotional content, for reference only. Use your judgment.',
        ru: 'Некоторые видео отмечены "广告" (реклама) — это рекламный контент,仅供参考.'
      }
    }
  ],
  faq: [
    { q: { zh: '外国人能注册吗？', en: 'Can foreigners register?', ru: 'Могут иностранцы зарегистрироваться?' }, a: { zh: '大部分中国社交平台支持外国手机号注册，但部分功能可能受限。建议使用中国手机号注册以获得完整功能。', en: 'Most Chinese social platforms support foreign phone registration, but some features may be limited. Use a Chinese number for full access.', ru: 'Большинство поддерживают иностраные номера, но с ограничениями. Китайский номер — полный доступ.' } },
  ],
  nextGuides: ['wechat-full-guide', 'choose-phone-plan', 'recharge-phone']
};