function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);
  const result = [];
  for (const query of queries) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] <= query) {
        sum += nums[i];
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

export default answerQueries;
