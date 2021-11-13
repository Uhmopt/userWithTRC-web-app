import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { jsonParse } from "lib/json";
import { initReactI18next } from "react-i18next";
const lang = (jsonParse(localStorage.getItem('level-store'))?.home ?? {})?.lang ?? 'en';
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: `${lang}`,
    backend: {
      /* translation file path */
      loadPath: "/locales/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });
export default i18n;