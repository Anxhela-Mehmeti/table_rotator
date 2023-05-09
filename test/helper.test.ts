import { convertArrayTo2D } from "../src/helper";

describe("convertArrayto2D", () => {
  it("Should return a 2D array", () => {
    const inputData = [1, 2, 3, 4];
    const inputData2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expectedResult = [
      [1, 2],
      [3, 4],
    ];
    const expectedResult2 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(convertArrayTo2D(inputData)).toEqual(expectedResult);
    expect(convertArrayTo2D(inputData2)).toEqual(expectedResult2);
  });
  it("Should throw if the table cannot have same number of cols and rows", () => {
    const inputData = [1, 2, 3];
    let error;

    try {
      convertArrayTo2D(inputData);
    } catch (err) {
      error = err.message;
    }

    expect(error).toBe(
      "The table cannot have the same number of columns and rows."
    );
  });
});
