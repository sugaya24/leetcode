function rearrangeCharacters(s: string, target: string): number {
  let count = 0;
  const map1 = new Map();
  const map2 = new Map();
  for (const c of s) {
    if (target.includes(c)) {
      map1.set(c, map1.get(c) + 1 || 1);
    }
  }
  for (const c of target) {
    map2.set(c, map2.get(c) + 1 || 1);
  }

  let flag = false;
  while (true) {
    for (const [key, value] of map2) {
      if (!map1.has(key)) {
        flag = true;
        break;
      }
      if (map1.get(key) < value) {
        flag = true;
      } else {
        map1.set(key, map1.get(key) - value);
      }
    }

    if (flag) {
      break;
    } else {
      count++;
    }
  }
  return count;
}

export default rearrangeCharacters;
