/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s) {
  let l = 0;
  let r = 0;
  return s.split('').reduce((depth, c) => {
    if (c === '(') l++;
    if (c === ')') r++;
    return Math.max(l - r, depth);
  }, 0);
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
