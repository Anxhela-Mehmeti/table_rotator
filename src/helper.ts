export const convertArrayTo2D = (table: Number[]) => {
  const length = Math.sqrt(table.length);
  if (length % 1 != 0) {
    throw new Error(
      "The table cannot have the same number of columns and rows."
    );
  }
  const table2d: Number[][] = [];

  for (let i = 0; i < length; i++) {
    table2d.push(table.splice(0, length));
  }

  return table2d;
};
