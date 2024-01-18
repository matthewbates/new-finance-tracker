import { useState } from "react";

import { MenuItem, Popover as MuiPopover } from "@mui/material";
import axios from "axios";

import { Input } from "./PopoverElements";

import { Button } from "../Button";
import { categoryOptions } from "../../../utils/data";

export const Popover = ({ id, category, setTransactions }) => {
  const [categoryOption, setCategoryOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");

  const handleClick = (e) => {
    setCategoryOption(e.currentTarget);
  };

  const handleClose = () => {
    setCategoryOption(null);
  };

  const open = Boolean(categoryOption);

  const filteredCategoryOptions = categoryOptions.filter(({ value }) =>
    value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const patchTransaction = async (updatedCat) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/transactions/${id}`,
        {
          category: updatedCat,
        }
      );
      if (response) {
        const _id = response.data.updatedTransaction._id;

        if (id === _id) {
          setUpdatedCategory((prevCategory) => ({
            ...prevCategory,
            category: updatedCategory,
          }));

          setTransactions((transactions) =>
            transactions.map((transaction) =>
              transaction.id === id
                ? { ...transaction, category: updatedCat }
                : transaction
            )
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button size="small" onClick={handleClick} variant="contained">
        {category}
      </Button>
      <MuiPopover open={open} onClose={handleClose} anchorEl={categoryOption}>
        <Input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={searchTerm}
        />
        {filteredCategoryOptions.length === 0 ? (
          <MenuItem disabled>No categories found</MenuItem>
        ) : (
          filteredCategoryOptions.map(({ id, value }) => (
            <MenuItem key={id} onClick={() => patchTransaction(value)}>
              {value}
            </MenuItem>
          ))
        )}
      </MuiPopover>
    </>
  );
};
