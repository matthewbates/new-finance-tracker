import { TextField as MuiTextField } from "@mui/material";

export const TextField = ({
  id,
  label,
  value,
  name,
  type,
  onChange,
  children,
  InputProps,
  InputLabelProps,
  position,
}) => {
  return (
    <MuiTextField
      id={id}
      label={label}
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      InputLabelProps={InputLabelProps}
    >
      {children}
    </MuiTextField>
  );
};
