function differenceOfSum(nums: number[]): number {
  const elementSum = nums.reduce((acc, cur) => acc + cur, 0);
  let digitSum = 0;
  for (let num of nums) {
    while (num >= 1) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }
  }
  return Math.abs(elementSum - digitSum);
}

export default differenceOfSum;
