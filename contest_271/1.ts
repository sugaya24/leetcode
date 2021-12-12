function countPoints(rings: string): number {
  const robs: string[][] = new Array();
  for (let i = 0; i < 10; i++) {
    robs.push(new Array());
  }

  for (let i = 0; i < rings.length / 2; i = i + 1) {
    if (!robs[+rings[i * 2 + 1]].includes(rings[i * 2])) {
      robs[+rings[i * 2 + 1]].push(rings[i * 2]);
    }
  }

  let count = 0;
  for (const n of robs) {
    if (n.length === 3) count++;
  }
  return count;
}

console.log(countPoints('B0B6G0R6R0R6G9'));
console.log(countPoints('B0R0G0R9R0B0G0'));
