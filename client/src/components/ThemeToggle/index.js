import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
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
          border: `2px solid ${theme === "light" ? "#263238" : "#ffffff"}`,
        }}
      >
        {theme === "light" ? (
          <LightModeIcon sx={{}} fontSize="small" />
        ) : (
          <DarkModeIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};
