import { IShift, IShiftsPerTrader, IShiftsPerTraderArray } from "../types";

export const filterShiftsByName = (
  trader: string,
  newAllShifts: IShiftsPerTraderArray
) => {
  return newAllShifts.filter((shiftObject: IShiftsPerTrader) => {
    return shiftObject.name === trader;
  });
};

export const filterShiftsByDate = (
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
}; // output: shiftType to indicate whether the trader is working on the inputted date
