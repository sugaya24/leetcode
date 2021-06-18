/**
 * @param {number[]} rating
 * @return {number}
 */
function numTeams(rating) {
  if (rating.length < 3) return 0;

  let max = 0;
  let min = Infinity;
  for (const r of rating) {
    max = Math.max(max, r);
  }
  return;
}

console.log(numTeams([2, 5, 3, 4, 1]));
console.log(numTeams([2, 1, 3]));
console.log(numTeams([1, 2, 3, 4]));
