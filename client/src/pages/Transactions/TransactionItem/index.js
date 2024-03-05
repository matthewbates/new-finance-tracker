import { useState, useEffect } from "react";

import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import { Popover } from "../../../components/MUI/Popover";

export const TransactionItem = ({ props, theme }) => {
  const [showDate, setShowDate] = useState(false);

  const { name, category, date, amount } = props;

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
        ></div>
      )}
      <TransactionContainer theme={theme}>
        <TransactionName>{name}</TransactionName>
        <Popover theme={theme} category={category} />
        <TransactionDate>{date}</TransactionDate>
        <TransactionAmount>${amount}</TransactionAmount>
      </TransactionContainer>
    </>
  );
};
