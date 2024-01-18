import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import { Popover } from "../../../components/MUI/Popover";

export const TransactionItem = ({ transactions, setTransactions }) => {
  return (
    <>
      {transactions.map(({ id, name, category, date, amount }) => (
        <TransactionContainer key={id}>
          <TransactionName>{name}</TransactionName>
          <Popover id={id} category={category} setTransactions={setTransactions}/>
          <TransactionDate>
            {new Date(date).toLocaleDateString()}
          </TransactionDate>
          <TransactionAmount>${amount}</TransactionAmount>
        </TransactionContainer>
      ))}
    </>
  );
};
