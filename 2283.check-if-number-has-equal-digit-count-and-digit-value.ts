function digitCount(num: string): boolean {
  const map = new Map();
  for (const n of num) {
    map.set(+n, map.get(+n) + 1 || 1);
  }
  return [...num].every((n, i) => {
    if (!map.get(i)) {
      return +n === 0;
    }
    return map.get(i) === +n;
  });
}

export default digitCount;
