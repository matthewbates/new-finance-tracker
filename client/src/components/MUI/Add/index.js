import AddIcon from "@mui/icons-material/Add";

import { IconButton } from "../IconButton";

export const Add = ({ theme, toggle }) => {
  return (
    <>
      <IconButton
        onClick={toggle}
        sx={{
          zIndex: 5,
          position: "sticky",
          bottom: 0,
          right: 0,
          float: "right",
          cursor: "pointer",
          color: theme === "light" ? "#000000" : "#ffffff",
        }}
      >
        <AddIcon fontSize="large" />
      </IconButton>
    </>
  );
};
