function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const map = new Map();
  for (const [key, value] of items1) {
    map.set(key, value);
  }
  for (const [key, value] of items2) {
    map.set(key, map.get(key) + value || value);
  }
  return [...map.entries()].sort((a, b) => a[0] - b[0]);
}

export default mergeSimilarItems;
