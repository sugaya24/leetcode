export function cellsInRange(s: string): string[] {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [start, end] = s.split(':');
  const result = [];
  const diff = ALPHABET.indexOf(end[0]) - ALPHABET.indexOf(start[0]);
  for (let i = 0; i <= diff; i++) {
    for (let j = Number(start[1]) - 1; j < Number(end[1]); j++) {
      result.push(`${ALPHABET[ALPHABET.indexOf(start[0]) + i]}${j + 1}`);
    }
  }
  return result;
}
