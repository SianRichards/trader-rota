import React, { useEffect, useState } from "react";
import { getTraderRotaInfo } from "../../api";
import { IDummyShiftData } from "../../types";
import {
  extractTraderNames,
  addShiftsToTrader,
} from "../../helpers/dataHelper";
import { getAllDaysOfTheYear } from "../../helpers/calendarHelpers";

const dates = getAllDaysOfTheYear(
  new Date("2023-11-10"),
  new Date("2023-11-18")
);

const Calendar = () => {
  const [data, setData] = useState<any[]>([]);
  const [formattedData, setFormattedData] = useState<IArrayOfRotaObjects>([]);
  const [traders, setTraders] = useState<any[]>([]);

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
      setFormattedData(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (formattedData) {
      const tradersArray = extractTraderNames(formattedData);
      setTraders(tradersArray);
    }
  }, [formattedData]);

  const datesRow = (
    <tr>
      <th className="p-3">Traders</th>
      {dates.map((date) => {
        return <th className="p-3 border border-black">{date}</th>;
      })}
    </tr>
  );

  const newAllShifts = addShiftsToTrader(traders, formattedData);

  const filterShiftsByName = (trader: string) => {
    return newAllShifts.filter((shiftObject: any) => {
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
      <table className="ml-5">
        <caption className="font-bold p-3 text-xl">Trader shifts</caption>
        <tbody className="bg-slate-300 border border-black">
          {datesRow}
          {traders.map((trader) => {
            const filteredShiftsByName = filterShiftsByName(trader);
            return (
              <tr>
                <td className="p-3 border border-black font-bold">{trader}</td>
                {dates.map((date: any) => {
                  const shiftType = filterShiftsByDate(
                    filteredShiftsByName,
                    date
                  );
                  return (
                    <td
                      className={`p-3 border border-black ${
                        shiftType === "AM" || shiftType === "PM"
                          ? "bg-green-400"
                          : "bg-slate-300"
                      }`}
                    >
                      {shiftType}
                    </td>
                  );
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
