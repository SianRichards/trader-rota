export const getAllDaysOfTheYear = (startDate: Date, endDate: Date) => {
  const daysOfTheYear = [];

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    daysOfTheYear.push(new Date(currentDate).toLocaleDateString("en-UK"));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return daysOfTheYear;
};
