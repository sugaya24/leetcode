/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let count = 0;
  while (num !== 0) {
    count++;
    if (num & 1) {
      num = num >> 1;
      num = num << 1;
    } else {
      num = num >> 1;
    }
  }
  return count;
};

// console.log(numberOfSteps(14)); // Step 6
// console.log(numberOfSteps(8)); // Step 4
console.log(numberOfSteps(123)); // Step 12
