/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let arr = [0, 1, 1];
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  if (n > 2) {
    for (let i = 0; i < n - 2; i++) {
      arr.push(arr.reduce((a, b) => a + b, 0));
      arr.shift();
    }
  }
  return arr[2];
};

console.log(tribonacci(4)); // 4
console.log(tribonacci(3)); // 2
console.log(tribonacci(25)); // 1389537
