function searchMatrix(matrix: number[][], target: number): boolean {
  const flat = matrix.flatMap((n) => n);
  let l = 0;
  let r = flat.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (flat[mid] === target) return true;
    if (flat[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
}

export default searchMatrix;
