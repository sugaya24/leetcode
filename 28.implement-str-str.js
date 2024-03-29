/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] === needle[0] &&
      haystack.slice(i, i + needle.length) === needle
    )
      return i;
  }
  return -1;
}
// @lc code=end

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', ''));
console.log(strStr('mississippi', 'mississippi'));
console.log(strStr('mississippi', 'sipp'));
