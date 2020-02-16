/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  const row1 = new Set('qwertyuiop');
  const row2 = new Set('asdfghjkl');
  const row3 = new Set('zxcvbnm');

  const isSameRow = (letters, row) => {
    return letters.every((letter) => row.has(letter));
  };

  return words.filter((word) => {
    const letters = word.toLowerCase().split('');
    return (
      isSameRow(letters, row1) ||
      isSameRow(letters, row2) ||
      isSameRow(letters, row3)
    );
  });
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])); // ["Alaska", "Dad"]
