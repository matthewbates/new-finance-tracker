import { Button as MuiButton } from "@mui/material";

export const Button = ({ children, sx, size, variant, onClick }) => {
  return (
    <MuiButton sx={sx} size={size} variant={variant} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
