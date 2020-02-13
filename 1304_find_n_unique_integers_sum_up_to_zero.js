/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
  const res = [];
  for (let i = 1; i < Math.floor(n / 2) + 1; i++) {
    res.push(i, -i);
  }
  if (n % 2) res.push(0);
  return res;
}

console.log(sumZero(5)); // [-7,-1,1,3,4]
console.log(sumZero(3)); // [-1,0,1]
console.log(sumZero(1)); // [0]
