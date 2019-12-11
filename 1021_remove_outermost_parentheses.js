/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let brackets = [];
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      if (count !== 0) {
        brackets.push(S[i]);
      }
      count++;
    } else {
      if (count !== 1) {
        brackets.push(S[i]);
      }
      count--;
    }
  }
  return brackets.join('');
};

console.log(removeOuterParentheses('(()())(())')); // "()()()"
console.log(removeOuterParentheses('(()())(())(()(()))')); // "()()()()(())"
console.log(removeOuterParentheses('()()')); // ""
