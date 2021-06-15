/**
 * @param {number[]} arr
 * @return {number}
 */
function sumOddLengthSubarrays(arr) {
  // using sliding window
  let res = 0;
  for (let i = 0; i < arr.length; i += 2) {
    debugger;
    const windowLength = i + 1;
    let curSum = arr.slice(0, windowLength).reduce((acc, cur) => acc + cur);
    // add sum of initialWindow to res
    res += curSum;
    for (let j = 0; j < arr.length - windowLength; j++) {
      // update curSum
      curSum += -arr[j] + arr[j + windowLength];
      // add curSum to res
      res += curSum;
    }
  }
  return res;
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); //58
console.log(sumOddLengthSubarrays([1, 2])); //3
console.log(sumOddLengthSubarrays([10, 11, 12])); //66
