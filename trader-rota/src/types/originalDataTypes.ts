// BE data comes as an array (TOriginalForm) of
// arrays of objects (TOriginalFormArrayOfObjects)

export interface IOriginalShiftObject {
  date: string;
  dow: string;
  shift: string;
  desk_1: string;
  desk_2: string;
  desk_3: string;
}

export type TOriginalFormArrayOfObjects = Array<IOriginalShiftObject>;

export type TOriginalForm = Array<TOriginalFormArrayOfObjects>;
