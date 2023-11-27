import React, { useEffect, useState } from "react";
import { dummyShiftData } from "../../data/dummyData";
import { getTraderRotaInfo } from "../../api";

const Calendar = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getTraderRotaInfo().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div>
      <h1>Calendar</h1>
      <table>
        {dummyShiftData.map((shiftEntry, index) => {
          return (
            <tr key={index}>
              <td>{shiftEntry.date}</td>
              <td>{shiftEntry.day}</td>
              <td>
                AM:
                {shiftEntry.AM.map((AMShift, index) => {
                  return (
                    <div key={index}>
                      <p>Desk 1: {AMShift.desk_1.name}</p>
                      <p>Desk 2: {AMShift.desk_2.name}</p>
                      <p>Desk 3: {AMShift.desk_3.name}</p>
                    </div>
                  );
                })}
              </td>
              <td>
                PM:
                {shiftEntry.PM.map((AMShift, index) => {
                  return (
                    <div key={index}>
                      <p>Desk 1: {AMShift.desk_1.name}</p>
                      <p>Desk 2: {AMShift.desk_2.name}</p>
                      <p>Desk 3: {AMShift.desk_3.name}</p>
                    </div>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Calendar;
