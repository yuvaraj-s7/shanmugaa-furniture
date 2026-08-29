import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import ta from '../locales/ta.json';

const resources = {
  en: {
    translation: en
  },
  ta: {
    translation: ta
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
      cookieMinutes: 365 * 24 * 60, // 1 year
      cookieOptions: {
        path: '/',
        sameSite: 'strict'
      }
    },
    
    interpolation: {
      escapeValue: false
    },
    
    react: {
      useSuspense: false
    }
  });

export default i18n;
