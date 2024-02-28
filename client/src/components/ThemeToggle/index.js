import { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { Tooltip } from "../MUI/Tooltip";

import { Menu } from "../MUI/Menu";

export const ThemeToggle = ({ theme, toggleTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={theme === "light" ? "Light Mode" : "Dark Mode"}>
        {theme === "light" ? (
          <Brightness5Icon fontSize="medium" onClick={handleClick} />
        ) : (
          <Brightness4Icon fontSize="medium" onClick={handleClick} />
        )}
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
};
