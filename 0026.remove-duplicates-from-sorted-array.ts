function removeDuplicates(nums: number[]): number {
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const next = nums[i];
    if (cur === next) {
      nums.splice(i, 1);
      i--;
    }
    cur = next;
  }
  return nums.length;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
