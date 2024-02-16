import { Button as MuiButton } from "@mui/material";

export const Button = ({
  children,
  color,
  type,
  sx,
  size,
  variant,
  onClick,
}) => {
  return (
    <MuiButton
      color={color}
      type={type}
      sx={sx}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};
