import { Icon } from "@UI";
import { useRef, useState } from "react";
import { Options, TKeyMenu } from "interfaces";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  submenu?: Options[];
  icon: string;
  href: string;
}

const Accordion: React.FC<Props> = ({
  title,
  submenu,
  icon,
  href,
}): React.ReactElement => {
  const { t } = useTranslation(["menu"]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const contentSpace = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!submenu) {
      navigate(href);
    }
    setOpen(!open);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="flex flex-row w-full text-start items-center h-10 px-3 rounded-lg hover:bg-tahiti-dark"
      >
        <Icon name={icon} className="me-2" size={25} />
        <span className="flex-auto">{t(title as TKeyMenu)}</span>
        {submenu?.length && (
          <Icon
            name="chevronDown"
            className={`${
              open
                ? "transform duration-300 ease rotate-180"
                : "transform duration-300 ease"
            } inline-block text-gray-500`}
            size={12}
          />
        )}
      </button>
      {submenu && (
        <div
          ref={contentSpace}
          style={{
            maxHeight: `${
              open ? contentSpace?.current?.scrollHeight + "px" : 0
            }`,
          }}
          className="overflow-hidden transition-max-height duration-500 ease-in-out ps-7"
        >
          {submenu.map((it) => {
            return (
              <button
                key={it.id}
                onClick={() => navigate(it.href)}
                className="flex flex-row w-full items-center p-3 rounded-lg text-gray-600 hover:bg-tahiti-dark before:content-[''] before:w-1.5 before:h-1.5 before:bg-gray-100 before:rounded-full before:me-1"
              >
                {t(it.name as TKeyMenu)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
