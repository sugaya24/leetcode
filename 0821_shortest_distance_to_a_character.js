/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let arr = [];
  for (let i = 0; i < S.length; i++) {
    let min = Infinity;
    for (let j = i; j < S.length; j++) {
      if (S[j] === C) {
        min = j - i;
        break;
      }
    }
    for (let k = i; k >= 0; k--) {
      if (S[k] === C && i - k <= min) {
        min = i - k;
        break;
      }
    }
    arr.push(min);
  }
  return arr;
};

console.log(shortestToChar('loveleetcode', 'e'));
console.log(shortestToChar('lovelove', 'l'));
