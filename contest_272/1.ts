export function firstPalindrome(words: string[]): string {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const left = words[i][j];
      const right = words[i][words[i].length - 1 - j];
      if (left !== right) break;
      if (j >= words[i].length - 1 - j) return words[i];
    }
  }
  return '';
}
