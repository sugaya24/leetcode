/**
 * @param {string[]} A
 * @return {string[]}
 */
function commonChars(A) {
  let str = A[0].split('');
  for (let i = 1; i < A.length; i++) {
    let tmpStr = A[i].split('');
    str = str.filter((char) => {
      let idx = tmpStr.indexOf(char);
      return idx > -1 ? (tmpStr[idx] = true) : false;
    });
  }
  return str;
}

console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
console.log(commonChars(['accccccc', 'abbb', 'aa']));
