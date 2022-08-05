export function titleToNumber(columnTitle: string): number {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let digit = 1;
  let ans = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    ans += Math.pow(26, digit - 1) * (ALPHABET.indexOf(columnTitle[i]) + 1);
    digit++;
  }
  return ans;
}

// titleToNumber("A"); // 1
// titleToNumber("AB"); // 28
// titleToNumber("ZY"); // 701
