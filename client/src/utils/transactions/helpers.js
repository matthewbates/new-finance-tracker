// takes an array of transactions and groups them by date
export const listTransactionsByMonth = (transactions) => {
  if (!transactions || !transactions.length) return {};

  const sortedTransactions = transactions.sort(
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );

  const transactionByDate = {};

  for (let i = 0; i < sortedTransactions.length; i++) {
    const transaction = sortedTransactions[i];

    const options = { weekday: "short", month: "long", day: "numeric" };
    const dateObj = new Date(Date.parse(transaction.date));

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    let dateString;

    if (dateObj.toDateString() === today.toDateString()) {
      dateString = "Today";
    } else if (dateObj.toDateString() === yesterday.toDateString()) {
      dateString = "Yesterday";
    } else {
      dateString = dateObj.toLocaleDateString("en-US", options);
    }

    if (!transactionByDate[dateString]) {
      transactionByDate[dateString] = [];
    }
    transactionByDate[dateString].push(transaction);
  }

  return transactionByDate;
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

// increments year
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

// handles the logout functionality
export const handleLogout = (setCurrentUser, navigate) => {
  setTimeout(() => {
    setCurrentUser(false);
    navigate("/");
    alert("You've successfully logged out");
  }, 1500);
};
