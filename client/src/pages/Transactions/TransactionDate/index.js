import { TextField } from "../../../components/MUI/TextField";

export const TransactionDate = ({ formData, handleInputChange }) => {
  return (
    <TextField
      id="date"
      label="Date"
      value={formData.date}
      onChange={handleInputChange}
      name="date"
      type="date"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
