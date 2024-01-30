import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import { Popover } from "../../../components/MUI/Popover";

export const TransactionItem = ({
  theme,
  item,
  transactions,
  setTransactions,
}) => {
  return (
    <>
      <TransactionContainer theme={theme}>
        <TransactionName>{item.name}</TransactionName>
        <Popover
          item={item}
          transactions={transactions}
          setTransactions={setTransactions}
        />
        <TransactionDate>
          {new Date(item.date).toLocaleDateString()}
        </TransactionDate>
        <TransactionAmount>${item.amount}</TransactionAmount>
      </TransactionContainer>
      {/* {transactions.map(({ id, name, category, date, amount }) => (
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
      ))} */}
    </>
  );
};
