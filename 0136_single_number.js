/**
 * @param {number[]} nums
 * @return {number}
 */
// TLE
var singleNumber = function(nums) {
  const countValues = (array, value) => {
    const counts = {};
    for (let i = 0; i < array.length; i++) {
      const key = array[i];
      counts[key] = counts[key] ? counts[key] + 1 : 1;
    }
    return counts[value];
  };
  let result;
  nums.forEach(value => {
    if (countValues(nums, value) === 1) {
      result = value;
    }
  });
  return result;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
