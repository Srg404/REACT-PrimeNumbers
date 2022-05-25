import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "How to play": "How to play",
      About: "About",
    },
  },
  fr: {
    translation: {
      "How to play": "Comment jouer",
      About: "A-propos",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
