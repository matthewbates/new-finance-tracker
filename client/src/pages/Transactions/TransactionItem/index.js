import {
  TransactionItemContainer,
  TransactionItems,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

export const TransactionItem = ({ id, name, amount, date }) => {
  return (
    <TransactionItemContainer>
      <TransactionItems>
        <TransactionName>{name}</TransactionName>
        <TransactionAmount>${amount}</TransactionAmount>
        <TransactionDate>{new Date(date).toLocaleDateString()}</TransactionDate>
      </TransactionItems>
    </TransactionItemContainer>
  );
};
