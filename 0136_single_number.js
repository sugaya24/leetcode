/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let set = new Set();
  nums.map(n => {
    set.has(n) ? set.delete(n) : set.add(n);
  });
  console.log(set.values().next());

  return set.values().next().value;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
