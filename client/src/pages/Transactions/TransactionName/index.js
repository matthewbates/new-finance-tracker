import { TextField } from "../../../components/MUI/TextField";

export const TransactionName = ({ formData, handleInputChange }) => {
  return (
    <TextField
      label="Name"
      value={formData.name}
      name="name"
      type="text"
      onChange={handleInputChange}
    />
  );
};
