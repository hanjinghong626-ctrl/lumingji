'use client';

import { useI18n } from '../../../../i18n-context';
import ChatWindow from '../../../../components/life/ChatWindow';

const TITLES = {
  zh: 'AI 助手',
  en: 'AI Assistant',
  ru: 'ИИ-помощник',
};

const SUBTITLES = {
  zh: '关于在中国生活的一切，尽管问',
  en: 'Ask me anything about life in China',
  ru: 'Спросите меня о жизни в Китае',
};

export default function AIChatPage() {
  const { locale } = useI18n();
  const lang = locale || 'zh';

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/30 to-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-wenkai font-bold text-gray-800">
            🌿 {TITLES[lang] || TITLES.zh}
          </h1>
          <p className="text-sm text-gray-500 mt-2 font-wenkai">
            {SUBTITLES[lang] || SUBTITLES.zh}
          </p>
        </div>

        {/* Chat Window */}
        <ChatWindow />
      </div>
    </div>
  );
}
