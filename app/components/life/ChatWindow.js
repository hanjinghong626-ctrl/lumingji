'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { useI18n } from '../../../i18n-context';
import guideIndex from '../../../data/life/guide-index.js';

// ===== i18n texts =====
const WELCOME = {
  zh: '你好！我是小鹿 🦌 鹿鸣集的AI助手\n\n我可以帮你解答在中国生活遇到的各种问题——从办银行卡到租房、从支付宝到看病。\n\n试试问我吧！',
  en: "Hi! I'm Xiao Lu 🦌, Lumingji's AI assistant\n\nI can help you with daily life in China — bank accounts, housing, Alipay, seeing a doctor, and more.\n\nTry asking me!",
  ru: 'Привет! Я Сяолу 🦌, ИИ-помощник Луминцзи\n\nПомогу с бытовыми вопросами в Китае — банковский счёт, жильё, Alipay, визит к врачу и многое другое.\n\nСпросите меня!',
};

const PLACEHOLDERS = {
  zh: '输入你的问题...',
  en: 'Type your question...',
  ru: 'Введите вопрос...',
};

const SEND_LABELS = { zh: '发送', en: 'Send', ru: 'Отпр.' };

const ERROR_MESSAGES = {
  zh: '网络连接出现问题，请稍后再试。',
  en: 'Connection error. Please try again later.',
  ru: 'Ошибка подключения. Попробуйте позже.',
};

const THINKING_LABELS = {
  zh: '思考中',
  en: 'Thinking',
  ru: 'Думаю',
};

// 快速建议问题
const SUGGESTIONS = {
  zh: ['怎么开银行账户？', '支付宝怎么用？', '签证到期了怎么办？', '怎么租房？'],
  en: ['How to open a bank account?', 'How to use Alipay?', 'What if my visa expires?', 'How to rent an apartment?'],
  ru: ['Как открыть банковский счёт?', 'Как пользоваться Alipay?', 'Что делать если виза истекает?', 'Как снять квартиру?'],
};

// 快捷功能按钮
const QUICK_ACTIONS = {
  zh: [
    { icon: '🌐', label: '翻译', prompt: '帮我翻译：' },
    { icon: '🚨', label: '紧急求助', prompt: '紧急联系方式' },
    { icon: '📋', label: '签证', prompt: '签证怎么办？' },
    { icon: '💱', label: '汇率', prompt: '100美元换多少人民币？' },
  ],
  en: [
    { icon: '🌐', label: 'Translate', prompt: 'Translate: ' },
    { icon: '🚨', label: 'Emergency', prompt: 'Emergency contacts' },
    { icon: '📋', label: 'Visa', prompt: 'How to apply for visa?' },
    { icon: '💱', label: 'Exchange', prompt: 'How much is 100 USD in CNY?' },
  ],
  ru: [
    { icon: '🌐', label: 'Перевод', prompt: 'Переведи: ' },
    { icon: '🚨', label: 'Экстренно', prompt: 'Экстренные контакты' },
    { icon: '📋', label: 'Виза', prompt: 'Как оформить визу?' },
    { icon: '💱', label: 'Курс', prompt: 'Сколько будет 100 долларов в юанях?' },
  ],
};

/**
 * ChatWindow - 可复用的AI聊天窗口
 * @param {boolean} embedded - 是否嵌入模式
 * @param {function} onClose - 关闭回调
 */
export default function ChatWindow({ embedded = false, onClose }) {
  const { locale } = useI18n();
  const lang = locale || 'zh';

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize welcome message
  useEffect(() => {
    setMessages([{ role: 'assistant', content: WELCOME[lang] || WELCOME.zh }]);
  }, [lang]);

  // 预构建指南元数据（只提取标题和摘要，发送给后端让AI选择）
  const guideMeta = useMemo(() => {
    return guideIndex.map(g => ({
      id: g.id,
      category: g.category,
      icon: g.icon,
      title: g.title?.[lang] || g.title?.zh || g.id,
      summary: g.summary?.[lang] || g.summary?.zh || '',
      tags: g.tags || [],
    }));
  }, [lang]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    if (!embedded) {
      inputRef.current?.focus();
    }
  }, []);

  async function handleSend(queryText) {
    const text = (queryText || input).trim();
    if (!text || loading) return;

    const userMessage = { role: 'user', content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // 发送所有指南元数据 + 用户消息给后端
      // 后端会让 DeepSeek 自己选择相关指南，再拉取完整内容生成回答
      const apiMessages = newMessages
        .filter(m => m.role === 'user' || m.role === 'assistant')
        .slice(-10)
        .map(m => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          locale: lang,
          guideMeta,
        }),
      });

      const data = await response.json();

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply || ERROR_MESSAGES[lang] || ERROR_MESSAGES.zh,
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: ERROR_MESSAGES[lang] || ERROR_MESSAGES.zh,
      }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const suggestions = SUGGESTIONS[lang] || SUGGESTIONS.zh;

  return (
    <div className={`flex flex-col ${embedded ? 'h-[50vh] max-h-[400px]' : 'h-[calc(100vh-180px)] min-h-[400px]'} bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden`}>
      {/* Header */}
      {embedded && (
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
          <span className="text-sm font-wenkai font-medium">🦌 小鹿 AI 助手</span>
          <button onClick={onClose} className="text-white/80 hover:text-white text-lg leading-none">✕</button>
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
              msg.role === 'user'
                ? 'bg-primary-500 text-white rounded-br-md'
                : 'bg-gray-50 text-gray-800 border border-gray-100 rounded-bl-md'
            }`}>
              <div className="text-sm font-wenkai whitespace-pre-wrap leading-relaxed break-words">
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-50 rounded-2xl rounded-bl-md px-4 py-3 border border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-wenkai">
                <span>{THINKING_LABELS[lang] || THINKING_LABELS.zh}</span>
                <span className="flex gap-0.5">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions (only show when just welcome message) */}
      {messages.length === 1 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSend(s)}
              className="px-3 py-1.5 text-xs font-wenkai bg-primary-50 text-primary-600 rounded-full
                border border-primary-100 hover:bg-primary-100 transition-all"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Quick actions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {(QUICK_ACTIONS[lang] || QUICK_ACTIONS.zh).map((action, i) => (
            <button
              key={`qa-${i}`}
              onClick={() => {
                setInput(action.prompt);
                inputRef.current?.focus();
              }}
              className="px-3 py-1.5 text-xs font-wenkai bg-white text-gray-600 rounded-full
                border border-gray-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600
                transition-all flex items-center gap-1"
            >
              <span>{action.icon}</span>
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Input area */}
      <div className="border-t border-gray-100 p-3 bg-white">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={PLACEHOLDERS[lang] || PLACEHOLDERS.zh}
            className="flex-1 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm font-wenkai
              focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all
              disabled:opacity-50"
            disabled={loading}
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="px-5 py-2.5 bg-primary-500 text-white rounded-xl text-sm font-wenkai font-medium
              hover:bg-primary-600 active:bg-primary-700
              disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {SEND_LABELS[lang] || SEND_LABELS.zh}
          </button>
        </div>
      </div>
    </div>
  );
}
