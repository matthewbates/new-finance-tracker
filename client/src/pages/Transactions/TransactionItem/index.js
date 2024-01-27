import { useState } from "react";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import { Popover } from "../../../components/MUI/Popover";

export const TransactionItem = ({
  transactions,
  setTransactions,
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
  theme,
}) => {
  return (
    <>
      {transactions.map(({ id, name, category, date, amount }) => (
        <TransactionContainer key={id} theme={theme}>
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
