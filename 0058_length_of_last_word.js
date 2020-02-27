/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  return s
    .trim()
    .split(' ')
    .pop().length;
}
// @lc code=end
console.log(lengthOfLastWord('hello ')); //5
console.log(lengthOfLastWord(' ')); //0
console.log(lengthOfLastWord('')); //0
console.log(lengthOfLastWord('b   a    ')); //1
