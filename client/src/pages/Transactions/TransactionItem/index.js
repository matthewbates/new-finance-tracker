import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import { Popover } from "../../../components/MUI/Popover";

export const TransactionItem = ({ transactions, setTransactions, theme }) => {
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
