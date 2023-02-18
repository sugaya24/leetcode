function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const set = new Set();
    let curLen = 0;
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        break;
      } else {
        set.add(s[j]);
        max = Math.max(max, ++curLen);
      }
    }
  }
  return max;
}

export default lengthOfLongestSubstring;
