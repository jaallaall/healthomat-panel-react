import { Icon } from "@UI";
import { Options, TKeyMenu } from "interfaces";
import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { menu } from "utils";

const Menu: React.FC = (): React.ReactElement => {
  const { t } = useTranslation(["menu"]);
  const navigate = useNavigate();
  const [active, setActive] = useState<number[]>([]);

  const contentSpace = useRef<HTMLDivElement>(null);

  const toggleAccordion = useCallback(
    (value: number) => {
      const currentIndex = active.indexOf(value);
      const newActive = [...active];
      if (currentIndex === -1) {
        newActive.push(value);
      } else {
        newActive.splice(currentIndex, 1);
      }
      setActive(newActive);
    },
    [active]
  );

  const handleClick = (item: Options, index: number) => {
    if (!item.submenu) {
      navigate(item.href);
    }
    toggleAccordion(index);
  };

  return (
    <ul className="flex flex-col w-full">
      {menu.map((item, index) => {
        const itemMenu = (
          <>
            <Icon name={item.icon} className="me-2" size={25} />
            <span className="flex-auto">{t(item.name as TKeyMenu)}</span>
            {item.submenu?.length && (
              <Icon
                name="chevronDown"
                className={`${
                  active.indexOf(index) !== -1
                    ? "transform duration-300 ease rotate-180"
                    : "transform duration-300 ease"
                } inline-block text-gray-500`}
                size={12}
              />
            )}
          </>
        );
        return (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item, index)}
              className="flex flex-row w-full text-start items-center h-10 px-3 rounded-lg text-gray-600 hover:bg-tahiti-dark"
            >
              {itemMenu}
            </button>
            {item.submenu && (
              <div
                ref={contentSpace}
                style={{
                  maxHeight: `${
                    active.indexOf(index) !== -1
                      ? contentSpace?.current?.scrollHeight + "px"
                      : 0
                  }`,
                }}
                className="overflow-hidden transition-max-height duration-500 ease-in-out ps-7"
              >
                {item.submenu.map((it) => {
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
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
