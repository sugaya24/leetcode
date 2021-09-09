function countQuadruplets(nums: number[]): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (
            nums[i] + nums[j] + nums[k] === nums[l] &&
            i < j &&
            j < k &&
            k < l
          ) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

console.log(countQuadruplets([1, 2, 3, 6]));
console.log(countQuadruplets([3, 3, 6, 4, 5]));
console.log(countQuadruplets([1, 1, 1, 3, 5]));
console.log(countQuadruplets([28, 8, 49, 85, 37, 90, 20, 8]));
