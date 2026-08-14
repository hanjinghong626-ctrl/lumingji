'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ChatWindow to avoid SSR issues
const ChatWindow = dynamic(() => import('./life/ChatWindow'), { ssr: false });

/**
 * 鹿鸣集浮动AI助手按钮
 * 全站可见的浮动按钮，点击弹出AI对话窗口
 * 设计：灵动的梅花鹿轮廓 + 呼吸光晕动画
 */
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
        {/* 光晕呼吸动画 */}
        <span className="deer-ai-glow" />

        {/* 按钮主体 */}
        <div className="deer-ai-btn">
          {/* 小鹿SVG */}
          <svg
            className="deer-ai-icon"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 鹿角 - 左 */}
            <path
              d="M24 18 C22 12, 18 8, 16 4 M20 12 C18 10, 14 9, 12 7 M22 14 C19 13, 16 14, 14 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="deer-antler"
            />
            {/* 鹿角 - 右 */}
            <path
              d="M40 18 C42 12, 46 8, 48 4 M44 12 C46 10, 50 9, 52 7 M42 14 C45 13, 48 14, 50 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="deer-antler"
            />
            {/* 头部 */}
            <ellipse cx="32" cy="28" rx="10" ry="11" fill="currentColor" opacity="0.15" />
            <ellipse cx="32" cy="28" rx="10" ry="11" stroke="currentColor" strokeWidth="2" />
            {/* 眼睛 */}
            <circle cx="28" cy="26" r="1.5" fill="currentColor" className="deer-eye" />
            <circle cx="36" cy="26" r="1.5" fill="currentColor" className="deer-eye" />
            {/* 鼻子 */}
            <ellipse cx="32" cy="32" rx="2" ry="1.5" fill="currentColor" opacity="0.6" />
            {/* 耳朵 - 左 */}
            <path
              d="M23 20 C20 16, 18 18, 20 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="currentColor"
              opacity="0.1"
            />
            {/* 耳朵 - 右 */}
            <path
              d="M41 20 C44 16, 46 18, 44 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="currentColor"
              opacity="0.1"
            />
            {/* 身体轮廓（简化） */}
            <path
              d="M26 38 C26 42, 28 48, 28 52 M38 38 C38 42, 36 48, 36 52"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.4"
            />
            {/* 梅花点缀（呼应鹿鸣集的鹿） */}
            <circle cx="28" cy="22" r="1" fill="currentColor" opacity="0.3" />
            <circle cx="36" cy="22" r="1" fill="currentColor" opacity="0.3" />
            <circle cx="32" cy="20" r="0.8" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        {/* 提示文字 - hover时显示 */}
        <span className="deer-ai-tooltip">
          AI助手
        </span>
      </button>

      {/* 弹出对话窗口 */}
      {isOpen && (
        <div className="deer-ai-overlay">
          {/* 半透明背景遮罩 */}
          <div
            className="deer-ai-backdrop"
            onClick={() => setIsOpen(false)}
          />

          {/* 对话窗口 */}
          <div className="deer-ai-window">
            {/* 自定义头部 - 小鹿标题 */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-2xl">
              <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7">
                <path
                  d="M24 18 C22 12, 18 8, 16 4 M20 12 C18 10, 14 9, 12 7 M22 14 C19 13, 16 14, 14 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M40 18 C42 12, 46 8, 48 4 M44 12 C46 10, 50 9, 52 7 M42 14 C45 13, 48 14, 50 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <ellipse cx="32" cy="28" rx="10" ry="11" fill="currentColor" opacity="0.2" />
                <ellipse cx="32" cy="28" rx="10" ry="11" stroke="currentColor" strokeWidth="2" />
                <circle cx="28" cy="26" r="1.5" fill="currentColor" />
                <circle cx="36" cy="26" r="1.5" fill="currentColor" />
                <ellipse cx="32" cy="32" rx="2" ry="1.5" fill="currentColor" opacity="0.6" />
              </svg>
              <span className="font-wenkai text-lg tracking-wide">小鹿AI</span>
              <div className="flex-1" />
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* ChatWindow 嵌入模式 */}
            <div className="border-x border-b border-gray-200 rounded-b-2xl overflow-hidden">
              <ChatWindow embedded={true} onClose={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* 样式 */}
      <style jsx>{`
        /* === 浮动按钮 === */
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
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.4);
        }

        /* 光晕 */
        .deer-ai-glow {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%);
          animation: deerPulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes deerPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        /* 按钮主体 */
        .deer-ai-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #059669 0%, #0d9488 50%, #0f766e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 4px 15px rgba(5, 150, 105, 0.35),
            0 2px 6px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 1;
        }

        .deer-ai-button:hover .deer-ai-btn {
          transform: scale(1.08);
          box-shadow:
            0 6px 20px rgba(5, 150, 105, 0.45),
            0 3px 8px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .deer-ai-button:active .deer-ai-btn {
          transform: scale(0.95);
        }

        /* 鹿图标 */
        .deer-ai-icon {
          width: 36px;
          height: 36px;
          color: white;
          transition: transform 0.3s ease;
        }

        .deer-ai-button:hover .deer-ai-icon {
          transform: translateY(-1px);
        }

        /* 鹿角hover微动 */
        .deer-antler {
          transition: transform 0.3s ease;
          transform-origin: bottom center;
        }

        .deer-ai-button:hover .deer-antler {
          animation: antlerWiggle 0.6s ease-in-out;
        }

        @keyframes antlerWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        /* 眼睛闪烁 */
        .deer-eye {
          animation: eyeBlink 4s ease-in-out infinite;
        }

        @keyframes eyeBlink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.1; }
        }

        /* 提示文字 */
        .deer-ai-tooltip {
          position: absolute;
          right: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%);
          background: rgba(15, 23, 42, 0.85);
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          backdrop-filter: blur(4px);
        }

        .deer-ai-button:hover .deer-ai-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(-4px);
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
          background: rgba(0, 0, 0, 0.2);
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
          width: 400px;
          max-width: calc(100vw - 48px);
          margin-bottom: 60px;
          pointer-events: auto;
          animation: slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 8px 20px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* 移动端适配 */
        @media (max-width: 480px) {
          .deer-ai-overlay {
            padding: 12px;
            align-items: stretch;
          }

          .deer-ai-window {
            width: 100%;
            margin-bottom: 0;
            max-height: 80vh;
            display: flex;
            flex-direction: column;
          }

          .deer-ai-window > div:last-child {
            flex: 1;
            overflow: hidden;
          }

          .deer-ai-btn {
            width: 52px;
            height: 52px;
          }

          .deer-ai-icon {
            width: 30px;
            height: 30px;
          }

          .deer-ai-tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
