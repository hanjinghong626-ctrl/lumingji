'use client';

import { useParams } from 'next/navigation';
import { I18nProvider } from '../../i18n-context';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }) {
  const params = useParams();
  const locale = params?.locale || 'zh';

  return (
    <I18nProvider locale={locale}>
      <Navbar />
      <main className="flex-grow pt-24 md:pt-16">
        {children}
      </main>
      <Footer />
    </I18nProvider>
  );
}
