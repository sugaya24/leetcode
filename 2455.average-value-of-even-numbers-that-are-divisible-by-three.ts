function averageValue(nums: number[]): number {
  let count = 0;
  const sum = nums.reduce((acc, cur) => {
    if (cur % 2 === 0 && cur % 3 === 0) {
      count++;
      return acc + cur;
    } else {
      return acc;
    }
  }, 0);
  return sum === 0 ? 0 : Math.floor(sum / count);
}

export default averageValue;
