import { IconButton as MuiIconButton } from "@mui/material";

export const IconButton = ({ sx, onClick, children }) => {
  return (
    <MuiIconButton sx={sx} onClick={onClick}>
      {children}
    </MuiIconButton>
  );
};
