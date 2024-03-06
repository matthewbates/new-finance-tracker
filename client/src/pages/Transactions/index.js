import { useState, useEffect } from "react";

import axios from "axios";

import { Popover } from "./Popover";
import { TransactionItem } from "./TransactionItem";
import { ArrowItems } from "./ArrowItems";

import { Loader } from "../../components/Loader";

import { NoTransactionsText } from "../../utils/transactions/styles";
import {
  listTransactionsByMonth,
  transactionsForSelectedMonth,
  someTransactionsForSelectedMonth,
} from "../../utils/transactions/helpers";

export const Transactions = ({ currentUser, theme }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/transactions/${currentUser[0]._id}`
        );
        setTransactions(response.data.transactions);
      } catch (error) {
        console.log(error);
      }
    };
    getTransactions();
  }, [currentUser]);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 1500);
  // }, []);

  return (
    <>
      {/* <ArrowItems
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      /> */}
      {/* {isLoading ? (
        <Loader theme={theme} />
      ) : ( */}
      <>
        {transactions?.map(({ id, ...props }) => (
          <TransactionItem key={id} props={props} theme={theme} />
        ))}
      </>
      {/* )} */}
    </>
  );
};
