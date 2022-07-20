import { Icon } from "@UI";
import { useToggleDrawer } from "hooks";
import Search from "./Search";

const Header: React.FC = (): React.ReactElement => {
  const { toggleDrawer } = useToggleDrawer();
  return (
    <header className="py-4 px-4 md:ms-72 flex">
      <button
        onClick={toggleDrawer("left", true)}
        className="text-gray-400 px-2 me-3 md:hidden"
      >
        <Icon name="bars" />
      </button>
      <div className="flex items-center flex-row justify-between w-full">
        <h1>میزکار</h1>
        <Search />
      </div>
    </header>
  );
};

export default Header;
