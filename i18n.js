import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Ensure fallback for invalid locales
  if (!locale || !['zh', 'ru', 'en'].includes(locale)) {
    locale = 'zh';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
