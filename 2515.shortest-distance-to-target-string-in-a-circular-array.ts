function closetTarget(
  words: string[],
  target: string,
  startIndex: number,
): number {
  let dist = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === target) {
      if (i === startIndex) {
        return 0;
      } else if (i < startIndex) {
        dist = Math.min(dist, startIndex - i, words.length - startIndex + i);
      } else {
        dist = Math.min(dist, i - startIndex, startIndex + words.length - i);
      }
    }
  }
  return dist === Infinity ? -1 : dist;
}

export default closetTarget;
