/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar(S, C) {
  S = S.split('');
  const res = Array(S.length);
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < S.length; j++) {
      let left = S[i - j];
      let right = S[i + j];
      if (left === C || right === C) {
        res[i] = j;
        break;
      }
    }
  }
  return res;
}

console.log(shortestToChar('loveleetcode', 'e')); // [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
// console.log(shortestToChar('aaba', 'b')); // [2, 1, 0, 1]
// console.log(shortestToChar('cizokxcijwbyspcfcqws', 'c')); // [2, 1, 0, 1]
