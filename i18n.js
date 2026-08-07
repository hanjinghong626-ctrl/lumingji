import zhMessages from './messages/zh.json';
import enMessages from './messages/en.json';
import ruMessages from './messages/ru.json';

const allMessages = { zh: zhMessages, en: enMessages, ru: ruMessages };
const locales = ['zh', 'ru', 'en'];
const defaultLocale = 'zh';

export function getTranslations(locale) {
  const l = locales.includes(locale) ? locale : defaultLocale;
  const messages = allMessages[l];

  function t(key) {
    if (!key) return '';
    const parts = key.split('.');
    let val = messages;
    for (const part of parts) {
      if (val && typeof val === 'object' && part in val) {
        val = val[part];
      } else {
        return key;
      }
    }
    return typeof val === 'string' ? val : key;
  }

  return { t, locale: l, messages };
}

export { locales, defaultLocale };
