export function countGoodRectangles(rectangles: number[][]): number {
  let count = 0;
  let max = 0;
  for (let i = 0; i < rectangles.length; i++) {
    const minSide = Math.min(rectangles[i][0], rectangles[i][1]);
    if (minSide > max) {
      count = 0;
      max = minSide;
    }
    if (minSide === max) count++;
  }
  return count;
}
