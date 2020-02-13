/**
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
  const len = arr.length;
  let max = 0;
  max = arr.slice(1, len).sort((a, b) => b - a)[0];
  for (let i = 0; i < len; i++) {
    if (max === arr[i]) {
      max = arr.slice(i + 1, len).sort((a, b) => b - a)[0];
    }
    if (i !== len - 1) {
      arr[i] = max;
    } else {
      arr[i] = -1;
    }
  }
  return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([56903, 18666, 60499, 57517, 26961])); // [60499,60499,57517,26961,-1]
