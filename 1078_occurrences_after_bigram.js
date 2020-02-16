/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
function findOccurrences(text, first, second) {
  const res = [];
  text = text.split(' ');
  const search = [first, second];
  for (let i = 0; i < text.length - 2; i++) {
    if (JSON.stringify([text[i], text[i + 1]]) === JSON.stringify(search)) {
      res.push(text[i + 2]);
    }
  }
  return res;
}

console.log(
  findOccurrences('alice is a good girl she is a good student', 'a', 'good')
);
console.log(findOccurrences('we will we will rock you', 'we', 'will'));

// textをsplitで配列にする
// [first, seconde]の配列を作る
// firstとsecondがくっついてる配列を探す
// その直後の単語をresにpush(この時のindexを保持する)
// その場所からfirstとsecondeがくっついてる配列を探す
// その直後の単語をresにpush
