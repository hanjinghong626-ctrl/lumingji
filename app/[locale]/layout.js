import ClientLayout from '../components/ClientLayout';
import '../../styles/globals.css';

export const metadata = {
  metadataBase: new URL('https://lumingji.vercel.app'),
  title: {
    default: '鹿鸣集 LuMingJi — 来华留学生活服务平台',
    template: '%s | 鹿鸣集 LuMingJi',
  },
  description: '面向来华留学生的一站式生活服务平台，提供中俄英三语生活指南、高校信息、AI智能助手、汇率查询等实用功能。',
  keywords: ['来华留学', '留学生', '生活指南', '鹿鸣集', 'LuMingJi', 'China study abroad', 'international students', 'студенты в Китае'],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '鹿鸣集 LuMingJi',
    title: '鹿鸣集 — 来华留学生活服务平台',
    description: '以三千年前的古礼，迎接远方来客。中俄英三语生活指南、高校信息、AI智能助手。',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1920,
        height: 1080,
        alt: '鹿鸣集 LuMingJi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '鹿鸣集 LuMingJi',
    description: '来华留学生活服务平台',
    images: ['/images/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      'zh': '/zh',
      'ru': '/ru',
      'en': '/en',
    },
  },
};

export function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'ru' }, { locale: 'en' }];
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Sans:wght@300;400;500;700&family=LXGW+WenKai+TC:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-parchment-50 text-gray-800 font-sans min-h-screen flex flex-col">
        <ClientLayout locale={params.locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
