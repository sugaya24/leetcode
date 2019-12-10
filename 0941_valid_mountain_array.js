/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  isIncreasing = false;
  isDecreasing = false;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
      isIncreasing = true;
    } else if (A[i] === A[i + 1]) {
      return false;
    } else if (isIncreasing && A[i] > A[i + 1]) {
      isDecreasing = true;
    }
    if (!isIncreasing && A[i] > A[i + 1]) {
      return false;
    }
    if (isIncreasing && isDecreasing && A[i] < A[i + 1]) {
      return false;
    }
  }
  if (isIncreasing && isDecreasing) {
    return true;
  }
  return false;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([0, 1, 2, 1, 2]));
console.log(
  validMountainArray([2, 1, 2, 3, 5, 7, 9, 10, 12, 14, 15, 16, 18, 14, 13])
);
