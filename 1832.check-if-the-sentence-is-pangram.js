/**
 * @param {string} sentence
 * @return {boolean}
 */
function checkIfPangram(sentence) {
  return new Set(sentence).size === 26;
}

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')); // ture
console.log(checkIfPangram('leetcode')); //false
