/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
function xorOperation(n, start) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(start + 2 * i);
  }
  return arr.reduce((acc, cur) => acc ^ cur);
}
