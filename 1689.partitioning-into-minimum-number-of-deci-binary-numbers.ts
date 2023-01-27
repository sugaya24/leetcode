function minPartitions(n: string): number {
  let max = 0;
  for (const c of n) {
    max = Math.max(max, Number(c));
  }
  return max;
}

export default minPartitions;
