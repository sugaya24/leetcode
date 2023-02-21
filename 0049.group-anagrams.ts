function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();
  for (const str of strs) {
    const sortedStr = str.split('').sort().join();
    const values = map.get(sortedStr) || [];
    values.push(str);
    map.set(sortedStr, values);
  }
  return [...map.values()];
}

export default groupAnagrams;
