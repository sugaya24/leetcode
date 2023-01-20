function minimumRecolors(blocks: string, k: number): number {
  let count = Infinity;
  let white = 0;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === 'W') {
      white++;
    }
    if (i >= k - 1) {
      count = Math.min(count, white);
      if (blocks[i - k + 1] === 'W') {
        white--;
      }
    }
  }
  return count < 0 ? 0 : count;
}

export default minimumRecolors;
