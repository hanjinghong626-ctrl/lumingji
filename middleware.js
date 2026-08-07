import { NextResponse } from 'next/server';

const locales = ['zh', 'ru', 'en'];
const defaultLocale = 'zh';

function getLocale(request) {
  const acceptLang = request.headers.get('accept-language') || '';
  for (const locale of locales) {
    if (acceptLang.includes(locale)) return locale;
  }
  return defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 跳过静态资源和 API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  // 检查路径是否已有 locale 前缀
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 根路径 → 重定向到默认语言
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // 无 locale 前缀的路径 → 添加 locale 前缀
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
