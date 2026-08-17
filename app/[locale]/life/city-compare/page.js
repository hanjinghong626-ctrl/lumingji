'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useI18n } from '../../../../i18n-context';
import SEO from '../../../components/SEO';

/* ═══════════════════════════════════════════════════
   城市数据库 — 基于真实公开数据整理
   ═══════════════════════════════════════════════════ */
const CITY_DATA = {
  // ═══ 一线城市 ═══
  beijing: {
    id: 'beijing', emoji: '🏯', color: '#c0392b',
    zh: { name: '北京', province: '首都', highlights: '政治中心、故宫、长城' },
    en: { name: 'Beijing', province: 'Capital', highlights: 'Political center, Forbidden City, Great Wall' },
    ru: { name: 'Пекин', province: 'Столица', highlights: 'Политический центр, Запретный город, Великая стена' },
    tuition: 35000, rent: 3500, food: 1800, transport: 250,
    climate: { zh: '温带大陆性，四季分明', en: 'Continental, four distinct seasons', ru: 'Континентальный, четыре сезона' },
    climate_score: 60, community_score: 95, english_score: 65, food_score: 90, safety_score: 92, entertainment_score: 95, healthcare_score: 95, overall: 88,
  },
  shanghai: {
    id: 'shanghai', emoji: '🌃', color: '#2980b9',
    zh: { name: '上海', province: '上海', highlights: '国际都市、外滩、现代与传统交融' },
    en: { name: 'Shanghai', province: 'Shanghai', highlights: 'Global metropolis, The Bund, Modern meets tradition' },
    ru: { name: 'Шанхай', province: 'Шанхай', highlights: 'Мегаполис, набережная Вайтань, современность и традиции' },
    tuition: 38000, rent: 3800, food: 2000, transport: 250,
    climate: { zh: '亚热带季风，夏季湿热', en: 'Subtropical, humid hot summer', ru: 'Субтропический, влажное жаркое лето' },
    climate_score: 65, community_score: 90, english_score: 80, food_score: 85, safety_score: 90, entertainment_score: 95, healthcare_score: 92, overall: 87,
  },
  guangzhou: {
    id: 'guangzhou', emoji: '🌺', color: '#e67e22',
    zh: { name: '广州', province: '广东', highlights: '美食之都、花城、千年商都' },
    en: { name: 'Guangzhou', province: 'Guangdong', highlights: 'Food capital, Flower City, ancient trade port' },
    ru: { name: 'Гуанчжоу', province: 'Гуандун', highlights: 'Столица еды, Город цветов, древний торговый порт' },
    tuition: 30000, rent: 2200, food: 1500, transport: 200,
    climate: { zh: '亚热带，全年温暖潮湿', en: 'Subtropical, warm and humid year-round', ru: 'Субтропический, тёплый и влажный круглый год' },
    climate_score: 55, community_score: 85, english_score: 60, food_score: 95, safety_score: 85, entertainment_score: 82, healthcare_score: 85, overall: 82,
  },
  shenzhen: {
    id: 'shenzhen', emoji: '🏙️', color: '#e74c3c',
    zh: { name: '深圳', province: '广东', highlights: '科技创新之都、设计之都、年轻人之城' },
    en: { name: 'Shenzhen', province: 'Guangdong', highlights: 'Tech innovation hub, Design city, Young professionals' },
    ru: { name: 'Шэньчжэнь', province: 'Гуандун', highlights: 'Технологический центр, город дизайна, город молодёжи' },
    tuition: 32000, rent: 3500, food: 1800, transport: 220,
    climate: { zh: '亚热带海洋性，全年温暖', en: 'Subtropical maritime, warm year-round', ru: 'Субтропический морской, тёплый круглый год' },
    climate_score: 60, community_score: 72, english_score: 70, food_score: 82, safety_score: 88, entertainment_score: 80, healthcare_score: 85, overall: 80,
  },
  // ═══ 新一线城市 ═══
  hangzhou: {
    id: 'hangzhou', emoji: '🌿', color: '#2ecc71',
    zh: { name: '杭州', province: '浙江', highlights: '西湖、互联网之都、丝绸之府' },
    en: { name: 'Hangzhou', province: 'Zhejiang', highlights: 'West Lake, Internet capital, Silk heritage' },
    ru: { name: 'Ханчжоу', province: 'Чжэцзян', highlights: 'Западное озеро, столица интернета, шёлковая столица' },
    tuition: 30000, rent: 2500, food: 1500, transport: 180,
    climate: { zh: '亚热带季风，四季分明', en: 'Subtropical monsoon, four seasons', ru: 'Субтропический муссонный, четыре сезона' },
    climate_score: 72, community_score: 75, english_score: 55, food_score: 82, safety_score: 88, entertainment_score: 78, healthcare_score: 85, overall: 82,
  },
  chengdu: {
    id: 'chengdu', emoji: '🐼', color: '#27ae60',
    zh: { name: '成都', province: '四川', highlights: '熊猫故乡、火锅之都、慢生活' },
    en: { name: 'Chengdu', province: 'Sichuan', highlights: 'Panda home, Hotpot capital, Slow life' },
    ru: { name: 'Чэнду', province: 'Сычуань', highlights: 'Родина панд, столица хого, медленная жизнь' },
    tuition: 25000, rent: 1600, food: 1200, transport: 150,
    climate: { zh: '亚热带湿润，多云少晴', en: 'Subtropical humid, cloudy, mild', ru: 'Субтропический влажный, облачный, мягкий' },
    climate_score: 62, community_score: 70, english_score: 50, food_score: 92, safety_score: 86, entertainment_score: 80, healthcare_score: 78, overall: 80,
  },
  chongqing: {
    id: 'chongqing', emoji: '🌶️', color: '#e74c3c',
    zh: { name: '重庆', province: '重庆', highlights: '山城、火锅之都、8D魔幻城市' },
    en: { name: 'Chongqing', province: 'Chongqing', highlights: 'Mountain City, Hotpot capital, 8D魔幻city' },
    ru: { name: 'Чунцин', province: 'Чунцин', highlights: 'Горный город, столица хого, магический 3D-город' },
    tuition: 24000, rent: 1200, food: 1000, transport: 150,
    climate: { zh: '亚热带湿润，夏季极热', en: 'Subtropical humid, extremely hot summer', ru: 'Субтропический влажный, крайне жаркое лето' },
    climate_score: 48, community_score: 68, english_score: 42, food_score: 90, safety_score: 84, entertainment_score: 75, healthcare_score: 76, overall: 76,
  },
  wuhan: {
    id: 'wuhan', emoji: '🌸', color: '#d35400',
    zh: { name: '武汉', province: '湖北', highlights: '九省通衢、樱花、热干面' },
    en: { name: 'Wuhan', province: 'Hubei', highlights: 'Central hub, Cherry blossoms, Hot dry noodles' },
    ru: { name: 'Ухань', province: 'Хубэй', highlights: 'Центральный узел, сакура, острая лапша' },
    tuition: 25000, rent: 1400, food: 1100, transport: 150,
    climate: { zh: '亚热带，夏极热冬阴冷', en: 'Subtropical, extremely hot summer, damp cold winter', ru: 'Субтропический, очень жаркое лето, сырая зима' },
    climate_score: 50, community_score: 75, english_score: 52, food_score: 85, safety_score: 85, entertainment_score: 72, healthcare_score: 82, overall: 78,
  },
  nanjing: {
    id: 'nanjing', emoji: '🍂', color: '#8e44ad',
    zh: { name: '南京', province: '江苏', highlights: '六朝古都、梧桐大道、文化底蕴' },
    en: { name: 'Nanjing', province: 'Jiangsu', highlights: 'Ancient capital, Plane tree avenues, Cultural heritage' },
    ru: { name: 'Нанкин', province: 'Цзянсу', highlights: 'Древняя столица, аллеи платанов, культурное наследие' },
    tuition: 28000, rent: 1800, food: 1300, transport: 180,
    climate: { zh: '亚热带，夏热冬冷', en: 'Subtropical, hot summer, cold winter', ru: 'Субтропический, жаркое лето, холодная зима' },
    climate_score: 60, community_score: 78, english_score: 58, food_score: 80, safety_score: 88, entertainment_score: 78, healthcare_score: 85, overall: 82,
  },
  tianjin: {
    id: 'tianjin', emoji: '🎡', color: '#3498db',
    zh: { name: '天津', province: '天津', highlights: '港口城市、煎饼果子、相声之乡' },
    en: { name: 'Tianjin', province: 'Tianjin', highlights: 'Port city, Jianbing Guozi, Crosstalk hometown' },
    ru: { name: 'Тяньцзинь', province: 'Тяньцзинь', highlights: 'Портовый город, цзяньбин, родина китайского стендапа' },
    tuition: 26000, rent: 1500, food: 1100, transport: 150,
    climate: { zh: '温带大陆性，四季分明', en: 'Continental, four distinct seasons', ru: 'Континентальный, четыре сезона' },
    climate_score: 58, community_score: 65, english_score: 45, food_score: 78, safety_score: 85, entertainment_score: 68, healthcare_score: 80, overall: 75,
  },
  suzhou: {
    id: 'suzhou', emoji: '🏮', color: '#1abc9c',
    zh: { name: '苏州', province: '江苏', highlights: '园林之城、水乡古镇、制造业重镇' },
    en: { name: 'Suzhou', province: 'Jiangsu', highlights: 'Garden city, Ancient water towns, Manufacturing hub' },
    ru: { name: 'Сучжоу', province: 'Цзянсу', highlights: 'Город садов, древние водные города, центр производства' },
    tuition: 27000, rent: 1600, food: 1300, transport: 150,
    climate: { zh: '亚热带季风，温润宜人', en: 'Subtropical monsoon, mild and pleasant', ru: 'Субтропический муссонный, мягкий и приятный' },
    climate_score: 70, community_score: 62, english_score: 48, food_score: 80, safety_score: 88, entertainment_score: 72, healthcare_score: 80, overall: 78,
  },
  // ═══ 二线城市 ═══
  xian: {
    id: 'xian', emoji: '🏛️', color: '#b8860b',
    zh: { name: '西安', province: '陕西', highlights: '兵马俑、回民街、丝路起点' },
    en: { name: "Xi'an", province: "Shaanxi", highlights: 'Terracotta Warriors, Muslim Quarter, Silk Road origin' },
    ru: { name: "Сиань", province: 'Шэньси', highlights: 'Терракотовая армия, Мусульманский квартал, начало Шёлкового пути' },
    tuition: 24000, rent: 1200, food: 1000, transport: 130,
    climate: { zh: '温带大陆性，干燥少雨', en: 'Continental, dry, less rainfall', ru: 'Континентальный, сухой, мало осадков' },
    climate_score: 58, community_score: 68, english_score: 48, food_score: 88, safety_score: 86, entertainment_score: 76, healthcare_score: 75, overall: 76,
  },
  changsha: {
    id: 'changsha', emoji: '🌶️', color: '#e67e22',
    zh: { name: '长沙', province: '湖南', highlights: '娱乐之都、湘菜发源地、新一线' },
    en: { name: 'Changsha', province: 'Hunan', highlights: 'Entertainment capital, Hunan cuisine origin, New first-tier' },
    ru: { name: 'Чанша', province: 'Хунань', highlights: 'Столица развлечений, родина кухни Сян, новый первый уровень' },
    tuition: 24000, rent: 1200, food: 1000, transport: 130,
    climate: { zh: '亚热带，夏热冬冷', en: 'Subtropical, hot summer, cold winter', ru: 'Субтропический, жаркое лето, холодная зима' },
    climate_score: 55, community_score: 65, english_score: 42, food_score: 88, safety_score: 84, entertainment_score: 78, healthcare_score: 75, overall: 76,
  },
  zhengzhou: {
    id: 'zhengzhou', emoji: '🚂', color: '#7f8c8d',
    zh: { name: '郑州', province: '河南', highlights: '中原腹地、铁路枢纽、嵩山少林' },
    en: { name: 'Zhengzhou', province: 'Henan', highlights: 'Central China, Railway hub, Shaolin Temple' },
    ru: { name: 'Чжэнчжоу', province: 'Хэнань', highlights: 'Центральный Китай, ж/д узел, храм Шаолинь' },
    tuition: 23000, rent: 1200, food: 1000, transport: 130,
    climate: { zh: '温带大陆性，四季分明', en: 'Continental, four distinct seasons', ru: 'Континентальный, четыре сезона' },
    climate_score: 55, community_score: 58, english_score: 38, food_score: 75, safety_score: 82, entertainment_score: 65, healthcare_score: 74, overall: 72,
  },
  jinan: {
    id: 'jinan', emoji: '⛲', color: '#2980b9',
    zh: { name: '济南', province: '山东', highlights: '泉城、大明湖、趵突泉' },
    en: { name: "Ji'nan", province: 'Shandong', highlights: 'Spring City, Daming Lake, Baotu Spring' },
    ru: { name: 'Цзинань', province: 'Шаньдун', highlights: 'Город ключей, озеро Дамин, ключ Баоту' },
    tuition: 25000, rent: 1300, food: 1100, transport: 130,
    climate: { zh: '温带季风，四季分明', en: 'Temperate monsoon, four distinct seasons', ru: 'Умеренный муссонный, четыре сезона' },
    climate_score: 62, community_score: 60, english_score: 42, food_score: 76, safety_score: 85, entertainment_score: 68, healthcare_score: 78, overall: 74,
  },
  kunming: {
    id: 'kunming', emoji: '🌷', color: '#e91e63',
    zh: { name: '昆明', province: '云南', highlights: '春城、四季如春、云南首府' },
    en: { name: 'Kunming', province: 'Yunnan', highlights: 'Spring City, mild year-round, Gateway to Yunnan' },
    ru: { name: 'Куньмин', province: 'Юньнань', highlights: 'Город весны, мягкий круглый год, ворота в Юньнань' },
    tuition: 22000, rent: 1100, food: 1000, transport: 120,
    climate: { zh: '高原气候，四季如春', en: 'Plateau climate, spring-like year-round', ru: 'Плоскогорный климат, как весна круглый год' },
    climate_score: 92, community_score: 62, english_score: 38, food_score: 78, safety_score: 80, entertainment_score: 70, healthcare_score: 70, overall: 78,
  },
  xiamen: {
    id: 'xiamen', emoji: '🏖️', color: '#00bcd4',
    zh: { name: '厦门', province: '福建', highlights: '海上花园、鼓浪屿、文艺之城' },
    en: { name: 'Xiamen', province: 'Fujian', highlights: 'Sea Garden, Gulangyu, Artsy city' },
    ru: { name: 'Сямэнь', province: 'Фуцзянь', highlights: 'Морской сад, Гуланъюй, артистичный город' },
    tuition: 26000, rent: 1800, food: 1300, transport: 150,
    climate: { zh: '亚热带海洋性，温暖湿润', en: 'Subtropical maritime, warm and humid', ru: 'Субтропический морской, тёплый и влажный' },
    climate_score: 85, community_score: 55, english_score: 50, food_score: 80, safety_score: 88, entertainment_score: 72, healthcare_score: 76, overall: 78,
  },
  fuzhou: {
    id: 'fuzhou', emoji: '🌳', color: '#4caf50',
    zh: { name: '福州', province: '福建', highlights: '榕城、闽都文化、温泉之城' },
    en: { name: 'Fuzhou', province: 'Fujian', highlights: 'Banyan City, Min culture, Hot spring city' },
    ru: { name: 'Фучжоу', province: 'Фуцзянь', highlights: 'Город баньянов, культура Минь, город горячих источников' },
    tuition: 24000, rent: 1400, food: 1200, transport: 130,
    climate: { zh: '亚热带海洋性，温暖多雨', en: 'Subtropical maritime, warm and rainy', ru: 'Субтропический морской, тёплый и дождливый' },
    climate_score: 72, community_score: 52, english_score: 40, food_score: 78, safety_score: 86, entertainment_score: 65, healthcare_score: 74, overall: 73,
  },
  nanning: {
    id: 'nanning', emoji: '🌴', color: '#009688',
    zh: { name: '南宁', province: '广西', highlights: '绿城、东盟门户、亚热带风情' },
    en: { name: 'Nanning', province: 'Guangxi', highlights: 'Green City, ASEAN gateway, Tropical charm' },
    ru: { name: 'Наньнин', province: 'Гуанси', highlights: 'Зелёный город, ворота АСЕАН, тропический колорит' },
    tuition: 22000, rent: 900, food: 900, transport: 100,
    climate: { zh: '亚热带，全年温暖', en: 'Subtropical, warm year-round', ru: 'Субтропический, тёплый круглый год' },
    climate_score: 52, community_score: 55, english_score: 35, food_score: 75, safety_score: 80, entertainment_score: 62, healthcare_score: 68, overall: 70,
  },
  guiyang: {
    id: 'guiyang', emoji: '🏔️', color: '#607d8b',
    zh: { name: '贵阳', province: '贵州', highlights: '避暑之都、大数据中心、山地公园' },
    en: { name: 'Guiyang', province: 'Guizhou', highlights: 'Summer resort, Big data hub, Mountain parks' },
    ru: { name: 'Гуйян', province: 'Гуйчжоу', highlights: 'Летний курорт, центр больших данных, горные парки' },
    tuition: 21000, rent: 900, food: 900, transport: 100,
    climate: { zh: '高原湿润，夏无酷暑', en: 'Plateau humid, cool summer', ru: 'Плоскогорный влажный, прохладное лето' },
    climate_score: 80, community_score: 50, english_score: 32, food_score: 76, safety_score: 82, entertainment_score: 60, healthcare_score: 66, overall: 72,
  },
  haikou: {
    id: 'haikou', emoji: '🌴', color: '#ff9800',
    zh: { name: '海口', province: '海南', highlights: '椰城、自贸港、热带滨海' },
    en: { name: 'Haikou', province: 'Hainan', highlights: 'Coconut City, Free Trade Port, Tropical seaside' },
    ru: { name: 'Хайкоу', province: 'Хайнань', highlights: 'Город кокосов, зона свободной торговли, тропическое побережье' },
    tuition: 22000, rent: 1100, food: 1100, transport: 100,
    climate: { zh: '热带季风，全年温暖', en: 'Tropical monsoon, warm year-round', ru: 'Тропический муссонный, тёплый круглый год' },
    climate_score: 68, community_score: 50, english_score: 38, food_score: 75, safety_score: 82, entertainment_score: 65, healthcare_score: 70, overall: 72,
  },
  // ═══ 区域中心城市 ═══
  shenyang: {
    id: 'shenyang', emoji: '🏗️', color: '#455a64',
    zh: { name: '沈阳', province: '辽宁', highlights: '东北中心、清故宫、工业基地' },
    en: { name: 'Shenyang', province: 'Liaoning', highlights: 'Northeast hub, Qing Palace, Industrial base' },
    ru: { name: 'Шэньян', province: 'Ляонин', highlights: 'Центр Северо-Востока, дворец Цин, промышленная база' },
    tuition: 23000, rent: 1100, food: 1000, transport: 120,
    climate: { zh: '温带大陆性，冬冷夏热', en: 'Continental, cold winter, hot summer', ru: 'Континентальный, холодная зима, жаркое лето' },
    climate_score: 48, community_score: 60, english_score: 40, food_score: 75, safety_score: 82, entertainment_score: 68, healthcare_score: 76, overall: 72,
  },
  dalian: {
    id: 'dalian', emoji: '⚓', color: '#16a085',
    zh: { name: '大连', province: '辽宁', highlights: '海滨花园、日韩企业集聚、广场之城' },
    en: { name: 'Dalian', province: 'Liaoning', highlights: 'Seaside garden, Japanese/Korean business hub, City of squares' },
    ru: { name: 'Далянь', province: 'Ляонин', highlights: 'Приморский сад, японский/корейский бизнес, город площадей' },
    tuition: 23000, rent: 1300, food: 1100, transport: 130,
    climate: { zh: '暖温带海洋性，四季宜人', en: 'Warm temperate maritime, pleasant four seasons', ru: 'Тёплый морской, приятные четыре сезона' },
    climate_score: 80, community_score: 65, english_score: 45, food_score: 78, safety_score: 87, entertainment_score: 72, healthcare_score: 76, overall: 77,
  },
  harbin: {
    id: 'harbin', emoji: '❄️', color: '#2c3e50',
    zh: { name: '哈尔滨', province: '黑龙江', highlights: '冰城、俄式风情、冰雪大世界' },
    en: { name: 'Harbin', province: 'Heilongjiang', highlights: 'Ice City, Russian influence, Ice Festival' },
    ru: { name: 'Харбин', province: 'Хэйлунцзян', highlights: 'Ледяной город, русская культура, Ледяной фестиваль' },
    tuition: 22000, rent: 1000, food: 1000, transport: 120,
    climate: { zh: '寒温带，冬季漫长酷寒', en: 'Cold temperate, long harsh winter', ru: 'Холодный умеренный, долгая суровая зима' },
    climate_score: 35, community_score: 80, english_score: 40, food_score: 75, safety_score: 85, entertainment_score: 70, healthcare_score: 72, overall: 70,
  },
  qingdao: {
    id: 'qingdao', emoji: '🌊', color: '#3d9970',
    zh: { name: '青岛', province: '山东', highlights: '海滨城市、啤酒之城、德式建筑' },
    en: { name: 'Qingdao', province: 'Shandong', highlights: 'Coastal city, Beer capital, German architecture' },
    ru: { name: 'Циндао', province: 'Шаньдун', highlights: 'Приморский город, пиво, немецкая архитектура' },
    tuition: 26000, rent: 1500, food: 1200, transport: 150,
    climate: { zh: '温带海洋性，夏凉冬冷', en: 'Temperate coastal, cool summer, cold winter', ru: 'Умеренный морской, прохладное лето, холодная зима' },
    climate_score: 78, community_score: 72, english_score: 55, food_score: 82, safety_score: 88, entertainment_score: 75, healthcare_score: 80, overall: 84,
  },
  hefei: {
    id: 'hefei', emoji: '🔬', color: '#7c4dff',
    zh: { name: '合肥', province: '安徽', highlights: '科教名城、新能源产业、包公故里' },
    en: { name: 'Hefei', province: 'Anhui', highlights: 'Science city, New energy hub, Bao Zheng hometown' },
    ru: { name: 'Хэфэй', province: 'Аньхой', highlights: 'Научный город, центр новой энергетики, родина Бао Чжэна' },
    tuition: 24000, rent: 1100, food: 1000, transport: 120,
    climate: { zh: '亚热带季风，四季分明', en: 'Subtropical monsoon, four seasons', ru: 'Субтропический муссонный, четыре сезона' },
    climate_score: 60, community_score: 55, english_score: 40, food_score: 72, safety_score: 84, entertainment_score: 65, healthcare_score: 76, overall: 73,
  },
  lanzhou: {
    id: 'lanzhou', emoji: '🍜', color: '#8d6e63',
    zh: { name: '兰州', province: '甘肃', highlights: '黄河之城、牛肉面之乡、丝路重镇' },
    en: { name: 'Lanzhou', province: 'Gansu', highlights: 'Yellow River city, Beef noodles, Silk Road town' },
    ru: { name: 'Ланьчжоу', province: 'Ганьсу', highlights: 'Город Жёлтой реки, говяжья лапша, город Шёлкового пути' },
    tuition: 20000, rent: 800, food: 800, transport: 100,
    climate: { zh: '温带大陆性，干燥少雨', en: 'Continental, dry, little rain', ru: 'Континентальный, сухой, мало дождей' },
    climate_score: 42, community_score: 52, english_score: 30, food_score: 85, safety_score: 80, entertainment_score: 55, healthcare_score: 65, overall: 66,
  },
  urumqi: {
    id: 'urumqi', emoji: '🐫', color: '#a1887f',
    zh: { name: '乌鲁木齐', province: '新疆', highlights: '丝路明珠、多元文化、西域风情' },
    en: { name: 'Urumqi', province: 'Xinjiang', highlights: 'Silk Road gem, Multicultural, Western Region charm' },
    ru: { name: 'Урумчи', province: 'Синьцзян', highlights: 'Жемчужина Шёлкового пути, мультикультура, колорит Западного края' },
    tuition: 20000, rent: 800, food: 900, transport: 100,
    climate: { zh: '温带大陆性，干旱少雨', en: 'Continental, arid, little rain', ru: 'Континентальный, засушливый, мало осадков' },
    climate_score: 38, community_score: 58, english_score: 28, food_score: 82, safety_score: 88, entertainment_score: 60, healthcare_score: 62, overall: 68,
  },
  taiyuan: {
    id: 'taiyuan', emoji: '⛏️', color: '#78909c',
    zh: { name: '太原', province: '山西', highlights: '龙城、晋商文化、能源之都' },
    en: { name: 'Taiyuan', province: 'Shanxi', highlights: 'Dragon City, Jin merchant culture, Energy capital' },
    ru: { name: 'Тайюань', province: 'Шаньси', highlights: 'Город Дракона, культура циньских торговцев, столица энергетики' },
    tuition: 22000, rent: 900, food: 900, transport: 100,
    climate: { zh: '温带大陆性，干燥', en: 'Continental, dry', ru: 'Континентальный, сухой' },
    climate_score: 45, community_score: 52, english_score: 32, food_score: 70, safety_score: 82, entertainment_score: 55, healthcare_score: 68, overall: 66,
  },
};

const CITY_LIST = Object.keys(CITY_DATA);

/* ─── 雷达图维度 ─── */
const RADAR_DIMS = [
  { key: 'climate_score', icon: '☀️' },
  { key: 'community_score', icon: '👥' },
  { key: 'english_score', icon: '🗣️' },
  { key: 'food_score', icon: '🍜' },
  { key: 'safety_score', icon: '🛡️' },
  { key: 'entertainment_score', icon: '🎭' },
  { key: 'healthcare_score', icon: '🏥' },
];

/* ─── 费用维度 ─── */
const COST_DIMS = [
  { key: 'tuition', unit: '¥', suffix: '/年' },
  { key: 'rent', unit: '¥', suffix: '/月' },
  { key: 'food', unit: '¥', suffix: '/月' },
  { key: 'transport', unit: '¥', suffix: '/月' },
];

/* ─── 格式化金额 ─── */
function fmtMoney(v) {
  return '¥' + v.toLocaleString();
}

/* ─── 颜色工具 ─── */
function scoreColor(score) {
  if (score >= 85) return '#2ecc71';
  if (score >= 70) return '#5aa085';
  if (score >= 55) return '#f39c12';
  return '#e74c3c';
}

function getBarGradient(score) {
  if (score >= 85) return 'linear-gradient(90deg, #2ecc71, #27ae60)';
  if (score >= 70) return 'linear-gradient(90deg, #5aa085, #4a9075)';
  if (score >= 55) return 'linear-gradient(90deg, #f39c12, #e67e22)';
  return 'linear-gradient(90deg, #e74c3c, #c0392b)';
}

export default function CityComparePage() {
  const { locale, t } = useI18n();
  const l = locale;
  const [selected, setSelected] = useState(['qingdao', 'beijing', 'shanghai']);
  const [showPicker, setShowPicker] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleCity = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const addCity = (id) => {
    if (!selected.includes(id)) {
      setSelected([...selected, id]);
    }
  };

  const removeCity = (id) => {
    setSelected(selected.filter((c) => c !== id));
  };

  const cities = selected.map((id) => CITY_DATA[id]).filter(Boolean);
  const maxCosts = {};
  COST_DIMS.forEach((d) => {
    maxCosts[d.key] = Math.max(...cities.map((c) => c[d.key]), 1);
  });

  /* ─── SVG 雷达图 ─── */
  function RadarChart({ cities: radarCities }) {
    const cx = 160, cy = 155, R = 110;
    const n = RADAR_DIMS.length;
    const angleStep = (2 * Math.PI) / n;
    const levels = [20, 40, 60, 80, 100];

    function polarToXY(angle, radius) {
      return {
        x: cx + radius * Math.cos(angle - Math.PI / 2),
        y: cy + radius * Math.sin(angle - Math.PI / 2),
      };
    }

    function getPoints(scores) {
      return scores
        .map((s, i) => {
          const r = (s / 100) * R;
          const { x, y } = polarToXY(i * angleStep, r);
          return `${x},${y}`;
        })
        .join(' ');
    }

  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f0f4f8 0%, #f8fafc 30%, #fff 60%, #f8fafc 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <SEO
        title={`${t('city_compare.title')} — ${t('site.name')}`}
        description={t('city_compare.hero_desc')}
        ogType="website"
      />

      {/* ── 全局动画 ── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cityGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes windowFlicker {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .reveal-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* ═══ Hero — 中国城市：古典与现代 ═══ */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #f5e6d3 0%, #e8d4b8 25%, #d4c5a9 50%, #b8d4e8 75%, #a8c8e0 100%)',
        padding: '80px 16px 60px',
        overflow: 'hidden',
        minHeight: '45vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* 城市天际线：左侧古典 + 右侧现代 */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '45%', pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0 }}>
            {/* 左侧：古典建筑群（北京/西安风格） */}
            {/* 城墙 */}
            <rect x="0" y="180" width="320" height="140" fill="rgba(139,90,43,0.12)"/>
            {/* 城垛 */}
            <rect x="20" y="170" width="20" height="20" fill="rgba(139,90,43,0.15)"/>
            <rect x="60" y="170" width="20" height="20" fill="rgba(139,90,43,0.15)"/>
            <rect x="100" y="170" width="20" height="20" fill="rgba(139,90,43,0.15)"/>
            <rect x="140" y="170" width="20" height="20" fill="rgba(139,90,43,0.15)"/>
            <rect x="180" y="170" width="20" height="20" fill="rgba(139,90,43,0.15)"/>
            <rect x="220" y="170" width="20" height="20" fill="rgba(139,90,43,0.15)"/>
            <rect x="260" y="170" width="20" height="20" fill="rgba(139,90,43,0.15)"/>
            <rect x="300" y="170" width="20" height="20" fill="rgba(139,90,43,0.15)"/>
            {/* 城门拱门 */}
            <path d="M 120 240 Q 120 220 140 220 Q 160 220 160 240 L 160 320 L 120 320 Z" fill="rgba(139,90,43,0.18)"/>
            
            {/* 钟楼 */}
            <rect x="360" y="120" width="80" height="200" fill="rgba(139,90,43,0.14)"/>
            {/* 钟楼屋顶（飞檐） */}
            <path d="M 340 120 L 440 120 L 420 100 L 360 100 Z" fill="rgba(139,90,43,0.16)"/>
            <path d="M 350 100 L 430 100 L 410 85 L 370 85 Z" fill="rgba(139,90,43,0.18)"/>
            {/* 钟楼尖顶 */}
            <path d="M 390 85 L 400 60 L 410 85 Z" fill="rgba(139,90,43,0.2)"/>
            
            {/* 宫殿建筑群 */}
            <rect x="480" y="160" width="120" height="160" fill="rgba(139,90,43,0.12)"/>
            {/* 宫殿飞檐屋顶 */}
            <path d="M 460 160 Q 540 140 620 160" fill="none" stroke="rgba(139,90,43,0.2)" strokeWidth="8"/>
            <path d="M 470 150 Q 540 135 610 150" fill="none" stroke="rgba(139,90,43,0.18)" strokeWidth="6"/>
            {/* 宫殿柱子 */}
            <rect x="500" y="180" width="8" height="120" fill="rgba(139,90,43,0.15)"/>
            <rect x="540" y="180" width="8" height="120" fill="rgba(139,90,43,0.15)"/>
            <rect x="580" y="180" width="8" height="120" fill="rgba(139,90,43,0.15)"/>
            
            {/* 宝塔 */}
            <rect x="640" y="140" width="60" height="180" fill="rgba(139,90,43,0.13)"/>
            {/* 宝塔多层屋檐 */}
            <path d="M 630 140 L 710 140 L 700 130 L 640 130 Z" fill="rgba(139,90,43,0.16)"/>
            <path d="M 635 120 L 705 120 L 695 112 L 645 112 Z" fill="rgba(139,90,43,0.15)"/>
            <path d="M 640 100 L 700 100 L 692 93 L 648 93 Z" fill="rgba(139,90,43,0.14)"/>
            {/* 宝塔尖顶 */}
            <path d="M 665 93 L 670 70 L 675 93 Z" fill="rgba(139,90,43,0.18)"/>

            {/* 中间过渡区域 */}
            <rect x="720" y="200" width="40" height="120" fill="rgba(120,120,120,0.1)"/>
            <rect x="770" y="180" width="50" height="140" fill="rgba(120,120,120,0.12)"/>

            {/* 右侧：现代建筑群（上海/深圳风格） */}
            {/* 摩天大楼群 */}
            <rect x="840" y="100" width="45" height="220" fill="rgba(100,150,180,0.14)" rx="2"/>
            <rect x="895" y="60" width="55" height="260" fill="rgba(100,150,180,0.16)" rx="2"/>
            <rect x="960" y="130" width="40" height="190" fill="rgba(100,150,180,0.13)" rx="2"/>
            <rect x="1010" y="80" width="50" height="240" fill="rgba(100,150,180,0.15)" rx="2"/>
            <rect x="1070" y="110" width="42" height="210" fill="rgba(100,150,180,0.14)" rx="2"/>
            
            {/* 东方明珠简化版 */}
            <rect x="1130" y="90" width="8" height="230" fill="rgba(100,150,180,0.16)"/>
            <circle cx="1134" cy="140" r="18" fill="rgba(100,150,180,0.18)"/>
            <circle cx="1134" cy="200" r="14" fill="rgba(100,150,180,0.16)"/>
            <path d="M 1126 90 L 1134 70 L 1142 90 Z" fill="rgba(100,150,180,0.17)"/>
            
            {/* 更多现代高楼 */}
            <rect x="1170" y="70" width="48" height="250" fill="rgba(100,150,180,0.15)" rx="2"/>
            <rect x="1230" y="120" width="38" height="200" fill="rgba(100,150,180,0.13)" rx="2"/>
            <rect x="1280" y="90" width="45" height="230" fill="rgba(100,150,180,0.14)" rx="2"/>
            <rect x="1340" y="140" width="50" height="180" fill="rgba(100,150,180,0.12)" rx="2"/>
            <rect x="1400" y="100" width="40" height="220" fill="rgba(100,150,180,0.13)" rx="2"/>
            
            {/* 现代建筑窗户灯光 */}
            <rect x="905" y="80" width="4" height="4" fill="rgba(100,200,255,0.5)" style={{ animation: 'windowFlicker 3.5s ease-in-out infinite' }}/>
            <rect x="920" y="100" width="4" height="4" fill="rgba(255,220,150,0.4)" style={{ animation: 'windowFlicker 4s ease-in-out infinite 1s' }}/>
            <rect x="1020" y="100" width="4" height="4" fill="rgba(100,200,255,0.5)" style={{ animation: 'windowFlicker 3.8s ease-in-out infinite 0.5s' }}/>
            <rect x="1035" y="130" width="4" height="4" fill="rgba(255,220,150,0.4)" style={{ animation: 'windowFlicker 4.2s ease-in-out infinite 1.5s' }}/>
            <rect x="1180" y="90" width="4" height="4" fill="rgba(100,200,255,0.5)" style={{ animation: 'windowFlicker 3.6s ease-in-out infinite 0.8s' }}/>
            <rect x="1195" y="120" width="4" height="4" fill="rgba(255,220,150,0.4)" style={{ animation: 'windowFlicker 4.5s ease-in-out infinite 2s' }}/>
            <rect x="1290" y="110" width="4" height="4" fill="rgba(100,200,255,0.5)" style={{ animation: 'windowFlicker 3.9s ease-in-out infinite 1.2s' }}/>
            <rect x="1305" y="140" width="4" height="4" fill="rgba(255,220,150,0.4)" style={{ animation: 'windowFlicker 4.1s ease-in-out infinite 0.3s' }}/>
          </svg>
        </div>

        {/* 光晕装饰 */}
        <div style={{
          position: 'absolute', top: '15%', left: '20%', width: '250px', height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,230,211,0.3) 0%, transparent 70%)',
          animation: 'cityGlow 6s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '15%', right: '20%', width: '250px', height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,200,224,0.3) 0%, transparent 70%)',
          animation: 'cityGlow 6s ease-in-out infinite 3s',
          pointerEvents: 'none',
        }} />

        {/* Hero 内容 */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 600 }}>
          <div style={{
            display: 'inline-block',
            padding: '4px 16px', borderRadius: 20,
            background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)',
            fontSize: 12, color: '#5a6c7d', fontWeight: 500,
            letterSpacing: '0.1em', marginBottom: 16,
            animation: 'fadeInUp 0.8s ease-out',
          }}>
            {t('city_compare.title')}
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 800,
            color: '#2c3e50', lineHeight: 1.2, marginBottom: 16,
            textShadow: '0 2px 12px rgba(255,255,255,0.8)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}>
            {t('city_compare.title')}
          </h1>
          <p style={{
            fontSize: 15, color: '#5a6c7d', lineHeight: 1.6,
            maxWidth: 480, margin: '0 auto',
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
          }}>
            {t('city_compare.hero_desc')}
          </p>
        </div>
      </section>

      {/* ═══ 城市选择器 ═══ */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '40px 16px 0' }}>
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className="reveal-up"
        >
          <div style={{
            background: '#fff',
            borderRadius: 16, border: '1px solid #e8eaed',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            padding: '24px 20px',
          }}>
            {/* 当前选中的城市 */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#333', marginBottom: 10 }}>
                🏙️ {t('city_compare.select_cities')}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => removeCity(city.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: city.color + '12', border: `1px solid ${city.color}30`,
                      borderRadius: 20, padding: '6px 14px', cursor: 'pointer',
                      fontSize: 14, color: city.color, fontWeight: 500,
                      transition: 'all 0.3s',
                    }}
                    title={t('city_compare.remove')}
                  >
                    <span>{city.emoji}</span>
                    <span>{city[l].name}</span>
                    <span style={{ fontSize: 16, lineHeight: 1, opacity: 0.6 }}>×</span>
                  </button>
                ))}
                <button
                  onClick={() => setShowPicker(!showPicker)}
                  style={{
                    background: '#f8f9fa', border: '1px dashed #ccc',
                    borderRadius: 20, padding: '6px 14px', cursor: 'pointer',
                    fontSize: 13, color: '#888', fontWeight: 500,
                    transition: 'all 0.3s',
                  }}
                >
                  + {t('city_compare.add_city')}
                </button>
              </div>
            </div>

            {/* 城市选择面板 */}
            {showPicker && (
              <div style={{
                background: '#f8f9fa', borderRadius: 12,
                border: '1px solid #e8eaed', padding: '12px 14px',
                display: 'flex', flexWrap: 'wrap', gap: 8,
              }}>
                {CITY_LIST.map((id) => {
                  const city = CITY_DATA[id];
                  const isSelected = selected.includes(id);
                  return (
                    <button
                      key={id}
                      onClick={() => isSelected ? removeCity(id) : addCity(id)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        background: isSelected ? city.color + '15' : '#fff',
                        border: `1px solid ${isSelected ? city.color + '40' : '#e0e0e0'}`,
                        borderRadius: 16, padding: '5px 12px', cursor: 'pointer',
                        fontSize: 13, color: isSelected ? city.color : '#666',
                        fontWeight: isSelected ? 600 : 400,
                        transition: 'all 0.3s',
                      }}
                    >
                      <span>{city.emoji}</span>
                      <span>{city[l].name}</span>
                      {isSelected && <span style={{ fontSize: 10 }}>✓</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {cities.length < 2 && (
        <div style={{ textAlign: 'center', padding: '40px 16px', color: '#aaa', fontSize: 15 }}>
          {t('city_compare.no_city')}
        </div>
      )}

      {cities.length >= 2 && (
        <>
          {/* ═══ 费用对比 ═══ */}
          <section style={{ maxWidth: 960, margin: '0 auto', padding: '40px 16px 0' }}>
            <div
              ref={(el) => (sectionRefs.current[1] = el)}
              className="reveal-up"
            >
              {/* Section Header */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>💰 COST</div>
                <h2 style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: 700, color: '#1a1a2e', margin: 0 }}>
                  {l === 'ru' ? 'Стоимость' : l === 'en' ? 'Cost Comparison' : '费用对比'}
                </h2>
                <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #4a90c4, #6ab0e8)', margin: '10px auto 0', borderRadius: 1 }} />
              </div>

              {COST_DIMS.map((dim) => (
                <div key={dim.key} style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 13, color: '#888', marginBottom: 8, fontWeight: 500 }}>
                    {t(`city_compare.dimensions.${dim.key}`)}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {cities.map((city) => {
                      const pct = (city[dim.key] / maxCosts[dim.key]) * 100;
                      return (
                        <div key={city.id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 60, fontSize: 13, color: '#555', fontWeight: 500, flexShrink: 0, textAlign: 'right' }}>
                            {city.emoji} {city[l].name}
                          </div>
                          <div style={{ flex: 1, position: 'relative' }}>
                            <div style={{
                              height: 24, background: '#f0f2f5', borderRadius: 12, overflow: 'hidden',
                            }}>
                              <div style={{
                                height: '100%', width: `${pct}%`,
                                background: `linear-gradient(90deg, ${city.color}80, ${city.color}40)`,
                                borderRadius: 12, transition: 'width 0.6s ease',
                              }} />
                            </div>
                          </div>
                          <div style={{
                            width: 80, fontSize: 13, fontWeight: 600, color: city.color,
                            flexShrink: 0, textAlign: 'right',
                          }}>
                            {fmtMoney(city[dim.key])}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* 月均总费用 */}
              <div style={{
                marginTop: 20, padding: '16px 18px', borderRadius: 12,
                background: '#f8f9fa', border: '1px solid #e8eaed',
              }}>
                <div style={{ fontSize: 13, color: '#888', marginBottom: 10, fontWeight: 500 }}>
                  {l === 'ru' ? 'Ежемесячные расходы' : l === 'en' ? 'Estimated Monthly Total' : '月均总费用'}
                  <span style={{ fontSize: 11, color: '#bbb', marginLeft: 6 }}>(rent + food + transport)</span>
                </div>
                {cities.map((city) => {
                  const total = city.rent + city.food + city.transport;
                  return (
                    <div key={city.id} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                      <span style={{ fontSize: 13, color: '#666' }}>{city.emoji} {city[l].name}</span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: city.color, marginLeft: 'auto' }}>
                        {fmtMoney(total)}/月
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 分隔线 */}
          <div style={{ maxWidth: 960, margin: '40px auto', padding: '0 16px' }}>
            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)' }} />
          </div>

          {/* ═══ 雷达图对比 ═══ */}
          <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <div
              ref={(el) => (sectionRefs.current[2] = el)}
              className="reveal-up"
            >
              {/* Section Header */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>🎯 RADAR</div>
                <h2 style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: 700, color: '#1a1a2e', margin: 0 }}>
                  {l === 'ru' ? 'Многомерное сравнение' : l === 'en' ? 'Multi-dimensional Comparison' : '多维度评分'}
                </h2>
                <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #4a90c4, #6ab0e8)', margin: '10px auto 0', borderRadius: 1 }} />
              </div>

              <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                flexWrap: 'wrap', gap: 20,
              }}>
                {/* 雷达图 */}
                <div style={{ width: 280, flexShrink: 0 }}>
                  <RadarChart cities={cities} />
                  {/* 图例 */}
                  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
                    {cities.map((city) => (
                      <div key={city.id} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: city.color }} />
                        <span style={{ color: '#666' }}>{city.emoji} {city[l].name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 分数列表 */}
                <div style={{ flex: 1, minWidth: 260 }}>
                  {RADAR_DIMS.map((dim) => (
                    <div key={dim.key} style={{ marginBottom: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <span style={{ fontSize: 14 }}>{dim.icon}</span>
                        <span style={{ fontSize: 12, color: '#888', fontWeight: 500 }}>
                          {t(`city_compare.dimensions.${dim.key.replace('_score', '')}`)}
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {cities.map((city) => {
                          const score = city[dim.key];
                          return (
                            <div key={city.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <span style={{ width: 50, fontSize: 11, color: '#aaa', textAlign: 'right', flexShrink: 0 }}>
                                {city.emoji}
                              </span>
                              <div style={{ flex: 1, height: 8, background: '#f0f2f5', borderRadius: 4, overflow: 'hidden' }}>
                                <div style={{
                                  height: '100%', width: `${score}%`,
                                  background: getBarGradient(score),
                                  borderRadius: 4, transition: 'width 0.6s ease',
                                }} />
                              </div>
                              <span style={{ width: 28, fontSize: 12, fontWeight: 600, color: scoreColor(score), textAlign: 'right' }}>
                                {score}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 分隔线 */}
          <div style={{ maxWidth: 960, margin: '40px auto', padding: '0 16px' }}>
            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)' }} />
          </div>

          {/* ═══ 综合推荐度 ═══ */}
          <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <div
              ref={(el) => (sectionRefs.current[3] = el)}
              className="reveal-up"
            >
              {/* Section Header */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>🏆 RANKING</div>
                <h2 style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: 700, color: '#1a1a2e', margin: 0 }}>
                  {l === 'ru' ? 'Общий рейтинг' : l === 'en' ? 'Overall Rating' : '综合推荐度'}
                </h2>
                <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #4a90c4, #6ab0e8)', margin: '10px auto 0', borderRadius: 1 }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[...cities]
                  .sort((a, b) => b.overall - a.overall)
                  .map((city, idx) => (
                    <div
                      key={city.id}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        padding: '14px 18px', borderRadius: 12,
                        background: idx === 0
                          ? `linear-gradient(135deg, ${city.color}08, ${city.color}04)`
                          : '#fafbfc',
                        border: `1px solid ${idx === 0 ? city.color + '20' : '#e8eaed'}`,
                        transition: 'all 0.3s',
                      }}
                    >
                      {/* 排名 */}
                      <div style={{
                        width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                        background: idx === 0 ? city.color : '#e8eaed',
                        color: idx === 0 ? '#fff' : '#888',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700,
                      }}>
                        {idx + 1}
                      </div>

                      {/* 城市名 */}
                      <div style={{ flexShrink: 0, minWidth: 80 }}>
                        <div style={{ fontSize: 22 }}>{city.emoji}</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: '#333' }}>{city[l].name}</div>
                        <div style={{ fontSize: 11, color: '#aaa' }}>{city[l].province}</div>
                      </div>

                      {/* 亮点 */}
                      <div style={{ flex: 1, fontSize: 12, color: '#888', lineHeight: 1.5 }}>
                        {city[l].highlights}
                      </div>

                      {/* 综合分 */}
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: city.color, lineHeight: 1 }}>
                          {city.overall}
                        </div>
                        <div style={{ fontSize: 10, color: '#bbb' }}>
                          {l === 'ru' ? 'балл' : l === 'en' ? 'score' : '分'}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* 分隔线 */}
          <div style={{ maxWidth: 960, margin: '40px auto', padding: '0 16px' }}>
            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)' }} />
          </div>

          {/* ═══ 气候 & 文化描述 ═══ */}
          <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <div
              ref={(el) => (sectionRefs.current[4] = el)}
              className="reveal-up"
            >
              {/* Section Header */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>📋 DETAILS</div>
                <h2 style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: 700, color: '#1a1a2e', margin: 0 }}>
                  {l === 'ru' ? 'Подробная информация' : l === 'en' ? 'City Details' : '详细信息'}
                </h2>
                <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #4a90c4, #6ab0e8)', margin: '10px auto 0', borderRadius: 1 }} />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${cities.length <= 2 ? '280px' : '200px'}, 1fr))`,
                gap: 14,
              }}>
                {cities.map((city) => (
                  <div
                    key={city.id}
                    style={{
                      borderRadius: 12, overflow: 'hidden',
                      border: '1px solid #e8eaed',
                      background: '#fff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = city.color + '40';
                      e.currentTarget.style.boxShadow = `0 4px 16px ${city.color}15`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e8eaed';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* 城市头部 */}
                    <div style={{
                      padding: '16px', textAlign: 'center',
                      background: `linear-gradient(135deg, ${city.color}08, ${city.color}04)`,
                      borderBottom: `1px solid ${city.color}10`,
                    }}>
                      <div style={{ fontSize: 32 }}>{city.emoji}</div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: '#333', marginTop: 4 }}>
                        {city[l].name}
                      </div>
                      <div style={{ fontSize: 12, color: '#aaa' }}>{city[l].province}</div>
                    </div>

                    {/* 详细信息 */}
                    <div style={{ padding: '14px 16px' }}>
                      {[
                        { label: t('city_compare.dimensions.climate'), value: city.climate[l] },
                        { label: t('city_compare.dimensions.tuition'), value: fmtMoney(city.tuition) + '/年' },
                        { label: t('city_compare.dimensions.rent'), value: fmtMoney(city.rent) + '/月' },
                        { label: t('city_compare.dimensions.food'), value: fmtMoney(city.food) + '/月' },
                        { label: t('city_compare.dimensions.transport'), value: fmtMoney(city.transport) + '/月' },
                      ].map((item, i) => (
                        <div key={i} style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '6px 0',
                          borderBottom: i < 4 ? '1px solid #f0f2f5' : 'none',
                        }}>
                          <span style={{ fontSize: 12, color: '#999' }}>{item.label}</span>
                          <span style={{ fontSize: 12, fontWeight: 600, color: '#333', textAlign: 'right', maxWidth: '60%' }}>
                            {item.value}
                          </span>
                        </div>
                      ))}

                      {/* 亮点 */}
                      <div style={{ marginTop: 10, fontSize: 12, color: '#888', fontStyle: 'italic', lineHeight: 1.5 }}>
                        {city[l].highlights}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ height: 40 }} />
        </>
      )}

      {/* ═══ 回到生活指南 ═══ */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px 60px' }}>
        <div style={{ textAlign: 'center' }}>
          <Link
            href={`/${l}/life`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 12,
              background: '#f8f9fa',
              border: '1px solid #e0e0e0',
              color: '#666', textDecoration: 'none',
              fontSize: 14, fontWeight: 500,
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4a90c4';
              e.currentTarget.style.color = '#4a90c4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e0e0e0';
              e.currentTarget.style.color = '#666';
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {l === 'ru' ? 'Вернуться к гид по жизни' : l === 'en' ? 'Back to Life Guide' : '返回生活指南'}
          </Link>
        </div>
      </section>
    </div>
  );
}
