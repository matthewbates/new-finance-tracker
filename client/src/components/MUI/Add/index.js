import AddIcon from "@mui/icons-material/Add";

import { IconButton } from "../IconButton";

export const Add = ({ theme, toggle }) => {
  return (
    <>
      <IconButton
        onClick={toggle}
        sx={{
          zIndex: 5,
          position: "fixed",
          bottom: 10,
          right: 10,
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
