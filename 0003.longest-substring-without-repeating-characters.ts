function lengthOfLongestSubstring(s: string): number {
  const seen = new Set();
  let longest = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    while (seen.has(s[r])) {
      seen.delete(s[l]);
      l++;
    }
    seen.add(s[r]);
    longest = Math.max(longest, seen.size);
  }
  return longest;
}

export default lengthOfLongestSubstring;
