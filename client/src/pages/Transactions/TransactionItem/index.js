import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import { Popover } from "../../../components/MUI/Popover";

export const TransactionItem = ({ name, amount, category, date }) => {
  return (
    <TransactionContainer>
      <TransactionName>{name}</TransactionName>
      <Popover category={category} />
      <TransactionDate>{new Date(date).toLocaleDateString()}</TransactionDate>
      <TransactionAmount>${amount}</TransactionAmount>
    </TransactionContainer>
  );
};
