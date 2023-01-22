function sortPeople(names: string[], heights: number[]): string[] {
  const map = new Map();
  for (let i = 0; i < heights.length; i++) {
    map.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);
  const ans: string[] = [];
  for (const height of heights) {
    ans.push(map.get(height));
  }
  return ans;
}

export default sortPeople;
