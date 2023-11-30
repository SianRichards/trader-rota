export const dummyData = [
  {
    date: "10/11/2023",
    dow: "Friday",
    shift: "AM",
    desk_1: "Maddie",
    desk_2: "Ben",
    desk_3: "",
  },
  {
    date: "10/11/2023",
    dow: "Friday",
    shift: "PM",
    desk_1: "Jack",
    desk_2: "Jonathon",
    desk_3: "Vlad",
  },
  {
    date: "11/11/2023",
    dow: "Saturday",
    shift: "AM",
    desk_1: "Girts",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "11/11/2023",
    dow: "Saturday",
    shift: "PM",
    desk_1: "Vlad",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "12/11/2023",
    dow: "Sunday",
    shift: "AM",
    desk_1: "Jack",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "12/11/2023",
    dow: "Sunday",
    shift: "PM",
    desk_1: "Jonathon",
    desk_2: "",
    desk_3: "",
  },
  {
    date: "13/11/2023",
    dow: "Monday",
    shift: "AM",
    desk_1: "Maddie",
    desk_2: "Jack",
    desk_3: "",
  },
  {
    date: "13/11/2023",
    dow: "Monday",
    shift: "PM",
    desk_1: "Jonathon",
    desk_2: "Vlad",
    desk_3: "Jack",
  },
  {
    date: "14/11/2023",
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

const JonathonShifts = {
  name: "Jonathon",
  shifts: [] as any,
};

const MaddieShifts = {
  name: "Maddie",
  shifts: [] as any,
};

const JackShifts = {
  name: "Jack",
  shifts: [] as any,
};

const VladShifts = {
  name: "Vlad",
  shifts: [] as any,
};

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Jack")) {
    JackShifts.shifts.push({
      date: dummyEntry.date,
      shiftType: dummyEntry.shift,
    });
  }
});

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Maddie")) {
    MaddieShifts.shifts.push({
      date: dummyEntry.date,
      shiftType: dummyEntry.shift,
    });
  }
});

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Jonathon")) {
    JonathonShifts.shifts.push({
      date: dummyEntry.date,
      shiftType: dummyEntry.shift,
    });
  }
});

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Vlad")) {
    VladShifts.shifts.push({
      date: dummyEntry.date,
      shiftType: dummyEntry.shift,
    });
  }
});

export const allShifts = [JonathonShifts, MaddieShifts, JackShifts, VladShifts];

// matchingShifts:
// [
//   {
//     name: "Trader1",
//     shifts: [{
//       date: "10/11/2023",
//       shiftType: "AM"
//     }]
//   },
//   {
//     name: "Trader2",
//     shifts: [{
//       date: "10/11/2023",
//       shiftType: "AM"
//     }]
//   },
// ]

// traderShiftObject:
//   {
//     "name": "Trader1",
//     "shifts": []
// }

// shift:
//   {
//     "date": "13/11/2023",
//     "shiftType": "AM"
// }
