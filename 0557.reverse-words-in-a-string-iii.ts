export function reverseWords(s: string): string {
  let res = '';
  let word = '';
  for (const c of s) {
    if (c === ' ') {
      res += word + ' ';
      word = '';
    } else {
      word = c + word;
    }
  }
  return res + word;
}
