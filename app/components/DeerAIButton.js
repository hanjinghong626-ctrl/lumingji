'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const ChatWindow = dynamic(() => import('./life/ChatWindow'), { ssr: false });

/**
 * 可爱小鹿 - 参考景泓提供的kawaii风格插画
 * 特点：圆滚滚大脸、大眼睛、小鹿角+小叶子、粉色腮红、简洁温暖
 */
function CuteDeer({ size = 40, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* === 小鹿角 + 叶子 - 左 === */}
      <g className="deer-antler-l">
        <path d="M36 32 C34 26, 32 22, 30 16" stroke="#D4884A" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M32 22 C28 20, 26 19, 23 17" stroke="#D4884A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* 叶子 */}
        <ellipse cx="29" cy="12" rx="5" ry="3.5" fill="#8BC34A" transform="rotate(-20 29 12)"/>
        <ellipse cx="21" cy="14.5" rx="4.5" ry="3" fill="#7CB342" transform="rotate(-35 21 14.5)"/>
      </g>

      {/* === 小鹿角 + 叶子 - 右 === */}
      <g className="deer-antler-r">
        <path d="M64 32 C66 26, 68 22, 70 16" stroke="#D4884A" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M68 22 C72 20, 74 19, 77 17" stroke="#D4884A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* 叶子 */}
        <ellipse cx="71" cy="12" rx="5" ry="3.5" fill="#8BC34A" transform="rotate(20 71 12)"/>
        <ellipse cx="79" cy="14.5" rx="4.5" ry="3" fill="#7CB342" transform="rotate(35 79 14.5)"/>
      </g>

      {/* === 耳朵 === */}
      <ellipse cx="26" cy="40" rx="9" ry="12" fill="#E8A06B" transform="rotate(-12 26 40)"/>
      <ellipse cx="26" cy="40" rx="5.5" ry="8" fill="#FFF3E8" transform="rotate(-12 26 40)"/>
      <ellipse cx="74" cy="40" rx="9" ry="12" fill="#E8A06B" transform="rotate(12 74 40)"/>
      <ellipse cx="74" cy="40" rx="5.5" ry="8" fill="#FFF3E8" transform="rotate(12 74 40)"/>

      {/* === 头部 - 圆润大脸 === */}
      <circle cx="50" cy="58" r="26" fill="#E8A06B"/>
      {/* 脸部白色区域 */}
      <ellipse cx="50" cy="62" rx="18" ry="16" fill="#FFFAF5"/>

      {/* === 腮红 === */}
      <ellipse cx="30" cy="64" rx="6" ry="4.5" fill="#FFB5B5" opacity="0.55"/>
      <ellipse cx="70" cy="64" rx="6" ry="4.5" fill="#FFB5B5" opacity="0.55"/>

      {/* === 眼睛 - 大而圆 kawaii === */}
      <g className="deer-eye-l">
        <circle cx="39" cy="55" r="5.5" fill="#2D2D2D"/>
        <circle cx="37" cy="53" r="2.2" fill="white"/>
        <circle cx="41" cy="57" r="1" fill="white" opacity="0.6"/>
      </g>
      <g className="deer-eye-r">
        <circle cx="61" cy="55" r="5.5" fill="#2D2D2D"/>
        <circle cx="59" cy="53" r="2.2" fill="white"/>
        <circle cx="63" cy="57" r="1" fill="white" opacity="0.6"/>
      </g>

      {/* === 鼻子 === */}
      <ellipse cx="50" cy="66" rx="3" ry="2.2" fill="#D4884A"/>
      <ellipse cx="49" cy="65.5" rx="1" ry="0.6" fill="white" opacity="0.4"/>

      {/* === 微笑 === */}
      <path d="M45 70 Q50 74 55 70" stroke="#D4884A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export default function DeerAIButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 浮动按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="deer-ai-button fixed bottom-6 right-6 z-50 group"
        aria-label="AI助手"
      >
        <span className="deer-ai-glow" />

        <div className="deer-ai-btn">
          <CuteDeer size={42} />
        </div>

        <span className="deer-ai-tooltip">
          问问小鹿 🦌
        </span>
      </button>

      {/* 弹出对话窗口 */}
      {isOpen && (
        <div className="deer-ai-overlay">
          <div className="deer-ai-backdrop" onClick={() => setIsOpen(false)} />

          <div className="deer-ai-window">
            {/* 头部 */}
            <div className="deer-popup-header">
              <CuteDeer size={28} />
              <span className="deer-popup-title">小鹿AI</span>
              <span className="deer-popup-subtitle">· 有问必答</span>
              <div className="flex-1" />
              <button
                onClick={() => setIsOpen(false)}
                className="deer-popup-close"
              >
                ✕
              </button>
            </div>

            {/* ChatWindow */}
            <div className="border-x border-b border-gray-100 rounded-b-2xl overflow-hidden">
              <ChatWindow embedded={true} onClose={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .deer-ai-button {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          background: none;
          padding: 0;
          outline: none;
        }

        .deer-ai-button:focus-visible .deer-ai-btn {
          box-shadow: 0 0 0 3px rgba(232, 160, 107, 0.4),
            0 4px 15px rgba(212, 136, 74, 0.3);
        }

        /* 呼吸光晕 - 改为暖色调 */
        .deer-ai-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(232, 160, 107, 0.35) 0%,
            rgba(232, 160, 107, 0.1) 40%,
            transparent 70%
          );
          animation: deerPulse 2.8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes deerPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.18); opacity: 0.9; }
        }

        /* 按钮主体 - 暖色调渐变 */
        .deer-ai-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(145deg, #FFF8F0 0%, #FFF3E8 50%, #FFE8D6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 4px 18px rgba(212, 136, 74, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(212, 136, 74, 0.1);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 1;
          border: 2px solid rgba(232, 160, 107, 0.3);
        }

        .deer-ai-button:hover .deer-ai-btn {
          transform: scale(1.1) translateY(-2px);
          box-shadow:
            0 8px 25px rgba(212, 136, 74, 0.4),
            0 4px 10px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(212, 136, 74, 0.1);
        }

        .deer-ai-button:active .deer-ai-btn {
          transform: scale(0.95);
          transition-duration: 0.1s;
        }

        /* 鹿角弹性动画 */
        .deer-antler-l {
          transform-origin: 36px 32px;
          transition: transform 0.3s ease;
        }
        .deer-antler-r {
          transform-origin: 64px 32px;
          transition: transform 0.3s ease;
        }
        .deer-ai-button:hover .deer-antler-l {
          animation: antlerBounceL 0.5s ease-in-out;
        }
        .deer-ai-button:hover .deer-antler-r {
          animation: antlerBounceR 0.5s ease-in-out;
        }

        @keyframes antlerBounceL {
          0%, 100% { transform: rotate(0deg); }
          40% { transform: rotate(-8deg); }
          70% { transform: rotate(3deg); }
        }
        @keyframes antlerBounceR {
          0%, 100% { transform: rotate(0deg); }
          40% { transform: rotate(8deg); }
          70% { transform: rotate(-3deg); }
        }

        /* 眨眼动画 */
        .deer-eye-l, .deer-eye-r {
          animation: eyeBlink 3.5s ease-in-out infinite;
        }
        .deer-eye-r {
          animation-delay: 0.1s;
        }

        @keyframes eyeBlink {
          0%, 88%, 100% { transform: scaleY(1); }
          92% { transform: scaleY(0.05); }
        }

        /* 提示标签 */
        .deer-ai-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(5px);
          background: rgba(212, 136, 74, 0.9);
          color: white;
          padding: 7px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(212, 136, 74, 0.3);
        }

        .deer-ai-button:hover .deer-ai-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* === 弹出窗口 === */
        .deer-ai-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 24px;
          pointer-events: none;
        }

        .deer-ai-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(2px);
          pointer-events: auto;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .deer-ai-window {
          position: relative;
          width: 420px;
          max-width: calc(100vw - 48px);
          margin-bottom: 64px;
          pointer-events: auto;
          animation: popUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 16px;
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.15),
            0 10px 25px rgba(0, 0, 0, 0.08);
        }

        @keyframes popUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* 弹窗头部 - 暖色调 */
        .deer-popup-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 14px;
          background: linear-gradient(135deg, #E8A06B 0%, #D4884A 100%);
          color: white;
          border-radius: 16px 16px 0 0;
        }

        .deer-popup-title {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .deer-popup-subtitle {
          font-size: 12px;
          opacity: 0.7;
          font-style: italic;
        }

        .deer-popup-close {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          transition: background 0.2s;
          cursor: pointer;
          border: none;
        }
        .deer-popup-close:hover {
          background: rgba(255,255,255,0.3);
        }

        /* 移动端 */
        @media (max-width: 480px) {
          .deer-ai-overlay {
            padding: 0;
            align-items: stretch;
          }
          .deer-ai-window {
            width: 100%;
            margin-bottom: 0;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            border-radius: 16px 16px 0 0;
          }
          .deer-ai-window > div:last-child {
            flex: 1;
            overflow: hidden;
          }
          .deer-ai-btn {
            width: 56px;
            height: 56px;
          }
          .deer-ai-tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
