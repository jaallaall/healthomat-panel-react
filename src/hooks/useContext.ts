import { ToggleDrawerContext } from "context/drawer";
import { ThemeContext } from "context/theme";
import { useContext } from "react";

export function useToggleDrawer() {
  const context = useContext(ToggleDrawerContext);
  if (!context) {
    throw new Error("useToggleDrawer must be used within a Provider");
  }
  return context;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext must be used within a Provider");
  }
  return context;
}
