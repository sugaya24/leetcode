/**
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
  let right = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const cur = arr[i];
    arr[i] = right;
    right = Math.max(cur, right);
  }
  return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([56903, 18666, 60499, 57517, 26961])); // [60499,60499,57517,26961,-1]
