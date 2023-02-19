function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    const dist = r - l;
    max = Math.max(max, dist * Math.min(height[l], height[r]));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
}

export default maxArea;
