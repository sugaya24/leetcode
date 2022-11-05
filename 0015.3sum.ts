function threeSum(nums: number[]): number[][] {
  const res = [];
  const sorted = nums.sort((a, b) => a - b);
  for (let left = 0; left < sorted.length - 2; left++) {
    if (left > 0 && sorted[left] === sorted[left - 1]) continue;
    let mid = left + 1;
    let right = sorted.length - 1;
    while (mid < right) {
      let s = sorted[left] + sorted[mid] + sorted[right];
      if (s === 0) {
        res.push([sorted[left], sorted[mid], sorted[right]]);
        while (sorted[mid] === sorted[mid + 1]) {
          mid++;
        }
        while (sorted[right] === sorted[right - 1]) {
          right--;
        }
        mid++;
        right--;
      } else if (s < 0) {
        mid++;
      } else {
        right--;
      }
    }
  }
  return res;
}

export default threeSum;
