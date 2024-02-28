import { Menu as MuiMenu, MenuItem as MuiMenuItem } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import SettingsIcon from "@mui/icons-material/Settings";

export const Menu = ({ anchorEl, open, onClose, theme, toggleTheme }) => {
  const handleThemeChange = (selectedTheme) => {
    if (theme !== selectedTheme) {
      toggleTheme(selectedTheme);
    }
    onClose();
  };

  return (
    <MuiMenu anchorEl={anchorEl} open={open} onClose={onClose}>
      <MuiMenuItem
        sx={{ gap: "0.5em" }}
        onClick={() => handleThemeChange("light")}
      >
        <Brightness5Icon /> Light
      </MuiMenuItem>
      <MuiMenuItem
        sx={{ gap: "0.5em" }}
        onClick={() => handleThemeChange("dark")}
      >
        <Brightness4Icon /> Dark
      </MuiMenuItem>
      <MuiMenuItem
        sx={{ gap: "0.5em" }}
        onClick={() => handleThemeChange("system")}
      >
        <SettingsIcon /> System
      </MuiMenuItem>
    </MuiMenu>
  );
};
