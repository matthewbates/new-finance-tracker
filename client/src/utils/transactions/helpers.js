export const listTransactionsByMonth = (transactions) => {
  if (!transactions || transactions.length === 0) return {};

  let dateString;
  const transactionsByMonth = {};
  const options = { weekday: "long", month: "long", day: "numeric" };

  const sortedTransactions = transactions.sort((a, b) => {
    return Date.parse(a.date) - Date.parse(b.date);
  });

  for (let i = 0; i < sortedTransactions.length; i++) {
    const transaction = sortedTransactions[i];
    dateString = new Date(Date.parse(transaction.date)).toLocaleDateString(
      "en-US",
      options
    );

    // access the value associated with the key dateString
    if (!transactionsByMonth[dateString]) {
      transactionsByMonth[dateString] = [];
    }
    transactionsByMonth[dateString].push(transaction);
  }
  return transactionsByMonth;
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

export const transactionsForSelectedMonth = (
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
