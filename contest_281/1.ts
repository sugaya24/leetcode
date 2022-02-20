export function countEven(num: number): number {
  let count = 0;
  for (let i = 2; i <= num; i++) {
    const n = String(i).split('').map(Number);
    let sum = 0;
    n.forEach((n) => {
      sum += n;
    });
    if (sum % 2 === 0) {
      count++;
    }
  }
  return count;
}
