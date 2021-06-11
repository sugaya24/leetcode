/**
 * @param {string} sentence
 * @return {boolean}
 */
function checkIfPangram(sentence) {
  const allAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (const c of allAlphabet) {
    if (sentence.indexOf(c) === -1) return false;
  }
  return true;
}

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')); // ture
console.log(checkIfPangram('leetcode')); //false
