import "./App.css";

import { useState, useContext } from "react";

import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Transactions } from "./pages/Transactions";
import { Profile } from "./pages/Profile";

import { Accessibility } from "./components/MUI/Accessibility";
import { ThemeContext } from "./components/Provider";
import { Navbar } from "./components/Navbar";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [accessibility, setAccessibility] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccessibility = () => {
    setAccessibility(!accessibility);
  };

  return (
    <div className="App">
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleSidebar={toggleSidebar}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} />} />
        <Route
          path="/transactions"
          element={<Transactions isOpen={isOpen} theme={theme} />}
        />
        <Route path="/profile" element={<Profile theme={theme} />} />
      </Routes>
      <Accessibility
        theme={theme}
        accessibility={accessibility}
        toggleAccessibility={toggleAccessibility}
      />
    </div>
  );
}
