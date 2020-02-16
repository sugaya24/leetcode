/**
 * @param {string[]} A
 * @return {string[]}
 */
function commonChars(A) {
  let res = A[0].split('');
  for (let i = 0; i < A.length; i++) {
    res = findCommon(res, A[i].split(''));
  }
  return res;
}

const findCommon = (arr, other) => {
  return arr.filter((char) => {
    let i = other.indexOf(char);
    if (i !== -1) {
      other.splice(i, 1);
      return true;
    }
    return false;
  });
};

console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
console.log(commonChars(['accccccc', 'abbb', 'aa']));
