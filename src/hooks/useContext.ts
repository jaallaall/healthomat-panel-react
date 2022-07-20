import { ToggleDrawerContext } from "context/drawer";
import { useContext } from "react";

export function useToggleDrawer() {
  const context = useContext(ToggleDrawerContext);
  if (!context) {
    throw new Error("useToggleDrawer must be used within a Provider");
  }
  return context;
}
