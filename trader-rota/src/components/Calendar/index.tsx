import React, { useEffect, useState } from "react";
import { getTraderRotaInfo } from "../../api";
import {
  IData,
  IRotaPlan,
  IShift,
  IShiftsPerTrader,
  IShiftsPerTraderArray,
} from "../../types";
import {
  extractTraderNames,
  addShiftsToTrader,
  getStartDate,
  getEndDate,
  getArrayOfDates,
} from "../../helpers/dataHelper";
import { getAllDaysOfTheYear } from "../../helpers/calendarHelpers";

const Calendar = () => {
  const [data, setData] = useState<IData>([]);
  const [formattedData, setFormattedData] = useState<IRotaPlan>([]);
  const [traders, setTraders] = useState<Array<string>>([]);
  const [dates, setDates] = useState<Array<string>>([]);

  useEffect(() => {
    getTraderRotaInfo().then((response: { data: IData }) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    if (data && data.length !== 0) {
      setFormattedData(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (formattedData) {
      const tradersArray = extractTraderNames(formattedData);
      setTraders(tradersArray);
      const datesArray = getArrayOfDates(formattedData);
      const startDate = getStartDate(datesArray);
      const endDate = getEndDate(datesArray);
      const dates = getAllDaysOfTheYear(new Date(startDate), new Date(endDate));
      setDates(dates);
    }
  }, [formattedData]);

  const newAllShifts = addShiftsToTrader(traders, formattedData);

  const filterShiftsByName = (trader: string) => {
    return newAllShifts.filter((shiftObject: IShiftsPerTrader) => {
      return shiftObject.name === trader;
    });
  };

  const filterShiftsByDate = (
    traderObject: IShiftsPerTraderArray,
    date: string
  ) => {
    // input: object containing trader name and a list of their shifts and a date
    let shiftType = "None";
    traderObject.forEach((element: IShiftsPerTrader) => {
      return element.shifts.map((shift: IShift) => {
        if (shift.date === date) {
          shiftType = shift.shiftType;
        }
      });
    });
    return shiftType;
    // output: shiftType to indicate whether the trader is working on the inputted date
  };

  const datesRow = (
    <tr>
      <th className="p-3">Traders</th>
      {dates.map((date) => {
        return <th className="p-3 border border-black">{date}</th>;
      })}
    </tr>
  );

  const tradersRow = (
    <>
      {traders.map((trader) => {
        const filteredShiftsByName = filterShiftsByName(trader);
        return (
          <tr>
            <td className="p-3 border border-black font-bold">{trader}</td>
            {dates.map((date: string) => {
              const shiftType = filterShiftsByDate(filteredShiftsByName, date);
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
    </>
  );

  return (
    <div>
      <table className="m-5">
        <caption className="font-bold p-3 text-xl">Trader shifts</caption>
        <tbody className="bg-slate-300 border border-black">
          {datesRow}
          {tradersRow}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
