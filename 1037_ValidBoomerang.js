/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  let xPoints = [];
  let yPoints = [];
  points.forEach(element => {
    xPoints.push(element[0]);
    yPoints.push(element[1]);
  });
  // console.log(points[0], points[1], points[2]);
  // console.log(`p1,p2 ->${points[1][0] === points[2][0]}`);

  if (
    JSON.stringify(points[0]) === JSON.stringify(points[1]) ||
    JSON.stringify(points[1]) === JSON.stringify(points[2]) ||
    JSON.stringify(points[0]) === JSON.stringify(points[2])
  ) {
    console.log('false');

    return false;
  }

  // if (
  //   Math.abs(xPoints[0] - xPoints[1]) === Math.abs(xPoints[1] - xPoints[2]) &&
  //   Math.abs(yPoints[0] - yPoints[1]) === Math.abs(yPoints[1] - yPoints[2])
  // ) {
  x1 = xPoints[1] - xPoints[0];
  x2 = xPoints[2] - xPoints[1];
  y1 = yPoints[1] - yPoints[0];
  y2 = yPoints[2] - yPoints[1];
  if (x1 * y2 === x2 * y1) {
    console.log('false');

    return false;
  }

  console.log('true');

  return true;
};

isBoomerang([
  [1, 1],
  [2, 3],
  [3, 2]
]);
isBoomerang([
  [1, 1],
  [2, 2],
  [3, 3]
]);
isBoomerang([
  [0, 0],
  [1, 1],
  [1, 1]
]);
// true false false
