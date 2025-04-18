// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from "i18next-browser-languagedetector";

// i18n
//   .use(LanguageDetector)
//   .use(Backend)
//   .use(initReactI18next) 
//   .init({
//     backend: {
//       loadPath: '/locales/{{lng}}.json', 
//     },
//     lng: 'de',
//     fallbackLng: 'de', 
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next) 
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json', 
    },
    lng: 'de',
    fallbackLng: 'de', 
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, 
    },
  });

export default i18n;


