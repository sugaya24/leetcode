/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  let maxCount = 0;
  candies.forEach((candyCount) => (maxCount = Math.max(maxCount, candyCount)));
  return candies.map((candyCount) => candyCount + extraCandies >= maxCount);
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
