/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let max = 0;
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    max = Math.max(
      Math.abs(points[i][0] - points[i + 1][0]),
      Math.abs(points[i][1] - points[i + 1][1])
    );
    result += max;
  }
  return result;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0]
  ])
);
console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2]
  ])
);
