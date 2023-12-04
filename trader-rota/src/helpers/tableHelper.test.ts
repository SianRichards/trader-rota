import { exampleTraderObject } from "../dummyData";
import { filterShiftsByDate } from "./tableHelpers";

describe("filterShiftsByDate", () => {
  it("should return a shiftType to indicate whether a trader is working on the inputted date", () => {
    const dummyDates = ["12/11/2023", "10/11/2023", "09/11/2023"];
    const output = dummyDates.map((date) => {
      return filterShiftsByDate(exampleTraderObject, date);
    });
    expect(output).toStrictEqual(["AM", "PM", "None"]);
  });
});

