import { useState } from "react";

import { Menu, MenuItem } from "@mui/material";
import axios from "axios";

import { Input } from "./PopoverElements";

import { Button } from "../Button";
import { categoryOptions } from "../../../utils/transactions/data";
import {
  filteredCategoryOptions,
  handleClick,
  handleClose,
  handleSearch,
} from "../../../utils/transactions/helpers";

export const Popover = ({ id, category, transactions, setTransactions }) => {
  const [categoryOption, setCategoryOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryUpdate, setCategoryUpdate] = useState("");

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
        const _id = response.data.updatedTransaction._id;
        const updatedTransaction = transactions.map((transaction) =>
          transaction.id === id
            ? { ...transaction, category: newCategory }
            : transaction
        );
        if (id === _id) {
          console.log(`Transaction ID: ${id}, Mongoose ID: ${_id}`);
          setCategoryUpdate((prevCat) => ({
            ...prevCat,
            category: categoryUpdate,
          }));
        }
        setTransactions(updatedTransaction);
        setSearchTerm("");
      }
    } catch (error) {
      console.log(error);
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
        onClose={() => handleClose(setCategoryOption)}
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
