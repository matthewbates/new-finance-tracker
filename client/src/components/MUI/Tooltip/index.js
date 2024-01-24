import { Tooltip as MuiTooltip } from "@mui/material";

export const Tooltip = ({ children, placement, title }) => {
  return (
    <MuiTooltip placement={placement} title={title}>
      {children}
    </MuiTooltip>
  );
};
