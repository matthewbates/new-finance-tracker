import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { Tooltip } from "../MUI/Tooltip";

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Tooltip
      placement="left"
      title={theme === "light" ? "Light Mode" : "Dark Mode"}
      sx={{ padding: "0.5em" }}
    >
      <IconButton
        onClick={toggleTheme}
        sx={{
          marginRight: "0.5em",
          color: theme === "light" ? "#263238" : "#ffffff",
        }}
      >
        {theme === "light" ? (
          <Brightness5Icon fontSize="medium" />
        ) : (
          <Brightness4Icon fontSize="medium" />
        )}
      </IconButton>
    </Tooltip>
  );
};
