/**
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
  let count = 0;
  const map = new Map();
  const str = new Set('balloon');
  for (const char of text) {
    if (!str.has(char)) continue;
    map.set(char, (map.get(char) || 0) + 1);
    if (
      map.get('b') > 0 &&
      map.get('a') > 0 &&
      map.get('n') > 0 &&
      map.get('l') > 1 &&
      map.get('o') > 1
    ) {
      count++;
      map.set('b', map.get('b') - 1);
      map.set('a', map.get('a') - 1);
      map.set('n', map.get('n') - 1);
      map.set('l', map.get('l') - 2);
      map.set('o', map.get('o') - 2);
    }
  }
  return count;
}

console.log(maxNumberOfBalloons('nlaebolko')); // 1
console.log(maxNumberOfBalloons('loonbalxballpoon')); // 2
console.log(maxNumberOfBalloons('leetcode')); // 0
