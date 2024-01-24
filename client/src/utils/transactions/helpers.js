export const listTransactionsByDate = (transactions) => {
  if (!transactions || transactions.length === 0) return {};

  const sortedTransactions = transactions.sort((a, b) => b.amount - a.amount);
  return sortedTransactions;
};

const getPreviousMonth = (currentMonth) => {
  return currentMonth === 0 ? 11 : currentMonth - 1;
};

const getNextMonth = (currentMonth) => {
  return currentMonth === 11 ? 0 : currentMonth + 1;
};

const getPreviousyear = (currentYear, setCurrentYear) => {
  setCurrentYear(currentYear - 1);
};

const getNextYear = (currentYear, setCurrentYear) => {
  setCurrentYear(currentYear + 1);
};

export const handlePreviousMonth = (
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear
) => {
  const previousMonth = getPreviousMonth(currentMonth);

  if (previousMonth === 11) {
    getPreviousyear(currentYear, setCurrentYear);
  }
  setCurrentMonth(previousMonth);
};

export const handleNextMonth = (
  currentMonth,
  setCurrentMonth,
  currentYear,
  setCurrentYear
) => {
  const nextMonth = getNextMonth(currentMonth);

  if (nextMonth === 0) {
    getNextYear(currentYear, setCurrentYear);
  }
  setCurrentMonth(nextMonth);
};

export const filterTransactionsByDate = (
  transactions,
  currentMonth,
  currentYear
) => {
  return transactions.filter(
    (transaction) =>
      new Date(transaction.date).getMonth() === currentMonth &&
      new Date(transaction.date).getFullYear() === currentYear
  );
};
