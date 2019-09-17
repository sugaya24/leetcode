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
