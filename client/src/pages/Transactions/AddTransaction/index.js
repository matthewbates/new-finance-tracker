import { useState } from "react";

import axios from "axios";
import dayjs from "dayjs";

import {
  Card,
  CardContent,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import { categoryOptions } from "../../../utils/transactions/data";
import { Popover } from "../../../components/MUI/Popover";
import { Add } from "../../../components/MUI/Add";

export const AddTransaction = ({ theme, transactions, setTransactions }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });
  const [popover, setPopover] = useState(false);

  const { name, amount, category, date } = formData;

  const togglePopover = () => {
    setPopover(!popover);
  };

  const postTransaction = async (e) => {
    e.preventDefault();

    try {
      const formattedDate = dayjs(formData.date).format("YYYY-MM-DDTHH:mm:ssZ");
      const response = await axios.post("http://localhost:8000/transactions", {
        ...formData,
        date: formattedDate,
      });
      if (response) {
        setFormData({
          name: "",
          category: "",
          amount: "",
          date: "",
        });
        const updatedTransactions = [
          ...transactions,
          response.data.createdTransaction,
        ];
        setTransactions(updatedTransactions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const postTransaction = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const formattedDate = dayjs(formData.date).format("YYYY-MM-DDTHH:mm:ssZ");
  //     const response = await axios.post("http://localhost:8000/transactions", {
  //       ...formData,
  //       date: formattedDate,
  //     });
  //     if (response) {
  //       setFormData({
  //         name: "",
  //         amount: "",
  //         category: "",
  //         date: "",
  //       });
  //       const updatedTransactions = [
  //         ...transactions,
  //         response.data.transaction,
  //       ];
  //       setTransactions(updatedTransactions);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Add toggle={togglePopover} theme={theme} />
      {popover && (
        <Card
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <form onSubmit={postTransaction}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",

                padding: "2em",
              }}
            >
              <TextField
                label="Name"
                value={name}
                name="name"
                onChange={handleInputChange}
              />
              <FormControl>
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  value={category}
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
                value={date}
                name="date"
                onChange={handleInputChange}
              />
              <TextField
                onChange={handleInputChange}
                label="Amount"
                value={amount}
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
          />
        </Card>
      )}
    </>
  );
};
