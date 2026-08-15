'use client';

import { useState, useMemo } from 'react';
import { useI18n } from '../../../../i18n-context';
import phrasebookData from '../../../../data/life/phrasebook-data';

export default function PhrasebookPage() {
  const { locale } = useI18n();
  const lang = locale || 'zh';
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(null);

  const colorMap = {
    red: 'bg-red-50 border-red-200 text-red-700',
    sky: 'bg-sky-50 border-sky-200 text-sky-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    pink: 'bg-pink-50 border-pink-200 text-pink-700',
    violet: 'bg-violet-50 border-violet-200 text-violet-700',
    rose: 'bg-rose-50 border-rose-200 text-rose-700',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
    cyan: 'bg-cyan-50 border-cyan-200 text-cyan-700',
    fuchsia: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700',
  };

  const chipColorMap = {
    red: 'bg-red-100 text-red-700 hover:bg-red-200',
    sky: 'bg-sky-100 text-sky-700 hover:bg-sky-200',
    orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
    pink: 'bg-pink-100 text-pink-700 hover:bg-pink-200',
    violet: 'bg-violet-100 text-violet-700 hover:bg-violet-200',
    rose: 'bg-rose-100 text-rose-700 hover:bg-rose-200',
    emerald: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
    indigo: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
    amber: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
    cyan: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200',
  };

  const filteredData = useMemo(() => {
    let data = phrasebookData;
    if (activeCategory !== 'all') {
      data = data.filter(cat => cat.id === activeCategory);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      data = data.map(cat => ({
        ...cat,
        phrases: cat.phrases.filter(p =>
          p.zh.toLowerCase().includes(q) ||
          p.py.toLowerCase().includes(q) ||
          p.en.toLowerCase().includes(q) ||
          p.ru.toLowerCase().includes(q)
        )
      })).filter(cat => cat.phrases.length > 0);
    }
    return data;
  }, [activeCategory, search]);

  const totalPhrases = phrasebookData.reduce((sum, cat) => sum + cat.phrases.length, 0);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    }
  };

  const titleText = {
    zh: '中文生存口语手册',
    en: 'Chinese Survival Phrasebook',
    ru: 'Разговорник для выживания в Китае'
  };

  const subtitleText = {
    zh: '点击句子即可复制中文 · 随身必备的实用中文短句',
    en: 'Tap any phrase to copy · Your essential Chinese phrases',
    ru: 'Нажмите, чтобы скопировать · Необходимые фразы на каждый день'
  };

  const allLabel = { zh: '全部', en: 'All', ru: 'Все' };
  const searchPlaceholder = {
    zh: '搜索短语…',
    en: 'Search phrases...',
    ru: 'Поиск фраз...'
  };
  const copyLabel = { zh: '点击复制', en: 'Tap to copy', ru: 'Нажми, чтобы скопировать' };
  const copiedLabel = { zh: '已复制 ✓', en: 'Copied ✓', ru: 'Скопировано ✓' };
  const phrasesLabel = { zh: '句', en: 'phrases', ru: 'фраз' };
  const noResult = { zh: '没有找到相关短语', en: 'No phrases found', ru: 'Фразы не найдены' };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
            🈶 {lang === 'ru' ? 'Разговорник' : lang === 'en' ? 'Phrasebook' : '口语手册'}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {titleText[lang]}
          </h1>
          <p className="text-sm text-gray-500">
            {subtitleText[lang]}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {lang === 'ru' ? `${totalPhrases} фраз в ${phrasebookData.length} категориях`
              : lang === 'en' ? `${totalPhrases} phrases in ${phrasebookData.length} categories`
              : `${phrasebookData.length} 个场景 · ${totalPhrases} 句实用口语`}
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder[lang]}
            className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent transition-all"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {allLabel[lang]} ({totalPhrases})
          </button>
          {phrasebookData.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.icon} {cat.name[lang]} ({cat.phrases.length})
            </button>
          ))}
        </div>

        {/* Phrase cards */}
        {filteredData.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-sm">
            {noResult[lang]}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredData.map(cat => (
              <div key={cat.id}>
                {/* Category header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{cat.icon}</span>
                  <h2 className="text-base font-bold text-gray-800">{cat.name[lang]}</h2>
                  <span className="text-xs text-gray-400">{cat.phrases.length} {phrasesLabel[lang]}</span>
                </div>

                {/* Phrases grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.phrases.map((phrase, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCopy(phrase.zh)}
                      className={`relative rounded-xl border p-3 cursor-pointer transition-all hover:shadow-sm active:scale-[0.98] ${colorMap[cat.color] || 'bg-gray-50 border-gray-200'}`}
                    >
                      {/* Chinese text */}
                      <div className="text-base font-bold text-gray-900 mb-0.5">
                        {phrase.zh}
                      </div>
                      {/* Pinyin */}
                      <div className="text-xs text-gray-500 mb-1.5 italic">
                        {phrase.py}
                      </div>
                      {/* Translation */}
                      <div className="text-xs text-gray-600">
                        {lang === 'zh' ? phrase.en : phrase[lang] || phrase.en}
                      </div>
                      {lang === 'zh' && (
                        <div className="text-xs text-gray-400 mt-0.5">
                          {phrase.ru}
                        </div>
                      )}
                      {/* Copy indicator */}
                      <div className="absolute top-2 right-2">
                        {copied === phrase.zh ? (
                          <span className="text-xs text-green-600 font-medium animate-pulse">{copiedLabel[lang]}</span>
                        ) : (
                          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer tip */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 text-sm text-amber-700">
            💡 {lang === 'ru'
              ? 'Покажите китайский текст продавцу, таксисту или официанту — они поймут!'
              : lang === 'en'
              ? 'Show the Chinese text to a shopkeeper, driver, or waiter — they\'ll understand!'
              : '把中文句子给店员、司机、服务员看，他们就能看懂！'}
          </div>
        </div>

        {/* Back to life */}
        <div className="text-center mt-6">
          <a href={`/${lang}/life`} className="text-sm text-teal-600 hover:text-teal-700 hover:underline">
            ← {lang === 'ru' ? 'Назад к гидам' : lang === 'en' ? 'Back to guides' : '返回生活指南'}
          </a>
        </div>
      </div>
    </div>
  );
}
