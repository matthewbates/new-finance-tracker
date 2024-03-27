import { useState } from "react";

import { Menu, MenuItem } from "@mui/material";
import axios from "axios";

import { Input } from "./UpdateTransactionElements";

import { Button } from "../../../components/MUI/Button";
import { categoryOptions } from "../../../utils/transactions/data";
import {
  filteredCategoryOptions,
  handleClose,
  handleClick,
  handleSearch,
} from "../../../utils/transactions/helpers";

export const UpdateTransaction = ({
  category,
  id,
  transactions,
  setTransactions,
}) => {
  const [categoryOption, setCategoryOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const open = Boolean(categoryOption);

  const patchTransaction = async (newCategory) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/transactions/${id}`,
        {
          category: newCategory,
        }
      );
      if (response) {
        const updatedTransaction = transactions.map((transaction) =>
          transaction.id === id
            ? { ...transaction, category: newCategory }
            : transaction
        );
        setTransactions(updatedTransaction);
        setSearchTerm("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button
        size="small"
        onClick={(e) => handleClick(e, setCategoryOption)}
        variant="contained"
      >
        {category}
      </Button>
      <Menu
        open={open}
        onClose={() => {
          handleClose(setCategoryOption);
          setTimeout(() => setSearchTerm(""), 250);
        }}
        anchorEl={categoryOption}
      >
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e, setSearchTerm)}
          value={searchTerm}
        />
        {filteredCategoryOptions(categoryOptions, searchTerm).length === 0 ? (
          <MenuItem disabled>No categories found</MenuItem>
        ) : (
          filteredCategoryOptions(categoryOptions, searchTerm).map(
            ({ id, value }) => (
              <MenuItem key={id} onClick={() => patchTransaction(value)}>
                {value}
              </MenuItem>
            )
          )
        )}
      </Menu>
    </>
  );
};
