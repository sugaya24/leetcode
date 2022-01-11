export function diagonalSum(mat: number[][]): number {
  const isOdd = mat.length % 2 === 1;
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i] + mat[i][mat.length - 1 - i];
  }
  if (isOdd) {
    sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
  }
  return sum;
}
