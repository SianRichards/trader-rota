export interface IShiftData {
  date: String;
  dow: String;
  shift: String;
  desk_1: String;
  desk_2: String;
  desk_3: String;
}

export interface IShift {
  date: string;
  shiftType: string;
}

export type IRotaPlan = Array<IShiftData>;

export type IData = Array<IRotaPlan>;
