function minDeletion(nums: number[]): number {
  let deletion = 0;
  let i = 0;
  while (i < nums.length - 1) {
    if (i % 2 === 0 && nums[i + 1] === nums[i]) {
      nums.splice(i, 1);
      deletion += 1;
      continue;
    }
    i += 1;
  }
  return nums.length % 2 === 0 ? deletion : deletion + 1;
}

export default minDeletion;
