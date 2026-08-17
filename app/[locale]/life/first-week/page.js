'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '../../../../i18n-context';
import SEO from '../../../components/SEO.js';

// 按天组织的待办事项
const FIRST_WEEK_DATA = {
  day0: {
    icon: '✈️',
    title: { zh: '落地当天 · Day 0', en: 'Arrival Day · Day 0', ru: 'День прилёта · День 0' },
    desc: { zh: '从机场到安顿下来', en: 'From airport to settling in', ru: 'От аэропорта до обустройства' },
    color: '#0f6b4a',
    tasks: [
      {
        id: 'fw-d0-1',
        title: { zh: '从机场到市区', en: 'Airport to city', ru: 'Из аэропорта в город' },
        detail: { zh: '地铁/大巴/滴滴，到达学校或住处', en: 'Metro/bus/DiDi to your school or accommodation', ru: 'Метро/автобус/DiDi до университета или жилья' },
        guideId: 'airport-to-city',
        critical: true,
      },
      {
        id: 'fw-d0-2',
        title: { zh: '入住宿舍/酒店', en: 'Check in to dorm/hotel', ru: 'Заселение в общежитие/отель' },
        detail: { zh: '办理入住手续、领取钥匙、熟悉周边环境', en: 'Complete check-in, get keys, explore surroundings', ru: 'Оформление заселения, ключи, осмотр окрестностей' },
        guideId: 'register-dormitory',
        critical: true,
      },
      {
        id: 'fw-d0-3',
        title: { zh: '确认手机能用', en: 'Ensure phone works', ru: 'Убедиться, что телефон работает' },
        detail: { zh: '连接WiFi，确认能收到短信和打电话', en: 'Connect to WiFi, confirm SMS and calls work', ru: 'Подключиться к WiFi, проверить SMS и звонки' },
        guideId: null,
        critical: true,
      },
    ],
  },
  day1: {
    icon: '📲',
    title: { zh: '第 1 天 · Day 1', en: 'Day 1', ru: 'День 1' },
    desc: { zh: '通讯与支付 — 最关键的一天', en: 'Communication & Payment — the most critical day', ru: 'Связь и оплата — самый важный день' },
    color: '#155e7a',
    tasks: [
      {
        id: 'fw-d1-1',
        title: { zh: '购买手机卡', en: 'Buy a SIM card', ru: 'Купить SIM-карту' },
        detail: { zh: '携带护照到营业厅办卡，选合适套餐', en: 'Bring passport to carrier store, choose a suitable plan', ru: 'Паспорт в салон связи, выбрать тариф' },
        guideId: 'buy-sim-card',
        critical: true,
      },
      {
        id: 'fw-d1-2',
        title: { zh: '注册支付宝', en: 'Set up Alipay', ru: 'Настроить Alipay' },
        detail: { zh: '下载→注册→实名认证→绑定银行卡/境外卡', en: 'Download → Register → Verify → Bind card', ru: 'Скачать → Регистрация → Верификация → Привязка карты' },
        guideId: 'setup-alipay',
        critical: true,
      },
      {
        id: 'fw-d1-3',
        title: { zh: '注册微信', en: 'Set up WeChat', ru: 'Настроить WeChat' },
        detail: { zh: '注册账号、添加联系人、开通微信支付', en: 'Register, add contacts, enable WeChat Pay', ru: 'Регистрация, контакты, включение WeChat Pay' },
        guideId: 'setup-wechat',
        critical: true,
      },
      {
        id: 'fw-d1-4',
        title: { zh: '下载必备App', en: 'Download essential apps', ru: 'Скачать необходимые приложения' },
        detail: { zh: '高德地图、美团、12306、滴滴出行等', en: 'Amap, Meituan, 12306, DiDi, etc.', ru: 'Amap, Meituan, 12306, DiDi и др.' },
        guideId: null,
        critical: false,
      },
    ],
  },
  day2: {
    icon: '🏦',
    title: { zh: '第 2 天 · Day 2', en: 'Day 2', ru: 'День 2' },
    desc: { zh: '金融与行政', en: 'Finance & Administration', ru: 'Финансы и формальности' },
    color: '#c49322',
    tasks: [
      {
        id: 'fw-d2-1',
        title: { zh: '开设银行账户', en: 'Open bank account', ru: 'Открыть банковский счёт' },
        detail: { zh: '带护照和录取通知书去银行开户', en: 'Bring passport and admission letter to the bank', ru: 'Паспорт и письмо о зачислении в банк' },
        guideId: 'open-bank-account',
        critical: true,
      },
      {
        id: 'fw-d2-2',
        title: { zh: '兑换一些现金', en: 'Exchange some cash', ru: 'Обменять наличные' },
        detail: { zh: '在银行换一些人民币备用', en: 'Exchange some RMB as backup', ru: 'Обменять юани на всякий случай' },
        guideId: 'currency-exchange',
        critical: false,
      },
      {
        id: 'fw-d2-3',
        title: { zh: '办理临时住宿登记', en: 'Register temporary accommodation', ru: 'Временная регистрация' },
        detail: { zh: '校外住宿须到辖区派出所办理（宿舍通常由学校代办）', en: 'Off-campus: go to local police station; on-campus: usually handled by university', ru: 'Вне кампуса: в полицейский участок; в кампусе: через университет' },
        guideId: null,
        critical: true,
      },
    ],
  },
  day3_4: {
    icon: '🗺️',
    title: { zh: '第 3-4 天 · Day 3-4', en: 'Day 3-4', ru: 'День 3-4' },
    desc: { zh: '熟悉周边环境', en: 'Explore your surroundings', ru: 'Ознакомление с окружением' },
    color: '#0f9b74',
    tasks: [
      {
        id: 'fw-d34-1',
        title: { zh: '熟悉校园/社区', en: 'Explore campus/neighborhood', ru: 'Осмотреть кампус/район' },
        detail: { zh: '找到食堂、超市、药店、快递站等关键地点', en: 'Locate canteen, supermarket, pharmacy, delivery station', ru: 'Найти столовую, магазин, аптеку, пункт выдачи' },
        guideId: null,
        critical: false,
      },
      {
        id: 'fw-d34-2',
        title: { zh: '学会坐地铁/公交', en: 'Learn metro/bus routes', ru: 'Изучить маршруты метро/автобуса' },
        detail: { zh: '用高德地图规划常用路线，学会扫码乘车', en: 'Plan common routes with Amap, learn to scan & ride', ru: 'Планирование маршрутов в Amap, оплата по коду' },
        guideId: 'metro-guide',
        critical: false,
      },
      {
        id: 'fw-d34-3',
        title: { zh: '第一次外卖体验', en: 'Order first delivery', ru: 'Первый заказ доставки' },
        detail: { zh: '在美团/饿了么点一次外卖，体验中国外卖文化', en: 'Order from Meituan/Ele.me — experience Chinese delivery culture', ru: 'Заказать из Meituan/Ele.me — почувствовать культуру доставки' },
        guideId: null,
        critical: false,
      },
    ],
  },
  day5_7: {
    icon: '📋',
    title: { zh: '第 5-7 天 · Day 5-7', en: 'Day 5-7', ru: 'День 5-7' },
    desc: { zh: '办理入学手续 & 融入生活', en: 'Enrollment & settling into life', ru: 'Оформление и адаптация' },
    color: '#6b46c1',
    tasks: [
      {
        id: 'fw-d57-1',
        title: { zh: '完成学校注册', en: 'Complete university registration', ru: 'Завершить регистрацию в университете' },
        detail: { zh: '交材料、领学生证、选课、参加新生介绍', en: 'Submit documents, get student ID, course selection, orientation', ru: 'Подать документы, получить студенческий билет, выбрать курсы' },
        guideId: null,
        critical: true,
      },
      {
        id: 'fw-d57-2',
        title: { zh: '办理居留许可', en: 'Apply for residence permit', ru: 'Подать на вид на жительство' },
        detail: { zh: '持X1签证须在30天内办理，通过学校国际学院', en: 'X1 visa holders must apply within 30 days via international office', ru: 'Виза X1 — подать в течение 30 дней через международный офис' },
        guideId: 'visa-residence-permit',
        critical: true,
      },
      {
        id: 'fw-d57-3',
        title: { zh: '购买生活用品', en: 'Buy daily necessities', ru: 'Купить предметы первой необходимости' },
        detail: { zh: '床上用品、洗漱用品、插排等，可网购或超市购买', en: 'Bedding, toiletries, power strip — order online or buy at supermarket', ru: 'Постельное, гигиена, удлинитель — онлайн или супермаркет' },
        guideId: 'supermarket-guide',
        critical: false,
      },
      {
        id: 'fw-d57-4',
        title: { zh: '加入同学群', en: 'Join classmate groups', ru: 'Вступить в группы одногруппников' },
        detail: { zh: '找到班级微信群、认识中国同学', en: 'Find class WeChat group, meet Chinese classmates', ru: 'Найти группу курса в WeChat, познакомиться' },
        guideId: null,
        critical: false,
      },
    ],
  },
};

export default function FirstWeekPage() {
  const { locale } = useI18n();
  const lang = locale || 'zh';
  const [checkedItems, setCheckedItems] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('luminqi-first-week-checks');
      if (saved) setCheckedItems(JSON.parse(saved));
    } catch (e) { /* ignore */ }
  }, []);

  const toggleCheck = (taskId) => {
    setCheckedItems(prev => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      try { localStorage.setItem('luminqi-first-week-checks', JSON.stringify(next)); } catch(e) {}
      return next;
    });
  };

  const totalTasks = Object.values(FIRST_WEEK_DATA).reduce((sum, day) => sum + day.tasks.length, 0);
  const completedTasks = Object.values(checkedItems).filter(Boolean).length;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const t_labels = {
    zh: { pageTitle: '落地第一周', pageDesc: '按天规划的关键待办清单', progress: '已完成', essential: '必办', recommended: '推荐', allDone: '🎉 恭喜你已完成所有事项！', reset: '重置进度' },
    en: { pageTitle: 'First Week Checklist', pageDesc: 'Day-by-day essential to-do list', progress: 'Completed', essential: 'Essential', recommended: 'Recommended', allDone: '🎉 Congratulations! All tasks completed!', reset: 'Reset progress' },
    ru: { pageTitle: 'Первая неделя', pageDesc: 'Посдневный список важных дел', progress: 'Выполнено', essential: 'Обязательно', recommended: 'Рекомендуется', allDone: '🎉 Поздравляем! Все задачи выполнены!', reset: 'Сбросить прогресс' },
  };
  const t = t_labels[lang] || t_labels.zh;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f0f7f4 0%, #f8faf8 30%, #fafcfa 60%, #f4f8f5 100%)',
    }}>
      <SEO title={`${t.pageTitle} — 鹿鸣集`} description={t.pageDesc} />

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(15,107,74,0.92) 0%, rgba(21,94,122,0.88) 100%)',
        padding: '48px 20px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '35%', opacity: 0.1, pointerEvents: 'none' }}>
          <svg viewBox="0 0 800 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0,100 L0,60 Q100,25 200,50 Q350,10 500,40 Q650,15 800,45 L800,100 Z" fill="white" />
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 800, color: 'white', marginBottom: 8, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
            {t.pageTitle}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, marginBottom: 24 }}>
            {t.pageDesc}
          </p>

          {/* Progress bar */}
          <div style={{ maxWidth: 400, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.9)', fontSize: 13, marginBottom: 8 }}>
              <span>{t.progress}</span>
              <span>{completedTasks}/{totalTasks} ({progress}%)</span>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.2)', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                borderRadius: 4,
                background: 'linear-gradient(90deg, #eac04c, #5eead4)',
                width: `${progress}%`,
                transition: 'width 0.5s ease',
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 16px 60px' }}>
        {progress === 100 && mounted && (
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
            border: '1px solid #86efac',
            borderRadius: 16,
            padding: '20px 24px',
            marginBottom: 24,
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 600,
            color: '#166534',
          }}>
            {t.allDone}
          </div>
        )}

        {Object.entries(FIRST_WEEK_DATA).map(([dayKey, dayData]) => {
          const dayCompleted = dayData.tasks.filter(task => checkedItems[task.id]).length;
          const dayTotal = dayData.tasks.length;

          return (
            <div key={dayKey} style={{ marginBottom: 28 }}>
              {/* Day header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                marginBottom: 12, padding: '0 4px',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${dayData.color}15`,
                  border: `1.5px solid ${dayData.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, flexShrink: 0,
                }}>
                  {dayData.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: dayData.color, margin: 0, fontFamily: 'LXGW WenKai TC, Noto Serif SC, serif' }}>
                    {dayData.title[lang] || dayData.title.zh}
                  </h2>
                  <p style={{ fontSize: 13, color: '#6b7280', margin: '2px 0 0' }}>
                    {dayData.desc[lang] || dayData.desc.zh}
                  </p>
                </div>
                <span style={{ fontSize: 12, color: '#9ca3af', whiteSpace: 'nowrap' }}>
                  {dayCompleted}/{dayTotal}
                </span>
              </div>

              {/* Tasks */}
              <div style={{
                background: 'rgba(255,255,255,0.75)',
                borderRadius: 14,
                border: '1px solid rgba(0,0,0,0.06)',
                overflow: 'hidden',
              }}>
                {dayData.tasks.map((task, idx) => {
                  const isChecked = checkedItems[task.id];
                  return (
                    <div key={task.id} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      padding: '14px 16px',
                      borderBottom: idx < dayData.tasks.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                      opacity: isChecked ? 0.55 : 1,
                      transition: 'opacity 0.3s ease',
                    }}>
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleCheck(task.id)}
                        style={{
                          width: 24, height: 24, borderRadius: 7, flexShrink: 0,
                          border: `2px solid ${isChecked ? dayData.color : '#d1d5db'}`,
                          background: isChecked ? dayData.color : 'transparent',
                          cursor: 'pointer', marginTop: 1,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {isChecked && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                          <span style={{
                            fontSize: 15, fontWeight: 600,
                            color: isChecked ? '#9ca3af' : '#1c1c18',
                            textDecoration: isChecked ? 'line-through' : 'none',
                            transition: 'all 0.2s ease',
                          }}>
                            {task.title[lang] || task.title.zh}
                          </span>
                          {task.critical && (
                            <span style={{
                              fontSize: 10, fontWeight: 600, color: '#dc2626',
                              background: '#fef2f2', border: '1px solid #fecaca',
                              borderRadius: 6, padding: '1px 6px',
                            }}>
                              {t.essential}
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0', lineHeight: 1.5 }}>
                          {task.detail[lang] || task.detail.zh}
                        </p>
                        {task.guideId && (
                          <a
                            href={`/${lang}/life/first-landing/${task.guideId}`}
                            style={{
                              display: 'inline-block', marginTop: 6,
                              fontSize: 12, color: dayData.color,
                              textDecoration: 'none', fontWeight: 500,
                            }}
                          >
                            {lang === 'ru' ? 'Подробнее →' : lang === 'en' ? 'Read guide →' : '查看详细指南 →'}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Reset button */}
        {mounted && completedTasks > 0 && (
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <button
              onClick={() => setCheckedItems({})}
              style={{
                fontSize: 13, color: '#9ca3af', background: 'none',
                border: 'none', cursor: 'pointer', textDecoration: 'underline',
              }}
            >
              {t.reset}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
