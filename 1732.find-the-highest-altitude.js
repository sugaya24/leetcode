/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
  let highestAltitude = 0;
  let currentAltitude = 0;
  for (const p of gain) {
    currentAltitude += p;
    highestAltitude = Math.max(currentAltitude, highestAltitude);
  }
  return highestAltitude;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));
