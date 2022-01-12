export function halvesAreAlike(s: string): boolean {
  let count = 0;
  const bowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < s.length; i++) {
    if (bowels.includes(s[i])) {
      if (i < s.length / 2) {
        count++;
      } else {
        count--;
      }
    }
  }
  return count === 0;
}
