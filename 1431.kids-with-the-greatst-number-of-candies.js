/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  const maxCount = Math.max(...candies);
  return candies.map((candyCount) => candyCount + extraCandies >= maxCount);
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
