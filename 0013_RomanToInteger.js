/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNum = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const decimal = [1, 5, 10, 50, 100, 500, 1000];

  let len;
  let result = 0;

  // 一番右は無条件で足す
  result += decimal[romanNum.indexOf(s[s.length - 1])];

  // 一番左のローマ数字から比べる
  for (len = s.length - 1; len > 0; len--) {
    // currentPosition: 現在位置のローマ数字
    currentPosition = romanNum.indexOf(s[len]);

    // leftPosition: currentPositionの一つ左のローマ数字
    leftPosition = romanNum.indexOf(s[len - 1]);

    // romanNumのindexで比較を行う
    if (leftPosition >= currentPosition) {
      // 左側の数字を足す
      result += decimal[leftPosition];
    } else {
      // 左側の数字を引く
      result -= decimal[leftPosition];
    }
  }
  return result;
};

// expectation => "9"
console.log(romanToInt('IX'));

// expectation => "58"
console.log(romanToInt('LVIII'));

// expectation => "1994"
console.log(romanToInt('MCMXCIV'));

// expectation => "1612
console.log(romanToInt('MDCXII'));

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//   const map = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };
//   let i = s.length;
//   let result = 0;

//   while (i--) {
//     const curr = map[s.charAt(i)];
//     console.log(`curr is ${curr}`);

//     const prev = map[s.charAt(i - 1)];
//     console.log(`prev is ${prev}\n`);

//     result += curr;

//     if (prev < curr) {
//       result -= prev;
//       i -= 1;
//     }
//   }

//   return result;
// };

// romanToInt('LVIII');
// // console.log(romanToInt('III'));
// // console.log(romanToInt('IV'));
// // console.log(romanToInt('LVIII'));
// // console.log(romanToInt('MCMXCIV'));
