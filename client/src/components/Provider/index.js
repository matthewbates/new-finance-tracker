import { useState, useEffect, createContext } from "react";
import { Navbar } from "../Navbar";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme" || "light"));

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const color_main = theme === "light" ? "#23272f" : "#f6f7f9";
  const background_main = theme === "light" ? "#ffffff" : "#121212";

  document.body.style.color = color_main;
  document.body.style.backgroundColor = background_main;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
