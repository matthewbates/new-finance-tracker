import { useEffect } from "react";

import { Link } from "react-router-dom";

import { NavbarContainer, NavLink, NavLinkWrapper } from "./NavbarElements";

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
  useEffect(() => {
    const handleResize = (e) => {
      if (e.target.innerWidth > 820) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavbarContainer>
      {!currentUser ? (
        <NavLinkWrapper>
          <NavLink theme={theme} to={"/"}>
            Home
          </NavLink>
        </NavLinkWrapper>
      ) : (
        links.map(({ id, name, path }) => (
          <NavLinkWrapper key={id}>
            <NavLink theme={theme} to={path}>
              {name}
            </NavLink>
          </NavLinkWrapper>
        ))
      )}
      <Burger isOpen={isOpen} toggleSidebar={toggleSidebar} theme={theme} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "1em",
        }}
      >
        <IconButton
          sx={{
            color: theme === "light" ? "#263238" : "#ffffff",
          }}
        >
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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
        <p style={{ marginRight: "0.5em" }}>
          {currentUser ? "Logout" : "Login"}
        </p>
      </div>
      <Sidebar
        links={links}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        theme={theme}
      />
    </NavbarContainer>
  );
};
