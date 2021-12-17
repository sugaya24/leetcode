export function findEvenNumbers(digits: number[]): number[] {
  const ans = new Set<number>();
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] % 2 === 0) {
      for (let j = 0; j < digits.length; j++) {
        if (i !== j) {
          for (let k = 0; k < digits.length; k++) {
            if (digits[k] !== 0 && j !== k && k !== i) {
              ans.add(+`${digits[k]}${digits[j]}${digits[i]}`);
            }
          }
        }
      }
    }
  }
  return [...ans].sort((a, b) => a - b);
}
