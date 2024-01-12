import { CardContent as MuiCardContent } from "@mui/material";

export const CardContent = ({ children, sx }) => {
  return <MuiCardContent sx={sx}>{children}</MuiCardContent>;
};
