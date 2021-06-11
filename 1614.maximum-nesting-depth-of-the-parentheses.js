/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s) {
  let maxDepth = 0;
  let curDepth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      curDepth++;
    } else if (s[i] === ')') {
      curDepth--;
    }
    if (curDepth > maxDepth) maxDepth = curDepth;
  }
  return maxDepth;
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
