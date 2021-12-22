function maxDistance(colors: number[]): number {
  let maxD = 0;
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      if (i !== j && colors[i] !== colors[j]) {
        maxD = Math.max(Math.abs(i - j), maxD);
      }
    }
  }
  return maxD;
}

export default maxDistance;
