import "./App.css";

import { useState, useContext, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Transactions } from "./pages/Transactions";

import { Accessibility } from "./components/MUI/Accessibility";
import { ThemeContext } from "./components/Provider";
import { Navbar } from "./components/Navbar";

export default function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [accessibility, setAccessibility] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccessibility = () => {
    setAccessibility(!accessibility);
  };

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    if (userLoggedIn) {
      const loggedInUser = JSON.parse(userLoggedIn);
      setCurrentUser(loggedInUser);
    }
  }, []);

  return (
    <div className="App">
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleSidebar={toggleSidebar}
        theme={theme}
        toggleTheme={toggleTheme}
        currentUser={currentUser}
      />
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} />} />
        <Route
          path="/login"
          element={<Login theme={theme} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/signup"
          element={<Signup theme={theme} setCurrentUser={setCurrentUser} />}
        />

        <Route
          path="/profile"
          element={<Profile theme={theme} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/transactions"
          element={<Transactions isOpen={isOpen} theme={theme} />}
        />
      </Routes>
      <Accessibility
        theme={theme}
        accessibility={accessibility}
        toggleAccessibility={toggleAccessibility}
      />
    </div>
  );
}
