import { dummyDates } from "../../dummyData";

export const getAllDaysOfTheYear = (startDate: Date, endDate: Date) => {
  const daysOfTheYear = [];

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    daysOfTheYear.push({
      date: new Date(currentDate).toLocaleDateString("en-GB"),
      day: new Date(currentDate).toLocaleString("en-GB", { weekday: "long" }),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return daysOfTheYear;
};

// get all dates between startDate and endDate
// split the dates into weeks
// for each week array replace each date with
// a date and day object

export const getWeeks = (dates: any) => {
  const weeks: any = [];
  let currentWeek: any = [];

  dates.forEach((date: any) => {
    currentWeek.push(date);

    if (date.getDay() === 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }
  return weeks;
};

const arrayOfWeeks = getWeeks(dummyDates);

console.log(arrayOfWeeks);
