export function sortString(s: string): string {
  let result = '';
  const sorted = s.split('').sort().join('');
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(sorted[i], map.get(sorted[i]) + 1 || 1);
  }

  let i = 0;
  let temp = '';
  let isEvenTimes = false;
  while (i < sorted.length) {
    temp = '';
    for (const [key, val] of map.entries()) {
      if (val > 0) {
        temp += key;
        map.set(key, val - 1);
      } else {
        map.delete(key);
      }
    }

    if (isEvenTimes) {
      result += temp.split('').reverse().join('');
    } else {
      result += temp;
    }
    i++;
    isEvenTimes = !isEvenTimes;
  }
  return result;
}
