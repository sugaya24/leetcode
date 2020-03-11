/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  let minIndex = s.length;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (value < 2) minIndex = Math.min(s.indexOf(key), minIndex);
  }
  return minIndex < s.length ? minIndex : -1;
}
// @lc code=end

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar(''));
console.log(firstUniqChar('ll'));
