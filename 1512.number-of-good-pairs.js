/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
  const map = {};
  let count = 0;

  for (const num of nums) {
    if (map[num]) {
      count += map[num];
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }
  return count;
};
