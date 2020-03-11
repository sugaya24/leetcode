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
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
}
// @lc code=end

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar(''));
console.log(firstUniqChar('ll'));
