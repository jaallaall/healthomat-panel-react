import Layout from "components/Layouts";
import { lazy } from "react";
import { Helmet } from "react-helmet";
import { appRoutes } from "./routes";

export const importDemo = (
  file: React.ReactNode
): React.LazyExoticComponent<React.ComponentType<any>> => {
  return lazy(() =>
    import(`components/${file}`).catch(() => console.log("Error in importing"))
  );
};

export const routes = [
  {
    path: "/",
    element: (
      <>
        <Helmet title={"healthomat"} />
        <Layout />
      </>
    ),
    children: appRoutes.map(({ path, element }) => {
      const Element = importDemo(element);
      return {
        path: path,
        element: <Element />,
      };
    }),
  },
];
