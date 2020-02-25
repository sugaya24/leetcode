/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
  let ascending = JSON.parse(JSON.stringify(heights));
  ascending.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== ascending[i]) count++;
  }
  return count;
}

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
