/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let result = '';
  while (n--) {
    result = solve(result);
  }
  return result;
};

const solve = str => {
  if (str === '') return '1';
  let solved = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    solved += count + str[i];
  }
  return solved;
};

console.log(countAndSay(1)); // 1
console.log(countAndSay(2)); // 11
console.log(countAndSay(3)); // 21
console.log(countAndSay(4)); // 1211
console.log(countAndSay(5)); // 111221
console.log(countAndSay(6)); // 312211
