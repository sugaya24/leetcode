function partitionLabels(s: string): number[] {
  const last = Array(26).fill(0);
  const ans = [];
  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt(0) - 97;
    last[idx] = i;
  }
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    const idx = s[i].charCodeAt(0) - 97;
    end = Math.max(end, last[idx]);
    if (end === i) {
      ans.push(end - start + 1);
      start = end + 1;
    }
  }
  return ans;
}

console.log(partitionLabels('ababcbacadefegdehijhklij'));
console.log(partitionLabels('eccbbbbdec'));
