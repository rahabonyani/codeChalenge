import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import persian from "./language/fa/common.json";
import english from "./language/en/common.json";

const resources = {
  en: {
    common: english,
  },
  fa: {
    common: persian,
  },
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS: "common",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  load: "currentOnly",
});

export default i18n;
