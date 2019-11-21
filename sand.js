// 13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  integer = [1, 5, 10, 50, 100, 500, 1000];
  result = 0;

  if (s.length === 1) {
    return integer[roman.indexOf(s[0])];
  }
  arr = s.split('');
  result += integer[roman.indexOf(s[s.length - 1])];
  for (let i = arr.length - 1; i > 0; i--) {
    if (integer[roman.indexOf(s[i])] <= integer[roman.indexOf(s[i - 1])]) {
      result += integer[roman.indexOf(s[i - 1])];
    } else if (
      integer[roman.indexOf(s[i])] > integer[roman.indexOf(s[i - 1])]
    ) {
      result -= integer[roman.indexOf(s[i - 1])];
    }
  }
  return result;
};

romanToInt('V');
romanToInt('III');
romanToInt('IV');
romanToInt('IX');
romanToInt('LVIII');
romanToInt('MCMXCIV');
