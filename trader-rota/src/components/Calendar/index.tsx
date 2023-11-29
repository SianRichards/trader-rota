import React, { useEffect, useState } from "react";
import { getTraderRotaInfo } from "../../api";
import { IDummyShiftData } from "../../types";

const Calendar = () => {
  const [data, setData] = useState<any[]>([]);
  const [formattedData, setFormattedData] = useState<IArrayOfRotaObjects>([]);

  useEffect(() => {
    getTraderRotaInfo().then((response) => {
      setData(response.data);
    });
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

  return (
    <div>
      <h1>Calendar</h1>
      <table>
        {formattedData.map((shiftEntry) => {
          const { date, dow, shift, desk_1, desk_2, desk_3 } = shiftEntry;
          return (
            <tr>
              <td>{date}</td>
              <td>{dow}</td>
              <td>{shift}</td>
              <td>{desk_1}</td>
              <td>{desk_2}</td>
              <td>{desk_3}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Calendar;
