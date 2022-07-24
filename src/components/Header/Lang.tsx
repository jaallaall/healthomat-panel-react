import i18next from "i18next";
import { useState } from "react";

const Lang: React.FC = (): React.ReactElement => {
  const [show, setShow] = useState<{ en: boolean; fa: boolean }>({
    en: true,
    fa: false,
  });
  const handleChangeLangEn = () => {
    i18next.changeLanguage("en");
    setShow({ fa: true, en: false });
  };
  const handleChangeLangFa = () => {
    i18next.changeLanguage("fa");
    setShow({ fa: false, en: true });
  };
  return (
    <div className="flex ms-2">
      {show.en && (
        <button
          className="w-10 h-10 border border-gray-200 rounded-md flex items-center justify-center"
          onClick={handleChangeLangEn}
        >
          <img src="/static/images/en.png" className="w-5 h-5" />
        </button>
      )}
      {show.fa && (
        <button
          className="w-10 h-10 border border-gray-200 rounded-md flex items-center justify-center"
          onClick={handleChangeLangFa}
        >
          <img src="/static/images/ir.png" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Lang;
