import {
  INewDateAndShiftTypeObject,
  INewNameAndShiftsObject,
  TNewArrayOfShiftsByTrader,
} from "../types/newDataTypes";

export const filterShiftsByName = (
  trader: string,
  newAllShifts: TNewArrayOfShiftsByTrader
) => {
  return newAllShifts.filter((shiftObject: INewNameAndShiftsObject) => {
    return shiftObject.name === trader;
  });
};

export const filterShiftsByDate = (
  traderObject: TNewArrayOfShiftsByTrader,
  date: string
) => {
  // input: object containing trader name and a list of their shifts and a date
  let shiftType = "None";
  traderObject.forEach((element: INewNameAndShiftsObject) => {
    return element.shifts.map((shift: INewDateAndShiftTypeObject) => {
      if (shift.date === date) {
        shiftType = shift.shiftType;
      }
    });
  });
  return shiftType;
}; // output: shiftType to indicate whether the trader is working on the inputted date
