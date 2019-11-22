// 13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
const romanMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);
var romanToInt = function(s) {
  result = 0;

  result += romanMap.get(s[s.length - 1]);
  for (let i = s.length - 1; i > 0; i--) {
    if (romanMap.get(s[i]) <= romanMap.get(s[i - 1])) {
      result += romanMap.get(s[i - 1]);
    } else if (romanMap.get(s[i]) > romanMap.get(s[i - 1])) {
      result -= romanMap.get(s[i - 1]);
    }
  }
  return result;
};
