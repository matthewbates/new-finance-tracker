import { useState } from "react";

import { PopoverContainer, PopoverBtn } from "./PopoverElements";

import { Card, CardContent } from "@mui/material";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { categoryOptions } from "../../../utils/data";

export const Popover = () => {
  const [popover, setPopover] = useState(false);
  const [category, setCategory] = useState("");

  const togglePopover = () => {
    setPopover(!popover);
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Button
        sx={{
          position: "fixed",
          bottom: "10px",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        variant="contained"
        onClick={togglePopover}
      >
        ADD
      </Button>
      {popover && (
        <Card
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <TextField placeholder="Name" />
            <FormControl>
              <InputLabel>Category</InputLabel>
              <Select value={category} onChange={handleChange}>
                {categoryOptions.map((item, index) => (
                  <MenuItem value={item.value}>{item.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained">Add</Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};
