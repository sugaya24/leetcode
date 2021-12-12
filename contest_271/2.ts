function subArrayRanges(nums: number[]): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let min = Infinity;
    let max = -Infinity;
    for (let j = i; j < nums.length; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      console.log('min: ', min, 'max: ', max);
      console.log(nums[j]);
      sum += max - min;
    }
  }
  return sum;
}

// console.log(subArrayRanges([1, 2, 3])); // 4
// console.log(subArrayRanges([1, 3, 3])); // 4
// console.log(subArrayRanges([4, -2, -3, 4, 1])); // 59
