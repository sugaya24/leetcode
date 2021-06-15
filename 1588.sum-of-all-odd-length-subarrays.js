/**
 * @param {number[]} arr
 * @return {number}
 */
function sumOddLengthSubarrays(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i += 2) {
    for (let j = 0; j < arr.length - i; j++) {
      res += arr.slice(j, j + i + 1).reduce((acc, cur) => acc + cur);
    }
  }
  return res;
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
console.log(sumOddLengthSubarrays([1, 2]));
console.log(sumOddLengthSubarrays([10, 11, 12]));
