import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/locales/en.json';
import fr from '../assets/locales/fr.json';
import ht from '../assets/locales/ht.json';
i18n.use(initReactI18next).init({
  resources: { en: {translation: en}, fr: {translation: fr}, ht: {translation: ht} },
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});
export default i18n;
