function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;
  const rows = matrix.length;
  const cols = matrix[0].length;
  let l = 0;
  let r = rows * cols - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    const mid_element = matrix[Math.floor(mid / cols)][Math.floor(mid % cols)];
    if (mid_element === target) {
      return true;
    } else if (mid_element < target) {
      l = mid + 1;
    } else if (mid_element > target) {
      r = mid - 1;
    }
  }
  return false;
}

export default searchMatrix;
