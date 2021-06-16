/**
 * @param {string} s
 * @return {string}
 */
function replaceDigits(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetSet = new Set(alphabet);
  const strArr = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (alphabetSet.has(s[i])) {
      strArr[i] = s[i];
    } else {
      const index = alphabet.indexOf(s[i - 1]) + +s[i];
      strArr[i] = alphabet[index];
    }
  }
  return strArr.join('');
}

console.log(replaceDigits('a1c1e1'));
console.log(replaceDigits('a1b2c3d4e'));
