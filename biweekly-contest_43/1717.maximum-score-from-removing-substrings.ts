function maximumGain(s: string, x: number, y: number): number {
  if (x < y) {
    [x, y] = [y, x];
    s = s.split('').reverse().join('');
  }
  let count_a = 0,
    count_b = 0,
    res = 0;
  for (const char of s) {
    if (char === 'a') {
      count_a++;
    } else if (char === 'b') {
      if (count_a > 0) {
        res += x;
        count_a--;
      } else {
        count_b++;
      }
    } else {
      res += Math.min(count_a, count_b) * y;
      count_a = count_b = 0;
    }
  }
  res += Math.min(count_a, count_b) * y;
  return res;
}

console.log(maximumGain('cdbcbbaaabab', 4, 5)); // 19
console.log(maximumGain('aabbaaxybbaabb', 5, 4)); // 20
console.log(maximumGain('aaaaabbbbb', 1, 10)); // 5
