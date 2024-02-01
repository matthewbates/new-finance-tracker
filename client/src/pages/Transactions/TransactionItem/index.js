import { useState, useEffect } from "react";

import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import { Popover } from "../../../components/MUI/Popover";

export const TransactionItem = ({
  item,
  theme,
  transactions,
  setTransactions,
}) => {
  const [showDate, setShowDate] = useState(false);
  const { id, name, category, date, amount } = item;

  useEffect(() => {
    const adjustDate = () => {
      setShowDate(window.innerWidth >= 768);
    };

    window.addEventListener("resize", adjustDate);
    return () => {
      window.removeEventListener("resize", adjustDate);
    };
  }, []);

  return (
    <>
      {!showDate && (
        <div
          style={{
            fontSize: "14px",
            textDecoration: "underline",
            padding: "0.75em",
            fontWeight: "bold",
          }}
        >
          {new Date(date).toLocaleDateString()}
        </div>
      )}
      <TransactionContainer key={id} theme={theme}>
        <TransactionName>{name}</TransactionName>
        <Popover
          id={id}
          theme={theme}
          category={category}
          transactions={transactions}
          setTransactions={setTransactions}
        />
        {showDate && (
          <TransactionDate>
            {new Date(date).toLocaleDateString()}
          </TransactionDate>
        )}
        <TransactionAmount>${amount}</TransactionAmount>
      </TransactionContainer>
    </>
  );
};
