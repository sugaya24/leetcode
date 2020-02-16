/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
function findOccurrences(text, first, second) {
  const res = [];
  text = text.split(' ');
  for (let i = 0; i < text.length - 2; i++) {
    if (text[i] === first && text[i + 1] === second) res.push(text[i + 2]);
  }
  return res;
}

console.log(
  findOccurrences('alice is a good girl she is a good student', 'a', 'good')
); // ['girl', 'student']
console.log(findOccurrences('we will we will rock you', 'we', 'will')); // ['we', 'rock']
