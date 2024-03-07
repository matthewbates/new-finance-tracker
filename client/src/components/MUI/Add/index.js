import AddIcon from "@mui/icons-material/Add";

import { Tooltip } from "@mui/material";
import { IconButton } from "../IconButton";

export const Add = ({ theme, toggle }) => {
  return (
    <>
      <Tooltip title="Accessibility Menu">
        <IconButton
          onClick={toggle}
          sx={{
            zIndex: 5,
            position: "absolute",
            bottom: 0,
            right: 0,
            margin: "0.5em",
            padding: "0.1em",
            cursor: "pointer",
            color: theme === "light" ? "#000000" : "#ffffff",
          }}
        >
          <AddIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </>
  );
};
