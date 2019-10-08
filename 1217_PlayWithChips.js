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
  if (even < odd) {
    return even;
  }
  return odd;
};

// Math.max()
