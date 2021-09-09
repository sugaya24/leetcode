function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      const indices = map.get(nums[i]);
      indices.push(i);
    } else {
      map.set(nums[i], [i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      if (nums[i] !== target - nums[i]) {
        ans = [map.get(nums[i])[0], map.get(target - nums[i])[0]];
      } else {
        ans = map.get(nums[i]).slice(0, 2);
      }
    }
  }
  return ans;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
