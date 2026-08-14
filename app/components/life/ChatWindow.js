'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { useI18n } from '../../../i18n-context';
import guideIndex from '../../../data/life/guide-index.js';

// ===== Search utilities (shared with SearchBar) =====
function normalize(str) {
  return (str || '').toLowerCase().trim();
}

function searchScore(item, query) {
  const q = normalize(query);
  if (!q) return 0;
  let score = 0;
  const fields = item._searchFields || [];
  for (const field of fields) {
    const f = normalize(field);
    if (!f) continue;
    if (f === q) score += 100;
    else if (f.startsWith(q)) score += 50;
    else if (f.includes(q)) score += 20;
    if (q.length >= 2) {
      for (let i = 0; i <= q.length - 2; i++) {
        if (f.includes(q.substring(i, i + 2))) score += 5;
      }
    }
  }
  if (item._tags) {
    for (const tag of item._tags) {
      if (normalize(tag) === q) score += 30;
      else if (normalize(tag).includes(q)) score += 10;
    }
  }
  return score;
}

// ===== i18n texts =====
const WELCOME = {
  zh: '你好！我是鹿鸣集的AI助手 🌿\n\n我可以帮你解答在中国生活遇到的各种问题——从办银行卡到租房、从支付宝到看病。\n\n试试问我吧！',
  en: "Hello! I'm Lumingji's AI assistant 🌿\n\nI can help you with various daily life issues in China — from bank accounts to housing, from Alipay to seeing a doctor.\n\nTry asking me!",
  ru: 'Привет! Я ИИ-помощник Луминцзи 🌿\n\nЯ помогу вам с бытовыми вопросами в Китае — от банковского счёта до жилья, от Alipay до визита к врачу.\n\nСпросите меня!',
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

/**
 * ChatWindow - 可复用的AI聊天窗口
 * @param {boolean} embedded - 是否嵌入模式（用于弹出框，高度较小）
 * @param {function} onClose - 关闭回调（嵌入模式下使用）
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

  // Build search items for RAG retrieval
  const searchItems = useMemo(() => {
    return guideIndex.map(g => ({
      id: g.id,
      _searchFields: [
        g.title?.zh, g.title?.en, g.title?.ru,
        g.summary?.zh, g.summary?.en, g.summary?.ru,
        ...(g.tags || []),
      ],
      _tags: g.tags || [],
    }));
  }, []);

  // Retrieve top 5 relevant guide IDs
  function retrieveGuides(query) {
    const scored = searchItems
      .map(item => ({ ...item, score: searchScore(item, query) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    return scored.map(item => item.id);
  }

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

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage = { role: 'user', content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // Frontend RAG retrieval
      const relevantGuideIds = retrieveGuides(text);

      // Build API messages (last 10 for context window)
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
          relevantGuideIds,
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

  return (
    <div className={`flex flex-col ${embedded ? 'h-[50vh] max-h-[400px]' : 'h-[calc(100vh-180px)] min-h-[400px]'} bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden`}>
      {/* Header */}
      {embedded && (
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
          <span className="text-sm font-wenkai font-medium">🌿 AI 助手</span>
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
            onClick={handleSend}
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
