import { useEffect } from "react";

import {
  TransactionContainer,
  TransactionItems,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import { Popover } from "../../../components/MUI/Popover";
import {
  listTransactionsByMonth,
  transactionsForSelectedMonth,
} from "../../../utils/transactions/helpers";

export const TransactionItem = ({
  transactions,
  theme,
  currentMonth,
  currentYear,
}) => {
  // useEffect(() => {
  //   const adjustDate = () => {
  //     setShowDate(window.innerWidth >= 768);
  //   };

  //   window.addEventListener("resize", adjustDate);
  //   return () => {
  //     window.removeEventListener("resize", adjustDate);
  //   };
  // }, []);
  // const transactionsByMonth = listTransactionsByMonth(
  //   transactionsForSelectedMonth,
  //   currentMonth,
  //   currentYear
  // );

  return (
    <>
      {Object.keys(listTransactionsByMonth(transactions)).map((date, index) => (
        <TransactionContainer key={index}>
          <h4>{date}</h4>
          {listTransactionsByMonth(transactions)[date].map(
            ({ id, amount, name, category }) => (
              <TransactionItems key={id} theme={theme}>
                <TransactionName>{name}</TransactionName>
                <Popover theme={theme} category={category} />
                <TransactionAmount>${amount}</TransactionAmount>
              </TransactionItems>
            )
          )}
        </TransactionContainer>
      ))}
    </>
  );
};
