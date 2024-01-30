import { useState, useEffect } from "react";

import axios from "axios";

import { Popover } from "./Popover";
import { TransactionItem } from "./TransactionItem";
import { ArrowItems } from "./ArrowItems";

import { Loader } from "../../components/Loader";
import { MONTHS } from "../../utils/transactions/data";
import { NoTransactionsText } from "../../utils/transactions/styles";
import {
  handleNextMonth,
  handlePreviousMonth,
  listTransactionsByMonth,
  transactionsForSelectedMonth,
} from "../../utils/transactions/helpers";

import { flexbox } from "@mui/system";

export const Transactions = ({ theme }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

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
      <ArrowItems
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      {Object.keys(
        listTransactionsByMonth(
          transactions.filter((transaction) => {
            return (
              new Date(transaction.date).getMonth() === currentMonth &&
              new Date(transaction.date).getFullYear() === currentYear
            );
          })
        )
      ).map((date) =>
        listTransactionsByMonth(transactions)[date].map((item, index) => (
          <TransactionItem
            key={index}
            item={item}
            theme={theme}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        ))
      )}
      {Object.keys(
        listTransactionsByMonth(
          transactions.filter((transaction) => {
            return (
              new Date(transaction.date).getMonth() === currentMonth &&
              new Date(transaction.date).getFullYear() === currentYear
            );
          })
        )
      ).length === 0 && (
        <NoTransactionsText>
          No transactions for {MONTHS[currentMonth]}.
        </NoTransactionsText>
      )}
    </>
  );
};
