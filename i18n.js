import { getRequestConfig } from 'next-intl';

export default getRequestConfig(async () => {
  return {
    locales: ['zh', 'ru', 'en'],
    defaultLocale: 'zh',
    load: async (locale) => {
      const messages = (await import(`./messages/${locale}.json`)).default;
      return messages;
    },
  };
});
