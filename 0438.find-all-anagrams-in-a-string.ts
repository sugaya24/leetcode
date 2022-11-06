function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return [];

  const map = new Map();
  for (let i = 0; i < p.length; i++) {
    map.set(p.charAt(i), map.get(p.charAt(i)) + 1 || 1);
  }

  let res: number[] = [];
  const curMap = new Map();
  let slow = 0;
  let fast = 0;
  while (fast < s.length) {
    if (fast < p.length - 1) {
      curMap.set(s.charAt(fast), curMap.get(s.charAt(fast)) + 1 || 1);
    } else {
      curMap.set(s.charAt(fast), curMap.get(s.charAt(fast)) + 1 || 1);

      let isValid = true;
      for (const [key, value] of map) {
        if (curMap.get(key) !== value) {
          isValid = false;
          break;
        }
      }
      if (isValid) res.push(slow);

      if (curMap.get(s.charAt(slow)) <= 1) {
        curMap.delete(s.charAt(slow));
      } else {
        curMap.set(s.charAt(slow), curMap.get(s.charAt(slow)) - 1);
      }

      slow++;
    }
    fast++;
  }
  return res;
}

export default findAnagrams;
