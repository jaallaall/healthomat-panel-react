import Layout from "components/Layouts";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { appRoutes } from "./routes";

export const importDemo = (
  file: React.ReactNode
): React.LazyExoticComponent<React.ComponentType<any>> => {
  return lazy(() =>
    import(`components/${file}`).catch(() => console.log("Error in importing"))
  );
};

const Login = importDemo("Auth");

export const routes = (isLoggedIn: boolean) => [
  {
    path: "/",
    element: isLoggedIn ? <Layout /> : <Navigate to={"/login"} />,
    children: appRoutes.map(({ path, element }) => {
      const Element = importDemo(element);
      return {
        path: path,
        element: <Element />,
      };
    }),
  },
  { path: "/login", element: <Login /> },
];
