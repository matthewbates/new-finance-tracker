import { useState } from "react";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import {
  handlePreviousMonth,
  handleNextMonth,
} from "../../../utils/transactions/helpers";
import { Popover } from "../../../components/MUI/Popover";

export const TransactionItem = ({
  transactions,
  setTransactions,
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
}) => {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em",
          border: "1px solid white",
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
        <h2>
          {MONTHS[currentMonth]} {currentYear}
        </h2>
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
      {transactions.map(({ id, name, category, date, amount }) => (
        <TransactionContainer key={id}>
          <TransactionName>{name}</TransactionName>
          <Popover
            id={id}
            category={category}
            transactions={transactions}
            setTransactions={setTransactions}
          />
          <TransactionDate>
            {new Date(date).toLocaleDateString()}
          </TransactionDate>
          <TransactionAmount>${amount}</TransactionAmount>
        </TransactionContainer>
      ))}
    </>
  );
};
