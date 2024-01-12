import { NavbarContainer } from "./NavbarElements";

import { Burger } from "../Burger";
import { Sidebar } from "../Sidebar";

export const Navbar = ({ isOpen, setIsOpen, toggle }) => {
  return (
    <NavbarContainer>
      <Burger isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavbarContainer>
  );
};
