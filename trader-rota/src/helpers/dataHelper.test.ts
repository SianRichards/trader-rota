import {
  addShiftsToTrader,
  extractTraderNames,
  getArrayOfDates,
  getEndDate,
  getStartDate,
} from "./dataHelper";
import { arrayOfTraderObjects, dummyData } from "../dummyData";

const traders = extractTraderNames(dummyData);

describe("extractTraderNames", () => {
  it("should return an array of unique trader names", () => {
    const output = extractTraderNames(dummyData);
    const isUnique = output.every(
      (name, index, array) => array.indexOf(name) === index
    );
    expect(isUnique).toBe(true);
  });
});

describe("addShiftToTrader", () => {
  it("should return an array of objects including trader name and shifts", () => {
    const output = addShiftsToTrader(traders, dummyData);
    expect(output).toEqual(arrayOfTraderObjects);
  });
});

describe("getArrayOfDates", () => {
  it("should return an array of all dates included in the data", () => {
    const arrayOfDates = getArrayOfDates(dummyData);
    const expectedOutput = [
      "2023-11-10",
      "2023-11-11",
      "2023-11-12",
      "2023-11-13",
      "2023-11-14",
    ];
    expect(arrayOfDates).toStrictEqual(expectedOutput);
  });
});

describe("getStartDate", () => {
  it("should return the earliest date included in data", () => {
    const unorderedArrayOfDates = [
      "2023-12-17",
      "2023-01-11",
      "2023-11-12",
      "2023-11-06",
      "2023-08-14",
    ];
    const output = getStartDate(unorderedArrayOfDates);
    expect(output).toBe("2023-01-11");
  });
});

describe("getEndDate", () => {
  it("should return the latest date included in data", () => {
    const unorderedArrayOfDates = [
      "2023-12-17",
      "2023-01-11",
      "2023-11-12",
      "2023-11-06",
      "2023-08-14",
    ];
    const output = getEndDate(unorderedArrayOfDates);
    expect(output).toBe("2023-12-17");
  });
});
