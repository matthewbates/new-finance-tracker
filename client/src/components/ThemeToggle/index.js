import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { Tooltip } from "../MUI/Tooltip";

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Tooltip
      placement="left"
      title={theme === "light" ? "Light Mode" : "Dark Mode"}
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
