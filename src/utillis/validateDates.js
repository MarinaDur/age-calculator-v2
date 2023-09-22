function validateDay(day, month, year) {
  const daysInMonth = new Date(year, month, 0).getDate();

  // Check if the day is within the valid range (between 1 and maximum days in the month)
  if (day) return day >= 1 && day <= daysInMonth;
}

function validateMonth(month) {
  if (month) return month <= 12 && month >= 1;
}

function validateYear(year) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  if (year) return currentYear >= year;
}

export { validateDay, validateMonth, validateYear };
