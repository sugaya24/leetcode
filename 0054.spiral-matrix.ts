function spiralOrder(matrix: number[][]): number[] {
  const output: number[] = [];
  while (matrix.length) {
    const fl = matrix.shift() || [];
    output.push(...fl);
    for (const arr of matrix) {
      const n = arr.pop();
      if (n) {
        output.push(n);
        arr.reverse();
      }
    }
    matrix.reverse();
  }
  return output;
}

export default spiralOrder;
