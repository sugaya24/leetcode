export function destCity(paths: string[][]): string {
  let flag = false;
  for (const [_, to] of paths) {
    flag = false;
    for (const [from, _] of paths) {
      if (from === to) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return to;
    }
  }
}
