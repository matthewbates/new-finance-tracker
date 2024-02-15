import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { Tooltip } from "../MUI/Tooltip";

export const ThemeToggle = ({ theme }) => {
  return (
    <Tooltip title={theme === "light" ? "Light Mode" : "Dark Mode"}>
      {theme === "light" ? (
        <Brightness5Icon fontSize="medium" />
      ) : (
        <Brightness4Icon fontSize="medium" />
      )}
    </Tooltip>
  );
};
