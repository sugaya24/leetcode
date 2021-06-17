/**
 * @param {string} s
 * @return {string}
 */
function replaceDigits(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const sArr = s.split('');
  for (let i = 0; i < sArr.length; i++) {
    if (alphabet.indexOf(sArr[i]) === -1) {
      const index = alphabet.indexOf(sArr[i - 1]) + +sArr[i];
      sArr[i] = alphabet[index];
    }
  }
  return sArr.join('');
}

console.log(replaceDigits('a1c1e1'));
console.log(replaceDigits('a1b2c3d4e'));
