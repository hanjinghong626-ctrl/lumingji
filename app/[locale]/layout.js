import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../../styles/globals.css';

export function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'ru' }, { locale: 'en' }];
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-parchment-50 text-gray-800 font-sans min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-grow pt-24 md:pt-16">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
