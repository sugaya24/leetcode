export function destCity(paths: string[][]): string {
  const setFrom = new Set<string>();
  for (const [from, _] of paths) {
    setFrom.add(from);
  }
  for (let i = 0; i < paths.length; i++) {
    if (!setFrom.has(paths[i][1])) {
      return paths[i][1];
    }
  }
}
