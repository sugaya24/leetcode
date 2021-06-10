/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatches(items, ruleKey, ruleValue) {
  let count = 0;
  let keyIndex = null;
  switch (ruleKey) {
    case 'type':
      keyIndex = 0;
      break;
    case 'color':
      keyIndex = 1;
      break;
    case 'name':
      keyIndex = 2;
      break;
    default:
      break;
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i][keyIndex] === ruleValue) count++;
  }
  return count;
}

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'lenovo'],
      ['phone', 'gold', 'iphone'],
    ],
    'color',
    'silver'
  )
);
