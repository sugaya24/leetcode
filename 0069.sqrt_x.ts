function mySqrt(x: number): number {
  let left = 0,
    right = x;
  while (left <= right) {
    const mid = Math.ceil((left + right) / 2);
    if (mid * mid <= x && x < (mid + 1) ** 2) {
      return mid;
    }
    if (x < mid ** 2) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

export default mySqrt;
