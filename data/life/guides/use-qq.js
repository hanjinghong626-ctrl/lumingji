// Guide: QQ使用指南
export default {
  id: 'use-qq',
  category: 'communication',
  icon: '🐧',
  type: 'guide',
  difficulty: 1,
  estimatedTime: 10,
  apps: [],
  prerequisites: [],
  tags: ["qq", "social"],
  title: { zh: 'QQ使用指南', en: 'QQ Guide', ru: 'QQ Guide' },
  summary: { zh: 'QQ基本使用：聊天、群组、空间', en: 'QQ basics: chat, groups, QZone', ru: 'QQ basics: chat, groups, QZone' },
  intro: { zh: 'QQ基本使用：聊天、群组、空间。', en: 'QQ basics: chat, groups, QZone.', ru: 'QQ basics: chat, groups, QZone.' },
  preparation: { zh: [], en: [], ru: [] },
  steps: [
    {
      title: { zh: '下载并注册QQ', en: 'Download and register QQ', ru: 'Скачать и зарегистрировать QQ' },
      desc: {
        zh: 'QQ是腾讯旗下的老牌即时通讯工具，学生群体使用广泛。在应用商店搜索"QQ"（企鹅图标）下载安装。注册方式：用中国手机号注册（+86），或通过邮箱注册。设置昵称、头像和密码。',
        en: 'QQ is Tencent\'s established instant messaging tool, widely used among students. Search "QQ" in app stores (penguin icon) to download. Register with a Chinese phone number (+86) or email. Set up nickname, avatar, and password.',
        ru: 'QQ — мессенджер от Tencent, широко используется среди студентов. Найдите "QQ" в магазинах приложений (иконка пингвина) для скачивания. Регистрация по китайскому номеру (+86) или email. Установите имя, аватар и пароль.'
      }
    },
    {
      title: { zh: '加入群聊和班级群', en: 'Join group chats and class groups', ru: 'Присоединение к групповым чатам' },
      desc: {
        zh: 'QQ最重要的功能之一是"群聊"。大学班级、社团、课程小组通常都有QQ群。入学后班长或辅导员会分享群号码或二维码。在QQ中点击"+"→"加好友/群"→输入群号→申请加入。群内可以看到课程通知、作业分享、活动通知等。',
        en: 'One of QQ\'s most important features is "group chat". University classes, clubs, and course groups usually have QQ groups. After enrollment, class monitors or counselors will share group numbers or QR codes. In QQ, tap "+" → "Add Friend/Group" → enter group number → apply to join. Groups contain course notices, homework sharing, and event announcements.',
        ru: 'Одна из важнейших функций QQ — групповые чаты. Университетские классы, клубы и учебные группы обычно имеют группы QQ. После зачисления староста или кураторы поделятся номерами групп или QR-кодами. В QQ нажмите "+" → "Добавить друга/группу" → введите номер группы → подайте заявку. В группах — объявления, домашние задания, мероприятия.'
      }
,      tip: {
        zh: 'QQ群文件功能很实用，老师会在群里上传课件、作业模板等文件，记得定期查看并下载保存。',
        en: 'QQ group file sharing is very practical — teachers upload course materials and homework templates. Remember to check and save files regularly.',
        ru: 'Функция файлов в группах QQ очень полезна — преподаватели загружают материалы и шаблоны. Не забывайте регулярно проверять и сохранять файлы.'
      }
    },
    {
      title: { zh: 'QQ的其他功能', en: 'Other QQ features', ru: 'Другие функции QQ' },
      desc: {
        zh: '①QQ空间：类似朋友圈，可以发布动态、照片和日志；②QQ邮箱：注册QQ时自动获得（qq号@qq.com），很多学校和机构用QQ邮箱接收正式通知；③QQ频道：类似Discord的兴趣社区；④屏幕共享：在线课堂常用功能。',
        en: '① QQ Zone: Similar to WeChat Moments, post updates, photos and journals; ② QQ Mail: Automatically created with QQ account (QQ_number@qq.com), many schools use it for official notices; ③ QQ Channels: Interest-based communities similar to Discord; ④ Screen sharing: Commonly used for online classes.',
        ru: '① QQ Зона: аналог ленты WeChat, публикация обновлений, фото и записей; ② QQ Почта: автоматически создаётся с аккаунтом QQ (номер@qq.com), многие вузы используют для официальных уведомлений; ③ QQ Каналы: сообщества по интересам, как Discord; ④ Демонстрация экрана: используется для онлайн-занятий.'
      }
,      tip: {
        zh: '注意：QQ消息可能会有较多"@全体成员"的通知，如果觉得打扰可以在群设置中开启"消息免打扰"模式。',
        en: 'Note: QQ groups may have many "@All Members" notifications. If bothersome, enable "Mute Notifications" in group settings.',
        ru: 'Примечание: в группах QQ много уведомлений "@Все". Если мешает, включите "Без уведомлений" в настройках группы.'
      }
    }
  ],
  faq: [
    { q: { zh: '外国人能注册吗？', en: 'Can foreigners register?', ru: 'Могут иностранцы зарегистрироваться?' }, a: { zh: '大部分中国社交平台支持外国手机号注册，但部分功能可能受限。建议使用中国手机号注册以获得完整功能。', en: 'Most Chinese social platforms support foreign phone registration, but some features may be limited. Use a Chinese number for full access.', ru: 'Большинство поддерживают иностраные номера, но с ограничениями. Китайский номер — полный доступ.' } },
  ],
  nextGuides: ['wechat-full-guide', 'choose-phone-plan', 'recharge-phone']
};