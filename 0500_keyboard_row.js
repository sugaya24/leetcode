/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  const res = [];
  const map = new Map();
  map.set(0, ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']);
  map.set(1, ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']);
  map.set(2, ['z', 'x', 'c', 'v', 'b', 'n', 'm']);
  for (const word of words) {
    let flag = true;
    const tmp = [];
    for (const char of word) {
      let row;
      for (let i = 0; i < map.size; i++) {
        if ([...map.values()][i].includes(char.toLowerCase())) row = i;
      }
      tmp.push(row);
      if (tmp[0] !== row) {
        tmp.shift();
        flag = false;
        break;
      }
    }
    if (flag) res.push(word);
  }
  return res;
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])); // ["Alaska", "Dad"]
