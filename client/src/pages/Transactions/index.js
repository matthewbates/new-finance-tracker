import { useState, useEffect } from "react";

import axios from "axios";

import { TransactionItem } from "./TransactionItem";
import { Arrows } from "./Arrows";

import { Loader } from "../../components/Loader";

import { someTransactionsForSelectedMonth } from "../../utils/transactions/helpers";
import { MONTHS } from "../../utils/transactions/data";
import VOID from "../../assets/void.svg";
import { Add } from "../../components/MUI/Add";
import { AddTransaction } from "./AddTransaction";

export const Transactions = ({ currentUser, theme }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setIsLoading(true);
    const getTransactions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/transactions/${currentUser[0]._id}`
        );
        if (response) {
          console.log(response);
          const userTransactions = response.data.transactions;
          setTransactions(userTransactions);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTransactions();
  }, [currentUser]);

  return (
    <>
      <Arrows
        transactions={transactions}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      {isLoading ? (
        <Loader theme={theme} />
      ) : someTransactionsForSelectedMonth(
          transactions,
          currentMonth,
          currentYear
        ) ? (
        <TransactionItem
          transactions={transactions}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <img
            src={VOID}
            alt="void"
            // style={{ height: "auto", maxHeight: "250px", marginBottom: "1rem" }}
            style={{ height: "200px", marginBottom: "1rem" }}
          />
          <p
            style={{ letterSpacing: "0.15rem" }}
            // MONTHS[index] - array indexing: a way to access a specific element in an array based on its position (index)
          >{`No transactions recorded for ${MONTHS[currentMonth]}`}</p>
        </div>
      )}
      <AddTransaction
        theme={theme}
        currentUser={currentUser}
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </>
  );
};
