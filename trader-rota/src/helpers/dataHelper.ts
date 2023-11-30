import { dummyData } from "../dummyData";

const extractTraderNames = (data: any) => {
  let nameArray: string[] = [];
  data.forEach((dataObject: any) => {
    let desks: any = ["desk_1", "desk_2", "desk_3"];
    desks.forEach((desk: string) => {
      if (!nameArray.includes(dataObject[desk]) && dataObject[desk] !== "") {
        nameArray.push(dataObject[desk]);
      }
    });
  });
  return nameArray;
};

export const traders = extractTraderNames(dummyData);

const addShiftsToTrader = (traders: any, data: any) => {
  // input: array of traders & BE data
  return traders.map((trader: any) => {
    let shifts: any = [];
    data.forEach((dataObj: any) => {
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
  // output: an array of objects (one object per trader) that
  // includes trader's name and their shifts
};

export const newAllShifts = addShiftsToTrader(traders, dummyData);
