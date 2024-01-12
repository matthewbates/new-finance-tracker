import { Button as MuiButton } from "@mui/material";

export const Button = ({ children, sx, variant, onClick }) => {
  return (
    <MuiButton sx={sx} variant={variant} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
