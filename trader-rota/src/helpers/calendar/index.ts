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

export const getAllDates = (startDate: Date, endDate: Date) => {
  // get all dates between startDate and endDate
  const daysOfTheYear = [];

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    daysOfTheYear.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return daysOfTheYear;
};

export const getWeeks = (dates: any) => {
  // split the dates into weeks
  // for each week array replace each date with
  // a date and day object
  const weeks: any = [];
  let currentWeek: any = [];

  dates.forEach((date: any) => {
    currentWeek.push({
      date: new Date(date).toLocaleDateString("en-GB"),
      day: new Date(date).toLocaleString("en-GB", { weekday: "long" }),
    });

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
