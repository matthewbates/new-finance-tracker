import { useState } from "react";

import { MenuItem, Popover as MuiPopover } from "@mui/material";

import { Input } from "./PopoverElements";

import { Button } from "../Button";
import { categoryOptions } from "../../../utils/data";

export const Popover = ({ category }) => {
  const [categoryOption, setCategoryOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
            <MenuItem key={id}>{value}</MenuItem>
          ))
        )}
      </MuiPopover>
    </>
  );
};
