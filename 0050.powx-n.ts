function myPow(x: number, n: number): number {
  let ans = 1.0;
  let N = Math.abs(n);
  while (N > 0) {
    if (N % 2 === 1) {
      ans *= x;
    }
    x *= x;
    N = Math.floor(N / 2);
  }
  return n < 0 ? 1 / ans : ans;
}

export default myPow;
