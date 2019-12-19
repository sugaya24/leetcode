/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (nums.length === 0 || k < 0) return 0;
  let map = new Map();
  let count = 0;
  for (const num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  map.forEach((value, key) => {
    if (k === 0) {
      if (value > 1) count++;
    } else {
      if (map.has(key + k)) count++;
    }
  });
  return count;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4
console.log(findPairs([1, 3, 1, 5, 4], 0)); // 1
console.log(findPairs([1, 1, 1, 2, 1], 1)); // 1
