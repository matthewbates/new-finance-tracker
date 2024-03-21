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
import { UpdateTransaction } from "../UpdateTransaction";

export const TransactionItem = ({
  transactions,
  setTransactions,
  theme,
  currentMonth,
  currentYear,
}) => {
  const filteredTransactions = transactionsForSelectedMonth(
    transactions,
    currentMonth,
    currentYear
  );
  const transactionsByMonth = listTransactionsByMonth(filteredTransactions);

  return (
    <>
      {Object.keys(transactionsByMonth).map((date) => (
        <TransactionContainer key={date}>
          <h4>{date}</h4>
          {transactionsByMonth[date].map(({ id, amount, name, category }) => (
            <TransactionItems key={id} theme={theme}>
              <TransactionName>{name}</TransactionName>
              {/* <Popover theme={theme} category={category} /> */}
              <UpdateTransaction
                transactions={transactions}
                setTransactions={setTransactions}
                category={category}
                id={id}
              />
              <TransactionAmount>${amount}</TransactionAmount>
            </TransactionItems>
          ))}
        </TransactionContainer>
      ))}
    </>
  );
};
