function findJudge(n: number, trust: number[][]): number {
  // mapに信頼された数を記録
  // setでは誰かを信頼したらsetの中から消していく
  const map = new Map<number, number>();
  const set = new Set<number>();
  for (let i = 1; i <= n; i++) {
    map.set(i, 0);
    set.add(i);
  }
  for (const [p, t] of trust) {
    if (set.has(p)) set.delete(p);
    map.set(t, map.get(t)! + 1);
  }
  if (set.size !== 1) {
    return -1;
  } else {
    return map.get([...set][0]) === n - 1 ? [...set][0] : -1;
  }
}

export default findJudge;
