/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}
// @lc code=end

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
