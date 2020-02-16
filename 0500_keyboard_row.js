/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  return words.filter(
    (w) =>
      /^[qwertyuiop]*$/i.test(w) ||
      /^[asdfghjkl]*$/i.test(w) ||
      /^[zxcvbnm]*$/i.test(w)
  );
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])); // ["Alaska", "Dad"]
