/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
  even = 0;
  odd = 0;
  chips.forEach(element => {
    if (element % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  });
  return Math.min(even, odd);
};

// Math.max()
