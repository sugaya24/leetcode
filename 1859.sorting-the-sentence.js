/**
 * @param {string} s
 * @return {string}
 */
function sortSentence(s) {
  return s
    .split(' ')
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((word) => word.slice(0, word.length - 1))
    .join(' ');
}

console.log(sortSentence('is2 sentence4 This1 a3'));
