/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let arr;
  let reverseArr;

  arr = x
    .toString()
    .split('')
    .join();
  reverseArr = x
    .toString()
    .split('')
    .reverse()
    .join();
  console.log(arr, reverseArr);

  if (arr == reverseArr) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
};

isPalindrome(10);
