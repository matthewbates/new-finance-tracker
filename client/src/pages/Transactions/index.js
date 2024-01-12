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
      } catch (err) {
        console.log(err);
      }
    };
    return getTransactions;
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
          {transactions.map(({ id, name, amount, date }) => (
            <TransactionItem key={id} name={name} amount={amount} date={date} />
          ))}
          <div
          // style={{
          //   position: "fixed",
          //   top: "50%",
          //   left: "50%",
          //   transform: "translate(-50%, -50%)",
          // }}
          >
            {/* {`Found ${transactions.length} transactions totaling in $`}
            {transactions.reduce((acc, current) => {
              return acc + current.amount;
            }, 0)} */}
            <Popover />
          </div>
        </>
      )}
    </>
  );
};
