import ToggleDrawerProvider from "context/drawer";
import { ThemeProvider } from "context/theme";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "routes";
import "./i18n";

function App() {
  const routeArray = useRoutes(routes(true));
  return routeArray;
}

function AppWrapper() {
  return (
    <ThemeProvider>
      <ToggleDrawerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleDrawerProvider>
    </ThemeProvider>
  );
}

export default AppWrapper;
