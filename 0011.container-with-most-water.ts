function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let ans = 0;
  while (left < right) {
    const lowerHight = Math.min(height[left], height[right]);
    ans = Math.max(lowerHight * (right - left), ans);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
}

export default maxArea;
