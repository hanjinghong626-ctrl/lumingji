'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';

const ChatWindow = dynamic(() => import('./life/ChatWindow'), { ssr: false });

// 气泡消息 - 多语言
const BUBBLE_MESSAGES = {
  zh: [
    '嗨，有什么可以帮你的？',
    '点我聊聊吧~ 🌿',
    '在中国生活有问题？问我！',
    '我是小鹿，你的中国生活助手~',
    '有什么想问的吗？',
    '来聊聊吧！',
    '嘿，我在这儿呢~',
    '办卡、租房、看病，都能问我哦',
    '今天过得怎么样？',
  ],
  en: [
    'Hey, need any help? 🌿',
    'Tap me to chat~',
    'Questions about life in China?',
    "I'm Xiao Lu, your guide in China!",
    'Got any questions?',
    "Let's talk!",
    "Hey, I'm here~",
    'Bank, housing, health — ask me!',
    'How is your day going?',
  ],
  ru: [
    'Привет, нужна помощь? 🌿',
    'Нажми, чтобы поболтать~',
    'Вопросы о жизни в Китае?',
    'Я Сяо Лу, твой помощник!',
    'Есть вопросы?',
    'Давай поболтаем!',
    'Эй, я тут~',
    'Банк, жильё, врач — спрашивай!',
    'Как твои дела?',
  ],
};

/**
 * 小鹿形象大使 - 互动浮动按钮
 * 使用圆形徽章设计，内嵌小鹿原图
 */
export default function DeerAIButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [deerState, setDeerState] = useState('idle');
  const [bubbleText, setBubbleText] = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const [bounceKey, setBounceKey] = useState(0);
  const timerRef = useRef(null);
  const bubbleTimerRef = useRef(null);
  const idleTimerRef = useRef(null);
  const lastInteractionRef = useRef(Date.now());
  const [locale, setLocale] = useState('zh');

  // Detect locale
  useEffect(() => {
    const path = window.location.pathname;
    const match = path.match(/^\/(zh|en|ru)\//);
    if (match) setLocale(match[1]);
  }, []);

  // Show random bubble
  const showRandomBubble = useCallback(() => {
    const msgs = BUBBLE_MESSAGES[locale] || BUBBLE_MESSAGES.zh;
    const msg = msgs[Math.floor(Math.random() * msgs.length)];
    setBubbleText(msg);
    setShowBubble(true);
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = setTimeout(() => setShowBubble(false), 4000);
  }, [locale]);

  // Initial bubble
  useEffect(() => {
    const t = setTimeout(() => showRandomBubble(), 2000);
    return () => clearTimeout(t);
  }, [showRandomBubble]);

  // Periodic bubble
  useEffect(() => {
    function scheduleBubble() {
      const delay = 30000 + Math.random() * 30000;
      timerRef.current = setTimeout(() => {
        if (deerState === 'idle' && !isOpen) showRandomBubble();
        scheduleBubble();
      }, delay);
    }
    scheduleBubble();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [deerState, isOpen, showRandomBubble]);

  // Sleep detection
  useEffect(() => {
    function checkIdle() {
      const elapsed = Date.now() - lastInteractionRef.current;
      if (elapsed > 3 * 60 * 1000 && deerState === 'idle' && !isOpen && !showBubble) {
        setDeerState('sleeping');
      }
    }
    idleTimerRef.current = setInterval(checkIdle, 10000);
    return () => { if (idleTimerRef.current) clearInterval(idleTimerRef.current); };
  }, [deerState, isOpen, showBubble]);

  const wakeUp = useCallback(() => {
    lastInteractionRef.current = Date.now();
    if (deerState === 'sleeping') setDeerState('idle');
  }, [deerState]);

  const handleClick = () => {
    wakeUp();
    setBounceKey(k => k + 1);
    setDeerState('bounce');
    setShowBubble(false);
    setTimeout(() => {
      setIsOpen(true);
      setDeerState('idle');
    }, 400);
  };

  const handleMouseEnter = () => {
    wakeUp();
    if (deerState !== 'bounce') setDeerState('hover');
  };

  const handleMouseLeave = () => {
    if (deerState === 'hover') setDeerState('idle');
  };

  useEffect(() => {
    if (isOpen) wakeUp();
  }, [isOpen, wakeUp]);

  return (
    <>
      {/* 浮动小鹿徽章 */}
      <div
        className="deer-badge-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* 气泡 */}
        {showBubble && !isOpen && (
          <div className="deer-bubble">
            <span>{bubbleText}</span>
            <div className="deer-bubble-tail" />
          </div>
        )}

        {/* 睡眠标记 */}
        {deerState === 'sleeping' && (
          <div className="deer-zzz">💤</div>
        )}

        {/* 小鹿徽章本体 */}
        <div
          key={bounceKey}
          className={`deer-badge deer-state-${deerState}`}
        >
          {/* 呼吸光晕 */}
          <div className="deer-badge-glow" />
          {/* 圆形图片容器 */}
          <div className="deer-badge-inner">
            <img
              src="/deer-original.png"
              alt="小鹿AI助手"
              className="deer-badge-img"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* 弹出对话窗口 */}
      {isOpen && (
        <div className="deer-dialog-overlay">
          <div className="deer-dialog-backdrop" onClick={() => setIsOpen(false)} />
          <div className="deer-dialog-window">
            {/* 头部 */}
            <div className="deer-dialog-header">
              <div className="deer-dialog-header-badge">
                <img src="/deer-original.png" alt="" className="deer-dialog-header-img" />
              </div>
              <span className="deer-dialog-title">小鹿AI</span>
              <span className="deer-dialog-subtitle">· 有问必答</span>
              <div className="flex-1" />
              <button onClick={() => setIsOpen(false)} className="deer-dialog-close">✕</button>
            </div>
            {/* ChatWindow */}
            <div className="deer-dialog-chat">
              <ChatWindow embedded={true} onClose={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ===== 容器 ===== */
        .deer-badge-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 50;
          cursor: pointer;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }

        /* ===== 呼吸光晕 ===== */
        .deer-badge-glow {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,160,107,0.35) 0%, rgba(232,160,107,0.1) 50%, transparent 70%);
          animation: deerGlow 3s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes deerGlow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.12); opacity: 0.9; }
        }

        /* ===== 徽章本体 ===== */
        .deer-badge {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* 圆形裁剪容器 */
        .deer-badge-inner {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          z-index: 1;
          background: linear-gradient(145deg, #FFF5E6 0%, #FFE8CC 40%, #FDDDB8 100%);
          box-shadow: 
            0 4px 16px rgba(180,120,60,0.25),
            0 2px 6px rgba(180,120,60,0.15),
            inset 0 1px 2px rgba(255,255,255,0.6);
          border: 2.5px solid rgba(255,255,255,0.7);
        }

        /* 图片在圆形容器中居中偏下显示（聚焦小鹿脸部） */
        .deer-badge-img {
          width: 140%;
          height: 140%;
          object-fit: cover;
          object-position: center 38%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* ===== 闲置浮动 ===== */
        .deer-state-idle {
          animation: deerFloat 3s ease-in-out infinite;
        }
        @keyframes deerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* ===== Hover 摇摆 ===== */
        .deer-state-hover {
          animation: deerWiggle 0.6s ease-in-out;
          transform: scale(1.12);
        }
        @keyframes deerWiggle {
          0% { transform: scale(1) rotate(0deg); }
          20% { transform: scale(1.1) rotate(-6deg); }
          40% { transform: scale(1.12) rotate(5deg); }
          60% { transform: scale(1.1) rotate(-4deg); }
          80% { transform: scale(1.12) rotate(2deg); }
          100% { transform: scale(1.12) rotate(0deg); }
        }

        /* ===== 点击弹跳 ===== */
        .deer-state-bounce {
          animation: deerBounce 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes deerBounce {
          0% { transform: scale(1) translateY(0); }
          20% { transform: scale(0.88, 1.12) translateY(3px); }
          50% { transform: scale(1.12, 0.88) translateY(-20px); }
          70% { transform: scale(0.96, 1.04) translateY(-5px); }
          100% { transform: scale(1) translateY(0); }
        }

        /* ===== 睡眠状态 ===== */
        .deer-state-sleeping {
          animation: deerSleep 2.5s ease-in-out infinite;
        }
        .deer-state-sleeping .deer-badge-inner {
          filter: brightness(0.88) saturate(0.85);
        }
        @keyframes deerSleep {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-4px) rotate(3deg); }
        }

        /* ===== 睡眠 Zzz ===== */
        .deer-zzz {
          position: absolute;
          top: -6px;
          right: -2px;
          font-size: 20px;
          animation: zzzFloat 2s ease-in-out infinite;
          pointer-events: none;
          z-index: 5;
        }
        @keyframes zzzFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-10px) scale(1.25); opacity: 1; }
        }

        /* ===== 气泡 ===== */
        .deer-bubble {
          position: absolute;
          right: calc(100% + 14px);
          bottom: 18px;
          background: rgba(255, 255, 255, 0.96);
          color: #5D4037;
          padding: 10px 16px;
          border-radius: 18px 18px 4px 18px;
          font-size: 13px;
          font-weight: 500;
          max-width: 200px;
          word-wrap: break-word;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06);
          animation: bubbleIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
          line-height: 1.5;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232,160,107,0.15);
        }
        .deer-bubble-tail {
          position: absolute;
          right: -6px;
          bottom: 10px;
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.96);
          transform: rotate(45deg);
          border-radius: 0 0 3px 0;
          border-right: 1px solid rgba(232,160,107,0.15);
          border-bottom: 1px solid rgba(232,160,107,0.15);
        }
        @keyframes bubbleIn {
          0% { opacity: 0; transform: scale(0.7) translateY(6px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* ===== 弹窗 ===== */
        .deer-dialog-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 24px;
          pointer-events: none;
        }
        .deer-dialog-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(2px);
          pointer-events: auto;
          animation: fadeIn 0.25s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .deer-dialog-window {
          position: relative;
          width: 420px;
          max-width: calc(100vw - 48px);
          margin-bottom: 90px;
          pointer-events: auto;
          animation: dialogPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        @keyframes dialogPop {
          from { opacity: 0; transform: translateY(24px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .deer-dialog-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          background: linear-gradient(135deg, #E8A06B 0%, #D4884A 50%, #C47A3A 100%);
          color: white;
        }
        .deer-dialog-header-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,0.5);
          flex-shrink: 0;
          background: linear-gradient(145deg, #FFF5E6, #FFE8CC);
        }
        .deer-dialog-header-img {
          width: 140%;
          height: 140%;
          object-fit: cover;
          object-position: center 38%;
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .deer-dialog-title {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .deer-dialog-subtitle {
          font-size: 12px;
          opacity: 0.8;
          font-style: italic;
        }
        .deer-dialog-close {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .deer-dialog-close:hover {
          background: rgba(255,255,255,0.35);
        }

        .deer-dialog-chat {
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .deer-dialog-chat :global(.rounded-2xl) {
          border-radius: 0 0 20px 20px !important;
        }

        /* ===== 移动端 ===== */
        @media (max-width: 480px) {
          .deer-badge-container {
            bottom: 18px;
            right: 18px;
          }
          .deer-badge {
            width: 70px;
            height: 70px;
          }
          .deer-badge-inner {
            width: 66px;
            height: 66px;
          }
          .deer-bubble {
            display: none;
          }
          .deer-dialog-overlay {
            padding: 0;
            align-items: stretch;
          }
          .deer-dialog-window {
            width: 100%;
            margin-bottom: 0;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            border-radius: 20px 20px 0 0;
          }
          .deer-dialog-chat {
            flex: 1;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
}
