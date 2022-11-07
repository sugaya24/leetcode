function findCircleNum(isConnected: number[][]): number {
  let count = 0;
  const visited = new Set();
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }
  function dfs(i: number) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        visited.add(j);
        dfs(j);
      }
    }
  }
  return count;
}

export default findCircleNum;
