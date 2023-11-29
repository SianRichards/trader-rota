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
      <td>Traders</td>
      <td>
        {dates.map((date) => {
          return <th>{date}</th>;
        })}
      </td>
    </tr>
  );

  return (
    <div>
      <table>
        <h1 className="text-red-700">Trader shifts</h1>
        <tbody>
          {datesRow}
          <tr>
            <td>Jack</td>
            <td>
              {dates.map((date) => {
                const matchingShift = Jack.shifts.find(
                  (shift: { date: string }) => shift.date === date
                );

                if (matchingShift) {
                  return <div>{matchingShift.shiftType}</div>;
                }

                return <div>None</div>;
              })}
            </td>
          </tr>
          <tr>Maddie</tr>
          <tr>Jonathon</tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
