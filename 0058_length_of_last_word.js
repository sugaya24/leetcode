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
  const copy = s.split(' ');
  const res = copy.filter((n) => n.length > 0);
  return res[res.length - 1] ? res[res.length - 1].length : 0;
}
// @lc code=end
console.log(lengthOfLastWord('hello ')); //5
console.log(lengthOfLastWord(' ')); //0
console.log(lengthOfLastWord('')); //0
console.log(lengthOfLastWord('b   a    ')); //1
