function countAsterisks(s: string): number {
  return s.split('|').reduce((acc, str, i) => {
    let count = 0;
    for (const c of str) {
      if (i % 2 === 0 && c === '*') {
        count++;
      }
    }
    return count + acc;
  }, 0);
}

export default countAsterisks;
