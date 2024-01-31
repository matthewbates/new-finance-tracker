// takes an array of transactions and groups them by date
export const listTransactionsByMonth = (transactions) => {
  if (!transactions || transactions.length === 0) return {};

  let dateString;
  const transactionsByMonth = {};
  const sortedTransactions = transactions.sort(
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );

  for (let i = 0; i < sortedTransactions.length; i++) {
    const transaction = sortedTransactions[i];
    dateString = new Date(Date.parse(transaction.date));

    // access the value associated with the key dateString
    if (!transactionsByMonth[dateString]) {
      transactionsByMonth[dateString] = [];
    }
    transactionsByMonth[dateString].push(transaction);
  }
  return transactionsByMonth;
};

// decrements month; index 11 === December
const getPreviousMonth = (currentMonth) => {
  return currentMonth === 0 ? 11 : currentMonth - 1;
};

// increments month; index 11 === December
const getNextMonth = (currentMonth) => {
  return currentMonth === 11 ? 0 : currentMonth + 1;
};

// decrements year
const getPreviousyear = (currentYear, setCurrentYear) => {
  setCurrentYear(currentYear - 1);
};

// increments month
const getNextYear = (currentYear, setCurrentYear) => {
  setCurrentYear(currentYear + 1);
};

// handles previous month change, taking into account the year
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

// handles next month change, taking into account the year
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

// filters through transactions items by the month
export const transactionsForSelectedMonth = (
  transactions,
  currentMonth,
  selectedYear
) => {
  return transactions.filter(
    (transaction) =>
      new Date(transaction.date).getMonth() === currentMonth &&
      new Date(transaction.date).getFullYear() === selectedYear
  );
};

// this function will conditionally render a message if there are no transactions for that month
export const someTransactionsForSelectedMonth = (
  transactions,
  currentMonth,
  currentYear
) => {
  return transactions.some(
    (transaction) =>
      new Date(transaction.date).getMonth() === currentMonth &&
      new Date(transaction.date).getFullYear() === currentYear
  );
};

// filters through <MenuItem> Options when the user types in the <Input /> inside <Popover />
export const filteredCategoryOptions = (categoryOptions, searchTerm) =>
  categoryOptions.filter(({ value }) =>
    value.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

// closes <MenuItem /> when you click outside of filteredCategoryOptions
export const handleClose = (setCategoryOption) => {
  setCategoryOption(null);
};

// updates the <Button> category in <Popover />
export const handleClick = (e, setCategoryOption) => {
  setCategoryOption(e.currentTarget);
};

// allows the user to type in the <Input /> inside <Popover />
export const handleSearch = (e, setSearchTerm) => {
  setSearchTerm(e.target.value);
};
