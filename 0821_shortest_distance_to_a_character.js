/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar(S, C) {
  let len = S.length;
  const res = Array(len);
  for (let i = 0; i < len; ++i) {
    res[i] = S.charAt(i) === C ? 0 : len;
  }
  for (let i = 1; i < len; ++i) {
    res[i] = Math.min(res[i], res[i - 1] + 1);
    // console.log(res[i]);
  }
  for (let i = len - 2; i >= 0; --i) {
    res[i] = Math.min(res[i], res[i + 1] + 1);
  }
  return res;
}

console.log(shortestToChar('loveleetcode', 'e')); // [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
// console.log(shortestToChar('aaba', 'b')); // [2, 1, 0, 1]
// console.log(shortestToChar('cizokxcijwbyspcfcqws', 'c')); // [2, 1, 0, 1]
