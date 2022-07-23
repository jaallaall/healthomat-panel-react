import ToggleDrawerProvider from "context/drawer";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "routes";
import "./i18n";

function App() {
  const routeArray = useRoutes(routes(true));
  return routeArray;
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <ToggleDrawerProvider>
        <App />
      </ToggleDrawerProvider>
    </BrowserRouter>
  );
}

export default AppWrapper;
