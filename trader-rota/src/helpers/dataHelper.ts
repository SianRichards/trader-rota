import { dummyData } from "../dummyData";

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

const BenShifts = {
  name: "Ben",
  shifts: [] as any,
};

const GirtsShifts = {
  name: "Girts",
  shifts: [] as any,
};

// const addTraderShifts = (trader: string, data: any) => {
//   data.forEach((entry: any) => {
//     const desks = [entry.desk_1, entry.desk_2, entry.desk_3];
//     if (desks.includes(trader)) {
//       traderShifts.shifts.push({
//         date: new Date(entry.date).toLocaleDateString("en-UK"),
//         shiftType: entry.shift,
//       });
//     }
//   });
// }

const extractTraderNames = (data: any) => {
  let nameArray: any = [];
  data.forEach((dataObject: any) => {
    let desks: any = ["desk_1", "desk_2", "desk_3"];
    desks.forEach((desk: string) => {
      if (!nameArray.includes(dataObject[desk]) && dataObject[desk] !== "") {
        nameArray.push(dataObject[desk]);
      }
    });
  });
  return nameArray;
};

const traders = extractTraderNames(dummyData);
console.log("trader name array", traders);

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Jack")) {
    JackShifts.shifts.push({
      date: new Date(dummyEntry.date).toLocaleDateString("en-UK"),
      shiftType: dummyEntry.shift,
    });
  }
});

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Maddie")) {
    MaddieShifts.shifts.push({
      date: new Date(dummyEntry.date).toLocaleDateString("en-UK"),
      shiftType: dummyEntry.shift,
    });
  }
});

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Jonathon")) {
    JonathonShifts.shifts.push({
      date: new Date(dummyEntry.date).toLocaleDateString("en-UK"),
      shiftType: dummyEntry.shift,
    });
  }
});

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Vlad")) {
    VladShifts.shifts.push({
      date: new Date(dummyEntry.date).toLocaleDateString("en-UK"),
      shiftType: dummyEntry.shift,
    });
  }
});

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Ben")) {
    BenShifts.shifts.push({
      date: new Date(dummyEntry.date).toLocaleDateString("en-UK"),
      shiftType: dummyEntry.shift,
    });
  }
});

dummyData.forEach((dummyEntry) => {
  const desks = [dummyEntry.desk_1, dummyEntry.desk_2, dummyEntry.desk_3];
  if (desks.includes("Girts")) {
    GirtsShifts.shifts.push({
      date: new Date(dummyEntry.date).toLocaleDateString("en-UK"),
      shiftType: dummyEntry.shift,
    });
  }
});

export const allShifts = [
  JonathonShifts,
  MaddieShifts,
  JackShifts,
  VladShifts,
  BenShifts,
  GirtsShifts,
];
