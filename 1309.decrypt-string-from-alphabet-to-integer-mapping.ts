export function freqAlphabets(s: string): string {
  const CHAR_CODE_OFFSET = 96;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    console.log(s[i + 2]);
    if (s[i + 2] === '#') {
      cur = s.slice(i, i + 2);
      i += 2;
    }
    result += String.fromCharCode(parseInt(cur) + CHAR_CODE_OFFSET);
  }
  return result;
}
