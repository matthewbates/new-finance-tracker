import { Tooltip as MuiTooltip } from "@mui/material";

export const Tooltip = ({ children, placement, sx, title }) => {
  return (
    <MuiTooltip sx={sx} placement={placement} title={title}>
      {children}
    </MuiTooltip>
  );
};
