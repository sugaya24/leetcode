/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let res;
  const negative = x < 0 ? true : false;
  res = x.toString().split('');
  if (negative) res.shift();
  for (let i = 0; i < res.length / 2; i++) {
    [res[i], res[res.length - 1 - i]] = [res[res.length - 1 - i], res[i]];
  }
  if (negative) res.unshift('-');
  res = Number(res.join(''));

  return -(2 ** 31) < res && res < 2 ** 31 - 1 ? res : 0;
}
// @lc code=end

console.log(reverse(-123));
console.log(reverse(123));
console.log(reverse(120));
