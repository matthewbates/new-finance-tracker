import { Card as MuiCard } from "@mui/material";

export const Card = ({ children, sx }) => {
  return <MuiCard sx={sx}>{children}</MuiCard>;
};
