export const dummyData = [
  {
    date: "2023-11-10",
    dow: "Friday",
    shift: "AM",
    desk_1: "Maddie",
    desk_2: "Ben",
    desk_3: "",
  },
  {
    date: "2023-11-10",
    dow: "Friday",
    shift: "PM",
    desk_1: "Jack",
    desk_2: "Jonathon",
    desk_3: "Vlad",
  },
  {
    date: "2023-11-11",
    dow: "Saturday",
    shift: "AM",
    desk_1: "Girts",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "2023-11-11",
    dow: "Saturday",
    shift: "PM",
    desk_1: "Vlad",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "2023-11-12",
    dow: "Sunday",
    shift: "AM",
    desk_1: "Jack",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "2023-11-12",
    dow: "Sunday",
    shift: "PM",
    desk_1: "Jonathon",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "2023-11-13",
    dow: "Monday",
    shift: "AM",
    desk_1: "Maddie",
    desk_2: "Jack",
    desk_3: "",
  },
  {
    date: "2023-11-13",
    dow: "Monday",
    shift: "PM",
    desk_1: "Jonathon",
    desk_2: "Vlad",
    desk_3: "",
  },
  {
    date: "2023-11-14",
    dow: "Tuesday",
    shift: "AM",
    desk_1: "Maddie",
    desk_2: "Girts",
    desk_3: "Ben",
  },
];

interface IShift {
  date: string;
  shiftType: string;
}

export const Jonathon = {
  shifts: [] as any,
};

export const Maddie = {
  shifts: [] as any,
};

export const Jack = {
  shifts: [] as any,
};

dummyData.forEach((dummyEntry) => {
  switch ("Jack") {
    case dummyEntry.desk_1:
      Jack.shifts.push({ date: dummyEntry.date, shiftType: dummyEntry.shift });
      break;
    case dummyEntry.desk_2:
      Jack.shifts.push({ date: dummyEntry.date, shiftType: dummyEntry.shift });
      break;
    case dummyEntry.desk_3:
      Jack.shifts.push({ date: dummyEntry.date, shiftType: dummyEntry.shift });
      break;

    default:
  }
});

dummyData.forEach((dummyEntry) => {
  switch ("Maddie") {
    case dummyEntry.desk_1:
      Maddie.shifts.push({
        date: dummyEntry.date,
        shiftType: dummyEntry.shift,
      });
      break;
    case dummyEntry.desk_2:
      Maddie.shifts.push({
        date: dummyEntry.date,
        shiftType: dummyEntry.shift,
      });
      break;
    case dummyEntry.desk_3:
      Maddie.shifts.push({
        date: dummyEntry.date,
        shiftType: dummyEntry.shift,
      });
      break;

    default:
  }
});

dummyData.forEach((dummyEntry) => {
  switch ("Jonathon") {
    case dummyEntry.desk_1:
      Jonathon.shifts.push({
        date: dummyEntry.date,
        shiftType: dummyEntry.shift,
      });
      break;
    case dummyEntry.desk_2:
      Jonathon.shifts.push({
        date: dummyEntry.date,
        shiftType: dummyEntry.shift,
      });
      break;
    case dummyEntry.desk_3:
      Jonathon.shifts.push({
        date: dummyEntry.date,
        shiftType: dummyEntry.shift,
      });
      break;

    default:
  }
});
