'use client';

import { createContext, useContext } from 'react';

const I18nContext = createContext({
  locale: 'zh',
  t: (key) => key,
});

export function I18nProvider({ locale, children }) {
  const t = (key) => {
    // 此函数仅作为 fallback，实际 t 由各页面自行从 messages 中取
    return key;
  };

  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
