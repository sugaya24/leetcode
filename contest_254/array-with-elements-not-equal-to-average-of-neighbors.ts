function rearrangeArray(nums: number[]): number[] {
  const ans: number[] = [];
  const asc = nums.sort((a, b) => a - b);
  let evenIdx = 0,
    oddIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      // console.log('even', asc[i]);
      ans.push(asc[evenIdx]);
      evenIdx++;
    } else {
      // console.log('odd', asc[asc.length - 1 - j]);
      ans.push(asc[asc.length - 1 - oddIdx]);
      oddIdx++;
    }
  }
  return ans;
}

console.log(rearrangeArray([1, 2, 3, 4, 5]));
console.log(rearrangeArray([6, 2, 0, 9, 7]));
