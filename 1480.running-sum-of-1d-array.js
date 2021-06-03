/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  const res = [];
  nums.map((num) => {
    if (res.length === 0) {
      res.push(num);
    } else {
      res.push(res[res.length - 1] + num);
    }
  });
  return res;
};
