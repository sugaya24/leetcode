/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var outer = [];
  for (let i = 0; i < numRows; i++) {
    let inner = [];
    for (let j = 0; j <= i; j++) {
      // inner.push(j);
      if (j === 0 || j === i) {
        inner.push(1);
      } else {
        inner.push(outer[i - 1][j - 1] + outer[i - 1][j]);
      }
    }
    outer.push(inner);
  }
  console.log(outer);
};

generate(10);
