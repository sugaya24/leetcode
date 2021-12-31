export function executeInstructions(
  n: number,
  startPos: number[],
  s: string
): number[] {
  const ans: number[] = [];
  for (let i = 0; i < s.length; i++) {
    let count: number = 0;
    const curPos: number[] = [...startPos];
    for (let j = i; j < s.length; j++) {
      const move: string = s[j];
      switch (move) {
        case `R`:
          curPos[1]++;
          break;
        case `L`:
          curPos[1]--;
          break;
        case `U`:
          curPos[0]--;
          break;
        case `D`:
          curPos[0]++;
          break;
      }
      if (
        curPos[0] < 0 ||
        n - 1 < curPos[0] ||
        curPos[1] < 0 ||
        n - 1 < curPos[1]
      ) {
        break;
      }
      count++;
    }
    ans.push(count);
  }
  return ans;
}
