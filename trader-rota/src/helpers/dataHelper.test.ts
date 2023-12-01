import { addShiftsToTrader, extractTraderNames } from "./dataHelper";
import { arrayOfTraderObjects, dummyData } from "../dummyData";

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
    const traders = extractTraderNames(dummyData);
    const output = addShiftsToTrader(traders, dummyData);
    expect(output).toEqual(arrayOfTraderObjects);
  });
});
