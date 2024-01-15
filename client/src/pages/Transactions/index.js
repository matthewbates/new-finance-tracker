import { useState, useEffect } from "react";

import axios from "axios";

import { Popover } from "./Popover";
import { TransactionItem } from "./TransactionItem";

import { Loader } from "../../components/Loader";
import { TextField } from "../../components/MUI/TextField";

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:8000/transactions/");
        if (response) {
          setTransactions(response.data.transactions);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTransactions();
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  const filteredTransactions = (transactionItem) => {
    return transactions.filter((transaction) => {
      return transaction.category
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {transactions.length === 0 ? (
            <div
              style={{
                position: "absolute",
                display: "flex",
                textAlign: "center",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%",
                fontWeight: "bold",
                fontSize: "1.5em",
              }}
            >
              No transactions to display.
            </div>
          ) : (
            filteredTransactions(transactions).map((item) => (
              <TransactionItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                category={item.category}
                date={item.date}
              />
            ))
            // transactions.map(({ id, name, amount, category, date }) => (
            //   <TransactionItem
            //     key={id}
            //     name={name}
            //     amount={amount}
            //     category={category}
            //     date={date}
            //   />
            // ))
          )}
          <Popover
            transactions={transactions}
            setTransactions={setTransactions}
          />
          <TextField
            label="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            name="text"
          />
        </>
      )}
    </>
  );
};
