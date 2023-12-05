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
import { getAllDates, getWeeks } from "../../helpers/calendar";
import { filterShiftsByDate } from "../../helpers/table";
import { IDate } from "../../types/newDataTypes";

const Calendar = () => {
  const [data, setData] = useState<TOriginalForm>([]);
  const [formattedData, setFormattedData] =
    useState<TOriginalFormArrayOfObjects>([]);
  const [traders, setTraders] = useState<Array<string>>([]);
  const [dates, setDates] = useState<Array<IDate>>([]);
  const [weeks, setWeeks] = useState<Array<any>>([]);

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
    if (formattedData && formattedData.length !== 0) {
      // create an array of trader names based on BE data
      const tradersArray = extractTraderNames(formattedData);
      setTraders(tradersArray);
      // create an array containing all dates in BE data
      const datesArray = getArrayOfDates(formattedData);
      // from this array take the earliest & latest date
      const startDate = getStartDate(datesArray);
      const endDate = getEndDate(datesArray);
      // create an array of all dates between the earliest & latest date
      const dates = getAllDates(new Date(startDate), new Date(endDate));
      // split this array into weeks
      const weeks = getWeeks(dates);
      setWeeks(weeks);
      // render the first week in the array by default
      setDates(weeks[0]);
    }
  }, [formattedData]);

  const showNextWeek = () => {
    const currentWeekIndex = weeks.indexOf(dates);
    const nextWeekIndex = currentWeekIndex + 1;
    if (weeks.length > nextWeekIndex) {
      setDates(weeks[nextWeekIndex]);
    }
  };

  const showPreviousWeek = () => {
    const currentWeekIndex = weeks.indexOf(dates);
    const previousWeekIndex = currentWeekIndex - 1;
    if (previousWeekIndex >= 0) {
      setDates(weeks[previousWeekIndex]);
    }
  };

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
            <td className="p-3 border border-black font-bold">
              {traderObject.name}
            </td>
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

  const buttons = (
    <div className="flex">
      <button
        className="mr-2 mb-2 p-2 border border-black font-bold"
        onClick={() => showNextWeek()}
      >
        Next
      </button>
      <button
        className="mr-2 mb-2 p-2 border border-black font-bold"
        onClick={() => showPreviousWeek()}
      >
        Previous
      </button>
    </div>
  );

  return (
    <div>
      <table className="m-5">
        <caption className="font-bold p-3 text-xl">Trader shifts</caption>
        {buttons}
        <tbody className="bg-slate-300 border border-black">
          {datesRow}
          {tradersRow}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
