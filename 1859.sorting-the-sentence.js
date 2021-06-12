/**
 * @param {string} s
 * @return {string}
 */
function sortSentence(s) {
  const arr = s.split(' ');
  const newArr = [];
  for (const str of arr) {
    const idx = str[str.length - 1];
    newArr[idx - 1] = str.slice(0, -1);
  }
  return newArr.join(' ');
}

console.log(sortSentence('is2 sentence4 This1 a3'));
