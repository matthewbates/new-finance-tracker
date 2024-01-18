import "./App.css";

import { useState, useContext } from "react";

import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Transactions } from "./pages/Transactions";
import { ThemeContext } from "./components/Provider";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
          element={<Transactions isOpen={isOpen} />}
        />
      </Routes>
    </div>
  );
}
