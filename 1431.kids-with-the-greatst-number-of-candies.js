/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  return candies.map(
    (candyCount) => candyCount + extraCandies >= Math.max(...candies)
  );
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
