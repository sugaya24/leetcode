/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {
  let maxLuckyNum = -1;
  const map = new Map();
  for (const n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  for (const n of map) {
    if (n[0] === n[1]) {
      maxLuckyNum = Math.max(n[0], maxLuckyNum);
    }
  }
  return maxLuckyNum;
}

console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3]));
console.log(findLucky([5]));
