function insert(intervals: number[][], newInterval: number[]): number[][] {
  let [start, end] = newInterval;
  const left: number[][] = [];
  const right: number[][] = [];
  for (const interval of intervals) {
    const [first, last] = interval;
    if (last < start) {
      left.push(interval);
    } else if (first > end) {
      right.push(interval);
    } else {
      start = Math.min(start, first);
      end = Math.max(end, last);
    }
  }
  return [...left, [start, end], ...right];
}

export default insert;
