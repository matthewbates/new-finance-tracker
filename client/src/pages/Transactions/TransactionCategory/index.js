import { MenuItem } from "@mui/material";

import {
  Select as MuiSelect,
  InputLabel as MuiInputLabel,
} from "@mui/material";

import { categoryOptions } from "../../../utils/data";

export const TransactionCategory = ({ formData, handleInputChange }) => {
  return (
    <>
      <MuiInputLabel>Category</MuiInputLabel>
      <MuiSelect
        label="Category"
        value={formData.category}
        name="category"
        onChange={(e) => handleInputChange(e)}
        type="text"
      >
        {categoryOptions.map(({ id, value }) => (
          <MenuItem key={id} value={value}>
            {value}
          </MenuItem>
        ))}
      </MuiSelect>
    </>
  );
};
