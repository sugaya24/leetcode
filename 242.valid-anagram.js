/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const sMap = new Map();
  const tMap = new Map();
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }
  for (const [key, value] of sMap) {
    if (!tMap.has(key) || value !== tMap.get(key)) {
      return false;
    }
  }
  return true;
}
// @lc code=end

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
