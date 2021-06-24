function isCovered(ranges: number[][], left: number, right: number): boolean {
  const inclusiveRange = new Set();
  for (let i = left; i <= right; i++) {
    inclusiveRange.add(i);
  }
  // ranges[i]の中身全てループ -> 0からranges[i].lengthまで
  for (let i = 0; i < ranges.length; i++) {
    // startはranges[i][0], endはranges[i][1]なのでstartからendまでループさせる
    for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
      if (inclusiveRange.has(j)) inclusiveRange.delete(j);
    }
  }
  return inclusiveRange.size === 0;
}

console.log(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    5
  )
); // true
console.log(
  isCovered(
    [
      [1, 10],
      [10, 20],
    ],
    21,
    21
  )
); // false
console.log(isCovered([[1, 50]], 1, 50)); // true
