import { Select as MuiSelect } from "@mui/material";

export const Select = ({ children }) => {
  return (
    <>
      <MuiSelect>{children}</MuiSelect>
    </>
  );
};
