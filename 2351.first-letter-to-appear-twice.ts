function repeatedCharacter(s: string): string {
  const set = new Set();
  for (const c of s) {
    if (set.has(c)) {
      return c;
    } else {
      set.add(c);
    }
  }
  return '';
}

export default repeatedCharacter;
