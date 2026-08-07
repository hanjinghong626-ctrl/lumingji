import ClientLayout from '../components/ClientLayout';
import '../../styles/globals.css';

export const metadata = {
  title: '鹿鸣集 | LuMingJi',
  description: '外国留学生在青岛的生活服务平台',
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
