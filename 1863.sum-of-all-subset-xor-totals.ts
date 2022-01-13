export function subsetXORSum(nums: number[]): number {
  const subsets: number[][] = [[]];
  let sum = 0;
  for (const el of nums) {
    const last = subsets.length - 1;
    for (let i = 0; i <= last; i++) {
      subsets.push([...subsets[i], el]);
    }
  }

  for (let i = 0; i < subsets.length; i++) {
    let xor = 0;
    subsets[i].forEach((n) => {
      xor ^= n;
    });
    sum += xor;
  }

  return sum;
}
