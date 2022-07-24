import { Icon } from "@UI";
import { useTheme, useToggleDrawer } from "hooks";
import { TKeyMenu } from "interfaces";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Auth from "../Auth";
import Search from "./Search";

const Header: React.FC = (): React.ReactElement => {
  const { t } = useTranslation(["menu"]);
  const { pathname } = useLocation();
  const { toggleDrawer } = useToggleDrawer();
  const { theme, toggleTheme } = useTheme();

  function handleChangeTheme(e: React.ChangeEvent<HTMLInputElement>) {
    toggleTheme(e.target.checked ? "light" : "dark");
  }

  const title =
    pathname === "/" ? t("dashboard") : t(pathname?.split("/")[1] as TKeyMenu);

  return (
    <header className="py-4 px-4 md:ms-72 flex">
      <button
        onClick={toggleDrawer("left", true)}
        className="text-gray-400 px-2 me-3 md:hidden"
      >
        <Icon name="bars" />
      </button>
      <div className="flex items-center flex-row justify-between w-full">
        <h2 className="text-gray-400">{title}</h2>

        <div className="flex">
          <Search />
          <label className="cursor-pointer flex items-center justify-center border border-gray-200 rounded-md w-10 h-10 ms-2 hover:bg-primary hover:text-white hover:border-primary text-gray-400">
            <input
              type="checkbox"
              checked={theme === "light"}
              onChange={handleChangeTheme}
              hidden
            />
            {theme === "light" ? (
              <Icon name="sun" size={20} />
            ) : (
              <Icon name="moon" size={20} />
            )}
          </label>
          <Auth />
        </div>
      </div>
    </header>
  );
};

export default Header;
