import { Icon } from "@UI";
import { useTheme, useToggleDrawer } from "hooks";
import Auth from "../Auth";
import Lang from "./Lang";
import Search from "./Search";

const Header: React.FC = (): React.ReactElement => {
  const { toggleDrawer } = useToggleDrawer();
  const { theme, toggleTheme } = useTheme();

  function handleChangeTheme(e: React.ChangeEvent<HTMLInputElement>) {
    toggleTheme(e.target.checked ? "light" : "dark");
  }

  return (
    <header className="py-4 px-4 md:ms-72 md:flex grid grid-cols-4 gap-3">
      <button
        onClick={toggleDrawer("left", true)}
        className="text-gray-400 px-2 md:hidden -order-1"
      >
        <Icon name="bars" />
      </button>
      <div className="flex items-center text-gray-400 order-1 md:col-auto col-span-2 flex-grow whitespace-nowrap">
        <Icon
          name="user"
          className="m-1 flex-[0_0_40px] h-10 relative flex justify-center items-center rounded-lg bg-primary text-xl text-white uppercase me-2"
        />
        {"جلال خالقی"}
      </div>

      <div className="md:order-1 -order-1 md:col-auto col-span-3">
        <Search />
      </div>
      <div className="flex order-last md:col-auto col-span-2 md:justify-start justify-end">
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
        <Lang />
        <Auth />
      </div>
    </header>
  );
};

export default Header;
