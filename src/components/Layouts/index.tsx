import Header from "components/Header";
import { TKeyMenu } from "interfaces";
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const title =
    pathname === "/" ? t("dashboard") : t(pathname?.split("/")[1] as TKeyMenu);
  return (
    <>
      <Helmet title={title} />
      <Sidebar />
      <Header />
      <main className="main flex flex-col md:ms-72 md:flex-grow  transition-all duration-150 ease-in">
        <div className="p-4">
          <Suspense fallback={<h4>Loading...</h4>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
