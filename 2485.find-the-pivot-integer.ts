function pivotInteger(n: number): number {
  let sum = (n * (n + 1)) / 2;
  let leftSum = 0;
  let rightSum = sum;
  for (let i = 1; i <= n; i++) {
    leftSum += i;
    if (leftSum === rightSum) {
      return i;
    }
    rightSum -= i;
  }
  return -1;
}

export default pivotInteger;
