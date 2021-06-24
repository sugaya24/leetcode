function largestOddNumber(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i] % 2 === 1) return num.slice(0, i + 1);
  }
  return '';
}

console.log(largestOddNumber('52'));
console.log(largestOddNumber('4206'));
console.log(largestOddNumber('3691669784801845146'));
