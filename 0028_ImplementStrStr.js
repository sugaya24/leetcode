/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // should solve it without builtin methods.
  if (!haystack.includes(needle)) {
    return -1;
  } else if (needle.length === 0) {
    return 0;
  } else {
    return haystack.indexOf(needle);

    // while (i < haystack.length) {
    // // 文字が一致しなければhaystackのindexを一つずらす
    // if (haystack[i] !== needle[j]) {
    //   console.log('i, j = ' + i + ', ' + j);
    //   console.log('i, j = ' + haystack[i] + ', ' + needle[j]);
    //   console.log('-------------');
    //   i++;
    //   j = 0;
    //   // 文字が一致したらhaystackとneedleのindexを一つずらす
    // } else if (haystack[i] === needle[j]) {
    //   console.log('** same! -> ' + i, j);
    //   console.log('i, j = ' + haystack[i] + ', ' + needle[j]);
    //   console.log('==============');

    //   i++;
    //   j++;
    //   // needleのindexがneedleのlengthと一致したら終わり
    //   if (j === needle.length) {
    //     console.log('Found!!!');
    //     return i - j;
    //   }
    // }
    // }
  }
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaabbaa', 'bb')); // 3
console.log(strStr('apple', 'e')); // 4
console.log(strStr('bbbbababbbaabbba', 'abb')); // 6
console.log(strStr('bbababb', 'abb')); // 4
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('world', ''));
