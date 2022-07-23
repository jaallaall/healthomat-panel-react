import { createContext, useEffect, useMemo, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: light)");
    if (userMedia.matches) {
      return "light";
    }
  }

  return "dark";
};

export const ThemeContext = createContext<{
  theme: string;
  toggleTheme: (theme: string) => void;
}>({
  theme: "",
  toggleTheme() {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === "light";

    root.classList.remove(isDark ? "dark" : "light");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
    setTheme(theme);
  };

  // if (initialTheme) {
  //   rawSetTheme(initialTheme);
  // }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const toggleThemeMemo = useMemo(
    () => ({
      theme,
      toggleTheme: rawSetTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={toggleThemeMemo}>
      {children}
    </ThemeContext.Provider>
  );
};
