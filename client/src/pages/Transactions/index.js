import { useState, useEffect } from "react";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";

import { Popover } from "./Popover";
import { TransactionItem } from "./TransactionItem";

import { Loader } from "../../components/Loader";
import { MONTHS } from "../../utils/transactions/data";
import {
  filterTransactionsByDate,
  handleNextMonth,
  handlePreviousMonth,
} from "../../utils/transactions/helpers";

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
    // <>
    //   {isLoading ? (
    //     <Loader theme={theme} />
    //   ) : (
    //     <>
    //       {transactions.length === 0 ? (
    //         <div
    //           style={{
    //             position: "absolute",
    //             display: "flex",
    //             textAlign: "center",
    //             top: "50%",
    //             left: "50%",
    //             transform: "translate(-50%, -50%)",
    //             fontWeight: "bold",
    //             fontSize: "1.5em",
    //           }}
    //         >
    //           No transactions to display.
    //         </div>
    //       ) : (
    //         <TransactionItem
    //           transactions={transactions}
    //           setTransactions={setTransactions}
    //           currentMonth={currentMonth}
    //           setCurrentMonth={setCurrentMonth}
    //           currentYear={currentYear}
    //           setCurrentYear={setCurrentYear}
    //           theme={theme}
    //         />
    //       )}
    //       <Popover
    //         transactions={transactions}
    //         setTransactions={setTransactions}
    //       />
    //     </>
    //   )}
    // </>
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filterTransactionsByDate(transactions, currentMonth, currentYear) ? (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1em",
                }}
              >
                <KeyboardArrowLeftIcon
                  sx={{ cursor: "pointer" }}
                  fontSize="large"
                  onClick={() =>
                    handlePreviousMonth(
                      currentMonth,
                      setCurrentMonth,
                      currentYear,
                      setCurrentYear
                    )
                  }
                />
                {MONTHS[currentMonth]} {currentYear}
                <KeyboardArrowRightIcon
                  sx={{ cursor: "pointer" }}
                  fontSize="large"
                  onClick={() =>
                    handleNextMonth(
                      currentMonth,
                      setCurrentMonth,
                      currentYear,
                      setCurrentYear
                    )
                  }
                />
              </div>
              <TransactionItem
                transactions={transactions}
                setTransactions={setTransactions}
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
                currentYear={currentYear}
                setCurrentYear={setCurrentYear}
                theme={theme}
              />
              <Popover />
            </>
          ) : transactions.length === 0 ? (
            <div></div>
          ) : null}
        </>
      )}
    </>
  );
};
