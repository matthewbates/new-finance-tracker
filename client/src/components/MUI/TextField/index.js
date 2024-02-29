import { TextField as MuiTextField } from "@mui/material";

export const TextField = ({
  id,
  error,
  InputProps,
  helperText,
  sx,
  label,
  value,
  name,
  type,
  onChange,
  children,
  InputLabelProps,
}) => {
  return (
    <MuiTextField
      error={error}
      InputProps={InputProps}
      helperText={helperText}
      sx={sx}
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
