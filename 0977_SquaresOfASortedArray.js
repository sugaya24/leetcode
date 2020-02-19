/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const res = Array(A.length);
  let left = 0;
  let right = A.length - 1;
  let index = A.length - 1;

  while (index >= 0) {
    if (A[left] ** 2 > A[right] ** 2) {
      res[index--] = A[left++] ** 2;
    } else {
      res[index--] = A[right--] ** 2;
    }
  }
  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
