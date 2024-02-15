import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
}) => {
  return (
    <NavbarContainer>
      <Burger isOpen={isOpen} toggleSidebar={toggleSidebar} theme={theme} />
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: theme === "light" ? "#263238" : "#ffffff",
        }}
      >
        <ThemeToggle theme={theme} />
      </IconButton>
      <IconButton
        theme={theme}
        sx={{
          // marginRight: "0.25em",
          color: theme === "light" ? "#263238" : "#ffffff",
        }}
      >
        <AccountIcon />
      </IconButton>
      <p style={{ marginRight: "0.5em" }}>Login</p>
      {/* <IconButton
        sx={{
          marginRight: "0.5em",
          color: theme === "light" ? "#263238" : "#ffffff",
        }}
      >
        <AccountCircleIcon fontSize="medium" />
      </IconButton> */}
      <Sidebar
        links={links}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        theme={theme}
      />
    </NavbarContainer>
  );
};
