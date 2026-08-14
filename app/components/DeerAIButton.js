'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const ChatWindow = dynamic(() => import('./life/ChatWindow'), { ssr: false });

/**
 * 精致小鹿AI组件 - 可复用于按钮和弹窗标题
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
      {/* === 鹿角 - 左（带小花） === */}
      <g className="deer-antler-l">
        <path d="M32 30 C30 22, 24 16, 20 10" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M26 20 C22 17, 18 16, 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M28 24 C24 22, 19 23, 16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* 鹿角上的小花 - 左 */}
        <circle cx="20" cy="9" r="3.5" fill="#FBBF24" opacity="0.9"/>
        <circle cx="17" cy="8" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="23" cy="8" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="20" cy="6" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="20" cy="12" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="20" cy="9" r="1.2" fill="#F59E0B"/>
        {/* 小花蕾 */}
        <circle cx="13.5" cy="13.5" r="2" fill="#FB923C" opacity="0.7"/>
        <circle cx="13.5" cy="13.5" r="0.8" fill="white" opacity="0.5"/>
      </g>

      {/* === 鹿角 - 右（带小花） === */}
      <g className="deer-antler-r">
        <path d="M68 30 C70 22, 76 16, 80 10" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M74 20 C78 17, 82 16, 86 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M72 24 C76 22, 81 23, 84 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* 鹿角上的小花 - 右 */}
        <circle cx="80" cy="9" r="3.5" fill="#FBBF24" opacity="0.9"/>
        <circle cx="77" cy="8" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="83" cy="8" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="80" cy="6" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="80" cy="12" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="80" cy="9" r="1.2" fill="#F59E0B"/>
        {/* 小花蕾 */}
        <circle cx="86.5" cy="13.5" r="2" fill="#FB923C" opacity="0.7"/>
        <circle cx="86.5" cy="13.5" r="0.8" fill="white" opacity="0.5"/>
      </g>

      {/* === 耳朵 - 左 === */}
      <ellipse cx="27" cy="38" rx="7" ry="10" fill="currentColor" opacity="0.18" transform="rotate(-15 27 38)"/>
      <ellipse cx="27" cy="38" rx="4" ry="7" fill="#FCA5A5" opacity="0.35" transform="rotate(-15 27 38)"/>

      {/* === 耳朵 - 右 === */}
      <ellipse cx="73" cy="38" rx="7" ry="10" fill="currentColor" opacity="0.18" transform="rotate(15 73 38)"/>
      <ellipse cx="73" cy="38" rx="4" ry="7" fill="#FCA5A5" opacity="0.35" transform="rotate(15 73 38)"/>

      {/* === 脸部 - 圆润大脸 === */}
      <ellipse cx="50" cy="56" rx="22" ry="20" fill="currentColor" opacity="0.1"/>
      <ellipse cx="50" cy="56" rx="22" ry="20" stroke="currentColor" strokeWidth="2.5"/>

      {/* === 额头斑点（梅花鹿特征） === */}
      <circle cx="42" cy="40" r="1.8" fill="currentColor" opacity="0.15"/>
      <circle cx="50" cy="38" r="1.5" fill="currentColor" opacity="0.12"/>
      <circle cx="58" cy="40" r="1.8" fill="currentColor" opacity="0.15"/>
      <circle cx="46" cy="43" r="1.2" fill="currentColor" opacity="0.1"/>
      <circle cx="54" cy="43" r="1.2" fill="currentColor" opacity="0.1"/>

      {/* === 腮红 === */}
      <ellipse cx="33" cy="62" rx="5" ry="3.5" fill="#F87171" opacity="0.2"/>
      <ellipse cx="67" cy="62" rx="5" ry="3.5" fill="#F87171" opacity="0.2"/>

      {/* === 眼睛 - 大而明亮 === */}
      <g className="deer-eye-l">
        {/* 眼白 */}
        <ellipse cx="40" cy="52" rx="5" ry="5.5" fill="white" opacity="0.9"/>
        {/* 瞳孔 */}
        <ellipse cx="40.5" cy="52.5" rx="3.8" ry="4.2" fill="currentColor"/>
        {/* 高光 - 大 */}
        <circle cx="38.5" cy="50" r="1.8" fill="white" opacity="0.95"/>
        {/* 高光 - 小 */}
        <circle cx="42" cy="54" r="0.9" fill="white" opacity="0.7"/>
        {/* 睫毛 */}
        <path d="M36 48 C35 46, 34.5 45, 34 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <path d="M38 47 C37.5 45, 37 44, 37 43" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      </g>

      <g className="deer-eye-r">
        {/* 眼白 */}
        <ellipse cx="60" cy="52" rx="5" ry="5.5" fill="white" opacity="0.9"/>
        {/* 瞳孔 */}
        <ellipse cx="59.5" cy="52.5" rx="3.8" ry="4.2" fill="currentColor"/>
        {/* 高光 - 大 */}
        <circle cx="57.5" cy="50" r="1.8" fill="white" opacity="0.95"/>
        {/* 高光 - 小 */}
        <circle cx="61" cy="54" r="0.9" fill="white" opacity="0.7"/>
        {/* 睫毛 */}
        <path d="M64 48 C65 46, 65.5 45, 66 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <path d="M62 47 C62.5 45, 63 44, 63 43" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      </g>

      {/* === 鼻子 - 小巧三角 === */}
      <path d="M50 61 L47.5 64 C47.5 65.5, 52.5 65.5, 52.5 64 Z" fill="currentColor" opacity="0.45"/>
      {/* 鼻子高光 */}
      <ellipse cx="49.5" cy="62.5" rx="1" ry="0.6" fill="white" opacity="0.4"/>

      {/* === 嘴巴 - 可爱微笑 === */}
      <path d="M44 67 Q47 70 50 67 Q53 70 56 67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35"/>

      {/* === 小门牙（从嘴巴里露出） === */}
      <rect x="48" y="67" width="4" height="2.5" rx="0.8" fill="white" opacity="0.7" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
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
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.4),
            0 4px 15px rgba(5, 150, 105, 0.3);
        }

        /* 呼吸光晕 */
        .deer-ai-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(52, 211, 153, 0.3) 0%,
            rgba(52, 211, 153, 0.1) 40%,
            transparent 70%
          );
          animation: deerPulse 2.8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes deerPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.18); opacity: 0.9; }
        }

        /* 按钮主体 */
        .deer-ai-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(145deg, #34D399 0%, #059669 40%, #047857 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 4px 18px rgba(5, 150, 105, 0.4),
            0 2px 8px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 1;
          color: white;
        }

        .deer-ai-button:hover .deer-ai-btn {
          transform: scale(1.1) translateY(-2px);
          box-shadow:
            0 8px 25px rgba(5, 150, 105, 0.5),
            0 4px 10px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.25),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
        }

        .deer-ai-button:active .deer-ai-btn {
          transform: scale(0.95);
          transition-duration: 0.1s;
        }

        /* 鹿角动画 */
        .deer-antler-l {
          transform-origin: 32px 30px;
          transition: transform 0.3s ease;
        }
        .deer-antler-r {
          transform-origin: 68px 30px;
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
          40% { transform: rotate(-6deg); }
          70% { transform: rotate(2deg); }
        }
        @keyframes antlerBounceR {
          0%, 100% { transform: rotate(0deg); }
          40% { transform: rotate(6deg); }
          70% { transform: rotate(-2deg); }
        }

        /* 眨眼 */
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

        /* 提示 */
        .deer-ai-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(5px);
          background: rgba(15, 23, 42, 0.88);
          color: white;
          padding: 7px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s ease;
          backdrop-filter: blur(6px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
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

        /* 弹窗头部 */
        .deer-popup-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 14px;
          background: linear-gradient(135deg, #059669 0%, #0d9488 100%);
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
          background: rgba(255,255,255,0.15);
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
          background: rgba(255,255,255,0.25);
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
