// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://lumingji.vercel.app/sitemap.xml',
    host: 'https://lumingji.vercel.app',
  };
}
