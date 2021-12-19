export function addSpaces(s: string, spaces: number[]): string {
  const arr = s.split('');
  for (let i = 0; i < spaces.length; i++) {
    arr[spaces[i]] = ` ${s[spaces[i]]}`;
  }
  return arr.join('');
}
