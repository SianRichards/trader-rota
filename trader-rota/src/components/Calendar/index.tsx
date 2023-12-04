import React, { useEffect, useState } from "react";
import { getTraderRotaInfo } from "../../api";
import {
  TOriginalForm,
  TOriginalFormArrayOfObjects,
} from "../../types/originalDataTypes";
import {
  extractTraderNames,
  addShiftsToTrader,
  getStartDate,
  getEndDate,
  getArrayOfDates,
} from "../../helpers/data";
import { getAllDaysOfTheYear } from "../../helpers/calendar";
import { filterShiftsByDate } from "../../helpers/table";
import { IDate } from "../../types/newDataTypes";

const Calendar = () => {
  const [data, setData] = useState<TOriginalForm>([]);
  const [formattedData, setFormattedData] =
    useState<TOriginalFormArrayOfObjects>([]);
  const [traders, setTraders] = useState<Array<string>>([]);
  const [dates, setDates] = useState<Array<IDate>>([]);

  useEffect(() => {
    getTraderRotaInfo().then((response: { data: TOriginalForm }) => {
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

  const datesRow = (
    <tr>
      <th className="p-3">Traders</th>
      {dates.map((date) => {
        return (
          <th className="p-3 border border-black">
            {date.date}
            <p>{date.day}</p>
          </th>
        );
      })}
    </tr>
  );

  const tradersRow = (
    <>
      {newAllShifts.map((traderObject) => {
        return (
          <tr>
            <td>{traderObject.name}</td>
            {dates.map((dateObject: IDate) => {
              const shiftType = filterShiftsByDate(
                traderObject,
                dateObject.date
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
