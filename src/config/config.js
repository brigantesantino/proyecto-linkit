import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next"

i18next.use(LanguageDetector).use(initReactI18next).init({
    
    debug: true,
    resources: {
      en: {
        translation: {
          "key": "hello world"
        }
      }
    }
  });
  // initialized and ready to go!
  // i18next is already initialized, because the translation resources where passed via init function
  