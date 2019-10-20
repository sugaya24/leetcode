/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }

  return -1;
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaabbaa', 'bb')); // 3
console.log(strStr('apple', 'e')); // 4
console.log(strStr('bbbbababbbaabbba', 'abb')); // 6
console.log(strStr('bbababb', 'abb')); // 4
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('world', ''));
