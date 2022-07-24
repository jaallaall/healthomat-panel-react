import { Icon, Sidebar } from "@UI";
import { useMediaQuery, useToggleDrawer } from "hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { menu } from "utils";
import Accordion from "./Accordion";

const Layouts: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  const matches = useMediaQuery("(min-width:600px)");
  const { state, toggleDrawer } = useToggleDrawer();

  const classes = `shadow flex flex-col bg-navy text-gray-100 w-72 fixed top-0 start-0 bottom-0 z-50`;

  const sidebar = (
    <>
      <div className="flex items-center justify-center py-4">
        <Link to="#" className="inline-flex flex-row items-center">
          <span className="leading-10  text-2xl font-bold ml-1 uppercase">
            HealthoMat
          </span>
        </Link>
      </div>
      <div className="flex-auto scrollbar p-4 h-full">
        {menu.map((item) => {
          return (
            <Accordion
              key={item.id}
              submenu={item.submenu}
              title={item.name}
              icon={item.icon}
              href={item.href}
            />
          );
        })}
      </div>
      <div className="m-3">
        <button className="p-3 w-full rounded-lg hover:text-primary">
          <Icon name="logout" className="align-middle me-2" />
          <span>{t("logout")}</span>
        </button>
      </div>
    </>
  );
  if (!matches) {
    return (
      <Sidebar
        onClose={toggleDrawer("left", false)}
        open={state["left"]}
        className={classes}
      >
        {sidebar}
      </Sidebar>
    );
  }

  return <aside className={classes}>{sidebar}</aside>;
};

export default Layouts;
