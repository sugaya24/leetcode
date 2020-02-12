/**
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i += 2) {
    const times = nums[i];
    const n = nums[i + 1];
    for (let i = 0; i < times; i++) {
      res.push(n);
    }
  }
  return res;
}

console.log(decompressRLElist([1, 2, 3, 4]));
