function alternateDigitSum(n: number): number {
  let sum = 0;
  String(n)
    .split('')
    .forEach((num, i) => {
      if (i % 2 === 0) {
        sum += +num;
      } else {
        sum -= +num;
      }
    });
  return sum;
}
