import React, { useEffect, useState } from "react";
import { getTraderRotaInfo } from "../../api";
import { IDummyShiftData } from "../../types";
import { dummyData, allShifts } from "../../dummyData";
import { getAllDaysOfTheYear } from "../../helpers/calendarHelpers";
import styles from "./index.module.scss";

const dates = getAllDaysOfTheYear(
  new Date("2023-11-10"),
  new Date("2023-11-14")
);

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

  const traders = ["Jack", "Maddie", "Vlad", "Jonathon"];

  const datesRow = (
    <tr>
      <th>Traders</th>
      {dates.map((date) => {
        return <th>{date}</th>;
      })}
    </tr>
  );

  const filterShiftsByName = (trader: string) => {
    return allShifts.filter((shiftObject: any) => {
      return shiftObject.name === trader;
    });
  };

  const filterShiftsByDate = (traderObject: any, date: any) => {
    // input: object containing trader name and a list of their shifts and a date
    let shiftType = "None";
    traderObject.forEach((element: any) => {
      return element.shifts.map((shift: any) => {
        if (shift.date === date) {
          shiftType = shift.shiftType;
        }
      });
    });
    return shiftType;
    // output: shiftType to indicate whether the trader is working on the inputted date
  };

  return (
    <div>
      <table className={styles.table}>
        <caption className="text-red-700">Trader shifts</caption>
        <tbody>
          {datesRow}
          {traders.map((trader) => {
            const filteredShiftsByName = filterShiftsByName(trader);
            return (
              <tr>
                <td>{trader}</td>
                {dates.map((date: any) => {
                  const shiftType = filterShiftsByDate(
                    filteredShiftsByName,
                    date
                  );
                  return <>{shiftType}</>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
