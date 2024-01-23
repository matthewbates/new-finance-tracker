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
