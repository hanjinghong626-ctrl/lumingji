'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { useI18n } from '../../../i18n-context';
import guideIndex from '../../../data/life/guide-index.js';
import categories from '../../../data/life/categories.js';
import { getAllAppGuidesSummary } from '../../../data/life/app-guides-loader.js';

const PLACEHOLDERS = {
  zh: '搜索指南、App、话题…  例如"银行卡"',
  en: 'Search guides, apps, topics…  e.g. "bank card"',
  ru: 'Поиск гайдов, приложений…  напр. "банковская карта"',
};

const LABELS = {
  guides: { zh: '生活指南', en: 'Guides', ru: 'Гайды' },
  apps: { zh: 'App 指南', en: 'App Guides', ru: 'Приложения' },
  noResults: {
    zh: '没有找到相关内容，换个关键词试试？',
    en: 'No results found. Try another keyword?',
    ru: 'Ничего не найдено. Попробуйте другой запрос?',
  },
};

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
    // token-level matching for CJK
    if (q.length >= 2) {
      for (let i = 0; i <= q.length - 2; i++) {
        if (f.includes(q.substring(i, i + 2))) score += 5;
      }
    }
  }
  // tag exact match bonus
  if (item._tags) {
    for (const tag of item._tags) {
      if (normalize(tag) === q) score += 30;
      else if (normalize(tag).includes(q)) score += 10;
    }
  }
  return score;
}

export default function SearchBar() {
  const { locale, t } = useI18n();
  const lang = locale || 'zh';

  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const appSummaries = useMemo(() => getAllAppGuidesSummary() || [], []);

  // Build searchable items
  const searchItems = useMemo(() => {
    const items = [];

    // Guides
    for (const g of guideIndex) {
      items.push({
        type: 'guide',
        id: g.id,
        category: g.category,
        icon: g.icon,
        href: `/${locale}/life/${g.category}/${g.id}`,
        title: g.title?.[lang] || g.title?.zh || g.id,
        subtitle: g.summary?.[lang] || g.summary?.zh || '',
        _searchFields: [
          g.title?.zh, g.title?.en, g.title?.ru,
          g.summary?.zh, g.summary?.en, g.summary?.ru,
          ...(g.tags || []),
          g.id,
        ],
        _tags: g.tags || [],
      });
    }

    // App guides
    for (const a of appSummaries) {
      items.push({
        type: 'app',
        id: a.id,
        icon: '📱',
        href: `/${locale}/life/apps/${a.id}`,
        title: a.title?.[lang] || a.title?.zh || a.id,
        subtitle: a.desc?.[lang] || a.desc?.zh || '',
        _searchFields: [
          a.title?.zh, a.title?.en, a.title?.ru,
          a.desc?.zh, a.desc?.en, a.desc?.ru,
          a.id,
        ],
        _tags: [],
      });
    }

    return items;
  }, [locale, lang, appSummaries]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const scored = searchItems
      .map(item => ({ ...item, score: searchScore(item, query) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
    return scored;
  }, [query, searchItems]);

  // Group results
  const guideResults = results.filter(r => r.type === 'guide');
  const appResults = results.filter(r => r.type === 'app');

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Reset active index when results change
  useEffect(() => {
    setActiveIdx(-1);
  }, [query]);

  const flatResults = useMemo(() => [...guideResults, ...appResults], [guideResults, appResults]);

  function handleKeyDown(e) {
    if (!isOpen || flatResults.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx(prev => (prev + 1) % flatResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx(prev => (prev - 1 + flatResults.length) % flatResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIdx >= 0 && activeIdx < flatResults.length) {
        window.location.href = flatResults[activeIdx].href;
      } else if (flatResults.length > 0) {
        window.location.href = flatResults[0].href;
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  }

  function highlightMatch(text, query) {
    if (!query.trim() || !text) return text;
    const q = normalize(query);
    const idx = normalize(text).indexOf(q);
    if (idx === -1) return text;
    return (
      <>
        {text.substring(0, idx)}
        <span className="text-primary-600 font-semibold bg-primary-50 px-0.5 rounded">
          {text.substring(idx, idx + query.length)}
        </span>
        {text.substring(idx + query.length)}
      </>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto mb-10">
      {/* Search Input */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
          🔍
        </span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={PLACEHOLDERS[lang] || PLACEHOLDERS.zh}
          className="w-full pl-12 pr-10 py-3.5 bg-white rounded-2xl border border-gray-200
            shadow-sm focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100
            text-gray-800 placeholder-gray-400 text-sm font-wenkai transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && query.trim() && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-[70vh] overflow-y-auto">
          {flatResults.length === 0 ? (
            <div className="px-5 py-8 text-center text-gray-400 text-sm font-wenkai">
              {LABELS.noResults[lang] || LABELS.noResults.zh}
            </div>
          ) : (
            <>
              {/* Guide Results */}
              {guideResults.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-gray-50/80 text-xs font-wenkai font-bold text-gray-500 uppercase tracking-wide">
                    {LABELS.guides[lang]}
                  </div>
                  {guideResults.map((item, idx) => {
                    const globalIdx = idx;
                    const isActive = globalIdx === activeIdx;
                    return (
                      <a
                        key={`guide-${item.id}`}
                        href={item.href}
                        className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                          isActive ? 'bg-primary-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-wenkai font-semibold text-gray-800 truncate">
                            {highlightMatch(item.title, query)}
                          </div>
                          {item.subtitle && (
                            <div className="text-xs text-gray-500 truncate mt-0.5">
                              {highlightMatch(item.subtitle, query)}
                            </div>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}

              {/* App Results */}
              {appResults.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-gray-50/80 text-xs font-wenkai font-bold text-gray-500 uppercase tracking-wide border-t border-gray-100">
                    {LABELS.apps[lang]}
                  </div>
                  {appResults.map((item, idx) => {
                    const globalIdx = guideResults.length + idx;
                    const isActive = globalIdx === activeIdx;
                    return (
                      <a
                        key={`app-${item.id}`}
                        href={item.href}
                        className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                          isActive ? 'bg-primary-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-wenkai font-semibold text-gray-800 truncate">
                            {highlightMatch(item.title, query)}
                          </div>
                          {item.subtitle && (
                            <div className="text-xs text-gray-500 truncate mt-0.5">
                              {highlightMatch(item.subtitle, query)}
                            </div>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
