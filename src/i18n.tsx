import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "../translation/English/translation.json";
import translationPt from "../translation/Portuguese/translation.json";

const resources = {
  en: {
    translation: translationEn,
  },
  pt: {
    translation: translationPt,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
