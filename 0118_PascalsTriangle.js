/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let outer = [];
  for (let i = 0; i < numRows; i++) {
    let inner = [];
    for (let j = 0; j < i + 1; j++) {
      if (i === 0) {
        inner.push(1);
      } else {
        if (j === 0 || j === i) {
          inner.push(1);
        } else {
          inner.push(outer[i - 1][j - 1] + outer[i - 1][j]);
        }
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
