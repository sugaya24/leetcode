/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let result = '';
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if ((S[i] === '(' && ++count !== 1) || (S[i] === ')' && --count !== 0)) {
      result += S[i];
    }
  }
  return result;
};

console.log(removeOuterParentheses('(()())(())')); // "()()()"
console.log(removeOuterParentheses('(()())(())(()(()))')); // "()()()()(())"
console.log(removeOuterParentheses('()()')); // ""
