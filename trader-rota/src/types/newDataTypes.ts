// data is formatted into an array of objects (TNewArrayOfShiftsByTrader)

// each object has a "name" key value pair and a "shifts" property (INewNameAndShiftsObject)

// "shifts" is an array of objects, each shift containing a "date" and a "shiftType" (INewDateAndShiftTypeObject)

export interface INewDateAndShiftTypeObject {
  date: string;
  shiftType: string;
  day: string;
}

export interface INewNameAndShiftsObject {
  name: string;
  shifts: Array<INewDateAndShiftTypeObject>;
}

export type TNewArrayOfShiftsByTrader = Array<INewNameAndShiftsObject>;

export interface IDate {
  date: string;
  day: string;
}
