interface ITraderName {
  name: string;
}

interface IDesk {
  desk_1: ITraderName;
  desk_2: ITraderName;
  desk_3: ITraderName;
}

interface IDummyShiftData {
  date: String;
  day: String;
  AM: IDesk[];
  PM: IDesk[];
}

export const dummyShiftData: Array<IDummyShiftData> = [
  {
    date: "2023-11-10",
    day: "Friday",
    AM: [
      {
        desk_1: { name: "Maddie" },
        desk_2: { name: "Girts" },
        desk_3: { name: "" },
      },
    ],
    PM: [
      { desk_1: { name: "Jack" }, desk_2: { name: "" }, desk_3: { name: "" } },
    ],
  },
  {
    date: "2023-11-11",
    day: "Saturday",
    AM: [
      {
        desk_1: { name: "Maddie" },
        desk_2: { name: "" },
        desk_3: { name: "" },
      },
    ],
    PM: [
      {
        desk_1: { name: "Jack" },
        desk_2: { name: "Girts" },
        desk_3: { name: "" },
      },
    ],
  },
  {
    date: "2023-11-12",
    day: "Sunday",
    AM: [
      {
        desk_1: { name: "Jack" },
        desk_2: { name: "Girts" },
        desk_3: { name: "" },
      },
    ],
    PM: [
      {
        desk_1: { name: "Maddie" },
        desk_2: { name: "" },
        desk_3: { name: "" },
      },
    ],
  },
  {
    date: "2023-11-13",
    day: "Monday",
    AM: [
      {
        desk_1: { name: "Girts" },
        desk_2: { name: "" },
        desk_3: { name: "" },
      },
    ],
    PM: [
      {
        desk_1: { name: "Jack" },
        desk_2: { name: "Maddie" },
        desk_3: { name: "" },
      },
    ],
  },
  {
    date: "2023-11-14",
    day: "Tuesday",
    AM: [
      {
        desk_1: { name: "Jack" },
        desk_2: { name: "Girts" },
        desk_3: { name: "Vlad" },
      },
    ],
    PM: [
      {
        desk_1: { name: "Maddie" },
        desk_2: { name: "" },
        desk_3: { name: "" },
      },
    ],
  },
  {
    date: "2023-11-15",
    day: "Wednesday",
    AM: [
      {
        desk_1: { name: "Jack" },
        desk_2: { name: "Girts" },
        desk_3: { name: "" },
      },
    ],
    PM: [
      {
        desk_1: { name: "Maddie" },
        desk_2: { name: "" },
        desk_3: { name: "Vlad" },
      },
    ],
  },
];
