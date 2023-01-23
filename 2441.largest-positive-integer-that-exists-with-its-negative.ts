function findMaxK(nums: number[]): number {
  let maxK = -1;
  for (const num of nums) {
    if (nums.includes(-num) && num > maxK) {
      maxK = num;
    }
  }
  return maxK;
}

export default findMaxK;
