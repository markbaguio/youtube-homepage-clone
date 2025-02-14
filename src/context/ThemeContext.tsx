import { createContext, ReactNode, useEffect, useState } from "react";

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Detect system theme preference if no localStorage value is set.
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) return storedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    // If there is darkmode theme in localstorage or the preferred system theme is dark, add "dark" <html> tags
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  //This listen for system theme changes.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChanges = () => {
      if (!localStorage.getItem("theme")) {
        setDarkMode(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChanges);

    return () => mediaQuery.removeEventListener("change", handleChanges);
  }, []);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
