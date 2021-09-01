import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import english from "./locate/en/translate.json";
import nepali from "./locate/np/translate.json";
import russian from "./locate/ru/translate.json";
i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: english,
      np: nepali,
      ru: russian,
    },
    /* default language when load the website in browser */
    lng: "en",
    /* When react i18next not finding any language to as default in browser */
    fallbackLng: "np",
    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default",
    },
  });

export default i18n;
