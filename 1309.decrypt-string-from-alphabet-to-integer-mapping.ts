export function freqAlphabets(s: string): string {
  const alphabet = '_abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '#') {
      result = alphabet[parseInt(s[i - 2] + s[i - 1])] + result;
      i -= 2;
    } else {
      result = alphabet[parseInt(s[i])] + result;
    }
  }
  return result;
}
