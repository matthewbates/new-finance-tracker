import { useState } from "react";
import { MenuItem, Popover } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import SettingsIcon from "@mui/icons-material/Settings";
import { Tooltip } from "../MUI/Tooltip";

export const ThemeToggle = ({ theme, toggleTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (selectedTheme) => {
    if (theme !== selectedTheme) {
      toggleTheme(selectedTheme);
    }
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title={theme === "light" ? "Light Mode" : "Dark Mode"}>
        {theme === "light" ? (
          <Brightness5Icon fontSize="medium" onClick={handleClick} />
        ) : (
          <Brightness4Icon fontSize="medium" onClick={handleClick} />
        )}
      </Tooltip>
      <Popover open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem
          sx={{ gap: "0.5em" }}
          onClick={() => handleThemeChange("light")}
        >
          <Brightness5Icon /> Light
        </MenuItem>
        <MenuItem
          sx={{ gap: "0.5em" }}
          onClick={() => handleThemeChange("dark")}
        >
          <Brightness4Icon /> Dark
        </MenuItem>
        <MenuItem
          sx={{ gap: "0.5em" }}
          onClick={() => handleThemeChange("system")}
        >
          <SettingsIcon /> System
        </MenuItem>
      </Popover>
    </>
  );
};
