/**
 * @param {number[]} nums
 * @return {number[]}
 */
function minSubsequence(nums) {
  nums = nums.sort((a, b) => b - a);
  const left = [];
  const right = [];
  let i = 0;
  let j = nums.length - 1;

  while (i < nums.length) {
    if (i > j) break;
    const leftSum = left.reduce((acc, cur) => acc + cur, 0);
    const rightSum = right.reduce((acc, cur) => acc + cur, 0);

    if (leftSum <= rightSum + nums[j]) {
      left.push(nums[i]);
      i++;
    } else {
      right.push(nums[j]);
      j--;
    }
  }
  return left;
}

console.log(minSubsequence([4, 3, 10, 9, 8]));
console.log(minSubsequence([4, 4, 7, 6, 7]));
console.log(minSubsequence([6]));
