/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const outer = [[1]];
  for (let i = 1; i < numRows; i++) {
    const inner = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        inner.push(1);
      } else {
        inner.push(outer[i - 1][j - 1] + outer[i - 1][j]);
      }
    }
    outer.push(inner);
  }
  return outer;
};

console.log(generate(5));
// generate(5);
// [
//   [1],
//   [1,1],
//  [1,2,1],
// [1,3,3,1],
// [1,4,6,4,1]
// ]
