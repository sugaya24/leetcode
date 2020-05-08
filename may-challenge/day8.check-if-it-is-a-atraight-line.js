function checkStraightLine(coordinates) {
  if (coordinates.length < 3) return true;
  const initIntX = coordinates[1][0] - coordinates[0][0];
  const initIncY = coordinates[1][1] - coordinates[0][1];
  for (let i = 1; i < coordinates.length; i++) {
    const incX = coordinates[i][0] - coordinates[0][0];
    const incY = coordinates[i][1] - coordinates[0][1];
    if (initIncY * incX !== initIntX * incY) return false;
  }
  return true;
}

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);
