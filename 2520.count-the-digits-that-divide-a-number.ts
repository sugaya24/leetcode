function countDigits(num: number): number {
  let count = 0;
  num
    .toString()
    .split('')
    .forEach((n) => {
      if (num % Number(n) === 0) {
        count++;
      }
    });
  return count;
}

export default countDigits;
