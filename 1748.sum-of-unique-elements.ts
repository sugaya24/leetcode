export function sumOfUnique(nums: number[]): number {
  let sum = 0;
  nums.forEach((num) => {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      sum += num;
    }
  });
  return sum;
}
