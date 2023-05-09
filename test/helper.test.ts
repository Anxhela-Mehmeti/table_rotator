import {
  converLinearArrayTo2D,
  convert2DArrayToLinear,
  rotate2DTableLeft,
} from "../src/helper";

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
    expect(converLinearArrayTo2D(inputData)).toEqual(expectedResult);
    expect(converLinearArrayTo2D(inputData2)).toEqual(expectedResult2);
  });
  it("Should throw if the table cannot have same number of cols and rows", () => {
    const inputData = [1, 2, 3];
    let error;

    try {
      converLinearArrayTo2D(inputData);
    } catch (err) {
      error = err.message;
    }

    expect(error).toBe(
      "The table cannot have the same number of columns and rows."
    );
  });
});

describe("convert2DArrayToLinear", () => {
  it("Should return one dimensional array", () => {
    const inputData = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(convert2DArrayToLinear(inputData)).toEqual(expectedResult);
  });
});

describe("rotate2DTableLeft", () => {
  it("Should rotate the table 1 cell to the left", () => {
    const inputData3 = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    const expectedResult3 = [
      [2, 3, 4, 5, 10],
      [1, 8, 9, 14, 15],
      [6, 7, 13, 19, 20],
      [11, 12, 17, 18, 25],
      [16, 21, 22, 23, 24],
    ];
    const inputData2 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expectedResult2 = [
      [2, 3, 6],
      [1, 5, 9],
      [4, 7, 8],
    ];
    const inputData1 = [
      [1, 2],
      [4, 5],
    ];
    const expectedResult1 = [
      [2, 5],
      [1, 4],
    ];

    expect(rotate2DTableLeft(inputData2)).toEqual(expectedResult2);
    expect(rotate2DTableLeft(inputData1)).toEqual(expectedResult1);
    expect(rotate2DTableLeft(inputData3)).toEqual(expectedResult3);
  });
});
