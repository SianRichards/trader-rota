export interface IShiftData {
  date: string;
  dow: string;
  shift: string;
  desk_1: string;
  desk_2: string;
  desk_3: string;
}

export interface IShift {
  date: string;
  shiftType: string;
}

export type IRotaPlan = Array<IShiftData>;

export type IData = Array<IRotaPlan>;
