export function countGoodRectangles(rectangles: number[][]): number {
  const minLengths = rectangles
    .map(([a, b]) => Math.min(a, b))
    .sort((a, b) => b - a);
  let count = 0;
  const max = minLengths[0];
  for (let i = 0; i < minLengths.length; i++) {
    if (max === minLengths[i]) {
      count++;
    }
  }
  return count;
}
