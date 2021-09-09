function findGCD(nums: number[]): number {
  let ans = 1;
  const smallest = nums.reduce((a, b) => Math.min(a, b));
  const largest = nums.reduce((a, b) => Math.max(a, b));
  for (let i = 0; i <= smallest; i++) {
    if (smallest % i === 0 && largest % i === 0) ans = i;
  }
  return ans;
}

console.log(findGCD([2, 5, 6, 9, 10]));
console.log(findGCD([7, 5, 6, 8, 3]));
console.log(findGCD([3, 3]));
