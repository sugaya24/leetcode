/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
  let evenCount = 0;
  for (let n of nums) {
    if (n.toString().length % 2 === 0) evenCount++;
  }
  return evenCount;
}

console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
console.log(findNumbers([555, 901, 482, 1771])); // 1
