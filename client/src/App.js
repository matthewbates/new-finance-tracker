import "./App.css";

import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Transactions } from "./pages/Transactions";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggleSidebar} />
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
