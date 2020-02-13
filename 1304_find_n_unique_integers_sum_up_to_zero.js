/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const res = [];
  for (let i = 0; i < Math.floor(n / 2); i++) {
    res.push(i + 1, -i - 1);
  }
  if (n % 2 !== 0) res.push(0);
  return res;
};

console.log(sumZero(5)); // [-7,-1,1,3,4]
console.log(sumZero(3)); // [-1,0,1]
console.log(sumZero(1)); // [0]
