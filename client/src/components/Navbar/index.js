import { Link } from "react-router-dom";

import { NavbarContainer } from "./NavbarElements";

import { links } from "./links";

import { Burger } from "../Burger";
import { IconButton } from "../MUI/IconButton";
import { Sidebar } from "../Sidebar";
import { ThemeToggle } from "../ThemeToggle";
import { AccountIcon } from "../AccountIcon";

export const Navbar = ({
  isOpen,
  setIsOpen,
  toggleSidebar,
  theme,
  toggleTheme,
  currentUser,
}) => {
  return (
    <NavbarContainer>
      <Burger isOpen={isOpen} toggleSidebar={toggleSidebar} theme={theme} />
      <IconButton
        // onClick={toggleTheme}
        sx={{
          color: theme === "light" ? "#263238" : "#ffffff",
        }}
      >
        <ThemeToggle theme={theme} />
      </IconButton>
      <Link to={currentUser ? "/profile" : "/login"}>
        <IconButton
          theme={theme}
          sx={{
            color: theme === "light" ? "#263238" : "#ffffff",
          }}
        >
          <AccountIcon />
        </IconButton>
      </Link>
      <p style={{ marginRight: "0.5em" }}>{currentUser ? "Logout" : "Login"}</p>
      <Sidebar
        links={links}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        theme={theme}
      />
    </NavbarContainer>
  );
};
