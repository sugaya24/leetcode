function isSubsequence(s: string, t: string): boolean {
  let subsequence = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[subsequence] === t[i]) {
      subsequence++;
    }
  }
  return subsequence === s.length;
}

export default isSubsequence;
