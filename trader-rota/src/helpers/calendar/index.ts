export const getAllDaysOfTheYear = (startDate: Date, endDate: Date) => {
  const daysOfTheYear = [];

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    daysOfTheYear.push(
      {
        date: new Date(currentDate).toLocaleDateString("en-GB"),
        day: new Date(currentDate).toLocaleString('en-GB', {  weekday: 'long' })
      });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return daysOfTheYear;
};
