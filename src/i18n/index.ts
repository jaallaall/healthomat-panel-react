import i18n from "i18next";
import common from "../i18n/fa/common.json";
import menu from "../i18n/fa/menu.json";
import { initReactI18next } from "react-i18next";

export const resources = {
  fa: {
    common,
    menu,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "fa",
  ns: ["common", "menu"],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

export default i18n;
