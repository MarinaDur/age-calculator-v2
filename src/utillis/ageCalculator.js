function ageCalculator(day, month, year) {
  const currentDate = new Date();

  let years = currentDate.getFullYear() - year;
  let currentMonth = currentDate.getMonth();
  let birthMonth = month - 1; // Adjust for zero-based index

  // If the current month is before the birth month or if it's the same month but the current day is before the birth day, subtract 1 from years
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDate.getDate() < day)
  ) {
    years--;
    currentMonth += 12; // Add 12 months to current month to calculate the correct difference
  }

  // Calculate the number of months
  let months = currentMonth - birthMonth;

  // Calculate the number of days
  let days = currentDate.getDate() - day;
  if (days < 0) {
    const prevMonthLastDay = new Date(
      currentDate.getFullYear(),
      currentMonth - 1, // Subtract 1 to get the previous month
      0
    ).getDate();
    months--; // Subtract 1 month
    days += prevMonthLastDay; // Add days from the previous month
  }

  return {
    years,
    months,
    days,
  };
}

export default ageCalculator;
