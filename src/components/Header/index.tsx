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
    <header className="py-4 px-4 md:ms-72 flex">
      <button
        onClick={toggleDrawer("left", true)}
        className="text-gray-400 px-2 me-3 md:hidden"
      >
        <Icon name="bars" />
      </button>
      <div className="flex items-center flex-row justify-between w-full">
        <div className="flex items-center text-gray-400">
          <Icon
            name="user"
            className="m-1 w-10 h-10 relative flex justify-center items-center rounded-lg bg-primary text-xl text-white uppercase me-2"
          />
          {"جلال خالقی"}
        </div>

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
          <Lang />
          <Auth />
        </div>
      </div>
    </header>
  );
};

export default Header;
