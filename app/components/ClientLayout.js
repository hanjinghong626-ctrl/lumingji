'use client';

import { I18nProvider } from '../../i18n-context';
import { getTranslations } from '../../i18n';
import Navbar from './Navbar';
import Footer from './Footer';
import DeerAIButton from './DeerAIButton';

export default function ClientLayout({ locale, children }) {
  const { t } = getTranslations(locale);

  return (
    <I18nProvider locale={locale} t={t}>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-16">
        {children}
      </main>
      <Footer />
      {/* 全站浮动AI助手 - 小鹿按钮 */}
      <DeerAIButton />
    </I18nProvider>
  );
}
