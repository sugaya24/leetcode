/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNumbers(matrix) {
  if (matrix.length === 0) return [];
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    let rowMin = Infinity;
    for (let j = 0; j < matrix[0].length; j++) {
      console.log(matrix[i][j]);
      if (matrix[i][j] < rowMin) {
        rowMin = matrix[i][j];
      }
    }
  }
  return res;
}
// 縦で最大、横で最小
console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12]
  ])
); // 12
// console.log(
//   luckyNumbers([
//     [36376, 85652, 21002, 4510],
//     [68246, 64237, 42962, 9974],
//     [32768, 97721, 47338, 5841],
//     [55103, 18179, 79062, 46542]
//   ])
// ); // []
// console.log(
//   luckyNumbers([
//     [3, 7, 8],
//     [9, 11, 13],
//     [15, 16, 17]
//   ])
// ); // [15]
// console.log(
//   luckyNumbers([
//     [1, 10, 4, 2],
//     [9, 3, 8, 7],
//     [15, 16, 17, 12]
//   ])
// ); // [12]
// console.log(
//   luckyNumbers([
//     [7, 8],
//     [1, 2]
//   ])
// ); // [7]
