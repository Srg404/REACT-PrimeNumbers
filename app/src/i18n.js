import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataTranslations from "./data/translation.json";

const resources = dataTranslations;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
