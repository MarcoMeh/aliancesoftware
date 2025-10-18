// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';
import fr from './locales/fr/translation.json';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(LanguageDetector) // Detect user language (browser, local storage, etc.)
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources, // Your loaded translation files
    fallbackLng: 'en', // Fallback language if the detected or selected language is unavailable
    supportedLngs: ['en', 'ar', 'fr'], // Explicitly list all supported languages
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Cache the detected language in localStorage
    },
    interpolation: {
      escapeValue: false, // React already escapes by default, so set to false
    },
    react: {
      useSuspense: true, // Recommended for React 18+ to use React.Suspense for loading translations
    },
    // debug: true, // Uncomment for debugging in the console
  });

export default i18n;