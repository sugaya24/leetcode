/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
function xorOperation(n, start) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    res ^= start + i * 2;
  }
  return res;
}
