import { InputLabel as MuiInputLabel } from "@mui/material";
import { Select as MuiSelect } from "@mui/material";

export const Select = ({ label, value, name, onChange, type, children }) => {
  return (
    <>
      <MuiInputLabel>Category</MuiInputLabel>
      <MuiSelect
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        type={type}
      >
        {children}
      </MuiSelect>
    </>
  );
};
