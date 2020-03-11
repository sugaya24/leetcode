/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    const tmp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = tmp;
  }
  return s;
}
// @lc code=end
