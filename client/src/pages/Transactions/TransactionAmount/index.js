import { InputProps, InputAdornment } from "@mui/material";

import { TextField } from "../../../components/MUI/TextField";

export const TransactionAmount = ({ formData, handleInputChange }) => {
  return (
    <TextField
      onChange={handleInputChange}
      label="Amount"
      value={formData.amount}
      name="amount"
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
    />
  );
};
