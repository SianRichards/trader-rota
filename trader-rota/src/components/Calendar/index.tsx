import React, { useEffect, useState } from "react";
import { getTraderRotaInfo } from "../../api";
import { IDummyShiftData } from "../../types";
import { dummyData, Jack, Maddie, Jonathon } from "../../dummyData";
import { getAllDaysOfTheYear } from "../../helpers/calendarHelpers";

const dates = getAllDaysOfTheYear(
  new Date("2023-11-10"),
  new Date("2023-11-14")
);

console.log(dates, Jack);

const Calendar = () => {
  const [data, setData] = useState<any[]>([]);
  const [formattedData, setFormattedData] = useState<IArrayOfRotaObjects>([]);

  useEffect(() => {
    getTraderRotaInfo().then(
      (response: { data: React.SetStateAction<any[]> }) => {
        setData(response.data);
      }
    );
  }, []);

  interface IArrayOfRotaObjects extends Array<IDummyShiftData> {}

  useEffect(() => {
    if (data) {
      const arrayOfRotaObjects: IArrayOfRotaObjects = [];
      data.forEach((rotaArray) => {
        rotaArray.forEach((rotaObj: any) => {
          arrayOfRotaObjects.push(rotaObj);
        });
      });
      setFormattedData(arrayOfRotaObjects);
    }
  }, [data]);

  // console.log(formattedDummyData)

  const datesRow = (
    <tr>
      <th>Traders</th>
      <th>
        {dates.map((date) => {
          return <th>{date}</th>;
        })}
      </th>
    </tr>
  );

  const traders = ["Jack", "Maddie", "Vlad", "Jonathon"]

  return (
    <div>
      <table>
        <caption className="text-red-700">Trader shifts</caption>
        <thead>
        {datesRow}
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
