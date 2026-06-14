import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

useEffect(() => {
  document.body.classList.remove("light-mode", "dark-mode");
  document.body.classList.add(
    darkMode ? "dark-mode" : "light-mode"
  );
}, [darkMode]);

const toggleTheme = () => {
  setDarkMode(prev => {
    const newMode = !prev;

    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(newMode ? "dark-mode" : "light-mode");

    localStorage.setItem("theme", newMode ? "dark" : "light");

    return newMode;
  });
};

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}