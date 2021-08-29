function kthLargestNumber(nums: string[], k: number): string {
  // 桁で一度ソート
  // 文字列でソート
  let asc: string[] = nums.sort((a, b) => a.length - b.length);
  let ans: string[] = [];
  let digit = asc[0].length,
    start = 0,
    end = 0;
  // 同じ桁数の中でソート
  for (let i = 0; i < asc.length; i++) {
    if (digit !== asc[i].length) {
      digit = asc[i].length;
      end = i;
      ans = ans.concat(asc.slice(start, end).sort());
      start = i;
    }
    if (i === asc.length - 1) {
      end = i + 1;
      ans = ans.concat(asc.slice(start, end).sort());
    }
  }
  return ans[ans.length - k];
}

// console.log(kthLargestNumber(['3', '6', '7', '10'], 4));
// console.log(kthLargestNumber(['7', '3', '6', '10'], 4));
// console.log(kthLargestNumber(['2', '21', '12', '1'], 3));
// console.log(kthLargestNumber(['0', '0'], 2));
// console.log(kthLargestNumber(['123', '312', '213'], 2));
// console.log(kthLargestNumber(['3', '6', '7', '10'], 4));
