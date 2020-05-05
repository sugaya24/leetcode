const firstUniqChar = (s) => {
  const map = new Map();
  for (const ch of s) {
    map.set(ch, map.get(ch) + 1 || 1);
  }

  map.forEach((value, ch) => {
    if (value > 1) map.delete(ch);
  });

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) return i;
  }

  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
