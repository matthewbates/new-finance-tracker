import { useEffect } from "react";

import {
  TransactionContainer,
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
  // const { name, category, date, amount } = props;

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

  console.log(Object.keys(listTransactionsByMonth(transactions)));

  return (
    <>
      {Object.keys(listTransactionsByMonth(transactions)).map((date, index) => (
        <div key={index}>
          <h4 style={{ padding: "0.5rem" }}>{date}</h4>
          {listTransactionsByMonth(transactions)[date].map(
            ({ id, amount, name, category, date }) => (
              <TransactionContainer key={id} theme={theme}>
                <TransactionName>{name}</TransactionName>
                <Popover theme={theme} category={category} />
                <TransactionAmount>${amount}</TransactionAmount>
              </TransactionContainer>
            )
          )}
        </div>
      ))}
    </>
  );
};
