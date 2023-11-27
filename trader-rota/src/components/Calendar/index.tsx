import React from "react";

const startDate = new Date("2023-01-01");
const endDate = new Date("2023-12-31");

const getAllDaysOfTheYear = () => {
  const daysOfTheYear = [];

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    daysOfTheYear.push(new Date(currentDate).toLocaleDateString("en-UK"));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return daysOfTheYear;
};

console.log(getAllDaysOfTheYear());

const Calendar = () => {
  return (
    <div>
      <h1>Calendar</h1>
      {getAllDaysOfTheYear().map((date, index) => {
        return <div key={index}>{date}</div>;
      })}
    </div>
  );
};

export default Calendar;
