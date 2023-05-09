export const converLinearArrayTo2D = (table: number[]): number[][] => {
  const length = Math.sqrt(table.length);
  if (length % 1 != 0) {
    throw new Error(
      "The table cannot have the same number of columns and rows."
    );
  }
  const table2d: number[][] = [];

  for (let i = 0; i < length; i++) {
    table2d.push(table.splice(0, length));
  }

  return table2d;
};

export const rotate2DTableLeft = (inputTable: number[][]): number[][] => {
  const length = inputTable.length;

  const outputTable: (number | null)[][] = Array.from({ length: length }, () =>
    Array.from({ length: length }, () => null)
  );

  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      let left = Boolean(x < length - 1 && y <= x && y <= length - x - 2);
      let bottom = Boolean(x >= length / 2 && y < x && y >= length - x - 1);
      let right = Boolean(
        y >= length / 2 && x > 0 && y >= x && y > length - x - 1
      );
      let top = Boolean(x < length / 2 && y > 0 && y > x && y < length - x);

      if (left) {
        outputTable[x + 1][y] = inputTable[x][y];
      } else if (bottom) {
        outputTable[x][y + 1] = inputTable[x][y];
      } else if (right) {
        outputTable[x - 1][y] = inputTable[x][y];
      } else if (top) {
        outputTable[x][y - 1] = inputTable[x][y];
      } else {
        outputTable[x][y] = inputTable[x][y];
      }
    }
  }

  return outputTable;
};

export const convert2DArrayToLinear = (table: number[][]): number[] => {
  return [].concat.apply([], table);
};

export const rotateLeftLinearArrayAndConvertTo2D = (inputArray: number[]) => {
  const table = converLinearArrayTo2D(inputArray);
  const rotatedTable = rotate2DTableLeft(table);
  const rotatedLinearArray = convert2DArrayToLinear(rotatedTable);
};
