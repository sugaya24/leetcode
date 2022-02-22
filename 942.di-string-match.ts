export function diStringMatch(s: string): number[] {
  const result: number[] = [];
  const arr: number[] = new Array(s.length + 1).fill(0).map((_, i) => i);
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === 'I') {
      result.push(arr.shift());
    } else {
      result.push(arr.pop());
    }
  }
  return result;
}
