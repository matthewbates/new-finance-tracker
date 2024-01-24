import {
  TransactionContainer,
  TransactionName,
  TransactionAmount,
  TransactionDate,
} from "./TransactionItemElements";

import {
  filterTransactionsByDate,
  handlePreviousMonth,
  handleNextMonth,
} from "../../../utils/transactions/helpers";
import { MONTHS } from "../../../utils/transactions/data";
import { Popover } from "../../../components/MUI/Popover";

export const TransactionItem = ({
  transactions,
  setTransactions,
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear,
  theme,
}) => {
  console.log(
    filterTransactionsByDate(transactions, currentMonth, currentYear)
  );
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em",
        }}
      >
        <KeyboardArrowLeftIcon
          sx={{ cursor: "pointer" }}
          fontSize="large"
          onClick={() =>
            handlePreviousMonth(
              currentMonth,
              setCurrentMonth,
              currentYear,
              setCurrentYear
            )
          }
        />
        <h2>
          {MONTHS[currentMonth]} {currentYear}
        </h2>
        <KeyboardArrowRightIcon
          sx={{ cursor: "pointer" }}
          fontSize="large"
          onClick={() =>
            handleNextMonth(
              currentMonth,
              setCurrentMonth,
              currentYear,
              setCurrentYear
            )
          }
        />
      </div> */}
      {filterTransactionsByDate(transactions, currentMonth, currentYear).map(
        ({ id, name, category, amount, date }) => (
          <TransactionContainer key={id}>
            <TransactionName>{name}</TransactionName>
            <Popover category={category} />
            <TransactionDate>
              {new Date(date).toLocaleDateString()}
            </TransactionDate>
            <TransactionAmount>${amount}</TransactionAmount>
          </TransactionContainer>
        )
      )}
    </>
  );
};
