/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(brackets) {
  // bracketsを左から見ていき、開き括弧であればarrにpushする
  // その後閉じ括弧が出てきたらarrからpopして比較し、正しいペアでなければfalseを返す
  let arr = [];
  for (let i = 0; i < brackets.length; i++) {
    const element = brackets[i];
    if (element == '(' || element == '[' || element == '{') {
      arr.push(element);
    } else {
      let pair = arr.pop() + element;
      if (pair != '()' && pair != '[]' && pair != '{}') {
        return false;
      }
    }
  }
  return arr.length == 0;
};

console.log(isValid('()[]{}')); // true
console.log(isValid('(()')); // false
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//   const brackets = s.toString().split('');
//   let checkBracket1 = 0;
//   let checkBracket2 = 0;
//   let checkBracket3 = 0;
//   let opens = [];
//   let closes = [];
//   for (let i = 0; i < brackets.length; i++) {
//     const element = brackets[i];
//     // 括弧の閉じる順番が合っていない場合falseを返す => "([)]"
//     // 開き括弧と閉じ括弧を配列に入れてreverse()と一緒か見る
//     if (element == '(' || element == '[' || element == '{') {
//       opens.push(element);
//     } else if (element == ')') {
//       closes.push('(');
//     } else if (element == ']') {
//       closes.push('[');
//     } else if (element == '}') {
//       closes.push('{');
//     }

//     if (element == '(') {
//       checkBracket1++;
//     } else if (element == '[') {
//       checkBracket2++;
//     } else if (element == '{') {
//       checkBracket3++;
//     } else if (element == ')') {
//       checkBracket1--;
//     } else if (element == ']') {
//       checkBracket2--;
//     } else if (element == '}') {
//       checkBracket3--;
//     }
//     // // checkBracketが0以外の場合falseを返す
//     // if (checkBracket1 != 0 || checkBracket2 != 0 || checkBracket3 != 0) {
//     //   console.log(`checkBracketが0以外`);
//     //   return false;
//     // }
//   }

//   // 開き括弧と閉じ括弧のreverseが同じでなければfalseを返す
//   if (JSON.stringify(opens) != JSON.stringify(closes.reverse())) {
//     console.log(`reverseが同じでない`);
//     console.log(
//       `${JSON.stringify(opens)}, ${JSON.stringify(closes.reverse())}`
//     );

//     return false;
//   }

//   // 括弧の開きと閉じの数が合っていない場合falseを返す
//   if (!(checkBracket1 == 0 && checkBracket2 == 0 && checkBracket3 == 0)) {
//     console.log(`括弧の数があってない`);

//     return false;
//   }

//   return true;
// };
