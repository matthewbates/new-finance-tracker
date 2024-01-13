import { useState, useEffect } from "react";

import axios from "axios";

import { Loader } from "../../components/Loader";
import { Popover } from "./Popover";
import { TransactionItem } from "./TransactionItem";

export const Transactions = ({ isOpen }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
            transactions.map(({ id, name, amount, category, date }) => (
              <TransactionItem
                key={id}
                name={name}
                amount={amount}
                category={category}
                date={date}
              />
            ))
          )}
          <Popover
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </>
      )}
    </>
  );
};
