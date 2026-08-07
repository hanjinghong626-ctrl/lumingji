'use client';

import { I18nProvider } from '../../i18n-context';
import { getTranslations } from '../../i18n';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ locale, children }) {
  const { t } = getTranslations(locale);

  return (
    <I18nProvider locale={locale} t={t}>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-16">
        {children}
      </main>
      <Footer />
    </I18nProvider>
  );
}
