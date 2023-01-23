function commonFactors(a: number, b: number): number {
  let count = 0;
  for (let i = 0; i <= Math.max(a, b); i++) {
    if (a % i === 0 && b % i === 0) count++;
  }
  return count;
}

export default commonFactors;
