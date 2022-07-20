import { createContext, useMemo, useState } from "react";

export const ToggleDrawerContext = createContext({
  state: { left: false },
  toggleDrawer:
    (anchor: "left", open: boolean) =>
    (_: React.KeyboardEvent | React.MouseEvent) => {},
});

const ToggleDrawerProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }): React.ReactElement => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawerMemo = useMemo(
    () => ({
      state,
      toggleDrawer:
        (anchor: "left", open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
              (event as React.KeyboardEvent).key === "Shift")
          ) {
            return;
          }
          setState({ ...state, [anchor]: open });
        },
    }),
    [state]
  );

  return (
    <ToggleDrawerContext.Provider value={toggleDrawerMemo}>
      {children}
    </ToggleDrawerContext.Provider>
  );
};

export default ToggleDrawerProvider;
