const majorityElement = (nums) => {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value > nums.length / 2) return key;
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
