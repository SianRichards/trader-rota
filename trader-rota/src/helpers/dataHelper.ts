import { IRotaPlan, IShift, IShiftData } from "../types";

export const extractTraderNames = (data: IRotaPlan) => {
  let nameArray: string[] = [];
  data.forEach((dataObject: any) => {
    let desks: Array<string> = ["desk_1", "desk_2", "desk_3"];
    desks.forEach((desk: string) => {
      if (!nameArray.includes(dataObject[desk]) && dataObject[desk] !== "") {
        nameArray.push(dataObject[desk]);
      }
    });
  });
  return nameArray;
};

export const addShiftsToTrader = (traders: Array<string>, data: IRotaPlan) => {
  return traders.map((trader: string) => {
    let shifts: Array<IShift> = [];
    data.forEach((dataObj: IShiftData) => {
      const desks = [dataObj.desk_1, dataObj.desk_2, dataObj.desk_3];
      if (desks.includes(trader)) {
        shifts.push({
          date: new Date(dataObj.date).toLocaleDateString("en-UK"),
          shiftType: dataObj.shift,
        });
      }
    });
    return {
      name: trader,
      shifts,
    };
  });
};

export const getArrayOfDates = (data: IRotaPlan) => {
  let datesArray: string[] = [];
  data.map((shift: IShiftData) => {
    if (!datesArray.includes(shift.date)) {
      datesArray.push(shift.date);
    }
  });
  return datesArray;
};

export const getStartDate = (arrayOfDates: Array<string>) => {
  const orderedDates = arrayOfDates.sort((a: string, b: string) => {
    return Date.parse(a) - Date.parse(b);
  });
  return orderedDates[0];
};

export const getEndDate = (arrayOfDates: Array<string>) => {
  const orderedDates = arrayOfDates.sort((a: string, b: string) => {
    return Date.parse(b) - Date.parse(a);
  });
  return orderedDates[0];
};
