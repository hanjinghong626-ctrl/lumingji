'use client';

import { createContext, useContext } from 'react';

const I18nContext = createContext({
  locale: 'zh',
  t: (key) => key,
});

export function I18nProvider({ locale, t, children }) {
  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
