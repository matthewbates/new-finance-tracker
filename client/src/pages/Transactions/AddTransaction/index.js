import { useState } from "react";
import axios from "axios";

import {
  Card,
  CardContent,
  Button,
  FormControl,
  InputAdornment,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import { categoryOptions } from "../../../utils/data";

export const AddTransaction = ({
  setPopover,
  transactions,
  setTransactions,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  const postTransaction = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/transactions",
        formData
      );
      if (response) {
        console.log(response.data.transaction);
        setFormData({
          name: "",
          amount: "",
          category: "",
          date: "",
        });
        const updatedTransactions = [
          ...transactions,
          response.data.transaction,
        ];
        setTransactions(updatedTransactions);
        setPopover(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postTransaction();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Card
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            margin: "2em",
          }}
        >
          <TextField
            label="Name"
            value={formData.name}
            name="name"
            onChange={handleInputChange}
          />
          <FormControl>
            <InputLabel>Category</InputLabel>
            <Select
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
            </Select>
          </FormControl>
          <TextField
            type="date"
            value={formData.date}
            name="date"
            onChange={handleInputChange}
          />
          {/* <TransactionDate
            formData={formData}
            handleInputChange={handleInputChange}
          /> */}
          <TextField
            onChange={handleInputChange}
            label="Amount"
            value={formData.amount}
            name="amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <Button variant="contained" type="submit">
            Add
          </Button>
        </CardContent>
      </form>
      <CancelIcon
        fontSize="medium"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: "0.25em",
          cursor: "pointer",
        }}
        onClick={() => setPopover(false)}
      />
    </Card>
  );
};
