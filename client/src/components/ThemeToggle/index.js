import { useState } from "react";

import { MenuItem, Popover, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import SettingsIcon from "@mui/icons-material/Settings";

import { Tooltip } from "../MUI/Tooltip";

export const ThemeToggle = ({ theme }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={theme === "light" ? "Light Mode" : "Dark Mode"}>
        {theme === "light" ? (
          <Brightness5Icon fontSize="medium" onClick={handleClick} />
        ) : (
          <Brightness4Icon fontSize="medium" />
        )}
      </Tooltip>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vetical: "bottom", horizontal: "left" }}
        transfromOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem sx={{ gap: "0.5em" }}>
          <Brightness5Icon /> Light
        </MenuItem>
        <MenuItem sx={{ gap: "0.5em" }}>
          <Brightness4Icon />
          Dark
        </MenuItem>
        <MenuItem sx={{ gap: "0.5em" }}>
          <SettingsIcon /> System
        </MenuItem>
      </Popover>
    </>
  );
};
