function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = m && mat[0].length;
  const q: number[][] = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (mat[r][c] === 0) {
        q.push([r, c]);
      } else {
        mat[r][c] = -1;
      }
    }
  }

  const dir = [0, 1, 0, -1, 0];
  while (q.length > 0) {
    let [r, c] = q.shift()!;
    for (let i = 0; i < 4; i++) {
      const mr = r + dir[i];
      const mc = c + dir[i + 1];
      if (mr < 0 || mc < 0 || mr === m || mc === n || mat[mr][mc] !== -1) {
        continue;
      }
      mat[mr][mc] = mat[r][c] + 1;
      q.push([mr, mc]);
    }
  }

  return mat;
}

export default updateMatrix;
