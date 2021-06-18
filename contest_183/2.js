/**
 * @param {string} s
 * @return {number}
 */
function numSteps(s) {
  str = s.split('');
  console.log(typeof str);
  let isOdd = str[str.length - 1] === '1';
  let step = 0;

  while (true) {
    if (isOdd) {
      let flag = false;
      for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '0') {
          str[i] = '1';
          flag = true;
          break;
        } else {
          str[i] = '0';
        }
      }
      if (!flag) str.unshift('1');
      console.log(str);
      return;
    } else {
      // console.log('even');
      str = str.join('');
      console.log(str);
    }
  }

  return step;
}

console.log(numSteps('1101'));
console.log(numSteps('1111'));
console.log(numSteps('10'));
// console.log(numSteps('1'));
// console.log(
//   numSteps('1111011110000011100000110001011011110010111001010111110001')
// );
