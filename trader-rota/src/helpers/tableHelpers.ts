import {
  INewDateAndShiftTypeObject,
  INewNameAndShiftsObject,
} from "../types/newDataTypes";

export const filterShiftsByDate = (
  traderObject: INewNameAndShiftsObject,
  date: string
) => {
  let shiftType = "None";
  traderObject.shifts.map((shift: INewDateAndShiftTypeObject) => {
    if (shift.date === date) {
      shiftType = shift.shiftType;
    }
  });
  return shiftType;
}; // output: shiftType to indicate whether the trader is working on the inputted date
