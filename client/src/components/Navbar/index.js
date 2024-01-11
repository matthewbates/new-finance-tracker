import { useState } from "react";

import { NavbarContainer } from "./NavbarElements";

import { Burger } from "../Burger";
import { Sidebar } from "../Sidebar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Burger isOpen={isOpen} toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} />
    </NavbarContainer>
  );
};
