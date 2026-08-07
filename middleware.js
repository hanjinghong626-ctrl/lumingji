import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['zh', 'ru', 'en'],
  defaultLocale: 'zh',
});

export const config = {
  matcher: ['/', '/(zh|ru|en)/:path*'],
};
