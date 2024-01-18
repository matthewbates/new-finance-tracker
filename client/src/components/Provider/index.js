import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color_main = theme === "light" ? "#263238" : "#ffffff";
  const background_main = theme === "light" ? "#ffffff" : "#222222";

  document.body.style.color = color_main;
  document.body.style.backgroundColor = background_main;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
