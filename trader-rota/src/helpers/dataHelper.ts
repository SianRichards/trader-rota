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