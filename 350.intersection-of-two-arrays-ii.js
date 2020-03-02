/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const map = new Map();
  for (const n of nums1) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const res = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      res.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return res;
}
// @lc code=end

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
