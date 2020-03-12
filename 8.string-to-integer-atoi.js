/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  let i = 0;
  let sign = 1;
  let res = 0;
  const MIN = -2147483648;
  const MAX = 2147483647;
  while (str[i] == ' ') {
    i++;
  }
  if (str[i] === '+') {
    i++;
  } else if (str[i] === '-') {
    sign = -1;
    i++;
  }

  while (str[i] >= '0' && str[i] <= '9') {
    res = res * 10 + (str[i] - 0);
    if (res * sign >= MAX) {
      return MAX;
    } else if (res * sign <= MIN) {
      return MIN;
    }
    i++;
  }
  return res * sign;
}
// @lc code=end

console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('3.14159'));
console.log(myAtoi('+-1'));
