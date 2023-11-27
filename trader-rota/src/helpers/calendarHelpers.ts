export const getAllDaysOfTheYear = (startDate: Date, endDate: Date) => {
  // e.g. const startDate = new Date("2023-01-01");
  // const endDate = new Date("2023-12-31");
  const daysOfTheYear = [];

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    daysOfTheYear.push(new Date(currentDate).toLocaleDateString("en-UK"));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return daysOfTheYear;
};
