export function squareIsWhite(coordinates: string): boolean {
  const map = new Map<string, number>([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
  ]);
  const [x, y]: string[] = coordinates.split('');
  return !(
    (map.get(x) % 2 === 1 && +y % 2 === 1) ||
    (map.get(x) % 2 === 0 && +y % 2 === 0)
  );
}
