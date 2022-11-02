function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid ** 2 === x) {
      return mid;
    }
    if (x < mid ** 2) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

export default mySqrt;
