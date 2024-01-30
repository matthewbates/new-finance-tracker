import { NavbarContainer } from "./NavbarElements";

import { links } from "./links";

import { Burger } from "../Burger";
import { Sidebar } from "../Sidebar";
import { ThemeToggle } from "../ThemeToggle";

export const Navbar = ({
  isOpen,
  setIsOpen,
  toggleSidebar,
  theme,
  toggleTheme,
}) => {
  return (
    <NavbarContainer>
      <Burger isOpen={isOpen} toggleSidebar={toggleSidebar} theme={theme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Sidebar
        links={links}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        theme={theme}
      />
    </NavbarContainer>
  );
};
