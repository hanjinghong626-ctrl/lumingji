// Guide: 选课与注册
export default {
  id: 'course-registration',
  category: 'academic',
  icon: '📚',
  type: 'hands-on',
  difficulty: 2,
  estimatedTime: 60,
  apps: [],
  prerequisites: ['first-landing-overview'],
  tags: ['course', 'registration', 'academic'],
  title: {
    zh: '选课与注册',
    en: 'Course Registration',
    ru: 'Регистрация на курсы'
  },
  summary: {
    zh: '选课系统使用、学分要求、课程类型与选课策略',
    en: 'Registration system usage, credit requirements, course types and selection strategies',
    ru: 'Использование системы регистрации, кредиты, типы курсов и стратегии выбора'
  },
  intro: {
    zh: '每学期的选课是留学生学术生活的起点。中国大学的选课系统有自己的特点，了解规则和流程非常重要。',
    en: 'Course registration each semester is the starting point of academic life for international students. Chinese university registration systems have their own characteristics — understanding the rules and process is essential.',
    ru: 'Регистрация на курсы каждый семестр — начало академической жизни. Системы китайских вузов имеют свои особенности.'
  },
  preparation: {
    zh: [
      '学生账号和密码',
      '培养方案/课程手册',
      '了解本专业的学分要求'
    ],
    en: [
      'Student account and password',
      'Training plan/curriculum handbook',
      'Know your major\'s credit requirements'
    ],
    ru: [
      'Учётная запись студента',
      'Учебный план',
      'Знайте требования по кредитам вашей специальности'
    ]
  },
  steps: [
    {
      title: {
        zh: '了解培养方案',
        en: 'Understand Your Curriculum',
        ru: 'Изучите учебный план'
      },
      desc: {
        zh: '选课前必须先了解培养方案：\n\n📖 培养方案是什么？\n• 列出你毕业所需的全部课程和学分\n• 分为：必修课、专业选修课、公共选修课\n• 国际学生可能有单独的简化方案\n\n📍 在哪里找？\n• 学院官网 → "培养方案"或"教学计划"\n• 导师或教务老师处索取\n• 国际学生办公室也可能提供\n\n📊 学分结构（本科示例）：\n• 必修课：约60-80学分\n• 专业选修：约20-30学分\n• 公共选修：约10-15学分\n• 毕业论文/设计：约10学分\n• 总计约120-160学分\n\n💡 留学生的必修课中，通常包含：汉语课、中国概况等',
        en: 'Before registering, understand your curriculum first:\n\n📖 What is a training plan?\n• Lists all courses and credits needed for graduation\n• Categories: required, major elective, general elective\n• International students may have a separate simplified plan\n\n📍 Where to find it?\n• School website → "培养方案" or "教学计划"\n• Ask your advisor or academic affairs teacher\n• International student office may also provide it\n\n📊 Credit structure (undergraduate example):\n• Required: ~60-80 credits\n• Major elective: ~20-30 credits\n• General elective: ~10-15 credits\n• Thesis/design: ~10 credits\n• Total ~120-160 credits\n\n💡 For international students, required courses usually include: Chinese language, China studies',
        ru: 'Перед регистрацией изучите учебный план:\n\n📖 Что это?\n• Список всех курсов и кредитов для выпуска\n• Обязательные, факультативы, общие elective\n• Для иностранцев может быть упрощённый план\n\n📍 Где найти?\n• Сайт факультета\n• У научного руководителя\n\n📊 Структура кредитов:\n• Обязательные: ~60-80\n• Факультативы: ~20-30\n• Общие: ~10-15\n• Диплом: ~10\n\n💡 Для иностранцев обычно обязательны: китайский язык, курсы о Китае'
      }
    },
    {
      title: {
        zh: '网上选课操作',
        en: 'Online Registration Process',
        ru: 'Онлайн-регистрация'
      },
      desc: {
        zh: '选课系统操作步骤：\n\n1️⃣ 登录教务系统\n• 通常网址：jw.xxx.edu.cn\n• 用学号+密码登录\n• 选课前需修改初始密码\n\n2️⃣ 进入选课模块\n• 找到"网上选课"或"选课系统"\n• 注意选课开放时间（一般提前1-2周公布）\n\n3️⃣ 浏览可选课程\n• 按学院/课程类型筛选\n• 查看课程时间、学分、教师\n• 注意课程容量（满员后无法选）\n\n4️⃣ 添加课程\n• 点击"选课"按钮\n• 确认课程时间不冲突\n• 提交选课结果\n\n⚠️ 选课常见问题：\n• 热门课程需要"抢课"——开放瞬间涌入大量学生\n• 建议提前选好备选课程\n• 退补选阶段可以调整\n• 有些课程需要教师同意才能选',
        en: 'Registration system steps:\n\n1️⃣ Log in to academic system\n• Usually at jw.xxx.edu.cn\n• Use student ID + password\n• Change initial password before registration\n\n2️⃣ Enter registration module\n• Find "网上选课" or "选课系统"\n• Note registration open dates (announced 1-2 weeks ahead)\n\n3️⃣ Browse available courses\n• Filter by school/course type\n• Check schedule, credits, instructor\n• Note course capacity (can\'t enroll when full)\n\n4️⃣ Add courses\n• Click "选课" button\n• Confirm no schedule conflicts\n• Submit registration\n\n⚠️ Common issues:\n• Popular courses require "抢课" — rush in the moment it opens\n• Prepare backup course options\n• Adjustment period allows changes\n• Some courses need instructor approval',
        ru: 'Шаги регистрации:\n1️⃣ Войдите в систему (jw.xxx.edu.cn)\n2️⃣ Модуль "网上选课"\n3️⃣ Просмотр курсов\n4️⃣ Добавление курсов\n\n⚠️ Популярные курсы — спешите в момент открытия. Подготовьте запасные варианты.'
      }
    }
  ],
  faq: [
    {
      q: {
        zh: '选错课了怎么办？',
        en: 'What if I chose the wrong course?',
        ru: 'Что делать, если выбрал не тот курс?'
      },
      a: {
        zh: '开学前两周通常是"退补选"阶段，可以自由退课和换课。超过退补选期限再退课可能会在成绩单上留下"退课"记录。遇到特殊情况可以找教务老师申请特殊处理。',
        en: 'The first two weeks of the semester are usually the "add/drop" period — you can freely drop and switch courses. After the deadline, dropping may leave a "withdrawal" record on your transcript. For special circumstances, apply to academic affairs for special handling.',
        ru: 'Первые две недели — период добавления/исключения. После — запись об исключении в транскрипте. В особых случаях обратитесь в деканат.'
      }
    }
  ],
  nextGuides: ['library-guide', 'academic-writing']
};
