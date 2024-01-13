import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
  TransactionCategory,
} from "./TransactionItemElements";

export const TransactionItem = ({ name, amount, category, date }) => {
  return (
    <TransactionContainer>
      <TransactionName>{name}</TransactionName>
      <TransactionCategory>{category}</TransactionCategory>
      <TransactionDate>{new Date(date).toLocaleDateString()}</TransactionDate>
      <TransactionAmount>${amount}</TransactionAmount>
    </TransactionContainer>
  );
};
