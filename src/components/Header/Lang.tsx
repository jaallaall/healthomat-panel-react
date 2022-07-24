import { useState } from "react";
import { useTranslation } from "react-i18next";

const Lang: React.FC = (): React.ReactElement => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>("en");

  function handleChangeTheme(e: React.ChangeEvent<HTMLInputElement>) {
    i18n.changeLanguage(e.target.checked ? "fa" : "en");
    document.dir = i18n.dir();
    setLang(e.target.checked ? "en" : "fa");
  }

  return (
    <label className="cursor-pointer flex items-center justify-center border border-gray-200 rounded-md w-10 h-10 ms-2 hover:bg-primary hover:text-white hover:border-primary text-gray-400">
      <input
        type="checkbox"
        checked={lang === "en"}
        onChange={handleChangeTheme}
        hidden
      />
      {lang === "en" ? (
        <img src="/static/images/en.png" className="w-5 h-5" />
      ) : (
        <img src="/static/images/ir.png" className="w-5 h-5" />
      )}
    </label>
  );
};

export default Lang;
