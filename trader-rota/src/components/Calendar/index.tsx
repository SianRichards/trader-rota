import React, { useEffect, useState } from "react";
import { getTraderRotaInfo } from "../../api";
import { IDummyShiftData } from "../../types";
import { dummyData, Jack, Maddie, Jonathon } from "../../dummyData";

console.log(Jack, Maddie, Jonathon);

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

  // console.log(formattedDummyData)

  return (
    <div>
      <table>
        <h1 className="text-red-700">Trader shifts</h1>
        <tbody>
          {/* <tr>
            <th>Trader</th>
            {formattedDummyData.map((dataEntry: any) => {
              return (
                <>
                  <th>
                    {dataEntry.date} {dataEntry.dow}
                  </th>
                </>
              );
            })}
          </tr>
          <tr>Jack</tr>
          <div>
            {formattedDummyData.map((dataEntry: any) => {
              if (dataEntry.shift.traders.includes("Jack")) {
                return <div>{dataEntry.shift.mOA}</div>;
              }
            })}
          </div> */}
          {/* <tr>Maddie</tr>
          <tr>Vlad</tr>
          <tr>Girts</tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
